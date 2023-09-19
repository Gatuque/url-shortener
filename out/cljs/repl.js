// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__8046){
var map__8047 = p__8046;
var map__8047__$1 = cljs.core.__destructure_map.call(null,map__8047);
var m = map__8047__$1;
var n = cljs.core.get.call(null,map__8047__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__8047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8048_8076 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8049_8077 = null;
var count__8050_8078 = (0);
var i__8051_8079 = (0);
while(true){
if((i__8051_8079 < count__8050_8078)){
var f_8080 = cljs.core._nth.call(null,chunk__8049_8077,i__8051_8079);
cljs.core.println.call(null,"  ",f_8080);


var G__8081 = seq__8048_8076;
var G__8082 = chunk__8049_8077;
var G__8083 = count__8050_8078;
var G__8084 = (i__8051_8079 + (1));
seq__8048_8076 = G__8081;
chunk__8049_8077 = G__8082;
count__8050_8078 = G__8083;
i__8051_8079 = G__8084;
continue;
} else {
var temp__5720__auto___8085 = cljs.core.seq.call(null,seq__8048_8076);
if(temp__5720__auto___8085){
var seq__8048_8086__$1 = temp__5720__auto___8085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8048_8086__$1)){
var c__5568__auto___8087 = cljs.core.chunk_first.call(null,seq__8048_8086__$1);
var G__8088 = cljs.core.chunk_rest.call(null,seq__8048_8086__$1);
var G__8089 = c__5568__auto___8087;
var G__8090 = cljs.core.count.call(null,c__5568__auto___8087);
var G__8091 = (0);
seq__8048_8076 = G__8088;
chunk__8049_8077 = G__8089;
count__8050_8078 = G__8090;
i__8051_8079 = G__8091;
continue;
} else {
var f_8092 = cljs.core.first.call(null,seq__8048_8086__$1);
cljs.core.println.call(null,"  ",f_8092);


var G__8093 = cljs.core.next.call(null,seq__8048_8086__$1);
var G__8094 = null;
var G__8095 = (0);
var G__8096 = (0);
seq__8048_8076 = G__8093;
chunk__8049_8077 = G__8094;
count__8050_8078 = G__8095;
i__8051_8079 = G__8096;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8097 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8097);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8097)))?cljs.core.second.call(null,arglists_8097):arglists_8097));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8052_8098 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8053_8099 = null;
var count__8054_8100 = (0);
var i__8055_8101 = (0);
while(true){
if((i__8055_8101 < count__8054_8100)){
var vec__8064_8102 = cljs.core._nth.call(null,chunk__8053_8099,i__8055_8101);
var name_8103 = cljs.core.nth.call(null,vec__8064_8102,(0),null);
var map__8067_8104 = cljs.core.nth.call(null,vec__8064_8102,(1),null);
var map__8067_8105__$1 = cljs.core.__destructure_map.call(null,map__8067_8104);
var doc_8106 = cljs.core.get.call(null,map__8067_8105__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8107 = cljs.core.get.call(null,map__8067_8105__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8103);

cljs.core.println.call(null," ",arglists_8107);

if(cljs.core.truth_(doc_8106)){
cljs.core.println.call(null," ",doc_8106);
} else {
}


var G__8108 = seq__8052_8098;
var G__8109 = chunk__8053_8099;
var G__8110 = count__8054_8100;
var G__8111 = (i__8055_8101 + (1));
seq__8052_8098 = G__8108;
chunk__8053_8099 = G__8109;
count__8054_8100 = G__8110;
i__8055_8101 = G__8111;
continue;
} else {
var temp__5720__auto___8112 = cljs.core.seq.call(null,seq__8052_8098);
if(temp__5720__auto___8112){
var seq__8052_8113__$1 = temp__5720__auto___8112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8052_8113__$1)){
var c__5568__auto___8114 = cljs.core.chunk_first.call(null,seq__8052_8113__$1);
var G__8115 = cljs.core.chunk_rest.call(null,seq__8052_8113__$1);
var G__8116 = c__5568__auto___8114;
var G__8117 = cljs.core.count.call(null,c__5568__auto___8114);
var G__8118 = (0);
seq__8052_8098 = G__8115;
chunk__8053_8099 = G__8116;
count__8054_8100 = G__8117;
i__8055_8101 = G__8118;
continue;
} else {
var vec__8068_8119 = cljs.core.first.call(null,seq__8052_8113__$1);
var name_8120 = cljs.core.nth.call(null,vec__8068_8119,(0),null);
var map__8071_8121 = cljs.core.nth.call(null,vec__8068_8119,(1),null);
var map__8071_8122__$1 = cljs.core.__destructure_map.call(null,map__8071_8121);
var doc_8123 = cljs.core.get.call(null,map__8071_8122__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8124 = cljs.core.get.call(null,map__8071_8122__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8120);

cljs.core.println.call(null," ",arglists_8124);

if(cljs.core.truth_(doc_8123)){
cljs.core.println.call(null," ",doc_8123);
} else {
}


var G__8125 = cljs.core.next.call(null,seq__8052_8113__$1);
var G__8126 = null;
var G__8127 = (0);
var G__8128 = (0);
seq__8052_8098 = G__8125;
chunk__8053_8099 = G__8126;
count__8054_8100 = G__8127;
i__8055_8101 = G__8128;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__8072 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__8073 = null;
var count__8074 = (0);
var i__8075 = (0);
while(true){
if((i__8075 < count__8074)){
var role = cljs.core._nth.call(null,chunk__8073,i__8075);
var temp__5720__auto___8129__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___8129__$1)){
var spec_8130 = temp__5720__auto___8129__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8130));
} else {
}


var G__8131 = seq__8072;
var G__8132 = chunk__8073;
var G__8133 = count__8074;
var G__8134 = (i__8075 + (1));
seq__8072 = G__8131;
chunk__8073 = G__8132;
count__8074 = G__8133;
i__8075 = G__8134;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__8072);
if(temp__5720__auto____$1){
var seq__8072__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8072__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__8072__$1);
var G__8135 = cljs.core.chunk_rest.call(null,seq__8072__$1);
var G__8136 = c__5568__auto__;
var G__8137 = cljs.core.count.call(null,c__5568__auto__);
var G__8138 = (0);
seq__8072 = G__8135;
chunk__8073 = G__8136;
count__8074 = G__8137;
i__8075 = G__8138;
continue;
} else {
var role = cljs.core.first.call(null,seq__8072__$1);
var temp__5720__auto___8139__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___8139__$2)){
var spec_8140 = temp__5720__auto___8139__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8140));
} else {
}


