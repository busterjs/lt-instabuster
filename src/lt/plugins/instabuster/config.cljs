(ns lt.plugins.instabuster.config
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.util.cljs :as cljs]))


(def plugin-dir (plugins/find-plugin "InstaBuster"))
(def buster-module-dir (files/join plugin-dir "node_modules/buster/node_modules"))

(defn find-buster-js [editor-info]
  (assoc editor-info :buster-js (files/walk-up-find (:path editor-info) "buster.js")))


(def buster-cfg-path (files/join buster-module-dir "buster-configuration"))
(def whenjs (js/require (files/join buster-module-dir "/when")))

(defn resolve-buster-js [editor]
  (or (:buster-js (find-buster-js (:info @editor))) (:buster-js @buster)))

(defn load-buster-cfg [busterjs]
  (.loadConfigurationFile (js/require buster-cfg-path) busterjs))

(defn relative-to [file path]
  (files/relative (files/parent file) path))

(defn rem-pre-sep[p]
  (clojure.string/replace-first p  #"^/" ""))

(defn resolve-browser-groups [busterjs]
  (.-groups (.filterEnv (load-buster-cfg busterjs) "browser")))

(defn resolve-tests [groups]
  (cljs/clj->js
   (map
    (fn [group]
      (let [d (.defer whenjs)]
        (.on group "load:tests" (fn [tests] (.resolve d (.map tests #(.-path %)))))
        (.then (.resolve group) #())
        d))
    groups)))

(defn maybe-buster-test [editor callback]
  (when-let [busterjs (resolve-buster-js editor)]
    (let [path (relative-to busterjs (-> @editor :info :path))]
      (->
       (.all whenjs (->> (resolve-browser-groups busterjs)
                         (resolve-tests)))
       (.then
        (fn [results]
          (when (some #(= path (rem-pre-sep %)) (flatten (cljs/js->clj results)))
            (callback))))))))

(defn paths-from-resourceSets [resourceSets]
  (flatten (map #(cljs/js->clj (.map % (fn [res] (.-path res)))) resourceSets)))

(defn maybe-buster-file [editor callback]
  (when-let [busterjs (resolve-buster-js editor)]
    (let [path (relative-to busterjs (-> @editor :info :path))]
      (->
       (.all whenjs (clj->js (map #(.resolve %) (resolve-browser-groups busterjs))))
       (.then
        (fn [rs]
          (when (some #(= path (rem-pre-sep %)) (paths-from-resourceSets rs))
            (callback))))))))
