(ns lt.plugins.instabuster.templates
  (:require [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as ed]
            [lt.objs.command :as cmd]))

(def buster-tc
  (str "(function ()  {\n"
       "  buster.testCase(\"\", {\n"
       "  });\n"
       "}());"))

(def buster-t
  (str "\"\": function() {},"))

(cmd/command {:command :create-buster-tc
              :desc "Buster: New TestCase"
              :exec (fn []
                      (let [editor (pool/last-active)
                            pos (ed/->cursor editor)]
                        (ed/insert-at-cursor editor buster-tc)
                        (ed/move-cursor editor (-> pos
                                                (update-in [:line] inc)
                                                (update-in [:ch] (partial inc 18))))))})



(cmd/command {:command :create-buster-t
              :desc "Buster: New Test"
              :exec (fn []
                      (let [editor (pool/last-active)
                            pos (ed/->cursor editor)]
                        (ed/insert-at-cursor editor buster-t)
                        (ed/move-cursor editor (-> pos
                                                (update-in [:ch] (partial inc))))))})
