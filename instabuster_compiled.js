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
lt.plugins.instabuster.config.resolve_buster_js = (function resolve_buster_js(editor){var or__6813__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(lt.plugins.instabuster.config.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.config.buster));
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
lt.plugins.instabuster.config.resolve_tests = (function resolve_tests(groups){return lt.util.cljs.clj__GT_js.call(null,cljs.core.map.call(null,(function (group){var d = lt.plugins.instabuster.config.whenjs.defer();group.on("load:tests",(function (tests){return d.resolve(tests.map((function (p1__8806_SHARP_){return p1__8806_SHARP_.path;
})));
}));
group.resolve().then((function (){return cljs.core.List.EMPTY;
}));
return d;
}),groups));
});
lt.plugins.instabuster.config.maybe_buster_test = (function maybe_buster_test(editor,callback){var temp__4092__auto__ = lt.plugins.instabuster.config.resolve_buster_js.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.config.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.config.whenjs.all(lt.plugins.instabuster.config.resolve_tests.call(null,lt.plugins.instabuster.config.resolve_browser_groups.call(null,busterjs))).then((function (results){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8807_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.config.rem_pre_sep.call(null,p1__8807_SHARP_));
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
lt.plugins.instabuster.config.paths_from_resourceSets = (function paths_from_resourceSets(resourceSets){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8808_SHARP_){return lt.util.cljs.js__GT_clj.call(null,p1__8808_SHARP_.map((function (res){return res.path;
})));
}),resourceSets));
});
lt.plugins.instabuster.config.maybe_buster_file = (function maybe_buster_file(editor,callback){var temp__4092__auto__ = lt.plugins.instabuster.config.resolve_buster_js.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.config.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.config.whenjs.all(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__8809_SHARP_){return p1__8809_SHARP_.resolve();
}),lt.plugins.instabuster.config.resolve_browser_groups.call(null,busterjs)))).then((function (rs){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8810_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.config.rem_pre_sep.call(null,p1__8810_SHARP_));
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
lt.plugins.instabuster.dashboard.summary_ui = (function summary_ui(this$,res){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.summary","div.summary",724307643),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Tests: "),cljs.core.str(new cljs.core.Keyword(null,"tests","tests",1124155795).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Failures: "),cljs.core.str(new cljs.core.Keyword(null,"failures","failures",1689842587).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Errors: "),cljs.core.str(new cljs.core.Keyword(null,"errors","errors",4014236381).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Total: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"test-init-at","test-init-at",4728938311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),cljs.core.str(" ms")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Test: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"suite-start-at","suite-start-at",4629296165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),cljs.core.str(" ms")].join('')], null)], null));var seq__8817_8898 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8818_8899 = null;var count__8819_8900 = 0;var i__8820_8901 = 0;while(true){
if((i__8820_8901 < count__8819_8900))
{var vec__8821_8902 = cljs.core._nth.call(null,chunk__8818_8899,i__8820_8901);var ev__8184__auto___8903 = cljs.core.nth.call(null,vec__8821_8902,0,null);var func__8185__auto___8904 = cljs.core.nth.call(null,vec__8821_8902,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8903,func__8185__auto___8904);
{
var G__8905 = seq__8817_8898;
var G__8906 = chunk__8818_8899;
var G__8907 = count__8819_8900;
var G__8908 = (i__8820_8901 + 1);
seq__8817_8898 = G__8905;
chunk__8818_8899 = G__8906;
count__8819_8900 = G__8907;
i__8820_8901 = G__8908;
continue;
}
} else
{var temp__4092__auto___8909 = cljs.core.seq.call(null,seq__8817_8898);if(temp__4092__auto___8909)
{var seq__8817_8910__$1 = temp__4092__auto___8909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8817_8910__$1))
{var c__7561__auto___8911 = cljs.core.chunk_first.call(null,seq__8817_8910__$1);{
var G__8912 = cljs.core.chunk_rest.call(null,seq__8817_8910__$1);
var G__8913 = c__7561__auto___8911;
var G__8914 = cljs.core.count.call(null,c__7561__auto___8911);
var G__8915 = 0;
seq__8817_8898 = G__8912;
chunk__8818_8899 = G__8913;
count__8819_8900 = G__8914;
i__8820_8901 = G__8915;
continue;
}
} else
{var vec__8822_8916 = cljs.core.first.call(null,seq__8817_8910__$1);var ev__8184__auto___8917 = cljs.core.nth.call(null,vec__8822_8916,0,null);var func__8185__auto___8918 = cljs.core.nth.call(null,vec__8822_8916,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8917,func__8185__auto___8918);
{
var G__8919 = cljs.core.next.call(null,seq__8817_8910__$1);
var G__8920 = null;
var G__8921 = 0;
var G__8922 = 0;
seq__8817_8898 = G__8919;
chunk__8818_8899 = G__8920;
count__8819_8900 = G__8921;
i__8820_8901 = G__8922;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.dashboard.failed_test_ui = (function failed_test_ui(res){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("("),cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(res))),cljs.core.str("): "),cljs.core.str(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(res))].join('')," (",new cljs.core.Keyword(null,"test-case","test-case",4082063101).cljs$core$IFn$_invoke$arity$1(res),")",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(res)], null)], null)], null));var seq__8829_8923 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8830_8924 = null;var count__8831_8925 = 0;var i__8832_8926 = 0;while(true){
if((i__8832_8926 < count__8831_8925))
{var vec__8833_8927 = cljs.core._nth.call(null,chunk__8830_8924,i__8832_8926);var ev__8184__auto___8928 = cljs.core.nth.call(null,vec__8833_8927,0,null);var func__8185__auto___8929 = cljs.core.nth.call(null,vec__8833_8927,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8928,func__8185__auto___8929);
{
var G__8930 = seq__8829_8923;
var G__8931 = chunk__8830_8924;
var G__8932 = count__8831_8925;
var G__8933 = (i__8832_8926 + 1);
seq__8829_8923 = G__8930;
chunk__8830_8924 = G__8931;
count__8831_8925 = G__8932;
i__8832_8926 = G__8933;
continue;
}
} else
{var temp__4092__auto___8934 = cljs.core.seq.call(null,seq__8829_8923);if(temp__4092__auto___8934)
{var seq__8829_8935__$1 = temp__4092__auto___8934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8829_8935__$1))
{var c__7561__auto___8936 = cljs.core.chunk_first.call(null,seq__8829_8935__$1);{
var G__8937 = cljs.core.chunk_rest.call(null,seq__8829_8935__$1);
var G__8938 = c__7561__auto___8936;
var G__8939 = cljs.core.count.call(null,c__7561__auto___8936);
var G__8940 = 0;
seq__8829_8923 = G__8937;
chunk__8830_8924 = G__8938;
count__8831_8925 = G__8939;
i__8832_8926 = G__8940;
continue;
}
} else
{var vec__8834_8941 = cljs.core.first.call(null,seq__8829_8935__$1);var ev__8184__auto___8942 = cljs.core.nth.call(null,vec__8834_8941,0,null);var func__8185__auto___8943 = cljs.core.nth.call(null,vec__8834_8941,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8942,func__8185__auto___8943);
{
var G__8944 = cljs.core.next.call(null,seq__8829_8935__$1);
var G__8945 = null;
var G__8946 = 0;
var G__8947 = 0;
seq__8829_8923 = G__8944;
chunk__8830_8924 = G__8945;
count__8831_8925 = G__8946;
i__8832_8926 = G__8947;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.dashboard.failed_ui = (function failed_ui(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.failed-tests","div.failed-tests",1606312512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"Failed tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (p1__8835_SHARP_){return lt.plugins.instabuster.dashboard.failed_test_ui.call(null,p1__8835_SHARP_);
}),cljs.core.filter.call(null,(function (p1__8836_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__8836_SHARP_));
}),new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))], null)], null));var seq__8843_8948 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8844_8949 = null;var count__8845_8950 = 0;var i__8846_8951 = 0;while(true){
if((i__8846_8951 < count__8845_8950))
{var vec__8847_8952 = cljs.core._nth.call(null,chunk__8844_8949,i__8846_8951);var ev__8184__auto___8953 = cljs.core.nth.call(null,vec__8847_8952,0,null);var func__8185__auto___8954 = cljs.core.nth.call(null,vec__8847_8952,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8953,func__8185__auto___8954);
{
var G__8955 = seq__8843_8948;
var G__8956 = chunk__8844_8949;
var G__8957 = count__8845_8950;
var G__8958 = (i__8846_8951 + 1);
seq__8843_8948 = G__8955;
chunk__8844_8949 = G__8956;
count__8845_8950 = G__8957;
i__8846_8951 = G__8958;
continue;
}
} else
{var temp__4092__auto___8959 = cljs.core.seq.call(null,seq__8843_8948);if(temp__4092__auto___8959)
{var seq__8843_8960__$1 = temp__4092__auto___8959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8843_8960__$1))
{var c__7561__auto___8961 = cljs.core.chunk_first.call(null,seq__8843_8960__$1);{
var G__8962 = cljs.core.chunk_rest.call(null,seq__8843_8960__$1);
var G__8963 = c__7561__auto___8961;
var G__8964 = cljs.core.count.call(null,c__7561__auto___8961);
var G__8965 = 0;
seq__8843_8948 = G__8962;
chunk__8844_8949 = G__8963;
count__8845_8950 = G__8964;
i__8846_8951 = G__8965;
continue;
}
} else
{var vec__8848_8966 = cljs.core.first.call(null,seq__8843_8960__$1);var ev__8184__auto___8967 = cljs.core.nth.call(null,vec__8848_8966,0,null);var func__8185__auto___8968 = cljs.core.nth.call(null,vec__8848_8966,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8967,func__8185__auto___8968);
{
var G__8969 = cljs.core.next.call(null,seq__8843_8960__$1);
var G__8970 = null;
var G__8971 = 0;
var G__8972 = 0;
seq__8843_8948 = G__8969;
chunk__8844_8949 = G__8970;
count__8845_8950 = G__8971;
i__8846_8951 = G__8972;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.dashboard.testprogress_ui = (function testprogress_ui(this$,res){var e__8183__auto__ = crate.core.html.call(null,(function (){var status = ((lt.plugins.instabuster.dashboard.tests_ok_QMARK_.call(null,new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))?"ok":"error");return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-results","div.buster-results",2322289209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),[cljs.core.str("Testresults for "),cljs.core.str(lt.plugins.instabuster.dashboard.project_name.call(null,new cljs.core.Keyword(null,"config","config",3954079412).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",4307793311),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"executed-tests","executed-tests",2442601941).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"max","max",1014012118),new cljs.core.Keyword(null,"expected-tests","expected-tests",3805852222).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"class","class",1108647146),status], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.curr-test","p.curr-test",1775184577),[cljs.core.str(new cljs.core.Keyword(null,"executed-tests","executed-tests",2442601941).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"expected-tests","expected-tests",3805852222).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"test-case","test-case",4082063101).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(")")].join('')], null),lt.plugins.instabuster.dashboard.failed_ui.call(null,this$)], null);
})());var seq__8855_8973 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8856_8974 = null;var count__8857_8975 = 0;var i__8858_8976 = 0;while(true){
if((i__8858_8976 < count__8857_8975))
{var vec__8859_8977 = cljs.core._nth.call(null,chunk__8856_8974,i__8858_8976);var ev__8184__auto___8978 = cljs.core.nth.call(null,vec__8859_8977,0,null);var func__8185__auto___8979 = cljs.core.nth.call(null,vec__8859_8977,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8978,func__8185__auto___8979);
{
var G__8980 = seq__8855_8973;
var G__8981 = chunk__8856_8974;
var G__8982 = count__8857_8975;
var G__8983 = (i__8858_8976 + 1);
seq__8855_8973 = G__8980;
chunk__8856_8974 = G__8981;
count__8857_8975 = G__8982;
i__8858_8976 = G__8983;
continue;
}
} else
{var temp__4092__auto___8984 = cljs.core.seq.call(null,seq__8855_8973);if(temp__4092__auto___8984)
{var seq__8855_8985__$1 = temp__4092__auto___8984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8855_8985__$1))
{var c__7561__auto___8986 = cljs.core.chunk_first.call(null,seq__8855_8985__$1);{
var G__8987 = cljs.core.chunk_rest.call(null,seq__8855_8985__$1);
var G__8988 = c__7561__auto___8986;
var G__8989 = cljs.core.count.call(null,c__7561__auto___8986);
var G__8990 = 0;
seq__8855_8973 = G__8987;
chunk__8856_8974 = G__8988;
count__8857_8975 = G__8989;
i__8858_8976 = G__8990;
continue;
}
} else
{var vec__8860_8991 = cljs.core.first.call(null,seq__8855_8985__$1);var ev__8184__auto___8992 = cljs.core.nth.call(null,vec__8860_8991,0,null);var func__8185__auto___8993 = cljs.core.nth.call(null,vec__8860_8991,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8992,func__8185__auto___8993);
{
var G__8994 = cljs.core.next.call(null,seq__8855_8985__$1);
var G__8995 = null;
var G__8996 = 0;
var G__8997 = 0;
seq__8855_8973 = G__8994;
chunk__8856_8974 = G__8995;
count__8857_8975 = G__8996;
i__8858_8976 = G__8997;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.dashboard.testinit_ui = (function testinit_ui(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-results","div.buster-results",2322289209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Testresults"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Initializing testrun..."], null)], null));var seq__8867_8998 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8868_8999 = null;var count__8869_9000 = 0;var i__8870_9001 = 0;while(true){
if((i__8870_9001 < count__8869_9000))
{var vec__8871_9002 = cljs.core._nth.call(null,chunk__8868_8999,i__8870_9001);var ev__8184__auto___9003 = cljs.core.nth.call(null,vec__8871_9002,0,null);var func__8185__auto___9004 = cljs.core.nth.call(null,vec__8871_9002,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9003,func__8185__auto___9004);
{
var G__9005 = seq__8867_8998;
var G__9006 = chunk__8868_8999;
var G__9007 = count__8869_9000;
var G__9008 = (i__8870_9001 + 1);
seq__8867_8998 = G__9005;
chunk__8868_8999 = G__9006;
count__8869_9000 = G__9007;
i__8870_9001 = G__9008;
continue;
}
} else
{var temp__4092__auto___9009 = cljs.core.seq.call(null,seq__8867_8998);if(temp__4092__auto___9009)
{var seq__8867_9010__$1 = temp__4092__auto___9009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8867_9010__$1))
{var c__7561__auto___9011 = cljs.core.chunk_first.call(null,seq__8867_9010__$1);{
var G__9012 = cljs.core.chunk_rest.call(null,seq__8867_9010__$1);
var G__9013 = c__7561__auto___9011;
var G__9014 = cljs.core.count.call(null,c__7561__auto___9011);
var G__9015 = 0;
seq__8867_8998 = G__9012;
chunk__8868_8999 = G__9013;
count__8869_9000 = G__9014;
i__8870_9001 = G__9015;
continue;
}
} else
{var vec__8872_9016 = cljs.core.first.call(null,seq__8867_9010__$1);var ev__8184__auto___9017 = cljs.core.nth.call(null,vec__8872_9016,0,null);var func__8185__auto___9018 = cljs.core.nth.call(null,vec__8872_9016,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9017,func__8185__auto___9018);
{
var G__9019 = cljs.core.next.call(null,seq__8867_9010__$1);
var G__9020 = null;
var G__9021 = 0;
var G__9022 = 0;
seq__8867_8998 = G__9019;
chunk__8868_8999 = G__9020;
count__8869_9000 = G__9021;
i__8870_9001 = G__9022;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.dashboard.project_ui = (function project_ui(data){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Project settings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"conf","conf",1016963734).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(temp__4092__auto__))
{var c = temp__4092__auto__;return [cljs.core.str("Selected project: "),cljs.core.str(lt.plugins.instabuster.dashboard.project_name.call(null,c))].join('');
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("Autotest on?: "),cljs.core.str(new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(data))].join('')], null)], null)], null));var seq__8879_9023 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8880_9024 = null;var count__8881_9025 = 0;var i__8882_9026 = 0;while(true){
if((i__8882_9026 < count__8881_9025))
{var vec__8883_9027 = cljs.core._nth.call(null,chunk__8880_9024,i__8882_9026);var ev__8184__auto___9028 = cljs.core.nth.call(null,vec__8883_9027,0,null);var func__8185__auto___9029 = cljs.core.nth.call(null,vec__8883_9027,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9028,func__8185__auto___9029);
{
var G__9030 = seq__8879_9023;
var G__9031 = chunk__8880_9024;
var G__9032 = count__8881_9025;
var G__9033 = (i__8882_9026 + 1);
seq__8879_9023 = G__9030;
chunk__8880_9024 = G__9031;
count__8881_9025 = G__9032;
i__8882_9026 = G__9033;
continue;
}
} else
{var temp__4092__auto___9034 = cljs.core.seq.call(null,seq__8879_9023);if(temp__4092__auto___9034)
{var seq__8879_9035__$1 = temp__4092__auto___9034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8879_9035__$1))
{var c__7561__auto___9036 = cljs.core.chunk_first.call(null,seq__8879_9035__$1);{
var G__9037 = cljs.core.chunk_rest.call(null,seq__8879_9035__$1);
var G__9038 = c__7561__auto___9036;
var G__9039 = cljs.core.count.call(null,c__7561__auto___9036);
var G__9040 = 0;
seq__8879_9023 = G__9037;
chunk__8880_9024 = G__9038;
count__8881_9025 = G__9039;
i__8882_9026 = G__9040;
continue;
}
} else
{var vec__8884_9041 = cljs.core.first.call(null,seq__8879_9035__$1);var ev__8184__auto___9042 = cljs.core.nth.call(null,vec__8884_9041,0,null);var func__8185__auto___9043 = cljs.core.nth.call(null,vec__8884_9041,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9042,func__8185__auto___9043);
{
var G__9044 = cljs.core.next.call(null,seq__8879_9035__$1);
var G__9045 = null;
var G__9046 = 0;
var G__9047 = 0;
seq__8879_9023 = G__9044;
chunk__8880_9024 = G__9045;
count__8881_9025 = G__9046;
i__8882_9026 = G__9047;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.dashboard.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-dashboard","div.buster-dashboard",718114967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",3842872421),"Buster dashboard"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-container","div.project-container",3841828386)], null)], null));var seq__8891_9048 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8892_9049 = null;var count__8893_9050 = 0;var i__8894_9051 = 0;while(true){
if((i__8894_9051 < count__8893_9050))
{var vec__8895_9052 = cljs.core._nth.call(null,chunk__8892_9049,i__8894_9051);var ev__8184__auto___9053 = cljs.core.nth.call(null,vec__8895_9052,0,null);var func__8185__auto___9054 = cljs.core.nth.call(null,vec__8895_9052,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9053,func__8185__auto___9054);
{
var G__9055 = seq__8891_9048;
var G__9056 = chunk__8892_9049;
var G__9057 = count__8893_9050;
var G__9058 = (i__8894_9051 + 1);
seq__8891_9048 = G__9055;
chunk__8892_9049 = G__9056;
count__8893_9050 = G__9057;
i__8894_9051 = G__9058;
continue;
}
} else
{var temp__4092__auto___9059 = cljs.core.seq.call(null,seq__8891_9048);if(temp__4092__auto___9059)
{var seq__8891_9060__$1 = temp__4092__auto___9059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8891_9060__$1))
{var c__7561__auto___9061 = cljs.core.chunk_first.call(null,seq__8891_9060__$1);{
var G__9062 = cljs.core.chunk_rest.call(null,seq__8891_9060__$1);
var G__9063 = c__7561__auto___9061;
var G__9064 = cljs.core.count.call(null,c__7561__auto___9061);
var G__9065 = 0;
seq__8891_9048 = G__9062;
chunk__8892_9049 = G__9063;
count__8893_9050 = G__9064;
i__8894_9051 = G__9065;
continue;
}
} else
{var vec__8896_9066 = cljs.core.first.call(null,seq__8891_9060__$1);var ev__8184__auto___9067 = cljs.core.nth.call(null,vec__8896_9066,0,null);var func__8185__auto___9068 = cljs.core.nth.call(null,vec__8896_9066,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9067,func__8185__auto___9068);
{
var G__9069 = cljs.core.next.call(null,seq__8891_9060__$1);
var G__9070 = null;
var G__9071 = 0;
var G__9072 = 0;
seq__8891_9048 = G__9069;
chunk__8892_9049 = G__9070;
count__8893_9050 = G__9071;
i__8894_9051 = G__9072;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.dashboard.is_open_QMARK_ = (function is_open_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.instabuster.dashboard.dashboard);
});
lt.plugins.instabuster.dashboard.dashboard_toggle = (function dashboard_toggle(){return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.instabuster.dashboard.dashboard);
});
lt.plugins.instabuster.dashboard.tests_ok_QMARK_ = (function tests_ok_QMARK_(results){return cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8897_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__8897_SHARP_));
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
lt.plugins.instabuster.runner.__BEH__on_connect_runner = (function __BEH__on_connect_runner(this$){if(cljs.core.truth_((function (){var or__6813__auto__ = new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
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
worker.on("message",(function (p1__9148_SHARP_){return lt.object.raise.call(null,cb_obj,new cljs.core.Keyword(null,"test.result","test.result",4487656555),args,p1__9148_SHARP_);
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
lt.plugins.instabuster.live_toggler.live_toggler = (function live_toggler(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__9073_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__9073_SHARP_))?null:"off"))].join('');
}))], null),"buster-live"], null));var seq__9080_9098 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__9081_9099 = null;var count__9082_9100 = 0;var i__9083_9101 = 0;while(true){
if((i__9083_9101 < count__9082_9100))
{var vec__9084_9102 = cljs.core._nth.call(null,chunk__9081_9099,i__9083_9101);var ev__8184__auto___9103 = cljs.core.nth.call(null,vec__9084_9102,0,null);var func__8185__auto___9104 = cljs.core.nth.call(null,vec__9084_9102,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9103,func__8185__auto___9104);
{
var G__9105 = seq__9080_9098;
var G__9106 = chunk__9081_9099;
var G__9107 = count__9082_9100;
var G__9108 = (i__9083_9101 + 1);
seq__9080_9098 = G__9105;
chunk__9081_9099 = G__9106;
count__9082_9100 = G__9107;
i__9083_9101 = G__9108;
continue;
}
} else
{var temp__4092__auto___9109 = cljs.core.seq.call(null,seq__9080_9098);if(temp__4092__auto___9109)
{var seq__9080_9110__$1 = temp__4092__auto___9109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9080_9110__$1))
{var c__7561__auto___9111 = cljs.core.chunk_first.call(null,seq__9080_9110__$1);{
var G__9112 = cljs.core.chunk_rest.call(null,seq__9080_9110__$1);
var G__9113 = c__7561__auto___9111;
var G__9114 = cljs.core.count.call(null,c__7561__auto___9111);
var G__9115 = 0;
seq__9080_9098 = G__9112;
chunk__9081_9099 = G__9113;
count__9082_9100 = G__9114;
i__9083_9101 = G__9115;
continue;
}
} else
{var vec__9085_9116 = cljs.core.first.call(null,seq__9080_9110__$1);var ev__8184__auto___9117 = cljs.core.nth.call(null,vec__9085_9116,0,null);var func__8185__auto___9118 = cljs.core.nth.call(null,vec__9085_9116,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9117,func__8185__auto___9118);
{
var G__9119 = cljs.core.next.call(null,seq__9080_9110__$1);
var G__9120 = null;
var G__9121 = 0;
var G__9122 = 0;
seq__9080_9098 = G__9119;
chunk__9081_9099 = G__9120;
count__9082_9100 = G__9121;
i__9083_9101 = G__9122;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
});
lt.plugins.instabuster.live_toggler.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.instabuster.live_toggler.live_toggler.call(null,this$)], null));var seq__9092_9123 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9093_9124 = null;var count__9094_9125 = 0;var i__9095_9126 = 0;while(true){
if((i__9095_9126 < count__9094_9125))
{var vec__9096_9127 = cljs.core._nth.call(null,chunk__9093_9124,i__9095_9126);var ev__8184__auto___9128 = cljs.core.nth.call(null,vec__9096_9127,0,null);var func__8185__auto___9129 = cljs.core.nth.call(null,vec__9096_9127,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9128,func__8185__auto___9129);
{
var G__9130 = seq__9092_9123;
var G__9131 = chunk__9093_9124;
var G__9132 = count__9094_9125;
var G__9133 = (i__9095_9126 + 1);
seq__9092_9123 = G__9130;
chunk__9093_9124 = G__9131;
count__9094_9125 = G__9132;
i__9095_9126 = G__9133;
continue;
}
} else
{var temp__4092__auto___9134 = cljs.core.seq.call(null,seq__9092_9123);if(temp__4092__auto___9134)
{var seq__9092_9135__$1 = temp__4092__auto___9134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9092_9135__$1))
{var c__7561__auto___9136 = cljs.core.chunk_first.call(null,seq__9092_9135__$1);{
var G__9137 = cljs.core.chunk_rest.call(null,seq__9092_9135__$1);
var G__9138 = c__7561__auto___9136;
var G__9139 = cljs.core.count.call(null,c__7561__auto___9136);
var G__9140 = 0;
seq__9092_9123 = G__9137;
chunk__9093_9124 = G__9138;
count__9094_9125 = G__9139;
i__9095_9126 = G__9140;
continue;
}
} else
{var vec__9097_9141 = cljs.core.first.call(null,seq__9092_9135__$1);var ev__8184__auto___9142 = cljs.core.nth.call(null,vec__9097_9141,0,null);var func__8185__auto___9143 = cljs.core.nth.call(null,vec__9097_9141,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9142,func__8185__auto___9143);
{
var G__9144 = cljs.core.next.call(null,seq__9092_9135__$1);
var G__9145 = null;
var G__9146 = 0;
var G__9147 = 0;
seq__9092_9123 = G__9144;
chunk__9093_9124 = G__9145;
count__9094_9125 = G__9146;
i__9095_9126 = G__9147;
continue;
}
}
} else
{}
}
break;
}
return e__8183__auto__;
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
var seq__9163 = cljs.core.seq.call(null,res.log);var chunk__9164 = null;var count__9165 = 0;var i__9166 = 0;while(true){
if((i__9166 < count__9165))
{var out = cljs.core._nth.call(null,chunk__9164,i__9166);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9167 = seq__9163;
var G__9168 = chunk__9164;
var G__9169 = count__9165;
var G__9170 = (i__9166 + 1);
seq__9163 = G__9167;
chunk__9164 = G__9168;
count__9165 = G__9169;
i__9166 = G__9170;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9163);if(temp__4092__auto__)
{var seq__9163__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9163__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__9163__$1);{
var G__9171 = cljs.core.chunk_rest.call(null,seq__9163__$1);
var G__9172 = c__7561__auto__;
var G__9173 = cljs.core.count.call(null,c__7561__auto__);
var G__9174 = 0;
seq__9163 = G__9171;
chunk__9164 = G__9172;
count__9165 = G__9173;
i__9166 = G__9174;
continue;
}
} else
{var out = cljs.core.first.call(null,seq__9163__$1);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9175 = cljs.core.next.call(null,seq__9163__$1);
var G__9176 = null;
var G__9177 = 0;
var G__9178 = 0;
seq__9163 = G__9175;
chunk__9164 = G__9176;
count__9165 = G__9177;
i__9166 = G__9178;
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
lt.plugins.instabuster.__BEH__on_test = (function __BEH__on_test(this$,args){var temp__4090__auto__ = (function (){var or__6813__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(args);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
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
lt.plugins.instabuster.__BEH__on_maybe_toggle_buster = (function __BEH__on_maybe_toggle_buster(editor){return lt.plugins.instabuster.config.maybe_buster_test.call(null,editor,(function (){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"test.editor","test.editor",4114255291));
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
lt.plugins.instabuster.__BEH__on_maybe_autotest = (function __BEH__on_maybe_autotest(editor){if(cljs.core.truth_((function (){var and__6801__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(lt.plugins.instabuster.config.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))),new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)));if(and__6801__auto__)
{var and__6801__auto____$1 = new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(and__6801__auto____$1))
{return cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)));
} else
{return and__6801__auto____$1;
}
} else
{return and__6801__auto__;
}
})()))
{return lt.plugins.instabuster.config.maybe_buster_file.call(null,editor,(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),cljs.core.PersistentArrayMap.EMPTY).call(null);
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
lt.plugins.instabuster.__BEH__on_start_server = (function __BEH__on_start_server(this$,cb){if(cljs.core.truth_((function (){var or__6813__auto__ = new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
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
var temp__4092__auto___9179 = new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(temp__4092__auto___9179))
{var b_9180 = temp__4092__auto___9179;lt.object.raise.call(null,b_9180,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{}
var temp__4092__auto___9181 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9181))
{var worker_9182 = temp__4092__auto___9181;worker_9182.kill();
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),null], null));
} else
{}
if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,this$),lt.object.__GT_id.call(null,lt.plugins.instabuster.buster_client)))
{} else
{lt.objs.clients.rem_BANG_.call(null,this$);
}
var temp__4092__auto___9183 = new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9183))
{var sb_9184 = temp__4092__auto___9183;lt.objs.clients.rem_BANG_.call(null,sb_9184);
lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070),null], null));
} else
{}
return lt.object.raise.call(null,lt.plugins.instabuster.runner.runner,new cljs.core.Keyword(null,"kill","kill",1017196240));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-kill","lt.plugins.instabuster/on-server-kill",770834198),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close!","close!",3951350939),null,new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.instabuster.__BEH__on_server_disconnect = (function __BEH__on_server_disconnect(this$){var temp__4092__auto___9185 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9185))
{var worker_9186 = temp__4092__auto___9185;if(cljs.core.truth_(worker_9186.connected))
{worker_9186.disconnect();
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