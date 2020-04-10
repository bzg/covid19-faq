(ns covid19faq.server)

(def home (slurp "resources/public/index.html"))

(defn handler [request]
  (if (and (= :get (:request-method request))
           (= "/"  (:uri request)))
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    home}
    {:status  404
     :headers {"Content-Type" "text/plain"}
     :body    "Not Found"}))
