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

(defui summary-ui [res]
  [:div.summary
   [:br]
   [:span (str "Tests: " (:tests res))]
   [:span (str "Failures: " (:failures res))]
   [:span (str "Errors: " (:errors res))]
   [:br]
   [:span (str "Total: " (- (.now js/Date) (:test-init-at @dashboard)) " ms")]
   [:span (str "Test: " (- (.now js/Date) (:suite-start-at @dashboard)) " ms")]])


(defui failed-test-ui [res]
  [:li (str "(" (first (:status res)) "): " (:test res)) " (" (:test-case res) ")"
   [:ul
    [:li (:message res)]]])

(defui failed-ui []
  [:div.failed-tests
    [:h2 "Failed tests"]
    [:ul
     (map #(failed-test-ui %)
          (filter #(contains? #{"error" "failure"} (:status %)) (:test-results @dashboard)))]])


(defui testprogress-ui [res]
  (let [status (if (tests-ok? (:test-results @dashboard)) "ok" "error")]
    [:div.buster-results
     [:h1 (str "Testresults for " (project-name (:config (first (:test-results @dashboard)))))]
     [:div
       [:progress {:value (:executed-tests res) :max (:expected-tests res) :class status}]]
     [:p.curr-test (str (:executed-tests res) "/" (:expected-tests res) ": " (:test res) " (" (:test-case res) ")")]
     (failed-ui)]))

(defui testinit-ui []
  [:div.buster-results
   [:h1 "Testresults"]
   [:p "Initializing testrun..."]])

(defui dashboard-ui [data]
  [:div
   [:h1 (str "Project: " (:project data))]])

(defui wrapper [this]
  [:div.buster-dashboard {:style "overflow: scroll;"}
   [:h1.title "Buster dashboard"]])

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

(defn is-open? []
  (= (:active @sidebar/rightbar)
     dashboard))

(defn dashboard-toggle []
  (object/raise sidebar/rightbar :toggle dashboard))


(cmd/command {:command :buster-dashboard-toggle
              :desc "Buster: Toggle dashboard"
              :exec (fn []
                      (dashboard-toggle))})


(defn tests-ok? [results]
  (not (some #(contains? #{"error" "failure"} (:status %)) results)))



(behavior ::on-testrun-init
          :triggers #{:testrun.init}
          :reaction (fn [this]
                      (let [stat-dom (:content @this)]
                        (when-let [d (dom/$ :div.buster-results)] (dom/remove d))
                        (object/merge!  this {:test-results [] :test-init-at (.now js/Date)})
                        (dom/append stat-dom (testinit-ui)))))

(behavior  ::on-suite-start
           :triggers #{:suite.start}
           :reaction (fn [this res]
                       (object/merge!  this {:test-results [] :suite-start-at (.now js/Date)})
                       (object/update! this [:test-results] conj res)))

(behavior ::on-test-result
          :triggers #{:test.result}
          :reaction (fn [this res]
                      (object/update! this [:test-results] conj res)
                      (let [stat-dom (:content @this)]
                         (when-let [d (dom/$ :div.buster-results)] (dom/remove d))
                         (dom/append stat-dom (testprogress-ui res)))))

(behavior ::on-suite-complete
          :triggers #{:suite.complete}
          :reaction (fn [this res]
                      (object/update! this [:test-results] conj res)
                      (let [res-dom (dom/$ :div.buster-results)]
                        (dom/append res-dom (summary-ui res)))))

(lt.objs.files/basename (lt.objs.files/parent (:config (first (:test-results @dashboard)))))
