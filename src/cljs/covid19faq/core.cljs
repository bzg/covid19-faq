;; Copyright (c) 2020 DINSIC, Bastien Guerry <bastien.guerry@data.gouv.fr>
;; SPDX-License-Identifier: EPL-2.0
;; License-Filename: LICENSES/EPL-2.0.txt

(ns covid19faq.core
  (:require-macros [covid19faq.macros :refer [inline]])
  (:require [cljs.core.async :as async]
            [cljs.reader]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [reagent.dom]))

(def faq (cljs.reader/read-string (inline "data/faq.edn")))

(re-frame/reg-event-db
 :initialize-db!
 (fn [_ _] {:faq faq :filter {:q ""}}))

(re-frame/reg-event-db
 :filter!
 (fn [db [_ s]] (assoc db :filter (merge (:filter db) s))))

(re-frame/reg-sub
 :filter?
 (fn [db _] (:filter db)))

(defn apply-filter [m]
  (let [f @(re-frame/subscribe [:filter?])
        q (:q f)]
    (filter #(re-matches (re-pattern (str ".*" q ".*")) (:q %)) m)))

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
  (let [filter @(re-frame/subscribe [:filter?])]
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
        [:li.list-item [:p (:q f)]])]]))

(defn ^:export init []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize-db!])
  (start-filter-loop)
  (reagent.dom/render
   [main-page]
   (. js/document (getElementById "app"))))
