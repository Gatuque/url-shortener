goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33665 = (function (f,blockable,meta33666){
this.f = f;
this.blockable = blockable;
this.meta33666 = meta33666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33667,meta33666__$1){
var self__ = this;
var _33667__$1 = this;
return (new cljs.core.async.t_cljs$core$async33665(self__.f,self__.blockable,meta33666__$1));
}));

(cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33667){
var self__ = this;
var _33667__$1 = this;
return self__.meta33666;
}));

(cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33666","meta33666",-1122295282,null)], null);
}));

(cljs.core.async.t_cljs$core$async33665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33665");

(cljs.core.async.t_cljs$core$async33665.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33665.
 */
cljs.core.async.__GT_t_cljs$core$async33665 = (function cljs$core$async$__GT_t_cljs$core$async33665(f,blockable,meta33666){
return (new cljs.core.async.t_cljs$core$async33665(f,blockable,meta33666));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33661 = arguments.length;
switch (G__33661) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33665(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33672 = arguments.length;
switch (G__33672) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33687 = arguments.length;
switch (G__33687) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33794 = arguments.length;
switch (G__33794) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36640 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36640) : fn1.call(null,val_36640));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36640) : fn1.call(null,val_36640));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33805 = arguments.length;
switch (G__33805) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36642 = n;
var x_36643 = (0);
while(true){
if((x_36643 < n__5636__auto___36642)){
(a[x_36643] = x_36643);

var G__36644 = (x_36643 + (1));
x_36643 = G__36644;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33838 = (function (flag,meta33839){
this.flag = flag;
this.meta33839 = meta33839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33840,meta33839__$1){
var self__ = this;
var _33840__$1 = this;
return (new cljs.core.async.t_cljs$core$async33838(self__.flag,meta33839__$1));
}));

(cljs.core.async.t_cljs$core$async33838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33840){
var self__ = this;
var _33840__$1 = this;
return self__.meta33839;
}));

(cljs.core.async.t_cljs$core$async33838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33839","meta33839",1828705846,null)], null);
}));

(cljs.core.async.t_cljs$core$async33838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33838");

(cljs.core.async.t_cljs$core$async33838.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33838.
 */
cljs.core.async.__GT_t_cljs$core$async33838 = (function cljs$core$async$__GT_t_cljs$core$async33838(flag,meta33839){
return (new cljs.core.async.t_cljs$core$async33838(flag,meta33839));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33838(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33852 = (function (flag,cb,meta33853){
this.flag = flag;
this.cb = cb;
this.meta33853 = meta33853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33854,meta33853__$1){
var self__ = this;
var _33854__$1 = this;
return (new cljs.core.async.t_cljs$core$async33852(self__.flag,self__.cb,meta33853__$1));
}));

(cljs.core.async.t_cljs$core$async33852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33854){
var self__ = this;
var _33854__$1 = this;
return self__.meta33853;
}));

(cljs.core.async.t_cljs$core$async33852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33853","meta33853",-1303639286,null)], null);
}));

