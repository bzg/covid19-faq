;; Copyright (c) 2020 DINSIC, Bastien Guerry <bastien.guerry@data.gouv.fr>
;; SPDX-License-Identifier: EPL-2.0
;; License-Filename: LICENSES/EPL-2.0.txt

(ns covid19faq.i18n
  (:require [taoensso.tempura :refer [tr]]))

(def supported-languages #{"fr"})

(def localization
  ;; French translation
  {:fr
   {
    ;; FIXME: needed?
    }
   })

(def opts {:dict localization})

(defn i [lang input] (tr opts [lang] input))
