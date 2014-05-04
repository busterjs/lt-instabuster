if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster.templates')) {
goog.provide('lt.plugins.instabuster.templates');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
lt.plugins.instabuster.templates.buster_tc = [cljs.core.str("(function ()  {\n"),cljs.core.str("  buster.testCase(\"\", {\n"),cljs.core.str("  });\n"),cljs.core.str("}());")].join('');
lt.plugins.instabuster.templates.buster_t = [cljs.core.str("\"\": function() {},")].join('');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"create-buster-tc","create-buster-tc",4002677244),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: New TestCase",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,editor);lt.objs.editor.insert_at_cursor.call(null,editor,lt.plugins.instabuster.templates.buster_tc);
return lt.objs.editor.move_cursor.call(null,editor,cljs.core.update_in.call(null,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.partial.call(null,cljs.core.inc,18)));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"create-buster-t","create-buster-t",971768939),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: New Test",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var pos = lt.objs.editor.__GT_cursor.call(null,editor);lt.objs.editor.insert_at_cursor.call(null,editor,lt.plugins.instabuster.templates.buster_t);
return lt.objs.editor.move_cursor.call(null,editor,cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch","ch",1013907415)], null),cljs.core.partial.call(null,cljs.core.inc)));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster.config')) {
goog.provide('lt.plugins.instabuster.config');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.util.cljs');
goog.require('lt.objs.plugins');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.instabuster.config.plugin_dir = lt.objs.plugins.find_plugin.call(null,"InstaBuster");
lt.plugins.instabuster.config.buster_module_dir = lt.objs.files.join.call(null,lt.plugins.instabuster.config.plugin_dir,"node_modules/buster/node_modules");
lt.plugins.instabuster.config.find_buster_js = (function find_buster_js(editor_info){return cljs.core.assoc.call(null,editor_info,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),lt.objs.files.walk_up_find.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(editor_info),"buster.js"));
});
lt.plugins.instabuster.config.buster_cfg_path = lt.objs.files.join.call(null,lt.plugins.instabuster.config.buster_module_dir,"buster-configuration");
lt.plugins.instabuster.config.whenjs = require(lt.objs.files.join.call(null,lt.plugins.instabuster.config.buster_module_dir,"/when"));
lt.plugins.instabuster.config.resolve_buster_js = (function resolve_buster_js(editor,buster){var or__6815__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(lt.plugins.instabuster.config.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buster));
}
});
lt.plugins.instabuster.config.load_buster_cfg = (function load_buster_cfg(busterjs){return require(lt.plugins.instabuster.config.buster_cfg_path).loadConfigurationFile(busterjs);
});
lt.plugins.instabuster.config.relative_to = (function relative_to(file,path){return lt.objs.files.relative.call(null,lt.objs.files.parent.call(null,file),path);
});
lt.plugins.instabuster.config.rem_pre_sep = (function rem_pre_sep(p){return clojure.string.replace_first.call(null,p,/^\//,"");
});
lt.plugins.instabuster.config.resolve_browser_groups = (function resolve_browser_groups(busterjs){return lt.plugins.instabuster.config.load_buster_cfg.call(null,busterjs).filterEnv("browser").groups;
});
lt.plugins.instabuster.config.resolve_tests = (function resolve_tests(groups){return lt.util.cljs.clj__GT_js.call(null,cljs.core.map.call(null,(function (group){var d = lt.plugins.instabuster.config.whenjs.defer();group.on("load:tests",(function (tests){return d.resolve(tests.map((function (p1__8813_SHARP_){return p1__8813_SHARP_.path;
})));
}));
group.resolve().then((function (){return cljs.core.List.EMPTY;
}));
return d;
}),groups));
});
lt.plugins.instabuster.config.maybe_buster_test = (function maybe_buster_test(editor,buster,callback){var temp__4092__auto__ = lt.plugins.instabuster.config.resolve_buster_js.call(null,editor,buster);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.config.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.config.whenjs.all(lt.plugins.instabuster.config.resolve_tests.call(null,lt.plugins.instabuster.config.resolve_browser_groups.call(null,busterjs))).then((function (results){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8814_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.config.rem_pre_sep.call(null,p1__8814_SHARP_));
}),cljs.core.flatten.call(null,lt.util.cljs.js__GT_clj.call(null,results)))))
{return callback.call(null);
} else
{return null;
}
}));
} else
{return null;
}
});
lt.plugins.instabuster.config.paths_from_resourceSets = (function paths_from_resourceSets(resourceSets){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8815_SHARP_){return lt.util.cljs.js__GT_clj.call(null,p1__8815_SHARP_.map((function (res){return res.path;
})));
}),resourceSets));
});
lt.plugins.instabuster.config.maybe_buster_file = (function maybe_buster_file(editor,buster,callback){var temp__4092__auto__ = lt.plugins.instabuster.config.resolve_buster_js.call(null,editor,buster);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.config.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.config.whenjs.all(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__8816_SHARP_){return p1__8816_SHARP_.resolve();
}),lt.plugins.instabuster.config.resolve_browser_groups.call(null,busterjs)))).then((function (rs){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8817_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.config.rem_pre_sep.call(null,p1__8817_SHARP_));
}),lt.plugins.instabuster.config.paths_from_resourceSets.call(null,rs))))
{return callback.call(null);
} else
{return null;
}
}));
} else
{return null;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster.dashboard')) {
goog.provide('lt.plugins.instabuster.dashboard');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.instabuster.dashboard.project_name = (function project_name(config){return lt.objs.files.basename.call(null,lt.objs.files.parent.call(null,config));
});
lt.plugins.instabuster.dashboard.summary_ui = (function summary_ui(this$,res){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.summary","div.summary",724307643),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Tests: "),cljs.core.str(new cljs.core.Keyword(null,"tests","tests",1124155795).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Failures: "),cljs.core.str(new cljs.core.Keyword(null,"failures","failures",1689842587).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Errors: "),cljs.core.str(new cljs.core.Keyword(null,"errors","errors",4014236381).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Total: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"test-init-at","test-init-at",4728938311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),cljs.core.str(" ms")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Test: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"suite-start-at","suite-start-at",4629296165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),cljs.core.str(" ms")].join('')], null)], null));var seq__8824_8905 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8825_8906 = null;var count__8826_8907 = 0;var i__8827_8908 = 0;while(true){
if((i__8827_8908 < count__8826_8907))
{var vec__8828_8909 = cljs.core._nth.call(null,chunk__8825_8906,i__8827_8908);var ev__8206__auto___8910 = cljs.core.nth.call(null,vec__8828_8909,0,null);var func__8207__auto___8911 = cljs.core.nth.call(null,vec__8828_8909,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8910,func__8207__auto___8911);
{
var G__8912 = seq__8824_8905;
var G__8913 = chunk__8825_8906;
var G__8914 = count__8826_8907;
var G__8915 = (i__8827_8908 + 1);
seq__8824_8905 = G__8912;
chunk__8825_8906 = G__8913;
count__8826_8907 = G__8914;
i__8827_8908 = G__8915;
continue;
}
} else
{var temp__4092__auto___8916 = cljs.core.seq.call(null,seq__8824_8905);if(temp__4092__auto___8916)
{var seq__8824_8917__$1 = temp__4092__auto___8916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8824_8917__$1))
{var c__7563__auto___8918 = cljs.core.chunk_first.call(null,seq__8824_8917__$1);{
var G__8919 = cljs.core.chunk_rest.call(null,seq__8824_8917__$1);
var G__8920 = c__7563__auto___8918;
var G__8921 = cljs.core.count.call(null,c__7563__auto___8918);
var G__8922 = 0;
seq__8824_8905 = G__8919;
chunk__8825_8906 = G__8920;
count__8826_8907 = G__8921;
i__8827_8908 = G__8922;
continue;
}
} else
{var vec__8829_8923 = cljs.core.first.call(null,seq__8824_8917__$1);var ev__8206__auto___8924 = cljs.core.nth.call(null,vec__8829_8923,0,null);var func__8207__auto___8925 = cljs.core.nth.call(null,vec__8829_8923,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8924,func__8207__auto___8925);
{
var G__8926 = cljs.core.next.call(null,seq__8824_8917__$1);
var G__8927 = null;
var G__8928 = 0;
var G__8929 = 0;
seq__8824_8905 = G__8926;
chunk__8825_8906 = G__8927;
count__8826_8907 = G__8928;
i__8827_8908 = G__8929;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.dashboard.failed_test_ui = (function failed_test_ui(res){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("("),cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(res))),cljs.core.str("): "),cljs.core.str(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(res))].join('')," (",new cljs.core.Keyword(null,"test-case","test-case",4082063101).cljs$core$IFn$_invoke$arity$1(res),")",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(res)], null)], null)], null));var seq__8836_8930 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8837_8931 = null;var count__8838_8932 = 0;var i__8839_8933 = 0;while(true){
if((i__8839_8933 < count__8838_8932))
{var vec__8840_8934 = cljs.core._nth.call(null,chunk__8837_8931,i__8839_8933);var ev__8206__auto___8935 = cljs.core.nth.call(null,vec__8840_8934,0,null);var func__8207__auto___8936 = cljs.core.nth.call(null,vec__8840_8934,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8935,func__8207__auto___8936);
{
var G__8937 = seq__8836_8930;
var G__8938 = chunk__8837_8931;
var G__8939 = count__8838_8932;
var G__8940 = (i__8839_8933 + 1);
seq__8836_8930 = G__8937;
chunk__8837_8931 = G__8938;
count__8838_8932 = G__8939;
i__8839_8933 = G__8940;
continue;
}
} else
{var temp__4092__auto___8941 = cljs.core.seq.call(null,seq__8836_8930);if(temp__4092__auto___8941)
{var seq__8836_8942__$1 = temp__4092__auto___8941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8836_8942__$1))
{var c__7563__auto___8943 = cljs.core.chunk_first.call(null,seq__8836_8942__$1);{
var G__8944 = cljs.core.chunk_rest.call(null,seq__8836_8942__$1);
var G__8945 = c__7563__auto___8943;
var G__8946 = cljs.core.count.call(null,c__7563__auto___8943);
var G__8947 = 0;
seq__8836_8930 = G__8944;
chunk__8837_8931 = G__8945;
count__8838_8932 = G__8946;
i__8839_8933 = G__8947;
continue;
}
} else
{var vec__8841_8948 = cljs.core.first.call(null,seq__8836_8942__$1);var ev__8206__auto___8949 = cljs.core.nth.call(null,vec__8841_8948,0,null);var func__8207__auto___8950 = cljs.core.nth.call(null,vec__8841_8948,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8949,func__8207__auto___8950);
{
var G__8951 = cljs.core.next.call(null,seq__8836_8942__$1);
var G__8952 = null;
var G__8953 = 0;
var G__8954 = 0;
seq__8836_8930 = G__8951;
chunk__8837_8931 = G__8952;
count__8838_8932 = G__8953;
i__8839_8933 = G__8954;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.dashboard.failed_ui = (function failed_ui(this$){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.failed-tests","div.failed-tests",1606312512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"Failed tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (p1__8842_SHARP_){return lt.plugins.instabuster.dashboard.failed_test_ui.call(null,p1__8842_SHARP_);
}),cljs.core.filter.call(null,(function (p1__8843_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__8843_SHARP_));
}),new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))], null)], null));var seq__8850_8955 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8851_8956 = null;var count__8852_8957 = 0;var i__8853_8958 = 0;while(true){
if((i__8853_8958 < count__8852_8957))
{var vec__8854_8959 = cljs.core._nth.call(null,chunk__8851_8956,i__8853_8958);var ev__8206__auto___8960 = cljs.core.nth.call(null,vec__8854_8959,0,null);var func__8207__auto___8961 = cljs.core.nth.call(null,vec__8854_8959,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8960,func__8207__auto___8961);
{
var G__8962 = seq__8850_8955;
var G__8963 = chunk__8851_8956;
var G__8964 = count__8852_8957;
var G__8965 = (i__8853_8958 + 1);
seq__8850_8955 = G__8962;
chunk__8851_8956 = G__8963;
count__8852_8957 = G__8964;
i__8853_8958 = G__8965;
continue;
}
} else
{var temp__4092__auto___8966 = cljs.core.seq.call(null,seq__8850_8955);if(temp__4092__auto___8966)
{var seq__8850_8967__$1 = temp__4092__auto___8966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8850_8967__$1))
{var c__7563__auto___8968 = cljs.core.chunk_first.call(null,seq__8850_8967__$1);{
var G__8969 = cljs.core.chunk_rest.call(null,seq__8850_8967__$1);
var G__8970 = c__7563__auto___8968;
var G__8971 = cljs.core.count.call(null,c__7563__auto___8968);
var G__8972 = 0;
seq__8850_8955 = G__8969;
chunk__8851_8956 = G__8970;
count__8852_8957 = G__8971;
i__8853_8958 = G__8972;
continue;
}
} else
{var vec__8855_8973 = cljs.core.first.call(null,seq__8850_8967__$1);var ev__8206__auto___8974 = cljs.core.nth.call(null,vec__8855_8973,0,null);var func__8207__auto___8975 = cljs.core.nth.call(null,vec__8855_8973,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8974,func__8207__auto___8975);
{
var G__8976 = cljs.core.next.call(null,seq__8850_8967__$1);
var G__8977 = null;
var G__8978 = 0;
var G__8979 = 0;
seq__8850_8955 = G__8976;
chunk__8851_8956 = G__8977;
count__8852_8957 = G__8978;
i__8853_8958 = G__8979;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.dashboard.testprogress_ui = (function testprogress_ui(this$,res){var e__8205__auto__ = crate.core.html.call(null,(function (){var status = ((lt.plugins.instabuster.dashboard.tests_ok_QMARK_.call(null,new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))?"ok":"error");return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-results","div.buster-results",2322289209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),[cljs.core.str("Testresults for "),cljs.core.str(lt.plugins.instabuster.dashboard.project_name.call(null,new cljs.core.Keyword(null,"config","config",3954079412).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",4307793311),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"executed-tests","executed-tests",2442601941).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"max","max",1014012118),new cljs.core.Keyword(null,"expected-tests","expected-tests",3805852222).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"class","class",1108647146),status], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.curr-test","p.curr-test",1775184577),[cljs.core.str(new cljs.core.Keyword(null,"executed-tests","executed-tests",2442601941).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"expected-tests","expected-tests",3805852222).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"test-case","test-case",4082063101).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(")")].join('')], null),lt.plugins.instabuster.dashboard.failed_ui.call(null,this$)], null);
})());var seq__8862_8980 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8863_8981 = null;var count__8864_8982 = 0;var i__8865_8983 = 0;while(true){
if((i__8865_8983 < count__8864_8982))
{var vec__8866_8984 = cljs.core._nth.call(null,chunk__8863_8981,i__8865_8983);var ev__8206__auto___8985 = cljs.core.nth.call(null,vec__8866_8984,0,null);var func__8207__auto___8986 = cljs.core.nth.call(null,vec__8866_8984,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8985,func__8207__auto___8986);
{
var G__8987 = seq__8862_8980;
var G__8988 = chunk__8863_8981;
var G__8989 = count__8864_8982;
var G__8990 = (i__8865_8983 + 1);
seq__8862_8980 = G__8987;
chunk__8863_8981 = G__8988;
count__8864_8982 = G__8989;
i__8865_8983 = G__8990;
continue;
}
} else
{var temp__4092__auto___8991 = cljs.core.seq.call(null,seq__8862_8980);if(temp__4092__auto___8991)
{var seq__8862_8992__$1 = temp__4092__auto___8991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8862_8992__$1))
{var c__7563__auto___8993 = cljs.core.chunk_first.call(null,seq__8862_8992__$1);{
var G__8994 = cljs.core.chunk_rest.call(null,seq__8862_8992__$1);
var G__8995 = c__7563__auto___8993;
var G__8996 = cljs.core.count.call(null,c__7563__auto___8993);
var G__8997 = 0;
seq__8862_8980 = G__8994;
chunk__8863_8981 = G__8995;
count__8864_8982 = G__8996;
i__8865_8983 = G__8997;
continue;
}
} else
{var vec__8867_8998 = cljs.core.first.call(null,seq__8862_8992__$1);var ev__8206__auto___8999 = cljs.core.nth.call(null,vec__8867_8998,0,null);var func__8207__auto___9000 = cljs.core.nth.call(null,vec__8867_8998,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___8999,func__8207__auto___9000);
{
var G__9001 = cljs.core.next.call(null,seq__8862_8992__$1);
var G__9002 = null;
var G__9003 = 0;
var G__9004 = 0;
seq__8862_8980 = G__9001;
chunk__8863_8981 = G__9002;
count__8864_8982 = G__9003;
i__8865_8983 = G__9004;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.dashboard.testinit_ui = (function testinit_ui(){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-results","div.buster-results",2322289209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Testresults"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Initializing testrun..."], null)], null));var seq__8874_9005 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8875_9006 = null;var count__8876_9007 = 0;var i__8877_9008 = 0;while(true){
if((i__8877_9008 < count__8876_9007))
{var vec__8878_9009 = cljs.core._nth.call(null,chunk__8875_9006,i__8877_9008);var ev__8206__auto___9010 = cljs.core.nth.call(null,vec__8878_9009,0,null);var func__8207__auto___9011 = cljs.core.nth.call(null,vec__8878_9009,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9010,func__8207__auto___9011);
{
var G__9012 = seq__8874_9005;
var G__9013 = chunk__8875_9006;
var G__9014 = count__8876_9007;
var G__9015 = (i__8877_9008 + 1);
seq__8874_9005 = G__9012;
chunk__8875_9006 = G__9013;
count__8876_9007 = G__9014;
i__8877_9008 = G__9015;
continue;
}
} else
{var temp__4092__auto___9016 = cljs.core.seq.call(null,seq__8874_9005);if(temp__4092__auto___9016)
{var seq__8874_9017__$1 = temp__4092__auto___9016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8874_9017__$1))
{var c__7563__auto___9018 = cljs.core.chunk_first.call(null,seq__8874_9017__$1);{
var G__9019 = cljs.core.chunk_rest.call(null,seq__8874_9017__$1);
var G__9020 = c__7563__auto___9018;
var G__9021 = cljs.core.count.call(null,c__7563__auto___9018);
var G__9022 = 0;
seq__8874_9005 = G__9019;
chunk__8875_9006 = G__9020;
count__8876_9007 = G__9021;
i__8877_9008 = G__9022;
continue;
}
} else
{var vec__8879_9023 = cljs.core.first.call(null,seq__8874_9017__$1);var ev__8206__auto___9024 = cljs.core.nth.call(null,vec__8879_9023,0,null);var func__8207__auto___9025 = cljs.core.nth.call(null,vec__8879_9023,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9024,func__8207__auto___9025);
{
var G__9026 = cljs.core.next.call(null,seq__8874_9017__$1);
var G__9027 = null;
var G__9028 = 0;
var G__9029 = 0;
seq__8874_9005 = G__9026;
chunk__8875_9006 = G__9027;
count__8876_9007 = G__9028;
i__8877_9008 = G__9029;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.dashboard.project_ui = (function project_ui(data){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Project settings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"conf","conf",1016963734).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4092__auto__))
{var c = temp__4092__auto__;return [cljs.core.str("Selected project: "),cljs.core.str(lt.plugins.instabuster.dashboard.project_name.call(null,c))].join('');
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("Autotest on?: "),cljs.core.str(new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(data))].join('')], null)], null)], null));var seq__8886_9030 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8887_9031 = null;var count__8888_9032 = 0;var i__8889_9033 = 0;while(true){
if((i__8889_9033 < count__8888_9032))
{var vec__8890_9034 = cljs.core._nth.call(null,chunk__8887_9031,i__8889_9033);var ev__8206__auto___9035 = cljs.core.nth.call(null,vec__8890_9034,0,null);var func__8207__auto___9036 = cljs.core.nth.call(null,vec__8890_9034,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9035,func__8207__auto___9036);
{
var G__9037 = seq__8886_9030;
var G__9038 = chunk__8887_9031;
var G__9039 = count__8888_9032;
var G__9040 = (i__8889_9033 + 1);
seq__8886_9030 = G__9037;
chunk__8887_9031 = G__9038;
count__8888_9032 = G__9039;
i__8889_9033 = G__9040;
continue;
}
} else
{var temp__4092__auto___9041 = cljs.core.seq.call(null,seq__8886_9030);if(temp__4092__auto___9041)
{var seq__8886_9042__$1 = temp__4092__auto___9041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8886_9042__$1))
{var c__7563__auto___9043 = cljs.core.chunk_first.call(null,seq__8886_9042__$1);{
var G__9044 = cljs.core.chunk_rest.call(null,seq__8886_9042__$1);
var G__9045 = c__7563__auto___9043;
var G__9046 = cljs.core.count.call(null,c__7563__auto___9043);
var G__9047 = 0;
seq__8886_9030 = G__9044;
chunk__8887_9031 = G__9045;
count__8888_9032 = G__9046;
i__8889_9033 = G__9047;
continue;
}
} else
{var vec__8891_9048 = cljs.core.first.call(null,seq__8886_9042__$1);var ev__8206__auto___9049 = cljs.core.nth.call(null,vec__8891_9048,0,null);var func__8207__auto___9050 = cljs.core.nth.call(null,vec__8891_9048,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9049,func__8207__auto___9050);
{
var G__9051 = cljs.core.next.call(null,seq__8886_9042__$1);
var G__9052 = null;
var G__9053 = 0;
var G__9054 = 0;
seq__8886_9030 = G__9051;
chunk__8887_9031 = G__9052;
count__8888_9032 = G__9053;
i__8889_9033 = G__9054;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.dashboard.wrapper = (function wrapper(this$){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-dashboard","div.buster-dashboard",718114967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",3842872421),"Buster dashboard"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-container","div.project-container",3841828386)], null)], null));var seq__8898_9055 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8899_9056 = null;var count__8900_9057 = 0;var i__8901_9058 = 0;while(true){
if((i__8901_9058 < count__8900_9057))
{var vec__8902_9059 = cljs.core._nth.call(null,chunk__8899_9056,i__8901_9058);var ev__8206__auto___9060 = cljs.core.nth.call(null,vec__8902_9059,0,null);var func__8207__auto___9061 = cljs.core.nth.call(null,vec__8902_9059,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9060,func__8207__auto___9061);
{
var G__9062 = seq__8898_9055;
var G__9063 = chunk__8899_9056;
var G__9064 = count__8900_9057;
var G__9065 = (i__8901_9058 + 1);
seq__8898_9055 = G__9062;
chunk__8899_9056 = G__9063;
count__8900_9057 = G__9064;
i__8901_9058 = G__9065;
continue;
}
} else
{var temp__4092__auto___9066 = cljs.core.seq.call(null,seq__8898_9055);if(temp__4092__auto___9066)
{var seq__8898_9067__$1 = temp__4092__auto___9066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8898_9067__$1))
{var c__7563__auto___9068 = cljs.core.chunk_first.call(null,seq__8898_9067__$1);{
var G__9069 = cljs.core.chunk_rest.call(null,seq__8898_9067__$1);
var G__9070 = c__7563__auto___9068;
var G__9071 = cljs.core.count.call(null,c__7563__auto___9068);
var G__9072 = 0;
seq__8898_9055 = G__9069;
chunk__8899_9056 = G__9070;
count__8900_9057 = G__9071;
i__8901_9058 = G__9072;
continue;
}
} else
{var vec__8903_9073 = cljs.core.first.call(null,seq__8898_9067__$1);var ev__8206__auto___9074 = cljs.core.nth.call(null,vec__8903_9073,0,null);var func__8207__auto___9075 = cljs.core.nth.call(null,vec__8903_9073,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9074,func__8207__auto___9075);
{
var G__9076 = cljs.core.next.call(null,seq__8898_9067__$1);
var G__9077 = null;
var G__9078 = 0;
var G__9079 = 0;
seq__8898_9055 = G__9076;
chunk__8899_9056 = G__9077;
count__8900_9057 = G__9078;
i__8901_9058 = G__9079;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.dashboard.is_open_QMARK_ = (function is_open_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.instabuster.dashboard.dashboard);
});
lt.plugins.instabuster.dashboard.dashboard_toggle = (function dashboard_toggle(){return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.instabuster.dashboard.dashboard);
});
lt.plugins.instabuster.dashboard.tests_ok_QMARK_ = (function tests_ok_QMARK_(results){return cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8904_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__8904_SHARP_));
}),results));
});
lt.plugins.instabuster.dashboard.__BEH__on_testrun_init = (function __BEH__on_testrun_init(this$){var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.util.dom.empty.call(null,container);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-results","test-results",3878200621),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"test-init-at","test-init-at",4728938311),Date.now()], null));
return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.testinit_ui.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-testrun-init","lt.plugins.instabuster.dashboard/on-testrun-init",4179404433),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_testrun_init,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testrun.init","testrun.init",2434156695),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_suite_start = (function __BEH__on_suite_start(this$,res){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-results","test-results",3878200621),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"suite-start-at","suite-start-at",4629296165),Date.now()], null));
return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-results","test-results",3878200621)], null),cljs.core.conj,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-suite-start","lt.plugins.instabuster.dashboard/on-suite-start",4796993126),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_suite_start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suite.start","suite.start",3669287262),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_test_result = (function __BEH__on_test_result(this$,res){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-results","test-results",3878200621)], null),cljs.core.conj,res);
var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.util.dom.empty.call(null,container);
return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.testprogress_ui.call(null,this$,res));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-test-result","lt.plugins.instabuster.dashboard/on-test-result",4765933177),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_test_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test.result","test.result",4487656555),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_suite_complete = (function __BEH__on_suite_complete(this$,res){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-results","test-results",3878200621)], null),cljs.core.conj,res);
var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.summary_ui.call(null,this$,res));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-suite-complete","lt.plugins.instabuster.dashboard/on-suite-complete",1387774759),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_suite_complete,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suite.complete","suite.complete",905647841),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_project_update = (function __BEH__on_project_update(this$,data){var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.project-container","div.project-container",3841828386),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.util.dom.empty.call(null,container);
return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.project_ui.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-project-update","lt.plugins.instabuster.dashboard/on-project-update",3590132122),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_project_update,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project.update","project.update",1499498672),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"buster-dashboard-toggle","buster-dashboard-toggle",3770649291),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Toggle dashboard",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.instabuster.dashboard.dashboard_toggle.call(null);
})], null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","dashboard","lt.plugins.instabuster.dashboard/dashboard",2108084815),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.dashboard","buster.dashboard",792268281),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Buster Dashboard",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.instabuster.dashboard.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.instabuster.dashboard.dashboard = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","dashboard","lt.plugins.instabuster.dashboard/dashboard",2108084815));
lt.plugins.instabuster.dashboard.__BEH__init = (function __BEH__init(this$){return lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.instabuster.dashboard.dashboard);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","init","lt.plugins.instabuster.dashboard/init",1002261459),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Init Buster Dashboard",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster.runner')) {
goog.provide('lt.plugins.instabuster.runner');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.cljs');
goog.require('lt.plugins.instabuster.dashboard');
goog.require('lt.util.cljs');
goog.require('lt.plugins.instabuster.dashboard');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.command');
lt.plugins.instabuster.runner.plugin_dir = lt.objs.plugins.find_plugin.call(null,"InstaBuster");
lt.plugins.instabuster.runner.buster_test_path = lt.objs.files.join.call(null,lt.plugins.instabuster.runner.plugin_dir,"node","buster-test.js");
lt.plugins.instabuster.runner.__BEH__on_connect_runner = (function __BEH__on_connect_runner(this$){if(cljs.core.truth_((function (){var or__6815__auto__ = new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
}
})()))
{return null;
} else
{var cp = require("child_process");var worker = cp.fork(lt.plugins.instabuster.runner.buster_test_path,[],{"env": {"NODE_PATH": lt.objs.files.join.call(null,lt.plugins.instabuster.runner.plugin_dir,"node_modules")}, "silent": true, "execPath": lt.objs.files.lt_home.call(null,lt.objs.thread.node_exe.call(null))});var dis = ((function (cp,worker){
return (function (code,signal){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
});})(cp,worker))
;lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),true], null));
worker.stdout.on("data",(function (msg){if(cljs.core.truth_([cljs.core.str(msg)].join('').contains("connected!")))
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false,new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return null;
}
}));
worker.stderr.on("data",(function (err){return cljs.core.println.call(null,[cljs.core.str("Error from runner: "),cljs.core.str(err)].join(''));
}));
worker.on("disconnect",dis);
worker.on("exit",dis);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster.runner","worker","lt.plugins.instabuster.runner/worker",2368857299),worker], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.runner","on-connect-runner","lt.plugins.instabuster.runner/on-connect-runner",3512507506),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.runner.__BEH__on_connect_runner,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect.runner","connect.runner",1554121766),null], null), null));
lt.plugins.instabuster.runner.__BEH__on_runner_kill = (function __BEH__on_runner_kill(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connected","connected",4729661051),false,new cljs.core.Keyword(null,"connecting","connecting",4533219882),false], null));
var temp__4092__auto__ = new cljs.core.Keyword("lt.plugins.instabuster.runner","worker","lt.plugins.instabuster.runner/worker",2368857299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var worker = temp__4092__auto__;if(cljs.core.truth_(worker.connected))
{worker.kill();
} else
{}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster.runner","worker","lt.plugins.instabuster.runner/worker",2368857299),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.runner","on-runner-kill","lt.plugins.instabuster.runner/on-runner-kill",2840031910),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.runner.__BEH__on_runner_kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close!","close!",3951350939),null,new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.instabuster.runner.__BEH__on_runner_refresh = (function __BEH__on_runner_refresh(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.runner","on-runner-refresh","lt.plugins.instabuster.runner/on-runner-refresh",4071607461),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.runner.__BEH__on_runner_refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.refresh","object.refresh",4196174494),null], null), null));
lt.plugins.instabuster.runner.__BEH__on_run_test = (function __BEH__on_run_test(this$,cb_obj,args){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect.runner","connect.runner",1554121766));
cljs.core.doall.call(null,cljs.core.range.call(null,1000000));
}
var worker = new cljs.core.Keyword("lt.plugins.instabuster.runner","worker","lt.plugins.instabuster.runner/worker",2368857299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));worker.removeAllListeners("message");
worker.on("message",(function (p1__9155_SHARP_){return lt.object.raise.call(null,cb_obj,new cljs.core.Keyword(null,"test.result","test.result",4487656555),args,p1__9155_SHARP_);
}));
lt.object.raise.call(null,lt.plugins.instabuster.dashboard.dashboard,new cljs.core.Keyword(null,"testrun.init","testrun.init",2434156695));
return worker.send(cljs.core.clj__GT_js.call(null,args));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.runner","on-run-test","lt.plugins.instabuster.runner/on-run-test",3119221887),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.runner.__BEH__on_run_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run.test","run.test",1784780167),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.runner","buster.runner","lt.plugins.instabuster.runner/buster.runner",3966127478),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buster.runner","buster.runner",2929516431),null,new cljs.core.Keyword(null,"client","client",3951159101),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Runner");
lt.plugins.instabuster.runner.runner = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster.runner","buster.runner","lt.plugins.instabuster.runner/buster.runner",3966127478));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster.live-toggler')) {
goog.provide('lt.plugins.instabuster.live_toggler');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.instabuster.live_toggler.live_toggler = (function live_toggler(this$){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__9080_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__9080_SHARP_))?null:"off"))].join('');
}))], null),"buster-live"], null));var seq__9087_9105 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__9088_9106 = null;var count__9089_9107 = 0;var i__9090_9108 = 0;while(true){
if((i__9090_9108 < count__9089_9107))
{var vec__9091_9109 = cljs.core._nth.call(null,chunk__9088_9106,i__9090_9108);var ev__8206__auto___9110 = cljs.core.nth.call(null,vec__9091_9109,0,null);var func__8207__auto___9111 = cljs.core.nth.call(null,vec__9091_9109,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9110,func__8207__auto___9111);
{
var G__9112 = seq__9087_9105;
var G__9113 = chunk__9088_9106;
var G__9114 = count__9089_9107;
var G__9115 = (i__9090_9108 + 1);
seq__9087_9105 = G__9112;
chunk__9088_9106 = G__9113;
count__9089_9107 = G__9114;
i__9090_9108 = G__9115;
continue;
}
} else
{var temp__4092__auto___9116 = cljs.core.seq.call(null,seq__9087_9105);if(temp__4092__auto___9116)
{var seq__9087_9117__$1 = temp__4092__auto___9116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9087_9117__$1))
{var c__7563__auto___9118 = cljs.core.chunk_first.call(null,seq__9087_9117__$1);{
var G__9119 = cljs.core.chunk_rest.call(null,seq__9087_9117__$1);
var G__9120 = c__7563__auto___9118;
var G__9121 = cljs.core.count.call(null,c__7563__auto___9118);
var G__9122 = 0;
seq__9087_9105 = G__9119;
chunk__9088_9106 = G__9120;
count__9089_9107 = G__9121;
i__9090_9108 = G__9122;
continue;
}
} else
{var vec__9092_9123 = cljs.core.first.call(null,seq__9087_9117__$1);var ev__8206__auto___9124 = cljs.core.nth.call(null,vec__9092_9123,0,null);var func__8207__auto___9125 = cljs.core.nth.call(null,vec__9092_9123,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9124,func__8207__auto___9125);
{
var G__9126 = cljs.core.next.call(null,seq__9087_9117__$1);
var G__9127 = null;
var G__9128 = 0;
var G__9129 = 0;
seq__9087_9105 = G__9126;
chunk__9088_9106 = G__9127;
count__9089_9107 = G__9128;
i__9090_9108 = G__9129;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.plugins.instabuster.live_toggler.wrapper = (function wrapper(this$){var e__8205__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.instabuster.live_toggler.live_toggler.call(null,this$)], null));var seq__9099_9130 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9100_9131 = null;var count__9101_9132 = 0;var i__9102_9133 = 0;while(true){
if((i__9102_9133 < count__9101_9132))
{var vec__9103_9134 = cljs.core._nth.call(null,chunk__9100_9131,i__9102_9133);var ev__8206__auto___9135 = cljs.core.nth.call(null,vec__9103_9134,0,null);var func__8207__auto___9136 = cljs.core.nth.call(null,vec__9103_9134,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9135,func__8207__auto___9136);
{
var G__9137 = seq__9099_9130;
var G__9138 = chunk__9100_9131;
var G__9139 = count__9101_9132;
var G__9140 = (i__9102_9133 + 1);
seq__9099_9130 = G__9137;
chunk__9100_9131 = G__9138;
count__9101_9132 = G__9139;
i__9102_9133 = G__9140;
continue;
}
} else
{var temp__4092__auto___9141 = cljs.core.seq.call(null,seq__9099_9130);if(temp__4092__auto___9141)
{var seq__9099_9142__$1 = temp__4092__auto___9141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9099_9142__$1))
{var c__7563__auto___9143 = cljs.core.chunk_first.call(null,seq__9099_9142__$1);{
var G__9144 = cljs.core.chunk_rest.call(null,seq__9099_9142__$1);
var G__9145 = c__7563__auto___9143;
var G__9146 = cljs.core.count.call(null,c__7563__auto___9143);
var G__9147 = 0;
seq__9099_9130 = G__9144;
chunk__9100_9131 = G__9145;
count__9101_9132 = G__9146;
i__9102_9133 = G__9147;
continue;
}
} else
{var vec__9104_9148 = cljs.core.first.call(null,seq__9099_9142__$1);var ev__8206__auto___9149 = cljs.core.nth.call(null,vec__9104_9148,0,null);var func__8207__auto___9150 = cljs.core.nth.call(null,vec__9104_9148,1,null);lt.util.dom.on.call(null,e__8205__auto__,ev__8206__auto___9149,func__8207__auto___9150);
{
var G__9151 = cljs.core.next.call(null,seq__9099_9142__$1);
var G__9152 = null;
var G__9153 = 0;
var G__9154 = 0;
seq__9099_9130 = G__9151;
chunk__9100_9131 = G__9152;
count__9101_9132 = G__9153;
i__9102_9133 = G__9154;
continue;
}
}
} else
{}
}
break;
}
return e__8205__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.live-toggler","buster-live-toggler","lt.plugins.instabuster.live-toggler/buster-live-toggler",2695818706),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Live Mode Toggler",new cljs.core.Keyword(null,"live","live",1017226334),false,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,editor){if(cljs.core.truth_(new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))))
{lt.plugins.instabuster.live_toggler.wrapper.call(null,this$);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",4001043679),editor], null));
var editor_content = lt.object.__GT_content.call(null,editor);var frame = lt.util.dom.parent.call(null,editor_content);var toggler = lt.plugins.instabuster.live_toggler.wrapper.call(null,this$);lt.util.dom.append.call(null,toggler,editor_content);
return lt.util.dom.append.call(null,frame,toggler);
} else
{return null;
}
}
}));
lt.plugins.instabuster.live_toggler.maybe_add_toggler = (function maybe_add_toggler(editor){if(cljs.core.truth_(new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{return null;
} else
{var toggler = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster.live-toggler","buster-live-toggler","lt.plugins.instabuster.live-toggler/buster-live-toggler",2695818706),editor);return lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379),toggler], null));
}
});
lt.plugins.instabuster.live_toggler.live_off = (function live_off(editor){lt.object.remove_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)], null));
var temp__4092__auto__ = new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(temp__4092__auto__))
{var toggler = temp__4092__auto__;return lt.object.merge_BANG_.call(null,toggler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),false], null));
} else
{return null;
}
});
lt.plugins.instabuster.live_toggler.live_on = (function live_on(editor){lt.plugins.instabuster.live_toggler.maybe_add_toggler.call(null,editor);
lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)], null));
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),true], null));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster')) {
goog.provide('lt.plugins.instabuster');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('lt.util.cljs');
goog.require('lt.objs.dialogs');
goog.require('lt.plugins.instabuster.dashboard');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.instabuster.config');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.cljs');
goog.require('lt.plugins.instabuster.dashboard');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.thread');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.instabuster.live_toggler');
goog.require('lt.objs.clients');
goog.require('lt.objs.browser');
goog.require('lt.plugins.instabuster.runner');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.plugins.instabuster.runner');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.plugins.instabuster.config');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.plugins.instabuster.live_toggler');
goog.require('lt.objs.editor');
lt.plugins.instabuster.plugin_dir = lt.objs.plugins.find_plugin.call(null,"InstaBuster");
lt.plugins.instabuster.capture_browser_BANG_ = (function capture_browser_BANG_(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{var cur_tab = lt.objs.tabs.active_tab.call(null);var b = lt.objs.browser.add.call(null);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser","browser",1164844698),b], null));
lt.object.raise.call(null,b,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),"http://localhost:1111/capture");
if(cljs.core.truth_(cur_tab))
{return lt.objs.tabs.active_BANG_.call(null,cur_tab);
} else
{return null;
}
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","capture","lt.plugins.instabuster/capture",2568502434),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Capture browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.instabuster.capture_browser_BANG_.call(null,lt.plugins.instabuster.buster);
})], null));
lt.plugins.instabuster.find_line_containing = (function find_line_containing(editor,txt,callback){return lt.objs.editor.__GT_cm_ed.call(null,editor).getDoc().eachLine((function (line_handle){if(cljs.core.truth_(line_handle.text.contains(txt)))
{return callback.call(null,lt.objs.editor.__GT_cm_ed.call(null,editor).lineInfo(line_handle).line);
} else
{return null;
}
}));
});
lt.plugins.instabuster.show_test_results_inline = (function show_test_results_inline(args,res){var editor = lt.objs.editor.pool.last_active.call(null);var testName = res.details.name;var status = res.status;return lt.plugins.instabuster.find_line_containing.call(null,editor,testName,(function (lineNo){if(cljs.core._EQ_.call(null,status,"success"))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo], null));
} else
{if(cljs.core._EQ_.call(null,status,"failure"))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),res.details.error.message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo], null));
} else
{if(cljs.core._EQ_.call(null,status,"error"))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),res.details.error.message,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo], null));
} else
{return null;
}
}
}
}));
});
lt.plugins.instabuster.show_test_results = (function show_test_results(args,res){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Test "),cljs.core.str(res.executedTests),cljs.core.str("/"),cljs.core.str(res.expectedTests)].join(''));
lt.object.raise.call(null,lt.plugins.instabuster.dashboard.dashboard,new cljs.core.Keyword(null,"test.result","test.result",4487656555),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"status","status",4416389988),res.status,new cljs.core.Keyword(null,"test","test",1017460740),res.details.name,new cljs.core.Keyword(null,"test-case","test-case",4082063101),cljs.core.last.call(null,res.context).name,new cljs.core.Keyword(null,"message","message",1968829305),((cljs.core._EQ_.call(null,"success",res.status))?null:res.details.error.message),new cljs.core.Keyword(null,"expected-tests","expected-tests",3805852222),res.expectedTests,new cljs.core.Keyword(null,"executed-tests","executed-tests",2442601941),res.executedTests], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args)))
{lt.plugins.instabuster.show_test_results_inline.call(null,args,res);
} else
{}
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.js__GT_clj.call(null,res.log))))
{lt.objs.console.log.call(null,[cljs.core.str(res.details.name),cljs.core.str(" ("),cljs.core.str(cljs.core.last.call(null,res.context).name),cljs.core.str(")")].join(''));
var seq__9254 = cljs.core.seq.call(null,res.log);var chunk__9255 = null;var count__9256 = 0;var i__9257 = 0;while(true){
if((i__9257 < count__9256))
{var out = cljs.core._nth.call(null,chunk__9255,i__9257);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9258 = seq__9254;
var G__9259 = chunk__9255;
var G__9260 = count__9256;
var G__9261 = (i__9257 + 1);
seq__9254 = G__9258;
chunk__9255 = G__9259;
count__9256 = G__9260;
i__9257 = G__9261;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9254);if(temp__4092__auto__)
{var seq__9254__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9254__$1))
{var c__7563__auto__ = cljs.core.chunk_first.call(null,seq__9254__$1);{
var G__9262 = cljs.core.chunk_rest.call(null,seq__9254__$1);
var G__9263 = c__7563__auto__;
var G__9264 = cljs.core.count.call(null,c__7563__auto__);
var G__9265 = 0;
seq__9254 = G__9262;
chunk__9255 = G__9263;
count__9256 = G__9264;
i__9257 = G__9265;
continue;
}
} else
{var out = cljs.core.first.call(null,seq__9254__$1);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9266 = cljs.core.next.call(null,seq__9254__$1);
var G__9267 = null;
var G__9268 = 0;
var G__9269 = 0;
seq__9254 = G__9266;
chunk__9255 = G__9267;
count__9256 = G__9268;
i__9257 = G__9269;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
lt.plugins.instabuster.show_suite_results = (function show_suite_results(args,res){var r = res.results;var msg = [cljs.core.str("Buster suite complete. #tests: "),cljs.core.str(r.tests),cljs.core.str(", #failed: "),cljs.core.str(r.failures),cljs.core.str(", #errors: "),cljs.core.str(r.errors)].join('');lt.objs.notifos.set_msg_BANG_.call(null,msg);
lt.objs.notifos.done_working.call(null,msg);
return lt.object.raise.call(null,lt.plugins.instabuster.dashboard.dashboard,new cljs.core.Keyword(null,"suite.complete","suite.complete",905647841),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",4416389988),"suite-complete",new cljs.core.Keyword(null,"tests","tests",1124155795),r.tests,new cljs.core.Keyword(null,"failures","failures",1689842587),r.failures,new cljs.core.Keyword(null,"errors","errors",4014236381),r.errors], null));
});
lt.plugins.instabuster.__BEH__on_test = (function __BEH__on_test(this$,args){var temp__4090__auto__ = (function (){var or__6815__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(args);if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var conf = temp__4090__auto__;var run = (function (){return lt.object.raise.call(null,lt.plugins.instabuster.runner.runner,new cljs.core.Keyword(null,"run.test","run.test",1784780167),this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"test",new cljs.core.Keyword(null,"config","config",3954079412),conf,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args)], null));
});var capture_run = ((function (run){
return (function (){lt.plugins.instabuster.capture_browser_BANG_.call(null,this$);
return setTimeout(run,100);
});})(run))
;lt.objs.notifos.working.call(null,[cljs.core.str("Running Buster tests for "),cljs.core.str(lt.objs.files.parent.call(null,conf))].join(''));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client))))
{return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641),capture_run);
} else
{if(cljs.core.not.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return capture_run.call(null);
} else
{return run.call(null);
}
}
} else
{lt.objs.console.error.call(null,[cljs.core.str("No suitable buster config found."),cljs.core.str("None found for project (Connect: Buster) or based on path: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args))].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"provide.config","provide.config",2224080545));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test","lt.plugins.instabuster/on-test",4654669836),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",1017460740),null], null), null));
lt.plugins.instabuster.__BEH__on_test_result = (function __BEH__on_test_result(this$,args,res){if(cljs.core._EQ_.call(null,"suite-complete",res.status))
{return lt.plugins.instabuster.show_suite_results.call(null,args,res);
} else
{if(cljs.core._EQ_.call(null,"suite-configuration",res.status))
{return lt.object.raise.call(null,lt.plugins.instabuster.dashboard.dashboard,new cljs.core.Keyword(null,"suite.start","suite.start",3669287262),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),"suite-start",new cljs.core.Keyword(null,"tests","tests",1124155795),res.details.tests,new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"config","config",3954079412).cljs$core$IFn$_invoke$arity$1(args)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return lt.plugins.instabuster.show_test_results.call(null,args,res);
} else
{return null;
}
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test-result","lt.plugins.instabuster/on-test-result",1678755110),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test.result","test.result",4487656555),null], null), null));
lt.plugins.instabuster.__BEH__on_test_live = (function __BEH__on_test_live(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),lt.plugins.instabuster.config.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test-live","lt.plugins.instabuster/on-test-live",3411113269),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test_live,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.instabuster.__BEH__on_browser_destroyed = (function __BEH__on_browser_destroyed(browser){if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,browser),lt.object.__GT_id.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)))))
{return lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser","browser",1164844698),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-browser-destroyed","lt.plugins.instabuster/on-browser-destroyed",982842018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_browser_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","test-all","lt.plugins.instabuster/test-all",4290515266),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run all tests",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),cljs.core.PersistentArrayMap.EMPTY);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","test-current","lt.plugins.instabuster/test-current",4558530698),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run tests for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var editor = temp__4092__auto__;if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748))))
{return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),lt.plugins.instabuster.config.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
} else
{return null;
}
})], null));
lt.plugins.instabuster.__BEH__on_live_toggle_BANG_ = (function __BEH__on_live_toggle_BANG_(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748))))
{if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{lt.plugins.instabuster.live_toggler.live_off.call(null,editor);
} else
{lt.plugins.instabuster.live_toggler.live_on.call(null,editor);
}
} else
{}
return lt.objs.editor.focus.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-live-toggle!","lt.plugins.instabuster/on-live-toggle!",1802102518),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_live_toggle_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-live","toggle-live",4616945463),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Toggle live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
} else
{return null;
}
})], null));
lt.plugins.instabuster.__BEH__on_maybe_toggle_buster = (function __BEH__on_maybe_toggle_buster(editor){return lt.plugins.instabuster.config.maybe_buster_test.call(null,editor,lt.plugins.instabuster.buster,(function (){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"test.editor","test.editor",4114255291));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-maybe-toggle-buster","lt.plugins.instabuster/on-maybe-toggle-buster",2044317443),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_maybe_toggle_buster,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.instabuster.__BEH__on_test_editor_BANG_ = (function __BEH__on_test_editor_BANG_(editor){lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748)], null));
return lt.plugins.instabuster.live_toggler.maybe_add_toggler.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test-editor!","lt.plugins.instabuster/on-test-editor!",3496595619),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test_editor_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test.editor","test.editor",4114255291),null], null), null));
lt.plugins.instabuster.__BEH__on_config_provided = (function __BEH__on_config_provided(this$,path){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-config-provided","lt.plugins.instabuster/on-config-provided",3400103788),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_config_provided,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config.provided","config.provided",1028780673),null], null), null));
lt.plugins.instabuster.__BEH__on_provide_config = (function __BEH__on_provide_config(this$,trigger){return lt.objs.dialogs.file.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"config.provided","config.provided",1028780673));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-provide-config","lt.plugins.instabuster/on-provide-config",4232991224),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_provide_config,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provide.config","provide.config",2224080545),null], null), null));
lt.plugins.instabuster.__BEH__on_maybe_autotest = (function __BEH__on_maybe_autotest(editor){if(cljs.core.truth_((function (){var and__6803__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(lt.plugins.instabuster.config.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))),new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)));if(and__6803__auto__)
{var and__6803__auto____$1 = new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(and__6803__auto____$1))
{return cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)));
} else
{return and__6803__auto____$1;
}
} else
{return and__6803__auto__;
}
})()))
{return lt.plugins.instabuster.config.maybe_buster_file.call(null,editor,lt.plugins.instabuster.buster,(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),cljs.core.PersistentArrayMap.EMPTY).call(null);
}));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-maybe-autotest","lt.plugins.instabuster/on-maybe-autotest",4789533568),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_maybe_autotest,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));
lt.plugins.instabuster.__BEH__on_toggle_autotest = (function __BEH__on_toggle_autotest(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autotest","autotest",2453579315),cljs.core.not.call(null,new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))], null));
return lt.objs.notifos.done_working.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))?"Autotest on":"Autotest off"));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-toggle-autotest","lt.plugins.instabuster/on-toggle-autotest",3962691208),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_toggle_autotest,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autotest","autotest",2453579315),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"toggle-autotest","toggle-autotest",2307058828),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Toggle autotest",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"autotest","autotest",2453579315));
})], null));
lt.plugins.instabuster.__BEH__on_connect = (function __BEH__on_connect(this$,path){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"config.provided","config.provided",1028780673),path);
return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641),(function (){return cljs.core.List.EMPTY;
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-connect","lt.plugins.instabuster/on-connect",2764083288),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Buster",new cljs.core.Keyword(null,"desc","desc",1016984067),"Please provide the location of buster.js for your javascript project",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.file.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-plugin","lt.plugins.instabuster/buster-plugin",2156771115),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buster-plugin","buster-plugin",1976644689)], null),new cljs.core.Keyword(null,"name","name",1017277949),"buster-plugin");
lt.plugins.instabuster.buster = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-plugin","lt.plugins.instabuster/buster-plugin",2156771115));
cljs.core.add_watch.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"object.change","object.change",966833329),(function (_,___$1,___$2,___$3){return lt.object.raise.call(null,lt.plugins.instabuster.dashboard.dashboard,new cljs.core.Keyword(null,"project.update","project.update",1499498672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conf","conf",1016963734),new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)),new cljs.core.Keyword(null,"autotest","autotest",2453579315),new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster))], null));
}));
lt.plugins.instabuster.buster_server_path = lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node","buster-server.js");
lt.plugins.instabuster.__BEH__on_start_server = (function __BEH__on_start_server(this$,cb){if(cljs.core.truth_((function (){var or__6815__auto__ = new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6815__auto__))
{return or__6815__auto__;
} else
{return new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
}
})()))
{return null;
} else
{lt.objs.notifos.working.call(null,[cljs.core.str("Connecting to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
var cp = require("child_process");var worker = cp.fork(lt.plugins.instabuster.buster_server_path,["-p","1111"],{"silent": true, "execPath": lt.objs.files.lt_home.call(null,lt.objs.thread.node_exe.call(null))});var dis = ((function (cp,worker){
return (function (code,signal){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
});})(cp,worker))
;var msg = ((function (cp,worker,dis){
return (function (m){return console.log(m);
});})(cp,worker,dis))
;lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),true], null));
worker.on("message",msg);
worker.on("disconnect",dis);
worker.on("exit",dis);
worker.stdout.on("data",(function (msg__$1){cljs.core.println.call(null,[cljs.core.str("Buster server out: "),cljs.core.str(msg__$1)].join(''));
if(cljs.core.truth_([cljs.core.str(msg__$1)].join('').contains("buster-server running")))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false,new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
lt.objs.notifos.done_working.call(null,[cljs.core.str("Connected to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
if(cljs.core.truth_(cb.call(null)))
{} else
{}
var sidebar_client = lt.objs.clients.handle_connection_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",3404733903),lt.object.__GT_id.call(null,this$),new cljs.core.Keyword(null,"name","name",1017277949),"Buster",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buster.client","buster.client",2491610154)], null),new cljs.core.Keyword(null,"dill","dill",1016987703),"Dall",new cljs.core.Keyword(null,"type","type",1017479852),"Buster Server"], null));return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070),sidebar_client], null));
} else
{return null;
}
}));
worker.stderr.on("data",(function (err){cljs.core.println.call(null,[cljs.core.str("Buster server error: "),cljs.core.str(err)].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
}));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),worker], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-start-server","lt.plugins.instabuster/on-start-server",535942040),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_start_server,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start.server","start.server",4774408641),null], null), null));
lt.plugins.instabuster.__BEH__on_server_error = (function __BEH__on_server_error(this$,msg){return console.error(lt.plugins.instabuster.stack.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-error","lt.plugins.instabuster/on-server-error",2565253000),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.instabuster.__BEH__on_server_kill = (function __BEH__on_server_kill(this$){lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false], null));
lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"disconnect","disconnect",1544309774));
var temp__4092__auto___9270 = new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(temp__4092__auto___9270))
{var b_9271 = temp__4092__auto___9270;lt.object.raise.call(null,b_9271,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{}
var temp__4092__auto___9272 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9272))
{var worker_9273 = temp__4092__auto___9272;worker_9273.kill();
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),null], null));
} else
{}
if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,this$),lt.object.__GT_id.call(null,lt.plugins.instabuster.buster_client)))
{} else
{lt.objs.clients.rem_BANG_.call(null,this$);
}
var temp__4092__auto___9274 = new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9274))
{var sb_9275 = temp__4092__auto___9274;lt.objs.clients.rem_BANG_.call(null,sb_9275);
lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070),null], null));
} else
{}
return lt.object.raise.call(null,lt.plugins.instabuster.runner.runner,new cljs.core.Keyword(null,"kill","kill",1017196240));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-kill","lt.plugins.instabuster/on-server-kill",770834198),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close!","close!",3951350939),null,new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.instabuster.__BEH__on_server_disconnect = (function __BEH__on_server_disconnect(this$){var temp__4092__auto___9276 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9276))
{var worker_9277 = temp__4092__auto___9276;if(cljs.core.truth_(worker_9277.connected))
{worker_9277.disconnect();
} else
{}
} else
{}
lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),false], null));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Disconnected from: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client)))].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-disconnect","lt.plugins.instabuster/on-server-disconnect",815244884),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.instabuster.__BEH__on_refresh = (function __BEH__on_refresh(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-refresh","lt.plugins.instabuster/on-refresh",2630003257),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.refresh","object.refresh",4196174494),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"start-server","start-server",3886904960),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Start server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641),(function (){return cljs.core.List.EMPTY;
}));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"stop-server","stop-server",2736578272),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Stop server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"kill","kill",1017196240));
})], null));
lt.plugins.instabuster.__BEH__on_send = (function __BEH__on_send(this$,msg){return new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).send(cljs.core.clj__GT_js.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-send","lt.plugins.instabuster/on-send",4654705938),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.client","lt.plugins.instabuster/buster.client",1799124756),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buster.client","buster.client",2491610154),null,new cljs.core.Keyword(null,"client","client",3951159101),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Server");
lt.plugins.instabuster.buster_client = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.client","lt.plugins.instabuster/buster.client",1799124756));
}

//# sourceMappingURL=instabuster_compiled.js.map