(cljs.core.async.t_cljs$core$async33852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33852");

(cljs.core.async.t_cljs$core$async33852.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33852.
 */
cljs.core.async.__GT_t_cljs$core$async33852 = (function cljs$core$async$__GT_t_cljs$core$async33852(flag,cb,meta33853){
return (new cljs.core.async.t_cljs$core$async33852(flag,cb,meta33853));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33852(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33871_SHARP_){
var G__33915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33871_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33915) : fret.call(null,G__33915));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33872_SHARP_){
var G__33919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33872_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33919) : fret.call(null,G__33919));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36652 = (i + (1));
i = G__36652;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36653 = arguments.length;
var i__5770__auto___36654 = (0);
while(true){
if((i__5770__auto___36654 < len__5769__auto___36653)){
args__5775__auto__.push((arguments[i__5770__auto___36654]));

var G__36655 = (i__5770__auto___36654 + (1));
i__5770__auto___36654 = G__36655;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33942){
var map__33943 = p__33942;
var map__33943__$1 = cljs.core.__destructure_map(map__33943);
var opts = map__33943__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33940){
var G__33941 = cljs.core.first(seq33940);
var seq33940__$1 = cljs.core.next(seq33940);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33941,seq33940__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33945 = arguments.length;
switch (G__33945) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33563__auto___36657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_33991){
var state_val_33992 = (state_33991[(1)]);
if((state_val_33992 === (7))){
var inst_33987 = (state_33991[(2)]);
var state_33991__$1 = state_33991;
var statearr_33993_36658 = state_33991__$1;
(statearr_33993_36658[(2)] = inst_33987);

(statearr_33993_36658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (1))){
var state_33991__$1 = state_33991;
var statearr_33994_36659 = state_33991__$1;
(statearr_33994_36659[(2)] = null);

(statearr_33994_36659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (4))){
var inst_33969 = (state_33991[(7)]);
var inst_33969__$1 = (state_33991[(2)]);
var inst_33971 = (inst_33969__$1 == null);
var state_33991__$1 = (function (){var statearr_33995 = state_33991;
(statearr_33995[(7)] = inst_33969__$1);

return statearr_33995;
})();
if(cljs.core.truth_(inst_33971)){
var statearr_33996_36660 = state_33991__$1;
(statearr_33996_36660[(1)] = (5));

} else {
var statearr_33997_36661 = state_33991__$1;
(statearr_33997_36661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (13))){
var state_33991__$1 = state_33991;
var statearr_33998_36662 = state_33991__$1;
(statearr_33998_36662[(2)] = null);

(statearr_33998_36662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (6))){
var inst_33969 = (state_33991[(7)]);
var state_33991__$1 = state_33991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33991__$1,(11),to,inst_33969);
} else {
if((state_val_33992 === (3))){
var inst_33989 = (state_33991[(2)]);
var state_33991__$1 = state_33991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33991__$1,inst_33989);
} else {
if((state_val_33992 === (12))){
var state_33991__$1 = state_33991;
var statearr_33999_36663 = state_33991__$1;
(statearr_33999_36663[(2)] = null);

(statearr_33999_36663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (2))){
var state_33991__$1 = state_33991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33991__$1,(4),from);
} else {
if((state_val_33992 === (11))){
var inst_33980 = (state_33991[(2)]);
var state_33991__$1 = state_33991;
if(cljs.core.truth_(inst_33980)){
var statearr_34000_36665 = state_33991__$1;
(statearr_34000_36665[(1)] = (12));

} else {
var statearr_34001_36666 = state_33991__$1;
(statearr_34001_36666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (9))){
var state_33991__$1 = state_33991;
var statearr_34002_36667 = state_33991__$1;
(statearr_34002_36667[(2)] = null);

(statearr_34002_36667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (5))){
var state_33991__$1 = state_33991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34003_36668 = state_33991__$1;
(statearr_34003_36668[(1)] = (8));

} else {
var statearr_34004_36669 = state_33991__$1;
(statearr_34004_36669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (14))){
var inst_33985 = (state_33991[(2)]);
var state_33991__$1 = state_33991;
var statearr_34005_36671 = state_33991__$1;
(statearr_34005_36671[(2)] = inst_33985);

(statearr_34005_36671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (10))){
var inst_33977 = (state_33991[(2)]);
var state_33991__$1 = state_33991;
var statearr_34006_36672 = state_33991__$1;
(statearr_34006_36672[(2)] = inst_33977);

(statearr_34006_36672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33992 === (8))){
var inst_33974 = cljs.core.async.close_BANG_(to);
var state_33991__$1 = state_33991;
var statearr_34007_36673 = state_33991__$1;
(statearr_34007_36673[(2)] = inst_33974);

(statearr_34007_36673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_34008 = [null,null,null,null,null,null,null,null];
(statearr_34008[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_34008[(1)] = (1));

return statearr_34008;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_33991){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_33991);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34009){var ex__33083__auto__ = e34009;
var statearr_34010_36675 = state_33991;
(statearr_34010_36675[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_33991[(4)]))){
var statearr_34011_36676 = state_33991;
(statearr_34011_36676[(1)] = cljs.core.first((state_33991[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36677 = state_33991;
state_33991 = G__36677;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_33991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_33991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34012 = f__33564__auto__();
(statearr_34012[(6)] = c__33563__auto___36657);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__34013){
var vec__34014 = p__34013;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34014,(1),null);
var job = vec__34014;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33563__auto___36679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34022){
var state_val_34023 = (state_34022[(1)]);
if((state_val_34023 === (1))){
var state_34022__$1 = state_34022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34022__$1,(2),res,v);
} else {
if((state_val_34023 === (2))){
var inst_34019 = (state_34022[(2)]);
var inst_34020 = cljs.core.async.close_BANG_(res);
var state_34022__$1 = (function (){var statearr_34024 = state_34022;
(statearr_34024[(7)] = inst_34019);

return statearr_34024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34022__$1,inst_34020);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0 = (function (){
var statearr_34025 = [null,null,null,null,null,null,null,null];
(statearr_34025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__);

(statearr_34025[(1)] = (1));

return statearr_34025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1 = (function (state_34022){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34022);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34026){var ex__33083__auto__ = e34026;
var statearr_34027_36680 = state_34022;
(statearr_34027_36680[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34022[(4)]))){
var statearr_34028_36681 = state_34022;
(statearr_34028_36681[(1)] = cljs.core.first((state_34022[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36682 = state_34022;
state_34022 = G__36682;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = function(state_34022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1.call(this,state_34022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34029 = f__33564__auto__();
(statearr_34029[(6)] = c__33563__auto___36679);

return statearr_34029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34030){
var vec__34031 = p__34030;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031,(1),null);
var job = vec__34031;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36683 = n;
var __36684 = (0);
while(true){
if((__36684 < n__5636__auto___36683)){
var G__34035_36685 = type;
var G__34035_36686__$1 = (((G__34035_36685 instanceof cljs.core.Keyword))?G__34035_36685.fqn:null);
switch (G__34035_36686__$1) {
case "compute":
var c__33563__auto___36688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36684,c__33563__auto___36688,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async){
return (function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = ((function (__36684,c__33563__auto___36688,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async){
return (function (state_34048){
var state_val_34049 = (state_34048[(1)]);
if((state_val_34049 === (1))){
var state_34048__$1 = state_34048;
var statearr_34050_36689 = state_34048__$1;
(statearr_34050_36689[(2)] = null);

(statearr_34050_36689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (2))){
var state_34048__$1 = state_34048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34048__$1,(4),jobs);
} else {
if((state_val_34049 === (3))){
var inst_34046 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34048__$1,inst_34046);
} else {
if((state_val_34049 === (4))){
var inst_34038 = (state_34048[(2)]);
var inst_34039 = process__$1(inst_34038);
var state_34048__$1 = state_34048;
if(cljs.core.truth_(inst_34039)){
var statearr_34053_36690 = state_34048__$1;
(statearr_34053_36690[(1)] = (5));

} else {
var statearr_34054_36691 = state_34048__$1;
(statearr_34054_36691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (5))){
var state_34048__$1 = state_34048;
var statearr_34055_36692 = state_34048__$1;
(statearr_34055_36692[(2)] = null);

(statearr_34055_36692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (6))){
var state_34048__$1 = state_34048;
var statearr_34056_36693 = state_34048__$1;
(statearr_34056_36693[(2)] = null);

(statearr_34056_36693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34049 === (7))){
var inst_34044 = (state_34048[(2)]);
var state_34048__$1 = state_34048;
var statearr_34057_36694 = state_34048__$1;
(statearr_34057_36694[(2)] = inst_34044);

(statearr_34057_36694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36684,c__33563__auto___36688,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async))
;
return ((function (__36684,switch__33079__auto__,c__33563__auto___36688,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0 = (function (){
var statearr_34059 = [null,null,null,null,null,null,null];
(statearr_34059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__);

(statearr_34059[(1)] = (1));

return statearr_34059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1 = (function (state_34048){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34048);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34060){var ex__33083__auto__ = e34060;
var statearr_34061_36695 = state_34048;
(statearr_34061_36695[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34048[(4)]))){
var statearr_34062_36697 = state_34048;
(statearr_34062_36697[(1)] = cljs.core.first((state_34048[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36698 = state_34048;
state_34048 = G__36698;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = function(state_34048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1.call(this,state_34048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__;
})()
;})(__36684,switch__33079__auto__,c__33563__auto___36688,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async))
})();
var state__33565__auto__ = (function (){var statearr_34063 = f__33564__auto__();
(statearr_34063[(6)] = c__33563__auto___36688);

return statearr_34063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(__36684,c__33563__auto___36688,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async))
);


break;
case "async":
var c__33563__auto___36699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36684,c__33563__auto___36699,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async){
return (function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = ((function (__36684,c__33563__auto___36699,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async){
return (function (state_34076){
var state_val_34077 = (state_34076[(1)]);
if((state_val_34077 === (1))){
var state_34076__$1 = state_34076;
var statearr_34078_36701 = state_34076__$1;
(statearr_34078_36701[(2)] = null);

(statearr_34078_36701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34077 === (2))){
var state_34076__$1 = state_34076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34076__$1,(4),jobs);
} else {
if((state_val_34077 === (3))){
var inst_34074 = (state_34076[(2)]);
var state_34076__$1 = state_34076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34076__$1,inst_34074);
} else {
if((state_val_34077 === (4))){
var inst_34066 = (state_34076[(2)]);
var inst_34067 = async(inst_34066);
var state_34076__$1 = state_34076;
if(cljs.core.truth_(inst_34067)){
var statearr_34079_36702 = state_34076__$1;
(statearr_34079_36702[(1)] = (5));

} else {
var statearr_34080_36704 = state_34076__$1;
(statearr_34080_36704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34077 === (5))){
var state_34076__$1 = state_34076;
var statearr_34081_36706 = state_34076__$1;
(statearr_34081_36706[(2)] = null);

(statearr_34081_36706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34077 === (6))){
var state_34076__$1 = state_34076;
var statearr_34082_36707 = state_34076__$1;
(statearr_34082_36707[(2)] = null);

(statearr_34082_36707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34077 === (7))){
var inst_34072 = (state_34076[(2)]);
var state_34076__$1 = state_34076;
var statearr_34083_36708 = state_34076__$1;
(statearr_34083_36708[(2)] = inst_34072);

(statearr_34083_36708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36684,c__33563__auto___36699,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async))
;
return ((function (__36684,switch__33079__auto__,c__33563__auto___36699,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0 = (function (){
var statearr_34084 = [null,null,null,null,null,null,null];
(statearr_34084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__);

(statearr_34084[(1)] = (1));

return statearr_34084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1 = (function (state_34076){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34076);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34085){var ex__33083__auto__ = e34085;
var statearr_34086_36712 = state_34076;
(statearr_34086_36712[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34076[(4)]))){
var statearr_34087_36713 = state_34076;
(statearr_34087_36713[(1)] = cljs.core.first((state_34076[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36714 = state_34076;
state_34076 = G__36714;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = function(state_34076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1.call(this,state_34076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__;
})()
;})(__36684,switch__33079__auto__,c__33563__auto___36699,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async))
})();
var state__33565__auto__ = (function (){var statearr_34088 = f__33564__auto__();
(statearr_34088[(6)] = c__33563__auto___36699);

return statearr_34088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
});})(__36684,c__33563__auto___36699,G__34035_36685,G__34035_36686__$1,n__5636__auto___36683,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34035_36686__$1)].join('')));

}

var G__36715 = (__36684 + (1));
__36684 = G__36715;
continue;
} else {
}
break;
}

var c__33563__auto___36716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34110){
var state_val_34111 = (state_34110[(1)]);
if((state_val_34111 === (7))){
var inst_34106 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
var statearr_34112_36717 = state_34110__$1;
(statearr_34112_36717[(2)] = inst_34106);

(statearr_34112_36717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (1))){
var state_34110__$1 = state_34110;
var statearr_34113_36718 = state_34110__$1;
(statearr_34113_36718[(2)] = null);

(statearr_34113_36718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (4))){
var inst_34091 = (state_34110[(7)]);
var inst_34091__$1 = (state_34110[(2)]);
var inst_34092 = (inst_34091__$1 == null);
var state_34110__$1 = (function (){var statearr_34114 = state_34110;
(statearr_34114[(7)] = inst_34091__$1);

return statearr_34114;
})();
if(cljs.core.truth_(inst_34092)){
var statearr_34115_36720 = state_34110__$1;
(statearr_34115_36720[(1)] = (5));

} else {
var statearr_34116_36721 = state_34110__$1;
(statearr_34116_36721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (6))){
var inst_34091 = (state_34110[(7)]);
var inst_34096 = (state_34110[(8)]);
var inst_34096__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34098 = [inst_34091,inst_34096__$1];
var inst_34099 = (new cljs.core.PersistentVector(null,2,(5),inst_34097,inst_34098,null));
var state_34110__$1 = (function (){var statearr_34117 = state_34110;
(statearr_34117[(8)] = inst_34096__$1);

return statearr_34117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34110__$1,(8),jobs,inst_34099);
} else {
if((state_val_34111 === (3))){
var inst_34108 = (state_34110[(2)]);
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34110__$1,inst_34108);
} else {
if((state_val_34111 === (2))){
var state_34110__$1 = state_34110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34110__$1,(4),from);
} else {
if((state_val_34111 === (9))){
var inst_34103 = (state_34110[(2)]);
var state_34110__$1 = (function (){var statearr_34118 = state_34110;
(statearr_34118[(9)] = inst_34103);

return statearr_34118;
})();
var statearr_34119_36726 = state_34110__$1;
(statearr_34119_36726[(2)] = null);

(statearr_34119_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (5))){
var inst_34094 = cljs.core.async.close_BANG_(jobs);
var state_34110__$1 = state_34110;
var statearr_34120_36727 = state_34110__$1;
(statearr_34120_36727[(2)] = inst_34094);

(statearr_34120_36727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34111 === (8))){
var inst_34096 = (state_34110[(8)]);
var inst_34101 = (state_34110[(2)]);
var state_34110__$1 = (function (){var statearr_34121 = state_34110;
(statearr_34121[(10)] = inst_34101);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34110__$1,(9),results,inst_34096);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0 = (function (){
var statearr_34122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__);

(statearr_34122[(1)] = (1));

return statearr_34122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1 = (function (state_34110){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34110);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34123){var ex__33083__auto__ = e34123;
var statearr_34124_36728 = state_34110;
(statearr_34124_36728[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34110[(4)]))){
var statearr_34125_36729 = state_34110;
(statearr_34125_36729[(1)] = cljs.core.first((state_34110[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36730 = state_34110;
state_34110 = G__36730;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = function(state_34110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1.call(this,state_34110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34126 = f__33564__auto__();
(statearr_34126[(6)] = c__33563__auto___36716);

return statearr_34126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34164){
var state_val_34165 = (state_34164[(1)]);
if((state_val_34165 === (7))){
var inst_34160 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34166_36731 = state_34164__$1;
(statearr_34166_36731[(2)] = inst_34160);

(statearr_34166_36731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (20))){
var state_34164__$1 = state_34164;
var statearr_34167_36732 = state_34164__$1;
(statearr_34167_36732[(2)] = null);

(statearr_34167_36732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (1))){
var state_34164__$1 = state_34164;
var statearr_34168_36733 = state_34164__$1;
(statearr_34168_36733[(2)] = null);

(statearr_34168_36733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (4))){
var inst_34129 = (state_34164[(7)]);
var inst_34129__$1 = (state_34164[(2)]);
var inst_34130 = (inst_34129__$1 == null);
var state_34164__$1 = (function (){var statearr_34169 = state_34164;
(statearr_34169[(7)] = inst_34129__$1);

return statearr_34169;
})();
if(cljs.core.truth_(inst_34130)){
var statearr_34170_36734 = state_34164__$1;
(statearr_34170_36734[(1)] = (5));

} else {
var statearr_34171_36735 = state_34164__$1;
(statearr_34171_36735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (15))){
var inst_34142 = (state_34164[(8)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34164__$1,(18),to,inst_34142);
} else {
if((state_val_34165 === (21))){
var inst_34155 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34172_36736 = state_34164__$1;
(statearr_34172_36736[(2)] = inst_34155);

(statearr_34172_36736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (13))){
var inst_34157 = (state_34164[(2)]);
var state_34164__$1 = (function (){var statearr_34173 = state_34164;
(statearr_34173[(9)] = inst_34157);

return statearr_34173;
})();
var statearr_34174_36737 = state_34164__$1;
(statearr_34174_36737[(2)] = null);

(statearr_34174_36737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (6))){
var inst_34129 = (state_34164[(7)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34164__$1,(11),inst_34129);
} else {
if((state_val_34165 === (17))){
var inst_34150 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34150)){
var statearr_34175_36738 = state_34164__$1;
(statearr_34175_36738[(1)] = (19));

} else {
var statearr_34176_36739 = state_34164__$1;
(statearr_34176_36739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (3))){
var inst_34162 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34164__$1,inst_34162);
} else {
if((state_val_34165 === (12))){
var inst_34139 = (state_34164[(10)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34164__$1,(14),inst_34139);
} else {
if((state_val_34165 === (2))){
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34164__$1,(4),results);
} else {
if((state_val_34165 === (19))){
var state_34164__$1 = state_34164;
var statearr_34177_36740 = state_34164__$1;
(statearr_34177_36740[(2)] = null);

(statearr_34177_36740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (11))){
var inst_34139 = (state_34164[(2)]);
var state_34164__$1 = (function (){var statearr_34178 = state_34164;
(statearr_34178[(10)] = inst_34139);

return statearr_34178;
})();
var statearr_34179_36741 = state_34164__$1;
(statearr_34179_36741[(2)] = null);

(statearr_34179_36741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (9))){
var state_34164__$1 = state_34164;
var statearr_34180_36742 = state_34164__$1;
(statearr_34180_36742[(2)] = null);

(statearr_34180_36742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (5))){
var state_34164__$1 = state_34164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34181_36743 = state_34164__$1;
(statearr_34181_36743[(1)] = (8));

} else {
var statearr_34182_36745 = state_34164__$1;
(statearr_34182_36745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (14))){
var inst_34142 = (state_34164[(8)]);
var inst_34144 = (state_34164[(11)]);
var inst_34142__$1 = (state_34164[(2)]);
var inst_34143 = (inst_34142__$1 == null);
var inst_34144__$1 = cljs.core.not(inst_34143);
var state_34164__$1 = (function (){var statearr_34184 = state_34164;
(statearr_34184[(8)] = inst_34142__$1);

(statearr_34184[(11)] = inst_34144__$1);

return statearr_34184;
})();
if(inst_34144__$1){
var statearr_34185_36747 = state_34164__$1;
(statearr_34185_36747[(1)] = (15));

} else {
var statearr_34186_36748 = state_34164__$1;
(statearr_34186_36748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (16))){
var inst_34144 = (state_34164[(11)]);
var state_34164__$1 = state_34164;
var statearr_34190_36749 = state_34164__$1;
(statearr_34190_36749[(2)] = inst_34144);

(statearr_34190_36749[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (10))){
var inst_34136 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34192_36750 = state_34164__$1;
(statearr_34192_36750[(2)] = inst_34136);

(statearr_34192_36750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (18))){
var inst_34147 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34194_36751 = state_34164__$1;
(statearr_34194_36751[(2)] = inst_34147);

(statearr_34194_36751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (8))){
var inst_34133 = cljs.core.async.close_BANG_(to);
var state_34164__$1 = state_34164;
var statearr_34195_36754 = state_34164__$1;
(statearr_34195_36754[(2)] = inst_34133);

(statearr_34195_36754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0 = (function (){
var statearr_34197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__);

(statearr_34197[(1)] = (1));

return statearr_34197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1 = (function (state_34164){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34164);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34198){var ex__33083__auto__ = e34198;
var statearr_34199_36755 = state_34164;
(statearr_34199_36755[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34164[(4)]))){
var statearr_34200_36756 = state_34164;
(statearr_34200_36756[(1)] = cljs.core.first((state_34164[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36757 = state_34164;
state_34164 = G__36757;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34206 = f__33564__auto__();
(statearr_34206[(6)] = c__33563__auto__);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));

return c__33563__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34214 = arguments.length;
switch (G__34214) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34216 = arguments.length;
switch (G__34216) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34218 = arguments.length;
switch (G__34218) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33563__auto___36768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34246){
var state_val_34247 = (state_34246[(1)]);
if((state_val_34247 === (7))){
var inst_34241 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34250_36769 = state_34246__$1;
(statearr_34250_36769[(2)] = inst_34241);

(statearr_34250_36769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (1))){
var state_34246__$1 = state_34246;
var statearr_34252_36770 = state_34246__$1;
(statearr_34252_36770[(2)] = null);

(statearr_34252_36770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (4))){
var inst_34221 = (state_34246[(7)]);
var inst_34221__$1 = (state_34246[(2)]);
var inst_34222 = (inst_34221__$1 == null);
var state_34246__$1 = (function (){var statearr_34254 = state_34246;
(statearr_34254[(7)] = inst_34221__$1);

return statearr_34254;
})();
if(cljs.core.truth_(inst_34222)){
var statearr_34255_36771 = state_34246__$1;
(statearr_34255_36771[(1)] = (5));

} else {
var statearr_34256_36772 = state_34246__$1;
(statearr_34256_36772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (13))){
var state_34246__$1 = state_34246;
var statearr_34257_36773 = state_34246__$1;
(statearr_34257_36773[(2)] = null);

(statearr_34257_36773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (6))){
var inst_34221 = (state_34246[(7)]);
var inst_34227 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34221) : p.call(null,inst_34221));
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34227)){
var statearr_34258_36777 = state_34246__$1;
(statearr_34258_36777[(1)] = (9));

} else {
var statearr_34259_36778 = state_34246__$1;
(statearr_34259_36778[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (3))){
var inst_34243 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34246__$1,inst_34243);
} else {
if((state_val_34247 === (12))){
var state_34246__$1 = state_34246;
var statearr_34263_36781 = state_34246__$1;
(statearr_34263_36781[(2)] = null);

(statearr_34263_36781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (2))){
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34246__$1,(4),ch);
} else {
if((state_val_34247 === (11))){
var inst_34221 = (state_34246[(7)]);
var inst_34231 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34246__$1,(8),inst_34231,inst_34221);
} else {
if((state_val_34247 === (9))){
var state_34246__$1 = state_34246;
var statearr_34269_36785 = state_34246__$1;
(statearr_34269_36785[(2)] = tc);

(statearr_34269_36785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (5))){
var inst_34224 = cljs.core.async.close_BANG_(tc);
var inst_34225 = cljs.core.async.close_BANG_(fc);
var state_34246__$1 = (function (){var statearr_34272 = state_34246;
(statearr_34272[(8)] = inst_34224);

return statearr_34272;
})();
var statearr_34274_36787 = state_34246__$1;
(statearr_34274_36787[(2)] = inst_34225);

(statearr_34274_36787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (14))){
var inst_34238 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
var statearr_34275_36790 = state_34246__$1;
(statearr_34275_36790[(2)] = inst_34238);

(statearr_34275_36790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (10))){
var state_34246__$1 = state_34246;
var statearr_34276_36791 = state_34246__$1;
(statearr_34276_36791[(2)] = fc);

(statearr_34276_36791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34247 === (8))){
var inst_34233 = (state_34246[(2)]);
var state_34246__$1 = state_34246;
if(cljs.core.truth_(inst_34233)){
var statearr_34281_36796 = state_34246__$1;
(statearr_34281_36796[(1)] = (12));

} else {
var statearr_34282_36800 = state_34246__$1;
(statearr_34282_36800[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_34286 = [null,null,null,null,null,null,null,null,null];
(statearr_34286[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_34286[(1)] = (1));

return statearr_34286;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_34246){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34246);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34287){var ex__33083__auto__ = e34287;
var statearr_34288_36806 = state_34246;
(statearr_34288_36806[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34246[(4)]))){
var statearr_34289_36807 = state_34246;
(statearr_34289_36807[(1)] = cljs.core.first((state_34246[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36808 = state_34246;
state_34246 = G__36808;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_34246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_34246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34290 = f__33564__auto__();
(statearr_34290[(6)] = c__33563__auto___36768);

return statearr_34290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34328){
var state_val_34329 = (state_34328[(1)]);
if((state_val_34329 === (7))){
var inst_34312 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34344_36812 = state_34328__$1;
(statearr_34344_36812[(2)] = inst_34312);

(statearr_34344_36812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (1))){
var inst_34292 = init;
var inst_34294 = inst_34292;
var state_34328__$1 = (function (){var statearr_34345 = state_34328;
(statearr_34345[(7)] = inst_34294);

return statearr_34345;
})();
var statearr_34346_36813 = state_34328__$1;
(statearr_34346_36813[(2)] = null);

(statearr_34346_36813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (4))){
var inst_34297 = (state_34328[(8)]);
var inst_34297__$1 = (state_34328[(2)]);
var inst_34298 = (inst_34297__$1 == null);
var state_34328__$1 = (function (){var statearr_34348 = state_34328;
(statearr_34348[(8)] = inst_34297__$1);

return statearr_34348;
})();
if(cljs.core.truth_(inst_34298)){
var statearr_34351_36819 = state_34328__$1;
(statearr_34351_36819[(1)] = (5));

} else {
var statearr_34359_36824 = state_34328__$1;
(statearr_34359_36824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (6))){
var inst_34301 = (state_34328[(9)]);
var inst_34297 = (state_34328[(8)]);
var inst_34294 = (state_34328[(7)]);
var inst_34301__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34294,inst_34297) : f.call(null,inst_34294,inst_34297));
var inst_34302 = cljs.core.reduced_QMARK_(inst_34301__$1);
var state_34328__$1 = (function (){var statearr_34361 = state_34328;
(statearr_34361[(9)] = inst_34301__$1);

return statearr_34361;
})();
if(inst_34302){
var statearr_34362_36830 = state_34328__$1;
(statearr_34362_36830[(1)] = (8));

} else {
var statearr_34363_36831 = state_34328__$1;
(statearr_34363_36831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (3))){
var inst_34314 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34328__$1,inst_34314);
} else {
if((state_val_34329 === (2))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34328__$1,(4),ch);
} else {
if((state_val_34329 === (9))){
var inst_34301 = (state_34328[(9)]);
var inst_34294 = inst_34301;
var state_34328__$1 = (function (){var statearr_34364 = state_34328;
(statearr_34364[(7)] = inst_34294);

return statearr_34364;
})();
var statearr_34365_36832 = state_34328__$1;
(statearr_34365_36832[(2)] = null);

(statearr_34365_36832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (5))){
var inst_34294 = (state_34328[(7)]);
var state_34328__$1 = state_34328;
var statearr_34371_36833 = state_34328__$1;
(statearr_34371_36833[(2)] = inst_34294);

(statearr_34371_36833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (10))){
var inst_34310 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34372_36834 = state_34328__$1;
(statearr_34372_36834[(2)] = inst_34310);

(statearr_34372_36834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (8))){
var inst_34301 = (state_34328[(9)]);
var inst_34304 = cljs.core.deref(inst_34301);
var state_34328__$1 = state_34328;
var statearr_34375_36835 = state_34328__$1;
(statearr_34375_36835[(2)] = inst_34304);

(statearr_34375_36835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33080__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33080__auto____0 = (function (){
var statearr_34378 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34378[(0)] = cljs$core$async$reduce_$_state_machine__33080__auto__);

(statearr_34378[(1)] = (1));

return statearr_34378;
});
var cljs$core$async$reduce_$_state_machine__33080__auto____1 = (function (state_34328){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34328);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34379){var ex__33083__auto__ = e34379;
var statearr_34380_36836 = state_34328;
(statearr_34380_36836[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34328[(4)]))){
var statearr_34381_36840 = state_34328;
(statearr_34381_36840[(1)] = cljs.core.first((state_34328[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36841 = state_34328;
state_34328 = G__36841;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33080__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33080__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33080__auto____0;
cljs$core$async$reduce_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33080__auto____1;
return cljs$core$async$reduce_$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34382 = f__33564__auto__();
(statearr_34382[(6)] = c__33563__auto__);

return statearr_34382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));

return c__33563__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (1))){
var inst_34390 = cljs.core.async.reduce(f__$1,init,ch);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34395__$1,(2),inst_34390);
} else {
if((state_val_34396 === (2))){
var inst_34392 = (state_34395[(2)]);
var inst_34393 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34392) : f__$1.call(null,inst_34392));
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34395__$1,inst_34393);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33080__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33080__auto____0 = (function (){
var statearr_34399 = [null,null,null,null,null,null,null];
(statearr_34399[(0)] = cljs$core$async$transduce_$_state_machine__33080__auto__);

(statearr_34399[(1)] = (1));

return statearr_34399;
});
var cljs$core$async$transduce_$_state_machine__33080__auto____1 = (function (state_34395){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34395);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34401){var ex__33083__auto__ = e34401;
var statearr_34402_36842 = state_34395;
(statearr_34402_36842[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34395[(4)]))){
var statearr_34403_36843 = state_34395;
(statearr_34403_36843[(1)] = cljs.core.first((state_34395[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36844 = state_34395;
state_34395 = G__36844;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33080__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33080__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33080__auto____0;
cljs$core$async$transduce_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33080__auto____1;
return cljs$core$async$transduce_$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34417 = f__33564__auto__();
(statearr_34417[(6)] = c__33563__auto__);

return statearr_34417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));

return c__33563__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34427 = arguments.length;
switch (G__34427) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34456){
var state_val_34458 = (state_34456[(1)]);
if((state_val_34458 === (7))){
var inst_34437 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34460_36850 = state_34456__$1;
(statearr_34460_36850[(2)] = inst_34437);

(statearr_34460_36850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (1))){
var inst_34431 = cljs.core.seq(coll);
var inst_34432 = inst_34431;
var state_34456__$1 = (function (){var statearr_34461 = state_34456;
(statearr_34461[(7)] = inst_34432);

return statearr_34461;
})();
var statearr_34462_36851 = state_34456__$1;
(statearr_34462_36851[(2)] = null);

(statearr_34462_36851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (4))){
var inst_34432 = (state_34456[(7)]);
var inst_34435 = cljs.core.first(inst_34432);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(7),ch,inst_34435);
} else {
if((state_val_34458 === (13))){
var inst_34450 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34466_36853 = state_34456__$1;
(statearr_34466_36853[(2)] = inst_34450);

(statearr_34466_36853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (6))){
var inst_34440 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34440)){
var statearr_34467_36854 = state_34456__$1;
(statearr_34467_36854[(1)] = (8));

} else {
var statearr_34468_36855 = state_34456__$1;
(statearr_34468_36855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (3))){
var inst_34454 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34456__$1,inst_34454);
} else {
if((state_val_34458 === (12))){
var state_34456__$1 = state_34456;
var statearr_34469_36856 = state_34456__$1;
(statearr_34469_36856[(2)] = null);

(statearr_34469_36856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (2))){
var inst_34432 = (state_34456[(7)]);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34432)){
var statearr_34474_36871 = state_34456__$1;
(statearr_34474_36871[(1)] = (4));

} else {
var statearr_34475_36878 = state_34456__$1;
(statearr_34475_36878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (11))){
var inst_34447 = cljs.core.async.close_BANG_(ch);
var state_34456__$1 = state_34456;
var statearr_34476_36880 = state_34456__$1;
(statearr_34476_36880[(2)] = inst_34447);

(statearr_34476_36880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (9))){
var state_34456__$1 = state_34456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34478_36906 = state_34456__$1;
(statearr_34478_36906[(1)] = (11));

} else {
var statearr_34479_36909 = state_34456__$1;
(statearr_34479_36909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (5))){
var inst_34432 = (state_34456[(7)]);
var state_34456__$1 = state_34456;
var statearr_34484_36910 = state_34456__$1;
(statearr_34484_36910[(2)] = inst_34432);

(statearr_34484_36910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (10))){
var inst_34452 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34489_36912 = state_34456__$1;
(statearr_34489_36912[(2)] = inst_34452);

(statearr_34489_36912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34458 === (8))){
var inst_34432 = (state_34456[(7)]);
var inst_34443 = cljs.core.next(inst_34432);
var inst_34432__$1 = inst_34443;
var state_34456__$1 = (function (){var statearr_34494 = state_34456;
(statearr_34494[(7)] = inst_34432__$1);

return statearr_34494;
})();
var statearr_34495_36943 = state_34456__$1;
(statearr_34495_36943[(2)] = null);

(statearr_34495_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_34496 = [null,null,null,null,null,null,null,null];
(statearr_34496[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_34496[(1)] = (1));

return statearr_34496;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_34456){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34456);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34499){var ex__33083__auto__ = e34499;
var statearr_34500_37021 = state_34456;
(statearr_34500_37021[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34456[(4)]))){
var statearr_34501_37025 = state_34456;
(statearr_34501_37025[(1)] = cljs.core.first((state_34456[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37030 = state_34456;
state_34456 = G__37030;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_34456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_34456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34502 = f__33564__auto__();
(statearr_34502[(6)] = c__33563__auto__);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));

return c__33563__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34506 = arguments.length;
switch (G__34506) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37035 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37035(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37039 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37039(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37044 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37044(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37045 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37045(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34555 = (function (ch,cs,meta34556){
this.ch = ch;
this.cs = cs;
this.meta34556 = meta34556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34557,meta34556__$1){
var self__ = this;
var _34557__$1 = this;
return (new cljs.core.async.t_cljs$core$async34555(self__.ch,self__.cs,meta34556__$1));
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34557){
var self__ = this;
var _34557__$1 = this;
return self__.meta34556;
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34555.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34556","meta34556",1151891271,null)], null);
}));

(cljs.core.async.t_cljs$core$async34555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34555");

(cljs.core.async.t_cljs$core$async34555.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34555.
 */
cljs.core.async.__GT_t_cljs$core$async34555 = (function cljs$core$async$__GT_t_cljs$core$async34555(ch,cs,meta34556){
return (new cljs.core.async.t_cljs$core$async34555(ch,cs,meta34556));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34555(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33563__auto___37049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_34721){
var state_val_34722 = (state_34721[(1)]);
if((state_val_34722 === (7))){
var inst_34711 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34729_37050 = state_34721__$1;
(statearr_34729_37050[(2)] = inst_34711);

(statearr_34729_37050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (20))){
var inst_34605 = (state_34721[(7)]);
var inst_34617 = cljs.core.first(inst_34605);
var inst_34618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34617,(0),null);
var inst_34619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34617,(1),null);
var state_34721__$1 = (function (){var statearr_34735 = state_34721;
(statearr_34735[(8)] = inst_34618);

return statearr_34735;
})();
if(cljs.core.truth_(inst_34619)){
var statearr_34736_37053 = state_34721__$1;
(statearr_34736_37053[(1)] = (22));

} else {
var statearr_34737_37054 = state_34721__$1;
(statearr_34737_37054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (27))){
var inst_34660 = (state_34721[(9)]);
var inst_34650 = (state_34721[(10)]);
var inst_34652 = (state_34721[(11)]);
var inst_34568 = (state_34721[(12)]);
var inst_34660__$1 = cljs.core._nth(inst_34650,inst_34652);
var inst_34661 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34660__$1,inst_34568,done);
var state_34721__$1 = (function (){var statearr_34745 = state_34721;
(statearr_34745[(9)] = inst_34660__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34661)){
var statearr_34746_37055 = state_34721__$1;
(statearr_34746_37055[(1)] = (30));

} else {
var statearr_34747_37056 = state_34721__$1;
(statearr_34747_37056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (1))){
var state_34721__$1 = state_34721;
var statearr_34748_37057 = state_34721__$1;
(statearr_34748_37057[(2)] = null);

(statearr_34748_37057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (24))){
var inst_34605 = (state_34721[(7)]);
var inst_34624 = (state_34721[(2)]);
var inst_34625 = cljs.core.next(inst_34605);
var inst_34577 = inst_34625;
var inst_34578 = null;
var inst_34579 = (0);
var inst_34580 = (0);
var state_34721__$1 = (function (){var statearr_34755 = state_34721;
(statearr_34755[(13)] = inst_34624);

(statearr_34755[(14)] = inst_34579);

(statearr_34755[(15)] = inst_34577);

(statearr_34755[(16)] = inst_34578);

(statearr_34755[(17)] = inst_34580);

return statearr_34755;
})();
var statearr_34757_37058 = state_34721__$1;
(statearr_34757_37058[(2)] = null);

(statearr_34757_37058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (39))){
var state_34721__$1 = state_34721;
var statearr_34765_37059 = state_34721__$1;
(statearr_34765_37059[(2)] = null);

(statearr_34765_37059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (4))){
var inst_34568 = (state_34721[(12)]);
var inst_34568__$1 = (state_34721[(2)]);
var inst_34569 = (inst_34568__$1 == null);
var state_34721__$1 = (function (){var statearr_34769 = state_34721;
(statearr_34769[(12)] = inst_34568__$1);

return statearr_34769;
})();
if(cljs.core.truth_(inst_34569)){
var statearr_34773_37060 = state_34721__$1;
(statearr_34773_37060[(1)] = (5));

} else {
var statearr_34774_37061 = state_34721__$1;
(statearr_34774_37061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (15))){
var inst_34579 = (state_34721[(14)]);
var inst_34577 = (state_34721[(15)]);
var inst_34578 = (state_34721[(16)]);
var inst_34580 = (state_34721[(17)]);
var inst_34598 = (state_34721[(2)]);
var inst_34599 = (inst_34580 + (1));
var tmp34762 = inst_34579;
var tmp34763 = inst_34577;
var tmp34764 = inst_34578;
var inst_34577__$1 = tmp34763;
var inst_34578__$1 = tmp34764;
var inst_34579__$1 = tmp34762;
var inst_34580__$1 = inst_34599;
var state_34721__$1 = (function (){var statearr_34775 = state_34721;
(statearr_34775[(14)] = inst_34579__$1);

(statearr_34775[(18)] = inst_34598);

(statearr_34775[(15)] = inst_34577__$1);

(statearr_34775[(16)] = inst_34578__$1);

(statearr_34775[(17)] = inst_34580__$1);

return statearr_34775;
})();
var statearr_34776_37066 = state_34721__$1;
(statearr_34776_37066[(2)] = null);

(statearr_34776_37066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (21))){
var inst_34628 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34780_37070 = state_34721__$1;
(statearr_34780_37070[(2)] = inst_34628);

(statearr_34780_37070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (31))){
var inst_34660 = (state_34721[(9)]);
var inst_34664 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34660);
var state_34721__$1 = state_34721;
var statearr_34782_37071 = state_34721__$1;
(statearr_34782_37071[(2)] = inst_34664);

(statearr_34782_37071[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (32))){
var inst_34651 = (state_34721[(19)]);
var inst_34650 = (state_34721[(10)]);
var inst_34652 = (state_34721[(11)]);
var inst_34649 = (state_34721[(20)]);
var inst_34666 = (state_34721[(2)]);
var inst_34667 = (inst_34652 + (1));
var tmp34777 = inst_34651;
var tmp34778 = inst_34650;
var tmp34779 = inst_34649;
var inst_34649__$1 = tmp34779;
var inst_34650__$1 = tmp34778;
var inst_34651__$1 = tmp34777;
var inst_34652__$1 = inst_34667;
var state_34721__$1 = (function (){var statearr_34783 = state_34721;
(statearr_34783[(21)] = inst_34666);

(statearr_34783[(19)] = inst_34651__$1);

(statearr_34783[(10)] = inst_34650__$1);

(statearr_34783[(11)] = inst_34652__$1);

(statearr_34783[(20)] = inst_34649__$1);

return statearr_34783;
})();
var statearr_34784_37075 = state_34721__$1;
(statearr_34784_37075[(2)] = null);

(statearr_34784_37075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (40))){
var inst_34684 = (state_34721[(22)]);
var inst_34688 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34684);
var state_34721__$1 = state_34721;
var statearr_34786_37079 = state_34721__$1;
(statearr_34786_37079[(2)] = inst_34688);

(statearr_34786_37079[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (33))){
var inst_34670 = (state_34721[(23)]);
var inst_34672 = cljs.core.chunked_seq_QMARK_(inst_34670);
var state_34721__$1 = state_34721;
if(inst_34672){
var statearr_34788_37080 = state_34721__$1;
(statearr_34788_37080[(1)] = (36));

} else {
var statearr_34790_37081 = state_34721__$1;
(statearr_34790_37081[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (13))){
var inst_34592 = (state_34721[(24)]);
var inst_34595 = cljs.core.async.close_BANG_(inst_34592);
var state_34721__$1 = state_34721;
var statearr_34792_37082 = state_34721__$1;
(statearr_34792_37082[(2)] = inst_34595);

(statearr_34792_37082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (22))){
var inst_34618 = (state_34721[(8)]);
var inst_34621 = cljs.core.async.close_BANG_(inst_34618);
var state_34721__$1 = state_34721;
var statearr_34793_37086 = state_34721__$1;
(statearr_34793_37086[(2)] = inst_34621);

(statearr_34793_37086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (36))){
var inst_34670 = (state_34721[(23)]);
var inst_34674 = cljs.core.chunk_first(inst_34670);
var inst_34676 = cljs.core.chunk_rest(inst_34670);
var inst_34677 = cljs.core.count(inst_34674);
var inst_34649 = inst_34676;
var inst_34650 = inst_34674;
var inst_34651 = inst_34677;
var inst_34652 = (0);
var state_34721__$1 = (function (){var statearr_34794 = state_34721;
(statearr_34794[(19)] = inst_34651);

(statearr_34794[(10)] = inst_34650);

(statearr_34794[(11)] = inst_34652);

(statearr_34794[(20)] = inst_34649);

return statearr_34794;
})();
var statearr_34795_37087 = state_34721__$1;
(statearr_34795_37087[(2)] = null);

(statearr_34795_37087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (41))){
var inst_34670 = (state_34721[(23)]);
var inst_34690 = (state_34721[(2)]);
var inst_34691 = cljs.core.next(inst_34670);
var inst_34649 = inst_34691;
var inst_34650 = null;
var inst_34651 = (0);
var inst_34652 = (0);
var state_34721__$1 = (function (){var statearr_34796 = state_34721;
(statearr_34796[(25)] = inst_34690);

(statearr_34796[(19)] = inst_34651);

(statearr_34796[(10)] = inst_34650);

(statearr_34796[(11)] = inst_34652);

(statearr_34796[(20)] = inst_34649);

return statearr_34796;
})();
var statearr_34797_37095 = state_34721__$1;
(statearr_34797_37095[(2)] = null);

(statearr_34797_37095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (43))){
var state_34721__$1 = state_34721;
var statearr_34798_37096 = state_34721__$1;
(statearr_34798_37096[(2)] = null);

(statearr_34798_37096[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (29))){
var inst_34699 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34799_37097 = state_34721__$1;
(statearr_34799_37097[(2)] = inst_34699);

(statearr_34799_37097[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (44))){
var inst_34708 = (state_34721[(2)]);
var state_34721__$1 = (function (){var statearr_34823 = state_34721;
(statearr_34823[(26)] = inst_34708);

return statearr_34823;
})();
var statearr_34825_37098 = state_34721__$1;
(statearr_34825_37098[(2)] = null);

(statearr_34825_37098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (6))){
var inst_34641 = (state_34721[(27)]);
var inst_34640 = cljs.core.deref(cs);
var inst_34641__$1 = cljs.core.keys(inst_34640);
var inst_34642 = cljs.core.count(inst_34641__$1);
var inst_34643 = cljs.core.reset_BANG_(dctr,inst_34642);
var inst_34648 = cljs.core.seq(inst_34641__$1);
var inst_34649 = inst_34648;
var inst_34650 = null;
var inst_34651 = (0);
var inst_34652 = (0);
var state_34721__$1 = (function (){var statearr_34873 = state_34721;
(statearr_34873[(28)] = inst_34643);

(statearr_34873[(19)] = inst_34651);

(statearr_34873[(10)] = inst_34650);

(statearr_34873[(27)] = inst_34641__$1);

(statearr_34873[(11)] = inst_34652);

(statearr_34873[(20)] = inst_34649);

return statearr_34873;
})();
var statearr_34877_37099 = state_34721__$1;
(statearr_34877_37099[(2)] = null);

(statearr_34877_37099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (28))){
var inst_34670 = (state_34721[(23)]);
var inst_34649 = (state_34721[(20)]);
var inst_34670__$1 = cljs.core.seq(inst_34649);
var state_34721__$1 = (function (){var statearr_34883 = state_34721;
(statearr_34883[(23)] = inst_34670__$1);

return statearr_34883;
})();
if(inst_34670__$1){
var statearr_34888_37100 = state_34721__$1;
(statearr_34888_37100[(1)] = (33));

} else {
var statearr_34889_37101 = state_34721__$1;
(statearr_34889_37101[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (25))){
var inst_34651 = (state_34721[(19)]);
var inst_34652 = (state_34721[(11)]);
var inst_34654 = (inst_34652 < inst_34651);
var inst_34655 = inst_34654;
var state_34721__$1 = state_34721;
if(cljs.core.truth_(inst_34655)){
var statearr_34892_37102 = state_34721__$1;
(statearr_34892_37102[(1)] = (27));

} else {
var statearr_34893_37103 = state_34721__$1;
(statearr_34893_37103[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (34))){
var state_34721__$1 = state_34721;
var statearr_34898_37104 = state_34721__$1;
(statearr_34898_37104[(2)] = null);

(statearr_34898_37104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (17))){
var state_34721__$1 = state_34721;
var statearr_34903_37105 = state_34721__$1;
(statearr_34903_37105[(2)] = null);

(statearr_34903_37105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (3))){
var inst_34713 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34721__$1,inst_34713);
} else {
if((state_val_34722 === (12))){
var inst_34633 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34922_37106 = state_34721__$1;
(statearr_34922_37106[(2)] = inst_34633);

(statearr_34922_37106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (2))){
var state_34721__$1 = state_34721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34721__$1,(4),ch);
} else {
if((state_val_34722 === (23))){
var state_34721__$1 = state_34721;
var statearr_34929_37107 = state_34721__$1;
(statearr_34929_37107[(2)] = null);

(statearr_34929_37107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (35))){
var inst_34697 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34936_37108 = state_34721__$1;
(statearr_34936_37108[(2)] = inst_34697);

(statearr_34936_37108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (19))){
var inst_34605 = (state_34721[(7)]);
var inst_34609 = cljs.core.chunk_first(inst_34605);
var inst_34610 = cljs.core.chunk_rest(inst_34605);
var inst_34611 = cljs.core.count(inst_34609);
var inst_34577 = inst_34610;
var inst_34578 = inst_34609;
var inst_34579 = inst_34611;
var inst_34580 = (0);
var state_34721__$1 = (function (){var statearr_34942 = state_34721;
(statearr_34942[(14)] = inst_34579);

(statearr_34942[(15)] = inst_34577);

(statearr_34942[(16)] = inst_34578);

(statearr_34942[(17)] = inst_34580);

return statearr_34942;
})();
var statearr_34946_37109 = state_34721__$1;
(statearr_34946_37109[(2)] = null);

(statearr_34946_37109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (11))){
var inst_34605 = (state_34721[(7)]);
var inst_34577 = (state_34721[(15)]);
var inst_34605__$1 = cljs.core.seq(inst_34577);
var state_34721__$1 = (function (){var statearr_34947 = state_34721;
(statearr_34947[(7)] = inst_34605__$1);

return statearr_34947;
})();
if(inst_34605__$1){
var statearr_34948_37110 = state_34721__$1;
(statearr_34948_37110[(1)] = (16));

} else {
var statearr_34949_37111 = state_34721__$1;
(statearr_34949_37111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (9))){
var inst_34635 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34950_37112 = state_34721__$1;
(statearr_34950_37112[(2)] = inst_34635);

(statearr_34950_37112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (5))){
var inst_34575 = cljs.core.deref(cs);
var inst_34576 = cljs.core.seq(inst_34575);
var inst_34577 = inst_34576;
var inst_34578 = null;
var inst_34579 = (0);
var inst_34580 = (0);
var state_34721__$1 = (function (){var statearr_34952 = state_34721;
(statearr_34952[(14)] = inst_34579);

(statearr_34952[(15)] = inst_34577);

(statearr_34952[(16)] = inst_34578);

(statearr_34952[(17)] = inst_34580);

return statearr_34952;
})();
var statearr_34957_37113 = state_34721__$1;
(statearr_34957_37113[(2)] = null);

(statearr_34957_37113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (14))){
var state_34721__$1 = state_34721;
var statearr_34962_37114 = state_34721__$1;
(statearr_34962_37114[(2)] = null);

(statearr_34962_37114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (45))){
var inst_34705 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34967_37115 = state_34721__$1;
(statearr_34967_37115[(2)] = inst_34705);

(statearr_34967_37115[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (26))){
var inst_34641 = (state_34721[(27)]);
var inst_34701 = (state_34721[(2)]);
var inst_34702 = cljs.core.seq(inst_34641);
var state_34721__$1 = (function (){var statearr_34968 = state_34721;
(statearr_34968[(29)] = inst_34701);

return statearr_34968;
})();
if(inst_34702){
var statearr_34969_37116 = state_34721__$1;
(statearr_34969_37116[(1)] = (42));

} else {
var statearr_34970_37117 = state_34721__$1;
(statearr_34970_37117[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (16))){
var inst_34605 = (state_34721[(7)]);
var inst_34607 = cljs.core.chunked_seq_QMARK_(inst_34605);
var state_34721__$1 = state_34721;
if(inst_34607){
var statearr_34972_37118 = state_34721__$1;
(statearr_34972_37118[(1)] = (19));

} else {
var statearr_34973_37119 = state_34721__$1;
(statearr_34973_37119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (38))){
var inst_34694 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34974_37120 = state_34721__$1;
(statearr_34974_37120[(2)] = inst_34694);

(statearr_34974_37120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (30))){
var state_34721__$1 = state_34721;
var statearr_34975_37121 = state_34721__$1;
(statearr_34975_37121[(2)] = null);

(statearr_34975_37121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (10))){
var inst_34578 = (state_34721[(16)]);
var inst_34580 = (state_34721[(17)]);
var inst_34588 = cljs.core._nth(inst_34578,inst_34580);
var inst_34592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34588,(0),null);
var inst_34593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34588,(1),null);
var state_34721__$1 = (function (){var statearr_34976 = state_34721;
(statearr_34976[(24)] = inst_34592);

return statearr_34976;
})();
if(cljs.core.truth_(inst_34593)){
var statearr_34977_37122 = state_34721__$1;
(statearr_34977_37122[(1)] = (13));

} else {
var statearr_34978_37123 = state_34721__$1;
(statearr_34978_37123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (18))){
var inst_34631 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34979_37124 = state_34721__$1;
(statearr_34979_37124[(2)] = inst_34631);

(statearr_34979_37124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (42))){
var state_34721__$1 = state_34721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34721__$1,(45),dchan);
} else {
if((state_val_34722 === (37))){
var inst_34684 = (state_34721[(22)]);
var inst_34568 = (state_34721[(12)]);
var inst_34670 = (state_34721[(23)]);
var inst_34684__$1 = cljs.core.first(inst_34670);
var inst_34685 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34684__$1,inst_34568,done);
var state_34721__$1 = (function (){var statearr_34982 = state_34721;
(statearr_34982[(22)] = inst_34684__$1);

return statearr_34982;
})();
if(cljs.core.truth_(inst_34685)){
var statearr_34983_37137 = state_34721__$1;
(statearr_34983_37137[(1)] = (39));

} else {
var statearr_34984_37138 = state_34721__$1;
(statearr_34984_37138[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (8))){
var inst_34579 = (state_34721[(14)]);
var inst_34580 = (state_34721[(17)]);
var inst_34582 = (inst_34580 < inst_34579);
var inst_34583 = inst_34582;
var state_34721__$1 = state_34721;
if(cljs.core.truth_(inst_34583)){
var statearr_34985_37139 = state_34721__$1;
(statearr_34985_37139[(1)] = (10));

} else {
var statearr_34986_37140 = state_34721__$1;
(statearr_34986_37140[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33080__auto__ = null;
var cljs$core$async$mult_$_state_machine__33080__auto____0 = (function (){
var statearr_34987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34987[(0)] = cljs$core$async$mult_$_state_machine__33080__auto__);

(statearr_34987[(1)] = (1));

return statearr_34987;
});
var cljs$core$async$mult_$_state_machine__33080__auto____1 = (function (state_34721){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_34721);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e34991){var ex__33083__auto__ = e34991;
var statearr_34992_37141 = state_34721;
(statearr_34992_37141[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_34721[(4)]))){
var statearr_34993_37142 = state_34721;
(statearr_34993_37142[(1)] = cljs.core.first((state_34721[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37143 = state_34721;
state_34721 = G__37143;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33080__auto__ = function(state_34721){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33080__auto____1.call(this,state_34721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33080__auto____0;
cljs$core$async$mult_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33080__auto____1;
return cljs$core$async$mult_$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_34996 = f__33564__auto__();
(statearr_34996[(6)] = c__33563__auto___37049);

return statearr_34996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35005 = arguments.length;
switch (G__35005) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37148 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37148(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37149 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37149(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37150 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37150(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37173 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37173(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37175 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37175(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37193 = arguments.length;
var i__5770__auto___37194 = (0);
while(true){
if((i__5770__auto___37194 < len__5769__auto___37193)){
args__5775__auto__.push((arguments[i__5770__auto___37194]));

var G__37199 = (i__5770__auto___37194 + (1));
i__5770__auto___37194 = G__37199;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35032){
var map__35033 = p__35032;
var map__35033__$1 = cljs.core.__destructure_map(map__35033);
var opts = map__35033__$1;
var statearr_35034_37202 = state;
(statearr_35034_37202[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35035_37206 = state;
(statearr_35035_37206[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_35036_37211 = state;
(statearr_35036_37211[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35027){
var G__35028 = cljs.core.first(seq35027);
var seq35027__$1 = cljs.core.next(seq35027);
var G__35029 = cljs.core.first(seq35027__$1);
var seq35027__$2 = cljs.core.next(seq35027__$1);
var G__35030 = cljs.core.first(seq35027__$2);
var seq35027__$3 = cljs.core.next(seq35027__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35028,G__35029,G__35030,seq35027__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35047 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35048){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35048 = meta35048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35049,meta35048__$1){
var self__ = this;
var _35049__$1 = this;
return (new cljs.core.async.t_cljs$core$async35047(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35048__$1));
}));

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35049){
var self__ = this;
var _35049__$1 = this;
return self__.meta35048;
}));

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35047.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35048","meta35048",1854337693,null)], null);
}));

(cljs.core.async.t_cljs$core$async35047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35047");

(cljs.core.async.t_cljs$core$async35047.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35047.
 */
cljs.core.async.__GT_t_cljs$core$async35047 = (function cljs$core$async$__GT_t_cljs$core$async35047(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35048){
return (new cljs.core.async.t_cljs$core$async35047(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35048));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async35047(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33563__auto___37268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_35129){
var state_val_35130 = (state_35129[(1)]);
if((state_val_35130 === (7))){
var inst_35088 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35088)){
var statearr_35137_37269 = state_35129__$1;
(statearr_35137_37269[(1)] = (8));

} else {
var statearr_35138_37270 = state_35129__$1;
(statearr_35138_37270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (20))){
var inst_35080 = (state_35129[(7)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35129__$1,(23),out,inst_35080);
} else {
if((state_val_35130 === (1))){
var inst_35063 = calc_state();
var inst_35064 = cljs.core.__destructure_map(inst_35063);
var inst_35065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35064,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35064,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35064,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35068 = inst_35063;
var state_35129__$1 = (function (){var statearr_35140 = state_35129;
(statearr_35140[(8)] = inst_35067);

(statearr_35140[(9)] = inst_35068);

(statearr_35140[(10)] = inst_35065);

(statearr_35140[(11)] = inst_35066);

return statearr_35140;
})();
var statearr_35141_37271 = state_35129__$1;
(statearr_35141_37271[(2)] = null);

(statearr_35141_37271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (24))){
var inst_35071 = (state_35129[(12)]);
var inst_35068 = inst_35071;
var state_35129__$1 = (function (){var statearr_35143 = state_35129;
(statearr_35143[(9)] = inst_35068);

return statearr_35143;
})();
var statearr_35145_37272 = state_35129__$1;
(statearr_35145_37272[(2)] = null);

(statearr_35145_37272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (4))){
var inst_35080 = (state_35129[(7)]);
var inst_35082 = (state_35129[(13)]);
var inst_35079 = (state_35129[(2)]);
var inst_35080__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35079,(0),null);
var inst_35081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35079,(1),null);
var inst_35082__$1 = (inst_35080__$1 == null);
var state_35129__$1 = (function (){var statearr_35148 = state_35129;
(statearr_35148[(7)] = inst_35080__$1);

(statearr_35148[(14)] = inst_35081);

(statearr_35148[(13)] = inst_35082__$1);

return statearr_35148;
})();
if(cljs.core.truth_(inst_35082__$1)){
var statearr_35149_37275 = state_35129__$1;
(statearr_35149_37275[(1)] = (5));

} else {
var statearr_35150_37276 = state_35129__$1;
(statearr_35150_37276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (15))){
var inst_35103 = (state_35129[(15)]);
var inst_35072 = (state_35129[(16)]);
var inst_35103__$1 = cljs.core.empty_QMARK_(inst_35072);
var state_35129__$1 = (function (){var statearr_35151 = state_35129;
(statearr_35151[(15)] = inst_35103__$1);

return statearr_35151;
})();
if(inst_35103__$1){
var statearr_35154_37277 = state_35129__$1;
(statearr_35154_37277[(1)] = (17));

} else {
var statearr_35158_37278 = state_35129__$1;
(statearr_35158_37278[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (21))){
var inst_35071 = (state_35129[(12)]);
var inst_35068 = inst_35071;
var state_35129__$1 = (function (){var statearr_35159 = state_35129;
(statearr_35159[(9)] = inst_35068);

return statearr_35159;
})();
var statearr_35160_37280 = state_35129__$1;
(statearr_35160_37280[(2)] = null);

(statearr_35160_37280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (13))){
var inst_35096 = (state_35129[(2)]);
var inst_35097 = calc_state();
var inst_35068 = inst_35097;
var state_35129__$1 = (function (){var statearr_35161 = state_35129;
(statearr_35161[(9)] = inst_35068);

(statearr_35161[(17)] = inst_35096);

return statearr_35161;
})();
var statearr_35162_37281 = state_35129__$1;
(statearr_35162_37281[(2)] = null);

(statearr_35162_37281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (22))){
var inst_35123 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35163_37282 = state_35129__$1;
(statearr_35163_37282[(2)] = inst_35123);

(statearr_35163_37282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (6))){
var inst_35081 = (state_35129[(14)]);
var inst_35086 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35081,change);
var state_35129__$1 = state_35129;
var statearr_35164_37283 = state_35129__$1;
(statearr_35164_37283[(2)] = inst_35086);

(statearr_35164_37283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (25))){
var state_35129__$1 = state_35129;
var statearr_35167_37284 = state_35129__$1;
(statearr_35167_37284[(2)] = null);

(statearr_35167_37284[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (17))){
var inst_35073 = (state_35129[(18)]);
var inst_35081 = (state_35129[(14)]);
var inst_35105 = (inst_35073.cljs$core$IFn$_invoke$arity$1 ? inst_35073.cljs$core$IFn$_invoke$arity$1(inst_35081) : inst_35073.call(null,inst_35081));
var inst_35106 = cljs.core.not(inst_35105);
var state_35129__$1 = state_35129;
var statearr_35168_37285 = state_35129__$1;
(statearr_35168_37285[(2)] = inst_35106);

(statearr_35168_37285[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (3))){
var inst_35127 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35129__$1,inst_35127);
} else {
if((state_val_35130 === (12))){
var state_35129__$1 = state_35129;
var statearr_35169_37286 = state_35129__$1;
(statearr_35169_37286[(2)] = null);

(statearr_35169_37286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (2))){
var inst_35068 = (state_35129[(9)]);
var inst_35071 = (state_35129[(12)]);
var inst_35071__$1 = cljs.core.__destructure_map(inst_35068);
var inst_35072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35071__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35071__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35071__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35129__$1 = (function (){var statearr_35170 = state_35129;
(statearr_35170[(16)] = inst_35072);

(statearr_35170[(18)] = inst_35073);

(statearr_35170[(12)] = inst_35071__$1);

return statearr_35170;
})();
return cljs.core.async.ioc_alts_BANG_(state_35129__$1,(4),inst_35074);
} else {
if((state_val_35130 === (23))){
var inst_35114 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35114)){
var statearr_35172_37302 = state_35129__$1;
(statearr_35172_37302[(1)] = (24));

} else {
var statearr_35173_37303 = state_35129__$1;
(statearr_35173_37303[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (19))){
var inst_35109 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35174_37304 = state_35129__$1;
(statearr_35174_37304[(2)] = inst_35109);

(statearr_35174_37304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (11))){
var inst_35081 = (state_35129[(14)]);
var inst_35093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35081);
var state_35129__$1 = state_35129;
var statearr_35176_37305 = state_35129__$1;
(statearr_35176_37305[(2)] = inst_35093);

(statearr_35176_37305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (9))){
var inst_35072 = (state_35129[(16)]);
var inst_35081 = (state_35129[(14)]);
var inst_35100 = (state_35129[(19)]);
var inst_35100__$1 = (inst_35072.cljs$core$IFn$_invoke$arity$1 ? inst_35072.cljs$core$IFn$_invoke$arity$1(inst_35081) : inst_35072.call(null,inst_35081));
var state_35129__$1 = (function (){var statearr_35178 = state_35129;
(statearr_35178[(19)] = inst_35100__$1);

return statearr_35178;
})();
if(cljs.core.truth_(inst_35100__$1)){
var statearr_35179_37307 = state_35129__$1;
(statearr_35179_37307[(1)] = (14));

} else {
var statearr_35180_37308 = state_35129__$1;
(statearr_35180_37308[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (5))){
var inst_35082 = (state_35129[(13)]);
var state_35129__$1 = state_35129;
var statearr_35181_37309 = state_35129__$1;
(statearr_35181_37309[(2)] = inst_35082);

(statearr_35181_37309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (14))){
var inst_35100 = (state_35129[(19)]);
var state_35129__$1 = state_35129;
var statearr_35182_37310 = state_35129__$1;
(statearr_35182_37310[(2)] = inst_35100);

(statearr_35182_37310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (26))){
var inst_35119 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35183_37311 = state_35129__$1;
(statearr_35183_37311[(2)] = inst_35119);

(statearr_35183_37311[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (16))){
var inst_35111 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35111)){
var statearr_35184_37312 = state_35129__$1;
(statearr_35184_37312[(1)] = (20));

} else {
var statearr_35185_37313 = state_35129__$1;
(statearr_35185_37313[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (10))){
var inst_35125 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35186_37314 = state_35129__$1;
(statearr_35186_37314[(2)] = inst_35125);

(statearr_35186_37314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (18))){
var inst_35103 = (state_35129[(15)]);
var state_35129__$1 = state_35129;
var statearr_35187_37315 = state_35129__$1;
(statearr_35187_37315[(2)] = inst_35103);

(statearr_35187_37315[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (8))){
var inst_35080 = (state_35129[(7)]);
var inst_35091 = (inst_35080 == null);
var state_35129__$1 = state_35129;
if(cljs.core.truth_(inst_35091)){
var statearr_35188_37316 = state_35129__$1;
(statearr_35188_37316[(1)] = (11));

} else {
var statearr_35190_37317 = state_35129__$1;
(statearr_35190_37317[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33080__auto__ = null;
var cljs$core$async$mix_$_state_machine__33080__auto____0 = (function (){
var statearr_35194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35194[(0)] = cljs$core$async$mix_$_state_machine__33080__auto__);

(statearr_35194[(1)] = (1));

return statearr_35194;
});
var cljs$core$async$mix_$_state_machine__33080__auto____1 = (function (state_35129){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_35129);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e35195){var ex__33083__auto__ = e35195;
var statearr_35196_37324 = state_35129;
(statearr_35196_37324[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_35129[(4)]))){
var statearr_35197_37325 = state_35129;
(statearr_35197_37325[(1)] = cljs.core.first((state_35129[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37326 = state_35129;
state_35129 = G__37326;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33080__auto__ = function(state_35129){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33080__auto____1.call(this,state_35129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33080__auto____0;
cljs$core$async$mix_$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33080__auto____1;
return cljs$core$async$mix_$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_35198 = f__33564__auto__();
(statearr_35198[(6)] = c__33563__auto___37268);

return statearr_35198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37327 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37327(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37330 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37330(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37333 = (function() {
var G__37334 = null;
var G__37334__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37334__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37334 = function(p,v){
switch(arguments.length){
case 1:
return G__37334__1.call(this,p);
case 2:
return G__37334__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37334.cljs$core$IFn$_invoke$arity$1 = G__37334__1;
G__37334.cljs$core$IFn$_invoke$arity$2 = G__37334__2;
return G__37334;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35217 = arguments.length;
switch (G__35217) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37333(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37333(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35282 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35283){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35283 = meta35283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35284,meta35283__$1){
var self__ = this;
var _35284__$1 = this;
return (new cljs.core.async.t_cljs$core$async35282(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35283__$1));
}));

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35284){
var self__ = this;
var _35284__$1 = this;
return self__.meta35283;
}));

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35283","meta35283",-644308723,null)], null);
}));

(cljs.core.async.t_cljs$core$async35282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35282");

(cljs.core.async.t_cljs$core$async35282.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35282.
 */
cljs.core.async.__GT_t_cljs$core$async35282 = (function cljs$core$async$__GT_t_cljs$core$async35282(ch,topic_fn,buf_fn,mults,ensure_mult,meta35283){
return (new cljs.core.async.t_cljs$core$async35282(ch,topic_fn,buf_fn,mults,ensure_mult,meta35283));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35262 = arguments.length;
switch (G__35262) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35256_SHARP_){
if(cljs.core.truth_((p1__35256_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35256_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35256_SHARP_.call(null,topic)))){
return p1__35256_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35256_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35282(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33563__auto___37359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_35421){
var state_val_35422 = (state_35421[(1)]);
if((state_val_35422 === (7))){
var inst_35411 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35433_37360 = state_35421__$1;
(statearr_35433_37360[(2)] = inst_35411);

(statearr_35433_37360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (20))){
var state_35421__$1 = state_35421;
var statearr_35438_37361 = state_35421__$1;
(statearr_35438_37361[(2)] = null);

(statearr_35438_37361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (1))){
var state_35421__$1 = state_35421;
var statearr_35445_37362 = state_35421__$1;
(statearr_35445_37362[(2)] = null);

(statearr_35445_37362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (24))){
var inst_35386 = (state_35421[(7)]);
var inst_35403 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35386);
var state_35421__$1 = state_35421;
var statearr_35453_37367 = state_35421__$1;
(statearr_35453_37367[(2)] = inst_35403);

(statearr_35453_37367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (4))){
var inst_35329 = (state_35421[(8)]);
var inst_35329__$1 = (state_35421[(2)]);
var inst_35333 = (inst_35329__$1 == null);
var state_35421__$1 = (function (){var statearr_35459 = state_35421;
(statearr_35459[(8)] = inst_35329__$1);

return statearr_35459;
})();
if(cljs.core.truth_(inst_35333)){
var statearr_35461_37368 = state_35421__$1;
(statearr_35461_37368[(1)] = (5));

} else {
var statearr_35462_37369 = state_35421__$1;
(statearr_35462_37369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (15))){
var inst_35380 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35467_37377 = state_35421__$1;
(statearr_35467_37377[(2)] = inst_35380);

(statearr_35467_37377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (21))){
var inst_35408 = (state_35421[(2)]);
var state_35421__$1 = (function (){var statearr_35469 = state_35421;
(statearr_35469[(9)] = inst_35408);

return statearr_35469;
})();
var statearr_35470_37378 = state_35421__$1;
(statearr_35470_37378[(2)] = null);

(statearr_35470_37378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (13))){
var inst_35361 = (state_35421[(10)]);
var inst_35363 = cljs.core.chunked_seq_QMARK_(inst_35361);
var state_35421__$1 = state_35421;
if(inst_35363){
var statearr_35471_37379 = state_35421__$1;
(statearr_35471_37379[(1)] = (16));

} else {
var statearr_35472_37381 = state_35421__$1;
(statearr_35472_37381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (22))){
var inst_35399 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
if(cljs.core.truth_(inst_35399)){
var statearr_35474_37382 = state_35421__$1;
(statearr_35474_37382[(1)] = (23));

} else {
var statearr_35475_37383 = state_35421__$1;
(statearr_35475_37383[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (6))){
var inst_35329 = (state_35421[(8)]);
var inst_35388 = (state_35421[(11)]);
var inst_35386 = (state_35421[(7)]);
var inst_35386__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35329) : topic_fn.call(null,inst_35329));
var inst_35387 = cljs.core.deref(mults);
var inst_35388__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35387,inst_35386__$1);
var state_35421__$1 = (function (){var statearr_35478 = state_35421;
(statearr_35478[(11)] = inst_35388__$1);

(statearr_35478[(7)] = inst_35386__$1);

return statearr_35478;
})();
if(cljs.core.truth_(inst_35388__$1)){
var statearr_35481_37384 = state_35421__$1;
(statearr_35481_37384[(1)] = (19));

} else {
var statearr_35482_37385 = state_35421__$1;
(statearr_35482_37385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (25))){
var inst_35405 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35484_37386 = state_35421__$1;
(statearr_35484_37386[(2)] = inst_35405);

(statearr_35484_37386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (17))){
var inst_35361 = (state_35421[(10)]);
var inst_35370 = cljs.core.first(inst_35361);
var inst_35372 = cljs.core.async.muxch_STAR_(inst_35370);
var inst_35373 = cljs.core.async.close_BANG_(inst_35372);
var inst_35374 = cljs.core.next(inst_35361);
var inst_35346 = inst_35374;
var inst_35347 = null;
var inst_35348 = (0);
var inst_35349 = (0);
var state_35421__$1 = (function (){var statearr_35485 = state_35421;
(statearr_35485[(12)] = inst_35346);

(statearr_35485[(13)] = inst_35347);

(statearr_35485[(14)] = inst_35349);

(statearr_35485[(15)] = inst_35348);

(statearr_35485[(16)] = inst_35373);

return statearr_35485;
})();
var statearr_35487_37392 = state_35421__$1;
(statearr_35487_37392[(2)] = null);

(statearr_35487_37392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (3))){
var inst_35413 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35421__$1,inst_35413);
} else {
if((state_val_35422 === (12))){
var inst_35382 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35490_37395 = state_35421__$1;
(statearr_35490_37395[(2)] = inst_35382);

(statearr_35490_37395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (2))){
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35421__$1,(4),ch);
} else {
if((state_val_35422 === (23))){
var state_35421__$1 = state_35421;
var statearr_35494_37396 = state_35421__$1;
(statearr_35494_37396[(2)] = null);

(statearr_35494_37396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (19))){
var inst_35329 = (state_35421[(8)]);
var inst_35388 = (state_35421[(11)]);
var inst_35390 = cljs.core.async.muxch_STAR_(inst_35388);
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35421__$1,(22),inst_35390,inst_35329);
} else {
if((state_val_35422 === (11))){
var inst_35346 = (state_35421[(12)]);
var inst_35361 = (state_35421[(10)]);
var inst_35361__$1 = cljs.core.seq(inst_35346);
var state_35421__$1 = (function (){var statearr_35496 = state_35421;
(statearr_35496[(10)] = inst_35361__$1);

return statearr_35496;
})();
if(inst_35361__$1){
var statearr_35498_37400 = state_35421__$1;
(statearr_35498_37400[(1)] = (13));

} else {
var statearr_35499_37401 = state_35421__$1;
(statearr_35499_37401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (9))){
var inst_35384 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35502_37403 = state_35421__$1;
(statearr_35502_37403[(2)] = inst_35384);

(statearr_35502_37403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (5))){
var inst_35343 = cljs.core.deref(mults);
var inst_35344 = cljs.core.vals(inst_35343);
var inst_35345 = cljs.core.seq(inst_35344);
var inst_35346 = inst_35345;
var inst_35347 = null;
var inst_35348 = (0);
var inst_35349 = (0);
var state_35421__$1 = (function (){var statearr_35506 = state_35421;
(statearr_35506[(12)] = inst_35346);

(statearr_35506[(13)] = inst_35347);

(statearr_35506[(14)] = inst_35349);

(statearr_35506[(15)] = inst_35348);

return statearr_35506;
})();
var statearr_35507_37407 = state_35421__$1;
(statearr_35507_37407[(2)] = null);

(statearr_35507_37407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (14))){
var state_35421__$1 = state_35421;
var statearr_35512_37408 = state_35421__$1;
(statearr_35512_37408[(2)] = null);

(statearr_35512_37408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (16))){
var inst_35361 = (state_35421[(10)]);
var inst_35365 = cljs.core.chunk_first(inst_35361);
var inst_35366 = cljs.core.chunk_rest(inst_35361);
var inst_35367 = cljs.core.count(inst_35365);
var inst_35346 = inst_35366;
var inst_35347 = inst_35365;
var inst_35348 = inst_35367;
var inst_35349 = (0);
var state_35421__$1 = (function (){var statearr_35513 = state_35421;
(statearr_35513[(12)] = inst_35346);

(statearr_35513[(13)] = inst_35347);

(statearr_35513[(14)] = inst_35349);

(statearr_35513[(15)] = inst_35348);

return statearr_35513;
})();
var statearr_35514_37410 = state_35421__$1;
(statearr_35514_37410[(2)] = null);

(statearr_35514_37410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (10))){
var inst_35346 = (state_35421[(12)]);
var inst_35347 = (state_35421[(13)]);
var inst_35349 = (state_35421[(14)]);
var inst_35348 = (state_35421[(15)]);
var inst_35355 = cljs.core._nth(inst_35347,inst_35349);
var inst_35356 = cljs.core.async.muxch_STAR_(inst_35355);
var inst_35357 = cljs.core.async.close_BANG_(inst_35356);
var inst_35358 = (inst_35349 + (1));
var tmp35509 = inst_35346;
var tmp35510 = inst_35347;
var tmp35511 = inst_35348;
var inst_35346__$1 = tmp35509;
var inst_35347__$1 = tmp35510;
var inst_35348__$1 = tmp35511;
var inst_35349__$1 = inst_35358;
var state_35421__$1 = (function (){var statearr_35517 = state_35421;
(statearr_35517[(12)] = inst_35346__$1);

(statearr_35517[(13)] = inst_35347__$1);

(statearr_35517[(14)] = inst_35349__$1);

(statearr_35517[(15)] = inst_35348__$1);

(statearr_35517[(17)] = inst_35357);

return statearr_35517;
})();
var statearr_35518_37411 = state_35421__$1;
(statearr_35518_37411[(2)] = null);

(statearr_35518_37411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (18))){
var inst_35377 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35519_37412 = state_35421__$1;
(statearr_35519_37412[(2)] = inst_35377);

(statearr_35519_37412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (8))){
var inst_35349 = (state_35421[(14)]);
var inst_35348 = (state_35421[(15)]);
var inst_35352 = (inst_35349 < inst_35348);
var inst_35353 = inst_35352;
var state_35421__$1 = state_35421;
if(cljs.core.truth_(inst_35353)){
var statearr_35521_37413 = state_35421__$1;
(statearr_35521_37413[(1)] = (10));

} else {
var statearr_35522_37414 = state_35421__$1;
(statearr_35522_37414[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_35525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35525[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_35525[(1)] = (1));

return statearr_35525;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_35421){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_35421);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e35526){var ex__33083__auto__ = e35526;
var statearr_35530_37416 = state_35421;
(statearr_35530_37416[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_35421[(4)]))){
var statearr_35531_37417 = state_35421;
(statearr_35531_37417[(1)] = cljs.core.first((state_35421[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37419 = state_35421;
state_35421 = G__37419;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_35421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_35421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_35535 = f__33564__auto__();
(statearr_35535[(6)] = c__33563__auto___37359);

return statearr_35535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35541 = arguments.length;
switch (G__35541) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35553 = arguments.length;
switch (G__35553) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35593 = arguments.length;
switch (G__35593) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33563__auto___37432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_35641){
var state_val_35646 = (state_35641[(1)]);
if((state_val_35646 === (7))){
var state_35641__$1 = state_35641;
var statearr_35655_37433 = state_35641__$1;
(statearr_35655_37433[(2)] = null);

(statearr_35655_37433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (1))){
var state_35641__$1 = state_35641;
var statearr_35656_37436 = state_35641__$1;
(statearr_35656_37436[(2)] = null);

(statearr_35656_37436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (4))){
var inst_35598 = (state_35641[(7)]);
var inst_35597 = (state_35641[(8)]);
var inst_35600 = (inst_35598 < inst_35597);
var state_35641__$1 = state_35641;
if(cljs.core.truth_(inst_35600)){
var statearr_35658_37437 = state_35641__$1;
(statearr_35658_37437[(1)] = (6));

} else {
var statearr_35659_37438 = state_35641__$1;
(statearr_35659_37438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (15))){
var inst_35627 = (state_35641[(9)]);
var inst_35632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35627);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35641__$1,(17),out,inst_35632);
} else {
if((state_val_35646 === (13))){
var inst_35627 = (state_35641[(9)]);
var inst_35627__$1 = (state_35641[(2)]);
var inst_35628 = cljs.core.some(cljs.core.nil_QMARK_,inst_35627__$1);
var state_35641__$1 = (function (){var statearr_35661 = state_35641;
(statearr_35661[(9)] = inst_35627__$1);

return statearr_35661;
})();
if(cljs.core.truth_(inst_35628)){
var statearr_35662_37439 = state_35641__$1;
(statearr_35662_37439[(1)] = (14));

} else {
var statearr_35663_37440 = state_35641__$1;
(statearr_35663_37440[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (6))){
var state_35641__$1 = state_35641;
var statearr_35665_37441 = state_35641__$1;
(statearr_35665_37441[(2)] = null);

(statearr_35665_37441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (17))){
var inst_35634 = (state_35641[(2)]);
var state_35641__$1 = (function (){var statearr_35669 = state_35641;
(statearr_35669[(10)] = inst_35634);

return statearr_35669;
})();
var statearr_35670_37443 = state_35641__$1;
(statearr_35670_37443[(2)] = null);

(statearr_35670_37443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (3))){
var inst_35639 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35641__$1,inst_35639);
} else {
if((state_val_35646 === (12))){
var _ = (function (){var statearr_35672 = state_35641;
(statearr_35672[(4)] = cljs.core.rest((state_35641[(4)])));

return statearr_35672;
})();
var state_35641__$1 = state_35641;
var ex35668 = (state_35641__$1[(2)]);
var statearr_35673_37444 = state_35641__$1;
(statearr_35673_37444[(5)] = ex35668);


if((ex35668 instanceof Object)){
var statearr_35674_37446 = state_35641__$1;
(statearr_35674_37446[(1)] = (11));

(statearr_35674_37446[(5)] = null);

} else {
throw ex35668;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (2))){
var inst_35596 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35597 = cnt;
var inst_35598 = (0);
var state_35641__$1 = (function (){var statearr_35675 = state_35641;
(statearr_35675[(7)] = inst_35598);

(statearr_35675[(11)] = inst_35596);

(statearr_35675[(8)] = inst_35597);

return statearr_35675;
})();
var statearr_35676_37447 = state_35641__$1;
(statearr_35676_37447[(2)] = null);

(statearr_35676_37447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (11))){
var inst_35606 = (state_35641[(2)]);
var inst_35607 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35641__$1 = (function (){var statearr_35677 = state_35641;
(statearr_35677[(12)] = inst_35606);

return statearr_35677;
})();
var statearr_35678_37448 = state_35641__$1;
(statearr_35678_37448[(2)] = inst_35607);

(statearr_35678_37448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (9))){
var inst_35598 = (state_35641[(7)]);
var _ = (function (){var statearr_35679 = state_35641;
(statearr_35679[(4)] = cljs.core.cons((12),(state_35641[(4)])));

return statearr_35679;
})();
var inst_35613 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35598) : chs__$1.call(null,inst_35598));
var inst_35614 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35598) : done.call(null,inst_35598));
var inst_35615 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35613,inst_35614);
var ___$1 = (function (){var statearr_35681 = state_35641;
(statearr_35681[(4)] = cljs.core.rest((state_35641[(4)])));

return statearr_35681;
})();
var state_35641__$1 = state_35641;
var statearr_35683_37449 = state_35641__$1;
(statearr_35683_37449[(2)] = inst_35615);

(statearr_35683_37449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (5))){
var inst_35625 = (state_35641[(2)]);
var state_35641__$1 = (function (){var statearr_35684 = state_35641;
(statearr_35684[(13)] = inst_35625);

return statearr_35684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35641__$1,(13),dchan);
} else {
if((state_val_35646 === (14))){
var inst_35630 = cljs.core.async.close_BANG_(out);
var state_35641__$1 = state_35641;
var statearr_35687_37450 = state_35641__$1;
(statearr_35687_37450[(2)] = inst_35630);

(statearr_35687_37450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (16))){
var inst_35637 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35689_37451 = state_35641__$1;
(statearr_35689_37451[(2)] = inst_35637);

(statearr_35689_37451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (10))){
var inst_35598 = (state_35641[(7)]);
var inst_35618 = (state_35641[(2)]);
var inst_35619 = (inst_35598 + (1));
var inst_35598__$1 = inst_35619;
var state_35641__$1 = (function (){var statearr_35690 = state_35641;
(statearr_35690[(7)] = inst_35598__$1);

(statearr_35690[(14)] = inst_35618);

return statearr_35690;
})();
var statearr_35693_37452 = state_35641__$1;
(statearr_35693_37452[(2)] = null);

(statearr_35693_37452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35646 === (8))){
var inst_35623 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35695_37453 = state_35641__$1;
(statearr_35695_37453[(2)] = inst_35623);

(statearr_35695_37453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_35696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35696[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_35696[(1)] = (1));

return statearr_35696;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_35641){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_35641);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e35699){var ex__33083__auto__ = e35699;
var statearr_35701_37454 = state_35641;
(statearr_35701_37454[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_35641[(4)]))){
var statearr_35704_37459 = state_35641;
(statearr_35704_37459[(1)] = cljs.core.first((state_35641[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37460 = state_35641;
state_35641 = G__37460;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_35641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_35641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_35705 = f__33564__auto__();
(statearr_35705[(6)] = c__33563__auto___37432);

return statearr_35705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35714 = arguments.length;
switch (G__35714) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___37462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_35750){
var state_val_35751 = (state_35750[(1)]);
if((state_val_35751 === (7))){
var inst_35728 = (state_35750[(7)]);
var inst_35729 = (state_35750[(8)]);
var inst_35728__$1 = (state_35750[(2)]);
var inst_35729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35728__$1,(0),null);
var inst_35730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35728__$1,(1),null);
var inst_35731 = (inst_35729__$1 == null);
var state_35750__$1 = (function (){var statearr_35763 = state_35750;
(statearr_35763[(9)] = inst_35730);

(statearr_35763[(7)] = inst_35728__$1);

(statearr_35763[(8)] = inst_35729__$1);

return statearr_35763;
})();
if(cljs.core.truth_(inst_35731)){
var statearr_35764_37463 = state_35750__$1;
(statearr_35764_37463[(1)] = (8));

} else {
var statearr_35783_37464 = state_35750__$1;
(statearr_35783_37464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (1))){
var inst_35718 = cljs.core.vec(chs);
var inst_35719 = inst_35718;
var state_35750__$1 = (function (){var statearr_35787 = state_35750;
(statearr_35787[(10)] = inst_35719);

return statearr_35787;
})();
var statearr_35789_37465 = state_35750__$1;
(statearr_35789_37465[(2)] = null);

(statearr_35789_37465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (4))){
var inst_35719 = (state_35750[(10)]);
var state_35750__$1 = state_35750;
return cljs.core.async.ioc_alts_BANG_(state_35750__$1,(7),inst_35719);
} else {
if((state_val_35751 === (6))){
var inst_35745 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35819_37466 = state_35750__$1;
(statearr_35819_37466[(2)] = inst_35745);

(statearr_35819_37466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (3))){
var inst_35747 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35750__$1,inst_35747);
} else {
if((state_val_35751 === (2))){
var inst_35719 = (state_35750[(10)]);
var inst_35721 = cljs.core.count(inst_35719);
var inst_35722 = (inst_35721 > (0));
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35722)){
var statearr_35835_37467 = state_35750__$1;
(statearr_35835_37467[(1)] = (4));

} else {
var statearr_35836_37468 = state_35750__$1;
(statearr_35836_37468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (11))){
var inst_35719 = (state_35750[(10)]);
var inst_35738 = (state_35750[(2)]);
var tmp35826 = inst_35719;
var inst_35719__$1 = tmp35826;
var state_35750__$1 = (function (){var statearr_35837 = state_35750;
(statearr_35837[(10)] = inst_35719__$1);

(statearr_35837[(11)] = inst_35738);

return statearr_35837;
})();
var statearr_35838_37469 = state_35750__$1;
(statearr_35838_37469[(2)] = null);

(statearr_35838_37469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (9))){
var inst_35729 = (state_35750[(8)]);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35750__$1,(11),out,inst_35729);
} else {
if((state_val_35751 === (5))){
var inst_35743 = cljs.core.async.close_BANG_(out);
var state_35750__$1 = state_35750;
var statearr_35839_37470 = state_35750__$1;
(statearr_35839_37470[(2)] = inst_35743);

(statearr_35839_37470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (10))){
var inst_35741 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35841_37471 = state_35750__$1;
(statearr_35841_37471[(2)] = inst_35741);

(statearr_35841_37471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (8))){
var inst_35730 = (state_35750[(9)]);
var inst_35728 = (state_35750[(7)]);
var inst_35719 = (state_35750[(10)]);
var inst_35729 = (state_35750[(8)]);
var inst_35733 = (function (){var cs = inst_35719;
var vec__35724 = inst_35728;
var v = inst_35729;
var c = inst_35730;
return (function (p1__35709_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35709_SHARP_);
});
})();
var inst_35734 = cljs.core.filterv(inst_35733,inst_35719);
var inst_35719__$1 = inst_35734;
var state_35750__$1 = (function (){var statearr_35844 = state_35750;
(statearr_35844[(10)] = inst_35719__$1);

return statearr_35844;
})();
var statearr_35845_37472 = state_35750__$1;
(statearr_35845_37472[(2)] = null);

(statearr_35845_37472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_35846 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35846[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_35846[(1)] = (1));

return statearr_35846;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_35750){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_35750);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e35847){var ex__33083__auto__ = e35847;
var statearr_35848_37473 = state_35750;
(statearr_35848_37473[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_35750[(4)]))){
var statearr_35849_37474 = state_35750;
(statearr_35849_37474[(1)] = cljs.core.first((state_35750[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37475 = state_35750;
state_35750 = G__37475;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_35750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_35750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_35850 = f__33564__auto__();
(statearr_35850[(6)] = c__33563__auto___37462);

return statearr_35850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35856 = arguments.length;
switch (G__35856) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___37477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_35880){
var state_val_35881 = (state_35880[(1)]);
if((state_val_35881 === (7))){
var inst_35862 = (state_35880[(7)]);
var inst_35862__$1 = (state_35880[(2)]);
var inst_35863 = (inst_35862__$1 == null);
var inst_35864 = cljs.core.not(inst_35863);
var state_35880__$1 = (function (){var statearr_35882 = state_35880;
(statearr_35882[(7)] = inst_35862__$1);

return statearr_35882;
})();
if(inst_35864){
var statearr_35883_37478 = state_35880__$1;
(statearr_35883_37478[(1)] = (8));

} else {
var statearr_35884_37479 = state_35880__$1;
(statearr_35884_37479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (1))){
var inst_35857 = (0);
var state_35880__$1 = (function (){var statearr_35885 = state_35880;
(statearr_35885[(8)] = inst_35857);

return statearr_35885;
})();
var statearr_35886_37480 = state_35880__$1;
(statearr_35886_37480[(2)] = null);

(statearr_35886_37480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (4))){
var state_35880__$1 = state_35880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35880__$1,(7),ch);
} else {
if((state_val_35881 === (6))){
var inst_35875 = (state_35880[(2)]);
var state_35880__$1 = state_35880;
var statearr_35887_37481 = state_35880__$1;
(statearr_35887_37481[(2)] = inst_35875);

(statearr_35887_37481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (3))){
var inst_35877 = (state_35880[(2)]);
var inst_35878 = cljs.core.async.close_BANG_(out);
var state_35880__$1 = (function (){var statearr_35888 = state_35880;
(statearr_35888[(9)] = inst_35877);

return statearr_35888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35880__$1,inst_35878);
} else {
if((state_val_35881 === (2))){
var inst_35857 = (state_35880[(8)]);
var inst_35859 = (inst_35857 < n);
var state_35880__$1 = state_35880;
if(cljs.core.truth_(inst_35859)){
var statearr_35889_37482 = state_35880__$1;
(statearr_35889_37482[(1)] = (4));

} else {
var statearr_35890_37483 = state_35880__$1;
(statearr_35890_37483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (11))){
var inst_35857 = (state_35880[(8)]);
var inst_35867 = (state_35880[(2)]);
var inst_35868 = (inst_35857 + (1));
var inst_35857__$1 = inst_35868;
var state_35880__$1 = (function (){var statearr_35891 = state_35880;
(statearr_35891[(10)] = inst_35867);

(statearr_35891[(8)] = inst_35857__$1);

return statearr_35891;
})();
var statearr_35892_37484 = state_35880__$1;
(statearr_35892_37484[(2)] = null);

(statearr_35892_37484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (9))){
var state_35880__$1 = state_35880;
var statearr_35893_37485 = state_35880__$1;
(statearr_35893_37485[(2)] = null);

(statearr_35893_37485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (5))){
var state_35880__$1 = state_35880;
var statearr_35894_37486 = state_35880__$1;
(statearr_35894_37486[(2)] = null);

(statearr_35894_37486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (10))){
var inst_35872 = (state_35880[(2)]);
var state_35880__$1 = state_35880;
var statearr_35895_37487 = state_35880__$1;
(statearr_35895_37487[(2)] = inst_35872);

(statearr_35895_37487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35881 === (8))){
var inst_35862 = (state_35880[(7)]);
var state_35880__$1 = state_35880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35880__$1,(11),out,inst_35862);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_35896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35896[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_35896[(1)] = (1));

return statearr_35896;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_35880){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_35880);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e35897){var ex__33083__auto__ = e35897;
var statearr_35898_37491 = state_35880;
(statearr_35898_37491[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_35880[(4)]))){
var statearr_35899_37492 = state_35880;
(statearr_35899_37492[(1)] = cljs.core.first((state_35880[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37493 = state_35880;
state_35880 = G__37493;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_35880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_35880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_35900 = f__33564__auto__();
(statearr_35900[(6)] = c__33563__auto___37477);

return statearr_35900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35913 = (function (f,ch,meta35903,_,fn1,meta35914){
this.f = f;
this.ch = ch;
this.meta35903 = meta35903;
this._ = _;
this.fn1 = fn1;
this.meta35914 = meta35914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35915,meta35914__$1){
var self__ = this;
var _35915__$1 = this;
return (new cljs.core.async.t_cljs$core$async35913(self__.f,self__.ch,self__.meta35903,self__._,self__.fn1,meta35914__$1));
}));

(cljs.core.async.t_cljs$core$async35913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35915){
var self__ = this;
var _35915__$1 = this;
return self__.meta35914;
}));

(cljs.core.async.t_cljs$core$async35913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35901_SHARP_){
var G__35920 = (((p1__35901_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35901_SHARP_) : self__.f.call(null,p1__35901_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35920) : f1.call(null,G__35920));
});
}));

(cljs.core.async.t_cljs$core$async35913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35903","meta35903",-1841924387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35902","cljs.core.async/t_cljs$core$async35902",552096405,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35914","meta35914",1214538886,null)], null);
}));

(cljs.core.async.t_cljs$core$async35913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35913");

(cljs.core.async.t_cljs$core$async35913.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35913.
 */
cljs.core.async.__GT_t_cljs$core$async35913 = (function cljs$core$async$__GT_t_cljs$core$async35913(f,ch,meta35903,_,fn1,meta35914){
return (new cljs.core.async.t_cljs$core$async35913(f,ch,meta35903,_,fn1,meta35914));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35902 = (function (f,ch,meta35903){
this.f = f;
this.ch = ch;
this.meta35903 = meta35903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35904,meta35903__$1){
var self__ = this;
var _35904__$1 = this;
return (new cljs.core.async.t_cljs$core$async35902(self__.f,self__.ch,meta35903__$1));
}));

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35904){
var self__ = this;
var _35904__$1 = this;
return self__.meta35903;
}));

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35913(self__.f,self__.ch,self__.meta35903,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35922 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35922) : self__.f.call(null,G__35922));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35903","meta35903",-1841924387,null)], null);
}));

(cljs.core.async.t_cljs$core$async35902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35902");

(cljs.core.async.t_cljs$core$async35902.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35902.
 */
cljs.core.async.__GT_t_cljs$core$async35902 = (function cljs$core$async$__GT_t_cljs$core$async35902(f,ch,meta35903){
return (new cljs.core.async.t_cljs$core$async35902(f,ch,meta35903));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35902(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35927 = (function (f,ch,meta35928){
this.f = f;
this.ch = ch;
this.meta35928 = meta35928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35929,meta35928__$1){
var self__ = this;
var _35929__$1 = this;
return (new cljs.core.async.t_cljs$core$async35927(self__.f,self__.ch,meta35928__$1));
}));

(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35929){
var self__ = this;
var _35929__$1 = this;
return self__.meta35928;
}));

(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35928","meta35928",-592899820,null)], null);
}));

(cljs.core.async.t_cljs$core$async35927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35927");

(cljs.core.async.t_cljs$core$async35927.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35927.
 */
cljs.core.async.__GT_t_cljs$core$async35927 = (function cljs$core$async$__GT_t_cljs$core$async35927(f,ch,meta35928){
return (new cljs.core.async.t_cljs$core$async35927(f,ch,meta35928));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35927(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35939 = (function (p,ch,meta35940){
this.p = p;
this.ch = ch;
this.meta35940 = meta35940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35941,meta35940__$1){
var self__ = this;
var _35941__$1 = this;
return (new cljs.core.async.t_cljs$core$async35939(self__.p,self__.ch,meta35940__$1));
}));

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35941){
var self__ = this;
var _35941__$1 = this;
return self__.meta35940;
}));

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35940","meta35940",-1048952640,null)], null);
}));

(cljs.core.async.t_cljs$core$async35939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35939");

(cljs.core.async.t_cljs$core$async35939.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35939.
 */
cljs.core.async.__GT_t_cljs$core$async35939 = (function cljs$core$async$__GT_t_cljs$core$async35939(p,ch,meta35940){
return (new cljs.core.async.t_cljs$core$async35939(p,ch,meta35940));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35939(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35951 = arguments.length;
switch (G__35951) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___37550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_35973){
var state_val_35974 = (state_35973[(1)]);
if((state_val_35974 === (7))){
var inst_35969 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36080_37561 = state_35973__$1;
(statearr_36080_37561[(2)] = inst_35969);

(statearr_36080_37561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (1))){
var state_35973__$1 = state_35973;
var statearr_36110_37562 = state_35973__$1;
(statearr_36110_37562[(2)] = null);

(statearr_36110_37562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (4))){
var inst_35955 = (state_35973[(7)]);
var inst_35955__$1 = (state_35973[(2)]);
var inst_35956 = (inst_35955__$1 == null);
var state_35973__$1 = (function (){var statearr_36112 = state_35973;
(statearr_36112[(7)] = inst_35955__$1);

return statearr_36112;
})();
if(cljs.core.truth_(inst_35956)){
var statearr_36117_37564 = state_35973__$1;
(statearr_36117_37564[(1)] = (5));

} else {
var statearr_36120_37565 = state_35973__$1;
(statearr_36120_37565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (6))){
var inst_35955 = (state_35973[(7)]);
var inst_35960 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35955) : p.call(null,inst_35955));
var state_35973__$1 = state_35973;
if(cljs.core.truth_(inst_35960)){
var statearr_36121_37567 = state_35973__$1;
(statearr_36121_37567[(1)] = (8));

} else {
var statearr_36122_37568 = state_35973__$1;
(statearr_36122_37568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (3))){
var inst_35971 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35973__$1,inst_35971);
} else {
if((state_val_35974 === (2))){
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35973__$1,(4),ch);
} else {
if((state_val_35974 === (11))){
var inst_35963 = (state_35973[(2)]);
var state_35973__$1 = state_35973;
var statearr_36125_37569 = state_35973__$1;
(statearr_36125_37569[(2)] = inst_35963);

(statearr_36125_37569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (9))){
var state_35973__$1 = state_35973;
var statearr_36126_37570 = state_35973__$1;
(statearr_36126_37570[(2)] = null);

(statearr_36126_37570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (5))){
var inst_35958 = cljs.core.async.close_BANG_(out);
var state_35973__$1 = state_35973;
var statearr_36127_37571 = state_35973__$1;
(statearr_36127_37571[(2)] = inst_35958);

(statearr_36127_37571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (10))){
var inst_35966 = (state_35973[(2)]);
var state_35973__$1 = (function (){var statearr_36128 = state_35973;
(statearr_36128[(8)] = inst_35966);

return statearr_36128;
})();
var statearr_36129_37572 = state_35973__$1;
(statearr_36129_37572[(2)] = null);

(statearr_36129_37572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35974 === (8))){
var inst_35955 = (state_35973[(7)]);
var state_35973__$1 = state_35973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35973__$1,(11),out,inst_35955);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_36130 = [null,null,null,null,null,null,null,null,null];
(statearr_36130[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_36130[(1)] = (1));

return statearr_36130;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_35973){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_35973);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e36131){var ex__33083__auto__ = e36131;
var statearr_36132_37578 = state_35973;
(statearr_36132_37578[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_35973[(4)]))){
var statearr_36133_37579 = state_35973;
(statearr_36133_37579[(1)] = cljs.core.first((state_35973[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37585 = state_35973;
state_35973 = G__37585;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_35973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_35973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_36134 = f__33564__auto__();
(statearr_36134[(6)] = c__33563__auto___37550);

return statearr_36134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36138 = arguments.length;
switch (G__36138) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33563__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_36203){
var state_val_36204 = (state_36203[(1)]);
if((state_val_36204 === (7))){
var inst_36199 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36207_37588 = state_36203__$1;
(statearr_36207_37588[(2)] = inst_36199);

(statearr_36207_37588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (20))){
var inst_36169 = (state_36203[(7)]);
var inst_36180 = (state_36203[(2)]);
var inst_36181 = cljs.core.next(inst_36169);
var inst_36154 = inst_36181;
var inst_36155 = null;
var inst_36156 = (0);
var inst_36157 = (0);
var state_36203__$1 = (function (){var statearr_36208 = state_36203;
(statearr_36208[(8)] = inst_36155);

(statearr_36208[(9)] = inst_36180);

(statearr_36208[(10)] = inst_36156);

(statearr_36208[(11)] = inst_36157);

(statearr_36208[(12)] = inst_36154);

return statearr_36208;
})();
var statearr_36209_37589 = state_36203__$1;
(statearr_36209_37589[(2)] = null);

(statearr_36209_37589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (1))){
var state_36203__$1 = state_36203;
var statearr_36210_37591 = state_36203__$1;
(statearr_36210_37591[(2)] = null);

(statearr_36210_37591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (4))){
var inst_36142 = (state_36203[(13)]);
var inst_36142__$1 = (state_36203[(2)]);
var inst_36143 = (inst_36142__$1 == null);
var state_36203__$1 = (function (){var statearr_36211 = state_36203;
(statearr_36211[(13)] = inst_36142__$1);

return statearr_36211;
})();
if(cljs.core.truth_(inst_36143)){
var statearr_36212_37592 = state_36203__$1;
(statearr_36212_37592[(1)] = (5));

} else {
var statearr_36213_37593 = state_36203__$1;
(statearr_36213_37593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (15))){
var state_36203__$1 = state_36203;
var statearr_36219_37594 = state_36203__$1;
(statearr_36219_37594[(2)] = null);

(statearr_36219_37594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (21))){
var state_36203__$1 = state_36203;
var statearr_36220_37600 = state_36203__$1;
(statearr_36220_37600[(2)] = null);

(statearr_36220_37600[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (13))){
var inst_36155 = (state_36203[(8)]);
var inst_36156 = (state_36203[(10)]);
var inst_36157 = (state_36203[(11)]);
var inst_36154 = (state_36203[(12)]);
var inst_36165 = (state_36203[(2)]);
var inst_36166 = (inst_36157 + (1));
var tmp36216 = inst_36155;
var tmp36217 = inst_36156;
var tmp36218 = inst_36154;
var inst_36154__$1 = tmp36218;
var inst_36155__$1 = tmp36216;
var inst_36156__$1 = tmp36217;
var inst_36157__$1 = inst_36166;
var state_36203__$1 = (function (){var statearr_36225 = state_36203;
(statearr_36225[(14)] = inst_36165);

(statearr_36225[(8)] = inst_36155__$1);

(statearr_36225[(10)] = inst_36156__$1);

(statearr_36225[(11)] = inst_36157__$1);

(statearr_36225[(12)] = inst_36154__$1);

return statearr_36225;
})();
var statearr_36250_37604 = state_36203__$1;
(statearr_36250_37604[(2)] = null);

(statearr_36250_37604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (22))){
var state_36203__$1 = state_36203;
var statearr_36254_37605 = state_36203__$1;
(statearr_36254_37605[(2)] = null);

(statearr_36254_37605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (6))){
var inst_36142 = (state_36203[(13)]);
var inst_36152 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36142) : f.call(null,inst_36142));
var inst_36153 = cljs.core.seq(inst_36152);
var inst_36154 = inst_36153;
var inst_36155 = null;
var inst_36156 = (0);
var inst_36157 = (0);
var state_36203__$1 = (function (){var statearr_36273 = state_36203;
(statearr_36273[(8)] = inst_36155);

(statearr_36273[(10)] = inst_36156);

(statearr_36273[(11)] = inst_36157);

(statearr_36273[(12)] = inst_36154);

return statearr_36273;
})();
var statearr_36276_37607 = state_36203__$1;
(statearr_36276_37607[(2)] = null);

(statearr_36276_37607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (17))){
var inst_36169 = (state_36203[(7)]);
var inst_36173 = cljs.core.chunk_first(inst_36169);
var inst_36174 = cljs.core.chunk_rest(inst_36169);
var inst_36175 = cljs.core.count(inst_36173);
var inst_36154 = inst_36174;
var inst_36155 = inst_36173;
var inst_36156 = inst_36175;
var inst_36157 = (0);
var state_36203__$1 = (function (){var statearr_36281 = state_36203;
(statearr_36281[(8)] = inst_36155);

(statearr_36281[(10)] = inst_36156);

(statearr_36281[(11)] = inst_36157);

(statearr_36281[(12)] = inst_36154);

return statearr_36281;
})();
var statearr_36282_37608 = state_36203__$1;
(statearr_36282_37608[(2)] = null);

(statearr_36282_37608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (3))){
var inst_36201 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36203__$1,inst_36201);
} else {
if((state_val_36204 === (12))){
var inst_36189 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36283_37613 = state_36203__$1;
(statearr_36283_37613[(2)] = inst_36189);

(statearr_36283_37613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (2))){
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36203__$1,(4),in$);
} else {
if((state_val_36204 === (23))){
var inst_36197 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36284_37620 = state_36203__$1;
(statearr_36284_37620[(2)] = inst_36197);

(statearr_36284_37620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (19))){
var inst_36184 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36285_37621 = state_36203__$1;
(statearr_36285_37621[(2)] = inst_36184);

(statearr_36285_37621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (11))){
var inst_36169 = (state_36203[(7)]);
var inst_36154 = (state_36203[(12)]);
var inst_36169__$1 = cljs.core.seq(inst_36154);
var state_36203__$1 = (function (){var statearr_36286 = state_36203;
(statearr_36286[(7)] = inst_36169__$1);

return statearr_36286;
})();
if(inst_36169__$1){
var statearr_36287_37622 = state_36203__$1;
(statearr_36287_37622[(1)] = (14));

} else {
var statearr_36291_37623 = state_36203__$1;
(statearr_36291_37623[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (9))){
var inst_36191 = (state_36203[(2)]);
var inst_36192 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36203__$1 = (function (){var statearr_36292 = state_36203;
(statearr_36292[(15)] = inst_36191);

return statearr_36292;
})();
if(cljs.core.truth_(inst_36192)){
var statearr_36293_37624 = state_36203__$1;
(statearr_36293_37624[(1)] = (21));

} else {
var statearr_36294_37625 = state_36203__$1;
(statearr_36294_37625[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (5))){
var inst_36145 = cljs.core.async.close_BANG_(out);
var state_36203__$1 = state_36203;
var statearr_36295_37626 = state_36203__$1;
(statearr_36295_37626[(2)] = inst_36145);

(statearr_36295_37626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (14))){
var inst_36169 = (state_36203[(7)]);
var inst_36171 = cljs.core.chunked_seq_QMARK_(inst_36169);
var state_36203__$1 = state_36203;
if(inst_36171){
var statearr_36296_37631 = state_36203__$1;
(statearr_36296_37631[(1)] = (17));

} else {
var statearr_36297_37635 = state_36203__$1;
(statearr_36297_37635[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (16))){
var inst_36187 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36298_37639 = state_36203__$1;
(statearr_36298_37639[(2)] = inst_36187);

(statearr_36298_37639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (10))){
var inst_36155 = (state_36203[(8)]);
var inst_36157 = (state_36203[(11)]);
var inst_36163 = cljs.core._nth(inst_36155,inst_36157);
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36203__$1,(13),out,inst_36163);
} else {
if((state_val_36204 === (18))){
var inst_36169 = (state_36203[(7)]);
var inst_36178 = cljs.core.first(inst_36169);
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36203__$1,(20),out,inst_36178);
} else {
if((state_val_36204 === (8))){
var inst_36156 = (state_36203[(10)]);
var inst_36157 = (state_36203[(11)]);
var inst_36160 = (inst_36157 < inst_36156);
var inst_36161 = inst_36160;
var state_36203__$1 = state_36203;
if(cljs.core.truth_(inst_36161)){
var statearr_36299_37643 = state_36203__$1;
(statearr_36299_37643[(1)] = (10));

} else {
var statearr_36300_37644 = state_36203__$1;
(statearr_36300_37644[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33080__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33080__auto____0 = (function (){
var statearr_36301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36301[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33080__auto__);

(statearr_36301[(1)] = (1));

return statearr_36301;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33080__auto____1 = (function (state_36203){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_36203);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e36302){var ex__33083__auto__ = e36302;
var statearr_36303_37648 = state_36203;
(statearr_36303_37648[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_36203[(4)]))){
var statearr_36304_37649 = state_36203;
(statearr_36304_37649[(1)] = cljs.core.first((state_36203[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37650 = state_36203;
state_36203 = G__37650;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33080__auto__ = function(state_36203){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33080__auto____1.call(this,state_36203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_36306 = f__33564__auto__();
(statearr_36306[(6)] = c__33563__auto__);

return statearr_36306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));

return c__33563__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36308 = arguments.length;
switch (G__36308) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36310 = arguments.length;
switch (G__36310) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36312 = arguments.length;
switch (G__36312) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___37660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_36336){
var state_val_36337 = (state_36336[(1)]);
if((state_val_36337 === (7))){
var inst_36331 = (state_36336[(2)]);
var state_36336__$1 = state_36336;
var statearr_36338_37661 = state_36336__$1;
(statearr_36338_37661[(2)] = inst_36331);

(statearr_36338_37661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (1))){
var inst_36313 = null;
var state_36336__$1 = (function (){var statearr_36339 = state_36336;
(statearr_36339[(7)] = inst_36313);

return statearr_36339;
})();
var statearr_36340_37662 = state_36336__$1;
(statearr_36340_37662[(2)] = null);

(statearr_36340_37662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (4))){
var inst_36316 = (state_36336[(8)]);
var inst_36316__$1 = (state_36336[(2)]);
var inst_36317 = (inst_36316__$1 == null);
var inst_36318 = cljs.core.not(inst_36317);
var state_36336__$1 = (function (){var statearr_36341 = state_36336;
(statearr_36341[(8)] = inst_36316__$1);

return statearr_36341;
})();
if(inst_36318){
var statearr_36342_37666 = state_36336__$1;
(statearr_36342_37666[(1)] = (5));

} else {
var statearr_36343_37667 = state_36336__$1;
(statearr_36343_37667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (6))){
var state_36336__$1 = state_36336;
var statearr_36344_37671 = state_36336__$1;
(statearr_36344_37671[(2)] = null);

(statearr_36344_37671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (3))){
var inst_36333 = (state_36336[(2)]);
var inst_36334 = cljs.core.async.close_BANG_(out);
var state_36336__$1 = (function (){var statearr_36345 = state_36336;
(statearr_36345[(9)] = inst_36333);

return statearr_36345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36336__$1,inst_36334);
} else {
if((state_val_36337 === (2))){
var state_36336__$1 = state_36336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36336__$1,(4),ch);
} else {
if((state_val_36337 === (11))){
var inst_36316 = (state_36336[(8)]);
var inst_36325 = (state_36336[(2)]);
var inst_36313 = inst_36316;
var state_36336__$1 = (function (){var statearr_36346 = state_36336;
(statearr_36346[(10)] = inst_36325);

(statearr_36346[(7)] = inst_36313);

return statearr_36346;
})();
var statearr_36347_37675 = state_36336__$1;
(statearr_36347_37675[(2)] = null);

(statearr_36347_37675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (9))){
var inst_36316 = (state_36336[(8)]);
var state_36336__$1 = state_36336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36336__$1,(11),out,inst_36316);
} else {
if((state_val_36337 === (5))){
var inst_36316 = (state_36336[(8)]);
var inst_36313 = (state_36336[(7)]);
var inst_36320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36316,inst_36313);
var state_36336__$1 = state_36336;
if(inst_36320){
var statearr_36349_37677 = state_36336__$1;
(statearr_36349_37677[(1)] = (8));

} else {
var statearr_36350_37681 = state_36336__$1;
(statearr_36350_37681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (10))){
var inst_36328 = (state_36336[(2)]);
var state_36336__$1 = state_36336;
var statearr_36351_37682 = state_36336__$1;
(statearr_36351_37682[(2)] = inst_36328);

(statearr_36351_37682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36337 === (8))){
var inst_36313 = (state_36336[(7)]);
var tmp36348 = inst_36313;
var inst_36313__$1 = tmp36348;
var state_36336__$1 = (function (){var statearr_36352 = state_36336;
(statearr_36352[(7)] = inst_36313__$1);

return statearr_36352;
})();
var statearr_36353_37683 = state_36336__$1;
(statearr_36353_37683[(2)] = null);

(statearr_36353_37683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_36354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36354[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_36354[(1)] = (1));

return statearr_36354;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_36336){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_36336);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e36356){var ex__33083__auto__ = e36356;
var statearr_36358_37684 = state_36336;
(statearr_36358_37684[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_36336[(4)]))){
var statearr_36359_37685 = state_36336;
(statearr_36359_37685[(1)] = cljs.core.first((state_36336[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37686 = state_36336;
state_36336 = G__37686;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_36336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_36336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_36361 = f__33564__auto__();
(statearr_36361[(6)] = c__33563__auto___37660);

return statearr_36361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36363 = arguments.length;
switch (G__36363) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___37690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_36414){
var state_val_36415 = (state_36414[(1)]);
if((state_val_36415 === (7))){
var inst_36410 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36422_37711 = state_36414__$1;
(statearr_36422_37711[(2)] = inst_36410);

(statearr_36422_37711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (1))){
var inst_36364 = (new Array(n));
var inst_36365 = inst_36364;
var inst_36366 = (0);
var state_36414__$1 = (function (){var statearr_36423 = state_36414;
(statearr_36423[(7)] = inst_36366);

(statearr_36423[(8)] = inst_36365);

return statearr_36423;
})();
var statearr_36424_37715 = state_36414__$1;
(statearr_36424_37715[(2)] = null);

(statearr_36424_37715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (4))){
var inst_36369 = (state_36414[(9)]);
var inst_36369__$1 = (state_36414[(2)]);
var inst_36370 = (inst_36369__$1 == null);
var inst_36371 = cljs.core.not(inst_36370);
var state_36414__$1 = (function (){var statearr_36432 = state_36414;
(statearr_36432[(9)] = inst_36369__$1);

return statearr_36432;
})();
if(inst_36371){
var statearr_36433_37720 = state_36414__$1;
(statearr_36433_37720[(1)] = (5));

} else {
var statearr_36434_37721 = state_36414__$1;
(statearr_36434_37721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (15))){
var inst_36404 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36438_37725 = state_36414__$1;
(statearr_36438_37725[(2)] = inst_36404);

(statearr_36438_37725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (13))){
var state_36414__$1 = state_36414;
var statearr_36439_37726 = state_36414__$1;
(statearr_36439_37726[(2)] = null);

(statearr_36439_37726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (6))){
var inst_36366 = (state_36414[(7)]);
var inst_36400 = (inst_36366 > (0));
var state_36414__$1 = state_36414;
if(cljs.core.truth_(inst_36400)){
var statearr_36443_37731 = state_36414__$1;
(statearr_36443_37731[(1)] = (12));

} else {
var statearr_36444_37732 = state_36414__$1;
(statearr_36444_37732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (3))){
var inst_36412 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36414__$1,inst_36412);
} else {
if((state_val_36415 === (12))){
var inst_36365 = (state_36414[(8)]);
var inst_36402 = cljs.core.vec(inst_36365);
var state_36414__$1 = state_36414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36414__$1,(15),out,inst_36402);
} else {
if((state_val_36415 === (2))){
var state_36414__$1 = state_36414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36414__$1,(4),ch);
} else {
if((state_val_36415 === (11))){
var inst_36388 = (state_36414[(2)]);
var inst_36395 = (new Array(n));
var inst_36365 = inst_36395;
var inst_36366 = (0);
var state_36414__$1 = (function (){var statearr_36445 = state_36414;
(statearr_36445[(7)] = inst_36366);

(statearr_36445[(8)] = inst_36365);

(statearr_36445[(10)] = inst_36388);

return statearr_36445;
})();
var statearr_36446_37747 = state_36414__$1;
(statearr_36446_37747[(2)] = null);

(statearr_36446_37747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (9))){
var inst_36365 = (state_36414[(8)]);
var inst_36386 = cljs.core.vec(inst_36365);
var state_36414__$1 = state_36414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36414__$1,(11),out,inst_36386);
} else {
if((state_val_36415 === (5))){
var inst_36369 = (state_36414[(9)]);
var inst_36366 = (state_36414[(7)]);
var inst_36380 = (state_36414[(11)]);
var inst_36365 = (state_36414[(8)]);
var inst_36373 = (inst_36365[inst_36366] = inst_36369);
var inst_36380__$1 = (inst_36366 + (1));
var inst_36382 = (inst_36380__$1 < n);
var state_36414__$1 = (function (){var statearr_36447 = state_36414;
(statearr_36447[(12)] = inst_36373);

(statearr_36447[(11)] = inst_36380__$1);

return statearr_36447;
})();
if(cljs.core.truth_(inst_36382)){
var statearr_36452_37748 = state_36414__$1;
(statearr_36452_37748[(1)] = (8));

} else {
var statearr_36453_37749 = state_36414__$1;
(statearr_36453_37749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (14))){
var inst_36407 = (state_36414[(2)]);
var inst_36408 = cljs.core.async.close_BANG_(out);
var state_36414__$1 = (function (){var statearr_36455 = state_36414;
(statearr_36455[(13)] = inst_36407);

return statearr_36455;
})();
var statearr_36456_37750 = state_36414__$1;
(statearr_36456_37750[(2)] = inst_36408);

(statearr_36456_37750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (10))){
var inst_36398 = (state_36414[(2)]);
var state_36414__$1 = state_36414;
var statearr_36457_37755 = state_36414__$1;
(statearr_36457_37755[(2)] = inst_36398);

(statearr_36457_37755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36415 === (8))){
var inst_36380 = (state_36414[(11)]);
var inst_36365 = (state_36414[(8)]);
var tmp36454 = inst_36365;
var inst_36365__$1 = tmp36454;
var inst_36366 = inst_36380;
var state_36414__$1 = (function (){var statearr_36460 = state_36414;
(statearr_36460[(7)] = inst_36366);

(statearr_36460[(8)] = inst_36365__$1);

return statearr_36460;
})();
var statearr_36461_37756 = state_36414__$1;
(statearr_36461_37756[(2)] = null);

(statearr_36461_37756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_36462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36462[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_36462[(1)] = (1));

return statearr_36462;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_36414){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_36414);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e36463){var ex__33083__auto__ = e36463;
var statearr_36464_37759 = state_36414;
(statearr_36464_37759[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_36414[(4)]))){
var statearr_36465_37765 = state_36414;
(statearr_36465_37765[(1)] = cljs.core.first((state_36414[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37777 = state_36414;
state_36414 = G__37777;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_36414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_36414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_36466 = f__33564__auto__();
(statearr_36466[(6)] = c__33563__auto___37690);

return statearr_36466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36474 = arguments.length;
switch (G__36474) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33563__auto___37781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33564__auto__ = (function (){var switch__33079__auto__ = (function (state_36525){
var state_val_36526 = (state_36525[(1)]);
if((state_val_36526 === (7))){
var inst_36521 = (state_36525[(2)]);
var state_36525__$1 = state_36525;
var statearr_36532_37782 = state_36525__$1;
(statearr_36532_37782[(2)] = inst_36521);

(statearr_36532_37782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (1))){
var inst_36476 = [];
var inst_36477 = inst_36476;
var inst_36478 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36525__$1 = (function (){var statearr_36538 = state_36525;
(statearr_36538[(7)] = inst_36477);

(statearr_36538[(8)] = inst_36478);

return statearr_36538;
})();
var statearr_36539_37783 = state_36525__$1;
(statearr_36539_37783[(2)] = null);

(statearr_36539_37783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (4))){
var inst_36481 = (state_36525[(9)]);
var inst_36481__$1 = (state_36525[(2)]);
var inst_36482 = (inst_36481__$1 == null);
var inst_36483 = cljs.core.not(inst_36482);
var state_36525__$1 = (function (){var statearr_36540 = state_36525;
(statearr_36540[(9)] = inst_36481__$1);

return statearr_36540;
})();
if(inst_36483){
var statearr_36543_37784 = state_36525__$1;
(statearr_36543_37784[(1)] = (5));

} else {
var statearr_36544_37785 = state_36525__$1;
(statearr_36544_37785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (15))){
var inst_36477 = (state_36525[(7)]);
var inst_36513 = cljs.core.vec(inst_36477);
var state_36525__$1 = state_36525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36525__$1,(18),out,inst_36513);
} else {
if((state_val_36526 === (13))){
var inst_36507 = (state_36525[(2)]);
var state_36525__$1 = state_36525;
var statearr_36546_37786 = state_36525__$1;
(statearr_36546_37786[(2)] = inst_36507);

(statearr_36546_37786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (6))){
var inst_36477 = (state_36525[(7)]);
var inst_36510 = inst_36477.length;
var inst_36511 = (inst_36510 > (0));
var state_36525__$1 = state_36525;
if(cljs.core.truth_(inst_36511)){
var statearr_36548_37787 = state_36525__$1;
(statearr_36548_37787[(1)] = (15));

} else {
var statearr_36551_37788 = state_36525__$1;
(statearr_36551_37788[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (17))){
var inst_36518 = (state_36525[(2)]);
var inst_36519 = cljs.core.async.close_BANG_(out);
var state_36525__$1 = (function (){var statearr_36556 = state_36525;
(statearr_36556[(10)] = inst_36518);

return statearr_36556;
})();
var statearr_36557_37789 = state_36525__$1;
(statearr_36557_37789[(2)] = inst_36519);

(statearr_36557_37789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (3))){
var inst_36523 = (state_36525[(2)]);
var state_36525__$1 = state_36525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36525__$1,inst_36523);
} else {
if((state_val_36526 === (12))){
var inst_36477 = (state_36525[(7)]);
var inst_36498 = cljs.core.vec(inst_36477);
var state_36525__$1 = state_36525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36525__$1,(14),out,inst_36498);
} else {
if((state_val_36526 === (2))){
var state_36525__$1 = state_36525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36525__$1,(4),ch);
} else {
if((state_val_36526 === (11))){
var inst_36477 = (state_36525[(7)]);
var inst_36485 = (state_36525[(11)]);
var inst_36481 = (state_36525[(9)]);
var inst_36495 = inst_36477.push(inst_36481);
var tmp36558 = inst_36477;
var inst_36477__$1 = tmp36558;
var inst_36478 = inst_36485;
var state_36525__$1 = (function (){var statearr_36559 = state_36525;
(statearr_36559[(7)] = inst_36477__$1);

(statearr_36559[(8)] = inst_36478);

(statearr_36559[(12)] = inst_36495);

return statearr_36559;
})();
var statearr_36560_37790 = state_36525__$1;
(statearr_36560_37790[(2)] = null);

(statearr_36560_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (9))){
var inst_36478 = (state_36525[(8)]);
var inst_36491 = cljs.core.keyword_identical_QMARK_(inst_36478,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36525__$1 = state_36525;
var statearr_36561_37791 = state_36525__$1;
(statearr_36561_37791[(2)] = inst_36491);

(statearr_36561_37791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (5))){
var inst_36486 = (state_36525[(13)]);
var inst_36485 = (state_36525[(11)]);
var inst_36478 = (state_36525[(8)]);
var inst_36481 = (state_36525[(9)]);
var inst_36485__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36481) : f.call(null,inst_36481));
var inst_36486__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36485__$1,inst_36478);
var state_36525__$1 = (function (){var statearr_36563 = state_36525;
(statearr_36563[(13)] = inst_36486__$1);

(statearr_36563[(11)] = inst_36485__$1);

return statearr_36563;
})();
if(inst_36486__$1){
var statearr_36564_37792 = state_36525__$1;
(statearr_36564_37792[(1)] = (8));

} else {
var statearr_36565_37793 = state_36525__$1;
(statearr_36565_37793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (14))){
var inst_36485 = (state_36525[(11)]);
var inst_36481 = (state_36525[(9)]);
var inst_36500 = (state_36525[(2)]);
var inst_36503 = [];
var inst_36504 = inst_36503.push(inst_36481);
var inst_36477 = inst_36503;
var inst_36478 = inst_36485;
var state_36525__$1 = (function (){var statearr_36567 = state_36525;
(statearr_36567[(7)] = inst_36477);

(statearr_36567[(8)] = inst_36478);

(statearr_36567[(14)] = inst_36504);

(statearr_36567[(15)] = inst_36500);

return statearr_36567;
})();
var statearr_36569_37794 = state_36525__$1;
(statearr_36569_37794[(2)] = null);

(statearr_36569_37794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (16))){
var state_36525__$1 = state_36525;
var statearr_36571_37795 = state_36525__$1;
(statearr_36571_37795[(2)] = null);

(statearr_36571_37795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (10))){
var inst_36493 = (state_36525[(2)]);
var state_36525__$1 = state_36525;
if(cljs.core.truth_(inst_36493)){
var statearr_36572_37798 = state_36525__$1;
(statearr_36572_37798[(1)] = (11));

} else {
var statearr_36573_37799 = state_36525__$1;
(statearr_36573_37799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (18))){
var inst_36515 = (state_36525[(2)]);
var state_36525__$1 = state_36525;
var statearr_36574_37800 = state_36525__$1;
(statearr_36574_37800[(2)] = inst_36515);

(statearr_36574_37800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36526 === (8))){
var inst_36486 = (state_36525[(13)]);
var state_36525__$1 = state_36525;
var statearr_36575_37801 = state_36525__$1;
(statearr_36575_37801[(2)] = inst_36486);

(statearr_36575_37801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33080__auto__ = null;
var cljs$core$async$state_machine__33080__auto____0 = (function (){
var statearr_36578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36578[(0)] = cljs$core$async$state_machine__33080__auto__);

(statearr_36578[(1)] = (1));

return statearr_36578;
});
var cljs$core$async$state_machine__33080__auto____1 = (function (state_36525){
while(true){
var ret_value__33081__auto__ = (function (){try{while(true){
var result__33082__auto__ = switch__33079__auto__(state_36525);
if(cljs.core.keyword_identical_QMARK_(result__33082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33082__auto__;
}
break;
}
}catch (e36584){var ex__33083__auto__ = e36584;
var statearr_36585_37802 = state_36525;
(statearr_36585_37802[(2)] = ex__33083__auto__);


if(cljs.core.seq((state_36525[(4)]))){
var statearr_36586_37803 = state_36525;
(statearr_36586_37803[(1)] = cljs.core.first((state_36525[(4)])));

} else {
throw ex__33083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37804 = state_36525;
state_36525 = G__37804;
continue;
} else {
return ret_value__33081__auto__;
}
break;
}
});
cljs$core$async$state_machine__33080__auto__ = function(state_36525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33080__auto____1.call(this,state_36525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33080__auto____0;
cljs$core$async$state_machine__33080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33080__auto____1;
return cljs$core$async$state_machine__33080__auto__;
})()
})();
var state__33565__auto__ = (function (){var statearr_36591 = f__33564__auto__();
(statearr_36591[(6)] = c__33563__auto___37781);

return statearr_36591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33565__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
