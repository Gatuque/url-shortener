goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40353 = arguments.length;
var i__5770__auto___40354 = (0);
while(true){
if((i__5770__auto___40354 < len__5769__auto___40353)){
args__5775__auto__.push((arguments[i__5770__auto___40354]));

var G__40355 = (i__5770__auto___40354 + (1));
i__5770__auto___40354 = G__40355;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39903){
var G__39904 = cljs.core.first(seq39903);
var seq39903__$1 = cljs.core.next(seq39903);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39904,seq39903__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39905 = cljs.core.seq(sources);
var chunk__39906 = null;
var count__39907 = (0);
var i__39908 = (0);
while(true){
if((i__39908 < count__39907)){
var map__39913 = chunk__39906.cljs$core$IIndexed$_nth$arity$2(null,i__39908);
var map__39913__$1 = cljs.core.__destructure_map(map__39913);
var src = map__39913__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39913__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39913__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39913__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39914){var e_40356 = e39914;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40356);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40356.message)].join('')));
}

var G__40357 = seq__39905;
var G__40358 = chunk__39906;
var G__40359 = count__39907;
var G__40360 = (i__39908 + (1));
seq__39905 = G__40357;
chunk__39906 = G__40358;
count__39907 = G__40359;
i__39908 = G__40360;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39905);
if(temp__5720__auto__){
var seq__39905__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39905__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39905__$1);
var G__40361 = cljs.core.chunk_rest(seq__39905__$1);
var G__40362 = c__5568__auto__;
var G__40363 = cljs.core.count(c__5568__auto__);
var G__40364 = (0);
seq__39905 = G__40361;
chunk__39906 = G__40362;
count__39907 = G__40363;
i__39908 = G__40364;
continue;
} else {
var map__39915 = cljs.core.first(seq__39905__$1);
var map__39915__$1 = cljs.core.__destructure_map(map__39915);
var src = map__39915__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39915__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39915__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39915__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39915__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39916){var e_40365 = e39916;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40365);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40365.message)].join('')));
}

var G__40366 = cljs.core.next(seq__39905__$1);
var G__40367 = null;
var G__40368 = (0);
var G__40369 = (0);
seq__39905 = G__40366;
chunk__39906 = G__40367;
count__39907 = G__40368;
i__39908 = G__40369;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39920 = cljs.core.seq(js_requires);
var chunk__39921 = null;
var count__39922 = (0);
var i__39923 = (0);
while(true){
if((i__39923 < count__39922)){
var js_ns = chunk__39921.cljs$core$IIndexed$_nth$arity$2(null,i__39923);
var require_str_40370 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40370);


var G__40371 = seq__39920;
var G__40372 = chunk__39921;
var G__40373 = count__39922;
var G__40374 = (i__39923 + (1));
seq__39920 = G__40371;
chunk__39921 = G__40372;
count__39922 = G__40373;
i__39923 = G__40374;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39920);
if(temp__5720__auto__){
var seq__39920__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39920__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39920__$1);
var G__40375 = cljs.core.chunk_rest(seq__39920__$1);
var G__40376 = c__5568__auto__;
var G__40377 = cljs.core.count(c__5568__auto__);
var G__40378 = (0);
seq__39920 = G__40375;
chunk__39921 = G__40376;
count__39922 = G__40377;
i__39923 = G__40378;
continue;
} else {
var js_ns = cljs.core.first(seq__39920__$1);
var require_str_40383 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40383);


