// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__19123 = arguments.length;
switch (G__19123) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19124 = (function (f,blockable,meta19125){
this.f = f;
this.blockable = blockable;
this.meta19125 = meta19125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19126,meta19125__$1){
var self__ = this;
var _19126__$1 = this;
return (new cljs.core.async.t_cljs$core$async19124(self__.f,self__.blockable,meta19125__$1));
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19126){
var self__ = this;
var _19126__$1 = this;
return self__.meta19125;
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async19124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta19125], null);
}));

(cljs.core.async.t_cljs$core$async19124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19124");

(cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async19124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19124.
 */
cljs.core.async.__GT_t_cljs$core$async19124 = (function cljs$core$async$__GT_t_cljs$core$async19124(f__$1,blockable__$1,meta19125){
return (new cljs.core.async.t_cljs$core$async19124(f__$1,blockable__$1,meta19125));
});

}

return (new cljs.core.async.t_cljs$core$async19124(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19130 = arguments.length;
switch (G__19130) {
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
var G__19133 = arguments.length;
switch (G__19133) {
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
var G__19136 = arguments.length;
switch (G__19136) {
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
var val_19138 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19138) : fn1.call(null,val_19138));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19138) : fn1.call(null,val_19138));
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
var G__19140 = arguments.length;
switch (G__19140) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4666__auto___19142 = n;
var x_19143 = (0);
while(true){
if((x_19143 < n__4666__auto___19142)){
(a[x_19143] = x_19143);

var G__19144 = (x_19143 + (1));
x_19143 = G__19144;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19145 = (function (flag,meta19146){
this.flag = flag;
this.meta19146 = meta19146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19147,meta19146__$1){
var self__ = this;
var _19147__$1 = this;
return (new cljs.core.async.t_cljs$core$async19145(self__.flag,meta19146__$1));
}));

(cljs.core.async.t_cljs$core$async19145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19147){
var self__ = this;
var _19147__$1 = this;
return self__.meta19146;
}));

(cljs.core.async.t_cljs$core$async19145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async19145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta19146], null);
}));

(cljs.core.async.t_cljs$core$async19145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19145");

(cljs.core.async.t_cljs$core$async19145.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async19145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19145.
 */
cljs.core.async.__GT_t_cljs$core$async19145 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19145(flag__$1,meta19146){
return (new cljs.core.async.t_cljs$core$async19145(flag__$1,meta19146));
});

}

return (new cljs.core.async.t_cljs$core$async19145(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19148 = (function (flag,cb,meta19149){
this.flag = flag;
this.cb = cb;
this.meta19149 = meta19149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19150,meta19149__$1){
var self__ = this;
var _19150__$1 = this;
return (new cljs.core.async.t_cljs$core$async19148(self__.flag,self__.cb,meta19149__$1));
}));

(cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19150){
var self__ = this;
var _19150__$1 = this;
return self__.meta19149;
}));

(cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async19148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta19149], null);
}));

(cljs.core.async.t_cljs$core$async19148.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19148");

(cljs.core.async.t_cljs$core$async19148.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async19148");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19148.
 */
cljs.core.async.__GT_t_cljs$core$async19148 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19148(flag__$1,cb__$1,meta19149){
return (new cljs.core.async.t_cljs$core$async19148(flag__$1,cb__$1,meta19149));
});

}

