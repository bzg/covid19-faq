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
  (let [headers (conj (butlast (first csv)) "Id")
        rows    (let [rows (rest csv)
                      acc  (atom nil)]
                  (dotimes [n (count rows)]
                    (swap! acc conj (cons (pr-str n) (nth rows n))))
                  @acc)]
    (map #(zipmap headers %) rows)))

(defn csv-as-map [csv]
  (map
   #(clojure.set/rename-keys
     %
     {"Id"          :i
      "﻿Source"      :s
      "URL"         :u
      "Mise à jour" :m
      "Catégorie"   :c
      "Question"    :q
      "Réponse"     :r})
   (rows->maps csv)))

(defn spit-faq-questions []
  (spit "data/faq-questons.edn"
        (pr-str (map #(select-keys % [:i :q])
                     (csv-as-map csv)))))

(defn spit-faq-reponses []
  (spit "data/faq-reponses.edn"
        (pr-str (map #(select-keys % [:i :s :u :r])
                     (csv-as-map csv)))))

(defn -main []
  (spit-faq-questions)
  (spit-faq-reponses))

;; (-main)

