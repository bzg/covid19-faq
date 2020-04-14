(defproject choices "0.1.0"

  :description "Frontend to display COVID19 FAQ"
  :url ""
  :license {:name "Eclipse Public License - v 2.0"
            :url  "http://www.eclipse.org/legal/epl-v20.html"}

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/tools.reader "1.3.2"]
                 [markdown-to-hiccup "0.6.2"]
                 [org.clojure/data.csv "1.0.0"]]

  ;; See https://www.deps.co/blog/how-to-upgrade-clojure-projects-to-use-java-11/
  :managed-dependencies [[org.clojure/core.rrb-vector "0.1.1"]
                         [org.flatland/ordered "1.5.9"]]

  :clean-targets ^{:protect false} ["target" "resources/public/js/dev/"
                                    "resources/public/js/choices.js"]

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
                                  [reagent-utils "0.3.3"]
                                  [cljsjs/clipboard "2.0.4-0"]
                                  [metosin/reitit-frontend "0.4.2"]]}})
