if(!lt.util.load.provided_QMARK_('lt.plugins.buster-plugin')) {
goog.provide('lt.plugins.buster_plugin');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.browser');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","buster-plugin","lt.plugins.buster-plugin/buster-plugin",3089023170),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buster-plugin","buster-plugin",1976644689)], null),new cljs.core.Keyword(null,"name","name",1017277949),"buster-plugin",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.buster-plugin","on-buster-test","lt.plugins.buster-plugin/on-buster-test",1012885617),new cljs.core.Keyword("lt.plugins.buster-plugin","on-buster-capture","lt.plugins.buster-plugin/on-buster-capture",1324454105),new cljs.core.Keyword("lt.plugins.buster-plugin","buster-connect","lt.plugins.buster-plugin/buster-connect",2831965411)], null));
lt.plugins.buster_plugin.buster = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","buster-plugin","lt.plugins.buster-plugin/buster-plugin",3089023170));
lt.plugins.buster_plugin.capture_browser_BANG_ = (function capture_browser_BANG_(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.buster-plugin","buster-capture","lt.plugins.buster-plugin/buster-capture",2164774703),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Capture browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.buster_plugin.capture_browser_BANG_.call(null,lt.plugins.buster_plugin.buster);
})], null));
lt.plugins.buster_plugin.show_test_results = (function show_test_results(err,stdout,stderr){lt.objs.notifos.done_working.call(null,"");
return cljs.core.println.call(null,[cljs.core.str(stdout),cljs.core.str(err)].join(''));
});
lt.plugins.buster_plugin.find_buster_js = (function find_buster_js(editor_info){var p = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(editor_info);var roots = lt.objs.files.get_roots.call(null);var cur = p;var prev = "";while(true){
if(cljs.core.truth_((function (){var or__6755__auto__ = cljs.core.empty_QMARK_.call(null,cur);if(or__6755__auto__)
{return or__6755__auto__;
} else
{var or__6755__auto____$1 = roots.call(null,cur);if(cljs.core.truth_(or__6755__auto____$1))
{return or__6755__auto____$1;
} else
{return cljs.core._EQ_.call(null,cur,prev);
}
}
})()))
{return cljs.core.assoc.call(null,editor_info,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),null);
} else
{if(cljs.core.truth_((function (){var and__6743__auto__ = lt.objs.files.dir_QMARK_.call(null,cur);if(cljs.core.truth_(and__6743__auto__))
{return lt.objs.files.exists_QMARK_.call(null,lt.objs.files.join.call(null,cur,"buster.js"));
} else
{return and__6743__auto__;
}
})()))
{return cljs.core.assoc.call(null,editor_info,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),lt.objs.files.join.call(null,cur,"buster.js"));
} else
{{
var G__8230 = lt.objs.files.parent.call(null,cur);
var G__8231 = cur;
cur = G__8230;
prev = G__8231;
continue;
}
}
}
break;
}
});
lt.plugins.buster_plugin.__BEH__on_buster_test = (function __BEH__on_buster_test(this$,args){var temp__4090__auto__ = (function (){var or__6755__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(args);
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var conf = temp__4090__auto__;return lt.objs.notifos.working.call(null,"Running Buster tests").call(null,lt.plugins.buster_plugin.capture_browser_BANG_.call(null,this$),require("child_process").exec([cljs.core.str("buster-test -c"),cljs.core.str(conf),cljs.core.str(" -r tap"),cljs.core.str((function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args);if(cljs.core.truth_(temp__4092__auto__))
{var t = temp__4092__auto__;return [cljs.core.str(" -t"),cljs.core.str(t)].join('');
} else
{return null;
}
})())].join(''),lt.plugins.buster_plugin.show_test_results));
} else
{return lt.objs.console.error.call(null,[cljs.core.str("No suitable buster config found."),cljs.core.str("None found for project (Connect: Buster) or based on path: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args))].join(''));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","on-buster-test","lt.plugins.buster-plugin/on-buster-test",1012885617),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.buster_plugin.__BEH__on_buster_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.test","buster.test",846109745),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.buster-plugin","buster-test-all","lt.plugins.buster-plugin/buster-test-all",3841542839),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run all tests",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.buster_plugin.buster,new cljs.core.Keyword(null,"buster.test","buster.test",846109745),cljs.core.PersistentArrayMap.EMPTY);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.buster-plugin","buster-test-current","lt.plugins.buster-plugin/buster-test-current",4611386815),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run tests for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var editor = temp__4092__auto__;if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.javascript","editor.javascript",4365456384))))
{return lt.object.raise.call(null,lt.plugins.buster_plugin.buster,new cljs.core.Keyword(null,"buster.test","buster.test",846109745),lt.plugins.buster_plugin.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
} else
{return null;
}
})], null));
lt.plugins.buster_plugin.__BEH__on_buster_test_one = (function __BEH__on_buster_test_one(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{return lt.object.raise.call(null,lt.plugins.buster_plugin.buster,new cljs.core.Keyword(null,"buster.test","buster.test",846109745),lt.plugins.buster_plugin.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","on-buster-test-one","lt.plugins.buster-plugin/on-buster-test-one",2447107392),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.buster_plugin.__BEH__on_buster_test_one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.plugins.buster_plugin.__BEH__on_buster_browser_destroyed = (function __BEH__on_buster_browser_destroyed(browser){if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,browser),lt.object.__GT_id.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.buster_plugin.buster)))))
{return lt.object.merge_BANG_.call(null,lt.plugins.buster_plugin.buster,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser","browser",1164844698),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","on-buster-browser-destroyed","lt.plugins.buster-plugin/on-buster-browser-destroyed",2568682123),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.buster_plugin.__BEH__on_buster_browser_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.buster_plugin.live_toggler = (function live_toggler(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__8195_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__8195_SHARP_))?null:"off"))].join('');
}))], null),"buster-live"], null));var seq__8202_8232 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"buster.live.toggle!","buster.live.toggle!",4098072298));
})], null)));var chunk__8203_8233 = null;var count__8204_8234 = 0;var i__8205_8235 = 0;while(true){
if((i__8205_8235 < count__8204_8234))
{var vec__8206_8236 = cljs.core._nth.call(null,chunk__8203_8233,i__8205_8235);var ev__8112__auto___8237 = cljs.core.nth.call(null,vec__8206_8236,0,null);var func__8113__auto___8238 = cljs.core.nth.call(null,vec__8206_8236,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8237,func__8113__auto___8238);
{
var G__8239 = seq__8202_8232;
var G__8240 = chunk__8203_8233;
var G__8241 = count__8204_8234;
var G__8242 = (i__8205_8235 + 1);
seq__8202_8232 = G__8239;
chunk__8203_8233 = G__8240;
count__8204_8234 = G__8241;
i__8205_8235 = G__8242;
continue;
}
} else
{var temp__4092__auto___8243 = cljs.core.seq.call(null,seq__8202_8232);if(temp__4092__auto___8243)
{var seq__8202_8244__$1 = temp__4092__auto___8243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8202_8244__$1))
{var c__7497__auto___8245 = cljs.core.chunk_first.call(null,seq__8202_8244__$1);{
var G__8246 = cljs.core.chunk_rest.call(null,seq__8202_8244__$1);
var G__8247 = c__7497__auto___8245;
var G__8248 = cljs.core.count.call(null,c__7497__auto___8245);
var G__8249 = 0;
seq__8202_8232 = G__8246;
chunk__8203_8233 = G__8247;
count__8204_8234 = G__8248;
i__8205_8235 = G__8249;
continue;
}
} else
{var vec__8207_8250 = cljs.core.first.call(null,seq__8202_8244__$1);var ev__8112__auto___8251 = cljs.core.nth.call(null,vec__8207_8250,0,null);var func__8113__auto___8252 = cljs.core.nth.call(null,vec__8207_8250,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8251,func__8113__auto___8252);
{
var G__8253 = cljs.core.next.call(null,seq__8202_8244__$1);
var G__8254 = null;
var G__8255 = 0;
var G__8256 = 0;
seq__8202_8232 = G__8253;
chunk__8203_8233 = G__8254;
count__8204_8234 = G__8255;
i__8205_8235 = G__8256;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.plugins.buster_plugin.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.buster_plugin.live_toggler.call(null,this$)], null));var seq__8214_8257 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8215_8258 = null;var count__8216_8259 = 0;var i__8217_8260 = 0;while(true){
if((i__8217_8260 < count__8216_8259))
{var vec__8218_8261 = cljs.core._nth.call(null,chunk__8215_8258,i__8217_8260);var ev__8112__auto___8262 = cljs.core.nth.call(null,vec__8218_8261,0,null);var func__8113__auto___8263 = cljs.core.nth.call(null,vec__8218_8261,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8262,func__8113__auto___8263);
{
var G__8264 = seq__8214_8257;
var G__8265 = chunk__8215_8258;
var G__8266 = count__8216_8259;
var G__8267 = (i__8217_8260 + 1);
seq__8214_8257 = G__8264;
chunk__8215_8258 = G__8265;
count__8216_8259 = G__8266;
i__8217_8260 = G__8267;
continue;
}
} else
{var temp__4092__auto___8268 = cljs.core.seq.call(null,seq__8214_8257);if(temp__4092__auto___8268)
{var seq__8214_8269__$1 = temp__4092__auto___8268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8214_8269__$1))
{var c__7497__auto___8270 = cljs.core.chunk_first.call(null,seq__8214_8269__$1);{
var G__8271 = cljs.core.chunk_rest.call(null,seq__8214_8269__$1);
var G__8272 = c__7497__auto___8270;
var G__8273 = cljs.core.count.call(null,c__7497__auto___8270);
var G__8274 = 0;
seq__8214_8257 = G__8271;
chunk__8215_8258 = G__8272;
count__8216_8259 = G__8273;
i__8217_8260 = G__8274;
continue;
}
} else
{var vec__8219_8275 = cljs.core.first.call(null,seq__8214_8269__$1);var ev__8112__auto___8276 = cljs.core.nth.call(null,vec__8219_8275,0,null);var func__8113__auto___8277 = cljs.core.nth.call(null,vec__8219_8275,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8276,func__8113__auto___8277);
{
var G__8278 = cljs.core.next.call(null,seq__8214_8269__$1);
var G__8279 = null;
var G__8280 = 0;
var G__8281 = 0;
seq__8214_8257 = G__8278;
chunk__8215_8258 = G__8279;
count__8216_8259 = G__8280;
i__8217_8260 = G__8281;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","buster-live-toggler","lt.plugins.buster-plugin/buster-live-toggler",3460858432),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Live Mode Toggler",new cljs.core.Keyword(null,"live","live",1017226334),false,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,editor){if(cljs.core.truth_(new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"editor.javascript","editor.javascript",4365456384).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))))
{lt.plugins.buster_plugin.wrapper.call(null,this$);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",4001043679),editor], null));
var editor_content = lt.object.__GT_content.call(null,editor);var frame = lt.util.dom.parent.call(null,editor_content);var toggler = lt.plugins.buster_plugin.wrapper.call(null,this$);lt.util.dom.append.call(null,toggler,editor_content);
return lt.util.dom.append.call(null,frame,toggler);
} else
{return null;
}
}
}));
lt.plugins.buster_plugin.live_off = (function live_off(editor){lt.object.remove_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)], null));
var temp__4092__auto__ = new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(temp__4092__auto__))
{var toggler = temp__4092__auto__;return lt.object.merge_BANG_.call(null,toggler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),false], null));
} else
{return null;
}
});
lt.plugins.buster_plugin.live_on = (function live_on(editor){if(cljs.core.truth_(new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{} else
{var toggler_8282 = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","buster-live-toggler","lt.plugins.buster-plugin/buster-live-toggler",3460858432),editor);lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379),toggler_8282], null));
}
lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)], null));
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),true], null));
});
lt.plugins.buster_plugin.__BEH__buster_live_toggle_BANG_ = (function __BEH__buster_live_toggle_BANG_(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{lt.plugins.buster_plugin.live_off.call(null,editor);
} else
{lt.plugins.buster_plugin.live_on.call(null,editor);
}
return lt.objs.editor.focus.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","buster-live-toggle!","lt.plugins.buster-plugin/buster-live-toggle!",3460858409),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.buster_plugin.__BEH__buster_live_toggle_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggle!","buster.live.toggle!",4098072298),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"buster.toggle-live","buster.toggle-live",4049862250),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Toggle live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"buster.live.toggle!","buster.live.toggle!",4098072298));
} else
{return null;
}
})], null));
lt.plugins.buster_plugin.__BEH__buster_connect = (function __BEH__buster_connect(this$,path){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.buster-plugin","buster-connect","lt.plugins.buster-plugin/buster-connect",2831965411),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.buster_plugin.__BEH__buster_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.connect","buster.connect",3963878671),null], null), null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Buster",new cljs.core.Keyword(null,"desc","desc",1016984067),"Please provide the location of buster.js for your javascript project",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.file.call(null,lt.plugins.buster_plugin.buster,new cljs.core.Keyword(null,"buster.connect","buster.connect",3963878671));
})], null));
}

//# sourceMappingURL=buster_plugin_compiled.js.map