return (new cljs.core.async.t_cljs$core$async19148(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19151_SHARP_){
var G__19153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19151_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19153) : fret.call(null,G__19153));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19152_SHARP_){
var G__19154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19152_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__19154) : fret.call(null,G__19154));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19155 = (i + (1));
i = G__19155;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__4795__auto__ = [];
var len__4789__auto___19161 = arguments.length;
var i__4790__auto___19162 = (0);
while(true){
if((i__4790__auto___19162 < len__4789__auto___19161)){
args__4795__auto__.push((arguments[i__4790__auto___19162]));

var G__19163 = (i__4790__auto___19162 + (1));
i__4790__auto___19162 = G__19163;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19158){
var map__19159 = p__19158;
var map__19159__$1 = (((((!((map__19159 == null))))?(((((map__19159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19159):map__19159);
var opts = map__19159__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19156){
var G__19157 = cljs.core.first(seq19156);
var seq19156__$1 = cljs.core.next(seq19156);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19157,seq19156__$1);
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
var G__19165 = arguments.length;
switch (G__19165) {
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
var c__17200__auto___19211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19189){
var state_val_19190 = (state_19189[(1)]);
if((state_val_19190 === (7))){
var inst_19185 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19191_19212 = state_19189__$1;
(statearr_19191_19212[(2)] = inst_19185);

(statearr_19191_19212[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (1))){
var state_19189__$1 = state_19189;
var statearr_19192_19213 = state_19189__$1;
(statearr_19192_19213[(2)] = null);

(statearr_19192_19213[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (4))){
var inst_19168 = (state_19189[(7)]);
var inst_19168__$1 = (state_19189[(2)]);
var inst_19169 = (inst_19168__$1 == null);
var state_19189__$1 = (function (){var statearr_19193 = state_19189;
(statearr_19193[(7)] = inst_19168__$1);

return statearr_19193;
})();
if(cljs.core.truth_(inst_19169)){
var statearr_19194_19214 = state_19189__$1;
(statearr_19194_19214[(1)] = (5));

} else {
var statearr_19195_19215 = state_19189__$1;
(statearr_19195_19215[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (13))){
var state_19189__$1 = state_19189;
var statearr_19196_19216 = state_19189__$1;
(statearr_19196_19216[(2)] = null);

(statearr_19196_19216[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (6))){
var inst_19168 = (state_19189[(7)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19189__$1,(11),to,inst_19168);
} else {
if((state_val_19190 === (3))){
var inst_19187 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19189__$1,inst_19187);
} else {
if((state_val_19190 === (12))){
var state_19189__$1 = state_19189;
var statearr_19197_19217 = state_19189__$1;
(statearr_19197_19217[(2)] = null);

(statearr_19197_19217[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (2))){
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19189__$1,(4),from);
} else {
if((state_val_19190 === (11))){
var inst_19178 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
if(cljs.core.truth_(inst_19178)){
var statearr_19198_19218 = state_19189__$1;
(statearr_19198_19218[(1)] = (12));

} else {
var statearr_19199_19219 = state_19189__$1;
(statearr_19199_19219[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (9))){
var state_19189__$1 = state_19189;
var statearr_19200_19220 = state_19189__$1;
(statearr_19200_19220[(2)] = null);

(statearr_19200_19220[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (5))){
var state_19189__$1 = state_19189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19201_19221 = state_19189__$1;
(statearr_19201_19221[(1)] = (8));

} else {
var statearr_19202_19222 = state_19189__$1;
(statearr_19202_19222[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (14))){
var inst_19183 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19203_19223 = state_19189__$1;
(statearr_19203_19223[(2)] = inst_19183);

(statearr_19203_19223[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (10))){
var inst_19175 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19204_19224 = state_19189__$1;
(statearr_19204_19224[(2)] = inst_19175);

(statearr_19204_19224[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (8))){
var inst_19172 = cljs.core.async.close_BANG_(to);
var state_19189__$1 = state_19189;
var statearr_19205_19225 = state_19189__$1;
(statearr_19205_19225[(2)] = inst_19172);

(statearr_19205_19225[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_19206 = [null,null,null,null,null,null,null,null];
(statearr_19206[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_19206[(1)] = (1));

return statearr_19206;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_19189){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19189);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19207){if((e19207 instanceof Object)){
var ex__17013__auto__ = e19207;
var statearr_19208_19226 = state_19189;
(statearr_19208_19226[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19189);

return cljs.core.cst$kw$recur;
} else {
throw e19207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19227 = state_19189;
state_19189 = G__19227;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_19189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_19189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19209 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19209[(6)] = c__17200__auto___19211);

return statearr_19209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
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
var process = (function (p__19228){
var vec__19229 = p__19228;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(1),null);
var job = vec__19229;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17200__auto___19400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19236){
var state_val_19237 = (state_19236[(1)]);
if((state_val_19237 === (1))){
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19236__$1,(2),res,v);
} else {
if((state_val_19237 === (2))){
var inst_19233 = (state_19236[(2)]);
var inst_19234 = cljs.core.async.close_BANG_(res);
var state_19236__$1 = (function (){var statearr_19238 = state_19236;
(statearr_19238[(7)] = inst_19233);

return statearr_19238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19236__$1,inst_19234);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0 = (function (){
var statearr_19239 = [null,null,null,null,null,null,null,null];
(statearr_19239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__);

(statearr_19239[(1)] = (1));

return statearr_19239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1 = (function (state_19236){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19236);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19240){if((e19240 instanceof Object)){
var ex__17013__auto__ = e19240;
var statearr_19241_19401 = state_19236;
(statearr_19241_19401[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19236);

return cljs.core.cst$kw$recur;
} else {
throw e19240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19402 = state_19236;
state_19236 = G__19402;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = function(state_19236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1.call(this,state_19236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19242 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19242[(6)] = c__17200__auto___19400);

return statearr_19242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__19243){
var vec__19244 = p__19243;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19244,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19244,(1),null);
var job = vec__19244;
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
var n__4666__auto___19403 = n;
var __19404 = (0);
while(true){
if((__19404 < n__4666__auto___19403)){
var G__19247_19405 = type;
var G__19247_19406__$1 = (((G__19247_19405 instanceof cljs.core.Keyword))?G__19247_19405.fqn:null);
switch (G__19247_19406__$1) {
case "compute":
var c__17200__auto___19408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19404,c__17200__auto___19408,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async){
return (function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = ((function (__19404,c__17200__auto___19408,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async){
return (function (state_19260){
var state_val_19261 = (state_19260[(1)]);
if((state_val_19261 === (1))){
var state_19260__$1 = state_19260;
var statearr_19262_19409 = state_19260__$1;
(statearr_19262_19409[(2)] = null);

(statearr_19262_19409[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19261 === (2))){
var state_19260__$1 = state_19260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19260__$1,(4),jobs);
} else {
if((state_val_19261 === (3))){
var inst_19258 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19260__$1,inst_19258);
} else {
if((state_val_19261 === (4))){
var inst_19250 = (state_19260[(2)]);
var inst_19251 = process(inst_19250);
var state_19260__$1 = state_19260;
if(cljs.core.truth_(inst_19251)){
var statearr_19263_19410 = state_19260__$1;
(statearr_19263_19410[(1)] = (5));

} else {
var statearr_19264_19411 = state_19260__$1;
(statearr_19264_19411[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19261 === (5))){
var state_19260__$1 = state_19260;
var statearr_19265_19412 = state_19260__$1;
(statearr_19265_19412[(2)] = null);

(statearr_19265_19412[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19261 === (6))){
var state_19260__$1 = state_19260;
var statearr_19266_19413 = state_19260__$1;
(statearr_19266_19413[(2)] = null);

(statearr_19266_19413[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19261 === (7))){
var inst_19256 = (state_19260[(2)]);
var state_19260__$1 = state_19260;
var statearr_19267_19414 = state_19260__$1;
(statearr_19267_19414[(2)] = inst_19256);

(statearr_19267_19414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__19404,c__17200__auto___19408,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async))
;
return ((function (__19404,switch__17009__auto__,c__17200__auto___19408,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0 = (function (){
var statearr_19268 = [null,null,null,null,null,null,null];
(statearr_19268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__);

(statearr_19268[(1)] = (1));

return statearr_19268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1 = (function (state_19260){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19260);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19269){if((e19269 instanceof Object)){
var ex__17013__auto__ = e19269;
var statearr_19270_19415 = state_19260;
(statearr_19270_19415[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19260);

return cljs.core.cst$kw$recur;
} else {
throw e19269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19416 = state_19260;
state_19260 = G__19416;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = function(state_19260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1.call(this,state_19260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__;
})()
;})(__19404,switch__17009__auto__,c__17200__auto___19408,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async))
})();
var state__17202__auto__ = (function (){var statearr_19271 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19271[(6)] = c__17200__auto___19408);

return statearr_19271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
});})(__19404,c__17200__auto___19408,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async))
);


break;
case "async":
var c__17200__auto___19417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19404,c__17200__auto___19417,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async){
return (function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = ((function (__19404,c__17200__auto___19417,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async){
return (function (state_19284){
var state_val_19285 = (state_19284[(1)]);
if((state_val_19285 === (1))){
var state_19284__$1 = state_19284;
var statearr_19286_19418 = state_19284__$1;
(statearr_19286_19418[(2)] = null);

(statearr_19286_19418[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (2))){
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19284__$1,(4),jobs);
} else {
if((state_val_19285 === (3))){
var inst_19282 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19284__$1,inst_19282);
} else {
if((state_val_19285 === (4))){
var inst_19274 = (state_19284[(2)]);
var inst_19275 = async(inst_19274);
var state_19284__$1 = state_19284;
if(cljs.core.truth_(inst_19275)){
var statearr_19287_19419 = state_19284__$1;
(statearr_19287_19419[(1)] = (5));

} else {
var statearr_19288_19420 = state_19284__$1;
(statearr_19288_19420[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (5))){
var state_19284__$1 = state_19284;
var statearr_19289_19421 = state_19284__$1;
(statearr_19289_19421[(2)] = null);

(statearr_19289_19421[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (6))){
var state_19284__$1 = state_19284;
var statearr_19290_19422 = state_19284__$1;
(statearr_19290_19422[(2)] = null);

(statearr_19290_19422[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (7))){
var inst_19280 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
var statearr_19291_19423 = state_19284__$1;
(statearr_19291_19423[(2)] = inst_19280);

(statearr_19291_19423[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__19404,c__17200__auto___19417,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async))
;
return ((function (__19404,switch__17009__auto__,c__17200__auto___19417,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0 = (function (){
var statearr_19292 = [null,null,null,null,null,null,null];
(statearr_19292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__);

(statearr_19292[(1)] = (1));

return statearr_19292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1 = (function (state_19284){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19284);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19293){if((e19293 instanceof Object)){
var ex__17013__auto__ = e19293;
var statearr_19294_19424 = state_19284;
(statearr_19294_19424[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19284);

return cljs.core.cst$kw$recur;
} else {
throw e19293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19425 = state_19284;
state_19284 = G__19425;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = function(state_19284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1.call(this,state_19284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__;
})()
;})(__19404,switch__17009__auto__,c__17200__auto___19417,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async))
})();
var state__17202__auto__ = (function (){var statearr_19295 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19295[(6)] = c__17200__auto___19417);

return statearr_19295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
});})(__19404,c__17200__auto___19417,G__19247_19405,G__19247_19406__$1,n__4666__auto___19403,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19247_19406__$1)].join('')));

}

var G__19426 = (__19404 + (1));
__19404 = G__19426;
continue;
} else {
}
break;
}

var c__17200__auto___19427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19317){
var state_val_19318 = (state_19317[(1)]);
if((state_val_19318 === (7))){
var inst_19313 = (state_19317[(2)]);
var state_19317__$1 = state_19317;
var statearr_19319_19428 = state_19317__$1;
(statearr_19319_19428[(2)] = inst_19313);

(statearr_19319_19428[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19318 === (1))){
var state_19317__$1 = state_19317;
var statearr_19320_19429 = state_19317__$1;
(statearr_19320_19429[(2)] = null);

(statearr_19320_19429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19318 === (4))){
var inst_19298 = (state_19317[(7)]);
var inst_19298__$1 = (state_19317[(2)]);
var inst_19299 = (inst_19298__$1 == null);
var state_19317__$1 = (function (){var statearr_19321 = state_19317;
(statearr_19321[(7)] = inst_19298__$1);

return statearr_19321;
})();
if(cljs.core.truth_(inst_19299)){
var statearr_19322_19430 = state_19317__$1;
(statearr_19322_19430[(1)] = (5));

} else {
var statearr_19323_19431 = state_19317__$1;
(statearr_19323_19431[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19318 === (6))){
var inst_19303 = (state_19317[(8)]);
var inst_19298 = (state_19317[(7)]);
var inst_19303__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19304 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19305 = [inst_19298,inst_19303__$1];
var inst_19306 = (new cljs.core.PersistentVector(null,2,(5),inst_19304,inst_19305,null));
var state_19317__$1 = (function (){var statearr_19324 = state_19317;
(statearr_19324[(8)] = inst_19303__$1);

return statearr_19324;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19317__$1,(8),jobs,inst_19306);
} else {
if((state_val_19318 === (3))){
var inst_19315 = (state_19317[(2)]);
var state_19317__$1 = state_19317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19317__$1,inst_19315);
} else {
if((state_val_19318 === (2))){
var state_19317__$1 = state_19317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19317__$1,(4),from);
} else {
if((state_val_19318 === (9))){
var inst_19310 = (state_19317[(2)]);
var state_19317__$1 = (function (){var statearr_19325 = state_19317;
(statearr_19325[(9)] = inst_19310);

return statearr_19325;
})();
var statearr_19326_19432 = state_19317__$1;
(statearr_19326_19432[(2)] = null);

(statearr_19326_19432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19318 === (5))){
var inst_19301 = cljs.core.async.close_BANG_(jobs);
var state_19317__$1 = state_19317;
var statearr_19327_19433 = state_19317__$1;
(statearr_19327_19433[(2)] = inst_19301);

(statearr_19327_19433[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19318 === (8))){
var inst_19303 = (state_19317[(8)]);
var inst_19308 = (state_19317[(2)]);
var state_19317__$1 = (function (){var statearr_19328 = state_19317;
(statearr_19328[(10)] = inst_19308);

return statearr_19328;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19317__$1,(9),results,inst_19303);
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
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0 = (function (){
var statearr_19329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__);

(statearr_19329[(1)] = (1));

return statearr_19329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1 = (function (state_19317){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19317);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19330){if((e19330 instanceof Object)){
var ex__17013__auto__ = e19330;
var statearr_19331_19434 = state_19317;
(statearr_19331_19434[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19317);

return cljs.core.cst$kw$recur;
} else {
throw e19330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19435 = state_19317;
state_19317 = G__19435;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = function(state_19317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1.call(this,state_19317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19332 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19332[(6)] = c__17200__auto___19427);

return statearr_19332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19370){
var state_val_19371 = (state_19370[(1)]);
if((state_val_19371 === (7))){
var inst_19366 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
var statearr_19372_19436 = state_19370__$1;
(statearr_19372_19436[(2)] = inst_19366);

(statearr_19372_19436[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (20))){
var state_19370__$1 = state_19370;
var statearr_19373_19437 = state_19370__$1;
(statearr_19373_19437[(2)] = null);

(statearr_19373_19437[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (1))){
var state_19370__$1 = state_19370;
var statearr_19374_19438 = state_19370__$1;
(statearr_19374_19438[(2)] = null);

(statearr_19374_19438[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (4))){
var inst_19335 = (state_19370[(7)]);
var inst_19335__$1 = (state_19370[(2)]);
var inst_19336 = (inst_19335__$1 == null);
var state_19370__$1 = (function (){var statearr_19375 = state_19370;
(statearr_19375[(7)] = inst_19335__$1);

return statearr_19375;
})();
if(cljs.core.truth_(inst_19336)){
var statearr_19376_19439 = state_19370__$1;
(statearr_19376_19439[(1)] = (5));

} else {
var statearr_19377_19440 = state_19370__$1;
(statearr_19377_19440[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (15))){
var inst_19348 = (state_19370[(8)]);
var state_19370__$1 = state_19370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19370__$1,(18),to,inst_19348);
} else {
if((state_val_19371 === (21))){
var inst_19361 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
var statearr_19378_19441 = state_19370__$1;
(statearr_19378_19441[(2)] = inst_19361);

(statearr_19378_19441[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (13))){
var inst_19363 = (state_19370[(2)]);
var state_19370__$1 = (function (){var statearr_19379 = state_19370;
(statearr_19379[(9)] = inst_19363);

return statearr_19379;
})();
var statearr_19380_19442 = state_19370__$1;
(statearr_19380_19442[(2)] = null);

(statearr_19380_19442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (6))){
var inst_19335 = (state_19370[(7)]);
var state_19370__$1 = state_19370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19370__$1,(11),inst_19335);
} else {
if((state_val_19371 === (17))){
var inst_19356 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
if(cljs.core.truth_(inst_19356)){
var statearr_19381_19443 = state_19370__$1;
(statearr_19381_19443[(1)] = (19));

} else {
var statearr_19382_19444 = state_19370__$1;
(statearr_19382_19444[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (3))){
var inst_19368 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19370__$1,inst_19368);
} else {
if((state_val_19371 === (12))){
var inst_19345 = (state_19370[(10)]);
var state_19370__$1 = state_19370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19370__$1,(14),inst_19345);
} else {
if((state_val_19371 === (2))){
var state_19370__$1 = state_19370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19370__$1,(4),results);
} else {
if((state_val_19371 === (19))){
var state_19370__$1 = state_19370;
var statearr_19383_19445 = state_19370__$1;
(statearr_19383_19445[(2)] = null);

(statearr_19383_19445[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (11))){
var inst_19345 = (state_19370[(2)]);
var state_19370__$1 = (function (){var statearr_19384 = state_19370;
(statearr_19384[(10)] = inst_19345);

return statearr_19384;
})();
var statearr_19385_19446 = state_19370__$1;
(statearr_19385_19446[(2)] = null);

(statearr_19385_19446[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (9))){
var state_19370__$1 = state_19370;
var statearr_19386_19447 = state_19370__$1;
(statearr_19386_19447[(2)] = null);

(statearr_19386_19447[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (5))){
var state_19370__$1 = state_19370;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19387_19448 = state_19370__$1;
(statearr_19387_19448[(1)] = (8));

} else {
var statearr_19388_19449 = state_19370__$1;
(statearr_19388_19449[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (14))){
var inst_19348 = (state_19370[(8)]);
var inst_19348__$1 = (state_19370[(2)]);
var inst_19349 = (inst_19348__$1 == null);
var inst_19350 = cljs.core.not(inst_19349);
var state_19370__$1 = (function (){var statearr_19389 = state_19370;
(statearr_19389[(8)] = inst_19348__$1);

return statearr_19389;
})();
if(inst_19350){
var statearr_19390_19450 = state_19370__$1;
(statearr_19390_19450[(1)] = (15));

} else {
var statearr_19391_19451 = state_19370__$1;
(statearr_19391_19451[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (16))){
var state_19370__$1 = state_19370;
var statearr_19392_19452 = state_19370__$1;
(statearr_19392_19452[(2)] = false);

(statearr_19392_19452[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (10))){
var inst_19342 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
var statearr_19393_19453 = state_19370__$1;
(statearr_19393_19453[(2)] = inst_19342);

(statearr_19393_19453[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (18))){
var inst_19353 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
var statearr_19394_19454 = state_19370__$1;
(statearr_19394_19454[(2)] = inst_19353);

(statearr_19394_19454[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19371 === (8))){
var inst_19339 = cljs.core.async.close_BANG_(to);
var state_19370__$1 = state_19370;
var statearr_19395_19455 = state_19370__$1;
(statearr_19395_19455[(2)] = inst_19339);

(statearr_19395_19455[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0 = (function (){
var statearr_19396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__);

(statearr_19396[(1)] = (1));

return statearr_19396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1 = (function (state_19370){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19370);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19397){if((e19397 instanceof Object)){
var ex__17013__auto__ = e19397;
var statearr_19398_19456 = state_19370;
(statearr_19398_19456[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19370);

return cljs.core.cst$kw$recur;
} else {
throw e19397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19457 = state_19370;
state_19370 = G__19457;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__ = function(state_19370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1.call(this,state_19370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17010__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19399 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19399[(6)] = c__17200__auto__);

return statearr_19399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19459 = arguments.length;
switch (G__19459) {
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__19462 = arguments.length;
switch (G__19462) {
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__19465 = arguments.length;
switch (G__19465) {
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
var c__17200__auto___19514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19491){
var state_val_19492 = (state_19491[(1)]);
if((state_val_19492 === (7))){
var inst_19487 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
var statearr_19493_19515 = state_19491__$1;
(statearr_19493_19515[(2)] = inst_19487);

(statearr_19493_19515[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (1))){
var state_19491__$1 = state_19491;
var statearr_19494_19516 = state_19491__$1;
(statearr_19494_19516[(2)] = null);

(statearr_19494_19516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (4))){
var inst_19468 = (state_19491[(7)]);
var inst_19468__$1 = (state_19491[(2)]);
var inst_19469 = (inst_19468__$1 == null);
var state_19491__$1 = (function (){var statearr_19495 = state_19491;
(statearr_19495[(7)] = inst_19468__$1);

return statearr_19495;
})();
if(cljs.core.truth_(inst_19469)){
var statearr_19496_19517 = state_19491__$1;
(statearr_19496_19517[(1)] = (5));

} else {
var statearr_19497_19518 = state_19491__$1;
(statearr_19497_19518[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (13))){
var state_19491__$1 = state_19491;
var statearr_19498_19519 = state_19491__$1;
(statearr_19498_19519[(2)] = null);

(statearr_19498_19519[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (6))){
var inst_19468 = (state_19491[(7)]);
var inst_19474 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19468) : p.call(null,inst_19468));
var state_19491__$1 = state_19491;
if(cljs.core.truth_(inst_19474)){
var statearr_19499_19520 = state_19491__$1;
(statearr_19499_19520[(1)] = (9));

} else {
var statearr_19500_19521 = state_19491__$1;
(statearr_19500_19521[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (3))){
var inst_19489 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19491__$1,inst_19489);
} else {
if((state_val_19492 === (12))){
var state_19491__$1 = state_19491;
var statearr_19501_19522 = state_19491__$1;
(statearr_19501_19522[(2)] = null);

(statearr_19501_19522[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (2))){
var state_19491__$1 = state_19491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19491__$1,(4),ch);
} else {
if((state_val_19492 === (11))){
var inst_19468 = (state_19491[(7)]);
var inst_19478 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19491__$1,(8),inst_19478,inst_19468);
} else {
if((state_val_19492 === (9))){
var state_19491__$1 = state_19491;
var statearr_19502_19523 = state_19491__$1;
(statearr_19502_19523[(2)] = tc);

(statearr_19502_19523[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (5))){
var inst_19471 = cljs.core.async.close_BANG_(tc);
var inst_19472 = cljs.core.async.close_BANG_(fc);
var state_19491__$1 = (function (){var statearr_19503 = state_19491;
(statearr_19503[(8)] = inst_19471);

return statearr_19503;
})();
var statearr_19504_19524 = state_19491__$1;
(statearr_19504_19524[(2)] = inst_19472);

(statearr_19504_19524[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (14))){
var inst_19485 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
var statearr_19505_19525 = state_19491__$1;
(statearr_19505_19525[(2)] = inst_19485);

(statearr_19505_19525[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (10))){
var state_19491__$1 = state_19491;
var statearr_19506_19526 = state_19491__$1;
(statearr_19506_19526[(2)] = fc);

(statearr_19506_19526[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19492 === (8))){
var inst_19480 = (state_19491[(2)]);
var state_19491__$1 = state_19491;
if(cljs.core.truth_(inst_19480)){
var statearr_19507_19527 = state_19491__$1;
(statearr_19507_19527[(1)] = (12));

} else {
var statearr_19508_19528 = state_19491__$1;
(statearr_19508_19528[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_19509 = [null,null,null,null,null,null,null,null,null];
(statearr_19509[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_19509[(1)] = (1));

return statearr_19509;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_19491){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19491);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19510){if((e19510 instanceof Object)){
var ex__17013__auto__ = e19510;
var statearr_19511_19529 = state_19491;
(statearr_19511_19529[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19491);

return cljs.core.cst$kw$recur;
} else {
throw e19510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19530 = state_19491;
state_19491 = G__19530;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_19491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_19491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19512 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19512[(6)] = c__17200__auto___19514);

return statearr_19512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
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
var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19551){
var state_val_19552 = (state_19551[(1)]);
if((state_val_19552 === (7))){
var inst_19547 = (state_19551[(2)]);
var state_19551__$1 = state_19551;
var statearr_19553_19571 = state_19551__$1;
(statearr_19553_19571[(2)] = inst_19547);

(statearr_19553_19571[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19552 === (1))){
var inst_19531 = init;
var state_19551__$1 = (function (){var statearr_19554 = state_19551;
(statearr_19554[(7)] = inst_19531);

return statearr_19554;
})();
var statearr_19555_19572 = state_19551__$1;
(statearr_19555_19572[(2)] = null);

(statearr_19555_19572[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19552 === (4))){
var inst_19534 = (state_19551[(8)]);
var inst_19534__$1 = (state_19551[(2)]);
var inst_19535 = (inst_19534__$1 == null);
var state_19551__$1 = (function (){var statearr_19556 = state_19551;
(statearr_19556[(8)] = inst_19534__$1);

return statearr_19556;
})();
if(cljs.core.truth_(inst_19535)){
var statearr_19557_19573 = state_19551__$1;
(statearr_19557_19573[(1)] = (5));

} else {
var statearr_19558_19574 = state_19551__$1;
(statearr_19558_19574[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19552 === (6))){
var inst_19531 = (state_19551[(7)]);
var inst_19534 = (state_19551[(8)]);
var inst_19538 = (state_19551[(9)]);
var inst_19538__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19531,inst_19534) : f.call(null,inst_19531,inst_19534));
var inst_19539 = cljs.core.reduced_QMARK_(inst_19538__$1);
var state_19551__$1 = (function (){var statearr_19559 = state_19551;
(statearr_19559[(9)] = inst_19538__$1);

return statearr_19559;
})();
if(inst_19539){
var statearr_19560_19575 = state_19551__$1;
(statearr_19560_19575[(1)] = (8));

} else {
var statearr_19561_19576 = state_19551__$1;
(statearr_19561_19576[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19552 === (3))){
var inst_19549 = (state_19551[(2)]);
var state_19551__$1 = state_19551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19551__$1,inst_19549);
} else {
if((state_val_19552 === (2))){
var state_19551__$1 = state_19551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19551__$1,(4),ch);
} else {
if((state_val_19552 === (9))){
var inst_19538 = (state_19551[(9)]);
var inst_19531 = inst_19538;
var state_19551__$1 = (function (){var statearr_19562 = state_19551;
(statearr_19562[(7)] = inst_19531);

return statearr_19562;
})();
var statearr_19563_19577 = state_19551__$1;
(statearr_19563_19577[(2)] = null);

(statearr_19563_19577[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19552 === (5))){
var inst_19531 = (state_19551[(7)]);
var state_19551__$1 = state_19551;
var statearr_19564_19578 = state_19551__$1;
(statearr_19564_19578[(2)] = inst_19531);

(statearr_19564_19578[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19552 === (10))){
var inst_19545 = (state_19551[(2)]);
var state_19551__$1 = state_19551;
var statearr_19565_19579 = state_19551__$1;
(statearr_19565_19579[(2)] = inst_19545);

(statearr_19565_19579[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19552 === (8))){
var inst_19538 = (state_19551[(9)]);
var inst_19541 = cljs.core.deref(inst_19538);
var state_19551__$1 = state_19551;
var statearr_19566_19580 = state_19551__$1;
(statearr_19566_19580[(2)] = inst_19541);

(statearr_19566_19580[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__17010__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17010__auto____0 = (function (){
var statearr_19567 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19567[(0)] = cljs$core$async$reduce_$_state_machine__17010__auto__);

(statearr_19567[(1)] = (1));

return statearr_19567;
});
var cljs$core$async$reduce_$_state_machine__17010__auto____1 = (function (state_19551){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19551);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19568){if((e19568 instanceof Object)){
var ex__17013__auto__ = e19568;
var statearr_19569_19581 = state_19551;
(statearr_19569_19581[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19551);

return cljs.core.cst$kw$recur;
} else {
throw e19568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19582 = state_19551;
state_19551 = G__19582;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17010__auto__ = function(state_19551){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17010__auto____1.call(this,state_19551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17010__auto____0;
cljs$core$async$reduce_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17010__auto____1;
return cljs$core$async$reduce_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19570 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19570[(6)] = c__17200__auto__);

return statearr_19570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19588){
var state_val_19589 = (state_19588[(1)]);
if((state_val_19589 === (1))){
var inst_19583 = cljs.core.async.reduce(f__$1,init,ch);
var state_19588__$1 = state_19588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19588__$1,(2),inst_19583);
} else {
if((state_val_19589 === (2))){
var inst_19585 = (state_19588[(2)]);
var inst_19586 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19585) : f__$1.call(null,inst_19585));
var state_19588__$1 = state_19588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19588__$1,inst_19586);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17010__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17010__auto____0 = (function (){
var statearr_19590 = [null,null,null,null,null,null,null];
(statearr_19590[(0)] = cljs$core$async$transduce_$_state_machine__17010__auto__);

(statearr_19590[(1)] = (1));

return statearr_19590;
});
var cljs$core$async$transduce_$_state_machine__17010__auto____1 = (function (state_19588){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19588);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19591){if((e19591 instanceof Object)){
var ex__17013__auto__ = e19591;
var statearr_19592_19594 = state_19588;
(statearr_19592_19594[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19588);

return cljs.core.cst$kw$recur;
} else {
throw e19591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19595 = state_19588;
state_19588 = G__19595;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17010__auto__ = function(state_19588){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17010__auto____1.call(this,state_19588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17010__auto____0;
cljs$core$async$transduce_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17010__auto____1;
return cljs$core$async$transduce_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19593 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19593[(6)] = c__17200__auto__);

return statearr_19593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19597 = arguments.length;
switch (G__19597) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19622){
var state_val_19623 = (state_19622[(1)]);
if((state_val_19623 === (7))){
var inst_19604 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
var statearr_19624_19645 = state_19622__$1;
(statearr_19624_19645[(2)] = inst_19604);

(statearr_19624_19645[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (1))){
var inst_19598 = cljs.core.seq(coll);
var inst_19599 = inst_19598;
var state_19622__$1 = (function (){var statearr_19625 = state_19622;
(statearr_19625[(7)] = inst_19599);

return statearr_19625;
})();
var statearr_19626_19646 = state_19622__$1;
(statearr_19626_19646[(2)] = null);

(statearr_19626_19646[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (4))){
var inst_19599 = (state_19622[(7)]);
var inst_19602 = cljs.core.first(inst_19599);
var state_19622__$1 = state_19622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19622__$1,(7),ch,inst_19602);
} else {
if((state_val_19623 === (13))){
var inst_19616 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
var statearr_19627_19647 = state_19622__$1;
(statearr_19627_19647[(2)] = inst_19616);

(statearr_19627_19647[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (6))){
var inst_19607 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
if(cljs.core.truth_(inst_19607)){
var statearr_19628_19648 = state_19622__$1;
(statearr_19628_19648[(1)] = (8));

} else {
var statearr_19629_19649 = state_19622__$1;
(statearr_19629_19649[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (3))){
var inst_19620 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19622__$1,inst_19620);
} else {
if((state_val_19623 === (12))){
var state_19622__$1 = state_19622;
var statearr_19630_19650 = state_19622__$1;
(statearr_19630_19650[(2)] = null);

(statearr_19630_19650[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (2))){
var inst_19599 = (state_19622[(7)]);
var state_19622__$1 = state_19622;
if(cljs.core.truth_(inst_19599)){
var statearr_19631_19651 = state_19622__$1;
(statearr_19631_19651[(1)] = (4));

} else {
var statearr_19632_19652 = state_19622__$1;
(statearr_19632_19652[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (11))){
var inst_19613 = cljs.core.async.close_BANG_(ch);
var state_19622__$1 = state_19622;
var statearr_19633_19653 = state_19622__$1;
(statearr_19633_19653[(2)] = inst_19613);

(statearr_19633_19653[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (9))){
var state_19622__$1 = state_19622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19634_19654 = state_19622__$1;
(statearr_19634_19654[(1)] = (11));

} else {
var statearr_19635_19655 = state_19622__$1;
(statearr_19635_19655[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (5))){
var inst_19599 = (state_19622[(7)]);
var state_19622__$1 = state_19622;
var statearr_19636_19656 = state_19622__$1;
(statearr_19636_19656[(2)] = inst_19599);

(statearr_19636_19656[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (10))){
var inst_19618 = (state_19622[(2)]);
var state_19622__$1 = state_19622;
var statearr_19637_19657 = state_19622__$1;
(statearr_19637_19657[(2)] = inst_19618);

(statearr_19637_19657[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19623 === (8))){
var inst_19599 = (state_19622[(7)]);
var inst_19609 = cljs.core.next(inst_19599);
var inst_19599__$1 = inst_19609;
var state_19622__$1 = (function (){var statearr_19638 = state_19622;
(statearr_19638[(7)] = inst_19599__$1);

return statearr_19638;
})();
var statearr_19639_19658 = state_19622__$1;
(statearr_19639_19658[(2)] = null);

(statearr_19639_19658[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_19640 = [null,null,null,null,null,null,null,null];
(statearr_19640[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_19640[(1)] = (1));

return statearr_19640;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_19622){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19622);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19641){if((e19641 instanceof Object)){
var ex__17013__auto__ = e19641;
var statearr_19642_19659 = state_19622;
(statearr_19642_19659[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19622);

return cljs.core.cst$kw$recur;
} else {
throw e19641;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19660 = state_19622;
state_19622 = G__19660;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_19622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_19622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19643 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19643[(6)] = c__17200__auto__);

return statearr_19643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19661 = (function (ch,cs,meta19662){
this.ch = ch;
this.cs = cs;
this.meta19662 = meta19662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19663,meta19662__$1){
var self__ = this;
var _19663__$1 = this;
return (new cljs.core.async.t_cljs$core$async19661(self__.ch,self__.cs,meta19662__$1));
}));

(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19663){
var self__ = this;
var _19663__$1 = this;
return self__.meta19662;
}));

(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19661.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta19662], null);
}));

(cljs.core.async.t_cljs$core$async19661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19661");

(cljs.core.async.t_cljs$core$async19661.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async19661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19661.
 */
cljs.core.async.__GT_t_cljs$core$async19661 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19661(ch__$1,cs__$1,meta19662){
return (new cljs.core.async.t_cljs$core$async19661(ch__$1,cs__$1,meta19662));
});

}

return (new cljs.core.async.t_cljs$core$async19661(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17200__auto___19879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_19796){
var state_val_19797 = (state_19796[(1)]);
if((state_val_19797 === (7))){
var inst_19792 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19798_19880 = state_19796__$1;
(statearr_19798_19880[(2)] = inst_19792);

(statearr_19798_19880[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (20))){
var inst_19697 = (state_19796[(7)]);
var inst_19709 = cljs.core.first(inst_19697);
var inst_19710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19709,(0),null);
var inst_19711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19709,(1),null);
var state_19796__$1 = (function (){var statearr_19799 = state_19796;
(statearr_19799[(8)] = inst_19710);

return statearr_19799;
})();
if(cljs.core.truth_(inst_19711)){
var statearr_19800_19881 = state_19796__$1;
(statearr_19800_19881[(1)] = (22));

} else {
var statearr_19801_19882 = state_19796__$1;
(statearr_19801_19882[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (27))){
var inst_19739 = (state_19796[(9)]);
var inst_19741 = (state_19796[(10)]);
var inst_19666 = (state_19796[(11)]);
var inst_19746 = (state_19796[(12)]);
var inst_19746__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19739,inst_19741);
var inst_19747 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19746__$1,inst_19666,done);
var state_19796__$1 = (function (){var statearr_19802 = state_19796;
(statearr_19802[(12)] = inst_19746__$1);

return statearr_19802;
})();
if(cljs.core.truth_(inst_19747)){
var statearr_19803_19883 = state_19796__$1;
(statearr_19803_19883[(1)] = (30));

} else {
var statearr_19804_19884 = state_19796__$1;
(statearr_19804_19884[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (1))){
var state_19796__$1 = state_19796;
var statearr_19805_19885 = state_19796__$1;
(statearr_19805_19885[(2)] = null);

(statearr_19805_19885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (24))){
var inst_19697 = (state_19796[(7)]);
var inst_19716 = (state_19796[(2)]);
var inst_19717 = cljs.core.next(inst_19697);
var inst_19675 = inst_19717;
var inst_19676 = null;
var inst_19677 = (0);
var inst_19678 = (0);
var state_19796__$1 = (function (){var statearr_19806 = state_19796;
(statearr_19806[(13)] = inst_19675);

(statearr_19806[(14)] = inst_19678);

(statearr_19806[(15)] = inst_19716);

(statearr_19806[(16)] = inst_19676);

(statearr_19806[(17)] = inst_19677);

return statearr_19806;
})();
var statearr_19807_19886 = state_19796__$1;
(statearr_19807_19886[(2)] = null);

(statearr_19807_19886[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (39))){
var state_19796__$1 = state_19796;
var statearr_19811_19887 = state_19796__$1;
(statearr_19811_19887[(2)] = null);

(statearr_19811_19887[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (4))){
var inst_19666 = (state_19796[(11)]);
var inst_19666__$1 = (state_19796[(2)]);
var inst_19667 = (inst_19666__$1 == null);
var state_19796__$1 = (function (){var statearr_19812 = state_19796;
(statearr_19812[(11)] = inst_19666__$1);

return statearr_19812;
})();
if(cljs.core.truth_(inst_19667)){
var statearr_19813_19888 = state_19796__$1;
(statearr_19813_19888[(1)] = (5));

} else {
var statearr_19814_19889 = state_19796__$1;
(statearr_19814_19889[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (15))){
var inst_19675 = (state_19796[(13)]);
var inst_19678 = (state_19796[(14)]);
var inst_19676 = (state_19796[(16)]);
var inst_19677 = (state_19796[(17)]);
var inst_19693 = (state_19796[(2)]);
var inst_19694 = (inst_19678 + (1));
var tmp19808 = inst_19675;
var tmp19809 = inst_19676;
var tmp19810 = inst_19677;
var inst_19675__$1 = tmp19808;
var inst_19676__$1 = tmp19809;
var inst_19677__$1 = tmp19810;
var inst_19678__$1 = inst_19694;
var state_19796__$1 = (function (){var statearr_19815 = state_19796;
(statearr_19815[(13)] = inst_19675__$1);

(statearr_19815[(14)] = inst_19678__$1);

(statearr_19815[(18)] = inst_19693);

(statearr_19815[(16)] = inst_19676__$1);

(statearr_19815[(17)] = inst_19677__$1);

return statearr_19815;
})();
var statearr_19816_19890 = state_19796__$1;
(statearr_19816_19890[(2)] = null);

(statearr_19816_19890[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (21))){
var inst_19720 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19820_19891 = state_19796__$1;
(statearr_19820_19891[(2)] = inst_19720);

(statearr_19820_19891[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (31))){
var inst_19746 = (state_19796[(12)]);
var inst_19750 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19746);
var state_19796__$1 = state_19796;
var statearr_19821_19892 = state_19796__$1;
(statearr_19821_19892[(2)] = inst_19750);

(statearr_19821_19892[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (32))){
var inst_19740 = (state_19796[(19)]);
var inst_19739 = (state_19796[(9)]);
var inst_19741 = (state_19796[(10)]);
var inst_19738 = (state_19796[(20)]);
var inst_19752 = (state_19796[(2)]);
var inst_19753 = (inst_19741 + (1));
var tmp19817 = inst_19740;
var tmp19818 = inst_19739;
var tmp19819 = inst_19738;
var inst_19738__$1 = tmp19819;
var inst_19739__$1 = tmp19818;
var inst_19740__$1 = tmp19817;
var inst_19741__$1 = inst_19753;
var state_19796__$1 = (function (){var statearr_19822 = state_19796;
(statearr_19822[(19)] = inst_19740__$1);

(statearr_19822[(9)] = inst_19739__$1);

(statearr_19822[(10)] = inst_19741__$1);

(statearr_19822[(21)] = inst_19752);

(statearr_19822[(20)] = inst_19738__$1);

return statearr_19822;
})();
var statearr_19823_19893 = state_19796__$1;
(statearr_19823_19893[(2)] = null);

(statearr_19823_19893[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (40))){
var inst_19765 = (state_19796[(22)]);
var inst_19769 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19765);
var state_19796__$1 = state_19796;
var statearr_19824_19894 = state_19796__$1;
(statearr_19824_19894[(2)] = inst_19769);

(statearr_19824_19894[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (33))){
var inst_19756 = (state_19796[(23)]);
var inst_19758 = cljs.core.chunked_seq_QMARK_(inst_19756);
var state_19796__$1 = state_19796;
if(inst_19758){
var statearr_19825_19895 = state_19796__$1;
(statearr_19825_19895[(1)] = (36));

} else {
var statearr_19826_19896 = state_19796__$1;
(statearr_19826_19896[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (13))){
var inst_19687 = (state_19796[(24)]);
var inst_19690 = cljs.core.async.close_BANG_(inst_19687);
var state_19796__$1 = state_19796;
var statearr_19827_19897 = state_19796__$1;
(statearr_19827_19897[(2)] = inst_19690);

(statearr_19827_19897[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (22))){
var inst_19710 = (state_19796[(8)]);
var inst_19713 = cljs.core.async.close_BANG_(inst_19710);
var state_19796__$1 = state_19796;
var statearr_19828_19898 = state_19796__$1;
(statearr_19828_19898[(2)] = inst_19713);

(statearr_19828_19898[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (36))){
var inst_19756 = (state_19796[(23)]);
var inst_19760 = cljs.core.chunk_first(inst_19756);
var inst_19761 = cljs.core.chunk_rest(inst_19756);
var inst_19762 = cljs.core.count(inst_19760);
var inst_19738 = inst_19761;
var inst_19739 = inst_19760;
var inst_19740 = inst_19762;
var inst_19741 = (0);
var state_19796__$1 = (function (){var statearr_19829 = state_19796;
(statearr_19829[(19)] = inst_19740);

(statearr_19829[(9)] = inst_19739);

(statearr_19829[(10)] = inst_19741);

(statearr_19829[(20)] = inst_19738);

return statearr_19829;
})();
var statearr_19830_19899 = state_19796__$1;
(statearr_19830_19899[(2)] = null);

(statearr_19830_19899[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (41))){
var inst_19756 = (state_19796[(23)]);
var inst_19771 = (state_19796[(2)]);
var inst_19772 = cljs.core.next(inst_19756);
var inst_19738 = inst_19772;
var inst_19739 = null;
var inst_19740 = (0);
var inst_19741 = (0);
var state_19796__$1 = (function (){var statearr_19831 = state_19796;
(statearr_19831[(19)] = inst_19740);

(statearr_19831[(25)] = inst_19771);

(statearr_19831[(9)] = inst_19739);

(statearr_19831[(10)] = inst_19741);

(statearr_19831[(20)] = inst_19738);

return statearr_19831;
})();
var statearr_19832_19900 = state_19796__$1;
(statearr_19832_19900[(2)] = null);

(statearr_19832_19900[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (43))){
var state_19796__$1 = state_19796;
var statearr_19833_19901 = state_19796__$1;
(statearr_19833_19901[(2)] = null);

(statearr_19833_19901[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (29))){
var inst_19780 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19834_19902 = state_19796__$1;
(statearr_19834_19902[(2)] = inst_19780);

(statearr_19834_19902[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (44))){
var inst_19789 = (state_19796[(2)]);
var state_19796__$1 = (function (){var statearr_19835 = state_19796;
(statearr_19835[(26)] = inst_19789);

return statearr_19835;
})();
var statearr_19836_19903 = state_19796__$1;
(statearr_19836_19903[(2)] = null);

(statearr_19836_19903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (6))){
var inst_19730 = (state_19796[(27)]);
var inst_19729 = cljs.core.deref(cs);
var inst_19730__$1 = cljs.core.keys(inst_19729);
var inst_19731 = cljs.core.count(inst_19730__$1);
var inst_19732 = cljs.core.reset_BANG_(dctr,inst_19731);
var inst_19737 = cljs.core.seq(inst_19730__$1);
var inst_19738 = inst_19737;
var inst_19739 = null;
var inst_19740 = (0);
var inst_19741 = (0);
var state_19796__$1 = (function (){var statearr_19837 = state_19796;
(statearr_19837[(19)] = inst_19740);

(statearr_19837[(27)] = inst_19730__$1);

(statearr_19837[(9)] = inst_19739);

(statearr_19837[(10)] = inst_19741);

(statearr_19837[(28)] = inst_19732);

(statearr_19837[(20)] = inst_19738);

return statearr_19837;
})();
var statearr_19838_19904 = state_19796__$1;
(statearr_19838_19904[(2)] = null);

(statearr_19838_19904[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (28))){
var inst_19756 = (state_19796[(23)]);
var inst_19738 = (state_19796[(20)]);
var inst_19756__$1 = cljs.core.seq(inst_19738);
var state_19796__$1 = (function (){var statearr_19839 = state_19796;
(statearr_19839[(23)] = inst_19756__$1);

return statearr_19839;
})();
if(inst_19756__$1){
var statearr_19840_19905 = state_19796__$1;
(statearr_19840_19905[(1)] = (33));

} else {
var statearr_19841_19906 = state_19796__$1;
(statearr_19841_19906[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (25))){
var inst_19740 = (state_19796[(19)]);
var inst_19741 = (state_19796[(10)]);
var inst_19743 = (inst_19741 < inst_19740);
var inst_19744 = inst_19743;
var state_19796__$1 = state_19796;
if(cljs.core.truth_(inst_19744)){
var statearr_19842_19907 = state_19796__$1;
(statearr_19842_19907[(1)] = (27));

} else {
var statearr_19843_19908 = state_19796__$1;
(statearr_19843_19908[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (34))){
var state_19796__$1 = state_19796;
var statearr_19844_19909 = state_19796__$1;
(statearr_19844_19909[(2)] = null);

(statearr_19844_19909[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (17))){
var state_19796__$1 = state_19796;
var statearr_19845_19910 = state_19796__$1;
(statearr_19845_19910[(2)] = null);

(statearr_19845_19910[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (3))){
var inst_19794 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19796__$1,inst_19794);
} else {
if((state_val_19797 === (12))){
var inst_19725 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19846_19911 = state_19796__$1;
(statearr_19846_19911[(2)] = inst_19725);

(statearr_19846_19911[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (2))){
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19796__$1,(4),ch);
} else {
if((state_val_19797 === (23))){
var state_19796__$1 = state_19796;
var statearr_19847_19912 = state_19796__$1;
(statearr_19847_19912[(2)] = null);

(statearr_19847_19912[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (35))){
var inst_19778 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19848_19913 = state_19796__$1;
(statearr_19848_19913[(2)] = inst_19778);

(statearr_19848_19913[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (19))){
var inst_19697 = (state_19796[(7)]);
var inst_19701 = cljs.core.chunk_first(inst_19697);
var inst_19702 = cljs.core.chunk_rest(inst_19697);
var inst_19703 = cljs.core.count(inst_19701);
var inst_19675 = inst_19702;
var inst_19676 = inst_19701;
var inst_19677 = inst_19703;
var inst_19678 = (0);
var state_19796__$1 = (function (){var statearr_19849 = state_19796;
(statearr_19849[(13)] = inst_19675);

(statearr_19849[(14)] = inst_19678);

(statearr_19849[(16)] = inst_19676);

(statearr_19849[(17)] = inst_19677);

return statearr_19849;
})();
var statearr_19850_19914 = state_19796__$1;
(statearr_19850_19914[(2)] = null);

(statearr_19850_19914[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (11))){
var inst_19675 = (state_19796[(13)]);
var inst_19697 = (state_19796[(7)]);
var inst_19697__$1 = cljs.core.seq(inst_19675);
var state_19796__$1 = (function (){var statearr_19851 = state_19796;
(statearr_19851[(7)] = inst_19697__$1);

return statearr_19851;
})();
if(inst_19697__$1){
var statearr_19852_19915 = state_19796__$1;
(statearr_19852_19915[(1)] = (16));

} else {
var statearr_19853_19916 = state_19796__$1;
(statearr_19853_19916[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (9))){
var inst_19727 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19854_19917 = state_19796__$1;
(statearr_19854_19917[(2)] = inst_19727);

(statearr_19854_19917[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (5))){
var inst_19673 = cljs.core.deref(cs);
var inst_19674 = cljs.core.seq(inst_19673);
var inst_19675 = inst_19674;
var inst_19676 = null;
var inst_19677 = (0);
var inst_19678 = (0);
var state_19796__$1 = (function (){var statearr_19855 = state_19796;
(statearr_19855[(13)] = inst_19675);

(statearr_19855[(14)] = inst_19678);

(statearr_19855[(16)] = inst_19676);

(statearr_19855[(17)] = inst_19677);

return statearr_19855;
})();
var statearr_19856_19918 = state_19796__$1;
(statearr_19856_19918[(2)] = null);

(statearr_19856_19918[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (14))){
var state_19796__$1 = state_19796;
var statearr_19857_19919 = state_19796__$1;
(statearr_19857_19919[(2)] = null);

(statearr_19857_19919[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (45))){
var inst_19786 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19858_19920 = state_19796__$1;
(statearr_19858_19920[(2)] = inst_19786);

(statearr_19858_19920[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (26))){
var inst_19730 = (state_19796[(27)]);
var inst_19782 = (state_19796[(2)]);
var inst_19783 = cljs.core.seq(inst_19730);
var state_19796__$1 = (function (){var statearr_19859 = state_19796;
(statearr_19859[(29)] = inst_19782);

return statearr_19859;
})();
if(inst_19783){
var statearr_19860_19921 = state_19796__$1;
(statearr_19860_19921[(1)] = (42));

} else {
var statearr_19861_19922 = state_19796__$1;
(statearr_19861_19922[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (16))){
var inst_19697 = (state_19796[(7)]);
var inst_19699 = cljs.core.chunked_seq_QMARK_(inst_19697);
var state_19796__$1 = state_19796;
if(inst_19699){
var statearr_19862_19923 = state_19796__$1;
(statearr_19862_19923[(1)] = (19));

} else {
var statearr_19863_19924 = state_19796__$1;
(statearr_19863_19924[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (38))){
var inst_19775 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19864_19925 = state_19796__$1;
(statearr_19864_19925[(2)] = inst_19775);

(statearr_19864_19925[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (30))){
var state_19796__$1 = state_19796;
var statearr_19865_19926 = state_19796__$1;
(statearr_19865_19926[(2)] = null);

(statearr_19865_19926[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (10))){
var inst_19678 = (state_19796[(14)]);
var inst_19676 = (state_19796[(16)]);
var inst_19686 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19676,inst_19678);
var inst_19687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19686,(0),null);
var inst_19688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19686,(1),null);
var state_19796__$1 = (function (){var statearr_19866 = state_19796;
(statearr_19866[(24)] = inst_19687);

return statearr_19866;
})();
if(cljs.core.truth_(inst_19688)){
var statearr_19867_19927 = state_19796__$1;
(statearr_19867_19927[(1)] = (13));

} else {
var statearr_19868_19928 = state_19796__$1;
(statearr_19868_19928[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (18))){
var inst_19723 = (state_19796[(2)]);
var state_19796__$1 = state_19796;
var statearr_19869_19929 = state_19796__$1;
(statearr_19869_19929[(2)] = inst_19723);

(statearr_19869_19929[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (42))){
var state_19796__$1 = state_19796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19796__$1,(45),dchan);
} else {
if((state_val_19797 === (37))){
var inst_19765 = (state_19796[(22)]);
var inst_19666 = (state_19796[(11)]);
var inst_19756 = (state_19796[(23)]);
var inst_19765__$1 = cljs.core.first(inst_19756);
var inst_19766 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19765__$1,inst_19666,done);
var state_19796__$1 = (function (){var statearr_19870 = state_19796;
(statearr_19870[(22)] = inst_19765__$1);

return statearr_19870;
})();
if(cljs.core.truth_(inst_19766)){
var statearr_19871_19930 = state_19796__$1;
(statearr_19871_19930[(1)] = (39));

} else {
var statearr_19872_19931 = state_19796__$1;
(statearr_19872_19931[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19797 === (8))){
var inst_19678 = (state_19796[(14)]);
var inst_19677 = (state_19796[(17)]);
var inst_19680 = (inst_19678 < inst_19677);
var inst_19681 = inst_19680;
var state_19796__$1 = state_19796;
if(cljs.core.truth_(inst_19681)){
var statearr_19873_19932 = state_19796__$1;
(statearr_19873_19932[(1)] = (10));

} else {
var statearr_19874_19933 = state_19796__$1;
(statearr_19874_19933[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__17010__auto__ = null;
var cljs$core$async$mult_$_state_machine__17010__auto____0 = (function (){
var statearr_19875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19875[(0)] = cljs$core$async$mult_$_state_machine__17010__auto__);

(statearr_19875[(1)] = (1));

return statearr_19875;
});
var cljs$core$async$mult_$_state_machine__17010__auto____1 = (function (state_19796){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_19796);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e19876){if((e19876 instanceof Object)){
var ex__17013__auto__ = e19876;
var statearr_19877_19934 = state_19796;
(statearr_19877_19934[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19796);

return cljs.core.cst$kw$recur;
} else {
throw e19876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__19935 = state_19796;
state_19796 = G__19935;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17010__auto__ = function(state_19796){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17010__auto____1.call(this,state_19796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17010__auto____0;
cljs$core$async$mult_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17010__auto____1;
return cljs$core$async$mult_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_19878 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_19878[(6)] = c__17200__auto___19879);

return statearr_19878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
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
var G__19937 = arguments.length;
switch (G__19937) {
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___19949 = arguments.length;
var i__4790__auto___19950 = (0);
while(true){
if((i__4790__auto___19950 < len__4789__auto___19949)){
args__4795__auto__.push((arguments[i__4790__auto___19950]));

var G__19951 = (i__4790__auto___19950 + (1));
i__4790__auto___19950 = G__19951;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19943){
var map__19944 = p__19943;
var map__19944__$1 = (((((!((map__19944 == null))))?(((((map__19944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19944):map__19944);
var opts = map__19944__$1;
var statearr_19946_19952 = state;
(statearr_19946_19952[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19947_19953 = state;
(statearr_19947_19953[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_19948_19954 = state;
(statearr_19948_19954[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19939){
var G__19940 = cljs.core.first(seq19939);
var seq19939__$1 = cljs.core.next(seq19939);
var G__19941 = cljs.core.first(seq19939__$1);
var seq19939__$2 = cljs.core.next(seq19939__$1);
var G__19942 = cljs.core.first(seq19939__$2);
var seq19939__$3 = cljs.core.next(seq19939__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19940,G__19941,G__19942,seq19939__$3);
}));

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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
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
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19955 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19956){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19956 = meta19956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19957,meta19956__$1){
var self__ = this;
var _19957__$1 = this;
return (new cljs.core.async.t_cljs$core$async19955(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19956__$1));
}));

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19957){
var self__ = this;
var _19957__$1 = this;
return self__.meta19956;
}));

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19955.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta19956], null);
}));

(cljs.core.async.t_cljs$core$async19955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19955");

(cljs.core.async.t_cljs$core$async19955.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async19955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19955.
 */
cljs.core.async.__GT_t_cljs$core$async19955 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19955(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19956){
return (new cljs.core.async.t_cljs$core$async19955(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19956));
});

}

return (new cljs.core.async.t_cljs$core$async19955(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17200__auto___20119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20059){
var state_val_20060 = (state_20059[(1)]);
if((state_val_20060 === (7))){
var inst_19974 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20061_20120 = state_20059__$1;
(statearr_20061_20120[(2)] = inst_19974);

(statearr_20061_20120[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (20))){
var inst_19986 = (state_20059[(7)]);
var state_20059__$1 = state_20059;
var statearr_20062_20121 = state_20059__$1;
(statearr_20062_20121[(2)] = inst_19986);

(statearr_20062_20121[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (27))){
var state_20059__$1 = state_20059;
var statearr_20063_20122 = state_20059__$1;
(statearr_20063_20122[(2)] = null);

(statearr_20063_20122[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (1))){
var inst_19961 = (state_20059[(8)]);
var inst_19961__$1 = calc_state();
var inst_19963 = (inst_19961__$1 == null);
var inst_19964 = cljs.core.not(inst_19963);
var state_20059__$1 = (function (){var statearr_20064 = state_20059;
(statearr_20064[(8)] = inst_19961__$1);

return statearr_20064;
})();
if(inst_19964){
var statearr_20065_20123 = state_20059__$1;
(statearr_20065_20123[(1)] = (2));

} else {
var statearr_20066_20124 = state_20059__$1;
(statearr_20066_20124[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (24))){
var inst_20010 = (state_20059[(9)]);
var inst_20019 = (state_20059[(10)]);
var inst_20033 = (state_20059[(11)]);
var inst_20033__$1 = (inst_20010.cljs$core$IFn$_invoke$arity$1 ? inst_20010.cljs$core$IFn$_invoke$arity$1(inst_20019) : inst_20010.call(null,inst_20019));
var state_20059__$1 = (function (){var statearr_20067 = state_20059;
(statearr_20067[(11)] = inst_20033__$1);

return statearr_20067;
})();
if(cljs.core.truth_(inst_20033__$1)){
var statearr_20068_20125 = state_20059__$1;
(statearr_20068_20125[(1)] = (29));

} else {
var statearr_20069_20126 = state_20059__$1;
(statearr_20069_20126[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (4))){
var inst_19977 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_19977)){
var statearr_20070_20127 = state_20059__$1;
(statearr_20070_20127[(1)] = (8));

} else {
var statearr_20071_20128 = state_20059__$1;
(statearr_20071_20128[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (15))){
var inst_20004 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_20004)){
var statearr_20072_20129 = state_20059__$1;
(statearr_20072_20129[(1)] = (19));

} else {
var statearr_20073_20130 = state_20059__$1;
(statearr_20073_20130[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (21))){
var inst_20009 = (state_20059[(12)]);
var inst_20009__$1 = (state_20059[(2)]);
var inst_20010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20009__$1,cljs.core.cst$kw$solos);
var inst_20011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20009__$1,cljs.core.cst$kw$mutes);
var inst_20012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20009__$1,cljs.core.cst$kw$reads);
var state_20059__$1 = (function (){var statearr_20074 = state_20059;
(statearr_20074[(13)] = inst_20011);

(statearr_20074[(9)] = inst_20010);

(statearr_20074[(12)] = inst_20009__$1);

return statearr_20074;
})();
return cljs.core.async.ioc_alts_BANG_(state_20059__$1,(22),inst_20012);
} else {
if((state_val_20060 === (31))){
var inst_20041 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_20041)){
var statearr_20075_20131 = state_20059__$1;
(statearr_20075_20131[(1)] = (32));

} else {
var statearr_20076_20132 = state_20059__$1;
(statearr_20076_20132[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (32))){
var inst_20018 = (state_20059[(14)]);
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20059__$1,(35),out,inst_20018);
} else {
if((state_val_20060 === (33))){
var inst_20009 = (state_20059[(12)]);
var inst_19986 = inst_20009;
var state_20059__$1 = (function (){var statearr_20077 = state_20059;
(statearr_20077[(7)] = inst_19986);

return statearr_20077;
})();
var statearr_20078_20133 = state_20059__$1;
(statearr_20078_20133[(2)] = null);

(statearr_20078_20133[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (13))){
var inst_19986 = (state_20059[(7)]);
var inst_19993 = inst_19986.cljs$lang$protocol_mask$partition0$;
var inst_19994 = (inst_19993 & (64));
var inst_19995 = inst_19986.cljs$core$ISeq$;
var inst_19996 = (cljs.core.PROTOCOL_SENTINEL === inst_19995);
var inst_19997 = ((inst_19994) || (inst_19996));
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_19997)){
var statearr_20079_20134 = state_20059__$1;
(statearr_20079_20134[(1)] = (16));

} else {
var statearr_20080_20135 = state_20059__$1;
(statearr_20080_20135[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (22))){
var inst_20018 = (state_20059[(14)]);
var inst_20019 = (state_20059[(10)]);
var inst_20017 = (state_20059[(2)]);
var inst_20018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20017,(0),null);
var inst_20019__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20017,(1),null);
var inst_20020 = (inst_20018__$1 == null);
var inst_20021 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20019__$1,change);
var inst_20022 = ((inst_20020) || (inst_20021));
var state_20059__$1 = (function (){var statearr_20081 = state_20059;
(statearr_20081[(14)] = inst_20018__$1);

(statearr_20081[(10)] = inst_20019__$1);

return statearr_20081;
})();
if(cljs.core.truth_(inst_20022)){
var statearr_20082_20136 = state_20059__$1;
(statearr_20082_20136[(1)] = (23));

} else {
var statearr_20083_20137 = state_20059__$1;
(statearr_20083_20137[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (36))){
var inst_20009 = (state_20059[(12)]);
var inst_19986 = inst_20009;
var state_20059__$1 = (function (){var statearr_20084 = state_20059;
(statearr_20084[(7)] = inst_19986);

return statearr_20084;
})();
var statearr_20085_20138 = state_20059__$1;
(statearr_20085_20138[(2)] = null);

(statearr_20085_20138[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (29))){
var inst_20033 = (state_20059[(11)]);
var state_20059__$1 = state_20059;
var statearr_20086_20139 = state_20059__$1;
(statearr_20086_20139[(2)] = inst_20033);

(statearr_20086_20139[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (6))){
var state_20059__$1 = state_20059;
var statearr_20087_20140 = state_20059__$1;
(statearr_20087_20140[(2)] = false);

(statearr_20087_20140[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (28))){
var inst_20029 = (state_20059[(2)]);
var inst_20030 = calc_state();
var inst_19986 = inst_20030;
var state_20059__$1 = (function (){var statearr_20088 = state_20059;
(statearr_20088[(15)] = inst_20029);

(statearr_20088[(7)] = inst_19986);

return statearr_20088;
})();
var statearr_20089_20141 = state_20059__$1;
(statearr_20089_20141[(2)] = null);

(statearr_20089_20141[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (25))){
var inst_20055 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20090_20142 = state_20059__$1;
(statearr_20090_20142[(2)] = inst_20055);

(statearr_20090_20142[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (34))){
var inst_20053 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20091_20143 = state_20059__$1;
(statearr_20091_20143[(2)] = inst_20053);

(statearr_20091_20143[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (17))){
var state_20059__$1 = state_20059;
var statearr_20092_20144 = state_20059__$1;
(statearr_20092_20144[(2)] = false);

(statearr_20092_20144[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (3))){
var state_20059__$1 = state_20059;
var statearr_20093_20145 = state_20059__$1;
(statearr_20093_20145[(2)] = false);

(statearr_20093_20145[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (12))){
var inst_20057 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20059__$1,inst_20057);
} else {
if((state_val_20060 === (2))){
var inst_19961 = (state_20059[(8)]);
var inst_19966 = inst_19961.cljs$lang$protocol_mask$partition0$;
var inst_19967 = (inst_19966 & (64));
var inst_19968 = inst_19961.cljs$core$ISeq$;
var inst_19969 = (cljs.core.PROTOCOL_SENTINEL === inst_19968);
var inst_19970 = ((inst_19967) || (inst_19969));
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_19970)){
var statearr_20094_20146 = state_20059__$1;
(statearr_20094_20146[(1)] = (5));

} else {
var statearr_20095_20147 = state_20059__$1;
(statearr_20095_20147[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (23))){
var inst_20018 = (state_20059[(14)]);
var inst_20024 = (inst_20018 == null);
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_20024)){
var statearr_20096_20148 = state_20059__$1;
(statearr_20096_20148[(1)] = (26));

} else {
var statearr_20097_20149 = state_20059__$1;
(statearr_20097_20149[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (35))){
var inst_20044 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
if(cljs.core.truth_(inst_20044)){
var statearr_20098_20150 = state_20059__$1;
(statearr_20098_20150[(1)] = (36));

} else {
var statearr_20099_20151 = state_20059__$1;
(statearr_20099_20151[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (19))){
var inst_19986 = (state_20059[(7)]);
var inst_20006 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19986);
var state_20059__$1 = state_20059;
var statearr_20100_20152 = state_20059__$1;
(statearr_20100_20152[(2)] = inst_20006);

(statearr_20100_20152[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (11))){
var inst_19986 = (state_20059[(7)]);
var inst_19990 = (inst_19986 == null);
var inst_19991 = cljs.core.not(inst_19990);
var state_20059__$1 = state_20059;
if(inst_19991){
var statearr_20101_20153 = state_20059__$1;
(statearr_20101_20153[(1)] = (13));

} else {
var statearr_20102_20154 = state_20059__$1;
(statearr_20102_20154[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (9))){
var inst_19961 = (state_20059[(8)]);
var state_20059__$1 = state_20059;
var statearr_20103_20155 = state_20059__$1;
(statearr_20103_20155[(2)] = inst_19961);

(statearr_20103_20155[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (5))){
var state_20059__$1 = state_20059;
var statearr_20104_20156 = state_20059__$1;
(statearr_20104_20156[(2)] = true);

(statearr_20104_20156[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (14))){
var state_20059__$1 = state_20059;
var statearr_20105_20157 = state_20059__$1;
(statearr_20105_20157[(2)] = false);

(statearr_20105_20157[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (26))){
var inst_20019 = (state_20059[(10)]);
var inst_20026 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20019);
var state_20059__$1 = state_20059;
var statearr_20106_20158 = state_20059__$1;
(statearr_20106_20158[(2)] = inst_20026);

(statearr_20106_20158[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (16))){
var state_20059__$1 = state_20059;
var statearr_20107_20159 = state_20059__$1;
(statearr_20107_20159[(2)] = true);

(statearr_20107_20159[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (38))){
var inst_20049 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20108_20160 = state_20059__$1;
(statearr_20108_20160[(2)] = inst_20049);

(statearr_20108_20160[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (30))){
var inst_20011 = (state_20059[(13)]);
var inst_20010 = (state_20059[(9)]);
var inst_20019 = (state_20059[(10)]);
var inst_20036 = cljs.core.empty_QMARK_(inst_20010);
var inst_20037 = (inst_20011.cljs$core$IFn$_invoke$arity$1 ? inst_20011.cljs$core$IFn$_invoke$arity$1(inst_20019) : inst_20011.call(null,inst_20019));
var inst_20038 = cljs.core.not(inst_20037);
var inst_20039 = ((inst_20036) && (inst_20038));
var state_20059__$1 = state_20059;
var statearr_20109_20161 = state_20059__$1;
(statearr_20109_20161[(2)] = inst_20039);

(statearr_20109_20161[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (10))){
var inst_19961 = (state_20059[(8)]);
var inst_19982 = (state_20059[(2)]);
var inst_19983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19982,cljs.core.cst$kw$solos);
var inst_19984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19982,cljs.core.cst$kw$mutes);
var inst_19985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19982,cljs.core.cst$kw$reads);
var inst_19986 = inst_19961;
var state_20059__$1 = (function (){var statearr_20110 = state_20059;
(statearr_20110[(16)] = inst_19985);

(statearr_20110[(17)] = inst_19984);

(statearr_20110[(18)] = inst_19983);

(statearr_20110[(7)] = inst_19986);

return statearr_20110;
})();
var statearr_20111_20162 = state_20059__$1;
(statearr_20111_20162[(2)] = null);

(statearr_20111_20162[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (18))){
var inst_20001 = (state_20059[(2)]);
var state_20059__$1 = state_20059;
var statearr_20112_20163 = state_20059__$1;
(statearr_20112_20163[(2)] = inst_20001);

(statearr_20112_20163[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (37))){
var state_20059__$1 = state_20059;
var statearr_20113_20164 = state_20059__$1;
(statearr_20113_20164[(2)] = null);

(statearr_20113_20164[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20060 === (8))){
var inst_19961 = (state_20059[(8)]);
var inst_19979 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19961);
var state_20059__$1 = state_20059;
var statearr_20114_20165 = state_20059__$1;
(statearr_20114_20165[(2)] = inst_19979);

(statearr_20114_20165[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__17010__auto__ = null;
var cljs$core$async$mix_$_state_machine__17010__auto____0 = (function (){
var statearr_20115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20115[(0)] = cljs$core$async$mix_$_state_machine__17010__auto__);

(statearr_20115[(1)] = (1));

return statearr_20115;
});
var cljs$core$async$mix_$_state_machine__17010__auto____1 = (function (state_20059){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20059);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20116){if((e20116 instanceof Object)){
var ex__17013__auto__ = e20116;
var statearr_20117_20166 = state_20059;
(statearr_20117_20166[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20059);

return cljs.core.cst$kw$recur;
} else {
throw e20116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20167 = state_20059;
state_20059 = G__20167;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17010__auto__ = function(state_20059){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17010__auto____1.call(this,state_20059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17010__auto____0;
cljs$core$async$mix_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17010__auto____1;
return cljs$core$async$mix_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20118 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20118[(6)] = c__17200__auto___20119);

return statearr_20118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20169 = arguments.length;
switch (G__20169) {
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
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__20173 = arguments.length;
switch (G__20173) {
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
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__20171_SHARP_){
if(cljs.core.truth_((p1__20171_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20171_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20171_SHARP_.call(null,topic)))){
return p1__20171_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20171_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20174 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20175){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20175 = meta20175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20176,meta20175__$1){
var self__ = this;
var _20176__$1 = this;
return (new cljs.core.async.t_cljs$core$async20174(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20175__$1));
}));

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20176){
var self__ = this;
var _20176__$1 = this;
return self__.meta20175;
}));

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20174.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta20175], null);
}));

(cljs.core.async.t_cljs$core$async20174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20174");

(cljs.core.async.t_cljs$core$async20174.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async20174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20174.
 */
cljs.core.async.__GT_t_cljs$core$async20174 = (function cljs$core$async$__GT_t_cljs$core$async20174(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20175){
return (new cljs.core.async.t_cljs$core$async20174(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20175));
});

}

return (new cljs.core.async.t_cljs$core$async20174(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17200__auto___20294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20248){
var state_val_20249 = (state_20248[(1)]);
if((state_val_20249 === (7))){
var inst_20244 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20250_20295 = state_20248__$1;
(statearr_20250_20295[(2)] = inst_20244);

(statearr_20250_20295[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (20))){
var state_20248__$1 = state_20248;
var statearr_20251_20296 = state_20248__$1;
(statearr_20251_20296[(2)] = null);

(statearr_20251_20296[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (1))){
var state_20248__$1 = state_20248;
var statearr_20252_20297 = state_20248__$1;
(statearr_20252_20297[(2)] = null);

(statearr_20252_20297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (24))){
var inst_20227 = (state_20248[(7)]);
var inst_20236 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20227);
var state_20248__$1 = state_20248;
var statearr_20253_20298 = state_20248__$1;
(statearr_20253_20298[(2)] = inst_20236);

(statearr_20253_20298[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (4))){
var inst_20179 = (state_20248[(8)]);
var inst_20179__$1 = (state_20248[(2)]);
var inst_20180 = (inst_20179__$1 == null);
var state_20248__$1 = (function (){var statearr_20254 = state_20248;
(statearr_20254[(8)] = inst_20179__$1);

return statearr_20254;
})();
if(cljs.core.truth_(inst_20180)){
var statearr_20255_20299 = state_20248__$1;
(statearr_20255_20299[(1)] = (5));

} else {
var statearr_20256_20300 = state_20248__$1;
(statearr_20256_20300[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (15))){
var inst_20221 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20257_20301 = state_20248__$1;
(statearr_20257_20301[(2)] = inst_20221);

(statearr_20257_20301[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (21))){
var inst_20241 = (state_20248[(2)]);
var state_20248__$1 = (function (){var statearr_20258 = state_20248;
(statearr_20258[(9)] = inst_20241);

return statearr_20258;
})();
var statearr_20259_20302 = state_20248__$1;
(statearr_20259_20302[(2)] = null);

(statearr_20259_20302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (13))){
var inst_20203 = (state_20248[(10)]);
var inst_20205 = cljs.core.chunked_seq_QMARK_(inst_20203);
var state_20248__$1 = state_20248;
if(inst_20205){
var statearr_20260_20303 = state_20248__$1;
(statearr_20260_20303[(1)] = (16));

} else {
var statearr_20261_20304 = state_20248__$1;
(statearr_20261_20304[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (22))){
var inst_20233 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
if(cljs.core.truth_(inst_20233)){
var statearr_20262_20305 = state_20248__$1;
(statearr_20262_20305[(1)] = (23));

} else {
var statearr_20263_20306 = state_20248__$1;
(statearr_20263_20306[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (6))){
var inst_20229 = (state_20248[(11)]);
var inst_20227 = (state_20248[(7)]);
var inst_20179 = (state_20248[(8)]);
var inst_20227__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20179) : topic_fn.call(null,inst_20179));
var inst_20228 = cljs.core.deref(mults);
var inst_20229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20228,inst_20227__$1);
var state_20248__$1 = (function (){var statearr_20264 = state_20248;
(statearr_20264[(11)] = inst_20229__$1);

(statearr_20264[(7)] = inst_20227__$1);

return statearr_20264;
})();
if(cljs.core.truth_(inst_20229__$1)){
var statearr_20265_20307 = state_20248__$1;
(statearr_20265_20307[(1)] = (19));

} else {
var statearr_20266_20308 = state_20248__$1;
(statearr_20266_20308[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (25))){
var inst_20238 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20267_20309 = state_20248__$1;
(statearr_20267_20309[(2)] = inst_20238);

(statearr_20267_20309[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (17))){
var inst_20203 = (state_20248[(10)]);
var inst_20212 = cljs.core.first(inst_20203);
var inst_20213 = cljs.core.async.muxch_STAR_(inst_20212);
var inst_20214 = cljs.core.async.close_BANG_(inst_20213);
var inst_20215 = cljs.core.next(inst_20203);
var inst_20189 = inst_20215;
var inst_20190 = null;
var inst_20191 = (0);
var inst_20192 = (0);
var state_20248__$1 = (function (){var statearr_20268 = state_20248;
(statearr_20268[(12)] = inst_20192);

(statearr_20268[(13)] = inst_20191);

(statearr_20268[(14)] = inst_20189);

(statearr_20268[(15)] = inst_20190);

(statearr_20268[(16)] = inst_20214);

return statearr_20268;
})();
var statearr_20269_20310 = state_20248__$1;
(statearr_20269_20310[(2)] = null);

(statearr_20269_20310[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (3))){
var inst_20246 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20248__$1,inst_20246);
} else {
if((state_val_20249 === (12))){
var inst_20223 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20270_20311 = state_20248__$1;
(statearr_20270_20311[(2)] = inst_20223);

(statearr_20270_20311[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (2))){
var state_20248__$1 = state_20248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20248__$1,(4),ch);
} else {
if((state_val_20249 === (23))){
var state_20248__$1 = state_20248;
var statearr_20271_20312 = state_20248__$1;
(statearr_20271_20312[(2)] = null);

(statearr_20271_20312[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (19))){
var inst_20229 = (state_20248[(11)]);
var inst_20179 = (state_20248[(8)]);
var inst_20231 = cljs.core.async.muxch_STAR_(inst_20229);
var state_20248__$1 = state_20248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20248__$1,(22),inst_20231,inst_20179);
} else {
if((state_val_20249 === (11))){
var inst_20203 = (state_20248[(10)]);
var inst_20189 = (state_20248[(14)]);
var inst_20203__$1 = cljs.core.seq(inst_20189);
var state_20248__$1 = (function (){var statearr_20272 = state_20248;
(statearr_20272[(10)] = inst_20203__$1);

return statearr_20272;
})();
if(inst_20203__$1){
var statearr_20273_20313 = state_20248__$1;
(statearr_20273_20313[(1)] = (13));

} else {
var statearr_20274_20314 = state_20248__$1;
(statearr_20274_20314[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (9))){
var inst_20225 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20275_20315 = state_20248__$1;
(statearr_20275_20315[(2)] = inst_20225);

(statearr_20275_20315[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (5))){
var inst_20186 = cljs.core.deref(mults);
var inst_20187 = cljs.core.vals(inst_20186);
var inst_20188 = cljs.core.seq(inst_20187);
var inst_20189 = inst_20188;
var inst_20190 = null;
var inst_20191 = (0);
var inst_20192 = (0);
var state_20248__$1 = (function (){var statearr_20276 = state_20248;
(statearr_20276[(12)] = inst_20192);

(statearr_20276[(13)] = inst_20191);

(statearr_20276[(14)] = inst_20189);

(statearr_20276[(15)] = inst_20190);

return statearr_20276;
})();
var statearr_20277_20316 = state_20248__$1;
(statearr_20277_20316[(2)] = null);

(statearr_20277_20316[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (14))){
var state_20248__$1 = state_20248;
var statearr_20281_20317 = state_20248__$1;
(statearr_20281_20317[(2)] = null);

(statearr_20281_20317[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (16))){
var inst_20203 = (state_20248[(10)]);
var inst_20207 = cljs.core.chunk_first(inst_20203);
var inst_20208 = cljs.core.chunk_rest(inst_20203);
var inst_20209 = cljs.core.count(inst_20207);
var inst_20189 = inst_20208;
var inst_20190 = inst_20207;
var inst_20191 = inst_20209;
var inst_20192 = (0);
var state_20248__$1 = (function (){var statearr_20282 = state_20248;
(statearr_20282[(12)] = inst_20192);

(statearr_20282[(13)] = inst_20191);

(statearr_20282[(14)] = inst_20189);

(statearr_20282[(15)] = inst_20190);

return statearr_20282;
})();
var statearr_20283_20318 = state_20248__$1;
(statearr_20283_20318[(2)] = null);

(statearr_20283_20318[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (10))){
var inst_20192 = (state_20248[(12)]);
var inst_20191 = (state_20248[(13)]);
var inst_20189 = (state_20248[(14)]);
var inst_20190 = (state_20248[(15)]);
var inst_20197 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20190,inst_20192);
var inst_20198 = cljs.core.async.muxch_STAR_(inst_20197);
var inst_20199 = cljs.core.async.close_BANG_(inst_20198);
var inst_20200 = (inst_20192 + (1));
var tmp20278 = inst_20191;
var tmp20279 = inst_20189;
var tmp20280 = inst_20190;
var inst_20189__$1 = tmp20279;
var inst_20190__$1 = tmp20280;
var inst_20191__$1 = tmp20278;
var inst_20192__$1 = inst_20200;
var state_20248__$1 = (function (){var statearr_20284 = state_20248;
(statearr_20284[(17)] = inst_20199);

(statearr_20284[(12)] = inst_20192__$1);

(statearr_20284[(13)] = inst_20191__$1);

(statearr_20284[(14)] = inst_20189__$1);

(statearr_20284[(15)] = inst_20190__$1);

return statearr_20284;
})();
var statearr_20285_20319 = state_20248__$1;
(statearr_20285_20319[(2)] = null);

(statearr_20285_20319[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (18))){
var inst_20218 = (state_20248[(2)]);
var state_20248__$1 = state_20248;
var statearr_20286_20320 = state_20248__$1;
(statearr_20286_20320[(2)] = inst_20218);

(statearr_20286_20320[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20249 === (8))){
var inst_20192 = (state_20248[(12)]);
var inst_20191 = (state_20248[(13)]);
var inst_20194 = (inst_20192 < inst_20191);
var inst_20195 = inst_20194;
var state_20248__$1 = state_20248;
if(cljs.core.truth_(inst_20195)){
var statearr_20287_20321 = state_20248__$1;
(statearr_20287_20321[(1)] = (10));

} else {
var statearr_20288_20322 = state_20248__$1;
(statearr_20288_20322[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20289[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20289[(1)] = (1));

return statearr_20289;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20248){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20248);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20290){if((e20290 instanceof Object)){
var ex__17013__auto__ = e20290;
var statearr_20291_20323 = state_20248;
(statearr_20291_20323[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20248);

return cljs.core.cst$kw$recur;
} else {
throw e20290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20324 = state_20248;
state_20248 = G__20324;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20292 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20292[(6)] = c__17200__auto___20294);

return statearr_20292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
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
var G__20326 = arguments.length;
switch (G__20326) {
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
var G__20329 = arguments.length;
switch (G__20329) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__20332 = arguments.length;
switch (G__20332) {
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
var c__17200__auto___20399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20371){
var state_val_20372 = (state_20371[(1)]);
if((state_val_20372 === (7))){
var state_20371__$1 = state_20371;
var statearr_20373_20400 = state_20371__$1;
(statearr_20373_20400[(2)] = null);

(statearr_20373_20400[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (1))){
var state_20371__$1 = state_20371;
var statearr_20374_20401 = state_20371__$1;
(statearr_20374_20401[(2)] = null);

(statearr_20374_20401[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (4))){
var inst_20335 = (state_20371[(7)]);
var inst_20337 = (inst_20335 < cnt);
var state_20371__$1 = state_20371;
if(cljs.core.truth_(inst_20337)){
var statearr_20375_20402 = state_20371__$1;
(statearr_20375_20402[(1)] = (6));

} else {
var statearr_20376_20403 = state_20371__$1;
(statearr_20376_20403[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (15))){
var inst_20367 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20377_20404 = state_20371__$1;
(statearr_20377_20404[(2)] = inst_20367);

(statearr_20377_20404[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (13))){
var inst_20360 = cljs.core.async.close_BANG_(out);
var state_20371__$1 = state_20371;
var statearr_20378_20405 = state_20371__$1;
(statearr_20378_20405[(2)] = inst_20360);

(statearr_20378_20405[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (6))){
var state_20371__$1 = state_20371;
var statearr_20379_20406 = state_20371__$1;
(statearr_20379_20406[(2)] = null);

(statearr_20379_20406[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (3))){
var inst_20369 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20371__$1,inst_20369);
} else {
if((state_val_20372 === (12))){
var inst_20357 = (state_20371[(8)]);
var inst_20357__$1 = (state_20371[(2)]);
var inst_20358 = cljs.core.some(cljs.core.nil_QMARK_,inst_20357__$1);
var state_20371__$1 = (function (){var statearr_20380 = state_20371;
(statearr_20380[(8)] = inst_20357__$1);

return statearr_20380;
})();
if(cljs.core.truth_(inst_20358)){
var statearr_20381_20407 = state_20371__$1;
(statearr_20381_20407[(1)] = (13));

} else {
var statearr_20382_20408 = state_20371__$1;
(statearr_20382_20408[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (2))){
var inst_20334 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20335 = (0);
var state_20371__$1 = (function (){var statearr_20383 = state_20371;
(statearr_20383[(7)] = inst_20335);

(statearr_20383[(9)] = inst_20334);

return statearr_20383;
})();
var statearr_20384_20409 = state_20371__$1;
(statearr_20384_20409[(2)] = null);

(statearr_20384_20409[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (11))){
var inst_20335 = (state_20371[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20371,(10),Object,null,(9));
var inst_20344 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20335) : chs__$1.call(null,inst_20335));
var inst_20345 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20335) : done.call(null,inst_20335));
var inst_20346 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20344,inst_20345);
var state_20371__$1 = state_20371;
var statearr_20385_20410 = state_20371__$1;
(statearr_20385_20410[(2)] = inst_20346);


cljs.core.async.impl.ioc_helpers.process_exception(state_20371__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (9))){
var inst_20335 = (state_20371[(7)]);
var inst_20348 = (state_20371[(2)]);
var inst_20349 = (inst_20335 + (1));
var inst_20335__$1 = inst_20349;
var state_20371__$1 = (function (){var statearr_20386 = state_20371;
(statearr_20386[(10)] = inst_20348);

(statearr_20386[(7)] = inst_20335__$1);

return statearr_20386;
})();
var statearr_20387_20411 = state_20371__$1;
(statearr_20387_20411[(2)] = null);

(statearr_20387_20411[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (5))){
var inst_20355 = (state_20371[(2)]);
var state_20371__$1 = (function (){var statearr_20388 = state_20371;
(statearr_20388[(11)] = inst_20355);

return statearr_20388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20371__$1,(12),dchan);
} else {
if((state_val_20372 === (14))){
var inst_20357 = (state_20371[(8)]);
var inst_20362 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20357);
var state_20371__$1 = state_20371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20371__$1,(16),out,inst_20362);
} else {
if((state_val_20372 === (16))){
var inst_20364 = (state_20371[(2)]);
var state_20371__$1 = (function (){var statearr_20389 = state_20371;
(statearr_20389[(12)] = inst_20364);

return statearr_20389;
})();
var statearr_20390_20412 = state_20371__$1;
(statearr_20390_20412[(2)] = null);

(statearr_20390_20412[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (10))){
var inst_20339 = (state_20371[(2)]);
var inst_20340 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20371__$1 = (function (){var statearr_20391 = state_20371;
(statearr_20391[(13)] = inst_20339);

return statearr_20391;
})();
var statearr_20392_20413 = state_20371__$1;
(statearr_20392_20413[(2)] = inst_20340);


cljs.core.async.impl.ioc_helpers.process_exception(state_20371__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20372 === (8))){
var inst_20353 = (state_20371[(2)]);
var state_20371__$1 = state_20371;
var statearr_20393_20414 = state_20371__$1;
(statearr_20393_20414[(2)] = inst_20353);

(statearr_20393_20414[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20394[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20394[(1)] = (1));

return statearr_20394;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20371){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20371);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20395){if((e20395 instanceof Object)){
var ex__17013__auto__ = e20395;
var statearr_20396_20415 = state_20371;
(statearr_20396_20415[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20371);

return cljs.core.cst$kw$recur;
} else {
throw e20395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20416 = state_20371;
state_20371 = G__20416;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20397 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20397[(6)] = c__17200__auto___20399);

return statearr_20397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


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
var G__20419 = arguments.length;
switch (G__20419) {
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
var c__17200__auto___20473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20451){
var state_val_20452 = (state_20451[(1)]);
if((state_val_20452 === (7))){
var inst_20430 = (state_20451[(7)]);
var inst_20431 = (state_20451[(8)]);
var inst_20430__$1 = (state_20451[(2)]);
var inst_20431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20430__$1,(0),null);
var inst_20432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20430__$1,(1),null);
var inst_20433 = (inst_20431__$1 == null);
var state_20451__$1 = (function (){var statearr_20453 = state_20451;
(statearr_20453[(7)] = inst_20430__$1);

(statearr_20453[(8)] = inst_20431__$1);

(statearr_20453[(9)] = inst_20432);

return statearr_20453;
})();
if(cljs.core.truth_(inst_20433)){
var statearr_20454_20474 = state_20451__$1;
(statearr_20454_20474[(1)] = (8));

} else {
var statearr_20455_20475 = state_20451__$1;
(statearr_20455_20475[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20452 === (1))){
var inst_20420 = cljs.core.vec(chs);
var inst_20421 = inst_20420;
var state_20451__$1 = (function (){var statearr_20456 = state_20451;
(statearr_20456[(10)] = inst_20421);

return statearr_20456;
})();
var statearr_20457_20476 = state_20451__$1;
(statearr_20457_20476[(2)] = null);

(statearr_20457_20476[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20452 === (4))){
var inst_20421 = (state_20451[(10)]);
var state_20451__$1 = state_20451;
return cljs.core.async.ioc_alts_BANG_(state_20451__$1,(7),inst_20421);
} else {
if((state_val_20452 === (6))){
var inst_20447 = (state_20451[(2)]);
var state_20451__$1 = state_20451;
var statearr_20458_20477 = state_20451__$1;
(statearr_20458_20477[(2)] = inst_20447);

(statearr_20458_20477[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20452 === (3))){
var inst_20449 = (state_20451[(2)]);
var state_20451__$1 = state_20451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20451__$1,inst_20449);
} else {
if((state_val_20452 === (2))){
var inst_20421 = (state_20451[(10)]);
var inst_20423 = cljs.core.count(inst_20421);
var inst_20424 = (inst_20423 > (0));
var state_20451__$1 = state_20451;
if(cljs.core.truth_(inst_20424)){
var statearr_20460_20478 = state_20451__$1;
(statearr_20460_20478[(1)] = (4));

} else {
var statearr_20461_20479 = state_20451__$1;
(statearr_20461_20479[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20452 === (11))){
var inst_20421 = (state_20451[(10)]);
var inst_20440 = (state_20451[(2)]);
var tmp20459 = inst_20421;
var inst_20421__$1 = tmp20459;
var state_20451__$1 = (function (){var statearr_20462 = state_20451;
(statearr_20462[(10)] = inst_20421__$1);

(statearr_20462[(11)] = inst_20440);

return statearr_20462;
})();
var statearr_20463_20480 = state_20451__$1;
(statearr_20463_20480[(2)] = null);

(statearr_20463_20480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20452 === (9))){
var inst_20431 = (state_20451[(8)]);
var state_20451__$1 = state_20451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20451__$1,(11),out,inst_20431);
} else {
if((state_val_20452 === (5))){
var inst_20445 = cljs.core.async.close_BANG_(out);
var state_20451__$1 = state_20451;
var statearr_20464_20481 = state_20451__$1;
(statearr_20464_20481[(2)] = inst_20445);

(statearr_20464_20481[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20452 === (10))){
var inst_20443 = (state_20451[(2)]);
var state_20451__$1 = state_20451;
var statearr_20465_20482 = state_20451__$1;
(statearr_20465_20482[(2)] = inst_20443);

(statearr_20465_20482[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20452 === (8))){
var inst_20430 = (state_20451[(7)]);
var inst_20421 = (state_20451[(10)]);
var inst_20431 = (state_20451[(8)]);
var inst_20432 = (state_20451[(9)]);
var inst_20435 = (function (){var cs = inst_20421;
var vec__20426 = inst_20430;
var v = inst_20431;
var c = inst_20432;
return (function (p1__20417_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20417_SHARP_);
});
})();
var inst_20436 = cljs.core.filterv(inst_20435,inst_20421);
var inst_20421__$1 = inst_20436;
var state_20451__$1 = (function (){var statearr_20466 = state_20451;
(statearr_20466[(10)] = inst_20421__$1);

return statearr_20466;
})();
var statearr_20467_20483 = state_20451__$1;
(statearr_20467_20483[(2)] = null);

(statearr_20467_20483[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20468 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20468[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20468[(1)] = (1));

return statearr_20468;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20451){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20451);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20469){if((e20469 instanceof Object)){
var ex__17013__auto__ = e20469;
var statearr_20470_20484 = state_20451;
(statearr_20470_20484[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20451);

return cljs.core.cst$kw$recur;
} else {
throw e20469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20485 = state_20451;
state_20451 = G__20485;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20471 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20471[(6)] = c__17200__auto___20473);

return statearr_20471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
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
var G__20487 = arguments.length;
switch (G__20487) {
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
var c__17200__auto___20532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20511){
var state_val_20512 = (state_20511[(1)]);
if((state_val_20512 === (7))){
var inst_20493 = (state_20511[(7)]);
var inst_20493__$1 = (state_20511[(2)]);
var inst_20494 = (inst_20493__$1 == null);
var inst_20495 = cljs.core.not(inst_20494);
var state_20511__$1 = (function (){var statearr_20513 = state_20511;
(statearr_20513[(7)] = inst_20493__$1);

return statearr_20513;
})();
if(inst_20495){
var statearr_20514_20533 = state_20511__$1;
(statearr_20514_20533[(1)] = (8));

} else {
var statearr_20515_20534 = state_20511__$1;
(statearr_20515_20534[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (1))){
var inst_20488 = (0);
var state_20511__$1 = (function (){var statearr_20516 = state_20511;
(statearr_20516[(8)] = inst_20488);

return statearr_20516;
})();
var statearr_20517_20535 = state_20511__$1;
(statearr_20517_20535[(2)] = null);

(statearr_20517_20535[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (4))){
var state_20511__$1 = state_20511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20511__$1,(7),ch);
} else {
if((state_val_20512 === (6))){
var inst_20506 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
var statearr_20518_20536 = state_20511__$1;
(statearr_20518_20536[(2)] = inst_20506);

(statearr_20518_20536[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (3))){
var inst_20508 = (state_20511[(2)]);
var inst_20509 = cljs.core.async.close_BANG_(out);
var state_20511__$1 = (function (){var statearr_20519 = state_20511;
(statearr_20519[(9)] = inst_20508);

return statearr_20519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20511__$1,inst_20509);
} else {
if((state_val_20512 === (2))){
var inst_20488 = (state_20511[(8)]);
var inst_20490 = (inst_20488 < n);
var state_20511__$1 = state_20511;
if(cljs.core.truth_(inst_20490)){
var statearr_20520_20537 = state_20511__$1;
(statearr_20520_20537[(1)] = (4));

} else {
var statearr_20521_20538 = state_20511__$1;
(statearr_20521_20538[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (11))){
var inst_20488 = (state_20511[(8)]);
var inst_20498 = (state_20511[(2)]);
var inst_20499 = (inst_20488 + (1));
var inst_20488__$1 = inst_20499;
var state_20511__$1 = (function (){var statearr_20522 = state_20511;
(statearr_20522[(10)] = inst_20498);

(statearr_20522[(8)] = inst_20488__$1);

return statearr_20522;
})();
var statearr_20523_20539 = state_20511__$1;
(statearr_20523_20539[(2)] = null);

(statearr_20523_20539[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (9))){
var state_20511__$1 = state_20511;
var statearr_20524_20540 = state_20511__$1;
(statearr_20524_20540[(2)] = null);

(statearr_20524_20540[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (5))){
var state_20511__$1 = state_20511;
var statearr_20525_20541 = state_20511__$1;
(statearr_20525_20541[(2)] = null);

(statearr_20525_20541[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (10))){
var inst_20503 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
var statearr_20526_20542 = state_20511__$1;
(statearr_20526_20542[(2)] = inst_20503);

(statearr_20526_20542[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20512 === (8))){
var inst_20493 = (state_20511[(7)]);
var state_20511__$1 = state_20511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20511__$1,(11),out,inst_20493);
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20527[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20527[(1)] = (1));

return statearr_20527;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20511){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20511);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20528){if((e20528 instanceof Object)){
var ex__17013__auto__ = e20528;
var statearr_20529_20543 = state_20511;
(statearr_20529_20543[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20511);

return cljs.core.cst$kw$recur;
} else {
throw e20528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20544 = state_20511;
state_20511 = G__20544;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20530 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20530[(6)] = c__17200__auto___20532);

return statearr_20530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20546 = (function (f,ch,meta20547){
this.f = f;
this.ch = ch;
this.meta20547 = meta20547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20548,meta20547__$1){
var self__ = this;
var _20548__$1 = this;
return (new cljs.core.async.t_cljs$core$async20546(self__.f,self__.ch,meta20547__$1));
}));

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20548){
var self__ = this;
var _20548__$1 = this;
return self__.meta20547;
}));

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20549 = (function (f,ch,meta20547,_,fn1,meta20550){
this.f = f;
this.ch = ch;
this.meta20547 = meta20547;
this._ = _;
this.fn1 = fn1;
this.meta20550 = meta20550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20551,meta20550__$1){
var self__ = this;
var _20551__$1 = this;
return (new cljs.core.async.t_cljs$core$async20549(self__.f,self__.ch,self__.meta20547,self__._,self__.fn1,meta20550__$1));
}));

(cljs.core.async.t_cljs$core$async20549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20551){
var self__ = this;
var _20551__$1 = this;
return self__.meta20550;
}));

(cljs.core.async.t_cljs$core$async20549.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20545_SHARP_){
var G__20552 = (((p1__20545_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20545_SHARP_) : self__.f.call(null,p1__20545_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20552) : f1.call(null,G__20552));
});
}));

(cljs.core.async.t_cljs$core$async20549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20547,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async20546], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta20550], null);
}));

(cljs.core.async.t_cljs$core$async20549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20549");

(cljs.core.async.t_cljs$core$async20549.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async20549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20549.
 */
cljs.core.async.__GT_t_cljs$core$async20549 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20549(f__$1,ch__$1,meta20547__$1,___$2,fn1__$1,meta20550){
return (new cljs.core.async.t_cljs$core$async20549(f__$1,ch__$1,meta20547__$1,___$2,fn1__$1,meta20550));
});

}

return (new cljs.core.async.t_cljs$core$async20549(self__.f,self__.ch,self__.meta20547,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20553 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20553) : self__.f.call(null,G__20553));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20547], null);
}));

(cljs.core.async.t_cljs$core$async20546.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20546");

(cljs.core.async.t_cljs$core$async20546.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async20546");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20546.
 */
cljs.core.async.__GT_t_cljs$core$async20546 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20546(f__$1,ch__$1,meta20547){
return (new cljs.core.async.t_cljs$core$async20546(f__$1,ch__$1,meta20547));
});

}

return (new cljs.core.async.t_cljs$core$async20546(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20554 = (function (f,ch,meta20555){
this.f = f;
this.ch = ch;
this.meta20555 = meta20555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20556,meta20555__$1){
var self__ = this;
var _20556__$1 = this;
return (new cljs.core.async.t_cljs$core$async20554(self__.f,self__.ch,meta20555__$1));
}));

(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20556){
var self__ = this;
var _20556__$1 = this;
return self__.meta20555;
}));

(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20555], null);
}));

(cljs.core.async.t_cljs$core$async20554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20554");

(cljs.core.async.t_cljs$core$async20554.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async20554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20554.
 */
cljs.core.async.__GT_t_cljs$core$async20554 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20554(f__$1,ch__$1,meta20555){
return (new cljs.core.async.t_cljs$core$async20554(f__$1,ch__$1,meta20555));
});

}

return (new cljs.core.async.t_cljs$core$async20554(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20557 = (function (p,ch,meta20558){
this.p = p;
this.ch = ch;
this.meta20558 = meta20558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20559,meta20558__$1){
var self__ = this;
var _20559__$1 = this;
return (new cljs.core.async.t_cljs$core$async20557(self__.p,self__.ch,meta20558__$1));
}));

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20559){
var self__ = this;
var _20559__$1 = this;
return self__.meta20558;
}));

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20558], null);
}));

(cljs.core.async.t_cljs$core$async20557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20557");

(cljs.core.async.t_cljs$core$async20557.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async20557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20557.
 */
cljs.core.async.__GT_t_cljs$core$async20557 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20557(p__$1,ch__$1,meta20558){
return (new cljs.core.async.t_cljs$core$async20557(p__$1,ch__$1,meta20558));
});

}

return (new cljs.core.async.t_cljs$core$async20557(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20561 = arguments.length;
switch (G__20561) {
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
var c__17200__auto___20601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20582){
var state_val_20583 = (state_20582[(1)]);
if((state_val_20583 === (7))){
var inst_20578 = (state_20582[(2)]);
var state_20582__$1 = state_20582;
var statearr_20584_20602 = state_20582__$1;
(statearr_20584_20602[(2)] = inst_20578);

(statearr_20584_20602[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (1))){
var state_20582__$1 = state_20582;
var statearr_20585_20603 = state_20582__$1;
(statearr_20585_20603[(2)] = null);

(statearr_20585_20603[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (4))){
var inst_20564 = (state_20582[(7)]);
var inst_20564__$1 = (state_20582[(2)]);
var inst_20565 = (inst_20564__$1 == null);
var state_20582__$1 = (function (){var statearr_20586 = state_20582;
(statearr_20586[(7)] = inst_20564__$1);

return statearr_20586;
})();
if(cljs.core.truth_(inst_20565)){
var statearr_20587_20604 = state_20582__$1;
(statearr_20587_20604[(1)] = (5));

} else {
var statearr_20588_20605 = state_20582__$1;
(statearr_20588_20605[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (6))){
var inst_20564 = (state_20582[(7)]);
var inst_20569 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20564) : p.call(null,inst_20564));
var state_20582__$1 = state_20582;
if(cljs.core.truth_(inst_20569)){
var statearr_20589_20606 = state_20582__$1;
(statearr_20589_20606[(1)] = (8));

} else {
var statearr_20590_20607 = state_20582__$1;
(statearr_20590_20607[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (3))){
var inst_20580 = (state_20582[(2)]);
var state_20582__$1 = state_20582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20582__$1,inst_20580);
} else {
if((state_val_20583 === (2))){
var state_20582__$1 = state_20582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20582__$1,(4),ch);
} else {
if((state_val_20583 === (11))){
var inst_20572 = (state_20582[(2)]);
var state_20582__$1 = state_20582;
var statearr_20591_20608 = state_20582__$1;
(statearr_20591_20608[(2)] = inst_20572);

(statearr_20591_20608[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (9))){
var state_20582__$1 = state_20582;
var statearr_20592_20609 = state_20582__$1;
(statearr_20592_20609[(2)] = null);

(statearr_20592_20609[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (5))){
var inst_20567 = cljs.core.async.close_BANG_(out);
var state_20582__$1 = state_20582;
var statearr_20593_20610 = state_20582__$1;
(statearr_20593_20610[(2)] = inst_20567);

(statearr_20593_20610[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (10))){
var inst_20575 = (state_20582[(2)]);
var state_20582__$1 = (function (){var statearr_20594 = state_20582;
(statearr_20594[(8)] = inst_20575);

return statearr_20594;
})();
var statearr_20595_20611 = state_20582__$1;
(statearr_20595_20611[(2)] = null);

(statearr_20595_20611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20583 === (8))){
var inst_20564 = (state_20582[(7)]);
var state_20582__$1 = state_20582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20582__$1,(11),out,inst_20564);
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20596 = [null,null,null,null,null,null,null,null,null];
(statearr_20596[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20596[(1)] = (1));

return statearr_20596;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20582){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20582);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20597){if((e20597 instanceof Object)){
var ex__17013__auto__ = e20597;
var statearr_20598_20612 = state_20582;
(statearr_20598_20612[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20582);

return cljs.core.cst$kw$recur;
} else {
throw e20597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20613 = state_20582;
state_20582 = G__20613;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20599 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20599[(6)] = c__17200__auto___20601);

return statearr_20599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20615 = arguments.length;
switch (G__20615) {
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
var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20678){
var state_val_20679 = (state_20678[(1)]);
if((state_val_20679 === (7))){
var inst_20674 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20680_20718 = state_20678__$1;
(statearr_20680_20718[(2)] = inst_20674);

(statearr_20680_20718[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (20))){
var inst_20644 = (state_20678[(7)]);
var inst_20655 = (state_20678[(2)]);
var inst_20656 = cljs.core.next(inst_20644);
var inst_20630 = inst_20656;
var inst_20631 = null;
var inst_20632 = (0);
var inst_20633 = (0);
var state_20678__$1 = (function (){var statearr_20681 = state_20678;
(statearr_20681[(8)] = inst_20631);

(statearr_20681[(9)] = inst_20632);

(statearr_20681[(10)] = inst_20633);

(statearr_20681[(11)] = inst_20655);

(statearr_20681[(12)] = inst_20630);

return statearr_20681;
})();
var statearr_20682_20719 = state_20678__$1;
(statearr_20682_20719[(2)] = null);

(statearr_20682_20719[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (1))){
var state_20678__$1 = state_20678;
var statearr_20683_20720 = state_20678__$1;
(statearr_20683_20720[(2)] = null);

(statearr_20683_20720[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (4))){
var inst_20619 = (state_20678[(13)]);
var inst_20619__$1 = (state_20678[(2)]);
var inst_20620 = (inst_20619__$1 == null);
var state_20678__$1 = (function (){var statearr_20684 = state_20678;
(statearr_20684[(13)] = inst_20619__$1);

return statearr_20684;
})();
if(cljs.core.truth_(inst_20620)){
var statearr_20685_20721 = state_20678__$1;
(statearr_20685_20721[(1)] = (5));

} else {
var statearr_20686_20722 = state_20678__$1;
(statearr_20686_20722[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (15))){
var state_20678__$1 = state_20678;
var statearr_20690_20723 = state_20678__$1;
(statearr_20690_20723[(2)] = null);

(statearr_20690_20723[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (21))){
var state_20678__$1 = state_20678;
var statearr_20691_20724 = state_20678__$1;
(statearr_20691_20724[(2)] = null);

(statearr_20691_20724[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (13))){
var inst_20631 = (state_20678[(8)]);
var inst_20632 = (state_20678[(9)]);
var inst_20633 = (state_20678[(10)]);
var inst_20630 = (state_20678[(12)]);
var inst_20640 = (state_20678[(2)]);
var inst_20641 = (inst_20633 + (1));
var tmp20687 = inst_20631;
var tmp20688 = inst_20632;
var tmp20689 = inst_20630;
var inst_20630__$1 = tmp20689;
var inst_20631__$1 = tmp20687;
var inst_20632__$1 = tmp20688;
var inst_20633__$1 = inst_20641;
var state_20678__$1 = (function (){var statearr_20692 = state_20678;
(statearr_20692[(8)] = inst_20631__$1);

(statearr_20692[(9)] = inst_20632__$1);

(statearr_20692[(10)] = inst_20633__$1);

(statearr_20692[(12)] = inst_20630__$1);

(statearr_20692[(14)] = inst_20640);

return statearr_20692;
})();
var statearr_20693_20725 = state_20678__$1;
(statearr_20693_20725[(2)] = null);

(statearr_20693_20725[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (22))){
var state_20678__$1 = state_20678;
var statearr_20694_20726 = state_20678__$1;
(statearr_20694_20726[(2)] = null);

(statearr_20694_20726[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (6))){
var inst_20619 = (state_20678[(13)]);
var inst_20628 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20619) : f.call(null,inst_20619));
var inst_20629 = cljs.core.seq(inst_20628);
var inst_20630 = inst_20629;
var inst_20631 = null;
var inst_20632 = (0);
var inst_20633 = (0);
var state_20678__$1 = (function (){var statearr_20695 = state_20678;
(statearr_20695[(8)] = inst_20631);

(statearr_20695[(9)] = inst_20632);

(statearr_20695[(10)] = inst_20633);

(statearr_20695[(12)] = inst_20630);

return statearr_20695;
})();
var statearr_20696_20727 = state_20678__$1;
(statearr_20696_20727[(2)] = null);

(statearr_20696_20727[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (17))){
var inst_20644 = (state_20678[(7)]);
var inst_20648 = cljs.core.chunk_first(inst_20644);
var inst_20649 = cljs.core.chunk_rest(inst_20644);
var inst_20650 = cljs.core.count(inst_20648);
var inst_20630 = inst_20649;
var inst_20631 = inst_20648;
var inst_20632 = inst_20650;
var inst_20633 = (0);
var state_20678__$1 = (function (){var statearr_20697 = state_20678;
(statearr_20697[(8)] = inst_20631);

(statearr_20697[(9)] = inst_20632);

(statearr_20697[(10)] = inst_20633);

(statearr_20697[(12)] = inst_20630);

return statearr_20697;
})();
var statearr_20698_20728 = state_20678__$1;
(statearr_20698_20728[(2)] = null);

(statearr_20698_20728[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (3))){
var inst_20676 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20678__$1,inst_20676);
} else {
if((state_val_20679 === (12))){
var inst_20664 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20699_20729 = state_20678__$1;
(statearr_20699_20729[(2)] = inst_20664);

(statearr_20699_20729[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (2))){
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20678__$1,(4),in$);
} else {
if((state_val_20679 === (23))){
var inst_20672 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20700_20730 = state_20678__$1;
(statearr_20700_20730[(2)] = inst_20672);

(statearr_20700_20730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (19))){
var inst_20659 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20701_20731 = state_20678__$1;
(statearr_20701_20731[(2)] = inst_20659);

(statearr_20701_20731[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (11))){
var inst_20630 = (state_20678[(12)]);
var inst_20644 = (state_20678[(7)]);
var inst_20644__$1 = cljs.core.seq(inst_20630);
var state_20678__$1 = (function (){var statearr_20702 = state_20678;
(statearr_20702[(7)] = inst_20644__$1);

return statearr_20702;
})();
if(inst_20644__$1){
var statearr_20703_20732 = state_20678__$1;
(statearr_20703_20732[(1)] = (14));

} else {
var statearr_20704_20733 = state_20678__$1;
(statearr_20704_20733[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (9))){
var inst_20666 = (state_20678[(2)]);
var inst_20667 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20678__$1 = (function (){var statearr_20705 = state_20678;
(statearr_20705[(15)] = inst_20666);

return statearr_20705;
})();
if(cljs.core.truth_(inst_20667)){
var statearr_20706_20734 = state_20678__$1;
(statearr_20706_20734[(1)] = (21));

} else {
var statearr_20707_20735 = state_20678__$1;
(statearr_20707_20735[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (5))){
var inst_20622 = cljs.core.async.close_BANG_(out);
var state_20678__$1 = state_20678;
var statearr_20708_20736 = state_20678__$1;
(statearr_20708_20736[(2)] = inst_20622);

(statearr_20708_20736[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (14))){
var inst_20644 = (state_20678[(7)]);
var inst_20646 = cljs.core.chunked_seq_QMARK_(inst_20644);
var state_20678__$1 = state_20678;
if(inst_20646){
var statearr_20709_20737 = state_20678__$1;
(statearr_20709_20737[(1)] = (17));

} else {
var statearr_20710_20738 = state_20678__$1;
(statearr_20710_20738[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (16))){
var inst_20662 = (state_20678[(2)]);
var state_20678__$1 = state_20678;
var statearr_20711_20739 = state_20678__$1;
(statearr_20711_20739[(2)] = inst_20662);

(statearr_20711_20739[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20679 === (10))){
var inst_20631 = (state_20678[(8)]);
var inst_20633 = (state_20678[(10)]);
var inst_20638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20631,inst_20633);
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20678__$1,(13),out,inst_20638);
} else {
if((state_val_20679 === (18))){
var inst_20644 = (state_20678[(7)]);
var inst_20653 = cljs.core.first(inst_20644);
var state_20678__$1 = state_20678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20678__$1,(20),out,inst_20653);
} else {
if((state_val_20679 === (8))){
var inst_20632 = (state_20678[(9)]);
var inst_20633 = (state_20678[(10)]);
var inst_20635 = (inst_20633 < inst_20632);
var inst_20636 = inst_20635;
var state_20678__$1 = state_20678;
if(cljs.core.truth_(inst_20636)){
var statearr_20712_20740 = state_20678__$1;
(statearr_20712_20740[(1)] = (10));

} else {
var statearr_20713_20741 = state_20678__$1;
(statearr_20713_20741[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__17010__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17010__auto____0 = (function (){
var statearr_20714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20714[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17010__auto__);

(statearr_20714[(1)] = (1));

return statearr_20714;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17010__auto____1 = (function (state_20678){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20678);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20715){if((e20715 instanceof Object)){
var ex__17013__auto__ = e20715;
var statearr_20716_20742 = state_20678;
(statearr_20716_20742[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20678);

return cljs.core.cst$kw$recur;
} else {
throw e20715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20743 = state_20678;
state_20678 = G__20743;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17010__auto__ = function(state_20678){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17010__auto____1.call(this,state_20678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17010__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17010__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20717 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20717[(6)] = c__17200__auto__);

return statearr_20717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20745 = arguments.length;
switch (G__20745) {
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
var G__20748 = arguments.length;
switch (G__20748) {
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
var G__20751 = arguments.length;
switch (G__20751) {
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
var c__17200__auto___20798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20775){
var state_val_20776 = (state_20775[(1)]);
if((state_val_20776 === (7))){
var inst_20770 = (state_20775[(2)]);
var state_20775__$1 = state_20775;
var statearr_20777_20799 = state_20775__$1;
(statearr_20777_20799[(2)] = inst_20770);

(statearr_20777_20799[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20776 === (1))){
var inst_20752 = null;
var state_20775__$1 = (function (){var statearr_20778 = state_20775;
(statearr_20778[(7)] = inst_20752);

return statearr_20778;
})();
var statearr_20779_20800 = state_20775__$1;
(statearr_20779_20800[(2)] = null);

(statearr_20779_20800[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20776 === (4))){
var inst_20755 = (state_20775[(8)]);
var inst_20755__$1 = (state_20775[(2)]);
var inst_20756 = (inst_20755__$1 == null);
var inst_20757 = cljs.core.not(inst_20756);
var state_20775__$1 = (function (){var statearr_20780 = state_20775;
(statearr_20780[(8)] = inst_20755__$1);

return statearr_20780;
})();
if(inst_20757){
var statearr_20781_20801 = state_20775__$1;
(statearr_20781_20801[(1)] = (5));

} else {
var statearr_20782_20802 = state_20775__$1;
(statearr_20782_20802[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20776 === (6))){
var state_20775__$1 = state_20775;
var statearr_20783_20803 = state_20775__$1;
(statearr_20783_20803[(2)] = null);

(statearr_20783_20803[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20776 === (3))){
var inst_20772 = (state_20775[(2)]);
var inst_20773 = cljs.core.async.close_BANG_(out);
var state_20775__$1 = (function (){var statearr_20784 = state_20775;
(statearr_20784[(9)] = inst_20772);

return statearr_20784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20775__$1,inst_20773);
} else {
if((state_val_20776 === (2))){
var state_20775__$1 = state_20775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20775__$1,(4),ch);
} else {
if((state_val_20776 === (11))){
var inst_20755 = (state_20775[(8)]);
var inst_20764 = (state_20775[(2)]);
var inst_20752 = inst_20755;
var state_20775__$1 = (function (){var statearr_20785 = state_20775;
(statearr_20785[(7)] = inst_20752);

(statearr_20785[(10)] = inst_20764);

return statearr_20785;
})();
var statearr_20786_20804 = state_20775__$1;
(statearr_20786_20804[(2)] = null);

(statearr_20786_20804[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20776 === (9))){
var inst_20755 = (state_20775[(8)]);
var state_20775__$1 = state_20775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20775__$1,(11),out,inst_20755);
} else {
if((state_val_20776 === (5))){
var inst_20752 = (state_20775[(7)]);
var inst_20755 = (state_20775[(8)]);
var inst_20759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20755,inst_20752);
var state_20775__$1 = state_20775;
if(inst_20759){
var statearr_20788_20805 = state_20775__$1;
(statearr_20788_20805[(1)] = (8));

} else {
var statearr_20789_20806 = state_20775__$1;
(statearr_20789_20806[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20776 === (10))){
var inst_20767 = (state_20775[(2)]);
var state_20775__$1 = state_20775;
var statearr_20790_20807 = state_20775__$1;
(statearr_20790_20807[(2)] = inst_20767);

(statearr_20790_20807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20776 === (8))){
var inst_20752 = (state_20775[(7)]);
var tmp20787 = inst_20752;
var inst_20752__$1 = tmp20787;
var state_20775__$1 = (function (){var statearr_20791 = state_20775;
(statearr_20791[(7)] = inst_20752__$1);

return statearr_20791;
})();
var statearr_20792_20808 = state_20775__$1;
(statearr_20792_20808[(2)] = null);

(statearr_20792_20808[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20793[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20793[(1)] = (1));

return statearr_20793;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20775){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20775);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20794){if((e20794 instanceof Object)){
var ex__17013__auto__ = e20794;
var statearr_20795_20809 = state_20775;
(statearr_20795_20809[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20775);

return cljs.core.cst$kw$recur;
} else {
throw e20794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20810 = state_20775;
state_20775 = G__20810;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20796 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20796[(6)] = c__17200__auto___20798);

return statearr_20796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20812 = arguments.length;
switch (G__20812) {
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
var c__17200__auto___20878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20850){
var state_val_20851 = (state_20850[(1)]);
if((state_val_20851 === (7))){
var inst_20846 = (state_20850[(2)]);
var state_20850__$1 = state_20850;
var statearr_20852_20879 = state_20850__$1;
(statearr_20852_20879[(2)] = inst_20846);

(statearr_20852_20879[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (1))){
var inst_20813 = (new Array(n));
var inst_20814 = inst_20813;
var inst_20815 = (0);
var state_20850__$1 = (function (){var statearr_20853 = state_20850;
(statearr_20853[(7)] = inst_20815);

(statearr_20853[(8)] = inst_20814);

return statearr_20853;
})();
var statearr_20854_20880 = state_20850__$1;
(statearr_20854_20880[(2)] = null);

(statearr_20854_20880[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (4))){
var inst_20818 = (state_20850[(9)]);
var inst_20818__$1 = (state_20850[(2)]);
var inst_20819 = (inst_20818__$1 == null);
var inst_20820 = cljs.core.not(inst_20819);
var state_20850__$1 = (function (){var statearr_20855 = state_20850;
(statearr_20855[(9)] = inst_20818__$1);

return statearr_20855;
})();
if(inst_20820){
var statearr_20856_20881 = state_20850__$1;
(statearr_20856_20881[(1)] = (5));

} else {
var statearr_20857_20882 = state_20850__$1;
(statearr_20857_20882[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (15))){
var inst_20840 = (state_20850[(2)]);
var state_20850__$1 = state_20850;
var statearr_20858_20883 = state_20850__$1;
(statearr_20858_20883[(2)] = inst_20840);

(statearr_20858_20883[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (13))){
var state_20850__$1 = state_20850;
var statearr_20859_20884 = state_20850__$1;
(statearr_20859_20884[(2)] = null);

(statearr_20859_20884[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (6))){
var inst_20815 = (state_20850[(7)]);
var inst_20836 = (inst_20815 > (0));
var state_20850__$1 = state_20850;
if(cljs.core.truth_(inst_20836)){
var statearr_20860_20885 = state_20850__$1;
(statearr_20860_20885[(1)] = (12));

} else {
var statearr_20861_20886 = state_20850__$1;
(statearr_20861_20886[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (3))){
var inst_20848 = (state_20850[(2)]);
var state_20850__$1 = state_20850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20850__$1,inst_20848);
} else {
if((state_val_20851 === (12))){
var inst_20814 = (state_20850[(8)]);
var inst_20838 = cljs.core.vec(inst_20814);
var state_20850__$1 = state_20850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20850__$1,(15),out,inst_20838);
} else {
if((state_val_20851 === (2))){
var state_20850__$1 = state_20850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20850__$1,(4),ch);
} else {
if((state_val_20851 === (11))){
var inst_20830 = (state_20850[(2)]);
var inst_20831 = (new Array(n));
var inst_20814 = inst_20831;
var inst_20815 = (0);
var state_20850__$1 = (function (){var statearr_20862 = state_20850;
(statearr_20862[(10)] = inst_20830);

(statearr_20862[(7)] = inst_20815);

(statearr_20862[(8)] = inst_20814);

return statearr_20862;
})();
var statearr_20863_20887 = state_20850__$1;
(statearr_20863_20887[(2)] = null);

(statearr_20863_20887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (9))){
var inst_20814 = (state_20850[(8)]);
var inst_20828 = cljs.core.vec(inst_20814);
var state_20850__$1 = state_20850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20850__$1,(11),out,inst_20828);
} else {
if((state_val_20851 === (5))){
var inst_20818 = (state_20850[(9)]);
var inst_20823 = (state_20850[(11)]);
var inst_20815 = (state_20850[(7)]);
var inst_20814 = (state_20850[(8)]);
var inst_20822 = (inst_20814[inst_20815] = inst_20818);
var inst_20823__$1 = (inst_20815 + (1));
var inst_20824 = (inst_20823__$1 < n);
var state_20850__$1 = (function (){var statearr_20864 = state_20850;
(statearr_20864[(12)] = inst_20822);

(statearr_20864[(11)] = inst_20823__$1);

return statearr_20864;
})();
if(cljs.core.truth_(inst_20824)){
var statearr_20865_20888 = state_20850__$1;
(statearr_20865_20888[(1)] = (8));

} else {
var statearr_20866_20889 = state_20850__$1;
(statearr_20866_20889[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (14))){
var inst_20843 = (state_20850[(2)]);
var inst_20844 = cljs.core.async.close_BANG_(out);
var state_20850__$1 = (function (){var statearr_20868 = state_20850;
(statearr_20868[(13)] = inst_20843);

return statearr_20868;
})();
var statearr_20869_20890 = state_20850__$1;
(statearr_20869_20890[(2)] = inst_20844);

(statearr_20869_20890[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (10))){
var inst_20834 = (state_20850[(2)]);
var state_20850__$1 = state_20850;
var statearr_20870_20891 = state_20850__$1;
(statearr_20870_20891[(2)] = inst_20834);

(statearr_20870_20891[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20851 === (8))){
var inst_20823 = (state_20850[(11)]);
var inst_20814 = (state_20850[(8)]);
var tmp20867 = inst_20814;
var inst_20814__$1 = tmp20867;
var inst_20815 = inst_20823;
var state_20850__$1 = (function (){var statearr_20871 = state_20850;
(statearr_20871[(7)] = inst_20815);

(statearr_20871[(8)] = inst_20814__$1);

return statearr_20871;
})();
var statearr_20872_20892 = state_20850__$1;
(statearr_20872_20892[(2)] = null);

(statearr_20872_20892[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20873[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20873[(1)] = (1));

return statearr_20873;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20850){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20850);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20874){if((e20874 instanceof Object)){
var ex__17013__auto__ = e20874;
var statearr_20875_20893 = state_20850;
(statearr_20875_20893[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20850);

return cljs.core.cst$kw$recur;
} else {
throw e20874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20894 = state_20850;
state_20850 = G__20894;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20876 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20876[(6)] = c__17200__auto___20878);

return statearr_20876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20896 = arguments.length;
switch (G__20896) {
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
var c__17200__auto___20966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_20938){
var state_val_20939 = (state_20938[(1)]);
if((state_val_20939 === (7))){
var inst_20934 = (state_20938[(2)]);
var state_20938__$1 = state_20938;
var statearr_20940_20967 = state_20938__$1;
(statearr_20940_20967[(2)] = inst_20934);

(statearr_20940_20967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (1))){
var inst_20897 = [];
var inst_20898 = inst_20897;
var inst_20899 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_20938__$1 = (function (){var statearr_20941 = state_20938;
(statearr_20941[(7)] = inst_20899);

(statearr_20941[(8)] = inst_20898);

return statearr_20941;
})();
var statearr_20942_20968 = state_20938__$1;
(statearr_20942_20968[(2)] = null);

(statearr_20942_20968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (4))){
var inst_20902 = (state_20938[(9)]);
var inst_20902__$1 = (state_20938[(2)]);
var inst_20903 = (inst_20902__$1 == null);
var inst_20904 = cljs.core.not(inst_20903);
var state_20938__$1 = (function (){var statearr_20943 = state_20938;
(statearr_20943[(9)] = inst_20902__$1);

return statearr_20943;
})();
if(inst_20904){
var statearr_20944_20969 = state_20938__$1;
(statearr_20944_20969[(1)] = (5));

} else {
var statearr_20945_20970 = state_20938__$1;
(statearr_20945_20970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (15))){
var inst_20928 = (state_20938[(2)]);
var state_20938__$1 = state_20938;
var statearr_20946_20971 = state_20938__$1;
(statearr_20946_20971[(2)] = inst_20928);

(statearr_20946_20971[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (13))){
var state_20938__$1 = state_20938;
var statearr_20947_20972 = state_20938__$1;
(statearr_20947_20972[(2)] = null);

(statearr_20947_20972[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (6))){
var inst_20898 = (state_20938[(8)]);
var inst_20923 = inst_20898.length;
var inst_20924 = (inst_20923 > (0));
var state_20938__$1 = state_20938;
if(cljs.core.truth_(inst_20924)){
var statearr_20948_20973 = state_20938__$1;
(statearr_20948_20973[(1)] = (12));

} else {
var statearr_20949_20974 = state_20938__$1;
(statearr_20949_20974[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (3))){
var inst_20936 = (state_20938[(2)]);
var state_20938__$1 = state_20938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20938__$1,inst_20936);
} else {
if((state_val_20939 === (12))){
var inst_20898 = (state_20938[(8)]);
var inst_20926 = cljs.core.vec(inst_20898);
var state_20938__$1 = state_20938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20938__$1,(15),out,inst_20926);
} else {
if((state_val_20939 === (2))){
var state_20938__$1 = state_20938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20938__$1,(4),ch);
} else {
if((state_val_20939 === (11))){
var inst_20902 = (state_20938[(9)]);
var inst_20906 = (state_20938[(10)]);
var inst_20916 = (state_20938[(2)]);
var inst_20917 = [];
var inst_20918 = inst_20917.push(inst_20902);
var inst_20898 = inst_20917;
var inst_20899 = inst_20906;
var state_20938__$1 = (function (){var statearr_20950 = state_20938;
(statearr_20950[(11)] = inst_20918);

(statearr_20950[(7)] = inst_20899);

(statearr_20950[(12)] = inst_20916);

(statearr_20950[(8)] = inst_20898);

return statearr_20950;
})();
var statearr_20951_20975 = state_20938__$1;
(statearr_20951_20975[(2)] = null);

(statearr_20951_20975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (9))){
var inst_20898 = (state_20938[(8)]);
var inst_20914 = cljs.core.vec(inst_20898);
var state_20938__$1 = state_20938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20938__$1,(11),out,inst_20914);
} else {
if((state_val_20939 === (5))){
var inst_20899 = (state_20938[(7)]);
var inst_20902 = (state_20938[(9)]);
var inst_20906 = (state_20938[(10)]);
var inst_20906__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20902) : f.call(null,inst_20902));
var inst_20907 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20906__$1,inst_20899);
var inst_20908 = cljs.core.keyword_identical_QMARK_(inst_20899,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_20909 = ((inst_20907) || (inst_20908));
var state_20938__$1 = (function (){var statearr_20952 = state_20938;
(statearr_20952[(10)] = inst_20906__$1);

return statearr_20952;
})();
if(cljs.core.truth_(inst_20909)){
var statearr_20953_20976 = state_20938__$1;
(statearr_20953_20976[(1)] = (8));

} else {
var statearr_20954_20977 = state_20938__$1;
(statearr_20954_20977[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (14))){
var inst_20931 = (state_20938[(2)]);
var inst_20932 = cljs.core.async.close_BANG_(out);
var state_20938__$1 = (function (){var statearr_20956 = state_20938;
(statearr_20956[(13)] = inst_20931);

return statearr_20956;
})();
var statearr_20957_20978 = state_20938__$1;
(statearr_20957_20978[(2)] = inst_20932);

(statearr_20957_20978[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (10))){
var inst_20921 = (state_20938[(2)]);
var state_20938__$1 = state_20938;
var statearr_20958_20979 = state_20938__$1;
(statearr_20958_20979[(2)] = inst_20921);

(statearr_20958_20979[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20939 === (8))){
var inst_20902 = (state_20938[(9)]);
var inst_20906 = (state_20938[(10)]);
var inst_20898 = (state_20938[(8)]);
var inst_20911 = inst_20898.push(inst_20902);
var tmp20955 = inst_20898;
var inst_20898__$1 = tmp20955;
var inst_20899 = inst_20906;
var state_20938__$1 = (function (){var statearr_20959 = state_20938;
(statearr_20959[(14)] = inst_20911);

(statearr_20959[(7)] = inst_20899);

(statearr_20959[(8)] = inst_20898__$1);

return statearr_20959;
})();
var statearr_20960_20980 = state_20938__$1;
(statearr_20960_20980[(2)] = null);

(statearr_20960_20980[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__17010__auto__ = null;
var cljs$core$async$state_machine__17010__auto____0 = (function (){
var statearr_20961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20961[(0)] = cljs$core$async$state_machine__17010__auto__);

(statearr_20961[(1)] = (1));

return statearr_20961;
});
var cljs$core$async$state_machine__17010__auto____1 = (function (state_20938){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_20938);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e20962){if((e20962 instanceof Object)){
var ex__17013__auto__ = e20962;
var statearr_20963_20981 = state_20938;
(statearr_20963_20981[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20938);

return cljs.core.cst$kw$recur;
} else {
throw e20962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__20982 = state_20938;
state_20938 = G__20982;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
cljs$core$async$state_machine__17010__auto__ = function(state_20938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17010__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17010__auto____1.call(this,state_20938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17010__auto____0;
cljs$core$async$state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17010__auto____1;
return cljs$core$async$state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_20964 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_20964[(6)] = c__17200__auto___20966);

return statearr_20964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

