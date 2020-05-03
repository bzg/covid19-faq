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

(defonce timeout 150)
(defonce how-many-questions 12)
(defonce minimum-search-string-size 3)

(defonce faq-covid-19-api-url "http://localhost:3000")
(defonce faq-covid-19-data-url "https://bzg.github.io/covid19-faq-data/")
(defonce faq-covid-19-questions "faq-questions.json")
(defonce faq-covid-19-answers-dir "answers/")

(def token (atom nil))
(def stats (atom nil))

(def init-filter  {:query "" :source "" :sort "random" :faq ""})
(def global-filter (reagent/atom init-filter))

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

(defn apply-filter [m]
  (let [f   @(re-frame/subscribe [:filter?])
        s   (:sort f)
        q   (:query f)
        src (:source f)
        p   (str "(?i).*(" (s/join ".*" (s/split q #"\s+")) ").*")]
    (if-not (and (= q "") (= "" src))
      (filter #(and (if (not-empty src) (= src (:s %)) true))
              (sort-by
               :x
               (->> m
                    (map
                     #(if (not-empty q)
                        (let [question      (:q %)
                              match-against (str (:q %))]
                          (when-let [match (re-matches (re-pattern p) match-against)]
                            (let [matched (last match)
                                  idx     (s/index-of question matched)]
                              (assoc %
                                     :x idx
                                     :q (s/replace
                                         question (last match)
                                         (str "<b>" (last match) "</b>"))))))
                        %)))))
      (take how-many-questions
            (condp = s
              "note" (reverse (sort-by :n m))
              "hits" (reverse (sort-by :h m))
              (shuffle m))))))

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
                            (:sort @global-filter))] {:sort o})))
      (recur (async/<! filter-chan)))))

(defn display-questions []
  (let [questions (remove nil? @(re-frame/subscribe [:filtered-faq?]))]
    (if (seq questions)
      [:div.table-container
       [:table.table.is-hoverable.is-fullwidth.is-striped
        [:tbody
         (for [question questions
               :let     [id (:i question)
                         text (:q question)]]
           ^{:key (random-uuid)}
           [:tr
            [:td [:a {:tabIndex 0 :on-click #(rfe/push-state :home nil {:faq id})}
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
        [:a.button.is-fullwidth.is-light.is-size-5
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
    [:div.columns
     [:div.column.is-6
      [:a.button.is-fullwidth.is-success.is-light.is-size-5
       {:target "new"
        :title  (when m (str "Réponse en date du " (subs m 0 10)
                             " - cliquez pour consulter la source"))
        :href   u} (str "Source: " short-s)]]
     [:div.column.has-text-centered.is-3
      [:a.button.is-fullwidth.is-info.is-light.is-size-5
       {:title    "Lire d'autres questions de cette source"
        :on-click #(rfe/push-state :home nil {:source s})}
       "Questions de cette source"]]
     [:div.column.has-text-centered.is-2
      [:a.button.is-fullwidth.is-warning.is-light.is-size-5
       {:title "Envoyer la question et la réponse par email"
        :href  e-str} "📩"]]
     [:div.column.has-text-centered.is-1
      [clipboard-button "📋" "#copy-this"]]]))

(defn send-note [id note]
  (GET (str faq-covid-19-api-url "/note")
       {:format        :json
        :params        {:id    id
                        :token @token
                        :note  note}
        :handler       (fn [r] (prn r))
        :error-handler (fn [r] (prn r))}))

(defn display-call-to-note [id]
  [:div.columns
   [:div.column
    [:div.box
     [:div.columns.has-text-centered.is-size-3
      [:div.column
       [:a {:title    "Ça ne m'a pas été utile"
            :on-click #(send-note id "-1")} "😡"]]
      [:div.column
       [:a {:title    "Ça m'a été utile"
            :on-click #(send-note id "1")} "😃"]]]]]])

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
         [:div.column.has-text-centered
          [:a.delete.is-large
           {:title    "Fermer la question"
            :on-click #(rfe/push-state :home)}]]
         [:div.column.is-multiline.is-10
          [:p [:strong.is-size-4
               {:dangerouslySetInnerHTML {:__html (:q @answer)}}]]]
         (display-call-to-note id)]
        [:br]
        [:div.content {:dangerouslySetInnerHTML {:__html (:r @answer)}}]
        [:br]]
       (if-let [a @answer] [bottom-links a] [:br])])))

(defn faq-sources-select []
  [:select.select
   {:value     (or (:source @(re-frame/subscribe [:filter?])) "")
    :tabIndex  0
    :on-change (fn [e]
                 (let [ev (.-value (.-target e))]
                   (.focus (.getElementById js/document "search"))
                   (swap! global-filter merge {:query "" :source ev})
                   (async/go
                     (async/>! filter-chan {:query "" :source ev}))))}
   (for [s (distinct (map :s @(re-frame/subscribe [:faqs?])))]
     ^{:key (random-uuid)}
     [:option {:value s} (shorten-source-name s)])
   [:option {:value ""} "Tout"]])

(defn faq-sort-select [sort-type]
  [:select.select
   {:value     sort-type ;; (or (:sort @(re-frame/subscribe [:filter?])) "")
    :tabIndex  0
    :on-change (fn [e]
                 (let [ev (.-value (.-target e))]
                   (.focus (.getElementById js/document "search"))
                   (swap! global-filter merge {:query "" :sort ev})
                   (async/go
                     (async/>! filter-chan {:query "" :sort ev}))))}
   [:option {:value "random"} "Au hasard"]
   [:option {:value "note"} "Les mieux notées"]
   [:option {:value "hits"} "Les plus consultées"]])

(defn main-page []
  (let [filter    @(re-frame/subscribe [:filter?])
        answer-id (:faq filter)
        sort-type (:sort filter)]
    [:div
     [:div.columns.is-vcentered
      [:input.input.column.is-7
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
      [:div.column (faq-sources-select)]
      [:div.column (faq-sort-select sort-type)]]
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
  (let [target-page (:name (:data match))
        params      (:query-params match)]
    (re-frame/dispatch [:view! (keyword target-page) params])))

(defn ^:export init []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize-db!])
  (start-filter-loop)
  (rfe/start! (rf/router routes {:conflicts nil})
              on-navigate {:use-fragment true})
  (reagent.dom/render
   [main-class]
   (. js/document (getElementById "app")))
  (.focus (.getElementById js/document "search")))
