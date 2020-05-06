;; Copyright (c) 2020 DINUM, Bastien Guerry <bastien.guerry@data.gouv.fr>
;; SPDX-License-Identifier: EPL-2.0
;; License-Filename: LICENSES/EPL-2.0.txt

(ns covid19faq.core
  (:require [cljs.core.async :as async]
            [clojure.string :as s]
            [ajax.core :refer [GET]]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom]
            [clojure.walk :as walk]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [cljsjs.clipboard]))

(defonce dev? false)

(defonce timeout 150)
(defonce number-of-random-questions 12)
(defonce number-of-sorted-questions 100)
(defonce minimum-search-string-size 3)

(defonce faq-covid-19-api-url
  (if dev?
    "http://localhost:3000"
    "https://api.covid19-faq.fr"))

(defonce faq-covid-19-data-url "https://bzg.github.io/covid19-faq-data/")
(defonce faq-covid-19-questions "faq-questions.json")
(defonce faq-covid-19-answers-dir "answers/")

(def token (atom nil))
(def stats (atom nil))
(def noted (atom {}))

(def init-filter  {:query "" :source "" :sorting "" :faq ""})
(def global-filter (reagent/atom init-filter))

(defn set-focus-on-search []
  (.focus (.getElementById js/document "search")))

(defn clean-state [m]
  (apply dissoc m (for [[k v] m :when (empty? v)] k)))

(defn set-item!
  "Set `key` in browser's localStorage to `val`."
  [key val]
  (.setItem (.-localStorage js/window) key (.stringify js/JSON (clj->js val))))

(defn get-item
  "Return the value of `key` from browser's localStorage."
  [key]
  (js->clj (.parse js/JSON (.getItem (.-localStorage js/window) key))))

(defn remove-item!
  "Remove the browser's localStorage value for the given `key`."
  [key]
  (.removeItem (.-localStorage js/window) key))

(re-frame/reg-event-db
 :initialize-db!
 (fn [_ _]
   {:faqs   nil
    :view   :home
    :filter init-filter}))

(re-frame/reg-event-db
 :view!
 (fn [db [_ view query-params]]
   (reset! global-filter (merge init-filter query-params))
   (re-frame/dispatch [:filter! (merge init-filter query-params)])
   (assoc db :view view)))

(re-frame/reg-sub
 :view?
 (fn [db _] (:view db)))

(re-frame/reg-event-db
 :filter!
 (fn [db [_ s]] (assoc db :filter (merge (:filter db) s))))

(re-frame/reg-sub
 :filter?
 (fn [db _] (:filter db)))

(re-frame/reg-event-db
 :faqs!
 (fn [db [_ faqs]] (assoc db :faqs faqs)))

(re-frame/reg-sub
 :faqs?
 (fn [db _] (:faqs db)))

(defn add-match-index [{:keys [q] :as item} pattern]
  (when-let [matched (last (re-matches pattern q))]
    (let [idx (s/index-of q matched)]
      (assoc item
             :x idx
             :q (s/replace q matched (str "<b>" matched "</b>"))))))

(defn apply-sorting [{:keys [sorting query source]} m]
  (condp = sorting
    "note" (take number-of-sorted-questions (reverse (sort-by :n m)))
    "hits" (take number-of-sorted-questions (reverse (sort-by :h m)))
    (if (and (empty? query) (empty? source))
      (take number-of-random-questions (shuffle m))
      m)))

