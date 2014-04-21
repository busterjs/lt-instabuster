(ns lt.plugins.instabuster
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.browser :as browser]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as ed]
            [lt.objs.console :as console]
            [lt.objs.files :as files]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.plugins :as plugins]
            [lt.util.cljs :as cljs]
            [lt.objs.thread :as thread]
            [lt.objs.clients :as clients]
            [lt.plugins.instabuster.dashboard :as dash]
            [lt.plugins.instabuster.runner :as runner]
            [lt.plugins.instabuster.live-toggler :as toggler]
            [lt.plugins.instabuster.config :as config])
  (:require-macros [lt.macros :refer [defui behavior]]))


(def plugin-dir (plugins/find-plugin "InstaBuster"))

(defn capture-browser! [this]
  (when-not (:browser @this)
    (let [cur-tab (tabs/active-tab)
          b (browser/add)]
      (object/merge! this {:browser b})
      (object/raise b :navigate! "http://localhost:1111/capture")
      (when cur-tab (tabs/active! cur-tab)))))



(cmd/command {:command ::capture
              :desc "Buster: Capture browser"
              :exec (fn []
                      (capture-browser! buster))})

(defn find-line-containing [editor txt callback]
  (.eachLine (.getDoc (ed/->cm-ed editor)) (fn [line-handle]
                                             (when (.contains (.-text line-handle) txt)
                                               (callback (.-line(.lineInfo (ed/->cm-ed editor) line-handle)))))))

(defn show-test-results-inline [args res]
  (let [editor (pool/last-active)
        testName (.-name (.-details res))
        status (.-status res)]
    (find-line-containing editor testName (fn [lineNo]
                                            (cond
                                             (= status "success") (object/raise editor :editor.result "✓" {:line lineNo})
                                             (= status "failure") (object/raise editor :editor.exception (.-message (.-error (.-details res))) {:line lineNo})
                                             (= status "error") (object/raise editor :editor.exception (.-message (.-error (.-details res))) {:line lineNo})
                                             )))))


(defn show-test-results [args res]
  (notifos/set-msg! (str "Test " (.-executedTests res) "/" (.-expectedTests res)))
  (object/raise dash/dashboard :test.result {:status (.-status res)
                                             :test (.-name (.-details res))
                                             :test-case (->(.-context res) last .-name)
                                             :message (when-not (= "success" (.-status res)) (-> (.-details res) .-error .-message))
                                             :expected-tests (.-expectedTests res)
                                             :executed-tests (.-executedTests res)})
  (when (:path args)
    (show-test-results-inline args res))
  (when (not-empty (js->clj (.-log res)))
    (console/log (str (.-name (.-details res)) " (" (->(.-context res) last .-name) ")"))
    (doseq [out (.-log res)]
      (console/log (str "    " out)))))


(defn show-suite-results [args res]
  (let [r (.-results res)
        msg (str "Buster suite complete. #tests: " (.-tests r)
             ", #failed: " (.-failures r)
             ", #errors: " (.-errors r))]
    (notifos/set-msg! msg)
    (notifos/done-working msg)
    (object/raise dash/dashboard :suite.complete {:status "suite-complete"
                                                  :tests (.-tests r)
                                                  :failures (.-failures r)
                                                  :errors (.-errors r)})))

(behavior ::on-test
          :triggers #{:test}
          :reaction (fn[this args]
                      (if-let [conf (or (:buster-js args) (:buster-js @this))]
                        (let [run #(object/raise runner/runner :run.test this {:type "test" :config conf :path (:path args)})
                              capture-run (fn []
                                            (capture-browser! this)
                                            (js/setTimeout run 100))]
                          (notifos/working (str "Running Buster tests for " (files/parent conf)))
                          (if-not (:connected @buster-client)
                            (object/raise buster-client :start.server capture-run)
                            (if-not (:browser @this) (capture-run) (run))))
                        (do
                          (console/error (str
                                          "No suitable buster config found."
                                          "None found for project (Connect: Buster) or based on path: " (:path args)))
                          (object/raise this :provide.config)))))

