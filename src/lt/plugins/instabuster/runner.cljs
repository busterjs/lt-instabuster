(ns lt.plugins.instabuster.runner
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.util.cljs :as cljs]
            [lt.objs.thread :as thread]
            [lt.plugins.instabuster.dashboard :as dash])
  (:require-macros [lt.macros :refer [behavior]]))

(def plugin-dir (plugins/find-plugin "InstaBuster"))
(def buster-test-path (files/join plugin-dir "node" "buster-test.js"))

(behavior ::on-connect-runner
          :triggers #{:connect.runner}
          :reaction (fn [this]
                      (when-not (or (:connected @this) (:connecting @this))
                        (let [cp (js/require "child_process")
                              worker (.fork cp buster-test-path #js [] #js {:execPath (files/lt-home (thread/node-exe)) :silent true :env #js {:NODE_PATH (files/join plugin-dir "node_modules") }})
                              dis (fn [code signal]
                                    (object/raise this :kill))]
                          (object/merge! this {:connecting true})
                          (.on (.-stdout worker) "data" (fn [msg]
                                                          (when (.contains (str msg) "connected!")
                                                            (object/merge! this {:connecting false :connected true}))))
                          (.on (.-stderr worker) "data" (fn [err]
                                                          (println (str "Error from runner: " err))))
                          (.on worker "disconnect" dis)
                          (.on worker "exit" dis)
                          (object/merge! this {::worker worker})))))

(behavior ::on-runner-kill
          :triggers #{:kill :close!}
          :reaction (fn [this]
                      (object/merge! this {:connected false :connecting false})
                      (when-let [worker (::worker @this)]
                        (when (.-connected worker)
                          (.kill worker))
                        (object/merge! this {::worker nil}))))

(behavior ::on-runner-refresh
          :triggers #{:object.refresh}
          :reaction (fn [this]
                      (when (:connected @this)
                        (object/raise this :kill))))

(behavior ::on-run-test
          :triggers #{:run.test}
          :reaction (fn [this cb-obj args]
                      (when-not (:connected @this)
                            (object/raise this :connect.runner)
                            ;; temp hack
                            (doall (range 1000000)))
                      (let [worker (::worker @this)]
                        (.removeAllListeners worker "message")
                        (.on worker "message" #(object/raise cb-obj :test.result args %))
                        (object/raise dash/dashboard :testrun.init)
                        (.send worker (clj->js args)))))

(object/object* ::buster.runner
                :tags #{:buster.runner :client}
                :name "Buster Runner")

(def runner (object/create ::buster.runner))
