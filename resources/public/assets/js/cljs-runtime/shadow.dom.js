goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37963 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37963(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37964 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37964(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36889 = coll;
var G__36890 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36889,G__36890) : shadow.dom.lazy_native_coll_seq.call(null,G__36889,G__36890));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36919 = arguments.length;
switch (G__36919) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36921 = arguments.length;
switch (G__36921) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36924 = arguments.length;
switch (G__36924) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36926 = arguments.length;
switch (G__36926) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36928 = arguments.length;
switch (G__36928) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36948 = arguments.length;
switch (G__36948) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37031){if((e37031 instanceof Object)){
var e = e37031;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37031;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37040 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37041 = null;
var count__37042 = (0);
var i__37043 = (0);
while(true){
if((i__37043 < count__37042)){
var el = chunk__37041.cljs$core$IIndexed$_nth$arity$2(null,i__37043);
var handler_37971__$1 = ((function (seq__37040,chunk__37041,count__37042,i__37043,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37040,chunk__37041,count__37042,i__37043,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37971__$1);


var G__37972 = seq__37040;
var G__37973 = chunk__37041;
var G__37974 = count__37042;
var G__37975 = (i__37043 + (1));
seq__37040 = G__37972;
chunk__37041 = G__37973;
count__37042 = G__37974;
i__37043 = G__37975;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37040);
if(temp__5720__auto__){
var seq__37040__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37040__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37040__$1);
var G__37976 = cljs.core.chunk_rest(seq__37040__$1);
var G__37977 = c__5568__auto__;
var G__37978 = cljs.core.count(c__5568__auto__);
var G__37979 = (0);
seq__37040 = G__37976;
chunk__37041 = G__37977;
count__37042 = G__37978;
i__37043 = G__37979;
continue;
} else {
var el = cljs.core.first(seq__37040__$1);
var handler_37980__$1 = ((function (seq__37040,chunk__37041,count__37042,i__37043,el,seq__37040__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37040,chunk__37041,count__37042,i__37043,el,seq__37040__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37980__$1);


var G__37981 = cljs.core.next(seq__37040__$1);
var G__37982 = null;
var G__37983 = (0);
var G__37984 = (0);
seq__37040 = G__37981;
chunk__37041 = G__37982;
count__37042 = G__37983;
i__37043 = G__37984;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37052 = arguments.length;
switch (G__37052) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37062 = cljs.core.seq(events);
var chunk__37063 = null;
var count__37064 = (0);
var i__37065 = (0);
while(true){
if((i__37065 < count__37064)){
var vec__37076 = chunk__37063.cljs$core$IIndexed$_nth$arity$2(null,i__37065);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37076,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37987 = seq__37062;
var G__37988 = chunk__37063;
var G__37989 = count__37064;
var G__37990 = (i__37065 + (1));
seq__37062 = G__37987;
chunk__37063 = G__37988;
count__37064 = G__37989;
i__37065 = G__37990;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37062);
if(temp__5720__auto__){
var seq__37062__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37062__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37062__$1);
var G__37991 = cljs.core.chunk_rest(seq__37062__$1);
var G__37992 = c__5568__auto__;
var G__37993 = cljs.core.count(c__5568__auto__);
var G__37994 = (0);
seq__37062 = G__37991;
chunk__37063 = G__37992;
count__37064 = G__37993;
i__37065 = G__37994;
continue;
} else {
var vec__37083 = cljs.core.first(seq__37062__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37083,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37996 = cljs.core.next(seq__37062__$1);
var G__37997 = null;
var G__37998 = (0);
var G__37999 = (0);
seq__37062 = G__37996;
chunk__37063 = G__37997;
count__37064 = G__37998;
i__37065 = G__37999;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37088 = cljs.core.seq(styles);
var chunk__37089 = null;
var count__37090 = (0);
var i__37091 = (0);
while(true){
if((i__37091 < count__37090)){
var vec__37151 = chunk__37089.cljs$core$IIndexed$_nth$arity$2(null,i__37091);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37151,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38002 = seq__37088;
var G__38003 = chunk__37089;
var G__38004 = count__37090;
var G__38005 = (i__37091 + (1));
seq__37088 = G__38002;
chunk__37089 = G__38003;
count__37090 = G__38004;
i__37091 = G__38005;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37088);
if(temp__5720__auto__){
var seq__37088__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37088__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37088__$1);
var G__38006 = cljs.core.chunk_rest(seq__37088__$1);
var G__38007 = c__5568__auto__;
var G__38008 = cljs.core.count(c__5568__auto__);
var G__38009 = (0);
seq__37088 = G__38006;
chunk__37089 = G__38007;
count__37090 = G__38008;
i__37091 = G__38009;
continue;
} else {
var vec__37170 = cljs.core.first(seq__37088__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37170,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38010 = cljs.core.next(seq__37088__$1);
var G__38011 = null;
var G__38012 = (0);
var G__38013 = (0);
seq__37088 = G__38010;
chunk__37089 = G__38011;
count__37090 = G__38012;
i__37091 = G__38013;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37174_38014 = key;
var G__37174_38015__$1 = (((G__37174_38014 instanceof cljs.core.Keyword))?G__37174_38014.fqn:null);
switch (G__37174_38015__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38017 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38017,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38017,"aria-");
}
})())){
el.setAttribute(ks_38017,value);
} else {
(el[ks_38017] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37191){
var map__37192 = p__37191;
var map__37192__$1 = cljs.core.__destructure_map(map__37192);
var props = map__37192__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37195 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37195,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37195,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37195,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37198 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37198,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37198;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37201 = arguments.length;
switch (G__37201) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37207){
var vec__37208 = p__37207;
var seq__37209 = cljs.core.seq(vec__37208);
var first__37210 = cljs.core.first(seq__37209);
var seq__37209__$1 = cljs.core.next(seq__37209);
var nn = first__37210;
var first__37210__$1 = cljs.core.first(seq__37209__$1);
var seq__37209__$2 = cljs.core.next(seq__37209__$1);
var np = first__37210__$1;
var nc = seq__37209__$2;
var node = vec__37208;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37216 = nn;
var G__37217 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37216,G__37217) : create_fn.call(null,G__37216,G__37217));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37219 = nn;
var G__37220 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37219,G__37220) : create_fn.call(null,G__37219,G__37220));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37224 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37224,(1),null);
var seq__37227_38025 = cljs.core.seq(node_children);
var chunk__37228_38026 = null;
var count__37229_38027 = (0);
var i__37230_38028 = (0);
while(true){
if((i__37230_38028 < count__37229_38027)){
var child_struct_38029 = chunk__37228_38026.cljs$core$IIndexed$_nth$arity$2(null,i__37230_38028);
var children_38030 = shadow.dom.dom_node(child_struct_38029);
if(cljs.core.seq_QMARK_(children_38030)){
var seq__37296_38031 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38030));
var chunk__37298_38032 = null;
var count__37299_38033 = (0);
var i__37300_38034 = (0);
while(true){
if((i__37300_38034 < count__37299_38033)){
var child_38035 = chunk__37298_38032.cljs$core$IIndexed$_nth$arity$2(null,i__37300_38034);
if(cljs.core.truth_(child_38035)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38035);


var G__38036 = seq__37296_38031;
var G__38037 = chunk__37298_38032;
var G__38038 = count__37299_38033;
var G__38039 = (i__37300_38034 + (1));
seq__37296_38031 = G__38036;
chunk__37298_38032 = G__38037;
count__37299_38033 = G__38038;
i__37300_38034 = G__38039;
continue;
} else {
var G__38040 = seq__37296_38031;
var G__38041 = chunk__37298_38032;
var G__38042 = count__37299_38033;
var G__38043 = (i__37300_38034 + (1));
seq__37296_38031 = G__38040;
chunk__37298_38032 = G__38041;
count__37299_38033 = G__38042;
i__37300_38034 = G__38043;
continue;
}
} else {
var temp__5720__auto___38044 = cljs.core.seq(seq__37296_38031);
if(temp__5720__auto___38044){
var seq__37296_38045__$1 = temp__5720__auto___38044;
if(cljs.core.chunked_seq_QMARK_(seq__37296_38045__$1)){
var c__5568__auto___38046 = cljs.core.chunk_first(seq__37296_38045__$1);
var G__38047 = cljs.core.chunk_rest(seq__37296_38045__$1);
var G__38048 = c__5568__auto___38046;
var G__38049 = cljs.core.count(c__5568__auto___38046);
var G__38050 = (0);
seq__37296_38031 = G__38047;
chunk__37298_38032 = G__38048;
count__37299_38033 = G__38049;
i__37300_38034 = G__38050;
continue;
} else {
var child_38051 = cljs.core.first(seq__37296_38045__$1);
if(cljs.core.truth_(child_38051)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38051);


var G__38052 = cljs.core.next(seq__37296_38045__$1);
var G__38053 = null;
var G__38054 = (0);
var G__38055 = (0);
seq__37296_38031 = G__38052;
chunk__37298_38032 = G__38053;
count__37299_38033 = G__38054;
i__37300_38034 = G__38055;
continue;
} else {
var G__38056 = cljs.core.next(seq__37296_38045__$1);
var G__38057 = null;
var G__38058 = (0);
var G__38059 = (0);
seq__37296_38031 = G__38056;
chunk__37298_38032 = G__38057;
count__37299_38033 = G__38058;
i__37300_38034 = G__38059;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38030);
}


var G__38060 = seq__37227_38025;
var G__38061 = chunk__37228_38026;
var G__38062 = count__37229_38027;
var G__38063 = (i__37230_38028 + (1));
seq__37227_38025 = G__38060;
chunk__37228_38026 = G__38061;
count__37229_38027 = G__38062;
i__37230_38028 = G__38063;
continue;
} else {
var temp__5720__auto___38064 = cljs.core.seq(seq__37227_38025);
if(temp__5720__auto___38064){
var seq__37227_38065__$1 = temp__5720__auto___38064;
if(cljs.core.chunked_seq_QMARK_(seq__37227_38065__$1)){
var c__5568__auto___38066 = cljs.core.chunk_first(seq__37227_38065__$1);
var G__38067 = cljs.core.chunk_rest(seq__37227_38065__$1);
var G__38068 = c__5568__auto___38066;
var G__38069 = cljs.core.count(c__5568__auto___38066);
var G__38070 = (0);
seq__37227_38025 = G__38067;
chunk__37228_38026 = G__38068;
count__37229_38027 = G__38069;
i__37230_38028 = G__38070;
continue;
} else {
var child_struct_38071 = cljs.core.first(seq__37227_38065__$1);
var children_38072 = shadow.dom.dom_node(child_struct_38071);
if(cljs.core.seq_QMARK_(children_38072)){
var seq__37318_38073 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38072));
var chunk__37320_38074 = null;
var count__37321_38075 = (0);
var i__37322_38076 = (0);
while(true){
if((i__37322_38076 < count__37321_38075)){
var child_38077 = chunk__37320_38074.cljs$core$IIndexed$_nth$arity$2(null,i__37322_38076);
if(cljs.core.truth_(child_38077)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38077);


var G__38078 = seq__37318_38073;
var G__38079 = chunk__37320_38074;
var G__38080 = count__37321_38075;
var G__38081 = (i__37322_38076 + (1));
seq__37318_38073 = G__38078;
chunk__37320_38074 = G__38079;
count__37321_38075 = G__38080;
i__37322_38076 = G__38081;
continue;
} else {
var G__38082 = seq__37318_38073;
var G__38083 = chunk__37320_38074;
var G__38084 = count__37321_38075;
var G__38085 = (i__37322_38076 + (1));
seq__37318_38073 = G__38082;
chunk__37320_38074 = G__38083;
count__37321_38075 = G__38084;
i__37322_38076 = G__38085;
continue;
}
} else {
var temp__5720__auto___38090__$1 = cljs.core.seq(seq__37318_38073);
if(temp__5720__auto___38090__$1){
var seq__37318_38091__$1 = temp__5720__auto___38090__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37318_38091__$1)){
var c__5568__auto___38092 = cljs.core.chunk_first(seq__37318_38091__$1);
var G__38093 = cljs.core.chunk_rest(seq__37318_38091__$1);
var G__38094 = c__5568__auto___38092;
var G__38095 = cljs.core.count(c__5568__auto___38092);
var G__38096 = (0);
seq__37318_38073 = G__38093;
chunk__37320_38074 = G__38094;
count__37321_38075 = G__38095;
i__37322_38076 = G__38096;
continue;
} else {
var child_38097 = cljs.core.first(seq__37318_38091__$1);
if(cljs.core.truth_(child_38097)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38097);


var G__38102 = cljs.core.next(seq__37318_38091__$1);
var G__38103 = null;
var G__38104 = (0);
var G__38105 = (0);
seq__37318_38073 = G__38102;
chunk__37320_38074 = G__38103;
count__37321_38075 = G__38104;
i__37322_38076 = G__38105;
continue;
} else {
var G__38106 = cljs.core.next(seq__37318_38091__$1);
var G__38107 = null;
var G__38108 = (0);
var G__38109 = (0);
seq__37318_38073 = G__38106;
chunk__37320_38074 = G__38107;
count__37321_38075 = G__38108;
i__37322_38076 = G__38109;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38072);
}


var G__38110 = cljs.core.next(seq__37227_38065__$1);
var G__38111 = null;
var G__38112 = (0);
var G__38113 = (0);
seq__37227_38025 = G__38110;
chunk__37228_38026 = G__38111;
count__37229_38027 = G__38112;
i__37230_38028 = G__38113;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37337 = cljs.core.seq(node);
var chunk__37338 = null;
var count__37339 = (0);
var i__37340 = (0);
while(true){
if((i__37340 < count__37339)){
var n = chunk__37338.cljs$core$IIndexed$_nth$arity$2(null,i__37340);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38118 = seq__37337;
var G__38119 = chunk__37338;
var G__38120 = count__37339;
var G__38121 = (i__37340 + (1));
seq__37337 = G__38118;
chunk__37338 = G__38119;
count__37339 = G__38120;
i__37340 = G__38121;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37337);
if(temp__5720__auto__){
var seq__37337__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37337__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37337__$1);
var G__38126 = cljs.core.chunk_rest(seq__37337__$1);
var G__38127 = c__5568__auto__;
var G__38128 = cljs.core.count(c__5568__auto__);
var G__38129 = (0);
seq__37337 = G__38126;
chunk__37338 = G__38127;
count__37339 = G__38128;
i__37340 = G__38129;
continue;
} else {
var n = cljs.core.first(seq__37337__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38130 = cljs.core.next(seq__37337__$1);
var G__38131 = null;
var G__38132 = (0);
var G__38133 = (0);
seq__37337 = G__38130;
chunk__37338 = G__38131;
count__37339 = G__38132;
i__37340 = G__38133;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37495 = arguments.length;
switch (G__37495) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37501 = arguments.length;
switch (G__37501) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37518 = arguments.length;
switch (G__37518) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38145 = arguments.length;
var i__5770__auto___38146 = (0);
while(true){
if((i__5770__auto___38146 < len__5769__auto___38145)){
args__5775__auto__.push((arguments[i__5770__auto___38146]));

var G__38147 = (i__5770__auto___38146 + (1));
i__5770__auto___38146 = G__38147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37557_38148 = cljs.core.seq(nodes);
var chunk__37558_38149 = null;
var count__37559_38150 = (0);
var i__37560_38151 = (0);
while(true){
if((i__37560_38151 < count__37559_38150)){
var node_38152 = chunk__37558_38149.cljs$core$IIndexed$_nth$arity$2(null,i__37560_38151);
fragment.appendChild(shadow.dom._to_dom(node_38152));


var G__38153 = seq__37557_38148;
var G__38154 = chunk__37558_38149;
var G__38155 = count__37559_38150;
var G__38156 = (i__37560_38151 + (1));
seq__37557_38148 = G__38153;
chunk__37558_38149 = G__38154;
count__37559_38150 = G__38155;
i__37560_38151 = G__38156;
continue;
} else {
var temp__5720__auto___38157 = cljs.core.seq(seq__37557_38148);
if(temp__5720__auto___38157){
var seq__37557_38158__$1 = temp__5720__auto___38157;
if(cljs.core.chunked_seq_QMARK_(seq__37557_38158__$1)){
var c__5568__auto___38159 = cljs.core.chunk_first(seq__37557_38158__$1);
var G__38160 = cljs.core.chunk_rest(seq__37557_38158__$1);
var G__38161 = c__5568__auto___38159;
var G__38162 = cljs.core.count(c__5568__auto___38159);
var G__38163 = (0);
seq__37557_38148 = G__38160;
chunk__37558_38149 = G__38161;
count__37559_38150 = G__38162;
i__37560_38151 = G__38163;
continue;
} else {
var node_38164 = cljs.core.first(seq__37557_38158__$1);
fragment.appendChild(shadow.dom._to_dom(node_38164));


var G__38165 = cljs.core.next(seq__37557_38158__$1);
var G__38166 = null;
var G__38167 = (0);
var G__38168 = (0);
seq__37557_38148 = G__38165;
chunk__37558_38149 = G__38166;
count__37559_38150 = G__38167;
i__37560_38151 = G__38168;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37549){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37549));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37606_38169 = cljs.core.seq(scripts);
var chunk__37617_38170 = null;
var count__37618_38171 = (0);
var i__37619_38172 = (0);
while(true){
if((i__37619_38172 < count__37618_38171)){
var vec__37668_38173 = chunk__37617_38170.cljs$core$IIndexed$_nth$arity$2(null,i__37619_38172);
var script_tag_38174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37668_38173,(0),null);
var script_body_38175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37668_38173,(1),null);
eval(script_body_38175);


var G__38176 = seq__37606_38169;
var G__38177 = chunk__37617_38170;
var G__38178 = count__37618_38171;
var G__38179 = (i__37619_38172 + (1));
seq__37606_38169 = G__38176;
chunk__37617_38170 = G__38177;
count__37618_38171 = G__38178;
i__37619_38172 = G__38179;
continue;
} else {
var temp__5720__auto___38180 = cljs.core.seq(seq__37606_38169);
if(temp__5720__auto___38180){
var seq__37606_38181__$1 = temp__5720__auto___38180;
if(cljs.core.chunked_seq_QMARK_(seq__37606_38181__$1)){
var c__5568__auto___38182 = cljs.core.chunk_first(seq__37606_38181__$1);
var G__38183 = cljs.core.chunk_rest(seq__37606_38181__$1);
var G__38184 = c__5568__auto___38182;
var G__38185 = cljs.core.count(c__5568__auto___38182);
var G__38186 = (0);
seq__37606_38169 = G__38183;
chunk__37617_38170 = G__38184;
count__37618_38171 = G__38185;
i__37619_38172 = G__38186;
continue;
} else {
var vec__37672_38187 = cljs.core.first(seq__37606_38181__$1);
var script_tag_38188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37672_38187,(0),null);
var script_body_38189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37672_38187,(1),null);
eval(script_body_38189);


var G__38190 = cljs.core.next(seq__37606_38181__$1);
var G__38191 = null;
var G__38192 = (0);
var G__38193 = (0);
seq__37606_38169 = G__38190;
chunk__37617_38170 = G__38191;
count__37618_38171 = G__38192;
i__37619_38172 = G__38193;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37676){
var vec__37678 = p__37676;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37678,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37678,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37689 = arguments.length;
switch (G__37689) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37691 = cljs.core.seq(style_keys);
var chunk__37692 = null;
var count__37693 = (0);
var i__37694 = (0);
while(true){
if((i__37694 < count__37693)){
var it = chunk__37692.cljs$core$IIndexed$_nth$arity$2(null,i__37694);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38195 = seq__37691;
var G__38196 = chunk__37692;
var G__38197 = count__37693;
var G__38198 = (i__37694 + (1));
seq__37691 = G__38195;
chunk__37692 = G__38196;
count__37693 = G__38197;
i__37694 = G__38198;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37691);
if(temp__5720__auto__){
var seq__37691__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37691__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37691__$1);
var G__38199 = cljs.core.chunk_rest(seq__37691__$1);
var G__38200 = c__5568__auto__;
var G__38201 = cljs.core.count(c__5568__auto__);
var G__38202 = (0);
seq__37691 = G__38199;
chunk__37692 = G__38200;
count__37693 = G__38201;
i__37694 = G__38202;
continue;
} else {
var it = cljs.core.first(seq__37691__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38203 = cljs.core.next(seq__37691__$1);
var G__38204 = null;
var G__38205 = (0);
var G__38206 = (0);
seq__37691 = G__38203;
chunk__37692 = G__38204;
count__37693 = G__38205;
i__37694 = G__38206;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37696,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37703 = k37696;
var G__37703__$1 = (((G__37703 instanceof cljs.core.Keyword))?G__37703.fqn:null);
switch (G__37703__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37696,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37707){
var vec__37708 = p__37707;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37708,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37708,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37695){
var self__ = this;
var G__37695__$1 = this;
return (new cljs.core.RecordIter((0),G__37695__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37697,other37698){
var self__ = this;
var this37697__$1 = this;
return (((!((other37698 == null)))) && ((((this37697__$1.constructor === other37698.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37697__$1.x,other37698.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37697__$1.y,other37698.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37697__$1.__extmap,other37698.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37696){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37727 = k37696;
var G__37727__$1 = (((G__37727 instanceof cljs.core.Keyword))?G__37727.fqn:null);
switch (G__37727__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37696);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37695){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37728 = cljs.core.keyword_identical_QMARK_;
var expr__37729 = k__5352__auto__;
if(cljs.core.truth_((pred__37728.cljs$core$IFn$_invoke$arity$2 ? pred__37728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37729) : pred__37728.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37729)))){
return (new shadow.dom.Coordinate(G__37695,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37728.cljs$core$IFn$_invoke$arity$2 ? pred__37728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37729) : pred__37728.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37729)))){
return (new shadow.dom.Coordinate(self__.x,G__37695,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37695),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37695){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37695,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37699){
var extmap__5385__auto__ = (function (){var G__37733 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37699,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37699)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37733);
} else {
return G__37733;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37699),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37699),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37738,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37742 = k37738;
var G__37742__$1 = (((G__37742 instanceof cljs.core.Keyword))?G__37742.fqn:null);
switch (G__37742__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37738,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37743){
var vec__37744 = p__37743;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37737){
var self__ = this;
var G__37737__$1 = this;
return (new cljs.core.RecordIter((0),G__37737__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37739,other37740){
var self__ = this;
var this37739__$1 = this;
return (((!((other37740 == null)))) && ((((this37739__$1.constructor === other37740.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37739__$1.w,other37740.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37739__$1.h,other37740.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37739__$1.__extmap,other37740.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37738){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37751 = k37738;
var G__37751__$1 = (((G__37751 instanceof cljs.core.Keyword))?G__37751.fqn:null);
switch (G__37751__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37738);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37737){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37752 = cljs.core.keyword_identical_QMARK_;
var expr__37753 = k__5352__auto__;
if(cljs.core.truth_((pred__37752.cljs$core$IFn$_invoke$arity$2 ? pred__37752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37753) : pred__37752.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37753)))){
return (new shadow.dom.Size(G__37737,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37752.cljs$core$IFn$_invoke$arity$2 ? pred__37752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37753) : pred__37752.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37753)))){
return (new shadow.dom.Size(self__.w,G__37737,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37737),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37737){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37737,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37741){
var extmap__5385__auto__ = (function (){var G__37757 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37741,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37741)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37757);
} else {
return G__37757;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37741),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37741),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38253 = (i + (1));
var G__38254 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38253;
ret = G__38254;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37773){
var vec__37774 = p__37773;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37779 = arguments.length;
switch (G__37779) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38283 = ps;
var G__38284 = (i + (1));
el__$1 = G__38283;
i = G__38284;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37823 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37823,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37823,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37823,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37829_38292 = cljs.core.seq(props);
var chunk__37830_38293 = null;
var count__37831_38294 = (0);
var i__37832_38295 = (0);
while(true){
if((i__37832_38295 < count__37831_38294)){
var vec__37875_38296 = chunk__37830_38293.cljs$core$IIndexed$_nth$arity$2(null,i__37832_38295);
var k_38297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37875_38296,(0),null);
var v_38298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37875_38296,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_38297);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38297),v_38298);


var G__38299 = seq__37829_38292;
var G__38300 = chunk__37830_38293;
var G__38301 = count__37831_38294;
var G__38302 = (i__37832_38295 + (1));
seq__37829_38292 = G__38299;
chunk__37830_38293 = G__38300;
count__37831_38294 = G__38301;
i__37832_38295 = G__38302;
continue;
} else {
var temp__5720__auto___38303 = cljs.core.seq(seq__37829_38292);
if(temp__5720__auto___38303){
var seq__37829_38304__$1 = temp__5720__auto___38303;
if(cljs.core.chunked_seq_QMARK_(seq__37829_38304__$1)){
var c__5568__auto___38305 = cljs.core.chunk_first(seq__37829_38304__$1);
var G__38306 = cljs.core.chunk_rest(seq__37829_38304__$1);
var G__38307 = c__5568__auto___38305;
var G__38308 = cljs.core.count(c__5568__auto___38305);
var G__38309 = (0);
seq__37829_38292 = G__38306;
chunk__37830_38293 = G__38307;
count__37831_38294 = G__38308;
i__37832_38295 = G__38309;
continue;
} else {
var vec__37881_38310 = cljs.core.first(seq__37829_38304__$1);
var k_38311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37881_38310,(0),null);
var v_38312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37881_38310,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_38311);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38311),v_38312);


var G__38313 = cljs.core.next(seq__37829_38304__$1);
var G__38314 = null;
var G__38315 = (0);
var G__38316 = (0);
seq__37829_38292 = G__38313;
chunk__37830_38293 = G__38314;
count__37831_38294 = G__38315;
i__37832_38295 = G__38316;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37894 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37894,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37894,(1),null);
var seq__37897_38327 = cljs.core.seq(node_children);
var chunk__37899_38328 = null;
var count__37900_38329 = (0);
var i__37901_38330 = (0);
while(true){
if((i__37901_38330 < count__37900_38329)){
var child_struct_38337 = chunk__37899_38328.cljs$core$IIndexed$_nth$arity$2(null,i__37901_38330);
if((!((child_struct_38337 == null)))){
if(typeof child_struct_38337 === 'string'){
var text_38343 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38343),child_struct_38337].join(''));
} else {
var children_38345 = shadow.dom.svg_node(child_struct_38337);
if(cljs.core.seq_QMARK_(children_38345)){
var seq__37915_38346 = cljs.core.seq(children_38345);
var chunk__37917_38347 = null;
var count__37918_38348 = (0);
var i__37919_38349 = (0);
while(true){
if((i__37919_38349 < count__37918_38348)){
var child_38352 = chunk__37917_38347.cljs$core$IIndexed$_nth$arity$2(null,i__37919_38349);
if(cljs.core.truth_(child_38352)){
node.appendChild(child_38352);


var G__38407 = seq__37915_38346;
var G__38408 = chunk__37917_38347;
var G__38409 = count__37918_38348;
var G__38410 = (i__37919_38349 + (1));
seq__37915_38346 = G__38407;
chunk__37917_38347 = G__38408;
count__37918_38348 = G__38409;
i__37919_38349 = G__38410;
continue;
} else {
var G__38411 = seq__37915_38346;
var G__38412 = chunk__37917_38347;
var G__38413 = count__37918_38348;
var G__38414 = (i__37919_38349 + (1));
seq__37915_38346 = G__38411;
chunk__37917_38347 = G__38412;
count__37918_38348 = G__38413;
i__37919_38349 = G__38414;
continue;
}
} else {
var temp__5720__auto___38415 = cljs.core.seq(seq__37915_38346);
if(temp__5720__auto___38415){
var seq__37915_38416__$1 = temp__5720__auto___38415;
if(cljs.core.chunked_seq_QMARK_(seq__37915_38416__$1)){
var c__5568__auto___38417 = cljs.core.chunk_first(seq__37915_38416__$1);
var G__38418 = cljs.core.chunk_rest(seq__37915_38416__$1);
var G__38419 = c__5568__auto___38417;
var G__38420 = cljs.core.count(c__5568__auto___38417);
var G__38421 = (0);
seq__37915_38346 = G__38418;
chunk__37917_38347 = G__38419;
count__37918_38348 = G__38420;
i__37919_38349 = G__38421;
continue;
} else {
var child_38423 = cljs.core.first(seq__37915_38416__$1);
if(cljs.core.truth_(child_38423)){
node.appendChild(child_38423);


var G__38427 = cljs.core.next(seq__37915_38416__$1);
var G__38428 = null;
var G__38429 = (0);
var G__38430 = (0);
seq__37915_38346 = G__38427;
chunk__37917_38347 = G__38428;
count__37918_38348 = G__38429;
i__37919_38349 = G__38430;
continue;
} else {
var G__38431 = cljs.core.next(seq__37915_38416__$1);
var G__38432 = null;
var G__38433 = (0);
var G__38434 = (0);
seq__37915_38346 = G__38431;
chunk__37917_38347 = G__38432;
count__37918_38348 = G__38433;
i__37919_38349 = G__38434;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38345);
}
}


var G__38435 = seq__37897_38327;
var G__38436 = chunk__37899_38328;
var G__38437 = count__37900_38329;
var G__38438 = (i__37901_38330 + (1));
seq__37897_38327 = G__38435;
chunk__37899_38328 = G__38436;
count__37900_38329 = G__38437;
i__37901_38330 = G__38438;
continue;
} else {
var G__38439 = seq__37897_38327;
var G__38440 = chunk__37899_38328;
var G__38441 = count__37900_38329;
var G__38442 = (i__37901_38330 + (1));
seq__37897_38327 = G__38439;
chunk__37899_38328 = G__38440;
count__37900_38329 = G__38441;
i__37901_38330 = G__38442;
continue;
}
} else {
var temp__5720__auto___38443 = cljs.core.seq(seq__37897_38327);
if(temp__5720__auto___38443){
var seq__37897_38444__$1 = temp__5720__auto___38443;
if(cljs.core.chunked_seq_QMARK_(seq__37897_38444__$1)){
var c__5568__auto___38445 = cljs.core.chunk_first(seq__37897_38444__$1);
var G__38446 = cljs.core.chunk_rest(seq__37897_38444__$1);
var G__38447 = c__5568__auto___38445;
var G__38448 = cljs.core.count(c__5568__auto___38445);
var G__38449 = (0);
seq__37897_38327 = G__38446;
chunk__37899_38328 = G__38447;
count__37900_38329 = G__38448;
i__37901_38330 = G__38449;
continue;
} else {
var child_struct_38450 = cljs.core.first(seq__37897_38444__$1);
if((!((child_struct_38450 == null)))){
if(typeof child_struct_38450 === 'string'){
var text_38451 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38451),child_struct_38450].join(''));
} else {
var children_38452 = shadow.dom.svg_node(child_struct_38450);
if(cljs.core.seq_QMARK_(children_38452)){
var seq__37921_38454 = cljs.core.seq(children_38452);
var chunk__37923_38455 = null;
var count__37924_38456 = (0);
var i__37925_38457 = (0);
while(true){
if((i__37925_38457 < count__37924_38456)){
var child_38458 = chunk__37923_38455.cljs$core$IIndexed$_nth$arity$2(null,i__37925_38457);
if(cljs.core.truth_(child_38458)){
node.appendChild(child_38458);


var G__38459 = seq__37921_38454;
var G__38460 = chunk__37923_38455;
var G__38461 = count__37924_38456;
var G__38462 = (i__37925_38457 + (1));
seq__37921_38454 = G__38459;
chunk__37923_38455 = G__38460;
count__37924_38456 = G__38461;
i__37925_38457 = G__38462;
continue;
} else {
var G__38463 = seq__37921_38454;
var G__38464 = chunk__37923_38455;
var G__38465 = count__37924_38456;
var G__38466 = (i__37925_38457 + (1));
seq__37921_38454 = G__38463;
chunk__37923_38455 = G__38464;
count__37924_38456 = G__38465;
i__37925_38457 = G__38466;
continue;
}
} else {
var temp__5720__auto___38467__$1 = cljs.core.seq(seq__37921_38454);
if(temp__5720__auto___38467__$1){
var seq__37921_38468__$1 = temp__5720__auto___38467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37921_38468__$1)){
var c__5568__auto___38469 = cljs.core.chunk_first(seq__37921_38468__$1);
var G__38470 = cljs.core.chunk_rest(seq__37921_38468__$1);
var G__38471 = c__5568__auto___38469;
var G__38472 = cljs.core.count(c__5568__auto___38469);
var G__38473 = (0);
seq__37921_38454 = G__38470;
chunk__37923_38455 = G__38471;
count__37924_38456 = G__38472;
i__37925_38457 = G__38473;
continue;
} else {
var child_38474 = cljs.core.first(seq__37921_38468__$1);
if(cljs.core.truth_(child_38474)){
node.appendChild(child_38474);


var G__38475 = cljs.core.next(seq__37921_38468__$1);
var G__38476 = null;
var G__38477 = (0);
var G__38478 = (0);
seq__37921_38454 = G__38475;
chunk__37923_38455 = G__38476;
count__37924_38456 = G__38477;
i__37925_38457 = G__38478;
continue;
} else {
var G__38479 = cljs.core.next(seq__37921_38468__$1);
var G__38480 = null;
var G__38481 = (0);
var G__38482 = (0);
seq__37921_38454 = G__38479;
chunk__37923_38455 = G__38480;
count__37924_38456 = G__38481;
i__37925_38457 = G__38482;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38452);
}
}


var G__38483 = cljs.core.next(seq__37897_38444__$1);
var G__38484 = null;
var G__38485 = (0);
var G__38486 = (0);
seq__37897_38327 = G__38483;
chunk__37899_38328 = G__38484;
count__37900_38329 = G__38485;
i__37901_38330 = G__38486;
continue;
} else {
var G__38487 = cljs.core.next(seq__37897_38444__$1);
var G__38488 = null;
var G__38489 = (0);
var G__38490 = (0);
seq__37897_38327 = G__38487;
chunk__37899_38328 = G__38488;
count__37900_38329 = G__38489;
i__37901_38330 = G__38490;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38492 = arguments.length;
var i__5770__auto___38497 = (0);
while(true){
if((i__5770__auto___38497 < len__5769__auto___38492)){
args__5775__auto__.push((arguments[i__5770__auto___38497]));

var G__38501 = (i__5770__auto___38497 + (1));
i__5770__auto___38497 = G__38501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37936){
var G__37937 = cljs.core.first(seq37936);
var seq37936__$1 = cljs.core.next(seq37936);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37937,seq37936__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37939 = arguments.length;
switch (G__37939) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33563__auto___38503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_37944){
var state_val_37945 = (state_37944[(1)]);
if((state_val_37945 === (1))){
var state_37944__$1 = state_37944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37944__$1,(2),once_or_cleanup);
} else {
if((state_val_37945 === (2))){
var inst_37941 = (state_37944[(2)]);
var inst_37942 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37944__$1 = (function (){var statearr_37949 = state_37944;
(statearr_37949[(7)] = inst_37941);

return statearr_37949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37944__$1,inst_37942);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33080__auto__ = null;
var shadow$dom$state_machine__33080__auto____0 = (function (){
var statearr_37950 = [null,null,null,null,null,null,null,null];
(statearr_37950[(0)] = shadow$dom$state_machine__33080__auto__);

(statearr_37950[(1)] = (1));

return statearr_37950;
});
var shadow$dom$state_machine__33080__auto____1 = (function (state_37944){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_37944);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e37951){var ex__33083__auto__ = e37951;
var statearr_37952_38507 = state_37944;
(statearr_37952_38507[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_37944[(4)]))){
var statearr_37953_38508 = state_37944;
(statearr_37953_38508[(1)] = cljs.core.first((state_37944[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38509 = state_37944;
state_37944 = G__38509;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
shadow$dom$state_machine__33080__auto__ = function(state_37944){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33080__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33080__auto____1.call(this,state_37944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33080__auto____0;
shadow$dom$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33080__auto____1;
return shadow$dom$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_37954 = f__33564__auto__();
(statearr_37954[(6)] = c__33563__auto___38503);

return statearr_37954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