(behavior ::on-test-result
          :triggers #{:test.result}
          :reaction (fn [this args res]
                      (cond
                       (= "suite-complete" (.-status res)) (show-suite-results args res)
                       (= "suite-configuration" (.-status res)) (object/raise dash/dashboard :suite.start {:status "suite-start"
                                                                                                           :tests (.-tests (.-details res))
                                                                                                           :config (:config args)})
                       :else (show-test-results args res))))

(behavior ::on-test-live
          :triggers #{:save}
          :debounce 100
          :reaction (fn [editor]
                      (when (object/has-tag? editor :editor.buster.live)
                        (object/raise buster :test (config/find-buster-js (:info @editor))))))

(behavior ::on-browser-destroyed
          :triggers #{:close}
          :reaction (fn [browser]
                      (when (= (object/->id browser) (object/->id (:browser @buster)))
                        (object/merge! buster {:browser nil}))))





(cmd/command {:command ::test-all
              :desc "Buster: Run all tests"
              :exec (fn []
                      (object/raise buster :test {}))})

(cmd/command {:command ::test-current
              :desc "Buster: Run tests for current editor"
              :exec (fn []
                      (when-let [editor (pool/last-active)]
                        (when (object/has-tag? editor :editor.buster)
                          (object/raise buster :test (config/find-buster-js (:info @editor))))))})



(behavior ::on-live-toggle!
          :triggers #{:live.toggle!}
          :reaction (fn [editor]
                      (when (object/has-tag? editor :editor.buster)
                        (if (object/has-tag? editor :editor.buster.live)
                          (toggler/live-off editor)
                          (toggler/live-on editor)))
                      (ed/focus editor)))

(cmd/command {:command :toggle-live
              :desc "Buster: Toggle live mode"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :live.toggle!)))})

