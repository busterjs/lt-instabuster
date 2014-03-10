if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster')) {
goog.provide('lt.plugins.instabuster');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.cljs');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.thread');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.clients');
goog.require('lt.objs.browser');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.instabuster.plugin_dir = lt.objs.plugins.find_plugin.call(null,"InstaBuster");
lt.plugins.instabuster.buster_module_dir = lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node_modules/buster/node_modules");
lt.plugins.instabuster.buster_bin_dir = lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node_modules/buster/bin");
lt.plugins.instabuster.buster_test_path = lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node","buster-test.js");
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-plugin","lt.plugins.instabuster/buster-plugin",2156771115),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buster-plugin","buster-plugin",1976644689)], null),new cljs.core.Keyword(null,"name","name",1017277949),"buster-plugin");
lt.plugins.instabuster.buster = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-plugin","lt.plugins.instabuster/buster-plugin",2156771115));
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
lt.plugins.instabuster.find_buster_js = (function find_buster_js(editor_info){return cljs.core.assoc.call(null,editor_info,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),lt.objs.files.walk_up_find.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(editor_info),"buster.js"));
});
lt.plugins.instabuster.run_test = (function run_test(args){var cp = require("child_process");var worker = cp.fork(lt.plugins.instabuster.buster_test_path,["-p","1111"],{"silent": true, "execPath": lt.objs.files.lt_home.call(null,lt.objs.thread.node_exe.call(null))});var dis = ((function (cp,worker){
return (function (code,signal){lt.objs.notifos.done_working.call(null);
return worker.kill();
});})(cp,worker))
;var msg = ((function (cp,worker,dis){
return (function (m){return console.log([cljs.core.str("Message received: "),cljs.core.str(m)].join(''));
});})(cp,worker,dis))
;worker.on("message",msg);
worker.on("disconnect",dis);
worker.on("exit",dis);
worker.stdout.on("data",(function (msg__$1){cljs.core.println.call(null,[cljs.core.str(msg__$1)].join(''));
if(cljs.core.truth_([cljs.core.str(msg__$1)].join('').contains("exit")))
{return worker.kill();
} else
{return null;
}
}));
worker.stderr.on("data",(function (err){return cljs.core.println.call(null,[cljs.core.str("Error running tests: "),cljs.core.str(err)].join(''));
}));
return worker.send(cljs.core.clj__GT_js.call(null,args));
});
lt.plugins.instabuster.__BEH__on_test = (function __BEH__on_test(this$,args){var temp__4090__auto__ = (function (){var or__6755__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(args);
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var conf = temp__4090__auto__;lt.objs.notifos.working.call(null,"Running Buster tests");
if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client))))
{} else
{lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641));
cljs.core.doall.call(null,cljs.core.range.call(null,100000));
}
lt.plugins.instabuster.capture_browser_BANG_.call(null,this$);
return lt.plugins.instabuster.run_test.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"test",new cljs.core.Keyword(null,"config","config",3954079412),conf,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args)], null));
} else
{return lt.objs.console.error.call(null,[cljs.core.str("No suitable buster config found."),cljs.core.str("None found for project (Connect: Buster) or based on path: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args))].join(''));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test","lt.plugins.instabuster/on-test",4654669836),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",1017460740),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","test-all","lt.plugins.instabuster/test-all",4290515266),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run all tests",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),cljs.core.PersistentArrayMap.EMPTY);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","test-current","lt.plugins.instabuster/test-current",4558530698),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run tests for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var editor = temp__4092__auto__;if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748))))
{return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),lt.plugins.instabuster.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
} else
{return null;
}
})], null));
lt.plugins.instabuster.__BEH__on_test_live = (function __BEH__on_test_live(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),lt.plugins.instabuster.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test-live","lt.plugins.instabuster/on-test-live",3411113269),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test_live,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.plugins.instabuster.__BEH__on_browser_destroyed = (function __BEH__on_browser_destroyed(browser){if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,browser),lt.object.__GT_id.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)))))
{return lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser","browser",1164844698),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-browser-destroyed","lt.plugins.instabuster/on-browser-destroyed",982842018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_browser_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.instabuster.live_toggler = (function live_toggler(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__11632_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__11632_SHARP_))?null:"off"))].join('');
}))], null),"buster-live"], null));var seq__11639_11659 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__11640_11660 = null;var count__11641_11661 = 0;var i__11642_11662 = 0;while(true){
if((i__11642_11662 < count__11641_11661))
{var vec__11643_11663 = cljs.core._nth.call(null,chunk__11640_11660,i__11642_11662);var ev__8112__auto___11664 = cljs.core.nth.call(null,vec__11643_11663,0,null);var func__8113__auto___11665 = cljs.core.nth.call(null,vec__11643_11663,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11664,func__8113__auto___11665);
{
var G__11666 = seq__11639_11659;
var G__11667 = chunk__11640_11660;
var G__11668 = count__11641_11661;
var G__11669 = (i__11642_11662 + 1);
seq__11639_11659 = G__11666;
chunk__11640_11660 = G__11667;
count__11641_11661 = G__11668;
i__11642_11662 = G__11669;
continue;
}
} else
{var temp__4092__auto___11670 = cljs.core.seq.call(null,seq__11639_11659);if(temp__4092__auto___11670)
{var seq__11639_11671__$1 = temp__4092__auto___11670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11639_11671__$1))
{var c__7497__auto___11672 = cljs.core.chunk_first.call(null,seq__11639_11671__$1);{
var G__11673 = cljs.core.chunk_rest.call(null,seq__11639_11671__$1);
var G__11674 = c__7497__auto___11672;
var G__11675 = cljs.core.count.call(null,c__7497__auto___11672);
var G__11676 = 0;
seq__11639_11659 = G__11673;
chunk__11640_11660 = G__11674;
count__11641_11661 = G__11675;
i__11642_11662 = G__11676;
continue;
}
} else
{var vec__11644_11677 = cljs.core.first.call(null,seq__11639_11671__$1);var ev__8112__auto___11678 = cljs.core.nth.call(null,vec__11644_11677,0,null);var func__8113__auto___11679 = cljs.core.nth.call(null,vec__11644_11677,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11678,func__8113__auto___11679);
{
var G__11680 = cljs.core.next.call(null,seq__11639_11671__$1);
var G__11681 = null;
var G__11682 = 0;
var G__11683 = 0;
seq__11639_11659 = G__11680;
chunk__11640_11660 = G__11681;
count__11641_11661 = G__11682;
i__11642_11662 = G__11683;
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
lt.plugins.instabuster.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.instabuster.live_toggler.call(null,this$)], null));var seq__11651_11684 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11652_11685 = null;var count__11653_11686 = 0;var i__11654_11687 = 0;while(true){
if((i__11654_11687 < count__11653_11686))
{var vec__11655_11688 = cljs.core._nth.call(null,chunk__11652_11685,i__11654_11687);var ev__8112__auto___11689 = cljs.core.nth.call(null,vec__11655_11688,0,null);var func__8113__auto___11690 = cljs.core.nth.call(null,vec__11655_11688,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11689,func__8113__auto___11690);
{
var G__11691 = seq__11651_11684;
var G__11692 = chunk__11652_11685;
var G__11693 = count__11653_11686;
var G__11694 = (i__11654_11687 + 1);
seq__11651_11684 = G__11691;
chunk__11652_11685 = G__11692;
count__11653_11686 = G__11693;
i__11654_11687 = G__11694;
continue;
}
} else
{var temp__4092__auto___11695 = cljs.core.seq.call(null,seq__11651_11684);if(temp__4092__auto___11695)
{var seq__11651_11696__$1 = temp__4092__auto___11695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11651_11696__$1))
{var c__7497__auto___11697 = cljs.core.chunk_first.call(null,seq__11651_11696__$1);{
var G__11698 = cljs.core.chunk_rest.call(null,seq__11651_11696__$1);
var G__11699 = c__7497__auto___11697;
var G__11700 = cljs.core.count.call(null,c__7497__auto___11697);
var G__11701 = 0;
seq__11651_11684 = G__11698;
chunk__11652_11685 = G__11699;
count__11653_11686 = G__11700;
i__11654_11687 = G__11701;
continue;
}
} else
{var vec__11656_11702 = cljs.core.first.call(null,seq__11651_11696__$1);var ev__8112__auto___11703 = cljs.core.nth.call(null,vec__11656_11702,0,null);var func__8113__auto___11704 = cljs.core.nth.call(null,vec__11656_11702,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11703,func__8113__auto___11704);
{
var G__11705 = cljs.core.next.call(null,seq__11651_11696__$1);
var G__11706 = null;
var G__11707 = 0;
var G__11708 = 0;
seq__11651_11684 = G__11705;
chunk__11652_11685 = G__11706;
count__11653_11686 = G__11707;
i__11654_11687 = G__11708;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-live-toggler","lt.plugins.instabuster/buster-live-toggler",1486352069),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Live Mode Toggler",new cljs.core.Keyword(null,"live","live",1017226334),false,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,editor){if(cljs.core.truth_(new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))))
{lt.plugins.instabuster.wrapper.call(null,this$);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",4001043679),editor], null));
var editor_content = lt.object.__GT_content.call(null,editor);var frame = lt.util.dom.parent.call(null,editor_content);var toggler = lt.plugins.instabuster.wrapper.call(null,this$);lt.util.dom.append.call(null,toggler,editor_content);
return lt.util.dom.append.call(null,frame,toggler);
} else
{return null;
}
}
}));
lt.plugins.instabuster.maybe_add_toggler_BANG_ = (function maybe_add_toggler_BANG_(editor){if(cljs.core.truth_(new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{return null;
} else
{var toggler = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-live-toggler","lt.plugins.instabuster/buster-live-toggler",1486352069),editor);return lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379),toggler], null));
}
});
lt.plugins.instabuster.live_off = (function live_off(editor){lt.object.remove_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)], null));
var temp__4092__auto__ = new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(temp__4092__auto__))
{var toggler = temp__4092__auto__;return lt.object.merge_BANG_.call(null,toggler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),false], null));
} else
{return null;
}
});
lt.plugins.instabuster.live_on = (function live_on(editor){lt.plugins.instabuster.maybe_add_toggler_BANG_.call(null,editor);
lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)], null));
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"buster.live.toggler","buster.live.toggler",4098072379).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),true], null));
});
lt.plugins.instabuster.__BEH__on_live_toggle_BANG_ = (function __BEH__on_live_toggle_BANG_(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748))))
{if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{lt.plugins.instabuster.live_off.call(null,editor);
} else
{lt.plugins.instabuster.live_on.call(null,editor);
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
lt.plugins.instabuster.__BEH__on_connect = (function __BEH__on_connect(this$,path){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),path], null));
return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-connect","lt.plugins.instabuster/on-connect",2764083288),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Buster",new cljs.core.Keyword(null,"desc","desc",1016984067),"Please provide the location of buster.js for your javascript project",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.file.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.plugins.instabuster.buster_cfg_path = lt.objs.files.join.call(null,lt.plugins.instabuster.buster_module_dir,"buster-configuration");
lt.plugins.instabuster.whenjs = require(lt.objs.files.join.call(null,lt.plugins.instabuster.buster_module_dir,"/when"));
lt.plugins.instabuster.wrap_group = (function wrap_group(path,group){var d = lt.plugins.instabuster.whenjs.defer();group.on("load:tests",(function (tests){return d.resolve(tests.map((function (test){return test.path;
})));
}));
group.resolve().then((function (){return cljs.core.List.EMPTY;
}));
return d;
});
lt.plugins.instabuster.wrap_groups = (function wrap_groups(path,groups){return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.instabuster.wrap_group,path),groups));
});
lt.plugins.instabuster.rem_pre_sep = (function rem_pre_sep(p){return clojure.string.replace_first.call(null,p,/^\//,"");
});
lt.plugins.instabuster.is_buster_test = (function is_buster_test(editor,args){var path = lt.objs.files.relative.call(null,lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"busterjs","busterjs",4171943452).cljs$core$IFn$_invoke$arity$1(args)),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args));return lt.plugins.instabuster.whenjs.all(lt.plugins.instabuster.wrap_groups.call(null,path,cljs.core.filter.call(null,(function (p1__11657_SHARP_){return cljs.core._EQ_.call(null,"browser",p1__11657_SHARP_.environment);
}),require(lt.plugins.instabuster.buster_cfg_path).loadConfigurationFile(new cljs.core.Keyword(null,"busterjs","busterjs",4171943452).cljs$core$IFn$_invoke$arity$1(args)).groups))).then((function (results){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__11658_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.rem_pre_sep.call(null,p1__11658_SHARP_));
}),cljs.core.flatten.call(null,lt.util.cljs.js__GT_clj.call(null,results)))))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"test.editor","test.editor",4114255291));
} else
{return null;
}
}));
});
lt.plugins.instabuster.maybe_buster_test = (function maybe_buster_test(editor){var temp__4092__auto__ = (function (){var or__6755__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(lt.plugins.instabuster.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;return lt.plugins.instabuster.is_buster_test.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"busterjs","busterjs",4171943452),busterjs,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))], null));
} else
{return null;
}
});
lt.plugins.instabuster.__BEH__on_maybe_toggle_buster = (function __BEH__on_maybe_toggle_buster(editor){return lt.plugins.instabuster.maybe_buster_test.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-maybe-toggle-buster","lt.plugins.instabuster/on-maybe-toggle-buster",2044317443),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_maybe_toggle_buster,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.instabuster.__BEH__on_test_editor_BANG_ = (function __BEH__on_test_editor_BANG_(editor){lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748)], null));
return lt.plugins.instabuster.maybe_add_toggler_BANG_.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test-editor!","lt.plugins.instabuster/on-test-editor!",3496595619),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test_editor_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test.editor","test.editor",4114255291),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.client","lt.plugins.instabuster/buster.client",1799124756),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buster.client","buster.client",2491610154),null,new cljs.core.Keyword(null,"client","client",3951159101),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Server");
lt.plugins.instabuster.buster_client = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.client","lt.plugins.instabuster/buster.client",1799124756));
lt.plugins.instabuster.buster_server_path = lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node","buster-server.js");
lt.plugins.instabuster.__BEH__on_start_server = (function __BEH__on_start_server(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
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
worker.stdout.on("data",(function (msg__$1){cljs.core.println.call(null,[cljs.core.str("Std out:"),cljs.core.str(msg__$1)].join(''));
if(cljs.core.truth_([cljs.core.str(msg__$1)].join('').contains("buster-server running")))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false], null));
lt.objs.notifos.done_working.call(null,[cljs.core.str("Connected to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect","connect",1965255772),this$);
} else
{return null;
}
}));
worker.stderr.on("data",(function (err){cljs.core.println.call(null,[cljs.core.str("Feil: "),cljs.core.str(err)].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
}));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),worker], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-start-server","lt.plugins.instabuster/on-start-server",535942040),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_start_server,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start.server","start.server",4774408641),null], null), null));
lt.plugins.instabuster.__BEH__on_server_error = (function __BEH__on_server_error(this$,msg){return console.error(lt.plugins.instabuster.stack.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-error","lt.plugins.instabuster/on-server-error",2565253000),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.instabuster.__BEH__on_server_kill = (function __BEH__on_server_kill(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false], null));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"disconnect","disconnect",1544309774));
var temp__4092__auto___11709 = new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(temp__4092__auto___11709))
{var b_11710 = temp__4092__auto___11709;lt.object.raise.call(null,b_11710,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{}
var temp__4092__auto__ = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var worker = temp__4092__auto__;worker.kill();
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-kill","lt.plugins.instabuster/on-server-kill",770834198),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.instabuster.__BEH__on_server_disconnect = (function __BEH__on_server_disconnect(this$){var temp__4092__auto___11711 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___11711))
{var worker_11712 = temp__4092__auto___11711;if(cljs.core.truth_(worker_11712.connected))
{worker_11712.disconnect();
} else
{}
} else
{}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),false], null));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Disconnected from: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-disconnect","lt.plugins.instabuster/on-server-disconnect",815244884),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.instabuster.__BEH__on_refresh = (function __BEH__on_refresh(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-refresh","lt.plugins.instabuster/on-refresh",2630003257),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.refresh","object.refresh",4196174494),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"start-server","start-server",3886904960),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Start server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"stop-server","stop-server",2736578272),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Stop server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"kill","kill",1017196240));
})], null));
lt.plugins.instabuster.__BEH__on_send = (function __BEH__on_send(this$,msg){return new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).send(cljs.core.clj__GT_js.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-send","lt.plugins.instabuster/on-send",4654705938),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"send-ping","send-ping",994327561),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Ping the server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"send!","send!",1123226891),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"ping"], null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"debug","debug",1109363141),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Debug command",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){cljs.core.println.call(null,"Hello there");
var temp__4092__auto__ = new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(temp__4092__auto__))
{var b = temp__4092__auto__;cljs.core.println.call(null,"time to do some killing");
return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=instabuster_compiled.js.map