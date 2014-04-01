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
lt.plugins.instabuster.dashboard.summary_ui = (function summary_ui(res){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.summary","div.summary",724307643),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Tests: "),cljs.core.str(new cljs.core.Keyword(null,"tests","tests",1124155795).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Failures: "),cljs.core.str(new cljs.core.Keyword(null,"failures","failures",1689842587).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Errors: "),cljs.core.str(new cljs.core.Keyword(null,"errors","errors",4014236381).cljs$core$IFn$_invoke$arity$1(res))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Total: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"test-init-at","test-init-at",4728938311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)))),cljs.core.str(" ms")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),[cljs.core.str("Test: "),cljs.core.str((Date.now() - new cljs.core.Keyword(null,"suite-start-at","suite-start-at",4629296165).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard)))),cljs.core.str(" ms")].join('')], null)], null));var seq__8751_8832 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8752_8833 = null;var count__8753_8834 = 0;var i__8754_8835 = 0;while(true){
if((i__8754_8835 < count__8753_8834))
{var vec__8755_8836 = cljs.core._nth.call(null,chunk__8752_8833,i__8754_8835);var ev__8184__auto___8837 = cljs.core.nth.call(null,vec__8755_8836,0,null);var func__8185__auto___8838 = cljs.core.nth.call(null,vec__8755_8836,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8837,func__8185__auto___8838);
{
var G__8839 = seq__8751_8832;
var G__8840 = chunk__8752_8833;
var G__8841 = count__8753_8834;
var G__8842 = (i__8754_8835 + 1);
seq__8751_8832 = G__8839;
chunk__8752_8833 = G__8840;
count__8753_8834 = G__8841;
i__8754_8835 = G__8842;
continue;
}
} else
{var temp__4092__auto___8843 = cljs.core.seq.call(null,seq__8751_8832);if(temp__4092__auto___8843)
{var seq__8751_8844__$1 = temp__4092__auto___8843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8751_8844__$1))
{var c__7561__auto___8845 = cljs.core.chunk_first.call(null,seq__8751_8844__$1);{
var G__8846 = cljs.core.chunk_rest.call(null,seq__8751_8844__$1);
var G__8847 = c__7561__auto___8845;
var G__8848 = cljs.core.count.call(null,c__7561__auto___8845);
var G__8849 = 0;
seq__8751_8832 = G__8846;
chunk__8752_8833 = G__8847;
count__8753_8834 = G__8848;
i__8754_8835 = G__8849;
continue;
}
} else
{var vec__8756_8850 = cljs.core.first.call(null,seq__8751_8844__$1);var ev__8184__auto___8851 = cljs.core.nth.call(null,vec__8756_8850,0,null);var func__8185__auto___8852 = cljs.core.nth.call(null,vec__8756_8850,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8851,func__8185__auto___8852);
{
var G__8853 = cljs.core.next.call(null,seq__8751_8844__$1);
var G__8854 = null;
var G__8855 = 0;
var G__8856 = 0;
seq__8751_8832 = G__8853;
chunk__8752_8833 = G__8854;
count__8753_8834 = G__8855;
i__8754_8835 = G__8856;
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
lt.plugins.instabuster.dashboard.failed_test_ui = (function failed_test_ui(res){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("("),cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(res))),cljs.core.str("): "),cljs.core.str(new cljs.core.Keyword(null,"test","test",1017460740).cljs$core$IFn$_invoke$arity$1(res))].join('')," (",new cljs.core.Keyword(null,"test-case","test-case",4082063101).cljs$core$IFn$_invoke$arity$1(res),")",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(res)], null)], null)], null));var seq__8763_8857 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8764_8858 = null;var count__8765_8859 = 0;var i__8766_8860 = 0;while(true){
if((i__8766_8860 < count__8765_8859))
{var vec__8767_8861 = cljs.core._nth.call(null,chunk__8764_8858,i__8766_8860);var ev__8184__auto___8862 = cljs.core.nth.call(null,vec__8767_8861,0,null);var func__8185__auto___8863 = cljs.core.nth.call(null,vec__8767_8861,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8862,func__8185__auto___8863);
{
var G__8864 = seq__8763_8857;
var G__8865 = chunk__8764_8858;
var G__8866 = count__8765_8859;
var G__8867 = (i__8766_8860 + 1);
seq__8763_8857 = G__8864;
chunk__8764_8858 = G__8865;
count__8765_8859 = G__8866;
i__8766_8860 = G__8867;
continue;
}
} else
{var temp__4092__auto___8868 = cljs.core.seq.call(null,seq__8763_8857);if(temp__4092__auto___8868)
{var seq__8763_8869__$1 = temp__4092__auto___8868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8763_8869__$1))
{var c__7561__auto___8870 = cljs.core.chunk_first.call(null,seq__8763_8869__$1);{
var G__8871 = cljs.core.chunk_rest.call(null,seq__8763_8869__$1);
var G__8872 = c__7561__auto___8870;
var G__8873 = cljs.core.count.call(null,c__7561__auto___8870);
var G__8874 = 0;
seq__8763_8857 = G__8871;
chunk__8764_8858 = G__8872;
count__8765_8859 = G__8873;
i__8766_8860 = G__8874;
continue;
}
} else
{var vec__8768_8875 = cljs.core.first.call(null,seq__8763_8869__$1);var ev__8184__auto___8876 = cljs.core.nth.call(null,vec__8768_8875,0,null);var func__8185__auto___8877 = cljs.core.nth.call(null,vec__8768_8875,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8876,func__8185__auto___8877);
{
var G__8878 = cljs.core.next.call(null,seq__8763_8869__$1);
var G__8879 = null;
var G__8880 = 0;
var G__8881 = 0;
seq__8763_8857 = G__8878;
chunk__8764_8858 = G__8879;
count__8765_8859 = G__8880;
i__8766_8860 = G__8881;
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
lt.plugins.instabuster.dashboard.failed_ui = (function failed_ui(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.failed-tests","div.failed-tests",1606312512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"Failed tests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (p1__8769_SHARP_){return lt.plugins.instabuster.dashboard.failed_test_ui.call(null,p1__8769_SHARP_);
}),cljs.core.filter.call(null,(function (p1__8770_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__8770_SHARP_));
}),new cljs.core.Keyword(null,"test-results","test-results",3878200621).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.dashboard.dashboard))))], null)], null));var seq__8777_8882 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8778_8883 = null;var count__8779_8884 = 0;var i__8780_8885 = 0;while(true){
if((i__8780_8885 < count__8779_8884))
{var vec__8781_8886 = cljs.core._nth.call(null,chunk__8778_8883,i__8780_8885);var ev__8184__auto___8887 = cljs.core.nth.call(null,vec__8781_8886,0,null);var func__8185__auto___8888 = cljs.core.nth.call(null,vec__8781_8886,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8887,func__8185__auto___8888);
{
var G__8889 = seq__8777_8882;
var G__8890 = chunk__8778_8883;
var G__8891 = count__8779_8884;
var G__8892 = (i__8780_8885 + 1);
seq__8777_8882 = G__8889;
chunk__8778_8883 = G__8890;
count__8779_8884 = G__8891;
i__8780_8885 = G__8892;
continue;
}
} else
{var temp__4092__auto___8893 = cljs.core.seq.call(null,seq__8777_8882);if(temp__4092__auto___8893)
{var seq__8777_8894__$1 = temp__4092__auto___8893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8777_8894__$1))
{var c__7561__auto___8895 = cljs.core.chunk_first.call(null,seq__8777_8894__$1);{
var G__8896 = cljs.core.chunk_rest.call(null,seq__8777_8894__$1);
var G__8897 = c__7561__auto___8895;
var G__8898 = cljs.core.count.call(null,c__7561__auto___8895);
var G__8899 = 0;
seq__8777_8882 = G__8896;
chunk__8778_8883 = G__8897;
count__8779_8884 = G__8898;
i__8780_8885 = G__8899;
continue;
}
} else
{var vec__8782_8900 = cljs.core.first.call(null,seq__8777_8894__$1);var ev__8184__auto___8901 = cljs.core.nth.call(null,vec__8782_8900,0,null);var func__8185__auto___8902 = cljs.core.nth.call(null,vec__8782_8900,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8901,func__8185__auto___8902);
{
var G__8903 = cljs.core.next.call(null,seq__8777_8894__$1);
var G__8904 = null;
var G__8905 = 0;
var G__8906 = 0;
seq__8777_8882 = G__8903;
chunk__8778_8883 = G__8904;
count__8779_8884 = G__8905;
i__8780_8885 = G__8906;
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
})());var seq__8789_8907 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8790_8908 = null;var count__8791_8909 = 0;var i__8792_8910 = 0;while(true){
if((i__8792_8910 < count__8791_8909))
{var vec__8793_8911 = cljs.core._nth.call(null,chunk__8790_8908,i__8792_8910);var ev__8184__auto___8912 = cljs.core.nth.call(null,vec__8793_8911,0,null);var func__8185__auto___8913 = cljs.core.nth.call(null,vec__8793_8911,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8912,func__8185__auto___8913);
{
var G__8914 = seq__8789_8907;
var G__8915 = chunk__8790_8908;
var G__8916 = count__8791_8909;
var G__8917 = (i__8792_8910 + 1);
seq__8789_8907 = G__8914;
chunk__8790_8908 = G__8915;
count__8791_8909 = G__8916;
i__8792_8910 = G__8917;
continue;
}
} else
{var temp__4092__auto___8918 = cljs.core.seq.call(null,seq__8789_8907);if(temp__4092__auto___8918)
{var seq__8789_8919__$1 = temp__4092__auto___8918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8789_8919__$1))
{var c__7561__auto___8920 = cljs.core.chunk_first.call(null,seq__8789_8919__$1);{
var G__8921 = cljs.core.chunk_rest.call(null,seq__8789_8919__$1);
var G__8922 = c__7561__auto___8920;
var G__8923 = cljs.core.count.call(null,c__7561__auto___8920);
var G__8924 = 0;
seq__8789_8907 = G__8921;
chunk__8790_8908 = G__8922;
count__8791_8909 = G__8923;
i__8792_8910 = G__8924;
continue;
}
} else
{var vec__8794_8925 = cljs.core.first.call(null,seq__8789_8919__$1);var ev__8184__auto___8926 = cljs.core.nth.call(null,vec__8794_8925,0,null);var func__8185__auto___8927 = cljs.core.nth.call(null,vec__8794_8925,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8926,func__8185__auto___8927);
{
var G__8928 = cljs.core.next.call(null,seq__8789_8919__$1);
var G__8929 = null;
var G__8930 = 0;
var G__8931 = 0;
seq__8789_8907 = G__8928;
chunk__8790_8908 = G__8929;
count__8791_8909 = G__8930;
i__8792_8910 = G__8931;
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
lt.plugins.instabuster.dashboard.testinit_ui = (function testinit_ui(){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-results","div.buster-results",2322289209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Testresults"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Initializing testrun..."], null)], null));var seq__8801_8932 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8802_8933 = null;var count__8803_8934 = 0;var i__8804_8935 = 0;while(true){
if((i__8804_8935 < count__8803_8934))
{var vec__8805_8936 = cljs.core._nth.call(null,chunk__8802_8933,i__8804_8935);var ev__8184__auto___8937 = cljs.core.nth.call(null,vec__8805_8936,0,null);var func__8185__auto___8938 = cljs.core.nth.call(null,vec__8805_8936,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8937,func__8185__auto___8938);
{
var G__8939 = seq__8801_8932;
var G__8940 = chunk__8802_8933;
var G__8941 = count__8803_8934;
var G__8942 = (i__8804_8935 + 1);
seq__8801_8932 = G__8939;
chunk__8802_8933 = G__8940;
count__8803_8934 = G__8941;
i__8804_8935 = G__8942;
continue;
}
} else
{var temp__4092__auto___8943 = cljs.core.seq.call(null,seq__8801_8932);if(temp__4092__auto___8943)
{var seq__8801_8944__$1 = temp__4092__auto___8943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8801_8944__$1))
{var c__7561__auto___8945 = cljs.core.chunk_first.call(null,seq__8801_8944__$1);{
var G__8946 = cljs.core.chunk_rest.call(null,seq__8801_8944__$1);
var G__8947 = c__7561__auto___8945;
var G__8948 = cljs.core.count.call(null,c__7561__auto___8945);
var G__8949 = 0;
seq__8801_8932 = G__8946;
chunk__8802_8933 = G__8947;
count__8803_8934 = G__8948;
i__8804_8935 = G__8949;
continue;
}
} else
{var vec__8806_8950 = cljs.core.first.call(null,seq__8801_8944__$1);var ev__8184__auto___8951 = cljs.core.nth.call(null,vec__8806_8950,0,null);var func__8185__auto___8952 = cljs.core.nth.call(null,vec__8806_8950,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8951,func__8185__auto___8952);
{
var G__8953 = cljs.core.next.call(null,seq__8801_8944__$1);
var G__8954 = null;
var G__8955 = 0;
var G__8956 = 0;
seq__8801_8932 = G__8953;
chunk__8802_8933 = G__8954;
count__8803_8934 = G__8955;
i__8804_8935 = G__8956;
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
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("Autotest on?: "),cljs.core.str(new cljs.core.Keyword(null,"autotest","autotest",2453579315).cljs$core$IFn$_invoke$arity$1(data))].join('')], null)], null)], null));var seq__8813_8957 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8814_8958 = null;var count__8815_8959 = 0;var i__8816_8960 = 0;while(true){
if((i__8816_8960 < count__8815_8959))
{var vec__8817_8961 = cljs.core._nth.call(null,chunk__8814_8958,i__8816_8960);var ev__8184__auto___8962 = cljs.core.nth.call(null,vec__8817_8961,0,null);var func__8185__auto___8963 = cljs.core.nth.call(null,vec__8817_8961,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8962,func__8185__auto___8963);
{
var G__8964 = seq__8813_8957;
var G__8965 = chunk__8814_8958;
var G__8966 = count__8815_8959;
var G__8967 = (i__8816_8960 + 1);
seq__8813_8957 = G__8964;
chunk__8814_8958 = G__8965;
count__8815_8959 = G__8966;
i__8816_8960 = G__8967;
continue;
}
} else
{var temp__4092__auto___8968 = cljs.core.seq.call(null,seq__8813_8957);if(temp__4092__auto___8968)
{var seq__8813_8969__$1 = temp__4092__auto___8968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8813_8969__$1))
{var c__7561__auto___8970 = cljs.core.chunk_first.call(null,seq__8813_8969__$1);{
var G__8971 = cljs.core.chunk_rest.call(null,seq__8813_8969__$1);
var G__8972 = c__7561__auto___8970;
var G__8973 = cljs.core.count.call(null,c__7561__auto___8970);
var G__8974 = 0;
seq__8813_8957 = G__8971;
chunk__8814_8958 = G__8972;
count__8815_8959 = G__8973;
i__8816_8960 = G__8974;
continue;
}
} else
{var vec__8818_8975 = cljs.core.first.call(null,seq__8813_8969__$1);var ev__8184__auto___8976 = cljs.core.nth.call(null,vec__8818_8975,0,null);var func__8185__auto___8977 = cljs.core.nth.call(null,vec__8818_8975,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8976,func__8185__auto___8977);
{
var G__8978 = cljs.core.next.call(null,seq__8813_8969__$1);
var G__8979 = null;
var G__8980 = 0;
var G__8981 = 0;
seq__8813_8957 = G__8978;
chunk__8814_8958 = G__8979;
count__8815_8959 = G__8980;
i__8816_8960 = G__8981;
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
lt.plugins.instabuster.dashboard.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buster-dashboard","div.buster-dashboard",718114967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow: scroll;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",3842872421),"Buster dashboard"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.result-container","div.result-container",4736622080)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.project-container","div.project-container",3841828386)], null)], null));var seq__8825_8982 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8826_8983 = null;var count__8827_8984 = 0;var i__8828_8985 = 0;while(true){
if((i__8828_8985 < count__8827_8984))
{var vec__8829_8986 = cljs.core._nth.call(null,chunk__8826_8983,i__8828_8985);var ev__8184__auto___8987 = cljs.core.nth.call(null,vec__8829_8986,0,null);var func__8185__auto___8988 = cljs.core.nth.call(null,vec__8829_8986,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___8987,func__8185__auto___8988);
{
var G__8989 = seq__8825_8982;
var G__8990 = chunk__8826_8983;
var G__8991 = count__8827_8984;
var G__8992 = (i__8828_8985 + 1);
seq__8825_8982 = G__8989;
chunk__8826_8983 = G__8990;
count__8827_8984 = G__8991;
i__8828_8985 = G__8992;
continue;
}
} else
{var temp__4092__auto___8993 = cljs.core.seq.call(null,seq__8825_8982);if(temp__4092__auto___8993)
{var seq__8825_8994__$1 = temp__4092__auto___8993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8825_8994__$1))
{var c__7561__auto___8995 = cljs.core.chunk_first.call(null,seq__8825_8994__$1);{
var G__8996 = cljs.core.chunk_rest.call(null,seq__8825_8994__$1);
var G__8997 = c__7561__auto___8995;
var G__8998 = cljs.core.count.call(null,c__7561__auto___8995);
var G__8999 = 0;
seq__8825_8982 = G__8996;
chunk__8826_8983 = G__8997;
count__8827_8984 = G__8998;
i__8828_8985 = G__8999;
continue;
}
} else
{var vec__8830_9000 = cljs.core.first.call(null,seq__8825_8994__$1);var ev__8184__auto___9001 = cljs.core.nth.call(null,vec__8830_9000,0,null);var func__8185__auto___9002 = cljs.core.nth.call(null,vec__8830_9000,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9001,func__8185__auto___9002);
{
var G__9003 = cljs.core.next.call(null,seq__8825_8994__$1);
var G__9004 = null;
var G__9005 = 0;
var G__9006 = 0;
seq__8825_8982 = G__9003;
chunk__8826_8983 = G__9004;
count__8827_8984 = G__9005;
i__8828_8985 = G__9006;
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
lt.plugins.instabuster.dashboard.tests_ok_QMARK_ = (function tests_ok_QMARK_(results){return cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8831_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["error",null,"failure",null], null), null),new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(p1__8831_SHARP_));
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
worker.on("message",(function (p1__9126_SHARP_){return lt.object.raise.call(null,lt.plugins.instabuster.buster,new cljs.core.Keyword(null,"test.result","test.result",4487656555),args,p1__9126_SHARP_);
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
var seq__9131 = cljs.core.seq.call(null,res.log);var chunk__9132 = null;var count__9133 = 0;var i__9134 = 0;while(true){
if((i__9134 < count__9133))
{var out = cljs.core._nth.call(null,chunk__9132,i__9134);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9165 = seq__9131;
var G__9166 = chunk__9132;
var G__9167 = count__9133;
var G__9168 = (i__9134 + 1);
seq__9131 = G__9165;
chunk__9132 = G__9166;
count__9133 = G__9167;
i__9134 = G__9168;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9131);if(temp__4092__auto__)
{var seq__9131__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9131__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__9131__$1);{
var G__9169 = cljs.core.chunk_rest.call(null,seq__9131__$1);
var G__9170 = c__7561__auto__;
var G__9171 = cljs.core.count.call(null,c__7561__auto__);
var G__9172 = 0;
seq__9131 = G__9169;
chunk__9132 = G__9170;
count__9133 = G__9171;
i__9134 = G__9172;
continue;
}
} else
{var out = cljs.core.first.call(null,seq__9131__$1);lt.objs.console.log.call(null,[cljs.core.str("    "),cljs.core.str(out)].join(''));
{
var G__9173 = cljs.core.next.call(null,seq__9131__$1);
var G__9174 = null;
var G__9175 = 0;
var G__9176 = 0;
seq__9131 = G__9173;
chunk__9132 = G__9174;
count__9133 = G__9175;
i__9134 = G__9176;
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
lt.plugins.instabuster.live_toggler = (function live_toggler(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__9135_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__9135_SHARP_))?null:"off"))].join('');
}))], null),"buster-live"], null));var seq__9142_9177 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__9143_9178 = null;var count__9144_9179 = 0;var i__9145_9180 = 0;while(true){
if((i__9145_9180 < count__9144_9179))
{var vec__9146_9181 = cljs.core._nth.call(null,chunk__9143_9178,i__9145_9180);var ev__8184__auto___9182 = cljs.core.nth.call(null,vec__9146_9181,0,null);var func__8185__auto___9183 = cljs.core.nth.call(null,vec__9146_9181,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9182,func__8185__auto___9183);
{
var G__9184 = seq__9142_9177;
var G__9185 = chunk__9143_9178;
var G__9186 = count__9144_9179;
var G__9187 = (i__9145_9180 + 1);
seq__9142_9177 = G__9184;
chunk__9143_9178 = G__9185;
count__9144_9179 = G__9186;
i__9145_9180 = G__9187;
continue;
}
} else
{var temp__4092__auto___9188 = cljs.core.seq.call(null,seq__9142_9177);if(temp__4092__auto___9188)
{var seq__9142_9189__$1 = temp__4092__auto___9188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9142_9189__$1))
{var c__7561__auto___9190 = cljs.core.chunk_first.call(null,seq__9142_9189__$1);{
var G__9191 = cljs.core.chunk_rest.call(null,seq__9142_9189__$1);
var G__9192 = c__7561__auto___9190;
var G__9193 = cljs.core.count.call(null,c__7561__auto___9190);
var G__9194 = 0;
seq__9142_9177 = G__9191;
chunk__9143_9178 = G__9192;
count__9144_9179 = G__9193;
i__9145_9180 = G__9194;
continue;
}
} else
{var vec__9147_9195 = cljs.core.first.call(null,seq__9142_9189__$1);var ev__8184__auto___9196 = cljs.core.nth.call(null,vec__9147_9195,0,null);var func__8185__auto___9197 = cljs.core.nth.call(null,vec__9147_9195,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9196,func__8185__auto___9197);
{
var G__9198 = cljs.core.next.call(null,seq__9142_9189__$1);
var G__9199 = null;
var G__9200 = 0;
var G__9201 = 0;
seq__9142_9177 = G__9198;
chunk__9143_9178 = G__9199;
count__9144_9179 = G__9200;
i__9145_9180 = G__9201;
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
lt.plugins.instabuster.wrapper = (function wrapper(this$){var e__8183__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),lt.plugins.instabuster.live_toggler.call(null,this$)], null));var seq__9154_9202 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9155_9203 = null;var count__9156_9204 = 0;var i__9157_9205 = 0;while(true){
if((i__9157_9205 < count__9156_9204))
{var vec__9158_9206 = cljs.core._nth.call(null,chunk__9155_9203,i__9157_9205);var ev__8184__auto___9207 = cljs.core.nth.call(null,vec__9158_9206,0,null);var func__8185__auto___9208 = cljs.core.nth.call(null,vec__9158_9206,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9207,func__8185__auto___9208);
{
var G__9209 = seq__9154_9202;
var G__9210 = chunk__9155_9203;
var G__9211 = count__9156_9204;
var G__9212 = (i__9157_9205 + 1);
seq__9154_9202 = G__9209;
chunk__9155_9203 = G__9210;
count__9156_9204 = G__9211;
i__9157_9205 = G__9212;
continue;
}
} else
{var temp__4092__auto___9213 = cljs.core.seq.call(null,seq__9154_9202);if(temp__4092__auto___9213)
{var seq__9154_9214__$1 = temp__4092__auto___9213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9154_9214__$1))
{var c__7561__auto___9215 = cljs.core.chunk_first.call(null,seq__9154_9214__$1);{
var G__9216 = cljs.core.chunk_rest.call(null,seq__9154_9214__$1);
var G__9217 = c__7561__auto___9215;
var G__9218 = cljs.core.count.call(null,c__7561__auto___9215);
var G__9219 = 0;
seq__9154_9202 = G__9216;
chunk__9155_9203 = G__9217;
count__9156_9204 = G__9218;
i__9157_9205 = G__9219;
continue;
}
} else
{var vec__9159_9220 = cljs.core.first.call(null,seq__9154_9214__$1);var ev__8184__auto___9221 = cljs.core.nth.call(null,vec__9159_9220,0,null);var func__8185__auto___9222 = cljs.core.nth.call(null,vec__9159_9220,1,null);lt.util.dom.on.call(null,e__8183__auto__,ev__8184__auto___9221,func__8185__auto___9222);
{
var G__9223 = cljs.core.next.call(null,seq__9154_9214__$1);
var G__9224 = null;
var G__9225 = 0;
var G__9226 = 0;
seq__9154_9202 = G__9223;
chunk__9155_9203 = G__9224;
count__9156_9204 = G__9225;
i__9157_9205 = G__9226;
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
lt.plugins.instabuster.resolve_tests = (function resolve_tests(groups){return lt.util.cljs.clj__GT_js.call(null,cljs.core.map.call(null,(function (group){var d = lt.plugins.instabuster.whenjs.defer();group.on("load:tests",(function (tests){return d.resolve(tests.map((function (p1__9160_SHARP_){return p1__9160_SHARP_.path;
})));
}));
group.resolve().then((function (){return cljs.core.List.EMPTY;
}));
return d;
}),groups));
});
lt.plugins.instabuster.maybe_buster_test = (function maybe_buster_test(editor,callback){var temp__4092__auto__ = lt.plugins.instabuster.resolve_buster_js.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.whenjs.all(lt.plugins.instabuster.resolve_tests.call(null,lt.plugins.instabuster.resolve_browser_groups.call(null,busterjs))).then((function (results){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9161_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.rem_pre_sep.call(null,p1__9161_SHARP_));
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
lt.plugins.instabuster.paths_from_resourceSets = (function paths_from_resourceSets(resourceSets){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9162_SHARP_){return lt.util.cljs.js__GT_clj.call(null,p1__9162_SHARP_.map((function (res){return res.path;
})));
}),resourceSets));
});
lt.plugins.instabuster.maybe_buster_file = (function maybe_buster_file(editor,callback){var temp__4092__auto__ = lt.plugins.instabuster.resolve_buster_js.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var busterjs = temp__4092__auto__;var path = lt.plugins.instabuster.relative_to.call(null,busterjs,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));return lt.plugins.instabuster.whenjs.all(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__9163_SHARP_){return p1__9163_SHARP_.resolve();
}),lt.plugins.instabuster.resolve_browser_groups.call(null,busterjs)))).then((function (rs){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9164_SHARP_){return cljs.core._EQ_.call(null,path,lt.plugins.instabuster.rem_pre_sep.call(null,p1__9164_SHARP_));
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
var temp__4092__auto___9227 = new cljs.core.Keyword(null,"browser","browser",1164844698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster));if(cljs.core.truth_(temp__4092__auto___9227))
{var b_9228 = temp__4092__auto___9227;lt.object.raise.call(null,b_9228,new cljs.core.Keyword(null,"close","close",1108660586));
} else
{}
var temp__4092__auto___9229 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9229))
{var worker_9230 = temp__4092__auto___9229;worker_9230.kill();
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834),null], null));
} else
{}
if(cljs.core._EQ_.call(null,lt.object.__GT_id.call(null,this$),lt.object.__GT_id.call(null,lt.plugins.instabuster.buster_client)))
{} else
{lt.objs.clients.rem_BANG_.call(null,this$);
}
var temp__4092__auto___9231 = new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9231))
{var sb_9232 = temp__4092__auto___9231;lt.objs.clients.rem_BANG_.call(null,sb_9232);
lt.object.merge_BANG_.call(null,lt.plugins.instabuster.buster_client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-client","sidebar-client",910821070),null], null));
} else
{}
return lt.object.raise.call(null,lt.plugins.instabuster.buster_runner,new cljs.core.Keyword(null,"kill","kill",1017196240));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.instabuster","on-server-kill","lt.plugins.instabuster/on-server-kill",770834198),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.instabuster.__BEH__on_server_kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close!","close!",3951350939),null,new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.instabuster.__BEH__on_server_disconnect = (function __BEH__on_server_disconnect(this$){var temp__4092__auto___9233 = new cljs.core.Keyword("lt.plugins.instabuster","worker","lt.plugins.instabuster/worker",3901605834).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.instabuster.buster_client));if(cljs.core.truth_(temp__4092__auto___9233))
{var worker_9234 = temp__4092__auto___9233;if(cljs.core.truth_(worker_9234.connected))
{worker_9234.disconnect();
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