(behavior ::on-maybe-toggle-buster
          :triggers #{:active}
          :reaction (fn [editor]
                      (config/maybe-buster-test editor #(object/raise editor :test.editor))))

(behavior ::on-test-editor!
          :triggers #{:test.editor}
          :reaction (fn [editor]
                      (object/add-tags editor [:editor.buster])
                      (toggler/maybe-add-toggler editor)))


(behavior ::on-config-provided
          :triggers #{:config.provided}
          :reaction (fn [this path]
                      (object/merge! this {:buster-js path})))

(behavior ::on-provide-config
          :triggers #{:provide.config}
          :reaction (fn [this trigger]
                      ;; Ehh we need something slightly more informative than just a file chooser
                      (dialogs/file buster :config.provided)))

(behavior ::on-maybe-autotest
          :triggers #{:save}
          :reaction (fn [editor]
                      (when (and (= (:buster-js (config/find-buster-js (:info @editor))) (:buster-js @buster))
                                 (:autotest @buster )
                                 (not (object/has-tag? editor :editor.buster.live)))
                        (config/maybe-buster-file editor #((object/raise buster :test {}))))))

(behavior ::on-toggle-autotest
          :triggers #{:autotest}
          :reaction (fn [this]
                      (object/merge! this {:autotest (not (:autotest @this))})
                      (notifos/done-working (if (:autotest @this) "Autotest on" "Autotest off"))))

(cmd/command {:command :toggle-autotest
              :desc "Buster: Toggle autotest"
              :exec (fn []
                      (object/raise buster :autotest))})

(behavior ::on-connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (object/raise this :config.provided path)
                      (object/raise buster-client :start.server #())))


(scl/add-connector {:name "Buster"
                    :desc "Please provide the location of buster.js for your javascript project"
                    :connect (fn []
                               (dialogs/file buster :connect))})


(object/object* ::buster-plugin
                :tags [:buster-plugin]
                :name "buster-plugin")


(def buster (object/create ::buster-plugin))

(add-watch buster :object.change (fn [_ _ _ _]
                                   (object/raise dash/dashboard :project.update {:conf (:buster-js @buster)
                                                                                  :autotest (:autotest @buster)})))



;; BUSTER SERVER
;; ***************************************************************************



(def buster-server-path (files/join plugin-dir "node" "buster-server.js"))

(behavior ::on-start-server
          :triggers #{:start.server}
          :reaction (fn [this cb]
                      (when-not (or (:connecting @this) (:connected @this))
                        (notifos/working (str "Connecting to: " (:name @this)))
                        (let [cp (js/require "child_process")
                              worker (.fork cp buster-server-path #js ["-p" "1111"] #js {:execPath (files/lt-home (thread/node-exe)) :silent true})
                              dis (fn [code signal]
                                    (object/raise this :kill))
                              msg (fn [m]
                                    (.log js/console m))]
                          (object/merge! this {:connecting true})
                          (.on worker "message" msg)
                          (.on worker "disconnect" dis)
                          (.on worker "exit" dis)
                          (.on (.-stdout worker) "data" (fn [msg]
                                                          (println (str "Buster server out: " msg))
                                                          (when (.contains (str msg) "buster-server running")
                                                            (do
                                                              (object/merge! this {:connecting false :connected true})
                                                              (notifos/done-working (str "Connected to: " (:name @this)))
                                                              (when (cb) cb)
                                                              (let [sidebar-client (clients/handle-connection! {:client-id (object/->id this) ; creates a new object...
                                                                                                                :name "Buster"
                                                                                                                :tags [:buster.client]
                                                                                                                :dill "Dall"
                                                                                                                :type "Buster Server"})]
                                                                (object/merge! this {:sidebar-client sidebar-client}))))))
                          (.on (.-stderr worker) "data" (fn [err]
                                                          (println (str "Buster server error: " err))
                                                          (object/raise this :kill)))
                          (object/merge! this {::worker worker})))))

(behavior ::on-server-error
          :triggers #{:error}
          :reaction (fn [this msg]
                      (.error js/console (stack msg))))

(behavior ::on-server-kill
          :triggers #{:kill :close!}
          :reaction (fn [this]
                      (object/merge! buster-client {:connecting false})
                      (object/raise buster-client :disconnect)
                      (when-let [b (:browser @buster)]
                        (object/raise b :close))
                      (when-let [worker (::worker @buster-client)]
                        (.kill worker)
                        (object/merge! this {::worker nil}))
                      (when-not (= (object/->id this) (object/->id buster-client))
                        (clients/rem! this))
                      (when-let [sb (:sidebar-client @buster-client)]
                        (clients/rem! sb)
                        (object/merge! buster-client  {:sidebar-client nil}))
                      (object/raise runner/runner :kill)))


(behavior ::on-server-disconnect
          :triggers #{:disconnect}
          :reaction (fn [this]
                      (when-let [worker (::worker @buster-client)]
                        (when (.-connected worker)
                          (.disconnect worker)))
                      (object/merge! buster-client {:connected false})
                      (notifos/set-msg! (str "Disconnected from: " (:name @buster-client)))))


;; Until a more graceful solution reveals itself !
(behavior ::on-refresh
          :triggers #{:object.refresh}
          :reaction (fn [this]
                      (when (:connected @this)
                        (object/raise this :kill))))


(cmd/command {:command :start-server
              :desc "Buster: Start server"
              :exec (fn []
                      (object/raise buster-client :start.server #()))})

(cmd/command {:command :stop-server
              :desc "Buster: Stop server"
              :exec (fn []
                      (object/raise buster-client :kill))})

(behavior ::on-send
          :triggers #{:send!}
          :reaction (fn [this msg]
                      (.send (::worker @this)
                             (clj->js msg))))

(object/object* ::buster.client
                :tags #{:client :buster.client}
                :name "Buster Server")

(def buster-client (object/create ::buster.client))