var G__40384 = cljs.core.next(seq__39920__$1);
var G__40385 = null;
var G__40386 = (0);
var G__40387 = (0);
seq__39920 = G__40384;
chunk__39921 = G__40385;
count__39922 = G__40386;
i__39923 = G__40387;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39925){
var map__39926 = p__39925;
var map__39926__$1 = cljs.core.__destructure_map(map__39926);
var msg = map__39926__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39926__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39926__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927(s__39928){
return (new cljs.core.LazySeq(null,(function (){
var s__39928__$1 = s__39928;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__39928__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__39933 = cljs.core.first(xs__6277__auto__);
var map__39933__$1 = cljs.core.__destructure_map(map__39933);
var src = map__39933__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39933__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39933__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__39928__$1,map__39933,map__39933__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39926,map__39926__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927_$_iter__39929(s__39930){
return (new cljs.core.LazySeq(null,((function (s__39928__$1,map__39933,map__39933__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39926,map__39926__$1,msg,info,reload_info){
return (function (){
var s__39930__$1 = s__39930;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__39930__$1);
if(temp__5720__auto____$1){
var s__39930__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39930__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39930__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39932 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39931 = (0);
while(true){
if((i__39931 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__39931);
cljs.core.chunk_append(b__39932,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40391 = (i__39931 + (1));
i__39931 = G__40391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39932),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927_$_iter__39929(cljs.core.chunk_rest(s__39930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39932),null);
}
} else {
var warning = cljs.core.first(s__39930__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927_$_iter__39929(cljs.core.rest(s__39930__$2)));
}
} else {
return null;
}
break;
}
});})(s__39928__$1,map__39933,map__39933__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39926,map__39926__$1,msg,info,reload_info))
,null,null));
});})(s__39928__$1,map__39933,map__39933__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__39926,map__39926__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39927(cljs.core.rest(s__39928__$1)));
} else {
var G__40392 = cljs.core.rest(s__39928__$1);
s__39928__$1 = G__40392;
continue;
}
} else {
var G__40393 = cljs.core.rest(s__39928__$1);
s__39928__$1 = G__40393;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39943_40394 = cljs.core.seq(warnings);
var chunk__39944_40395 = null;
var count__39945_40396 = (0);
var i__39946_40397 = (0);
while(true){
if((i__39946_40397 < count__39945_40396)){
var map__39953_40398 = chunk__39944_40395.cljs$core$IIndexed$_nth$arity$2(null,i__39946_40397);
var map__39953_40399__$1 = cljs.core.__destructure_map(map__39953_40398);
var w_40400 = map__39953_40399__$1;
var msg_40401__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40399__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40399__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40399__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39953_40399__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40404)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40402),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40403),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40401__$1)].join(''));


var G__40405 = seq__39943_40394;
var G__40406 = chunk__39944_40395;
var G__40407 = count__39945_40396;
var G__40408 = (i__39946_40397 + (1));
seq__39943_40394 = G__40405;
chunk__39944_40395 = G__40406;
count__39945_40396 = G__40407;
i__39946_40397 = G__40408;
continue;
} else {
var temp__5720__auto___40409 = cljs.core.seq(seq__39943_40394);
if(temp__5720__auto___40409){
var seq__39943_40410__$1 = temp__5720__auto___40409;
if(cljs.core.chunked_seq_QMARK_(seq__39943_40410__$1)){
var c__5568__auto___40411 = cljs.core.chunk_first(seq__39943_40410__$1);
var G__40412 = cljs.core.chunk_rest(seq__39943_40410__$1);
var G__40413 = c__5568__auto___40411;
var G__40414 = cljs.core.count(c__5568__auto___40411);
var G__40415 = (0);
seq__39943_40394 = G__40412;
chunk__39944_40395 = G__40413;
count__39945_40396 = G__40414;
i__39946_40397 = G__40415;
continue;
} else {
var map__39955_40416 = cljs.core.first(seq__39943_40410__$1);
var map__39955_40417__$1 = cljs.core.__destructure_map(map__39955_40416);
var w_40418 = map__39955_40417__$1;
var msg_40419__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955_40417__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955_40417__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955_40417__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39955_40417__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40422)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40420),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40421),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40419__$1)].join(''));


