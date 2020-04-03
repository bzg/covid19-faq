;; Copyright (c) 2020 DINSIC, Bastien Guerry <bastien.guerry@data.gouv.fr>
;; SPDX-License-Identifier: EPL-2.0
;; License-Filename: LICENSES/EPL-2.0.txt

(ns covid19faq.core
  (:require-macros [covid19faq.macros :refer [inline]])
  (:require [cljs.core.async :as async]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom]
            [covid19faq.i18n :as i]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [goog.labs.format.csv :as csv]))

(defonce init-filter {:q ""})

(defn rows->maps [csv]
  (let [headers (map keyword (first csv))
        rows    (rest csv)]
    (map #(zipmap headers %) rows)))

(def faq (rows->maps (js->clj (csv/parse (inline "data/faq.csv")))))

(re-frame/reg-event-db
 :initialize-db!
 (fn [_ _]
   {:view   :home
    :faq    faq
    :filter init-filter}))

(re-frame/reg-event-db
 :view!
 (fn [db [_ view]]
   (assoc db :view view)))

(re-frame/reg-event-db
 :filter!
 (fn [db [_ s]]
   (assoc db :filter (merge (:filter db) s))))

(re-frame/reg-sub
 :view?
 (fn [db _] (:view db)))

(re-frame/reg-sub
 :filter?
 (fn [db _] (:filter db)))

(defn apply-filter [m]
  (let [f @(re-frame/subscribe [:filter?])
        q (:q f)]
    (filter #(re-matches (re-pattern (str ".*" q ".*")) (:Question %)) m)))

(re-frame/reg-sub
 :filtered-faq?
 (fn [db _] (apply-filter (:faq db))))

(def filter-chan (async/chan))

(defn start-filter-loop []
  (async/go
    (loop [f (async/<! filter-chan)]
      (re-frame/dispatch [:filter! f])
      (recur (async/<! filter-chan)))))

(defn main-page []
  (let [view   @(re-frame/subscribe [:view?])
        filter @(re-frame/subscribe [:filter?])]
    [:div
     (condp = view
       :home
       [:div
        [:input.input
         {:size        20
          :placeholder "Recherche"
          :value       (:q @(re-frame/subscribe [:filter?]))
          :on-change   (fn [e]
                         (let [ev (.-value (.-target e))]
                           (async/go
                             (async/>! filter-chan {:q ev}))))}]
        [:br]
        [:br]
        [:ul.list
         (for [f @(re-frame/subscribe [:filtered-faq?])]
           ^{:key (random-uuid)}
           [:li.list-item [:p (:Question f)]])]])]))

(def routes
  [["/" :home]])

(defn on-navigate [match]
  (let [target-page (:name (:data match))]
    (re-frame/dispatch [:view! :home])))

(defn ^:export init []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize-db!])
  (start-filter-loop)
  (rfe/start!
   (rf/router routes {:conflicts nil})
   on-navigate
   {:use-fragment false})
  (reagent.dom/render
   [main-page]
   (. js/document (getElementById "app"))))
