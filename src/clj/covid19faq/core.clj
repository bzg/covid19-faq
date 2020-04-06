(ns covid19faq.core
  (:require ;; [cheshire.core :as json]
             [clojure.data.csv :as csv]
             [clojure.set]
             [clojure.java.io :as io]))

(def latest-csv-path "data/sources/2020.04.04_-_FAQ_gouvernement_V5.csv")

(def csv
  (with-open [reader (io/reader latest-csv-path)]
    (doall
     (csv/read-csv reader :separator \; :quote \"))))

(defn rows->maps [csv]
  (let [headers (butlast (first csv))
        rows    (rest csv)]
    (map #(zipmap headers %) rows)))

(defn csv-as-map [csv] (rows->maps csv))

(defn -main []
  (spit "data/faq.edn"
        (pr-str
         (map
          #(clojure.set/rename-keys
            %
            {"﻿Source"      :s
             "URL"         :u
             "Mise à jour" :m
             "Catégorie"   :c
             "Question"    :q
             "Réponse"     :r})
          (csv-as-map csv)))))
