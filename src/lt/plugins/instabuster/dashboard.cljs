(ns lt.plugins.instabuster.dashboard
  (:require [lt.objs.editor :as ed]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.sidebar :as sidebar]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))


(defn project-name [config]
  (files/basename (files/parent config)))

(defui summary-ui [this res]
  [:div.summary
   [:br]
   [:span (str "Tests: " (:tests res))]
   [:span (str "Failures: " (:failures res))]
   [:span (str "Errors: " (:errors res))]
   [:br]
   [:span (str "Total: " (- (.now js/Date) (:test-init-at @this)) " ms")]
   [:span (str "Test: " (- (.now js/Date) (:suite-start-at @this)) " ms")]])


(defui failed-test-ui [res]
  [:li (str "(" (first (:status res)) "): " (:test res)) " (" (:test-case res) ")"
   [:ul
    [:li (:message res)]]])

(defui failed-ui [this]
  [:div.failed-tests
    [:h3 "Failed tests"]
    [:ul
     (map #(failed-test-ui %)
          (filter #(contains? #{"error" "failure"} (:status %)) (:test-results @this)))]])


(defui testprogress-ui [this res]
  (let [status (if (tests-ok? (:test-results @this)) "ok" "error")]
    [:div.buster-results
     [:h2 (str "Testresults for " (project-name (:config (first (:test-results @this)))))]
     [:div
       [:progress {:value (:executed-tests res) :max (:expected-tests res) :class status}]]
     [:p.curr-test (str (:executed-tests res) "/" (:expected-tests res) ": " (:test res) " (" (:test-case res) ")")]
     (failed-ui this)]))

(defui testinit-ui []
  [:div.buster-results
   [:h2 "Testresults"]
   [:p "Initializing testrun..."]])

(defui project-ui [data]
  [:div
   [:h2 "Project settings"]
   [:ul
     [:li (when-let [c (:conf data)] (str "Selected project: " (project-name c)))]
     [:li (str "Autotest on?: " (:autotest data))]]])


(defui wrapper [this]
  [:div.buster-dashboard {:style "overflow: scroll;"}
   [:h1.title "Buster dashboard"]
   [:div.result-container]
   [:div.project-container]])




(defn is-open? []
  (= (:active @sidebar/rightbar)
     dashboard))

(defn dashboard-toggle []
  (object/raise sidebar/rightbar :toggle dashboard))




(defn tests-ok? [results]
  (not (some #(contains? #{"error" "failure"} (:status %)) results)))


(behavior ::on-testrun-init
          :triggers #{:testrun.init}
          :reaction (fn [this]
                      (let [container (dom/$ :div.result-container (:content @this))]
                        (dom/empty container)
                        (object/merge!  this {:test-results [] :test-init-at (.now js/Date)})
                        (dom/append container (testinit-ui)))))

(behavior  ::on-suite-start
           :triggers #{:suite.start}
           :reaction (fn [this res]
                       (object/merge!  this {:test-results [] :suite-start-at (.now js/Date)})
                       (object/update! this [:test-results] conj res)))

(behavior ::on-test-result
          :triggers #{:test.result}
          :reaction (fn [this res]
                      (object/update! this [:test-results] conj res)
                      (let [container (dom/$ :div.result-container (:content @this))]
                        (dom/empty container)
                        (dom/append container (testprogress-ui this res)))))

(behavior ::on-suite-complete
          :triggers #{:suite.complete}
          :reaction (fn [this res]
                      (object/update! this [:test-results] conj res)
                      (let [container (dom/$ :div.result-container (:content @this))]
                        (dom/append container (summary-ui this res)))))

(behavior ::on-project-update
          :triggers #{:project.update}
          :reaction (fn [this data]
                      (let [container (dom/$ :div.project-container (:content @this))]
                        (dom/empty container)
                        (dom/append container (project-ui data)))))

(cmd/command {:command :buster-dashboard-toggle
              :desc "Buster: Toggle dashboard"
              :exec (fn []
                      (dashboard-toggle))})


(object/object* ::dashboard
                :tags #{:buster.dashboard}
                :label "Buster Dashboard"
                :init (fn [this]
                        (wrapper @this)))

(def dashboard (object/create ::dashboard))

(behavior ::init
          :triggers #{:object.instant}
          :desc "Buster: Init Buster Dashboard"
          :reaction (fn [this]
                      (sidebar/add-item sidebar/rightbar dashboard)))