var G__40423 = cljs.core.next(seq__39943_40410__$1);
var G__40424 = null;
var G__40425 = (0);
var G__40426 = (0);
seq__39943_40394 = G__40423;
chunk__39944_40395 = G__40424;
count__39945_40396 = G__40425;
i__39946_40397 = G__40426;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39924_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39924_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39958){
var map__39959 = p__39958;
var map__39959__$1 = cljs.core.__destructure_map(map__39959);
var msg = map__39959__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39959__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39959__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__39960 = cljs.core.seq(updates);
var chunk__39962 = null;
var count__39963 = (0);
var i__39964 = (0);
while(true){
if((i__39964 < count__39963)){
var path = chunk__39962.cljs$core$IIndexed$_nth$arity$2(null,i__39964);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40180_40427 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40184_40428 = null;
var count__40185_40429 = (0);
var i__40186_40430 = (0);
while(true){
if((i__40186_40430 < count__40185_40429)){
var node_40431 = chunk__40184_40428.cljs$core$IIndexed$_nth$arity$2(null,i__40186_40430);
if(cljs.core.not(node_40431.shadow$old)){
var path_match_40432 = shadow.cljs.devtools.client.browser.match_paths(node_40431.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40432)){
var new_link_40433 = (function (){var G__40219 = node_40431.cloneNode(true);
G__40219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40432),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40219;
})();
(node_40431.shadow$old = true);

(new_link_40433.onload = ((function (seq__40180_40427,chunk__40184_40428,count__40185_40429,i__40186_40430,seq__39960,chunk__39962,count__39963,i__39964,new_link_40433,path_match_40432,node_40431,path,map__39959,map__39959__$1,msg,updates,reload_info){
return (function (e){
var seq__40220_40434 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40222_40435 = null;
var count__40223_40436 = (0);
var i__40224_40437 = (0);
while(true){
if((i__40224_40437 < count__40223_40436)){
var map__40231_40438 = chunk__40222_40435.cljs$core$IIndexed$_nth$arity$2(null,i__40224_40437);
var map__40231_40439__$1 = cljs.core.__destructure_map(map__40231_40438);
var task_40440 = map__40231_40439__$1;
var fn_str_40441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40231_40439__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40231_40439__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40447 = goog.getObjectByName(fn_str_40441,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40442)].join(''));

(fn_obj_40447.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40447.cljs$core$IFn$_invoke$arity$2(path,new_link_40433) : fn_obj_40447.call(null,path,new_link_40433));


var G__40448 = seq__40220_40434;
var G__40449 = chunk__40222_40435;
var G__40450 = count__40223_40436;
var G__40451 = (i__40224_40437 + (1));
seq__40220_40434 = G__40448;
chunk__40222_40435 = G__40449;
count__40223_40436 = G__40450;
i__40224_40437 = G__40451;
continue;
} else {
var temp__5720__auto___40452 = cljs.core.seq(seq__40220_40434);
if(temp__5720__auto___40452){
var seq__40220_40453__$1 = temp__5720__auto___40452;
if(cljs.core.chunked_seq_QMARK_(seq__40220_40453__$1)){
var c__5568__auto___40455 = cljs.core.chunk_first(seq__40220_40453__$1);
var G__40456 = cljs.core.chunk_rest(seq__40220_40453__$1);
var G__40457 = c__5568__auto___40455;
var G__40458 = cljs.core.count(c__5568__auto___40455);
var G__40459 = (0);
seq__40220_40434 = G__40456;
chunk__40222_40435 = G__40457;
count__40223_40436 = G__40458;
i__40224_40437 = G__40459;
continue;
} else {
var map__40232_40461 = cljs.core.first(seq__40220_40453__$1);
var map__40232_40462__$1 = cljs.core.__destructure_map(map__40232_40461);
var task_40463 = map__40232_40462__$1;
var fn_str_40464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40232_40462__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40232_40462__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40468 = goog.getObjectByName(fn_str_40464,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40465)].join(''));

(fn_obj_40468.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40468.cljs$core$IFn$_invoke$arity$2(path,new_link_40433) : fn_obj_40468.call(null,path,new_link_40433));


var G__40469 = cljs.core.next(seq__40220_40453__$1);
var G__40470 = null;
var G__40471 = (0);
var G__40472 = (0);
seq__40220_40434 = G__40469;
chunk__40222_40435 = G__40470;
count__40223_40436 = G__40471;
i__40224_40437 = G__40472;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40431);
});})(seq__40180_40427,chunk__40184_40428,count__40185_40429,i__40186_40430,seq__39960,chunk__39962,count__39963,i__39964,new_link_40433,path_match_40432,node_40431,path,map__39959,map__39959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40432], 0));

goog.dom.insertSiblingAfter(new_link_40433,node_40431);


var G__40476 = seq__40180_40427;
var G__40477 = chunk__40184_40428;
var G__40478 = count__40185_40429;
var G__40479 = (i__40186_40430 + (1));
seq__40180_40427 = G__40476;
chunk__40184_40428 = G__40477;
count__40185_40429 = G__40478;
i__40186_40430 = G__40479;
continue;
} else {
var G__40481 = seq__40180_40427;
var G__40482 = chunk__40184_40428;
var G__40483 = count__40185_40429;
var G__40484 = (i__40186_40430 + (1));
seq__40180_40427 = G__40481;
chunk__40184_40428 = G__40482;
count__40185_40429 = G__40483;
i__40186_40430 = G__40484;
continue;
}
} else {
var G__40488 = seq__40180_40427;
var G__40489 = chunk__40184_40428;
var G__40490 = count__40185_40429;
var G__40491 = (i__40186_40430 + (1));
seq__40180_40427 = G__40488;
chunk__40184_40428 = G__40489;
count__40185_40429 = G__40490;
i__40186_40430 = G__40491;
continue;
}
} else {
var temp__5720__auto___40492 = cljs.core.seq(seq__40180_40427);
if(temp__5720__auto___40492){
var seq__40180_40493__$1 = temp__5720__auto___40492;
if(cljs.core.chunked_seq_QMARK_(seq__40180_40493__$1)){
var c__5568__auto___40494 = cljs.core.chunk_first(seq__40180_40493__$1);
var G__40499 = cljs.core.chunk_rest(seq__40180_40493__$1);
var G__40500 = c__5568__auto___40494;
var G__40501 = cljs.core.count(c__5568__auto___40494);
var G__40502 = (0);
seq__40180_40427 = G__40499;
chunk__40184_40428 = G__40500;
count__40185_40429 = G__40501;
i__40186_40430 = G__40502;
continue;
} else {
var node_40503 = cljs.core.first(seq__40180_40493__$1);
if(cljs.core.not(node_40503.shadow$old)){
var path_match_40504 = shadow.cljs.devtools.client.browser.match_paths(node_40503.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40504)){
var new_link_40505 = (function (){var G__40233 = node_40503.cloneNode(true);
G__40233.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40504),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40233;
})();
(node_40503.shadow$old = true);

(new_link_40505.onload = ((function (seq__40180_40427,chunk__40184_40428,count__40185_40429,i__40186_40430,seq__39960,chunk__39962,count__39963,i__39964,new_link_40505,path_match_40504,node_40503,seq__40180_40493__$1,temp__5720__auto___40492,path,map__39959,map__39959__$1,msg,updates,reload_info){
return (function (e){
var seq__40234_40510 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40236_40511 = null;
var count__40237_40512 = (0);
var i__40238_40513 = (0);
while(true){
if((i__40238_40513 < count__40237_40512)){
var map__40242_40514 = chunk__40236_40511.cljs$core$IIndexed$_nth$arity$2(null,i__40238_40513);
var map__40242_40515__$1 = cljs.core.__destructure_map(map__40242_40514);
var task_40516 = map__40242_40515__$1;
var fn_str_40517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40242_40515__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40242_40515__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40520 = goog.getObjectByName(fn_str_40517,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40518)].join(''));

(fn_obj_40520.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40520.cljs$core$IFn$_invoke$arity$2(path,new_link_40505) : fn_obj_40520.call(null,path,new_link_40505));


var G__40523 = seq__40234_40510;
var G__40524 = chunk__40236_40511;
var G__40525 = count__40237_40512;
var G__40526 = (i__40238_40513 + (1));
seq__40234_40510 = G__40523;
chunk__40236_40511 = G__40524;
count__40237_40512 = G__40525;
i__40238_40513 = G__40526;
continue;
} else {
var temp__5720__auto___40530__$1 = cljs.core.seq(seq__40234_40510);
if(temp__5720__auto___40530__$1){
var seq__40234_40531__$1 = temp__5720__auto___40530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40234_40531__$1)){
var c__5568__auto___40533 = cljs.core.chunk_first(seq__40234_40531__$1);
var G__40535 = cljs.core.chunk_rest(seq__40234_40531__$1);
var G__40536 = c__5568__auto___40533;
var G__40537 = cljs.core.count(c__5568__auto___40533);
var G__40538 = (0);
seq__40234_40510 = G__40535;
chunk__40236_40511 = G__40536;
count__40237_40512 = G__40537;
i__40238_40513 = G__40538;
continue;
} else {
var map__40243_40540 = cljs.core.first(seq__40234_40531__$1);
var map__40243_40541__$1 = cljs.core.__destructure_map(map__40243_40540);
var task_40542 = map__40243_40541__$1;
var fn_str_40543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40243_40541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40243_40541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40548 = goog.getObjectByName(fn_str_40543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40544)].join(''));

(fn_obj_40548.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40548.cljs$core$IFn$_invoke$arity$2(path,new_link_40505) : fn_obj_40548.call(null,path,new_link_40505));


var G__40553 = cljs.core.next(seq__40234_40531__$1);
var G__40554 = null;
var G__40555 = (0);
var G__40556 = (0);
seq__40234_40510 = G__40553;
chunk__40236_40511 = G__40554;
count__40237_40512 = G__40555;
i__40238_40513 = G__40556;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40503);
});})(seq__40180_40427,chunk__40184_40428,count__40185_40429,i__40186_40430,seq__39960,chunk__39962,count__39963,i__39964,new_link_40505,path_match_40504,node_40503,seq__40180_40493__$1,temp__5720__auto___40492,path,map__39959,map__39959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40504], 0));

goog.dom.insertSiblingAfter(new_link_40505,node_40503);


var G__40561 = cljs.core.next(seq__40180_40493__$1);
var G__40562 = null;
var G__40563 = (0);
var G__40564 = (0);
seq__40180_40427 = G__40561;
chunk__40184_40428 = G__40562;
count__40185_40429 = G__40563;
i__40186_40430 = G__40564;
continue;
} else {
var G__40565 = cljs.core.next(seq__40180_40493__$1);
var G__40566 = null;
var G__40567 = (0);
var G__40568 = (0);
seq__40180_40427 = G__40565;
chunk__40184_40428 = G__40566;
count__40185_40429 = G__40567;
i__40186_40430 = G__40568;
continue;
}
} else {
var G__40572 = cljs.core.next(seq__40180_40493__$1);
var G__40573 = null;
var G__40574 = (0);
var G__40575 = (0);
seq__40180_40427 = G__40572;
chunk__40184_40428 = G__40573;
count__40185_40429 = G__40574;
i__40186_40430 = G__40575;
continue;
}
}
} else {
}
}
break;
}


