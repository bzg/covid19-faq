(ns covid19faq.core
  (:require ;; [cheshire.core :as json]
   [clojure.data.csv :as csv]
   [clojure.set]
   [clojure.java.io :as io]))

(def latest-csv-path "data/sources/2020.04.06_-_FAQ_gouvernement_V8.csv")

(def url-regex #"(?i)\b((?:([a-z][\w-]+:(?:/{1,3}|[a-z0-9%]))|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))")

(defn linkify [s]
  (clojure.string/replace s url-regex "<a target=\"new\" href=\"$1\">$1</a>"))

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

(defn spit-faq-questions []
  (spit "data/faq-questions.edn"
        (pr-str (map #(select-keys % [:i :q])
                     (csv-as-map csv)))))

(defn spit-faq-answers []
  (spit "data/faq-answers.edn"
        (pr-str (map #(select-keys % [:i :s :u :r :m :c :q])
                     (map #(update % :r linkify)
                          (csv-as-map csv))))))

(defn -main []
  (spit-faq-questions)
  (spit-faq-answers))

;; (-main)

