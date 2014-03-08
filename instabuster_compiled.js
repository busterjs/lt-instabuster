if(!lt.util.load.provided_QMARK_('lt.plugins.instabuster')) {
goog.provide('lt.plugins.instabuster');
goog.require('cljs.core');
goog.require('crate.binding');
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
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-plugin","lt.plugins.instabuster/buster-plugin",2156771115),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buster-plugin","buster-plugin",1976644689)], null),new cljs.core.Keyword(null,"name","name",1017277949),"buster-plugin",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.instabuster","on-buster-test","lt.plugins.instabuster/on-buster-test",4291776924),new cljs.core.Keyword("lt.plugins.instabuster","on-buster-capture","lt.plugins.instabuster/on-buster-capture",3644647204),new cljs.core.Keyword("lt.plugins.instabuster","buster-connect","lt.plugins.instabuster/buster-connect",2082231050)], null));
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","buster-capture","lt.plugins.instabuster/buster-capture",2472190070),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Capture browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.instabuster.capture_browser_BANG_.call(null,lt.plugins.instabuster.buster);
})], null));
lt.plugins.instabuster.show_test_results = (function show_test_results(err,stdout,stderr){lt.objs.notifos.done_working.call(null,"");
return cljs.core.println.call(null,[cljs.core.str(stdout),cljs.core.str(err)].join(''));
});
lt.plugins.instabuster.find_buster_js = (function find_buster_js(editor_info){return cljs.core.assoc.call(null,editor_info,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),lt.objs.files.walk_up_find.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(editor_info),"buster.js"));
});
lt.plugins.instabuster.__BEH__on_buster_test = (function __BEH__on_buster_test(this$,args){var temp__4090__auto__ = (function (){var or__6755__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6755__auto__))
{return or__6755__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(args);
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var conf = temp__4090__auto__;return lt.objs.notifos.working.call(null,"Running Buster tests").call(null,lt.plugins.instabuster.capture_browser_BANG_.call(null,this$),require("child_process").exec([cljs.core.str("buster-test -c"),cljs.core.str(conf),cljs.core.str(" -r tap"),cljs.core.str((function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args);if(cljs.core.truth_(temp__4092__auto__))
{var t = temp__4092__auto__;return [cljs.core.str(" -t"),cljs.core.str(t)].join('');
} else
{return null;
}
})())].join(''),lt.plugins.instabuster.show_test_results));
} else
{return lt.objs.console.error.call(null,[cljs.core.str("No suitable buster config found."),cljs.core.str("None found for project (Connect: Buster) or based on path: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args))].join(''));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-buster-test","lt.plugins.instabuster/on-buster-test",4291776924),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_buster_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.test","buster.test",846109745),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","buster-test-all","lt.plugins.instabuster/buster-test-all",661202654),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run all tests",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"buster.test","buster.test",846109745),cljs.core.PersistentArrayMap.EMPTY);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.instabuster","buster-test-current","lt.plugins.instabuster/buster-test-current",4786457414),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Run tests for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var editor = temp__4092__auto__;if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748))))
{return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"buster.test","buster.test",846109745),lt.plugins.instabuster.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
} else
{return null;
}
})], null));
lt.plugins.instabuster.__BEH__on_buster_test_live = (function __BEH__on_buster_test_live(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"buster.test","buster.test",846109745),lt.plugins.instabuster.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-buster-test-live","lt.plugins.instabuster/on-buster-test-live",4236403109),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_buster_test_live,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),500);
lt.plugins.instabuster.__BEH__on_buster_browser_destroyed = (function __BEH__on_buster_browser_destroyed(browser){if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,browser),lt.object.__GT_id.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)))))
{return lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser","browser",1164844698),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-buster-browser-destroyed","lt.plugins.instabuster/on-buster-browser-destroyed",2878043922),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_buster_browser_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.instabuster.live_toggler = (function live_toggler(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__11721_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__11721_SHARP_))?null:"off"))].join('');
}))], null),"buster-live"], null));var seq__11728_11747 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"buster.live.toggle!","buster.live.toggle!",4098072298));
})], null)));var chunk__11729_11748 = null;var count__11730_11749 = 0;var i__11731_11750 = 0;while(true){
if((i__11731_11750 < count__11730_11749))
{var vec__11732_11751 = cljs.core._nth.call(null,chunk__11729_11748,i__11731_11750);var ev__8112__auto___11752 = cljs.core.nth.call(null,vec__11732_11751,0,null);var func__8113__auto___11753 = cljs.core.nth.call(null,vec__11732_11751,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11752,func__8113__auto___11753);
{
var G__11754 = seq__11728_11747;
var G__11755 = chunk__11729_11748;
var G__11756 = count__11730_11749;
var G__11757 = (i__11731_11750 + 1);
seq__11728_11747 = G__11754;
chunk__11729_11748 = G__11755;
count__11730_11749 = G__11756;
i__11731_11750 = G__11757;
continue;
}
} else
{var temp__4092__auto___11758 = cljs.core.seq.call(null,seq__11728_11747);if(temp__4092__auto___11758)
{var seq__11728_11759__$1 = temp__4092__auto___11758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11728_11759__$1))
{var c__7497__auto___11760 = cljs.core.chunk_first.call(null,seq__11728_11759__$1);{
var G__11761 = cljs.core.chunk_rest.call(null,seq__11728_11759__$1);
var G__11762 = c__7497__auto___11760;
var G__11763 = cljs.core.count.call(null,c__7497__auto___11760);
var G__11764 = 0;
seq__11728_11747 = G__11761;
chunk__11729_11748 = G__11762;
count__11730_11749 = G__11763;
i__11731_11750 = G__11764;
continue;
}
} else
{var vec__11733_11765 = cljs.core.first.call(null,seq__11728_11759__$1);var ev__8112__auto___11766 = cljs.core.nth.call(null,vec__11733_11765,0,null);var func__8113__auto___11767 = cljs.core.nth.call(null,vec__11733_11765,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11766,func__8113__auto___11767);
{
var G__11768 = cljs.core.next.call(null,seq__11728_11759__$1);
var G__11769 = null;
var G__11770 = 0;
var G__11771 = 0;
seq__11728_11747 = G__11768;
chunk__11729_11748 = G__11769;
count__11730_11749 = G__11770;
i__11731_11750 = G__11771;
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
lt.plugins.instabuster.wrapper = (function wrapper(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.instabuster.live_toggler.call(null,this$)], null));var seq__11740_11772 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__11741_11773 = null;var count__11742_11774 = 0;var i__11743_11775 = 0;while(true){
if((i__11743_11775 < count__11742_11774))
{var vec__11744_11776 = cljs.core._nth.call(null,chunk__11741_11773,i__11743_11775);var ev__8112__auto___11777 = cljs.core.nth.call(null,vec__11744_11776,0,null);var func__8113__auto___11778 = cljs.core.nth.call(null,vec__11744_11776,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11777,func__8113__auto___11778);
{
var G__11779 = seq__11740_11772;
var G__11780 = chunk__11741_11773;
var G__11781 = count__11742_11774;
var G__11782 = (i__11743_11775 + 1);
seq__11740_11772 = G__11779;
chunk__11741_11773 = G__11780;
count__11742_11774 = G__11781;
i__11743_11775 = G__11782;
continue;
}
} else
{var temp__4092__auto___11783 = cljs.core.seq.call(null,seq__11740_11772);if(temp__4092__auto___11783)
{var seq__11740_11784__$1 = temp__4092__auto___11783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11740_11784__$1))
{var c__7497__auto___11785 = cljs.core.chunk_first.call(null,seq__11740_11784__$1);{
var G__11786 = cljs.core.chunk_rest.call(null,seq__11740_11784__$1);
var G__11787 = c__7497__auto___11785;
var G__11788 = cljs.core.count.call(null,c__7497__auto___11785);
var G__11789 = 0;
seq__11740_11772 = G__11786;
chunk__11741_11773 = G__11787;
count__11742_11774 = G__11788;
i__11743_11775 = G__11789;
continue;
}
} else
{var vec__11745_11790 = cljs.core.first.call(null,seq__11740_11784__$1);var ev__8112__auto___11791 = cljs.core.nth.call(null,vec__11745_11790,0,null);var func__8113__auto___11792 = cljs.core.nth.call(null,vec__11745_11790,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___11791,func__8113__auto___11792);
{
var G__11793 = cljs.core.next.call(null,seq__11740_11784__$1);
var G__11794 = null;
var G__11795 = 0;
var G__11796 = 0;
seq__11740_11772 = G__11793;
chunk__11741_11773 = G__11794;
count__11742_11774 = G__11795;
i__11743_11775 = G__11796;
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
lt.plugins.instabuster.__BEH__buster_live_toggle_BANG_ = (function __BEH__buster_live_toggle_BANG_(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748))))
{if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810))))
{lt.plugins.instabuster.live_off.call(null,editor);
} else
{lt.plugins.instabuster.live_on.call(null,editor);
}
} else
{}
return lt.objs.editor.focus.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-live-toggle!","lt.plugins.instabuster/buster-live-toggle!",1486352244),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__buster_live_toggle_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.live.toggle!","buster.live.toggle!",4098072298),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"buster.toggle-live","buster.toggle-live",4049862250),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Toggle live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"buster.live.toggle!","buster.live.toggle!",4098072298));
} else
{return null;
}
})], null));
lt.plugins.instabuster.__BEH__buster_connect = (function __BEH__buster_connect(this$,path){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-connect","lt.plugins.instabuster/buster-connect",2082231050),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__buster_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.connect","buster.connect",3963878671),null], null), null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Buster",new cljs.core.Keyword(null,"desc","desc",1016984067),"Please provide the location of buster.js for your javascript project",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.file.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"buster.connect","buster.connect",3963878671));
})], null));
lt.plugins.instabuster.plugin_dir = lt.objs.plugins.find_plugin.call(null,"InstaBuster");
lt.plugins.instabuster.buster_cfg_path = lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node_modules/buster-configuration");
lt.plugins.instabuster.whenjs = require(lt.objs.files.join.call(null,lt.plugins.instabuster.buster_cfg_path,"/node_modules/when"));
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
lt.plugins.instabuster.is_buster_test = (function is_buster_test(editor,args){var cfg = require(lt.plugins.instabuster.buster_cfg_path);var c = cfg.loadConfigurationFile.call(null,new cljs.core.Keyword(null,"busterjs","busterjs",4171943452).cljs$core$IFn$_invoke$arity$1(args));var groups = cljs.core.filter.call(null,((function (cfg,c){
return (function (p1__11746_SHARP_){return cljs.core._EQ_.call(null,"browser",p1__11746_SHARP_.environment);
});})(cfg,c))
,c.groups);var path = lt.objs.files.relative.call(null,lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"busterjs","busterjs",4171943452).cljs$core$IFn$_invoke$arity$1(args)),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args));return lt.plugins.instabuster.whenjs.all(lt.plugins.instabuster.wrap_groups.call(null,path,groups)).then((function (results){if(cljs.core.truth_(cljs.core.some.call(null,(function (p){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.rem_pre_sep.call(null,p));
}),cljs.core.flatten.call(null,lt.util.cljs.js__GT_clj.call(null,results)))))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"buster.test.editor","buster.test.editor",3547172078));
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
lt.plugins.instabuster.__BEH__buster_test_editor_BANG_ = (function __BEH__buster_test_editor_BANG_(editor){lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748)], null));
return lt.plugins.instabuster.maybe_add_toggler_BANG_.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster-test-editor!","lt.plugins.instabuster/buster-test-editor!",3382171937),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__buster_test_editor_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.test.editor","buster.test.editor",3547172078),null], null), null));
}

//# sourceMappingURL=instabuster_compiled.js.map