var G__40577 = seq__39960;
var G__40578 = chunk__39962;
var G__40579 = count__39963;
var G__40580 = (i__39964 + (1));
seq__39960 = G__40577;
chunk__39962 = G__40578;
count__39963 = G__40579;
i__39964 = G__40580;
continue;
} else {
var G__40583 = seq__39960;
var G__40584 = chunk__39962;
var G__40585 = count__39963;
var G__40586 = (i__39964 + (1));
seq__39960 = G__40583;
chunk__39962 = G__40584;
count__39963 = G__40585;
i__39964 = G__40586;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__39960);
if(temp__5720__auto__){
var seq__39960__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39960__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39960__$1);
var G__40594 = cljs.core.chunk_rest(seq__39960__$1);
var G__40595 = c__5568__auto__;
var G__40596 = cljs.core.count(c__5568__auto__);
var G__40597 = (0);
seq__39960 = G__40594;
chunk__39962 = G__40595;
count__39963 = G__40596;
i__39964 = G__40597;
continue;
} else {
var path = cljs.core.first(seq__39960__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40244_40603 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40248_40604 = null;
var count__40249_40605 = (0);
var i__40250_40606 = (0);
while(true){
if((i__40250_40606 < count__40249_40605)){
var node_40608 = chunk__40248_40604.cljs$core$IIndexed$_nth$arity$2(null,i__40250_40606);
if(cljs.core.not(node_40608.shadow$old)){
var path_match_40610 = shadow.cljs.devtools.client.browser.match_paths(node_40608.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40610)){
var new_link_40613 = (function (){var G__40277 = node_40608.cloneNode(true);
G__40277.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40610),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40277;
})();
(node_40608.shadow$old = true);

(new_link_40613.onload = ((function (seq__40244_40603,chunk__40248_40604,count__40249_40605,i__40250_40606,seq__39960,chunk__39962,count__39963,i__39964,new_link_40613,path_match_40610,node_40608,path,seq__39960__$1,temp__5720__auto__,map__39959,map__39959__$1,msg,updates,reload_info){
return (function (e){
var seq__40278_40617 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40280_40618 = null;
var count__40281_40619 = (0);
var i__40282_40620 = (0);
while(true){
if((i__40282_40620 < count__40281_40619)){
var map__40286_40621 = chunk__40280_40618.cljs$core$IIndexed$_nth$arity$2(null,i__40282_40620);
var map__40286_40622__$1 = cljs.core.__destructure_map(map__40286_40621);
var task_40624 = map__40286_40622__$1;
var fn_str_40625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286_40622__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286_40622__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40629 = goog.getObjectByName(fn_str_40625,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40626)].join(''));

(fn_obj_40629.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40629.cljs$core$IFn$_invoke$arity$2(path,new_link_40613) : fn_obj_40629.call(null,path,new_link_40613));


var G__40630 = seq__40278_40617;
var G__40631 = chunk__40280_40618;
var G__40632 = count__40281_40619;
var G__40633 = (i__40282_40620 + (1));
seq__40278_40617 = G__40630;
chunk__40280_40618 = G__40631;
count__40281_40619 = G__40632;
i__40282_40620 = G__40633;
continue;
} else {
var temp__5720__auto___40634__$1 = cljs.core.seq(seq__40278_40617);
if(temp__5720__auto___40634__$1){
var seq__40278_40635__$1 = temp__5720__auto___40634__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40278_40635__$1)){
var c__5568__auto___40636 = cljs.core.chunk_first(seq__40278_40635__$1);
var G__40637 = cljs.core.chunk_rest(seq__40278_40635__$1);
var G__40638 = c__5568__auto___40636;
var G__40639 = cljs.core.count(c__5568__auto___40636);
var G__40640 = (0);
seq__40278_40617 = G__40637;
chunk__40280_40618 = G__40638;
count__40281_40619 = G__40639;
i__40282_40620 = G__40640;
continue;
} else {
var map__40287_40641 = cljs.core.first(seq__40278_40635__$1);
var map__40287_40642__$1 = cljs.core.__destructure_map(map__40287_40641);
var task_40643 = map__40287_40642__$1;
var fn_str_40644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40287_40642__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40287_40642__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40646 = goog.getObjectByName(fn_str_40644,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40645)].join(''));

(fn_obj_40646.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40646.cljs$core$IFn$_invoke$arity$2(path,new_link_40613) : fn_obj_40646.call(null,path,new_link_40613));


var G__40649 = cljs.core.next(seq__40278_40635__$1);
var G__40651 = null;
var G__40652 = (0);
var G__40653 = (0);
seq__40278_40617 = G__40649;
chunk__40280_40618 = G__40651;
count__40281_40619 = G__40652;
i__40282_40620 = G__40653;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40608);
});})(seq__40244_40603,chunk__40248_40604,count__40249_40605,i__40250_40606,seq__39960,chunk__39962,count__39963,i__39964,new_link_40613,path_match_40610,node_40608,path,seq__39960__$1,temp__5720__auto__,map__39959,map__39959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40610], 0));

goog.dom.insertSiblingAfter(new_link_40613,node_40608);


var G__40655 = seq__40244_40603;
var G__40656 = chunk__40248_40604;
var G__40657 = count__40249_40605;
var G__40658 = (i__40250_40606 + (1));
seq__40244_40603 = G__40655;
chunk__40248_40604 = G__40656;
count__40249_40605 = G__40657;
i__40250_40606 = G__40658;
continue;
} else {
var G__40659 = seq__40244_40603;
var G__40660 = chunk__40248_40604;
var G__40661 = count__40249_40605;
var G__40662 = (i__40250_40606 + (1));
seq__40244_40603 = G__40659;
chunk__40248_40604 = G__40660;
count__40249_40605 = G__40661;
i__40250_40606 = G__40662;
continue;
}
} else {
var G__40664 = seq__40244_40603;
var G__40665 = chunk__40248_40604;
var G__40666 = count__40249_40605;
var G__40667 = (i__40250_40606 + (1));
seq__40244_40603 = G__40664;
chunk__40248_40604 = G__40665;
count__40249_40605 = G__40666;
i__40250_40606 = G__40667;
continue;
}
} else {
var temp__5720__auto___40668__$1 = cljs.core.seq(seq__40244_40603);
if(temp__5720__auto___40668__$1){
var seq__40244_40670__$1 = temp__5720__auto___40668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40244_40670__$1)){
var c__5568__auto___40672 = cljs.core.chunk_first(seq__40244_40670__$1);
var G__40673 = cljs.core.chunk_rest(seq__40244_40670__$1);
var G__40674 = c__5568__auto___40672;
var G__40675 = cljs.core.count(c__5568__auto___40672);
var G__40676 = (0);
seq__40244_40603 = G__40673;
chunk__40248_40604 = G__40674;
count__40249_40605 = G__40675;
i__40250_40606 = G__40676;
continue;
} else {
var node_40677 = cljs.core.first(seq__40244_40670__$1);
if(cljs.core.not(node_40677.shadow$old)){
var path_match_40679 = shadow.cljs.devtools.client.browser.match_paths(node_40677.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40679)){
var new_link_40681 = (function (){var G__40288 = node_40677.cloneNode(true);
G__40288.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40679),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40288;
})();
(node_40677.shadow$old = true);

(new_link_40681.onload = ((function (seq__40244_40603,chunk__40248_40604,count__40249_40605,i__40250_40606,seq__39960,chunk__39962,count__39963,i__39964,new_link_40681,path_match_40679,node_40677,seq__40244_40670__$1,temp__5720__auto___40668__$1,path,seq__39960__$1,temp__5720__auto__,map__39959,map__39959__$1,msg,updates,reload_info){
return (function (e){
var seq__40289_40685 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40291_40686 = null;
var count__40292_40687 = (0);
var i__40293_40688 = (0);
while(true){
if((i__40293_40688 < count__40292_40687)){
var map__40297_40690 = chunk__40291_40686.cljs$core$IIndexed$_nth$arity$2(null,i__40293_40688);
var map__40297_40691__$1 = cljs.core.__destructure_map(map__40297_40690);
var task_40692 = map__40297_40691__$1;
var fn_str_40693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297_40691__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297_40691__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40695 = goog.getObjectByName(fn_str_40693,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40694)].join(''));

(fn_obj_40695.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40695.cljs$core$IFn$_invoke$arity$2(path,new_link_40681) : fn_obj_40695.call(null,path,new_link_40681));


var G__40696 = seq__40289_40685;
var G__40697 = chunk__40291_40686;
var G__40698 = count__40292_40687;
var G__40699 = (i__40293_40688 + (1));
seq__40289_40685 = G__40696;
chunk__40291_40686 = G__40697;
count__40292_40687 = G__40698;
i__40293_40688 = G__40699;
continue;
} else {
var temp__5720__auto___40704__$2 = cljs.core.seq(seq__40289_40685);
if(temp__5720__auto___40704__$2){
var seq__40289_40705__$1 = temp__5720__auto___40704__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40289_40705__$1)){
var c__5568__auto___40706 = cljs.core.chunk_first(seq__40289_40705__$1);
var G__40707 = cljs.core.chunk_rest(seq__40289_40705__$1);
var G__40708 = c__5568__auto___40706;
var G__40709 = cljs.core.count(c__5568__auto___40706);
var G__40710 = (0);
seq__40289_40685 = G__40707;
chunk__40291_40686 = G__40708;
count__40292_40687 = G__40709;
i__40293_40688 = G__40710;
continue;
} else {
var map__40300_40713 = cljs.core.first(seq__40289_40705__$1);
var map__40300_40714__$1 = cljs.core.__destructure_map(map__40300_40713);
var task_40715 = map__40300_40714__$1;
var fn_str_40716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40300_40714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40300_40714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40722 = goog.getObjectByName(fn_str_40716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40717)].join(''));

(fn_obj_40722.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40722.cljs$core$IFn$_invoke$arity$2(path,new_link_40681) : fn_obj_40722.call(null,path,new_link_40681));


var G__40723 = cljs.core.next(seq__40289_40705__$1);
var G__40724 = null;
var G__40725 = (0);
var G__40726 = (0);
seq__40289_40685 = G__40723;
chunk__40291_40686 = G__40724;
count__40292_40687 = G__40725;
i__40293_40688 = G__40726;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40677);
});})(seq__40244_40603,chunk__40248_40604,count__40249_40605,i__40250_40606,seq__39960,chunk__39962,count__39963,i__39964,new_link_40681,path_match_40679,node_40677,seq__40244_40670__$1,temp__5720__auto___40668__$1,path,seq__39960__$1,temp__5720__auto__,map__39959,map__39959__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40679], 0));

