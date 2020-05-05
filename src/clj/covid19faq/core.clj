(ns covid19faq.core
  (:require [hiccup.page :as h]))

(def index-meta
  {:index-title "FAQ Covid-19 - Questions et réponses de l'administration publique"
   :title       "FAQ Covid-19"
   :subtitle    "Les questions et réponses de l'administration publique."
   :keywords    "Covid-19 coronavirus questions réponses administration publique"
   :description "FAQ Covid-19 - Questions et réponses de l'administration publique"
   :base-url    "/"
   :email       "bzg@bzg.fr"
   })

(defn head []
  [:head
   [:title (:index-title index-meta)]
   [:meta {:charset "utf-8"}]
   [:meta {:name "keywords" :content (:keywords index-meta)}]
   [:meta {:name "description" :content (:description index-meta)}]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1, shrink-to-fit=yes"}]
   [:link {:rel "canonical" :href (:base-url index-meta)}]
   [:meta {:property "og:locale", :content "fr_FR"}]
   [:meta {:property "og:type", :content "meta"}]
   [:meta {:property "og:title", :content (:index-title index-meta)}]
   [:meta {:property "og:url", :content (:base-url index-meta)}]
   [:meta {:property "og:site_name", :content (:index-title index-meta)}]
   [:meta {:name "twitter:card", :content "summary_large_image"}]
   [:meta {:name "twitter:title", :content (:index-title index-meta)}]
   [:meta {:name "twitter:site", :content ""}]
   [:meta {:name "twitter:creator", :content ""}]
   (h/include-css "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css")
   (h/include-css "css/style.css")
   [:script {:src "js/covid19faq.js"}]])

(defn footer []
  [:footer.footer
   [:div.columns
    [:div.column.is-6.is-offset-3
     [:div.tile.is-ancestor.has-text-centered
      [:div.tile.is-parent
       [:h1.title.is-family-monospace
        [:a.has-text-dark
         {:title "Retour à la page d'accueil"
          :href  "/"} "FAQ Covid-19"]]]
      [:div.tile.is-parent.is-1
       [:a {:href  "https://twitter.com/bzg2"
            :title "Me suivre sur Twitter"}
        [:span.icon [:i.fab.fa-2x.fa-twitter]]]]
      [:div.tile.is-parent.is-1
       [:a {:href  "https://github.com/bzg/covid19-faq"
            :title "Voir le code source de ce site"}
        [:span.icon [:i.fab.fa-2x.fa-github]]]]
      [:div.tile.is-parent.is-1
       [:a {:href  (str "mailto:" (:email index-meta))
            :title "M'envoyer un mail (bzg@bzg.fr)"}
        [:span.icon [:i.fas.fa-2x.fa-envelope]]]]]
     [:br]
     [:p "Ce site est une <a target=\"new\" href=\"https://bzg.fr\">initiative personnelle</a> reprenant mot à mot les questions et réponses des sites de l'administration.  Certaines questions peuvent manquer de contexte : référez-vous toujours aux sites officels en cas de doute."]
     [:br]
     [:p "J'espère que cela vous aidera à trouver des réponses.  Je ne peux en rien être tenu responsable du mauvais usage des contenus présentés ici."]]]])

(defn default []
  (h/html5
   {:lang "fr"}
   (head)
   [:body
    [:section.hero
     [:div.hero-body
      [:div.container
       [:h1.title.has-text-centered.is-family-monospace
        [:a.has-text-dark
         {:title "Retour à la page d'accueil"
          :href  "/"}
         (:title index-meta)]]
       [:h2.subtitle.column.is-8.is-offset-2.has-text-centered
        (:subtitle index-meta)]]]]
    [:section.section
     [:div.column.is-8.is-offset-2
      [:div {:id "app"}]]]
    [:script {:async true} "covid19faq.core.init();"]
    [:script "(function(f, a, t, h, o, m){
a[h]=a[h]||function(){
(a[h].q=a[h].q||[]).push(arguments)
};
o=f.createElement('script'),
m=f.getElementsByTagName('script')[0];
o.async=1; o.src=t; o.id='fathom-script';
m.parentNode.insertBefore(o,m)
})(document, window, '//stats.bzg.fr/tracker.js', 'fathom');
fathom('set', 'siteId', 'TRHXR');
fathom('trackPageview');"]
    (footer)]))

(defn -main []
  (spit "resources/public/index.html" (default)))
