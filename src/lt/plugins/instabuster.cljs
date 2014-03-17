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
            [lt.objs.clients :as clients])
  (:require-macros [lt.macros :refer [defui behavior]]))


(def plugin-dir (plugins/find-plugin "InstaBuster"))
(def buster-module-dir (files/join plugin-dir "node_modules/buster/node_modules"))
(def buster-bin-dir (files/join plugin-dir "node_modules/buster/bin"))
(def buster-test-path (files/join plugin-dir "node" "buster-test.js"))

(object/object* ::buster-plugin
                :tags [:buster-plugin]
                :name "buster-plugin")


(def buster (object/create ::buster-plugin))



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


(defn run-test [args]
  (let [cp (js/require "child_process")
        worker (.fork cp buster-test-path #js ["-p" "1111"] #js {:execPath (files/lt-home (thread/node-exe)) :silent true})
        dis (fn [code signal]
              (notifos/done-working)
              (.kill worker))]
    (.on worker "message" #(object/raise buster :test.result args %))
    (.on worker "disconnect" dis)
    (.on worker "exit" dis)
    (.on (.-stdout worker) "data" (fn [msg]
                                    (println (str msg))
                                    (when (.contains (str msg) "exit")
                                      (.kill worker))))
    (.on (.-stderr worker) "data" (fn [err]
                                    (println (str "Error running tests: " err))))
    (.send worker (clj->js args))))


(behavior ::on-test
          :triggers #{:test}
          :reaction (fn[this args]
                      (if-let [conf (or (:buster-js @this) (:buster-js args))]
                        (do
                          (notifos/working "Running Buster tests")
                          (when-not (:connected @buster-client)
                            (object/raise buster-client :start.server)
                            ;; temp hack
                            (doall (range 1000000)))
                          (capture-browser! this)
                          (run-test {:type "test" :config conf :path (:path args)}))
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

(defn show-test-results-console [res]
  (let [test (.-name (.-details res))
        status (.-status res)
        testCase (->(.-context res) last .-name)]
    (cond
     (= status "success") (console/log (str "✓ " test " (" testCase ")"))
     :else (console/error  (str (first status) ": " test " (" testCase ") message: " (.-message (.-error (.-details res))))))))


(behavior ::on-test-result
          :triggers #{:test.result}
          :reaction (fn [this args res]
                      (if (:path args)
                        (show-test-results-inline args res)
                        (show-test-results-console res))
                      (doseq [out (.-log res)]
                        (console/log (str "    " out)))))


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
  (let [path (files/relative (files/parent (:busterjs args)) (:path args))]
    (->
     (.all whenjs (->> (.loadConfigurationFile (js/require buster-cfg-path) (:busterjs args))
                       (.-groups)
                       (filter #(= "browser" (.-environment %)))
                       (wrap-groups path)))
     (.then
      (fn [results]
        (when (some #(= path (rem-pre-sep %)) (flatten (cljs/js->clj results)))
          (object/raise editor :test.editor)))))))


(defn maybe-buster-test [editor]
  (when-let [busterjs (or (:buster-js (find-buster-js (:info @editor))) (:buster-js @buster))]
    (is-buster-test editor {:busterjs busterjs :path (-> @editor :info :path)})))


(behavior ::on-maybe-toggle-buster
          :triggers #{:active}
          :reaction (fn [editor]
                      (maybe-buster-test editor)))

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
                        (object/merge! buster-client  {:sidebar-client nil}))))


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