goog.dom.insertSiblingAfter(new_link_40681,node_40677);


var G__40727 = cljs.core.next(seq__40244_40670__$1);
var G__40728 = null;
var G__40729 = (0);
var G__40730 = (0);
seq__40244_40603 = G__40727;
chunk__40248_40604 = G__40728;
count__40249_40605 = G__40729;
i__40250_40606 = G__40730;
continue;
} else {
var G__40731 = cljs.core.next(seq__40244_40670__$1);
var G__40732 = null;
var G__40733 = (0);
var G__40734 = (0);
seq__40244_40603 = G__40731;
chunk__40248_40604 = G__40732;
count__40249_40605 = G__40733;
i__40250_40606 = G__40734;
continue;
}
} else {
var G__40735 = cljs.core.next(seq__40244_40670__$1);
var G__40736 = null;
var G__40737 = (0);
var G__40738 = (0);
seq__40244_40603 = G__40735;
chunk__40248_40604 = G__40736;
count__40249_40605 = G__40737;
i__40250_40606 = G__40738;
continue;
}
}
} else {
}
}
break;
}


var G__40739 = cljs.core.next(seq__39960__$1);
var G__40740 = null;
var G__40741 = (0);
var G__40742 = (0);
seq__39960 = G__40739;
chunk__39962 = G__40740;
count__39963 = G__40741;
i__39964 = G__40742;
continue;
} else {
var G__40745 = cljs.core.next(seq__39960__$1);
var G__40746 = null;
var G__40747 = (0);
var G__40748 = (0);
seq__39960 = G__40745;
chunk__39962 = G__40746;
count__39963 = G__40747;
i__39964 = G__40748;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__40330){
var map__40331 = p__40330;
var map__40331__$1 = cljs.core.__destructure_map(map__40331);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40331__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40332,done,error){
var map__40333 = p__40332;
var map__40333__$1 = cljs.core.__destructure_map(map__40333);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40333__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40334,done,error){
var map__40335 = p__40334;
var map__40335__$1 = cljs.core.__destructure_map(map__40335);
var msg = map__40335__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40335__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40335__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40335__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40336){
var map__40337 = p__40336;
var map__40337__$1 = cljs.core.__destructure_map(map__40337);
var src = map__40337__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40337__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40338 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40338) : done.call(null,G__40338));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40339){
var map__40340 = p__40339;
var map__40340__$1 = cljs.core.__destructure_map(map__40340);
var msg__$1 = map__40340__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40340__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40341){var ex = e40341;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40342){
var map__40343 = p__40342;
var map__40343__$1 = cljs.core.__destructure_map(map__40343);
var env = map__40343__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40343__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40346){
var map__40347 = p__40346;
var map__40347__$1 = cljs.core.__destructure_map(map__40347);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40347__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40347__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40348){
var map__40349 = p__40348;
var map__40349__$1 = cljs.core.__destructure_map(map__40349);
var svc = map__40349__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40349__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