(defn apply-filter [m]
  (let [{:keys [sorting query source] :as f}
        @(re-frame/subscribe [:filter?])
        q (-> query
              (s/replace #"(?i)e" "[éèëêe]")
              (s/replace #"(?i)a" "[æàâa]")
              (s/replace #"(?i)o" "[œöôo]")
              (s/replace #"(?i)c" "[çc]")
              (s/replace #"(?i)u" "[ûùu]"))
        p (re-pattern
           (str "(?i).*(" (s/join ".*" (s/split q #"\s+")) ").*"))]
    (->> (if (not-empty query)
           (sort-by :x (map #(add-match-index % p) m))
           m)
         (filter #(if (not-empty source) (= source (:s %)) identity))
         (apply-sorting f))))

(re-frame/reg-sub
 :filtered-faq?
 (fn [db _] (apply-filter @(re-frame/subscribe [:faqs?]))))

(def filter-chan (async/chan))

(defn start-filter-loop []
  (async/go
    (loop [f (async/<! filter-chan)]
      (re-frame/dispatch [:filter! f])
      (rfe/push-state
       :home nil
       (merge (when-let [q (not-empty
                            (:query @global-filter))] {:query q})
              (when-let [s (not-empty
                            (:source @global-filter))] {:source s})
              (when-let [o (not-empty
                            (:sorting @global-filter))] {:sorting o})))
      (recur (async/<! filter-chan)))))

(defn display-questions []
  (let [questions (remove nil? @(re-frame/subscribe [:filtered-faq?]))]
    (if (seq questions)
      [:div.table-container
       [:table.table.is-hoverable.is-fullwidth
        [:tbody
         (for [question questions
               :let     [id (:i question)
                         text (:q question)]]
           ^{:key (random-uuid)}
           [:tr
            [:td [:a {:tabIndex 0
                      :on-click #(rfe/push-state
                                  :home nil
                                  (clean-state
                                   (merge @global-filter {:faq id})))}
                  [:span
                   {:dangerouslySetInnerHTML {:__html text}}]]]])]]]
      [:p "Aucune question n'a été trouvée : peut-être une faute de frappe ?"])))

;; Create a copy-to-clipboard component
(defn clipboard-button [label target]
  (let [clipboard-atom (reagent/atom nil)]
    (reagent/create-class
     {:display-name "clipboard-button"
      :component-did-mount
      #(let [clipboard (new js/ClipboardJS (reagent.dom/dom-node %))]
         (reset! clipboard-atom clipboard))
      :component-will-unmount
      #(when-not (nil? @clipboard-atom)
         (reset! clipboard-atom nil))
      :reagent-render
      (fn []
        [:a.button.is-fullwidth.is-size-5
         {:title                 "Copier dans le presse papier"
          :data-clipboard-target target}
         label])})))

(defn strip-html [s]
  (-> s
      (s/replace #"<br/?>" "\n")
      (s/replace #"</?[^>]+>" "")))

(defn shorten-source-name [s]
  (condp = s
    "Société Française de Pharmacologie et de Thérapeutique"
    "Société Française de Pharmacologie"
    s))

(defn bottom-links [{:keys [q r s u m]}]
  (let [url     (.-href (.-location js/document))
        short-s (shorten-source-name s)
        e-str   (when (and q r u url)
                  (str "mailto:"
                       "?subject=[COVID-19] " q
                       "&body="
                       (s/replace
                        (str (strip-html r)
                             "\nSource officielle : " u
                             "\nEnvoyé depuis : " url)
                        #"[\n\t]" "%0D%0A%0D%0A")))]
    [:div.tile.is-ancestor
     [:div.tile.is-parent
      [:a.button.is-success.is-fullwidth.is-light.is-size-5
       {:target "new"
        :title  (when m (str "Réponse en date du " (subs m 0 10)
                             " - cliquez pour consulter la source"))
        :href   u} short-s]]
     [:div.tile.is-parent.has-text-centered.is-1
      [:a.button.is-fullwidth.is-size-5
       {:title "Envoyer la question et la réponse par email"
        :href  e-str} "📩"]]
     [:div.tile.is-parent.has-text-centered.is-1
      [clipboard-button "📋" "#copy-this"]]]))

(defn send-note [id note]
  (GET (str faq-covid-19-api-url "/note")
       {:format :json
        :params {:id    id
                 :token @token
                 :note  note}
        :handler
        (fn [r] (condp = (:response (walk/keywordize-keys r))
                  "OK" (do (swap! noted conj {id note})
                           (set-item! :noted @noted)
                           (println "Note stored"))
                  (println "Error while sending the note")))
        :error-handler
        (fn [r] (prn (:response (walk/keywordize-keys r))))}))

(defn display-call-to-note [id & [inactive?]]
  (let [ok    [:span.icon [:i.far.fa-2x.fa-smile]]
        notok [:span.icon [:i.far.fa-2x.fa-angry]]
        space "   "]
    (if inactive?
      [:div.tile.is-parent
       [:a.tile {:title "Mon appréciation précédente"}
        (if (= "1" (get (get-item :noted) id)) ok notok)]
       [:a.tile {:title    "Je veux revoter !"
                 :on-click #(swap! noted dissoc id)}
        [:span.icon [:i.fas.fa-undo]]]]
      [:div.tile.is-parent
       [:a.tile.is-parent
        {:title    "Ça m'a été utile !"
         :on-click #(send-note id "1")} ok]
       [:a.tile.is-parent
        {:title    "Ça ne m'a pas été utile..."
         :on-click #(send-note id "-1")} notok]])))

(defn display-answer [id]
  (let [answer (reagent/atom {})
        a-url  (str faq-covid-19-data-url
                    faq-covid-19-answers-dir
                    id ".json")]
    (fn []
      (GET a-url :handler #(reset! answer (walk/keywordize-keys %)))
      [:div
       [:article
        {:id "copy-this"}
        [:div.columns.is-vcentered
         [:div.column.is-1.has-text-centered
          [:a.delete.is-large
           {:title    "Revenir aux autres questions"
            :on-click #(do (rfe/push-state
                            :home nil
                            (clean-state (dissoc @global-filter :faq)))
                           (set-focus-on-search))}]]
         [:div.column.is-multiline.is-9
          [:p [:strong.is-size-4
               {:dangerouslySetInnerHTML {:__html (:q @answer)}}]]]
         [:div.column.is-2
          (if (contains? @noted id)
            (display-call-to-note id "inactive")
            (display-call-to-note id))]]
        [:br]
        [:div.content {:dangerouslySetInnerHTML {:__html (:r @answer)}}]
        [:br]]
       (if-let [a @answer] [bottom-links a] [:br])])))

(defn faq-sources-select []
  [:div.select
   [:select
    {:value     (or (:source @(re-frame/subscribe [:filter?])) "")
     :tabIndex  0
     :on-change (fn [e]
                  (let [ev (.-value (.-target e))]
                    (set-focus-on-search)
                    (swap! global-filter merge {:query "" :source ev})
                    (async/go
                      (async/>! filter-chan {:query "" :source ev}))))}
    [:option {:value ""} "Toutes les questions"]
    (for [s (distinct (map :s @(re-frame/subscribe [:faqs?])))]
      ^{:key (random-uuid)}
      [:option {:value s} (shorten-source-name s)])]])

(defn faq-sort-select [sort-type]
  [:div.select
   [:select
    {:value     sort-type
     :tabIndex  0
     :on-change (fn [e]
                  (let [ev (.-value (.-target e))]
                    (set-focus-on-search)
                    (swap! global-filter merge {:query "" :sorting ev})
                    (async/go
                      (async/>! filter-chan {:query "" :sorting ev}))))}
    [:option {:value ""} "Au hasard"]
    [:option {:value "note"} "Les mieux notées"]
    [:option {:value "hits"} "Les plus consultées"]]])

(defn main-page []
  (let [filter    @(re-frame/subscribe [:filter?])
        answer-id (:faq filter)
        sort-type (:sorting filter)]
    [:div
     [:div.columns.is-vcentered
      [:input.input.column.is-6
       {:id          "search"
        :tabIndex    0
        :size        20
        :placeholder "Recherche"
        :value       (or (:query @global-filter)
                         (:query @(re-frame/subscribe [:filter?])))
        :on-change   (fn [e]
                       (let [ev      (.-value (.-target e))
                             ev-size (count ev)]
                         (swap! global-filter merge {:query ev})
                         (when (or (= ev-size 0)
                                   (>= ev-size minimum-search-string-size))
                           (async/go
                             (async/<! (async/timeout timeout))
                             (async/>! filter-chan {:query ev})))))}]
      [:div.column.is-3 (faq-sources-select)]
      [:div.column.is-2 (faq-sort-select sort-type)]
      [:div.column.is-1
       [:a.delete.is-medium
        {:title    "Effacer tous les filtres"
         :on-click #(do (rfe/push-state :home)
                        (set-focus-on-search))}]]]
     [:br]
     (if (not-empty answer-id)
       (do (GET (str faq-covid-19-api-url "/hit")
                {:format        :json
                 :params        {:token @token
                                 :id    answer-id}
                 :handler       (fn [r] (prn r))
                 :error-handler (fn [r] (prn r))})
           [display-answer answer-id])
       [display-questions])]))

(defn faq-with-stats [m]
  (map
   (fn [{:keys [i] :as faq}]
     (merge faq {:h (get-in @stats [(keyword i) :hits])
                 :n (get-in @stats [(keyword i) :note :mean])}))
   (walk/keywordize-keys m)))

(defn main-class []
  (reagent/create-class
   {:component-did-mount
    (fn []
      (GET (str faq-covid-19-api-url "/stats")
           :handler
           #(reset! stats (walk/keywordize-keys %)))
      (GET (str faq-covid-19-api-url "/token")
           :handler
           #(reset! token (or (:token (walk/keywordize-keys %)) "")))
      (GET (str faq-covid-19-data-url faq-covid-19-questions)
           :handler
           #(re-frame/dispatch [:faqs! (faq-with-stats %)])))
    :reagent-render #(main-page)}))

(def routes
  [["" :home]])

(defn on-navigate [match]
  (re-frame/dispatch [:view! :home (:query-params match)]))

(defn ^:export init []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize-db!])
  (start-filter-loop)
  (rfe/start! (rf/router routes {:conflicts nil})
              on-navigate {:use-fragment true})
  (reagent.dom/render
   [main-class]
   (. js/document (getElementById "app")))
  (set-focus-on-search))
