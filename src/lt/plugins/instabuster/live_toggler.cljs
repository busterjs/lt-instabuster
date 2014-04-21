(ns lt.plugins.instabuster.live-toggler
  (:require [lt.object :as object]
            [crate.binding :as crate]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui]]))


(defui live-toggler [this]
  [:span {:class (crate/bound this #(str "livetoggler " (when-not (:live %) "off")))} "buster-live"]
  :click (fn [e]
           (dom/prevent e)
           (object/raise (:editor @this) :live.toggle!)))

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

(defn maybe-add-toggler [editor]
  (when-not (:buster.live.toggler @editor)
    (let [toggler (object/create ::buster-live-toggler editor)]
      (object/merge! editor {:buster.live.toggler toggler}))))

(defn live-off [editor]
  (object/remove-tags editor [:editor.buster.live])
  (when-let [toggler (:buster.live.toggler @editor)] (object/merge! toggler {:live false})))

(defn live-on [editor]
  (maybe-add-toggler editor)
  (object/add-tags editor [:editor.buster.live])
  (object/merge! (:buster.live.toggler @editor) {:live true}))
