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
            [goog.string :as gstring]))

(defonce timeout 100)
(defonce how-many-questions 10)
(defonce minimum-search-string-size 4)

(def global-filter (reagent/atom {:query ""}))

(defn to-timestamp [s]
  (js/Date. (.parse js/Date s)))

(defn to-locale-date [s]
  (when (string? s)
    (.toLocaleDateString
     (js/Date. (.parse js/Date s)))))

(def faq-questions
  (cljs.reader/read-string
   (inline "data/faq-questions.edn")))

(def faq-answers
  (map #(update % :m to-timestamp)
       (cljs.reader/read-string
        (inline "data/faq-answers.edn"))))

(re-frame/reg-event-db
 :initialize-db!
 (fn [_ _]
   {:questions      faq-questions
    :answers        faq-answers
    :display-answer nil
    :filter         {:query ""}}))

(re-frame/reg-event-db
 :display-answer!
 (fn [db [_ b]] (assoc db :display-answer b)))

(re-frame/reg-sub
 :display-answer?
 (fn [db _] (:display-answer db)))

(re-frame/reg-event-db
 :filter!
 ;; FIXME: (merge (:filter db) s) ?
 (fn [db [_ s]] (assoc db :filter s))) 

(re-frame/reg-sub
 :filter?
 (fn [db _] (:filter db)))

(defn apply-filter [m]
  (let [f @(re-frame/subscribe [:filter?])
        p (str "(?i).*(" (s/join ".*" (s/split (:query f) #"\s+")) ").*")]
    (if (not-empty (:query f))
      (sort-by
       :x
       (map
        #(if (not-empty (:query f))
           (let [question (:q %)]
             (when-let [match (re-matches (re-pattern p) question)]
               (let [matched (last match)
                     idx     (s/index-of question matched)]
                 (assoc %
                        :x idx
                        :q (s/replace
                            question (last match)
                            (str "<b>" (last match) "</b>"))))))
           %)
        m))
      (take how-many-questions (shuffle m)))))

(re-frame/reg-sub
 :filtered-faq?
 (fn [db _] (apply-filter (:questions db))))

(def filter-chan (async/chan))

(defn start-filter-loop []
  (async/go
    (loop [f (async/<! filter-chan)]
      (re-frame/dispatch [:filter! f])
      (recur (async/<! filter-chan)))))

(defn get-answer-from-id [id]
  (first (filter #(= (:i %) id) faq-answers)))

(defn display-questions []
  (let [questions (remove nil? @(re-frame/subscribe [:filtered-faq?]))]
    (if (not (empty? questions))
      [:table.table.is-hoverable.is-fullwidth
       [:thead [:tr [:th "Question"] [:th "Mise à jour"]]]
       [:tbody
        (for [question questions
              :let     [id (:i question)
                        text (:q question)]]
          ^{:key (random-uuid)}
          [:tr
           [:td [:a {:on-click #(re-frame/dispatch [:display-answer! id])}
                 [:span {:dangerouslySetInnerHTML {:__html text}}]]]
           [:td (to-locale-date (:m question))]])]]
      [:p "Aucune question n'a été trouvée : peut-être une faute de frappe ?"])))

(defn display-answer [a]
  [:div
   [:div.columns.is-vcentered
    [:div.column.is-multiline.is-9
     [:p [:strong.is-size-4 (:q a)]]]
    [:div.column.has-text-centered
     [:button.button.is-fullwidth.is-info.is-light
      {:on-click #(re-frame/dispatch [:display-answer! nil])}
      "Retour"]]
    ;; [:div.column.has-text-centered
    ;;  [:a.button.is-success.is-fullwidth
    ;;   {:on-click #(re-frame/dispatch [:display-answer! nil])}
    ;;   "Partager"]]
    ]
   [:br]
   [:p {:dangerouslySetInnerHTML {:__html (:r a)}}]
   [:br]
   [:p
    [:a {:href (str "http://" (:u a))} (:s a)]
    " - mise à jour du " (to-locale-date (:m a)) " - " (:c a)]])

(defn main-page []
  (let [answer-id @(re-frame/subscribe [:display-answer?])]
    [:div
     [:input.input
      {:size        20
       :placeholder "Recherche"
       :value       (or (:query @global-filter)
                        (:query @(re-frame/subscribe [:filter?])))
       :on-change   (fn [e]
                      (re-frame/dispatch [:display-answer! nil])
                      (let [ev      (.-value (.-target e))
                            ev-size (count ev)]
                        (reset! global-filter {:query ev})
                        (when (or (= ev-size 0)
                                  (>= ev-size minimum-search-string-size))
                          (async/go
                            (async/<! (async/timeout timeout))
                            (async/>! filter-chan {:query ev})))))}]
     [:br]
     [:br]
     (if answer-id
       (let [a (get-answer-from-id answer-id)]
         (display-answer a))
       (display-questions))]))

(defn ^:export init []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize-db!])
  (start-filter-loop)
  (reagent.dom/render
   [main-page]
   (. js/document (getElementById "app"))))
