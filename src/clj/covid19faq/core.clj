(ns covid19faq.core
  (:require
   [clojure.data.csv :as csv]
   [clojure.set]
   [clojure.string :as s]
   [covid19faq.index :as index]
   [clojure.java.io :as io]))

(def latest-csv-path "data/sources/exemple.csv")

(def url-regex #"(?i)\b((?:([a-z][\w-]+:(?:/{1,3}|[a-z0-9%]))|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))")

;; "07/04/2020 00:00" => "2020-04-07T00:00:00Z"
(defn fix-date [s]
  (s/replace s #"(?i)([0-9]{2})/([0-9]{2})/([0-9]{4}) ([0-9]{2}):([0-9]{2})"
             "$3-$2-$1T$4:$5:00Z"))

(defn fix-capital [s]
  (s/replace s #"(\. )([a-z])" #(s/upper-case (first %))))

(defn fix-unbreakable-space [s]
  (s/replace s " ?" " ?"))

(defn make-br [s]
  (s/replace s "\n" "<br/>"))

(defn linkify [s]
  (s/replace s url-regex "<a target=\"new\" href=\"$1\">$1</a>"))

(def csv
  (with-open [reader (io/reader latest-csv-path)]
    (doall (csv/read-csv reader :separator \;))))

(defn rows->maps [csv]
  (let [headers (cons "Id" (first csv))
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
      "Réponse"     :r
      "Mise à jour" :m
      "Catégorie"   :c
      "Question"    :q})
   (rows->maps csv)))

(def csv-map (csv-as-map csv))

(defn spit-faq-questions []
  (spit "data/faq-questions.edn"
        (pr-str
         (->> csv-map
              (map #(update % :q fix-unbreakable-space))
              (map #(update % :q fix-capital))
              (map #(update % :m fix-date))
              (map #(select-keys % [:i :q :m :c :s]))))))

(defn spit-faq-answers []
  (spit "data/faq-answers.edn"
        (pr-str
         (->> csv-map
              (map #(update % :m fix-date))
              (map #(update % :q fix-capital))
              (map #(update % :r (comp linkify make-br)))
              (map #(select-keys % [:i :s :u :r :m :c :q]))))))

(defn spit-faq-sources []
  (spit "data/faq-sources.edn"
        (pr-str (distinct (map :s csv-map)))))

(defn spit-faq-categories []
  (spit "data/faq-categories.edn"
        (pr-str (distinct (map :c csv-map)))))

(defn spit-index []
  (spit "resources/public/index.html"
        (index/default)))

(defn -main []
  (spit-index)
  (spit-faq-questions)
  (spit-faq-sources)
  (spit-faq-categories)
  (spit-faq-answers))

;; (-main)

