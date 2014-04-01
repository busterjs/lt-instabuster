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
lt.plugins.instabuster.dashboard.summary_ui = (function summary_ui(res){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.summary","div.summary",724307643),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Tests: "),cljs.core.str(new cljs.core.Keyword(null,"tests","tests",1124155795).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Failures: "),cljs.core.str(new cljs.core.Keyword(null,"failures","failures",1689842587).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Errors: "),cljs.core.str(new cljs.core.Keyword(null,"errors","errors",4014236381).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Total: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"test-init-at","test-init-at",4728938311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)))),cljs.core.str(" ms")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Test: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"suite-start-at","suite-start-at",4629296165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)))),cljs.core.str(" ms")].join('')], null)], null));var seq__9830_9911 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9831_9912 = null;var count__9832_9913 = 0;var i__9833_9914 = 0;while(true){
if((i__9833_9914 < count__9832_9913))
{var vec__9834_9915 = cljs.core._nth.call(null,chunk__9831_9912,i__9833_9914);var ev__8184__auto___9916 = cljs.core.nth.call(null,vec__9834_9915,0,null);var func__8185__auto___9917 = cljs.core.nth.call(null,vec__9834_9915,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9916,func__8185__auto___9917);
{
var G__9918 = seq__9830_9911;
var G__9919 = chunk__9831_9912;
var G__9920 = count__9832_9913;
var G__9921 = (i__9833_9914 + 1);
seq__9830_9911 = G__9918;
chunk__9831_9912 = G__9919;
count__9832_9913 = G__9920;
i__9833_9914 = G__9921;
continue;
}
} else
{var temp__4092__auto___9922 = cljs.core.seq.call(null,seq__9830_9911);if(temp__4092__auto___9922)
{var seq__9830_9923__$1 = temp__4092__auto___9922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9830_9923__$1))
{var c__7561__auto___9924 = cljs.core.chunk_first.call(null,seq__9830_9923__$1);{
var G__9925 = cljs.core.chunk_rest.call(null,seq__9830_9923__$1);
var G__9926 = c__7561__auto___9924;
var G__9927 = cljs.core.count.call(null,c__7561__auto___9924);
var G__9928 = 0;
seq__9830_9911 = G__9925;
chunk__9831_9912 = G__9926;
count__9832_9913 = G__9927;
i__9833_9914 = G__9928;
continue;
}
} else
{var vec__9835_9929 = cljs.core.first.call(null,seq__9830_9923__$1);var ev__8184__auto___9930 = cljs.core.nth.call(null,vec__9835_9929,0,null);var func__8185__auto___9931 = cljs.core.nth.call(null,vec__9835_9929,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9930,func__8185__auto___9931);
{
var G__9932 = cljs.core.next.call(null,seq__9830_9923__$1);
var G__9933 = null;
var G__9934 = 0;
var G__9935 = 0;
seq__9830_9911 = G__9932;
chunk__9831_9912 = G__9933;
count__9832_9913 = G__9934;
i__9833_9914 = G__9935;
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
lt.plugins.instabuster.dashboard.failed_test_ui = (function failed_test_ui(res){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("("),cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(res))),cljs.core.str("): "),cljs.core.str(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(res))].join('')," (",new cljs.core.Keyword(null,"test-case","test-case",4082063101).cljs$core$IFn$_invoke$arity$1(res),")",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(res)], null)], null)], null));var seq__9842_9936 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9843_9937 = null;var count__9844_9938 = 0;var i__9845_9939 = 0;while(true){
if((i__9845_9939 < count__9844_9938))
{var vec__9846_9940 = cljs.core._nth.call(null,chunk__9843_9937,i__9845_9939);var ev__8184__auto___9941 = cljs.core.nth.call(null,vec__9846_9940,0,null);var func__8185__auto___9942 = cljs.core.nth.call(null,vec__9846_9940,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9941,func__8185__auto___9942);
{
var G__9943 = seq__9842_9936;
var G__9944 = chunk__9843_9937;
var G__9945 = count__9844_9938;
var G__9946 = (i__9845_9939 + 1);
seq__9842_9936 = G__9943;
chunk__9843_9937 = G__9944;
count__9844_9938 = G__9945;
i__9845_9939 = G__9946;
continue;
}
} else
{var temp__4092__auto___9947 = cljs.core.seq.call(null,seq__9842_9936);if(temp__4092__auto___9947)
{var seq__9842_9948__$1 = temp__4092__auto___9947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9842_9948__$1))
{var c__7561__auto___9949 = cljs.core.chunk_first.call(null,seq__9842_9948__$1);{
var G__9950 = cljs.core.chunk_rest.call(null,seq__9842_9948__$1);
var G__9951 = c__7561__auto___9949;
var G__9952 = cljs.core.count.call(null,c__7561__auto___9949);
var G__9953 = 0;
seq__9842_9936 = G__9950;
chunk__9843_9937 = G__9951;
count__9844_9938 = G__9952;
i__9845_9939 = G__9953;
continue;
}
} else
{var vec__9847_9954 = cljs.core.first.call(null,seq__9842_9948__$1);var ev__8184__auto___9955 = cljs.core.nth.call(null,vec__9847_9954,0,null);var func__8185__auto___9956 = cljs.core.nth.call(null,vec__9847_9954,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9955,func__8185__auto___9956);
{
var G__9957 = cljs.core.next.call(null,seq__9842_9948__$1);
var G__9958 = null;
var G__9959 = 0;
var G__9960 = 0;
seq__9842_9936 = G__9957;
chunk__9843_9937 = G__9958;
count__9844_9938 = G__9959;
i__9845_9939 = G__9960;
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
lt.plugins.instabuster.dashboard.failed_ui = (function failed_ui(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.failed-tests","div.failed-tests",1606312512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"Failed tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (p1__9848_SHARP_){return lt.plugins.instabuster.dashboard.failed_test_ui.call(null,p1__9848_SHARP_);
}),cljs.core.filter.call(null,(function (p1__9849_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__9849_SHARP_));
}),new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard))))], null)], null));var seq__9856_9961 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9857_9962 = null;var count__9858_9963 = 0;var i__9859_9964 = 0;while(true){
if((i__9859_9964 < count__9858_9963))
{var vec__9860_9965 = cljs.core._nth.call(null,chunk__9857_9962,i__9859_9964);var ev__8184__auto___9966 = cljs.core.nth.call(null,vec__9860_9965,0,null);var func__8185__auto___9967 = cljs.core.nth.call(null,vec__9860_9965,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9966,func__8185__auto___9967);
{
var G__9968 = seq__9856_9961;
var G__9969 = chunk__9857_9962;
var G__9970 = count__9858_9963;
var G__9971 = (i__9859_9964 + 1);
seq__9856_9961 = G__9968;
chunk__9857_9962 = G__9969;
count__9858_9963 = G__9970;
i__9859_9964 = G__9971;
continue;
}
} else
{var temp__4092__auto___9972 = cljs.core.seq.call(null,seq__9856_9961);if(temp__4092__auto___9972)
{var seq__9856_9973__$1 = temp__4092__auto___9972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9856_9973__$1))
{var c__7561__auto___9974 = cljs.core.chunk_first.call(null,seq__9856_9973__$1);{
var G__9975 = cljs.core.chunk_rest.call(null,seq__9856_9973__$1);
var G__9976 = c__7561__auto___9974;
var G__9977 = cljs.core.count.call(null,c__7561__auto___9974);
var G__9978 = 0;
seq__9856_9961 = G__9975;
chunk__9857_9962 = G__9976;
count__9858_9963 = G__9977;
i__9859_9964 = G__9978;
continue;
}
} else
{var vec__9861_9979 = cljs.core.first.call(null,seq__9856_9973__$1);var ev__8184__auto___9980 = cljs.core.nth.call(null,vec__9861_9979,0,null);var func__8185__auto___9981 = cljs.core.nth.call(null,vec__9861_9979,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9980,func__8185__auto___9981);
{
var G__9982 = cljs.core.next.call(null,seq__9856_9973__$1);
var G__9983 = null;
var G__9984 = 0;
var G__9985 = 0;
seq__9856_9961 = G__9982;
chunk__9857_9962 = G__9983;
count__9858_9963 = G__9984;
i__9859_9964 = G__9985;
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
lt.plugins.instabuster.dashboard.testprogress_ui = (function testprogress_ui(res){var e__8183__auto__ = crate.core.html.call(null,(function (){var status = ((lt.plugins.instabuster.dashboard.tests_ok_QMARK_.call(null,new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard))))?"ok":"error");return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-results","div.buster-results",2322289209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),[cljs.core.str("Testresults for "),cljs.core.str(lt.plugins.instabuster.dashboard.project_name.call(null,new cljs.core.Keyword(null,"config","config",3954079412).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard))))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",4307793311),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"executed-tests","executed-tests",2442601941).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"max","max",1014012118),new cljs.core.Keyword(null,"expected-tests","expected-tests",3805852222).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.Keyword(null,"class","class",1108647146),status], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.curr-test","p.curr-test",1775184577),[cljs.core.str(new cljs.core.Keyword(null,"executed-tests","executed-tests",2442601941).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"expected-tests","expected-tests",3805852222).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"test-case","test-case",4082063101).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.str(")")].join('')], null),lt.plugins.instabuster.dashboard.failed_ui.call(null)], null);
})());var seq__9868_9986 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9869_9987 = null;var count__9870_9988 = 0;var i__9871_9989 = 0;while(true){
if((i__9871_9989 < count__9870_9988))
{var vec__9872_9990 = cljs.core._nth.call(null,chunk__9869_9987,i__9871_9989);var ev__8184__auto___9991 = cljs.core.nth.call(null,vec__9872_9990,0,null);var func__8185__auto___9992 = cljs.core.nth.call(null,vec__9872_9990,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9991,func__8185__auto___9992);
{
var G__9993 = seq__9868_9986;
var G__9994 = chunk__9869_9987;
var G__9995 = count__9870_9988;
var G__9996 = (i__9871_9989 + 1);
seq__9868_9986 = G__9993;
chunk__9869_9987 = G__9994;
count__9870_9988 = G__9995;
i__9871_9989 = G__9996;
continue;
}
} else
{var temp__4092__auto___9997 = cljs.core.seq.call(null,seq__9868_9986);if(temp__4092__auto___9997)
{var seq__9868_9998__$1 = temp__4092__auto___9997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9868_9998__$1))
{var c__7561__auto___9999 = cljs.core.chunk_first.call(null,seq__9868_9998__$1);{
var G__10000 = cljs.core.chunk_rest.call(null,seq__9868_9998__$1);
var G__10001 = c__7561__auto___9999;
var G__10002 = cljs.core.count.call(null,c__7561__auto___9999);
var G__10003 = 0;
seq__9868_9986 = G__10000;
chunk__9869_9987 = G__10001;
count__9870_9988 = G__10002;
i__9871_9989 = G__10003;
continue;
}
} else
{var vec__9873_10004 = cljs.core.first.call(null,seq__9868_9998__$1);var ev__8184__auto___10005 = cljs.core.nth.call(null,vec__9873_10004,0,null);var func__8185__auto___10006 = cljs.core.nth.call(null,vec__9873_10004,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10005,func__8185__auto___10006);
{
var G__10007 = cljs.core.next.call(null,seq__9868_9998__$1);
var G__10008 = null;
var G__10009 = 0;
var G__10010 = 0;
seq__9868_9986 = G__10007;
chunk__9869_9987 = G__10008;
count__9870_9988 = G__10009;
i__9871_9989 = G__10010;
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
lt.plugins.instabuster.dashboard.testinit_ui = (function testinit_ui(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-results","div.buster-results",2322289209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Testresults"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Initializing testrun..."], null)], null));var seq__9880_10011 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9881_10012 = null;var count__9882_10013 = 0;var i__9883_10014 = 0;while(true){
if((i__9883_10014 < count__9882_10013))
{var vec__9884_10015 = cljs.core._nth.call(null,chunk__9881_10012,i__9883_10014);var ev__8184__auto___10016 = cljs.core.nth.call(null,vec__9884_10015,0,null);var func__8185__auto___10017 = cljs.core.nth.call(null,vec__9884_10015,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10016,func__8185__auto___10017);
{
var G__10018 = seq__9880_10011;
var G__10019 = chunk__9881_10012;
var G__10020 = count__9882_10013;
var G__10021 = (i__9883_10014 + 1);
seq__9880_10011 = G__10018;
chunk__9881_10012 = G__10019;
count__9882_10013 = G__10020;
i__9883_10014 = G__10021;
continue;
}
} else
{var temp__4092__auto___10022 = cljs.core.seq.call(null,seq__9880_10011);if(temp__4092__auto___10022)
{var seq__9880_10023__$1 = temp__4092__auto___10022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9880_10023__$1))
{var c__7561__auto___10024 = cljs.core.chunk_first.call(null,seq__9880_10023__$1);{
var G__10025 = cljs.core.chunk_rest.call(null,seq__9880_10023__$1);
var G__10026 = c__7561__auto___10024;
var G__10027 = cljs.core.count.call(null,c__7561__auto___10024);
var G__10028 = 0;
seq__9880_10011 = G__10025;
chunk__9881_10012 = G__10026;
count__9882_10013 = G__10027;
i__9883_10014 = G__10028;
continue;
}
} else
{var vec__9885_10029 = cljs.core.first.call(null,seq__9880_10023__$1);var ev__8184__auto___10030 = cljs.core.nth.call(null,vec__9885_10029,0,null);var func__8185__auto___10031 = cljs.core.nth.call(null,vec__9885_10029,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10030,func__8185__auto___10031);
{
var G__10032 = cljs.core.next.call(null,seq__9880_10023__$1);
var G__10033 = null;
var G__10034 = 0;
var G__10035 = 0;
seq__9880_10011 = G__10032;
chunk__9881_10012 = G__10033;
count__9882_10013 = G__10034;
i__9883_10014 = G__10035;
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
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("Autotest on?: "),cljs.core.str(new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(data))].join('')], null)], null)], null));var seq__9892_10036 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9893_10037 = null;var count__9894_10038 = 0;var i__9895_10039 = 0;while(true){
if((i__9895_10039 < count__9894_10038))
{var vec__9896_10040 = cljs.core._nth.call(null,chunk__9893_10037,i__9895_10039);var ev__8184__auto___10041 = cljs.core.nth.call(null,vec__9896_10040,0,null);var func__8185__auto___10042 = cljs.core.nth.call(null,vec__9896_10040,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10041,func__8185__auto___10042);
{
var G__10043 = seq__9892_10036;
var G__10044 = chunk__9893_10037;
var G__10045 = count__9894_10038;
var G__10046 = (i__9895_10039 + 1);
seq__9892_10036 = G__10043;
chunk__9893_10037 = G__10044;
count__9894_10038 = G__10045;
i__9895_10039 = G__10046;
continue;
}
} else
{var temp__4092__auto___10047 = cljs.core.seq.call(null,seq__9892_10036);if(temp__4092__auto___10047)
{var seq__9892_10048__$1 = temp__4092__auto___10047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9892_10048__$1))
{var c__7561__auto___10049 = cljs.core.chunk_first.call(null,seq__9892_10048__$1);{
var G__10050 = cljs.core.chunk_rest.call(null,seq__9892_10048__$1);
var G__10051 = c__7561__auto___10049;
var G__10052 = cljs.core.count.call(null,c__7561__auto___10049);
var G__10053 = 0;
seq__9892_10036 = G__10050;
chunk__9893_10037 = G__10051;
count__9894_10038 = G__10052;
i__9895_10039 = G__10053;
continue;
}
} else
{var vec__9897_10054 = cljs.core.first.call(null,seq__9892_10048__$1);var ev__8184__auto___10055 = cljs.core.nth.call(null,vec__9897_10054,0,null);var func__8185__auto___10056 = cljs.core.nth.call(null,vec__9897_10054,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10055,func__8185__auto___10056);
{
var G__10057 = cljs.core.next.call(null,seq__9892_10048__$1);
var G__10058 = null;
var G__10059 = 0;
var G__10060 = 0;
seq__9892_10036 = G__10057;
chunk__9893_10037 = G__10058;
count__9894_10038 = G__10059;
i__9895_10039 = G__10060;
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
lt.plugins.instabuster.dashboard.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-dashboard","div.buster-dashboard",718114967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",3842872421),"Buster dashboard"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-container","div.project-container",3841828386)], null)], null));var seq__9904_10061 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9905_10062 = null;var count__9906_10063 = 0;var i__9907_10064 = 0;while(true){
if((i__9907_10064 < count__9906_10063))
{var vec__9908_10065 = cljs.core._nth.call(null,chunk__9905_10062,i__9907_10064);var ev__8184__auto___10066 = cljs.core.nth.call(null,vec__9908_10065,0,null);var func__8185__auto___10067 = cljs.core.nth.call(null,vec__9908_10065,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10066,func__8185__auto___10067);
{
var G__10068 = seq__9904_10061;
var G__10069 = chunk__9905_10062;
var G__10070 = count__9906_10063;
var G__10071 = (i__9907_10064 + 1);
seq__9904_10061 = G__10068;
chunk__9905_10062 = G__10069;
count__9906_10063 = G__10070;
i__9907_10064 = G__10071;
continue;
}
} else
{var temp__4092__auto___10072 = cljs.core.seq.call(null,seq__9904_10061);if(temp__4092__auto___10072)
{var seq__9904_10073__$1 = temp__4092__auto___10072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9904_10073__$1))
{var c__7561__auto___10074 = cljs.core.chunk_first.call(null,seq__9904_10073__$1);{
var G__10075 = cljs.core.chunk_rest.call(null,seq__9904_10073__$1);
var G__10076 = c__7561__auto___10074;
var G__10077 = cljs.core.count.call(null,c__7561__auto___10074);
var G__10078 = 0;
seq__9904_10061 = G__10075;
chunk__9905_10062 = G__10076;
count__9906_10063 = G__10077;
i__9907_10064 = G__10078;
continue;
}
} else
{var vec__9909_10079 = cljs.core.first.call(null,seq__9904_10073__$1);var ev__8184__auto___10080 = cljs.core.nth.call(null,vec__9909_10079,0,null);var func__8185__auto___10081 = cljs.core.nth.call(null,vec__9909_10079,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___10080,func__8185__auto___10081);
{
var G__10082 = cljs.core.next.call(null,seq__9904_10073__$1);
var G__10083 = null;
var G__10084 = 0;
var G__10085 = 0;
seq__9904_10061 = G__10082;
chunk__9905_10062 = G__10083;
count__9906_10063 = G__10084;
i__9907_10064 = G__10085;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","dashboard","lt.plugins.instabuster.dashboard/dashboard",2108084815),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster.dashboard","buster.dashboard",792268281),null], null), null),new cljs.core.Keyword(null,"label","label",1116631654),"Buster Dashboard",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.instabuster.dashboard.wrapper.call(null,cljs.core.deref.call(null,this$));
}));
lt.plugins.instabuster.dashboard.dashboard = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","dashboard","lt.plugins.instabuster.dashboard/dashboard",2108084815));
lt.plugins.instabuster.dashboard.__BEH__init = (function __BEH__init(this$){return lt.objs.sidebar.add_item.call(null,lt.objs.sidebar.rightbar,lt.plugins.instabuster.dashboard.dashboard);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","init","lt.plugins.instabuster.dashboard/init",1002261459),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__init,new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Init Buster Dashboard",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.plugins.instabuster.dashboard.is_open_QMARK_ = (function is_open_QMARK_(){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.rightbar)),lt.plugins.instabuster.dashboard.dashboard);
});
lt.plugins.instabuster.dashboard.dashboard_toggle = (function dashboard_toggle(){return lt.object.raise.call(null,lt.objs.sidebar.rightbar,new cljs.core.Keyword(null,"toggle","toggle",4440567494),lt.plugins.instabuster.dashboard.dashboard);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"buster-dashboard-toggle","buster-dashboard-toggle",3770649291),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Toggle dashboard",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.instabuster.dashboard.dashboard_toggle.call(null);
})], null));
lt.plugins.instabuster.dashboard.tests_ok_QMARK_ = (function tests_ok_QMARK_(results){return cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__9910_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__9910_SHARP_));
}),results));
});
lt.plugins.instabuster.dashboard.__BEH__on_testrun_init = (function __BEH__on_testrun_init(this$){var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)));lt.util.dom.empty.call(null,container);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-results","test-results",3878200621),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"test-init-at","test-init-at",4728938311),Date.now()], null));
return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.testinit_ui.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-testrun-init","lt.plugins.instabuster.dashboard/on-testrun-init",4179404433),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_testrun_init,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"testrun.init","testrun.init",2434156695),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_suite_start = (function __BEH__on_suite_start(this$,res){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-results","test-results",3878200621),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"suite-start-at","suite-start-at",4629296165),Date.now()], null));
return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-results","test-results",3878200621)], null),cljs.core.conj,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-suite-start","lt.plugins.instabuster.dashboard/on-suite-start",4796993126),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_suite_start,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suite.start","suite.start",3669287262),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_test_result = (function __BEH__on_test_result(this$,res){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-results","test-results",3878200621)], null),cljs.core.conj,res);
var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)));lt.util.dom.empty.call(null,container);
return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.testprogress_ui.call(null,res));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-test-result","lt.plugins.instabuster.dashboard/on-test-result",4765933177),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_test_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test.result","test.result",4487656555),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_suite_complete = (function __BEH__on_suite_complete(this$,res){lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test-results","test-results",3878200621)], null),cljs.core.conj,res);
var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)));return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.summary_ui.call(null,res));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-suite-complete","lt.plugins.instabuster.dashboard/on-suite-complete",1387774759),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_suite_complete,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suite.complete","suite.complete",905647841),null], null), null));
lt.plugins.instabuster.dashboard.__BEH__on_project_update = (function __BEH__on_project_update(this$,data){var container = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.project-container","div.project-container",3841828386),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)));lt.util.dom.empty.call(null,container);
return lt.util.dom.append.call(null,container,lt.plugins.instabuster.dashboard.project_ui.call(null,data));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster.dashboard","on-project-update","lt.plugins.instabuster.dashboard/on-project-update",3590132122),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.dashboard.__BEH__on_project_update,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project.update","project.update",1499498672),null], null), null));
}
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
goog.require('lt.plugins.instabuster.dashboard');
goog.require('lt.objs.notifos');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.cljs');
goog.require('lt.plugins.instabuster.dashboard');
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
cljs.core.add_watch.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"object.change","object.change",966833329),(function (_,___$1,___$2,___$3){return lt.object.raise.call(null,lt.plugins.instabuster.dashboard.dashboard,new cljs.core.Keyword(null,"project.update","project.update",1499498672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conf","conf",1016963734),new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)),new cljs.core.Keyword(null,"autotest","autotest",2453579315),new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster))], null));
}));
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.runner","lt.plugins.instabuster/buster.runner",1230660457),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buster.runner","buster.runner",2929516431),null,new cljs.core.Keyword(null,"client","client",3951159101),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Runner");
lt.plugins.instabuster.buster_runner = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.runner","lt.plugins.instabuster/buster.runner",1230660457));
lt.plugins.instabuster.__BEH__on_connect_runner = (function __BEH__on_connect_runner(this$){if(cljs.core.truth_((function (){var or__6813__auto__ = new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
}
})()))
{return null;
} else
{var cp = require("child_process");var worker = cp.fork(lt.plugins.instabuster.buster_test_path,[],{"env": {"dill": "dall", "NODE_PATH": lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node_modules")}, "silent": true, "execPath": lt.objs.files.lt_home.call(null,lt.objs.thread.node_exe.call(null))});var dis = ((function (cp,worker){
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
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),worker], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-connect-runner","lt.plugins.instabuster/on-connect-runner",610177133),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_connect_runner,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect.runner","connect.runner",1554121766),null], null), null));
lt.plugins.instabuster.__BEH__on_runner_kill = (function __BEH__on_runner_kill(this$){lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_runner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connected","connected",4729661051),false,new cljs.core.Keyword(null,"connecting","connecting",4533219882),false], null));
var temp__4092__auto__ = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_runner));if(cljs.core.truth_(temp__4092__auto__))
{var worker = temp__4092__auto__;if(cljs.core.truth_(worker.connected))
{worker.kill();
} else
{}
return lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_runner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-runner-kill","lt.plugins.instabuster/on-runner-kill",4505025081),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_runner_kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close!","close!",3951350939),null,new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.instabuster.__BEH__on_runner_refresh = (function __BEH__on_runner_refresh(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-runner-refresh","lt.plugins.instabuster/on-runner-refresh",1074257992),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_runner_refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.refresh","object.refresh",4196174494),null], null), null));
lt.plugins.instabuster.__BEH__on_run_test = (function __BEH__on_run_test(this$,args){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect.runner","connect.runner",1554121766));
cljs.core.doall.call(null,cljs.core.range.call(null,1000000));
}
var worker = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));worker.removeAllListeners("message");
worker.on("message",(function (p1__9344_SHARP_){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test.result","test.result",4487656555),args,p1__9344_SHARP_);
}));
lt.object.raise.call(null,lt.plugins.instabuster.dashboard.dashboard,new cljs.core.Keyword(null,"testrun.init","testrun.init",2434156695));
return worker.send(cljs.core.clj__GT_js.call(null,args));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-run-test","lt.plugins.instabuster/on-run-test",4241203470),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_run_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run.test","run.test",1784780167),null], null), null));
lt.plugins.instabuster.__BEH__on_test = (function __BEH__on_test(this$,args){var temp__4090__auto__ = (function (){var or__6813__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(args);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var conf = temp__4090__auto__;lt.objs.notifos.working.call(null,[cljs.core.str("Running Buster tests for "),cljs.core.str(lt.objs.files.parent.call(null,conf))].join(''));
if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client))))
{} else
{lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641));
cljs.core.doall.call(null,cljs.core.range.call(null,1000000));
}
lt.plugins.instabuster.capture_browser_BANG_.call(null,this$);
return lt.object.raise.call(null,lt.plugins.instabuster.buster_runner,new cljs.core.Keyword(null,"run.test","run.test",1784780167),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"test",new cljs.core.Keyword(null,"config","config",3954079412),conf,new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args)], null));
} else
{lt.objs.console.error.call(null,[cljs.core.str("No suitable buster config found."),cljs.core.str("None found for project (Connect: Buster) or based on path: "),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(args))].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"provide.config","provide.config",2224080545));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test","lt.plugins.instabuster/on-test",4654669836),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",1017460740),null], null), null));
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
var seq__9349 = cljs.core.seq.call(null,res.log);var chunk__9350 = null;var count__9351 = 0;var i__9352 = 0;while(true){
if((i__9352 < count__9351))
{var out = cljs.core._nth.call(null,chunk__9350,i__9352);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9383 = seq__9349;
var G__9384 = chunk__9350;
var G__9385 = count__9351;
var G__9386 = (i__9352 + 1);
seq__9349 = G__9383;
chunk__9350 = G__9384;
count__9351 = G__9385;
i__9352 = G__9386;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9349);if(temp__4092__auto__)
{var seq__9349__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9349__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__9349__$1);{
var G__9387 = cljs.core.chunk_rest.call(null,seq__9349__$1);
var G__9388 = c__7561__auto__;
var G__9389 = cljs.core.count.call(null,c__7561__auto__);
var G__9390 = 0;
seq__9349 = G__9387;
chunk__9350 = G__9388;
count__9351 = G__9389;
i__9352 = G__9390;
continue;
}
} else
{var out = cljs.core.first.call(null,seq__9349__$1);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9391 = cljs.core.next.call(null,seq__9349__$1);
var G__9392 = null;
var G__9393 = 0;
var G__9394 = 0;
seq__9349 = G__9391;
chunk__9350 = G__9392;
count__9351 = G__9393;
i__9352 = G__9394;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test-live","lt.plugins.instabuster/on-test-live",3411113269),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test_live,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.instabuster.__BEH__on_browser_destroyed = (function __BEH__on_browser_destroyed(browser){if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,browser),lt.object.__GT_id.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)))))
{return lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"browser","browser",1164844698),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-browser-destroyed","lt.plugins.instabuster/on-browser-destroyed",982842018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_browser_destroyed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.instabuster.live_toggler = (function live_toggler(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__9353_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__9353_SHARP_))?null:"off"))].join('');
}))], null),"buster-live"], null));var seq__9360_9395 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__9361_9396 = null;var count__9362_9397 = 0;var i__9363_9398 = 0;while(true){
if((i__9363_9398 < count__9362_9397))
{var vec__9364_9399 = cljs.core._nth.call(null,chunk__9361_9396,i__9363_9398);var ev__8184__auto___9400 = cljs.core.nth.call(null,vec__9364_9399,0,null);var func__8185__auto___9401 = cljs.core.nth.call(null,vec__9364_9399,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9400,func__8185__auto___9401);
{
var G__9402 = seq__9360_9395;
var G__9403 = chunk__9361_9396;
var G__9404 = count__9362_9397;
var G__9405 = (i__9363_9398 + 1);
seq__9360_9395 = G__9402;
chunk__9361_9396 = G__9403;
count__9362_9397 = G__9404;
i__9363_9398 = G__9405;
continue;
}
} else
{var temp__4092__auto___9406 = cljs.core.seq.call(null,seq__9360_9395);if(temp__4092__auto___9406)
{var seq__9360_9407__$1 = temp__4092__auto___9406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9360_9407__$1))
{var c__7561__auto___9408 = cljs.core.chunk_first.call(null,seq__9360_9407__$1);{
var G__9409 = cljs.core.chunk_rest.call(null,seq__9360_9407__$1);
var G__9410 = c__7561__auto___9408;
var G__9411 = cljs.core.count.call(null,c__7561__auto___9408);
var G__9412 = 0;
seq__9360_9395 = G__9409;
chunk__9361_9396 = G__9410;
count__9362_9397 = G__9411;
i__9363_9398 = G__9412;
continue;
}
} else
{var vec__9365_9413 = cljs.core.first.call(null,seq__9360_9407__$1);var ev__8184__auto___9414 = cljs.core.nth.call(null,vec__9365_9413,0,null);var func__8185__auto___9415 = cljs.core.nth.call(null,vec__9365_9413,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9414,func__8185__auto___9415);
{
var G__9416 = cljs.core.next.call(null,seq__9360_9407__$1);
var G__9417 = null;
var G__9418 = 0;
var G__9419 = 0;
seq__9360_9395 = G__9416;
chunk__9361_9396 = G__9417;
count__9362_9397 = G__9418;
i__9363_9398 = G__9419;
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
lt.plugins.instabuster.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.instabuster.live_toggler.call(null,this$)], null));var seq__9372_9420 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9373_9421 = null;var count__9374_9422 = 0;var i__9375_9423 = 0;while(true){
if((i__9375_9423 < count__9374_9422))
{var vec__9376_9424 = cljs.core._nth.call(null,chunk__9373_9421,i__9375_9423);var ev__8184__auto___9425 = cljs.core.nth.call(null,vec__9376_9424,0,null);var func__8185__auto___9426 = cljs.core.nth.call(null,vec__9376_9424,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9425,func__8185__auto___9426);
{
var G__9427 = seq__9372_9420;
var G__9428 = chunk__9373_9421;
var G__9429 = count__9374_9422;
var G__9430 = (i__9375_9423 + 1);
seq__9372_9420 = G__9427;
chunk__9373_9421 = G__9428;
count__9374_9422 = G__9429;
i__9375_9423 = G__9430;
continue;
}
} else
{var temp__4092__auto___9431 = cljs.core.seq.call(null,seq__9372_9420);if(temp__4092__auto___9431)
{var seq__9372_9432__$1 = temp__4092__auto___9431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9372_9432__$1))
{var c__7561__auto___9433 = cljs.core.chunk_first.call(null,seq__9372_9432__$1);{
var G__9434 = cljs.core.chunk_rest.call(null,seq__9372_9432__$1);
var G__9435 = c__7561__auto___9433;
var G__9436 = cljs.core.count.call(null,c__7561__auto___9433);
var G__9437 = 0;
seq__9372_9420 = G__9434;
chunk__9373_9421 = G__9435;
count__9374_9422 = G__9436;
i__9375_9423 = G__9437;
continue;
}
} else
{var vec__9377_9438 = cljs.core.first.call(null,seq__9372_9432__$1);var ev__8184__auto___9439 = cljs.core.nth.call(null,vec__9377_9438,0,null);var func__8185__auto___9440 = cljs.core.nth.call(null,vec__9377_9438,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9439,func__8185__auto___9440);
{
var G__9441 = cljs.core.next.call(null,seq__9372_9432__$1);
var G__9442 = null;
var G__9443 = 0;
var G__9444 = 0;
seq__9372_9420 = G__9441;
chunk__9373_9421 = G__9442;
count__9374_9422 = G__9443;
i__9375_9423 = G__9444;
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
lt.plugins.instabuster.buster_cfg_path = lt.objs.files.join.call(null,lt.plugins.instabuster.buster_module_dir,"buster-configuration");
lt.plugins.instabuster.whenjs = require(lt.objs.files.join.call(null,lt.plugins.instabuster.buster_module_dir,"/when"));
lt.plugins.instabuster.resolve_buster_js = (function resolve_buster_js(editor){var or__6813__auto__ = new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(lt.plugins.instabuster.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));
}
});
lt.plugins.instabuster.load_buster_cfg = (function load_buster_cfg(busterjs){return require(lt.plugins.instabuster.buster_cfg_path).loadConfigurationFile(busterjs);
});
lt.plugins.instabuster.relative_to = (function relative_to(file,path){return lt.objs.files.relative.call(null,lt.objs.files.parent.call(null,file),path);
});
lt.plugins.instabuster.rem_pre_sep = (function rem_pre_sep(p){return clojure.string.replace_first.call(null,p,/^\//,"");
});
lt.plugins.instabuster.resolve_browser_groups = (function resolve_browser_groups(busterjs){return lt.plugins.instabuster.load_buster_cfg.call(null,busterjs).filterEnv("browser").groups;
});
lt.plugins.instabuster.resolve_tests = (function resolve_tests(groups){return lt.util.cljs.clj__GT_js.call(null,cljs.core.map.call(null,(function (group){var d = lt.plugins.instabuster.whenjs.defer();group.on("load:tests",(function (tests){return d.resolve(tests.map((function (p1__9378_SHARP_){return p1__9378_SHARP_.path;
})));
}));
group.resolve().then((function (){return cljs.core.List.EMPTY;
}));
return d;
}),groups));
});
lt.plugins.instabuster.maybe_buster_test = (function maybe_buster_test(editor,callback){var temp__4092__auto__ = lt.plugins.instabuster.resolve_buster_js.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.whenjs.all(lt.plugins.instabuster.resolve_tests.call(null,lt.plugins.instabuster.resolve_browser_groups.call(null,busterjs))).then((function (results){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9379_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.rem_pre_sep.call(null,p1__9379_SHARP_));
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
lt.plugins.instabuster.paths_from_resourceSets = (function paths_from_resourceSets(resourceSets){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9380_SHARP_){return lt.util.cljs.js__GT_clj.call(null,p1__9380_SHARP_.map((function (res){return res.path;
})));
}),resourceSets));
});
lt.plugins.instabuster.maybe_buster_file = (function maybe_buster_file(editor,callback){var temp__4092__auto__ = lt.plugins.instabuster.resolve_buster_js.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.whenjs.all(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__9381_SHARP_){return p1__9381_SHARP_.resolve();
}),lt.plugins.instabuster.resolve_browser_groups.call(null,busterjs)))).then((function (rs){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9382_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.rem_pre_sep.call(null,p1__9382_SHARP_));
}),lt.plugins.instabuster.paths_from_resourceSets.call(null,rs))))
{return callback.call(null);
} else
{return null;
}
}));
} else
{return null;
}
});
lt.plugins.instabuster.__BEH__on_maybe_toggle_buster = (function __BEH__on_maybe_toggle_buster(editor){return lt.plugins.instabuster.maybe_buster_test.call(null,editor,(function (){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"test.editor","test.editor",4114255291));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-maybe-toggle-buster","lt.plugins.instabuster/on-maybe-toggle-buster",2044317443),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_maybe_toggle_buster,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",3885920888),null], null), null));
lt.plugins.instabuster.__BEH__on_test_editor_BANG_ = (function __BEH__on_test_editor_BANG_(editor){lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.buster","editor.buster",3586925748)], null));
return lt.plugins.instabuster.maybe_add_toggler_BANG_.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-test-editor!","lt.plugins.instabuster/on-test-editor!",3496595619),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_test_editor_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test.editor","test.editor",4114255291),null], null), null));
lt.plugins.instabuster.__BEH__on_config_provided = (function __BEH__on_config_provided(this$,path){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-config-provided","lt.plugins.instabuster/on-config-provided",3400103788),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_config_provided,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config.provided","config.provided",1028780673),null], null), null));
lt.plugins.instabuster.__BEH__on_provide_config = (function __BEH__on_provide_config(this$,trigger){return lt.objs.dialogs.file.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"config.provided","config.provided",1028780673));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-provide-config","lt.plugins.instabuster/on-provide-config",4232991224),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_provide_config,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provide.config","provide.config",2224080545),null], null), null));
lt.plugins.instabuster.__BEH__on_maybe_autotest = (function __BEH__on_maybe_autotest(editor){if(cljs.core.truth_((function (){var and__6801__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(lt.plugins.instabuster.find_buster_js.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))),new cljs.core.Keyword(null,"buster-js","buster-js",4423780455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster)));if(and__6801__auto__)
{var and__6801__auto____$1 = new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(and__6801__auto____$1))
{return cljs.core.not.call(null,lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.buster.live","editor.buster.live",4395836810)));
} else
{return and__6801__auto____$1;
}
} else
{return and__6801__auto__;
}
})()))
{return lt.plugins.instabuster.maybe_buster_file.call(null,editor,(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test","test",1017460740),cljs.core.PersistentArrayMap.EMPTY).call(null);
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
lt.plugins.instabuster.__BEH__on_connect = (function __BEH__on_connect(this$,path){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buster-js","buster-js",4423780455),path], null));
return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-connect","lt.plugins.instabuster/on-connect",2764083288),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Buster",new cljs.core.Keyword(null,"desc","desc",1016984067),"Please provide the location of buster.js for your javascript project",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.file.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.client","lt.plugins.instabuster/buster.client",1799124756),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buster.client","buster.client",2491610154),null,new cljs.core.Keyword(null,"client","client",3951159101),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Buster Server");
lt.plugins.instabuster.buster_client = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.instabuster","buster.client","lt.plugins.instabuster/buster.client",1799124756));
lt.plugins.instabuster.buster_server_path = lt.objs.files.join.call(null,lt.plugins.instabuster.plugin_dir,"node","buster-server.js");
lt.plugins.instabuster.__BEH__on_start_server = (function __BEH__on_start_server(this$){if(cljs.core.truth_((function (){var or__6813__auto__ = new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(or__6813__auto__))
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
var temp__4092__auto___9445 = new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(temp__4092__auto___9445))
{var b_9446 = temp__4092__auto___9445;lt.object.raise.call(null,b_9446,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{}
var temp__4092__auto___9447 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9447))
{var worker_9448 = temp__4092__auto___9447;worker_9448.kill();
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),null], null));
} else
{}
if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,this$),lt.object.__GT_id.call(null,lt.plugins.instabuster.buster_client)))
{} else
{lt.objs.clients.rem_BANG_.call(null,this$);
}
var temp__4092__auto___9449 = new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9449))
{var sb_9450 = temp__4092__auto___9449;lt.objs.clients.rem_BANG_.call(null,sb_9450);
lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070),null], null));
} else
{}
return lt.object.raise.call(null,lt.plugins.instabuster.buster_runner,new cljs.core.Keyword(null,"kill","kill",1017196240));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-kill","lt.plugins.instabuster/on-server-kill",770834198),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close!","close!",3951350939),null,new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.instabuster.__BEH__on_server_disconnect = (function __BEH__on_server_disconnect(this$){var temp__4092__auto___9451 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9451))
{var worker_9452 = temp__4092__auto___9451;if(cljs.core.truth_(worker_9452.connected))
{worker_9452.disconnect();
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"start-server","start-server",3886904960),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Start server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"start.server","start.server",4774408641));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"stop-server","stop-server",2736578272),new cljs.core.Keyword(null,"desc","desc",1016984067),"Buster: Stop server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.instabuster.buster_client,new cljs.core.Keyword(null,"kill","kill",1017196240));
})], null));
lt.plugins.instabuster.__BEH__on_send = (function __BEH__on_send(this$,msg){return new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).send(cljs.core.clj__GT_js.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-send","lt.plugins.instabuster/on-send",4654705938),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
}

//# sourceMappingURL=instabuster_compiled.js.map