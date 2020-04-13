;; Copyright (c) 2020 DINUM, Bastien Guerry <bastien.guerry@data.gouv.fr>
;; SPDX-License-Identifier: EPL-2.0
;; License-Filename: LICENSES/EPL-2.0.txt

(ns covid19faq.core
  (:require-macros [covid19faq.macros :refer [inline]])
  (:require [cljs.core.async :as async]
            [cljs.reader]
            [clojure.string :as s]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom]
            [goog.string :as gstring]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [cljsjs.clipboard]))

(defonce timeout 100)
(defonce how-many-questions 10)
(defonce minimum-search-string-size 4)

;; (defn to-timestamp [s]
;;   (js/Date. (.parse js/Date s)))

(defn to-locale-date [s]
  (when (string? s)
    (.toLocaleDateString
     (js/Date. (.parse js/Date s)))))

(def faq-questions
  (map #(update % :m to-locale-date)
       (cljs.reader/read-string
        (inline "data/faq-questions.edn"))))

(def faq-answers
  (map #(update % :m to-locale-date)
       (cljs.reader/read-string
        (inline "data/faq-answers.edn"))))

(def faq-sources
  (cljs.reader/read-string
   (inline "data/faq-sources.edn")))

(def init-filter  {:query "" :source "" :faq ""})
(def global-filter (reagent/atom init-filter))

(re-frame/reg-event-db
 :initialize-db!
 (fn [_ _]
   {:questions faq-questions
    :answers   faq-answers
    :view      :home
    :filter    init-filter}))

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

(defn apply-filter [m]
  (let [f   @(re-frame/subscribe [:filter?])
        q   (:query f)
        src (:source f)
        cat (:category f)
        p   (str "(?i).*(" (s/join ".*" (s/split q #"\s+")) ").*")]
    (if-not (and (= q "") (= "" src))
      (filter #(and (if (not-empty src) (= src (:s %)) true))
              (sort-by
               :x
               (->> m
                    (map
                     #(if (not-empty q)
                        (let [question      (:q %)
                              match-against (str (:q %) " " (:s %) " " (:c %))]
                          (when-let [match (re-matches (re-pattern p) match-against)]
                            (let [matched (last match)
                                  idx     (s/index-of question matched)]
                              (assoc %
                                     :x idx
                                     :q (s/replace
                                         question (last match)
                                         (str "<b>" (last match) "</b>"))))))
                        %)))))
      (take how-many-questions (shuffle m)))))

(re-frame/reg-sub
 :filtered-faq?
 (fn [db _] (apply-filter (:questions db))))

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
                            (:source @global-filter))] {:source s})))
      (recur (async/<! filter-chan)))))

(defn get-answer-from-id [id]
  (first (filter #(= (:i %) id) faq-answers)))

(defn display-questions []
  (let [questions (remove nil? @(re-frame/subscribe [:filtered-faq?]))]
    (if (not (empty? questions))
      [:div.table-container
       [:table.table.is-hoverable.is-fullwidth.is-striped
        [:thead [:tr [:th "Source"] [:th "Question"] [:th "Mise à jour"]]]
        [:tbody
         (for [question questions
               :let     [id (:i question)
                         text (:q question)]]
           ^{:key (random-uuid)}
           [:tr
            [:td (:s question)]
            [:td [:a {:tabIndex 0 :on-click #(rfe/push-state :home nil {:faq id})}
                  [:span {:dangerouslySetInnerHTML {:__html text}}]]]
            [:td (:m question)]])]]]
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
        [:a.button.is-fullwidth.is-light.is-size-4
         {:title                 "Copier dans le presse papier"
          :data-clipboard-target target}
         label])})))

(defn email-link [question answer url]
  (str "mailto:"
       "?subject=" question
       "&body="
       (s/replace (str answer "\nSource officielle: " url)
                  #"[\n\t]" "%0D%0A%0D%0A")))

(defn display-answer [a]
  (do (.focus (.getElementById js/document "search"))
      [:div
       {:id "copy-this"}
       [:div.columns.is-vcentered
        [:div.column.is-multiline.is-9
         [:p [:strong.is-size-4 (:q a)]]]
        ;; TODO
        [:div.column.has-text-centered
         [:a.button.is-fullwidth.is-info.is-light.is-size-4
          {:href (email-link (:q a) (:r a)
                             (. (. js/document -location) -href))}
          "📩"]]
        [:div.column.has-text-centered
         [clipboard-button "📋" "#copy-this"]]
        [:div.column.has-text-centered
         [:button.button.is-fullwidth.is-warning.is-light.is-size-4
          {:on-click #(rfe/push-state :home)} "❌"]]]
       [:br]
       [:p {:dangerouslySetInnerHTML {:__html (:r a)}}]
       [:br]
       [:p
        [:a {:href (:u a)} (:s a)]
        " - mise à jour du " (:m a) " - " (:c a)]]))

(defn faq-sources-select []
  [:select.select
   {:value     (or (:source @(re-frame/subscribe [:filter?])) "")
    :tabIndex  0
    :on-change (fn [e]
                 (let [ev (.-value (.-target e))]
                   (.focus (.getElementById js/document "search"))
                   (reset! global-filter {:query "" :source ev})
                   (async/go
                     (async/>! filter-chan {:query "" :source ev}))))}
   (for [s faq-sources]
     ^{:key (random-uuid)}
     [:option {:value s} s])
   [:option {:value ""} "Tout"]])

(defn main-page []
  (let [answer-id (:faq @(re-frame/subscribe [:filter?]))]
    [:div
     [:div.columns.is-vcentered
      [:input.input.column.is-8
       {:id          "search"
        :tabIndex    0
        :size        20
        :placeholder "Recherche"
        :value       (or (:query @global-filter)
                         (:query @(re-frame/subscribe [:filter?])))
        :on-change   (fn [e]
                       (let [ev      (.-value (.-target e))
                             ev-size (count ev)]
                         (reset! global-filter (merge @global-filter {:query ev}))
                         (when (or (= ev-size 0)
                                   (>= ev-size minimum-search-string-size))
                           (async/go
                             (async/<! (async/timeout timeout))
                             (async/>! filter-chan {:query ev})))))}]
      [:div.column (faq-sources-select)]]
     [:br]
     (if (not-empty answer-id)
       (let [a (get-answer-from-id answer-id)]
         (display-answer a))      
       (display-questions))]))

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
   [main-page]
   (. js/document (getElementById "app")))
  (.focus (.getElementById js/document "search")))
