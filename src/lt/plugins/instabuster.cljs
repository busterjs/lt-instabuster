(ns lt.plugins.instabuster
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.browser :as browser]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as ed]
            [lt.objs.console :as console]
            [lt.util.dom :as dom]
            [lt.objs.files :as files]
            [crate.binding :refer [bound subatom]]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs])
  (:require-macros [lt.macros :refer [defui behavior]]))


(object/object* ::buster-plugin
                :tags [:buster-plugin]
                :name "buster-plugin"'
                :behaviors [::on-buster-test ::on-buster-capture ::buster-connect])


(def buster (object/create ::buster-plugin))



(defn capture-browser! [this]
  (when-not (:browser @this)
    (let [cur-tab (tabs/active-tab)
          b (browser/add)]
      (object/merge! this {:browser b})
      (object/raise b :navigate! "http://localhost:1111/capture")
      (when cur-tab (tabs/active! cur-tab)))))



(cmd/command {:command ::buster-capture
              :desc "Buster: Capture browser"
              :exec (fn []
                      (capture-browser! buster))})

(defn show-test-results [err stdout stderr]
  (notifos/done-working "")
  (println (str stdout err)))

(defn find-buster-js [editor-info]
  (let [p (:path editor-info)
        roots (files/get-roots)]
    (loop [cur p
           prev ""]
      (if (or (empty? cur)
              (roots cur)
              (= cur prev))
        (assoc editor-info :buster-js nil)
        (if (and (files/dir? cur)
                 (files/exists? (files/join cur "buster.js")))
          (assoc editor-info :buster-js (files/join cur "buster.js"))
          (recur (files/parent cur) cur))))))



(behavior ::on-buster-test
          :triggers #{:buster.test}
          :reaction (fn[this args]
                      (if-let [conf (or (:buster-js @this) (:buster-js args))]
                        ((notifos/working "Running Buster tests")
                        (capture-browser! this)
                        (.exec (js/require "child_process")
                               (str "buster-test -c" conf
                                    " -r tap"
                                    (when-let [t (:path args)] (str " -t" t)))
                               show-test-results))
                        (console/error (str
                                        "No suitable buster config found."
                                        "None found for project (Connect: Buster) or based on path: " (:path args))))))



(cmd/command {:command ::buster-test-all
              :desc "Buster: Run all tests"
              :exec (fn []
                      (object/raise buster :buster.test {}))})

(cmd/command {:command ::buster-test-current
              :desc "Buster: Run tests for current editor"
              :exec (fn []
                      (when-let [editor (pool/last-active)]
                        (when (object/has-tag? editor :editor.javascript)
                          (object/raise buster :buster.test (find-buster-js (:info @editor))))))})

(behavior ::on-buster-test-one
          :triggers #{:change}
          :debounce 500
          :reaction (fn [editor]
                      (when (object/has-tag? editor :editor.buster.live)
                        (object/raise buster :buster.test (find-buster-js (:info @editor))))))

(behavior ::on-buster-browser-destroyed
          :triggers #{:close}
          :reaction (fn [browser]
                      (when (= (object/->id browser) (object/->id (:browser @buster)))
                        (object/merge! buster {:browser nil}))))



(defui live-toggler [this]
  [:span {:class (bound this #(str "livetoggler " (when-not (:live %) "off")))} "buster-live"]
  :click (fn [e]
           (dom/prevent e)
           (object/raise (:editor @this) :buster.live.toggle!)))

(defui wrapper [this]
  [:div#instarepl (live-toggler this)])

(object/object* ::buster-live-toggler
                :tags #{:buster.live.toggler}
                :name "Buster Live Mode Toggler"
                :live false
                :init (fn [this editor]
                        (when-not (:editor @this)
                          (when (-> @editor :tags :editor.javascript)
                            (wrapper this)
                            (object/merge! this {:editor editor})
                            (let [editor-content (object/->content editor)
                                  frame (dom/parent editor-content)
                                  toggler (wrapper this)]
                              (dom/append toggler editor-content)
                              (dom/append frame toggler))))))

(defn live-off [editor]
  (object/remove-tags editor [:editor.buster.live])
  (when-let [toggler (:buster.live.toggler @editor)] (object/merge! toggler {:live false})))

(defn live-on [editor]
  (when-not (:buster.live.toggler @editor)
    (let [toggler (object/create ::buster-live-toggler editor)]
      (object/merge! editor {:buster.live.toggler toggler})))
  (object/add-tags editor [:editor.buster.live])
  (object/merge! (:buster.live.toggler @editor) {:live true}))

(behavior ::buster-live-toggle!
          :triggers #{:buster.live.toggle!}
          :reaction (fn [editor]
                      (if (object/has-tag? editor :editor.buster.live)
                        (live-off editor)
                        (live-on editor))
                      (ed/focus editor)))

(cmd/command {:command :buster.toggle-live
              :desc "Buster: Toggle live mode"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :buster.live.toggle!)))})


;; Connect/Server
(behavior ::buster-connect
          :triggers #{:buster.connect}
          :reaction (fn [this path]
                      (object/merge! this {:buster-js path})))


(scl/add-connector {:name "Buster"
                    :desc "Please provide the location of buster.js for your javascript project"
                    :connect (fn []
                               (dialogs/file buster :buster.connect))})
