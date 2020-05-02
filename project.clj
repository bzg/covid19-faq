(defproject choices "0.1.0"
  :description "Frontend to display COVID19 FAQ"
  :url ""
  :license {:name "Eclipse Public License - v 2.0"
            :url  "http://www.eclipse.org/legal/epl-v20.html"}

  :dependencies [[org.clojure/clojure "1.10.1"]]

  :clean-targets ^{:protect false} ["target" "resources/public/js/dev/"
                                    "resources/public/js/covid19faq.js"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]}

  :source-paths ["src/clj" "src/cljs"]
  
  :profiles {:dev {:source-paths ["src/cljs"]
                   :dependencies [[org.clojure/clojurescript "1.10.597"]
                                  [org.clojure/core.async "1.0.567"]
                                  [com.bhauman/figwheel-main "0.2.3"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]
                                  [re-frame "0.12.0"]
                                  [reagent "0.10.0"]
                                  [cljs-ajax "0.8.0"]
                                  [cljsjs/clipboard "2.0.4-0"]
                                  [metosin/reitit-frontend "0.4.2"]]}})
