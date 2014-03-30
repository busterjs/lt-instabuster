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
            [lt.util.cljs :as cljs]
            [lt.objs.thread :as thread]
            [lt.objs.clients :as clients]
            [lt.plugins.instabuster.dashboard :as dash])
  (:require-macros [lt.macros :refer [defui behavior]]))


(def plugin-dir (plugins/find-plugin "InstaBuster"))
(def buster-module-dir (files/join plugin-dir "node_modules/buster/node_modules"))
(def buster-bin-dir (files/join plugin-dir "node_modules/buster/bin"))
(def buster-test-path (files/join plugin-dir "node" "buster-test.js"))

(object/object* ::buster-plugin
                :tags [:buster-plugin]
                :name "buster-plugin")


(def buster (object/create ::buster-plugin))


(add-watch buster :object.change (fn [_ _ _ _]
                                   (object/raise dash/dashboard :project.update {:conf (:buster-js @buster)
                                                                                  :autotest (:autotest @buster)})))

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


(defn find-buster-js [editor-info]
  (assoc editor-info :buster-js (files/walk-up-find (:path editor-info) "buster.js")))



;; ******** Cached test runner **************
;; NOTE: Requires test-cli NOT to exit process ! (mod test-cli code necessary)

(object/object* ::buster.runner
                :tags #{:buster.runner :client}
                :name "Buster Runner")

(def buster-runner (object/create ::buster.runner))


(behavior ::on-connect-runner
          :triggers #{:connect.runner}
          :reaction (fn [this]
                      (when-not (or (:connected @this) (:connecting @this))
                        (let [cp (js/require "child_process")
                              worker (.fork cp buster-test-path #js [] #js {:execPath (files/lt-home (thread/node-exe)) :silent true})
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
                      (console/log "Kill triggered !")
                      (object/merge! buster-runner {:connected false :connecting false})
                      (when-let [worker (::worker @buster-runner)]
                        (when (.-connected worker)
                          (.kill worker))
                        (object/merge! buster-runner {::worker nil}))))

(behavior ::on-runner-refresh
          :triggers #{:object.refresh}
          :reaction (fn [this]
                      (when (:connected @this)
                        (object/raise this :kill))))

(behavior ::on-run-test
          :triggers #{:run.test}
          :reaction (fn [this args]
                      (when-not (:connected @this)
                            (object/raise this :connect.runner)
                            ;; temp hack
                            (doall (range 1000000)))
                      (let [worker (::worker @this)]
                        (.removeAllListeners worker "message")
                        (.on worker "message" #(object/raise buster :test.result args %))
                        (object/raise dash/dashboard :testrun.init)
                        (.send worker (clj->js args)))))

(behavior ::on-test
          :triggers #{:test}
          :reaction (fn[this args]
                      (if-let [conf (or (:buster-js args) (:buster-js @this))]
                        (do
                          (notifos/working (str "Running Buster tests for " (files/parent conf)))
                          (when-not (:connected @buster-client)
                            (object/raise buster-client :start.server)
                            ;; temp hack
                            (doall (range 1000000)))
                          (capture-browser! this)
                          (object/raise buster-runner :run.test {:type "test" :config conf :path (:path args)}))
                        (do
                          (console/error (str
                                          "No suitable buster config found."
                                          "None found for project (Connect: Buster) or based on path: " (:path args)))
                          (object/raise this :provide.config)))))


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

(behavior ::on-test-result
          :triggers #{:test.result}
          :reaction (fn [this args res]
                      (cond
                       (= "suite-complete" (.-status res)) (show-suite-results args res)
                       (= "suite-configuration" (.-status res)) (object/raise dash/dashboard :suite.start {:status "suite-start"
                                                                                                           :tests (.-tests (.-details res))
                                                                                                           :config (:config args)})
                       :else (show-test-results args res))))

(cmd/command {:command ::test-all
              :desc "Buster: Run all tests"
              :exec (fn []
                      (object/raise buster :test {}))})

(cmd/command {:command ::test-current
              :desc "Buster: Run tests for current editor"
              :exec (fn []
                      (when-let [editor (pool/last-active)]
                        (when (object/has-tag? editor :editor.buster)
                          (object/raise buster :test (find-buster-js (:info @editor))))))})

(behavior ::on-test-live
          :triggers #{:save}
          :debounce 100
          :reaction (fn [editor]
                      (when (object/has-tag? editor :editor.buster.live)
                        (object/raise buster :test (find-buster-js (:info @editor))))))



(behavior ::on-browser-destroyed
          :triggers #{:close}
          :reaction (fn [browser]
                      (when (= (object/->id browser) (object/->id (:browser @buster)))
                        (object/merge! buster {:browser nil}))))


(defui live-toggler [this]
  [:span {:class (bound this #(str "livetoggler " (when-not (:live %) "off")))} "buster-live"]
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

(behavior ::on-live-toggle!
          :triggers #{:live.toggle!}
          :reaction (fn [editor]
                      (when (object/has-tag? editor :editor.buster)
                        (if (object/has-tag? editor :editor.buster.live)
                          (live-off editor)
                          (live-on editor)))
                      (ed/focus editor)))

(cmd/command {:command :toggle-live
              :desc "Buster: Toggle live mode"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :live.toggle!)))})


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


(behavior ::on-maybe-toggle-buster
          :triggers #{:active}
          :reaction (fn [editor]
                      (maybe-buster-test editor #(object/raise editor :test.editor))))

(behavior ::on-test-editor!
          :triggers #{:test.editor}
          :reaction (fn [editor]
                      (object/add-tags editor [:editor.buster])
                      (maybe-add-toggler! editor)))


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
                      (when (and (= (:buster-js (find-buster-js (:info @editor))) (:buster-js @buster))
                                 (:autotest @buster )
                                 (not (object/has-tag? editor :editor.buster.live)))
                        (maybe-buster-file editor #((object/raise buster :test {}))))))

(behavior ::on-toggle-autotest
          :triggers #{:autotest}
          :reaction (fn [this]
                      (object/merge! this {:autotest (not (:autotest @this))})
                      (notifos/done-working (if (:autotest @this) "Autotest on" "Autotest off"))))

(cmd/command {:command :toggle-autotest
              :desc "Buster: Toggle autotest"
              :exec (fn []
                      (object/raise buster :autotest))})


;; BUSTER SERVER
;; ***************************************************************************

(behavior ::on-connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (object/merge! this {:buster-js path})
                      (object/raise buster-client :start.server)))


(scl/add-connector {:name "Buster"
                    :desc "Please provide the location of buster.js for your javascript project"
                    :connect (fn []
                               (dialogs/file buster :connect))})


(object/object* ::buster.client
                :tags #{:client :buster.client}
                :name "Buster Server")



(def buster-client (object/create ::buster.client))
(def buster-server-path (files/join plugin-dir "node" "buster-server.js"))

(behavior ::on-start-server
          :triggers #{:start.server}
          :reaction (fn [this]
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
                      (object/raise buster-runner :kill)))


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
                      (object/raise buster-client :start.server))})

(cmd/command {:command :stop-server
              :desc "Buster: Stop server"
              :exec (fn []
                      (object/raise buster-client :kill))})

(behavior ::on-send
          :triggers #{:send!}
          :reaction (fn [this msg]
                      (.send (::worker @this)
                             (clj->js msg))))






