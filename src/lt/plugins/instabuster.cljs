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
            [lt.objs.dialogs :as dialogs]
            [lt.objs.plugins :as plugins]
            [lt.util.cljs :as cljs])
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
  (assoc editor-info :buster-js (files/walk-up-find (:path editor-info) "buster.js")))


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
                        (when (object/has-tag? editor :editor.buster)
                          (object/raise buster :buster.test (find-buster-js (:info @editor))))))})

(behavior ::on-buster-test-live
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
                          (when (-> @editor :tags :editor.buster)
                            (wrapper this)
                            (object/merge! this {:editor editor})
                            (let [editor-content (object/->content editor)
                                  frame (dom/parent editor-content)
                                  toggler (wrapper this)]
                              (dom/append toggler editor-content)
                              (dom/append frame toggler))))))

(defn maybe-add-toggler! [editor]
  (when-not (:buster.live.toggler @editor)
    (let [toggler (object/create ::buster-live-toggler editor)]
      (object/merge! editor {:buster.live.toggler toggler}))))

(defn live-off [editor]
  (object/remove-tags editor [:editor.buster.live])
  (when-let [toggler (:buster.live.toggler @editor)] (object/merge! toggler {:live false})))

(defn live-on [editor]
  (maybe-add-toggler! editor)
  (object/add-tags editor [:editor.buster.live])
  (object/merge! (:buster.live.toggler @editor) {:live true}))

(behavior ::buster-live-toggle!
          :triggers #{:buster.live.toggle!}
          :reaction (fn [editor]
                      (when (object/has-tag? editor :editor.buster)
                        (if (object/has-tag? editor :editor.buster.live)
                          (live-off editor)
                          (live-on editor)))
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

(def plugin-dir (plugins/find-plugin "InstaBuster"))
(def buster-cfg-path (files/join plugin-dir "node_modules/buster-configuration"))



(def whenjs (js/require (files/join buster-cfg-path "/node_modules/when")))


(defn wrap-group [path group]
  (let [d (.defer whenjs)]
    (.on group "load:tests" (fn [tests]
                              (.resolve d (.map tests (fn [test] (.-path test))))))
    (.then (.resolve group) #())
    d))

(defn wrap-groups [path groups]
  (clj->js (map (partial wrap-group path) groups)))

(defn rem-pre-sep[p]
  (clojure.string/replace-first p  #"^/" ""))

(defn is-buster-test [editor args]
  (let [cfg (js/require buster-cfg-path)
        c (cfg/loadConfigurationFile (:busterjs args))
        groups (filter #(= "browser" (.-environment %)) (.-groups c))
        path (files/relative (files/parent (:busterjs args)) (:path args))]
    (.then (.all whenjs (wrap-groups path groups)) (fn [results]
                                                       (when (some (fn [p] (= path (rem-pre-sep p)))(flatten (cljs/js->clj results)))
                                                         (object/raise editor :buster.test.editor))))))

(defn maybe-buster-test [editor]
  (when-let [busterjs (or (:buster-js (find-buster-js (:info @editor))) (:buster-js @buster))]
    (is-buster-test editor {:busterjs busterjs :path (-> @editor :info :path)})))


(behavior ::on-maybe-toggle-buster
          :triggers #{:active}
          :reaction (fn [editor]
                      (maybe-buster-test editor)))

(behavior ::buster-test-editor!
          :triggers #{:buster.test.editor}
          :reaction (fn [editor]
                      (object/add-tags editor [:editor.buster])
                      (maybe-add-toggler! editor)))
