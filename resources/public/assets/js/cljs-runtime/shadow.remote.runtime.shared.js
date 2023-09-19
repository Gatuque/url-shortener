goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33674){
var map__33675 = p__33674;
var map__33675__$1 = cljs.core.__destructure_map(map__33675);
var runtime = map__33675__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33675__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33913 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33913)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33679 = runtime;
var G__33680 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33913);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33679,G__33680) : shadow.remote.runtime.shared.process.call(null,G__33679,G__33680));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33683,res){
var map__33684 = p__33683;
var map__33684__$1 = cljs.core.__destructure_map(map__33684);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33684__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33684__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33686 = res;
var G__33686__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33686,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33686);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33686__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33686__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33689 = arguments.length;
switch (G__33689) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33690,msg,handlers,timeout_after_ms){
var map__33691 = p__33690;
var map__33691__$1 = cljs.core.__destructure_map(map__33691);
var runtime = map__33691__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33916 = arguments.length;
var i__5770__auto___33917 = (0);
while(true){
if((i__5770__auto___33917 < len__5769__auto___33916)){
args__5775__auto__.push((arguments[i__5770__auto___33917]));

var G__33918 = (i__5770__auto___33917 + (1));
i__5770__auto___33917 = G__33918;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33721,ev,args){
var map__33722 = p__33721;
var map__33722__$1 = cljs.core.__destructure_map(map__33722);
var runtime = map__33722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33723 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33726 = null;
var count__33727 = (0);
var i__33728 = (0);
while(true){
if((i__33728 < count__33727)){
var ext = chunk__33726.cljs$core$IIndexed$_nth$arity$2(null,i__33728);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33920 = seq__33723;
var G__33921 = chunk__33726;
var G__33922 = count__33727;
var G__33923 = (i__33728 + (1));
seq__33723 = G__33920;
chunk__33726 = G__33921;
count__33727 = G__33922;
i__33728 = G__33923;
continue;
} else {
var G__33924 = seq__33723;
var G__33925 = chunk__33726;
var G__33926 = count__33727;
var G__33927 = (i__33728 + (1));
seq__33723 = G__33924;
chunk__33726 = G__33925;
count__33727 = G__33926;
i__33728 = G__33927;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33723);
if(temp__5720__auto__){
var seq__33723__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33723__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33723__$1);
var G__33928 = cljs.core.chunk_rest(seq__33723__$1);
var G__33929 = c__5568__auto__;
var G__33930 = cljs.core.count(c__5568__auto__);
var G__33931 = (0);
seq__33723 = G__33928;
chunk__33726 = G__33929;
count__33727 = G__33930;
i__33728 = G__33931;
continue;
} else {
var ext = cljs.core.first(seq__33723__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33932 = cljs.core.next(seq__33723__$1);
var G__33933 = null;
var G__33934 = (0);
var G__33935 = (0);
seq__33723 = G__33932;
chunk__33726 = G__33933;
count__33727 = G__33934;
i__33728 = G__33935;
continue;
} else {
var G__33936 = cljs.core.next(seq__33723__$1);
var G__33937 = null;
var G__33938 = (0);
var G__33939 = (0);
seq__33723 = G__33936;
chunk__33726 = G__33937;
count__33727 = G__33938;
i__33728 = G__33939;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33712){
var G__33713 = cljs.core.first(seq33712);
var seq33712__$1 = cljs.core.next(seq33712);
var G__33714 = cljs.core.first(seq33712__$1);
var seq33712__$2 = cljs.core.next(seq33712__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33713,G__33714,seq33712__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33734,p__33735){
var map__33740 = p__33734;
var map__33740__$1 = cljs.core.__destructure_map(map__33740);
var runtime = map__33740__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33740__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33741 = p__33735;
var map__33741__$1 = cljs.core.__destructure_map(map__33741);
var msg = map__33741__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33750 = cljs.core.deref(state_ref);
var map__33750__$1 = cljs.core.__destructure_map(map__33750);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33750__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33750__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33768,msg){
var map__33789 = p__33768;
var map__33789__$1 = cljs.core.__destructure_map(map__33789);
var runtime = map__33789__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33789__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33806,key,p__33807){
var map__33808 = p__33806;
var map__33808__$1 = cljs.core.__destructure_map(map__33808);
var state = map__33808__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33809 = p__33807;
var map__33809__$1 = cljs.core.__destructure_map(map__33809);
var spec = map__33809__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33809__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33831,key,spec){
var map__33832 = p__33831;
var map__33832__$1 = cljs.core.__destructure_map(map__33832);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33833_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33833_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33834_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33834_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33835_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33835_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33836_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33836_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33837_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33837_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33841,key){
var map__33842 = p__33841;
var map__33842__$1 = cljs.core.__destructure_map(map__33842);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33842__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33843,msg){
var map__33844 = p__33843;
var map__33844__$1 = cljs.core.__destructure_map(map__33844);
var runtime = map__33844__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33844__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33848,p__33849){
var map__33850 = p__33848;
var map__33850__$1 = cljs.core.__destructure_map(map__33850);
var runtime = map__33850__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33850__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33851 = p__33849;
var map__33851__$1 = cljs.core.__destructure_map(map__33851);
var msg = map__33851__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33851__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33851__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33884 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33886 = null;
var count__33887 = (0);
var i__33888 = (0);
while(true){
if((i__33888 < count__33887)){
var map__33897 = chunk__33886.cljs$core$IIndexed$_nth$arity$2(null,i__33888);
var map__33897__$1 = cljs.core.__destructure_map(map__33897);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33897__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33946 = seq__33884;
var G__33947 = chunk__33886;
var G__33948 = count__33887;
var G__33949 = (i__33888 + (1));
seq__33884 = G__33946;
chunk__33886 = G__33947;
count__33887 = G__33948;
i__33888 = G__33949;
continue;
} else {
var G__33950 = seq__33884;
var G__33951 = chunk__33886;
var G__33952 = count__33887;
var G__33953 = (i__33888 + (1));
seq__33884 = G__33950;
chunk__33886 = G__33951;
count__33887 = G__33952;
i__33888 = G__33953;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33884);
if(temp__5720__auto__){
var seq__33884__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33884__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33884__$1);
var G__33954 = cljs.core.chunk_rest(seq__33884__$1);
var G__33955 = c__5568__auto__;
var G__33956 = cljs.core.count(c__5568__auto__);
var G__33957 = (0);
seq__33884 = G__33954;
chunk__33886 = G__33955;
count__33887 = G__33956;
i__33888 = G__33957;
continue;
} else {
var map__33900 = cljs.core.first(seq__33884__$1);
var map__33900__$1 = cljs.core.__destructure_map(map__33900);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33900__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33958 = cljs.core.next(seq__33884__$1);
var G__33959 = null;
var G__33960 = (0);
var G__33961 = (0);
seq__33884 = G__33958;
chunk__33886 = G__33959;
count__33887 = G__33960;
i__33888 = G__33961;
continue;
} else {
var G__33962 = cljs.core.next(seq__33884__$1);
var G__33963 = null;
var G__33964 = (0);
var G__33965 = (0);
seq__33884 = G__33962;
chunk__33886 = G__33963;
count__33887 = G__33964;
i__33888 = G__33965;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