var G__8141 = cljs.core.next.call(null,seq__8072__$1);
var G__8142 = null;
var G__8143 = (0);
var G__8144 = (0);
seq__8072 = G__8141;
chunk__8073 = G__8142;
count__8074 = G__8143;
i__8075 = G__8144;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__8145 = cljs.core.conj.call(null,via,t);
var G__8146 = cljs.core.ex_cause.call(null,t);
via = G__8145;
t = G__8146;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__8149 = datafied_throwable;
var map__8149__$1 = cljs.core.__destructure_map.call(null,map__8149);
var via = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__8150 = cljs.core.last.call(null,via);
var map__8150__$1 = cljs.core.__destructure_map.call(null,map__8150);
var type = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__8151 = data;
var map__8151__$1 = cljs.core.__destructure_map.call(null,map__8151);
var problems = cljs.core.get.call(null,map__8151__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__8151__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__8151__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__8152 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__8152__$1 = cljs.core.__destructure_map.call(null,map__8152);
var top_data = map__8152__$1;
var source = cljs.core.get.call(null,map__8152__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__8153 = phase;
var G__8153__$1 = (((G__8153 instanceof cljs.core.Keyword))?G__8153.fqn:null);
switch (G__8153__$1) {
case "read-source":
var map__8154 = data;
var map__8154__$1 = cljs.core.__destructure_map.call(null,map__8154);
var line = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__8154__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__8155 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__8155__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__8155,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__8155);
var G__8155__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__8155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__8155__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__8155__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__8155__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__8156 = top_data;
var G__8156__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__8156,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__8156);
var G__8156__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__8156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__8156__$1);
var G__8156__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__8156__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__8156__$2);
var G__8156__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__8156__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__8156__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__8156__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__8156__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__8157 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__8157,(0),null);
var method = cljs.core.nth.call(null,vec__8157,(1),null);
var file = cljs.core.nth.call(null,vec__8157,(2),null);
var line = cljs.core.nth.call(null,vec__8157,(3),null);
var G__8160 = top_data;
var G__8160__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__8160,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__8160);
var G__8160__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__8160__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__8160__$1);
var G__8160__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__8160__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__8160__$2);
var G__8160__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__8160__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__8160__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__8160__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__8160__$4;
}

break;
case "execution":
var vec__8161 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__8161,(0),null);
var method = cljs.core.nth.call(null,vec__8161,(1),null);
var file = cljs.core.nth.call(null,vec__8161,(2),null);
var line = cljs.core.nth.call(null,vec__8161,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__8148_SHARP_){
var or__5045__auto__ = (p1__8148_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__8148_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__8164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__8164__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__8164,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__8164);
var G__8164__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__8164__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__8164__$1);
var G__8164__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__8164__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__8164__$2);
var G__8164__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__8164__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__8164__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__8164__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__8164__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8153__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__8168){
var map__8169 = p__8168;
var map__8169__$1 = cljs.core.__destructure_map.call(null,map__8169);
var triage_data = map__8169__$1;
var phase = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__8169__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__8170 = phase;
var G__8170__$1 = (((G__8170 instanceof cljs.core.Keyword))?G__8170.fqn:null);
switch (G__8170__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8171_8180 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8172_8181 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8173_8182 = true;
var _STAR_print_fn_STAR__temp_val__8174_8183 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8173_8182);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8174_8183);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__8166_SHARP_){
return cljs.core.dissoc.call(null,p1__8166_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8172_8181);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8171_8180);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8175_8184 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8176_8185 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8177_8186 = true;
var _STAR_print_fn_STAR__temp_val__8178_8187 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8177_8186);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8178_8187);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__8167_SHARP_){
return cljs.core.dissoc.call(null,p1__8167_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8176_8185);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8175_8184);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8170__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
