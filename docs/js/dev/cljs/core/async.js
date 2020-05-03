// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17483 = arguments.length;
switch (G__17483) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17484 = (function (f,blockable,meta17485){
this.f = f;
this.blockable = blockable;
this.meta17485 = meta17485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17486,meta17485__$1){
var self__ = this;
var _17486__$1 = this;
return (new cljs.core.async.t_cljs$core$async17484(self__.f,self__.blockable,meta17485__$1));
}));

(cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17486){
var self__ = this;
var _17486__$1 = this;
return self__.meta17485;
}));

(cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17485","meta17485",346842429,null)], null);
}));

(cljs.core.async.t_cljs$core$async17484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17484");

(cljs.core.async.t_cljs$core$async17484.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async17484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17484.
 */
cljs.core.async.__GT_t_cljs$core$async17484 = (function cljs$core$async$__GT_t_cljs$core$async17484(f__$1,blockable__$1,meta17485){
return (new cljs.core.async.t_cljs$core$async17484(f__$1,blockable__$1,meta17485));
});

}

return (new cljs.core.async.t_cljs$core$async17484(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__17490 = arguments.length;
switch (G__17490) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__17493 = arguments.length;
switch (G__17493) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__17496 = arguments.length;
switch (G__17496) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17498 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17498);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17498);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__17500 = arguments.length;
switch (G__17500) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___17502 = n;
var x_17503 = (0);
while(true){
if((x_17503 < n__4666__auto___17502)){
(a[x_17503] = x_17503);

var G__17504 = (x_17503 + (1));
x_17503 = G__17504;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17505 = (function (flag,meta17506){
this.flag = flag;
this.meta17506 = meta17506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17507,meta17506__$1){
var self__ = this;
var _17507__$1 = this;
return (new cljs.core.async.t_cljs$core$async17505(self__.flag,meta17506__$1));
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17507){
var self__ = this;
var _17507__$1 = this;
return self__.meta17506;
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17506","meta17506",-1538572747,null)], null);
}));

(cljs.core.async.t_cljs$core$async17505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17505");

(cljs.core.async.t_cljs$core$async17505.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async17505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17505.
 */
cljs.core.async.__GT_t_cljs$core$async17505 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17505(flag__$1,meta17506){
return (new cljs.core.async.t_cljs$core$async17505(flag__$1,meta17506));
});

}

return (new cljs.core.async.t_cljs$core$async17505(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17508 = (function (flag,cb,meta17509){
this.flag = flag;
this.cb = cb;
this.meta17509 = meta17509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17510,meta17509__$1){
var self__ = this;
var _17510__$1 = this;
return (new cljs.core.async.t_cljs$core$async17508(self__.flag,self__.cb,meta17509__$1));
}));

(cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17510){
var self__ = this;
var _17510__$1 = this;
return self__.meta17509;
}));

(cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17509","meta17509",-1117772147,null)], null);
}));

(cljs.core.async.t_cljs$core$async17508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17508");

(cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async17508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17508.
 */
cljs.core.async.__GT_t_cljs$core$async17508 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17508(flag__$1,cb__$1,meta17509){
return (new cljs.core.async.t_cljs$core$async17508(flag__$1,cb__$1,meta17509));
});

}

return (new cljs.core.async.t_cljs$core$async17508(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17511_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17511_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17512_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17512_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17513 = (i + (1));
i = G__17513;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4789__auto___17519 = arguments.length;
var i__4790__auto___17520 = (0);
while(true){
if((i__4790__auto___17520 < len__4789__auto___17519)){
args__4795__auto__.push((arguments[i__4790__auto___17520]));

var G__17521 = (i__4790__auto___17520 + (1));
i__4790__auto___17520 = G__17521;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17516){
var map__17517 = p__17516;
var map__17517__$1 = (((((!((map__17517 == null))))?(((((map__17517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17517):map__17517);
var opts = map__17517__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17514){
var G__17515 = cljs.core.first.call(null,seq17514);
var seq17514__$1 = cljs.core.next.call(null,seq17514);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17515,seq17514__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__17523 = arguments.length;
switch (G__17523) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15564__auto___17569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17547){
var state_val_17548 = (state_17547[(1)]);
if((state_val_17548 === (7))){
var inst_17543 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
var statearr_17549_17570 = state_17547__$1;
(statearr_17549_17570[(2)] = inst_17543);

(statearr_17549_17570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (1))){
var state_17547__$1 = state_17547;
var statearr_17550_17571 = state_17547__$1;
(statearr_17550_17571[(2)] = null);

(statearr_17550_17571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (4))){
var inst_17526 = (state_17547[(7)]);
var inst_17526__$1 = (state_17547[(2)]);
var inst_17527 = (inst_17526__$1 == null);
var state_17547__$1 = (function (){var statearr_17551 = state_17547;
(statearr_17551[(7)] = inst_17526__$1);

return statearr_17551;
})();
if(cljs.core.truth_(inst_17527)){
var statearr_17552_17572 = state_17547__$1;
(statearr_17552_17572[(1)] = (5));

} else {
var statearr_17553_17573 = state_17547__$1;
(statearr_17553_17573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (13))){
var state_17547__$1 = state_17547;
var statearr_17554_17574 = state_17547__$1;
(statearr_17554_17574[(2)] = null);

(statearr_17554_17574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (6))){
var inst_17526 = (state_17547[(7)]);
var state_17547__$1 = state_17547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17547__$1,(11),to,inst_17526);
} else {
if((state_val_17548 === (3))){
var inst_17545 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17547__$1,inst_17545);
} else {
if((state_val_17548 === (12))){
var state_17547__$1 = state_17547;
var statearr_17555_17575 = state_17547__$1;
(statearr_17555_17575[(2)] = null);

(statearr_17555_17575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (2))){
var state_17547__$1 = state_17547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17547__$1,(4),from);
} else {
if((state_val_17548 === (11))){
var inst_17536 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
if(cljs.core.truth_(inst_17536)){
var statearr_17556_17576 = state_17547__$1;
(statearr_17556_17576[(1)] = (12));

} else {
var statearr_17557_17577 = state_17547__$1;
(statearr_17557_17577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (9))){
var state_17547__$1 = state_17547;
var statearr_17558_17578 = state_17547__$1;
(statearr_17558_17578[(2)] = null);

(statearr_17558_17578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (5))){
var state_17547__$1 = state_17547;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17559_17579 = state_17547__$1;
(statearr_17559_17579[(1)] = (8));

} else {
var statearr_17560_17580 = state_17547__$1;
(statearr_17560_17580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (14))){
var inst_17541 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
var statearr_17561_17581 = state_17547__$1;
(statearr_17561_17581[(2)] = inst_17541);

(statearr_17561_17581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (10))){
var inst_17533 = (state_17547[(2)]);
var state_17547__$1 = state_17547;
var statearr_17562_17582 = state_17547__$1;
(statearr_17562_17582[(2)] = inst_17533);

(statearr_17562_17582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17548 === (8))){
var inst_17530 = cljs.core.async.close_BANG_.call(null,to);
var state_17547__$1 = state_17547;
var statearr_17563_17583 = state_17547__$1;
(statearr_17563_17583[(2)] = inst_17530);

(statearr_17563_17583[(1)] = (10));


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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_17564 = [null,null,null,null,null,null,null,null];
(statearr_17564[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_17564[(1)] = (1));

return statearr_17564;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_17547){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17565){if((e17565 instanceof Object)){
var ex__15471__auto__ = e17565;
var statearr_17566_17584 = state_17547;
(statearr_17566_17584[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17585 = state_17547;
state_17547 = G__17585;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_17547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_17547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_17567 = f__15565__auto__.call(null);
(statearr_17567[(6)] = c__15564__auto___17569);

return statearr_17567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__17586){
var vec__17587 = p__17586;
var v = cljs.core.nth.call(null,vec__17587,(0),null);
var p = cljs.core.nth.call(null,vec__17587,(1),null);
var job = vec__17587;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15564__auto___17758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17594){
var state_val_17595 = (state_17594[(1)]);
if((state_val_17595 === (1))){
var state_17594__$1 = state_17594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17594__$1,(2),res,v);
} else {
if((state_val_17595 === (2))){
var inst_17591 = (state_17594[(2)]);
var inst_17592 = cljs.core.async.close_BANG_.call(null,res);
var state_17594__$1 = (function (){var statearr_17596 = state_17594;
(statearr_17596[(7)] = inst_17591);

return statearr_17596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17594__$1,inst_17592);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0 = (function (){
var statearr_17597 = [null,null,null,null,null,null,null,null];
(statearr_17597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__);

(statearr_17597[(1)] = (1));

return statearr_17597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1 = (function (state_17594){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17598){if((e17598 instanceof Object)){
var ex__15471__auto__ = e17598;
var statearr_17599_17759 = state_17594;
(statearr_17599_17759[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17760 = state_17594;
state_17594 = G__17760;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = function(state_17594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1.call(this,state_17594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_17600 = f__15565__auto__.call(null);
(statearr_17600[(6)] = c__15564__auto___17758);

return statearr_17600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__17601){
var vec__17602 = p__17601;
var v = cljs.core.nth.call(null,vec__17602,(0),null);
var p = cljs.core.nth.call(null,vec__17602,(1),null);
var job = vec__17602;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___17761 = n;
var __17762 = (0);
while(true){
if((__17762 < n__4666__auto___17761)){
var G__17605_17763 = type;
var G__17605_17764__$1 = (((G__17605_17763 instanceof cljs.core.Keyword))?G__17605_17763.fqn:null);
switch (G__17605_17764__$1) {
case "compute":
var c__15564__auto___17766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17762,c__15564__auto___17766,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async){
return (function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = ((function (__17762,c__15564__auto___17766,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async){
return (function (state_17618){
var state_val_17619 = (state_17618[(1)]);
if((state_val_17619 === (1))){
var state_17618__$1 = state_17618;
var statearr_17620_17767 = state_17618__$1;
(statearr_17620_17767[(2)] = null);

(statearr_17620_17767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17619 === (2))){
var state_17618__$1 = state_17618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17618__$1,(4),jobs);
} else {
if((state_val_17619 === (3))){
var inst_17616 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17618__$1,inst_17616);
} else {
if((state_val_17619 === (4))){
var inst_17608 = (state_17618[(2)]);
var inst_17609 = process.call(null,inst_17608);
var state_17618__$1 = state_17618;
if(cljs.core.truth_(inst_17609)){
var statearr_17621_17768 = state_17618__$1;
(statearr_17621_17768[(1)] = (5));

} else {
var statearr_17622_17769 = state_17618__$1;
(statearr_17622_17769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17619 === (5))){
var state_17618__$1 = state_17618;
var statearr_17623_17770 = state_17618__$1;
(statearr_17623_17770[(2)] = null);

(statearr_17623_17770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17619 === (6))){
var state_17618__$1 = state_17618;
var statearr_17624_17771 = state_17618__$1;
(statearr_17624_17771[(2)] = null);

(statearr_17624_17771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17619 === (7))){
var inst_17614 = (state_17618[(2)]);
var state_17618__$1 = state_17618;
var statearr_17625_17772 = state_17618__$1;
(statearr_17625_17772[(2)] = inst_17614);

(statearr_17625_17772[(1)] = (3));


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
});})(__17762,c__15564__auto___17766,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async))
;
return ((function (__17762,switch__15467__auto__,c__15564__auto___17766,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0 = (function (){
var statearr_17626 = [null,null,null,null,null,null,null];
(statearr_17626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__);

(statearr_17626[(1)] = (1));

return statearr_17626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1 = (function (state_17618){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17627){if((e17627 instanceof Object)){
var ex__15471__auto__ = e17627;
var statearr_17628_17773 = state_17618;
(statearr_17628_17773[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17774 = state_17618;
state_17618 = G__17774;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = function(state_17618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1.call(this,state_17618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__;
})()
;})(__17762,switch__15467__auto__,c__15564__auto___17766,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async))
})();
var state__15566__auto__ = (function (){var statearr_17629 = f__15565__auto__.call(null);
(statearr_17629[(6)] = c__15564__auto___17766);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
});})(__17762,c__15564__auto___17766,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async))
);


break;
case "async":
var c__15564__auto___17775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17762,c__15564__auto___17775,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async){
return (function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = ((function (__17762,c__15564__auto___17775,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async){
return (function (state_17642){
var state_val_17643 = (state_17642[(1)]);
if((state_val_17643 === (1))){
var state_17642__$1 = state_17642;
var statearr_17644_17776 = state_17642__$1;
(statearr_17644_17776[(2)] = null);

(statearr_17644_17776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (2))){
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17642__$1,(4),jobs);
} else {
if((state_val_17643 === (3))){
var inst_17640 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17642__$1,inst_17640);
} else {
if((state_val_17643 === (4))){
var inst_17632 = (state_17642[(2)]);
var inst_17633 = async.call(null,inst_17632);
var state_17642__$1 = state_17642;
if(cljs.core.truth_(inst_17633)){
var statearr_17645_17777 = state_17642__$1;
(statearr_17645_17777[(1)] = (5));

} else {
var statearr_17646_17778 = state_17642__$1;
(statearr_17646_17778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (5))){
var state_17642__$1 = state_17642;
var statearr_17647_17779 = state_17642__$1;
(statearr_17647_17779[(2)] = null);

(statearr_17647_17779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (6))){
var state_17642__$1 = state_17642;
var statearr_17648_17780 = state_17642__$1;
(statearr_17648_17780[(2)] = null);

(statearr_17648_17780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17643 === (7))){
var inst_17638 = (state_17642[(2)]);
var state_17642__$1 = state_17642;
var statearr_17649_17781 = state_17642__$1;
(statearr_17649_17781[(2)] = inst_17638);

(statearr_17649_17781[(1)] = (3));


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
});})(__17762,c__15564__auto___17775,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async))
;
return ((function (__17762,switch__15467__auto__,c__15564__auto___17775,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0 = (function (){
var statearr_17650 = [null,null,null,null,null,null,null];
(statearr_17650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__);

(statearr_17650[(1)] = (1));

return statearr_17650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1 = (function (state_17642){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17651){if((e17651 instanceof Object)){
var ex__15471__auto__ = e17651;
var statearr_17652_17782 = state_17642;
(statearr_17652_17782[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17783 = state_17642;
state_17642 = G__17783;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = function(state_17642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1.call(this,state_17642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__;
})()
;})(__17762,switch__15467__auto__,c__15564__auto___17775,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async))
})();
var state__15566__auto__ = (function (){var statearr_17653 = f__15565__auto__.call(null);
(statearr_17653[(6)] = c__15564__auto___17775);

return statearr_17653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
});})(__17762,c__15564__auto___17775,G__17605_17763,G__17605_17764__$1,n__4666__auto___17761,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17605_17764__$1)].join('')));

}

var G__17784 = (__17762 + (1));
__17762 = G__17784;
continue;
} else {
}
break;
}

var c__15564__auto___17785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17675){
var state_val_17676 = (state_17675[(1)]);
if((state_val_17676 === (7))){
var inst_17671 = (state_17675[(2)]);
var state_17675__$1 = state_17675;
var statearr_17677_17786 = state_17675__$1;
(statearr_17677_17786[(2)] = inst_17671);

(statearr_17677_17786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17676 === (1))){
var state_17675__$1 = state_17675;
var statearr_17678_17787 = state_17675__$1;
(statearr_17678_17787[(2)] = null);

(statearr_17678_17787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17676 === (4))){
var inst_17656 = (state_17675[(7)]);
var inst_17656__$1 = (state_17675[(2)]);
var inst_17657 = (inst_17656__$1 == null);
var state_17675__$1 = (function (){var statearr_17679 = state_17675;
(statearr_17679[(7)] = inst_17656__$1);

return statearr_17679;
})();
if(cljs.core.truth_(inst_17657)){
var statearr_17680_17788 = state_17675__$1;
(statearr_17680_17788[(1)] = (5));

} else {
var statearr_17681_17789 = state_17675__$1;
(statearr_17681_17789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17676 === (6))){
var inst_17661 = (state_17675[(8)]);
var inst_17656 = (state_17675[(7)]);
var inst_17661__$1 = cljs.core.async.chan.call(null,(1));
var inst_17662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17663 = [inst_17656,inst_17661__$1];
var inst_17664 = (new cljs.core.PersistentVector(null,2,(5),inst_17662,inst_17663,null));
var state_17675__$1 = (function (){var statearr_17682 = state_17675;
(statearr_17682[(8)] = inst_17661__$1);

return statearr_17682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17675__$1,(8),jobs,inst_17664);
} else {
if((state_val_17676 === (3))){
var inst_17673 = (state_17675[(2)]);
var state_17675__$1 = state_17675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17675__$1,inst_17673);
} else {
if((state_val_17676 === (2))){
var state_17675__$1 = state_17675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17675__$1,(4),from);
} else {
if((state_val_17676 === (9))){
var inst_17668 = (state_17675[(2)]);
var state_17675__$1 = (function (){var statearr_17683 = state_17675;
(statearr_17683[(9)] = inst_17668);

return statearr_17683;
})();
var statearr_17684_17790 = state_17675__$1;
(statearr_17684_17790[(2)] = null);

(statearr_17684_17790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17676 === (5))){
var inst_17659 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17675__$1 = state_17675;
var statearr_17685_17791 = state_17675__$1;
(statearr_17685_17791[(2)] = inst_17659);

(statearr_17685_17791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17676 === (8))){
var inst_17661 = (state_17675[(8)]);
var inst_17666 = (state_17675[(2)]);
var state_17675__$1 = (function (){var statearr_17686 = state_17675;
(statearr_17686[(10)] = inst_17666);

return statearr_17686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17675__$1,(9),results,inst_17661);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0 = (function (){
var statearr_17687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__);

(statearr_17687[(1)] = (1));

return statearr_17687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1 = (function (state_17675){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17688){if((e17688 instanceof Object)){
var ex__15471__auto__ = e17688;
var statearr_17689_17792 = state_17675;
(statearr_17689_17792[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17793 = state_17675;
state_17675 = G__17793;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = function(state_17675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1.call(this,state_17675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_17690 = f__15565__auto__.call(null);
(statearr_17690[(6)] = c__15564__auto___17785);

return statearr_17690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


var c__15564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17728){
var state_val_17729 = (state_17728[(1)]);
if((state_val_17729 === (7))){
var inst_17724 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
var statearr_17730_17794 = state_17728__$1;
(statearr_17730_17794[(2)] = inst_17724);

(statearr_17730_17794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (20))){
var state_17728__$1 = state_17728;
var statearr_17731_17795 = state_17728__$1;
(statearr_17731_17795[(2)] = null);

(statearr_17731_17795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (1))){
var state_17728__$1 = state_17728;
var statearr_17732_17796 = state_17728__$1;
(statearr_17732_17796[(2)] = null);

(statearr_17732_17796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (4))){
var inst_17693 = (state_17728[(7)]);
var inst_17693__$1 = (state_17728[(2)]);
var inst_17694 = (inst_17693__$1 == null);
var state_17728__$1 = (function (){var statearr_17733 = state_17728;
(statearr_17733[(7)] = inst_17693__$1);

return statearr_17733;
})();
if(cljs.core.truth_(inst_17694)){
var statearr_17734_17797 = state_17728__$1;
(statearr_17734_17797[(1)] = (5));

} else {
var statearr_17735_17798 = state_17728__$1;
(statearr_17735_17798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (15))){
var inst_17706 = (state_17728[(8)]);
var state_17728__$1 = state_17728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17728__$1,(18),to,inst_17706);
} else {
if((state_val_17729 === (21))){
var inst_17719 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
var statearr_17736_17799 = state_17728__$1;
(statearr_17736_17799[(2)] = inst_17719);

(statearr_17736_17799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (13))){
var inst_17721 = (state_17728[(2)]);
var state_17728__$1 = (function (){var statearr_17737 = state_17728;
(statearr_17737[(9)] = inst_17721);

return statearr_17737;
})();
var statearr_17738_17800 = state_17728__$1;
(statearr_17738_17800[(2)] = null);

(statearr_17738_17800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (6))){
var inst_17693 = (state_17728[(7)]);
var state_17728__$1 = state_17728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17728__$1,(11),inst_17693);
} else {
if((state_val_17729 === (17))){
var inst_17714 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
if(cljs.core.truth_(inst_17714)){
var statearr_17739_17801 = state_17728__$1;
(statearr_17739_17801[(1)] = (19));

} else {
var statearr_17740_17802 = state_17728__$1;
(statearr_17740_17802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (3))){
var inst_17726 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17728__$1,inst_17726);
} else {
if((state_val_17729 === (12))){
var inst_17703 = (state_17728[(10)]);
var state_17728__$1 = state_17728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17728__$1,(14),inst_17703);
} else {
if((state_val_17729 === (2))){
var state_17728__$1 = state_17728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17728__$1,(4),results);
} else {
if((state_val_17729 === (19))){
var state_17728__$1 = state_17728;
var statearr_17741_17803 = state_17728__$1;
(statearr_17741_17803[(2)] = null);

(statearr_17741_17803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (11))){
var inst_17703 = (state_17728[(2)]);
var state_17728__$1 = (function (){var statearr_17742 = state_17728;
(statearr_17742[(10)] = inst_17703);

return statearr_17742;
})();
var statearr_17743_17804 = state_17728__$1;
(statearr_17743_17804[(2)] = null);

(statearr_17743_17804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (9))){
var state_17728__$1 = state_17728;
var statearr_17744_17805 = state_17728__$1;
(statearr_17744_17805[(2)] = null);

(statearr_17744_17805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (5))){
var state_17728__$1 = state_17728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17745_17806 = state_17728__$1;
(statearr_17745_17806[(1)] = (8));

} else {
var statearr_17746_17807 = state_17728__$1;
(statearr_17746_17807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (14))){
var inst_17706 = (state_17728[(8)]);
var inst_17706__$1 = (state_17728[(2)]);
var inst_17707 = (inst_17706__$1 == null);
var inst_17708 = cljs.core.not.call(null,inst_17707);
var state_17728__$1 = (function (){var statearr_17747 = state_17728;
(statearr_17747[(8)] = inst_17706__$1);

return statearr_17747;
})();
if(inst_17708){
var statearr_17748_17808 = state_17728__$1;
(statearr_17748_17808[(1)] = (15));

} else {
var statearr_17749_17809 = state_17728__$1;
(statearr_17749_17809[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (16))){
var state_17728__$1 = state_17728;
var statearr_17750_17810 = state_17728__$1;
(statearr_17750_17810[(2)] = false);

(statearr_17750_17810[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (10))){
var inst_17700 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
var statearr_17751_17811 = state_17728__$1;
(statearr_17751_17811[(2)] = inst_17700);

(statearr_17751_17811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (18))){
var inst_17711 = (state_17728[(2)]);
var state_17728__$1 = state_17728;
var statearr_17752_17812 = state_17728__$1;
(statearr_17752_17812[(2)] = inst_17711);

(statearr_17752_17812[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17729 === (8))){
var inst_17697 = cljs.core.async.close_BANG_.call(null,to);
var state_17728__$1 = state_17728;
var statearr_17753_17813 = state_17728__$1;
(statearr_17753_17813[(2)] = inst_17697);

(statearr_17753_17813[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0 = (function (){
var statearr_17754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__);

(statearr_17754[(1)] = (1));

return statearr_17754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1 = (function (state_17728){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17755){if((e17755 instanceof Object)){
var ex__15471__auto__ = e17755;
var statearr_17756_17814 = state_17728;
(statearr_17756_17814[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17815 = state_17728;
state_17728 = G__17815;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__ = function(state_17728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1.call(this,state_17728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_17757 = f__15565__auto__.call(null);
(statearr_17757[(6)] = c__15564__auto__);

return statearr_17757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));

return c__15564__auto__;
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
var G__17817 = arguments.length;
switch (G__17817) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__17820 = arguments.length;
switch (G__17820) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__17823 = arguments.length;
switch (G__17823) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15564__auto___17872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17849){
var state_val_17850 = (state_17849[(1)]);
if((state_val_17850 === (7))){
var inst_17845 = (state_17849[(2)]);
var state_17849__$1 = state_17849;
var statearr_17851_17873 = state_17849__$1;
(statearr_17851_17873[(2)] = inst_17845);

(statearr_17851_17873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (1))){
var state_17849__$1 = state_17849;
var statearr_17852_17874 = state_17849__$1;
(statearr_17852_17874[(2)] = null);

(statearr_17852_17874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (4))){
var inst_17826 = (state_17849[(7)]);
var inst_17826__$1 = (state_17849[(2)]);
var inst_17827 = (inst_17826__$1 == null);
var state_17849__$1 = (function (){var statearr_17853 = state_17849;
(statearr_17853[(7)] = inst_17826__$1);

return statearr_17853;
})();
if(cljs.core.truth_(inst_17827)){
var statearr_17854_17875 = state_17849__$1;
(statearr_17854_17875[(1)] = (5));

} else {
var statearr_17855_17876 = state_17849__$1;
(statearr_17855_17876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (13))){
var state_17849__$1 = state_17849;
var statearr_17856_17877 = state_17849__$1;
(statearr_17856_17877[(2)] = null);

(statearr_17856_17877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (6))){
var inst_17826 = (state_17849[(7)]);
var inst_17832 = p.call(null,inst_17826);
var state_17849__$1 = state_17849;
if(cljs.core.truth_(inst_17832)){
var statearr_17857_17878 = state_17849__$1;
(statearr_17857_17878[(1)] = (9));

} else {
var statearr_17858_17879 = state_17849__$1;
(statearr_17858_17879[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (3))){
var inst_17847 = (state_17849[(2)]);
var state_17849__$1 = state_17849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17849__$1,inst_17847);
} else {
if((state_val_17850 === (12))){
var state_17849__$1 = state_17849;
var statearr_17859_17880 = state_17849__$1;
(statearr_17859_17880[(2)] = null);

(statearr_17859_17880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (2))){
var state_17849__$1 = state_17849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17849__$1,(4),ch);
} else {
if((state_val_17850 === (11))){
var inst_17826 = (state_17849[(7)]);
var inst_17836 = (state_17849[(2)]);
var state_17849__$1 = state_17849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17849__$1,(8),inst_17836,inst_17826);
} else {
if((state_val_17850 === (9))){
var state_17849__$1 = state_17849;
var statearr_17860_17881 = state_17849__$1;
(statearr_17860_17881[(2)] = tc);

(statearr_17860_17881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (5))){
var inst_17829 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17830 = cljs.core.async.close_BANG_.call(null,fc);
var state_17849__$1 = (function (){var statearr_17861 = state_17849;
(statearr_17861[(8)] = inst_17829);

return statearr_17861;
})();
var statearr_17862_17882 = state_17849__$1;
(statearr_17862_17882[(2)] = inst_17830);

(statearr_17862_17882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (14))){
var inst_17843 = (state_17849[(2)]);
var state_17849__$1 = state_17849;
var statearr_17863_17883 = state_17849__$1;
(statearr_17863_17883[(2)] = inst_17843);

(statearr_17863_17883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (10))){
var state_17849__$1 = state_17849;
var statearr_17864_17884 = state_17849__$1;
(statearr_17864_17884[(2)] = fc);

(statearr_17864_17884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17850 === (8))){
var inst_17838 = (state_17849[(2)]);
var state_17849__$1 = state_17849;
if(cljs.core.truth_(inst_17838)){
var statearr_17865_17885 = state_17849__$1;
(statearr_17865_17885[(1)] = (12));

} else {
var statearr_17866_17886 = state_17849__$1;
(statearr_17866_17886[(1)] = (13));

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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_17867 = [null,null,null,null,null,null,null,null,null];
(statearr_17867[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_17867[(1)] = (1));

return statearr_17867;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_17849){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17868){if((e17868 instanceof Object)){
var ex__15471__auto__ = e17868;
var statearr_17869_17887 = state_17849;
(statearr_17869_17887[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17888 = state_17849;
state_17849 = G__17888;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_17849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_17849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_17870 = f__15565__auto__.call(null);
(statearr_17870[(6)] = c__15564__auto___17872);

return statearr_17870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
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
var c__15564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17909){
var state_val_17910 = (state_17909[(1)]);
if((state_val_17910 === (7))){
var inst_17905 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
var statearr_17911_17929 = state_17909__$1;
(statearr_17911_17929[(2)] = inst_17905);

(statearr_17911_17929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (1))){
var inst_17889 = init;
var state_17909__$1 = (function (){var statearr_17912 = state_17909;
(statearr_17912[(7)] = inst_17889);

return statearr_17912;
})();
var statearr_17913_17930 = state_17909__$1;
(statearr_17913_17930[(2)] = null);

(statearr_17913_17930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (4))){
var inst_17892 = (state_17909[(8)]);
var inst_17892__$1 = (state_17909[(2)]);
var inst_17893 = (inst_17892__$1 == null);
var state_17909__$1 = (function (){var statearr_17914 = state_17909;
(statearr_17914[(8)] = inst_17892__$1);

return statearr_17914;
})();
if(cljs.core.truth_(inst_17893)){
var statearr_17915_17931 = state_17909__$1;
(statearr_17915_17931[(1)] = (5));

} else {
var statearr_17916_17932 = state_17909__$1;
(statearr_17916_17932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (6))){
var inst_17889 = (state_17909[(7)]);
var inst_17896 = (state_17909[(9)]);
var inst_17892 = (state_17909[(8)]);
var inst_17896__$1 = f.call(null,inst_17889,inst_17892);
var inst_17897 = cljs.core.reduced_QMARK_.call(null,inst_17896__$1);
var state_17909__$1 = (function (){var statearr_17917 = state_17909;
(statearr_17917[(9)] = inst_17896__$1);

return statearr_17917;
})();
if(inst_17897){
var statearr_17918_17933 = state_17909__$1;
(statearr_17918_17933[(1)] = (8));

} else {
var statearr_17919_17934 = state_17909__$1;
(statearr_17919_17934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (3))){
var inst_17907 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17909__$1,inst_17907);
} else {
if((state_val_17910 === (2))){
var state_17909__$1 = state_17909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17909__$1,(4),ch);
} else {
if((state_val_17910 === (9))){
var inst_17896 = (state_17909[(9)]);
var inst_17889 = inst_17896;
var state_17909__$1 = (function (){var statearr_17920 = state_17909;
(statearr_17920[(7)] = inst_17889);

return statearr_17920;
})();
var statearr_17921_17935 = state_17909__$1;
(statearr_17921_17935[(2)] = null);

(statearr_17921_17935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (5))){
var inst_17889 = (state_17909[(7)]);
var state_17909__$1 = state_17909;
var statearr_17922_17936 = state_17909__$1;
(statearr_17922_17936[(2)] = inst_17889);

(statearr_17922_17936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (10))){
var inst_17903 = (state_17909[(2)]);
var state_17909__$1 = state_17909;
var statearr_17923_17937 = state_17909__$1;
(statearr_17923_17937[(2)] = inst_17903);

(statearr_17923_17937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17910 === (8))){
var inst_17896 = (state_17909[(9)]);
var inst_17899 = cljs.core.deref.call(null,inst_17896);
var state_17909__$1 = state_17909;
var statearr_17924_17938 = state_17909__$1;
(statearr_17924_17938[(2)] = inst_17899);

(statearr_17924_17938[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__15468__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15468__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17925[(0)] = cljs$core$async$reduce_$_state_machine__15468__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var cljs$core$async$reduce_$_state_machine__15468__auto____1 = (function (state_17909){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17926){if((e17926 instanceof Object)){
var ex__15471__auto__ = e17926;
var statearr_17927_17939 = state_17909;
(statearr_17927_17939[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17940 = state_17909;
state_17909 = G__17940;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15468__auto__ = function(state_17909){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15468__auto____1.call(this,state_17909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15468__auto____0;
cljs$core$async$reduce_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15468__auto____1;
return cljs$core$async$reduce_$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_17928 = f__15565__auto__.call(null);
(statearr_17928[(6)] = c__15564__auto__);

return statearr_17928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));

return c__15564__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17946){
var state_val_17947 = (state_17946[(1)]);
if((state_val_17947 === (1))){
var inst_17941 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17946__$1,(2),inst_17941);
} else {
if((state_val_17947 === (2))){
var inst_17943 = (state_17946[(2)]);
var inst_17944 = f__$1.call(null,inst_17943);
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17946__$1,inst_17944);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15468__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15468__auto____0 = (function (){
var statearr_17948 = [null,null,null,null,null,null,null];
(statearr_17948[(0)] = cljs$core$async$transduce_$_state_machine__15468__auto__);

(statearr_17948[(1)] = (1));

return statearr_17948;
});
var cljs$core$async$transduce_$_state_machine__15468__auto____1 = (function (state_17946){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17949){if((e17949 instanceof Object)){
var ex__15471__auto__ = e17949;
var statearr_17950_17952 = state_17946;
(statearr_17950_17952[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17953 = state_17946;
state_17946 = G__17953;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15468__auto__ = function(state_17946){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15468__auto____1.call(this,state_17946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15468__auto____0;
cljs$core$async$transduce_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15468__auto____1;
return cljs$core$async$transduce_$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_17951 = f__15565__auto__.call(null);
(statearr_17951[(6)] = c__15564__auto__);

return statearr_17951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));

return c__15564__auto__;
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
var G__17955 = arguments.length;
switch (G__17955) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_17980){
var state_val_17981 = (state_17980[(1)]);
if((state_val_17981 === (7))){
var inst_17962 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
var statearr_17982_18003 = state_17980__$1;
(statearr_17982_18003[(2)] = inst_17962);

(statearr_17982_18003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (1))){
var inst_17956 = cljs.core.seq.call(null,coll);
var inst_17957 = inst_17956;
var state_17980__$1 = (function (){var statearr_17983 = state_17980;
(statearr_17983[(7)] = inst_17957);

return statearr_17983;
})();
var statearr_17984_18004 = state_17980__$1;
(statearr_17984_18004[(2)] = null);

(statearr_17984_18004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (4))){
var inst_17957 = (state_17980[(7)]);
var inst_17960 = cljs.core.first.call(null,inst_17957);
var state_17980__$1 = state_17980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17980__$1,(7),ch,inst_17960);
} else {
if((state_val_17981 === (13))){
var inst_17974 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
var statearr_17985_18005 = state_17980__$1;
(statearr_17985_18005[(2)] = inst_17974);

(statearr_17985_18005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (6))){
var inst_17965 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
if(cljs.core.truth_(inst_17965)){
var statearr_17986_18006 = state_17980__$1;
(statearr_17986_18006[(1)] = (8));

} else {
var statearr_17987_18007 = state_17980__$1;
(statearr_17987_18007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (3))){
var inst_17978 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17980__$1,inst_17978);
} else {
if((state_val_17981 === (12))){
var state_17980__$1 = state_17980;
var statearr_17988_18008 = state_17980__$1;
(statearr_17988_18008[(2)] = null);

(statearr_17988_18008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (2))){
var inst_17957 = (state_17980[(7)]);
var state_17980__$1 = state_17980;
if(cljs.core.truth_(inst_17957)){
var statearr_17989_18009 = state_17980__$1;
(statearr_17989_18009[(1)] = (4));

} else {
var statearr_17990_18010 = state_17980__$1;
(statearr_17990_18010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (11))){
var inst_17971 = cljs.core.async.close_BANG_.call(null,ch);
var state_17980__$1 = state_17980;
var statearr_17991_18011 = state_17980__$1;
(statearr_17991_18011[(2)] = inst_17971);

(statearr_17991_18011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (9))){
var state_17980__$1 = state_17980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17992_18012 = state_17980__$1;
(statearr_17992_18012[(1)] = (11));

} else {
var statearr_17993_18013 = state_17980__$1;
(statearr_17993_18013[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (5))){
var inst_17957 = (state_17980[(7)]);
var state_17980__$1 = state_17980;
var statearr_17994_18014 = state_17980__$1;
(statearr_17994_18014[(2)] = inst_17957);

(statearr_17994_18014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (10))){
var inst_17976 = (state_17980[(2)]);
var state_17980__$1 = state_17980;
var statearr_17995_18015 = state_17980__$1;
(statearr_17995_18015[(2)] = inst_17976);

(statearr_17995_18015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17981 === (8))){
var inst_17957 = (state_17980[(7)]);
var inst_17967 = cljs.core.next.call(null,inst_17957);
var inst_17957__$1 = inst_17967;
var state_17980__$1 = (function (){var statearr_17996 = state_17980;
(statearr_17996[(7)] = inst_17957__$1);

return statearr_17996;
})();
var statearr_17997_18016 = state_17980__$1;
(statearr_17997_18016[(2)] = null);

(statearr_17997_18016[(1)] = (2));


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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_17998 = [null,null,null,null,null,null,null,null];
(statearr_17998[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_17998[(1)] = (1));

return statearr_17998;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_17980){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_17980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e17999){if((e17999 instanceof Object)){
var ex__15471__auto__ = e17999;
var statearr_18000_18017 = state_17980;
(statearr_18000_18017[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18018 = state_17980;
state_17980 = G__18018;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_17980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_17980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18001 = f__15565__auto__.call(null);
(statearr_18001[(6)] = c__15564__auto__);

return statearr_18001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));

return c__15564__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18019 = (function (ch,cs,meta18020){
this.ch = ch;
this.cs = cs;
this.meta18020 = meta18020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18021,meta18020__$1){
var self__ = this;
var _18021__$1 = this;
return (new cljs.core.async.t_cljs$core$async18019(self__.ch,self__.cs,meta18020__$1));
}));

(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18021){
var self__ = this;
var _18021__$1 = this;
return self__.meta18020;
}));

(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18019.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18020","meta18020",-529110482,null)], null);
}));

(cljs.core.async.t_cljs$core$async18019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18019");

(cljs.core.async.t_cljs$core$async18019.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18019.
 */
cljs.core.async.__GT_t_cljs$core$async18019 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18019(ch__$1,cs__$1,meta18020){
return (new cljs.core.async.t_cljs$core$async18019(ch__$1,cs__$1,meta18020));
});

}

return (new cljs.core.async.t_cljs$core$async18019(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__15564__auto___18237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_18154){
var state_val_18155 = (state_18154[(1)]);
if((state_val_18155 === (7))){
var inst_18150 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18156_18238 = state_18154__$1;
(statearr_18156_18238[(2)] = inst_18150);

(statearr_18156_18238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (20))){
var inst_18055 = (state_18154[(7)]);
var inst_18067 = cljs.core.first.call(null,inst_18055);
var inst_18068 = cljs.core.nth.call(null,inst_18067,(0),null);
var inst_18069 = cljs.core.nth.call(null,inst_18067,(1),null);
var state_18154__$1 = (function (){var statearr_18157 = state_18154;
(statearr_18157[(8)] = inst_18068);

return statearr_18157;
})();
if(cljs.core.truth_(inst_18069)){
var statearr_18158_18239 = state_18154__$1;
(statearr_18158_18239[(1)] = (22));

} else {
var statearr_18159_18240 = state_18154__$1;
(statearr_18159_18240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (27))){
var inst_18099 = (state_18154[(9)]);
var inst_18104 = (state_18154[(10)]);
var inst_18097 = (state_18154[(11)]);
var inst_18024 = (state_18154[(12)]);
var inst_18104__$1 = cljs.core._nth.call(null,inst_18097,inst_18099);
var inst_18105 = cljs.core.async.put_BANG_.call(null,inst_18104__$1,inst_18024,done);
var state_18154__$1 = (function (){var statearr_18160 = state_18154;
(statearr_18160[(10)] = inst_18104__$1);

return statearr_18160;
})();
if(cljs.core.truth_(inst_18105)){
var statearr_18161_18241 = state_18154__$1;
(statearr_18161_18241[(1)] = (30));

} else {
var statearr_18162_18242 = state_18154__$1;
(statearr_18162_18242[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (1))){
var state_18154__$1 = state_18154;
var statearr_18163_18243 = state_18154__$1;
(statearr_18163_18243[(2)] = null);

(statearr_18163_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (24))){
var inst_18055 = (state_18154[(7)]);
var inst_18074 = (state_18154[(2)]);
var inst_18075 = cljs.core.next.call(null,inst_18055);
var inst_18033 = inst_18075;
var inst_18034 = null;
var inst_18035 = (0);
var inst_18036 = (0);
var state_18154__$1 = (function (){var statearr_18164 = state_18154;
(statearr_18164[(13)] = inst_18074);

(statearr_18164[(14)] = inst_18035);

(statearr_18164[(15)] = inst_18034);

(statearr_18164[(16)] = inst_18033);

(statearr_18164[(17)] = inst_18036);

return statearr_18164;
})();
var statearr_18165_18244 = state_18154__$1;
(statearr_18165_18244[(2)] = null);

(statearr_18165_18244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (39))){
var state_18154__$1 = state_18154;
var statearr_18169_18245 = state_18154__$1;
(statearr_18169_18245[(2)] = null);

(statearr_18169_18245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (4))){
var inst_18024 = (state_18154[(12)]);
var inst_18024__$1 = (state_18154[(2)]);
var inst_18025 = (inst_18024__$1 == null);
var state_18154__$1 = (function (){var statearr_18170 = state_18154;
(statearr_18170[(12)] = inst_18024__$1);

return statearr_18170;
})();
if(cljs.core.truth_(inst_18025)){
var statearr_18171_18246 = state_18154__$1;
(statearr_18171_18246[(1)] = (5));

} else {
var statearr_18172_18247 = state_18154__$1;
(statearr_18172_18247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (15))){
var inst_18035 = (state_18154[(14)]);
var inst_18034 = (state_18154[(15)]);
var inst_18033 = (state_18154[(16)]);
var inst_18036 = (state_18154[(17)]);
var inst_18051 = (state_18154[(2)]);
var inst_18052 = (inst_18036 + (1));
var tmp18166 = inst_18035;
var tmp18167 = inst_18034;
var tmp18168 = inst_18033;
var inst_18033__$1 = tmp18168;
var inst_18034__$1 = tmp18167;
var inst_18035__$1 = tmp18166;
var inst_18036__$1 = inst_18052;
var state_18154__$1 = (function (){var statearr_18173 = state_18154;
(statearr_18173[(18)] = inst_18051);

(statearr_18173[(14)] = inst_18035__$1);

(statearr_18173[(15)] = inst_18034__$1);

(statearr_18173[(16)] = inst_18033__$1);

(statearr_18173[(17)] = inst_18036__$1);

return statearr_18173;
})();
var statearr_18174_18248 = state_18154__$1;
(statearr_18174_18248[(2)] = null);

(statearr_18174_18248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (21))){
var inst_18078 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18178_18249 = state_18154__$1;
(statearr_18178_18249[(2)] = inst_18078);

(statearr_18178_18249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (31))){
var inst_18104 = (state_18154[(10)]);
var inst_18108 = cljs.core.async.untap_STAR_.call(null,m,inst_18104);
var state_18154__$1 = state_18154;
var statearr_18179_18250 = state_18154__$1;
(statearr_18179_18250[(2)] = inst_18108);

(statearr_18179_18250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (32))){
var inst_18099 = (state_18154[(9)]);
var inst_18097 = (state_18154[(11)]);
var inst_18098 = (state_18154[(19)]);
var inst_18096 = (state_18154[(20)]);
var inst_18110 = (state_18154[(2)]);
var inst_18111 = (inst_18099 + (1));
var tmp18175 = inst_18097;
var tmp18176 = inst_18098;
var tmp18177 = inst_18096;
var inst_18096__$1 = tmp18177;
var inst_18097__$1 = tmp18175;
var inst_18098__$1 = tmp18176;
var inst_18099__$1 = inst_18111;
var state_18154__$1 = (function (){var statearr_18180 = state_18154;
(statearr_18180[(21)] = inst_18110);

(statearr_18180[(9)] = inst_18099__$1);

(statearr_18180[(11)] = inst_18097__$1);

(statearr_18180[(19)] = inst_18098__$1);

(statearr_18180[(20)] = inst_18096__$1);

return statearr_18180;
})();
var statearr_18181_18251 = state_18154__$1;
(statearr_18181_18251[(2)] = null);

(statearr_18181_18251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (40))){
var inst_18123 = (state_18154[(22)]);
var inst_18127 = cljs.core.async.untap_STAR_.call(null,m,inst_18123);
var state_18154__$1 = state_18154;
var statearr_18182_18252 = state_18154__$1;
(statearr_18182_18252[(2)] = inst_18127);

(statearr_18182_18252[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (33))){
var inst_18114 = (state_18154[(23)]);
var inst_18116 = cljs.core.chunked_seq_QMARK_.call(null,inst_18114);
var state_18154__$1 = state_18154;
if(inst_18116){
var statearr_18183_18253 = state_18154__$1;
(statearr_18183_18253[(1)] = (36));

} else {
var statearr_18184_18254 = state_18154__$1;
(statearr_18184_18254[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (13))){
var inst_18045 = (state_18154[(24)]);
var inst_18048 = cljs.core.async.close_BANG_.call(null,inst_18045);
var state_18154__$1 = state_18154;
var statearr_18185_18255 = state_18154__$1;
(statearr_18185_18255[(2)] = inst_18048);

(statearr_18185_18255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (22))){
var inst_18068 = (state_18154[(8)]);
var inst_18071 = cljs.core.async.close_BANG_.call(null,inst_18068);
var state_18154__$1 = state_18154;
var statearr_18186_18256 = state_18154__$1;
(statearr_18186_18256[(2)] = inst_18071);

(statearr_18186_18256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (36))){
var inst_18114 = (state_18154[(23)]);
var inst_18118 = cljs.core.chunk_first.call(null,inst_18114);
var inst_18119 = cljs.core.chunk_rest.call(null,inst_18114);
var inst_18120 = cljs.core.count.call(null,inst_18118);
var inst_18096 = inst_18119;
var inst_18097 = inst_18118;
var inst_18098 = inst_18120;
var inst_18099 = (0);
var state_18154__$1 = (function (){var statearr_18187 = state_18154;
(statearr_18187[(9)] = inst_18099);

(statearr_18187[(11)] = inst_18097);

(statearr_18187[(19)] = inst_18098);

(statearr_18187[(20)] = inst_18096);

return statearr_18187;
})();
var statearr_18188_18257 = state_18154__$1;
(statearr_18188_18257[(2)] = null);

(statearr_18188_18257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (41))){
var inst_18114 = (state_18154[(23)]);
var inst_18129 = (state_18154[(2)]);
var inst_18130 = cljs.core.next.call(null,inst_18114);
var inst_18096 = inst_18130;
var inst_18097 = null;
var inst_18098 = (0);
var inst_18099 = (0);
var state_18154__$1 = (function (){var statearr_18189 = state_18154;
(statearr_18189[(9)] = inst_18099);

(statearr_18189[(11)] = inst_18097);

(statearr_18189[(25)] = inst_18129);

(statearr_18189[(19)] = inst_18098);

(statearr_18189[(20)] = inst_18096);

return statearr_18189;
})();
var statearr_18190_18258 = state_18154__$1;
(statearr_18190_18258[(2)] = null);

(statearr_18190_18258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (43))){
var state_18154__$1 = state_18154;
var statearr_18191_18259 = state_18154__$1;
(statearr_18191_18259[(2)] = null);

(statearr_18191_18259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (29))){
var inst_18138 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18192_18260 = state_18154__$1;
(statearr_18192_18260[(2)] = inst_18138);

(statearr_18192_18260[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (44))){
var inst_18147 = (state_18154[(2)]);
var state_18154__$1 = (function (){var statearr_18193 = state_18154;
(statearr_18193[(26)] = inst_18147);

return statearr_18193;
})();
var statearr_18194_18261 = state_18154__$1;
(statearr_18194_18261[(2)] = null);

(statearr_18194_18261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (6))){
var inst_18088 = (state_18154[(27)]);
var inst_18087 = cljs.core.deref.call(null,cs);
var inst_18088__$1 = cljs.core.keys.call(null,inst_18087);
var inst_18089 = cljs.core.count.call(null,inst_18088__$1);
var inst_18090 = cljs.core.reset_BANG_.call(null,dctr,inst_18089);
var inst_18095 = cljs.core.seq.call(null,inst_18088__$1);
var inst_18096 = inst_18095;
var inst_18097 = null;
var inst_18098 = (0);
var inst_18099 = (0);
var state_18154__$1 = (function (){var statearr_18195 = state_18154;
(statearr_18195[(9)] = inst_18099);

(statearr_18195[(28)] = inst_18090);

(statearr_18195[(11)] = inst_18097);

(statearr_18195[(27)] = inst_18088__$1);

(statearr_18195[(19)] = inst_18098);

(statearr_18195[(20)] = inst_18096);

return statearr_18195;
})();
var statearr_18196_18262 = state_18154__$1;
(statearr_18196_18262[(2)] = null);

(statearr_18196_18262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (28))){
var inst_18114 = (state_18154[(23)]);
var inst_18096 = (state_18154[(20)]);
var inst_18114__$1 = cljs.core.seq.call(null,inst_18096);
var state_18154__$1 = (function (){var statearr_18197 = state_18154;
(statearr_18197[(23)] = inst_18114__$1);

return statearr_18197;
})();
if(inst_18114__$1){
var statearr_18198_18263 = state_18154__$1;
(statearr_18198_18263[(1)] = (33));

} else {
var statearr_18199_18264 = state_18154__$1;
(statearr_18199_18264[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (25))){
var inst_18099 = (state_18154[(9)]);
var inst_18098 = (state_18154[(19)]);
var inst_18101 = (inst_18099 < inst_18098);
var inst_18102 = inst_18101;
var state_18154__$1 = state_18154;
if(cljs.core.truth_(inst_18102)){
var statearr_18200_18265 = state_18154__$1;
(statearr_18200_18265[(1)] = (27));

} else {
var statearr_18201_18266 = state_18154__$1;
(statearr_18201_18266[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (34))){
var state_18154__$1 = state_18154;
var statearr_18202_18267 = state_18154__$1;
(statearr_18202_18267[(2)] = null);

(statearr_18202_18267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (17))){
var state_18154__$1 = state_18154;
var statearr_18203_18268 = state_18154__$1;
(statearr_18203_18268[(2)] = null);

(statearr_18203_18268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (3))){
var inst_18152 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18154__$1,inst_18152);
} else {
if((state_val_18155 === (12))){
var inst_18083 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18204_18269 = state_18154__$1;
(statearr_18204_18269[(2)] = inst_18083);

(statearr_18204_18269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (2))){
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18154__$1,(4),ch);
} else {
if((state_val_18155 === (23))){
var state_18154__$1 = state_18154;
var statearr_18205_18270 = state_18154__$1;
(statearr_18205_18270[(2)] = null);

(statearr_18205_18270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (35))){
var inst_18136 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18206_18271 = state_18154__$1;
(statearr_18206_18271[(2)] = inst_18136);

(statearr_18206_18271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (19))){
var inst_18055 = (state_18154[(7)]);
var inst_18059 = cljs.core.chunk_first.call(null,inst_18055);
var inst_18060 = cljs.core.chunk_rest.call(null,inst_18055);
var inst_18061 = cljs.core.count.call(null,inst_18059);
var inst_18033 = inst_18060;
var inst_18034 = inst_18059;
var inst_18035 = inst_18061;
var inst_18036 = (0);
var state_18154__$1 = (function (){var statearr_18207 = state_18154;
(statearr_18207[(14)] = inst_18035);

(statearr_18207[(15)] = inst_18034);

(statearr_18207[(16)] = inst_18033);

(statearr_18207[(17)] = inst_18036);

return statearr_18207;
})();
var statearr_18208_18272 = state_18154__$1;
(statearr_18208_18272[(2)] = null);

(statearr_18208_18272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (11))){
var inst_18033 = (state_18154[(16)]);
var inst_18055 = (state_18154[(7)]);
var inst_18055__$1 = cljs.core.seq.call(null,inst_18033);
var state_18154__$1 = (function (){var statearr_18209 = state_18154;
(statearr_18209[(7)] = inst_18055__$1);

return statearr_18209;
})();
if(inst_18055__$1){
var statearr_18210_18273 = state_18154__$1;
(statearr_18210_18273[(1)] = (16));

} else {
var statearr_18211_18274 = state_18154__$1;
(statearr_18211_18274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (9))){
var inst_18085 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18212_18275 = state_18154__$1;
(statearr_18212_18275[(2)] = inst_18085);

(statearr_18212_18275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (5))){
var inst_18031 = cljs.core.deref.call(null,cs);
var inst_18032 = cljs.core.seq.call(null,inst_18031);
var inst_18033 = inst_18032;
var inst_18034 = null;
var inst_18035 = (0);
var inst_18036 = (0);
var state_18154__$1 = (function (){var statearr_18213 = state_18154;
(statearr_18213[(14)] = inst_18035);

(statearr_18213[(15)] = inst_18034);

(statearr_18213[(16)] = inst_18033);

(statearr_18213[(17)] = inst_18036);

return statearr_18213;
})();
var statearr_18214_18276 = state_18154__$1;
(statearr_18214_18276[(2)] = null);

(statearr_18214_18276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (14))){
var state_18154__$1 = state_18154;
var statearr_18215_18277 = state_18154__$1;
(statearr_18215_18277[(2)] = null);

(statearr_18215_18277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (45))){
var inst_18144 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18216_18278 = state_18154__$1;
(statearr_18216_18278[(2)] = inst_18144);

(statearr_18216_18278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (26))){
var inst_18088 = (state_18154[(27)]);
var inst_18140 = (state_18154[(2)]);
var inst_18141 = cljs.core.seq.call(null,inst_18088);
var state_18154__$1 = (function (){var statearr_18217 = state_18154;
(statearr_18217[(29)] = inst_18140);

return statearr_18217;
})();
if(inst_18141){
var statearr_18218_18279 = state_18154__$1;
(statearr_18218_18279[(1)] = (42));

} else {
var statearr_18219_18280 = state_18154__$1;
(statearr_18219_18280[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (16))){
var inst_18055 = (state_18154[(7)]);
var inst_18057 = cljs.core.chunked_seq_QMARK_.call(null,inst_18055);
var state_18154__$1 = state_18154;
if(inst_18057){
var statearr_18220_18281 = state_18154__$1;
(statearr_18220_18281[(1)] = (19));

} else {
var statearr_18221_18282 = state_18154__$1;
(statearr_18221_18282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (38))){
var inst_18133 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18222_18283 = state_18154__$1;
(statearr_18222_18283[(2)] = inst_18133);

(statearr_18222_18283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (30))){
var state_18154__$1 = state_18154;
var statearr_18223_18284 = state_18154__$1;
(statearr_18223_18284[(2)] = null);

(statearr_18223_18284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (10))){
var inst_18034 = (state_18154[(15)]);
var inst_18036 = (state_18154[(17)]);
var inst_18044 = cljs.core._nth.call(null,inst_18034,inst_18036);
var inst_18045 = cljs.core.nth.call(null,inst_18044,(0),null);
var inst_18046 = cljs.core.nth.call(null,inst_18044,(1),null);
var state_18154__$1 = (function (){var statearr_18224 = state_18154;
(statearr_18224[(24)] = inst_18045);

return statearr_18224;
})();
if(cljs.core.truth_(inst_18046)){
var statearr_18225_18285 = state_18154__$1;
(statearr_18225_18285[(1)] = (13));

} else {
var statearr_18226_18286 = state_18154__$1;
(statearr_18226_18286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (18))){
var inst_18081 = (state_18154[(2)]);
var state_18154__$1 = state_18154;
var statearr_18227_18287 = state_18154__$1;
(statearr_18227_18287[(2)] = inst_18081);

(statearr_18227_18287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (42))){
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18154__$1,(45),dchan);
} else {
if((state_val_18155 === (37))){
var inst_18114 = (state_18154[(23)]);
var inst_18123 = (state_18154[(22)]);
var inst_18024 = (state_18154[(12)]);
var inst_18123__$1 = cljs.core.first.call(null,inst_18114);
var inst_18124 = cljs.core.async.put_BANG_.call(null,inst_18123__$1,inst_18024,done);
var state_18154__$1 = (function (){var statearr_18228 = state_18154;
(statearr_18228[(22)] = inst_18123__$1);

return statearr_18228;
})();
if(cljs.core.truth_(inst_18124)){
var statearr_18229_18288 = state_18154__$1;
(statearr_18229_18288[(1)] = (39));

} else {
var statearr_18230_18289 = state_18154__$1;
(statearr_18230_18289[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18155 === (8))){
var inst_18035 = (state_18154[(14)]);
var inst_18036 = (state_18154[(17)]);
var inst_18038 = (inst_18036 < inst_18035);
var inst_18039 = inst_18038;
var state_18154__$1 = state_18154;
if(cljs.core.truth_(inst_18039)){
var statearr_18231_18290 = state_18154__$1;
(statearr_18231_18290[(1)] = (10));

} else {
var statearr_18232_18291 = state_18154__$1;
(statearr_18232_18291[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__15468__auto__ = null;
var cljs$core$async$mult_$_state_machine__15468__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = cljs$core$async$mult_$_state_machine__15468__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var cljs$core$async$mult_$_state_machine__15468__auto____1 = (function (state_18154){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_18154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e18234){if((e18234 instanceof Object)){
var ex__15471__auto__ = e18234;
var statearr_18235_18292 = state_18154;
(statearr_18235_18292[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18293 = state_18154;
state_18154 = G__18293;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15468__auto__ = function(state_18154){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15468__auto____1.call(this,state_18154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15468__auto____0;
cljs$core$async$mult_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15468__auto____1;
return cljs$core$async$mult_$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18236 = f__15565__auto__.call(null);
(statearr_18236[(6)] = c__15564__auto___18237);

return statearr_18236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
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
var G__18295 = arguments.length;
switch (G__18295) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___18307 = arguments.length;
var i__4790__auto___18308 = (0);
while(true){
if((i__4790__auto___18308 < len__4789__auto___18307)){
args__4795__auto__.push((arguments[i__4790__auto___18308]));

var G__18309 = (i__4790__auto___18308 + (1));
i__4790__auto___18308 = G__18309;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18301){
var map__18302 = p__18301;
var map__18302__$1 = (((((!((map__18302 == null))))?(((((map__18302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18302):map__18302);
var opts = map__18302__$1;
var statearr_18304_18310 = state;
(statearr_18304_18310[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18305_18311 = state;
(statearr_18305_18311[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_18306_18312 = state;
(statearr_18306_18312[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18297){
var G__18298 = cljs.core.first.call(null,seq18297);
var seq18297__$1 = cljs.core.next.call(null,seq18297);
var G__18299 = cljs.core.first.call(null,seq18297__$1);
var seq18297__$2 = cljs.core.next.call(null,seq18297__$1);
var G__18300 = cljs.core.first.call(null,seq18297__$2);
var seq18297__$3 = cljs.core.next.call(null,seq18297__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18298,G__18299,G__18300,seq18297__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18313 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18314){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18314 = meta18314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18315,meta18314__$1){
var self__ = this;
var _18315__$1 = this;
return (new cljs.core.async.t_cljs$core$async18313(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18314__$1));
}));

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18315){
var self__ = this;
var _18315__$1 = this;
return self__.meta18314;
}));

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18314","meta18314",1143607438,null)], null);
}));

(cljs.core.async.t_cljs$core$async18313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18313");

(cljs.core.async.t_cljs$core$async18313.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18313.
 */
cljs.core.async.__GT_t_cljs$core$async18313 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18314){
return (new cljs.core.async.t_cljs$core$async18313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18314));
});

}

return (new cljs.core.async.t_cljs$core$async18313(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15564__auto___18477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_18417){
var state_val_18418 = (state_18417[(1)]);
if((state_val_18418 === (7))){
var inst_18332 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18419_18478 = state_18417__$1;
(statearr_18419_18478[(2)] = inst_18332);

(statearr_18419_18478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (20))){
var inst_18344 = (state_18417[(7)]);
var state_18417__$1 = state_18417;
var statearr_18420_18479 = state_18417__$1;
(statearr_18420_18479[(2)] = inst_18344);

(statearr_18420_18479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (27))){
var state_18417__$1 = state_18417;
var statearr_18421_18480 = state_18417__$1;
(statearr_18421_18480[(2)] = null);

(statearr_18421_18480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (1))){
var inst_18319 = (state_18417[(8)]);
var inst_18319__$1 = calc_state.call(null);
var inst_18321 = (inst_18319__$1 == null);
var inst_18322 = cljs.core.not.call(null,inst_18321);
var state_18417__$1 = (function (){var statearr_18422 = state_18417;
(statearr_18422[(8)] = inst_18319__$1);

return statearr_18422;
})();
if(inst_18322){
var statearr_18423_18481 = state_18417__$1;
(statearr_18423_18481[(1)] = (2));

} else {
var statearr_18424_18482 = state_18417__$1;
(statearr_18424_18482[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (24))){
var inst_18391 = (state_18417[(9)]);
var inst_18377 = (state_18417[(10)]);
var inst_18368 = (state_18417[(11)]);
var inst_18391__$1 = inst_18368.call(null,inst_18377);
var state_18417__$1 = (function (){var statearr_18425 = state_18417;
(statearr_18425[(9)] = inst_18391__$1);

return statearr_18425;
})();
if(cljs.core.truth_(inst_18391__$1)){
var statearr_18426_18483 = state_18417__$1;
(statearr_18426_18483[(1)] = (29));

} else {
var statearr_18427_18484 = state_18417__$1;
(statearr_18427_18484[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (4))){
var inst_18335 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18335)){
var statearr_18428_18485 = state_18417__$1;
(statearr_18428_18485[(1)] = (8));

} else {
var statearr_18429_18486 = state_18417__$1;
(statearr_18429_18486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (15))){
var inst_18362 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18362)){
var statearr_18430_18487 = state_18417__$1;
(statearr_18430_18487[(1)] = (19));

} else {
var statearr_18431_18488 = state_18417__$1;
(statearr_18431_18488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (21))){
var inst_18367 = (state_18417[(12)]);
var inst_18367__$1 = (state_18417[(2)]);
var inst_18368 = cljs.core.get.call(null,inst_18367__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18369 = cljs.core.get.call(null,inst_18367__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18370 = cljs.core.get.call(null,inst_18367__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18417__$1 = (function (){var statearr_18432 = state_18417;
(statearr_18432[(12)] = inst_18367__$1);

(statearr_18432[(13)] = inst_18369);

(statearr_18432[(11)] = inst_18368);

return statearr_18432;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18417__$1,(22),inst_18370);
} else {
if((state_val_18418 === (31))){
var inst_18399 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18399)){
var statearr_18433_18489 = state_18417__$1;
(statearr_18433_18489[(1)] = (32));

} else {
var statearr_18434_18490 = state_18417__$1;
(statearr_18434_18490[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (32))){
var inst_18376 = (state_18417[(14)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18417__$1,(35),out,inst_18376);
} else {
if((state_val_18418 === (33))){
var inst_18367 = (state_18417[(12)]);
var inst_18344 = inst_18367;
var state_18417__$1 = (function (){var statearr_18435 = state_18417;
(statearr_18435[(7)] = inst_18344);

return statearr_18435;
})();
var statearr_18436_18491 = state_18417__$1;
(statearr_18436_18491[(2)] = null);

(statearr_18436_18491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (13))){
var inst_18344 = (state_18417[(7)]);
var inst_18351 = inst_18344.cljs$lang$protocol_mask$partition0$;
var inst_18352 = (inst_18351 & (64));
var inst_18353 = inst_18344.cljs$core$ISeq$;
var inst_18354 = (cljs.core.PROTOCOL_SENTINEL === inst_18353);
var inst_18355 = ((inst_18352) || (inst_18354));
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18355)){
var statearr_18437_18492 = state_18417__$1;
(statearr_18437_18492[(1)] = (16));

} else {
var statearr_18438_18493 = state_18417__$1;
(statearr_18438_18493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (22))){
var inst_18377 = (state_18417[(10)]);
var inst_18376 = (state_18417[(14)]);
var inst_18375 = (state_18417[(2)]);
var inst_18376__$1 = cljs.core.nth.call(null,inst_18375,(0),null);
var inst_18377__$1 = cljs.core.nth.call(null,inst_18375,(1),null);
var inst_18378 = (inst_18376__$1 == null);
var inst_18379 = cljs.core._EQ_.call(null,inst_18377__$1,change);
var inst_18380 = ((inst_18378) || (inst_18379));
var state_18417__$1 = (function (){var statearr_18439 = state_18417;
(statearr_18439[(10)] = inst_18377__$1);

(statearr_18439[(14)] = inst_18376__$1);

return statearr_18439;
})();
if(cljs.core.truth_(inst_18380)){
var statearr_18440_18494 = state_18417__$1;
(statearr_18440_18494[(1)] = (23));

} else {
var statearr_18441_18495 = state_18417__$1;
(statearr_18441_18495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (36))){
var inst_18367 = (state_18417[(12)]);
var inst_18344 = inst_18367;
var state_18417__$1 = (function (){var statearr_18442 = state_18417;
(statearr_18442[(7)] = inst_18344);

return statearr_18442;
})();
var statearr_18443_18496 = state_18417__$1;
(statearr_18443_18496[(2)] = null);

(statearr_18443_18496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (29))){
var inst_18391 = (state_18417[(9)]);
var state_18417__$1 = state_18417;
var statearr_18444_18497 = state_18417__$1;
(statearr_18444_18497[(2)] = inst_18391);

(statearr_18444_18497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (6))){
var state_18417__$1 = state_18417;
var statearr_18445_18498 = state_18417__$1;
(statearr_18445_18498[(2)] = false);

(statearr_18445_18498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (28))){
var inst_18387 = (state_18417[(2)]);
var inst_18388 = calc_state.call(null);
var inst_18344 = inst_18388;
var state_18417__$1 = (function (){var statearr_18446 = state_18417;
(statearr_18446[(7)] = inst_18344);

(statearr_18446[(15)] = inst_18387);

return statearr_18446;
})();
var statearr_18447_18499 = state_18417__$1;
(statearr_18447_18499[(2)] = null);

(statearr_18447_18499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (25))){
var inst_18413 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18448_18500 = state_18417__$1;
(statearr_18448_18500[(2)] = inst_18413);

(statearr_18448_18500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (34))){
var inst_18411 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18449_18501 = state_18417__$1;
(statearr_18449_18501[(2)] = inst_18411);

(statearr_18449_18501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (17))){
var state_18417__$1 = state_18417;
var statearr_18450_18502 = state_18417__$1;
(statearr_18450_18502[(2)] = false);

(statearr_18450_18502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (3))){
var state_18417__$1 = state_18417;
var statearr_18451_18503 = state_18417__$1;
(statearr_18451_18503[(2)] = false);

(statearr_18451_18503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (12))){
var inst_18415 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18417__$1,inst_18415);
} else {
if((state_val_18418 === (2))){
var inst_18319 = (state_18417[(8)]);
var inst_18324 = inst_18319.cljs$lang$protocol_mask$partition0$;
var inst_18325 = (inst_18324 & (64));
var inst_18326 = inst_18319.cljs$core$ISeq$;
var inst_18327 = (cljs.core.PROTOCOL_SENTINEL === inst_18326);
var inst_18328 = ((inst_18325) || (inst_18327));
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18328)){
var statearr_18452_18504 = state_18417__$1;
(statearr_18452_18504[(1)] = (5));

} else {
var statearr_18453_18505 = state_18417__$1;
(statearr_18453_18505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (23))){
var inst_18376 = (state_18417[(14)]);
var inst_18382 = (inst_18376 == null);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18382)){
var statearr_18454_18506 = state_18417__$1;
(statearr_18454_18506[(1)] = (26));

} else {
var statearr_18455_18507 = state_18417__$1;
(statearr_18455_18507[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (35))){
var inst_18402 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
if(cljs.core.truth_(inst_18402)){
var statearr_18456_18508 = state_18417__$1;
(statearr_18456_18508[(1)] = (36));

} else {
var statearr_18457_18509 = state_18417__$1;
(statearr_18457_18509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (19))){
var inst_18344 = (state_18417[(7)]);
var inst_18364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18344);
var state_18417__$1 = state_18417;
var statearr_18458_18510 = state_18417__$1;
(statearr_18458_18510[(2)] = inst_18364);

(statearr_18458_18510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (11))){
var inst_18344 = (state_18417[(7)]);
var inst_18348 = (inst_18344 == null);
var inst_18349 = cljs.core.not.call(null,inst_18348);
var state_18417__$1 = state_18417;
if(inst_18349){
var statearr_18459_18511 = state_18417__$1;
(statearr_18459_18511[(1)] = (13));

} else {
var statearr_18460_18512 = state_18417__$1;
(statearr_18460_18512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (9))){
var inst_18319 = (state_18417[(8)]);
var state_18417__$1 = state_18417;
var statearr_18461_18513 = state_18417__$1;
(statearr_18461_18513[(2)] = inst_18319);

(statearr_18461_18513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (5))){
var state_18417__$1 = state_18417;
var statearr_18462_18514 = state_18417__$1;
(statearr_18462_18514[(2)] = true);

(statearr_18462_18514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (14))){
var state_18417__$1 = state_18417;
var statearr_18463_18515 = state_18417__$1;
(statearr_18463_18515[(2)] = false);

(statearr_18463_18515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (26))){
var inst_18377 = (state_18417[(10)]);
var inst_18384 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18377);
var state_18417__$1 = state_18417;
var statearr_18464_18516 = state_18417__$1;
(statearr_18464_18516[(2)] = inst_18384);

(statearr_18464_18516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (16))){
var state_18417__$1 = state_18417;
var statearr_18465_18517 = state_18417__$1;
(statearr_18465_18517[(2)] = true);

(statearr_18465_18517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (38))){
var inst_18407 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18466_18518 = state_18417__$1;
(statearr_18466_18518[(2)] = inst_18407);

(statearr_18466_18518[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (30))){
var inst_18377 = (state_18417[(10)]);
var inst_18369 = (state_18417[(13)]);
var inst_18368 = (state_18417[(11)]);
var inst_18394 = cljs.core.empty_QMARK_.call(null,inst_18368);
var inst_18395 = inst_18369.call(null,inst_18377);
var inst_18396 = cljs.core.not.call(null,inst_18395);
var inst_18397 = ((inst_18394) && (inst_18396));
var state_18417__$1 = state_18417;
var statearr_18467_18519 = state_18417__$1;
(statearr_18467_18519[(2)] = inst_18397);

(statearr_18467_18519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (10))){
var inst_18319 = (state_18417[(8)]);
var inst_18340 = (state_18417[(2)]);
var inst_18341 = cljs.core.get.call(null,inst_18340,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18342 = cljs.core.get.call(null,inst_18340,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18343 = cljs.core.get.call(null,inst_18340,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18344 = inst_18319;
var state_18417__$1 = (function (){var statearr_18468 = state_18417;
(statearr_18468[(16)] = inst_18343);

(statearr_18468[(7)] = inst_18344);

(statearr_18468[(17)] = inst_18342);

(statearr_18468[(18)] = inst_18341);

return statearr_18468;
})();
var statearr_18469_18520 = state_18417__$1;
(statearr_18469_18520[(2)] = null);

(statearr_18469_18520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (18))){
var inst_18359 = (state_18417[(2)]);
var state_18417__$1 = state_18417;
var statearr_18470_18521 = state_18417__$1;
(statearr_18470_18521[(2)] = inst_18359);

(statearr_18470_18521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (37))){
var state_18417__$1 = state_18417;
var statearr_18471_18522 = state_18417__$1;
(statearr_18471_18522[(2)] = null);

(statearr_18471_18522[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18418 === (8))){
var inst_18319 = (state_18417[(8)]);
var inst_18337 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18319);
var state_18417__$1 = state_18417;
var statearr_18472_18523 = state_18417__$1;
(statearr_18472_18523[(2)] = inst_18337);

(statearr_18472_18523[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__15468__auto__ = null;
var cljs$core$async$mix_$_state_machine__15468__auto____0 = (function (){
var statearr_18473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18473[(0)] = cljs$core$async$mix_$_state_machine__15468__auto__);

(statearr_18473[(1)] = (1));

return statearr_18473;
});
var cljs$core$async$mix_$_state_machine__15468__auto____1 = (function (state_18417){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_18417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e18474){if((e18474 instanceof Object)){
var ex__15471__auto__ = e18474;
var statearr_18475_18524 = state_18417;
(statearr_18475_18524[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18525 = state_18417;
state_18417 = G__18525;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15468__auto__ = function(state_18417){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15468__auto____1.call(this,state_18417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15468__auto____0;
cljs$core$async$mix_$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15468__auto____1;
return cljs$core$async$mix_$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18476 = f__15565__auto__.call(null);
(statearr_18476[(6)] = c__15564__auto___18477);

return statearr_18476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18527 = arguments.length;
switch (G__18527) {
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
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__18531 = arguments.length;
switch (G__18531) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18529_SHARP_){
if(cljs.core.truth_(p1__18529_SHARP_.call(null,topic))){
return p1__18529_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18529_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18532 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18533){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18533 = meta18533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18534,meta18533__$1){
var self__ = this;
var _18534__$1 = this;
return (new cljs.core.async.t_cljs$core$async18532(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18533__$1));
}));

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18534){
var self__ = this;
var _18534__$1 = this;
return self__.meta18533;
}));

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18533","meta18533",2110216897,null)], null);
}));

(cljs.core.async.t_cljs$core$async18532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18532");

(cljs.core.async.t_cljs$core$async18532.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18532.
 */
cljs.core.async.__GT_t_cljs$core$async18532 = (function cljs$core$async$__GT_t_cljs$core$async18532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18533){
return (new cljs.core.async.t_cljs$core$async18532(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18533));
});

}

return (new cljs.core.async.t_cljs$core$async18532(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15564__auto___18652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_18606){
var state_val_18607 = (state_18606[(1)]);
if((state_val_18607 === (7))){
var inst_18602 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18608_18653 = state_18606__$1;
(statearr_18608_18653[(2)] = inst_18602);

(statearr_18608_18653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (20))){
var state_18606__$1 = state_18606;
var statearr_18609_18654 = state_18606__$1;
(statearr_18609_18654[(2)] = null);

(statearr_18609_18654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (1))){
var state_18606__$1 = state_18606;
var statearr_18610_18655 = state_18606__$1;
(statearr_18610_18655[(2)] = null);

(statearr_18610_18655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (24))){
var inst_18585 = (state_18606[(7)]);
var inst_18594 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18585);
var state_18606__$1 = state_18606;
var statearr_18611_18656 = state_18606__$1;
(statearr_18611_18656[(2)] = inst_18594);

(statearr_18611_18656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (4))){
var inst_18537 = (state_18606[(8)]);
var inst_18537__$1 = (state_18606[(2)]);
var inst_18538 = (inst_18537__$1 == null);
var state_18606__$1 = (function (){var statearr_18612 = state_18606;
(statearr_18612[(8)] = inst_18537__$1);

return statearr_18612;
})();
if(cljs.core.truth_(inst_18538)){
var statearr_18613_18657 = state_18606__$1;
(statearr_18613_18657[(1)] = (5));

} else {
var statearr_18614_18658 = state_18606__$1;
(statearr_18614_18658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (15))){
var inst_18579 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18615_18659 = state_18606__$1;
(statearr_18615_18659[(2)] = inst_18579);

(statearr_18615_18659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (21))){
var inst_18599 = (state_18606[(2)]);
var state_18606__$1 = (function (){var statearr_18616 = state_18606;
(statearr_18616[(9)] = inst_18599);

return statearr_18616;
})();
var statearr_18617_18660 = state_18606__$1;
(statearr_18617_18660[(2)] = null);

(statearr_18617_18660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (13))){
var inst_18561 = (state_18606[(10)]);
var inst_18563 = cljs.core.chunked_seq_QMARK_.call(null,inst_18561);
var state_18606__$1 = state_18606;
if(inst_18563){
var statearr_18618_18661 = state_18606__$1;
(statearr_18618_18661[(1)] = (16));

} else {
var statearr_18619_18662 = state_18606__$1;
(statearr_18619_18662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (22))){
var inst_18591 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
if(cljs.core.truth_(inst_18591)){
var statearr_18620_18663 = state_18606__$1;
(statearr_18620_18663[(1)] = (23));

} else {
var statearr_18621_18664 = state_18606__$1;
(statearr_18621_18664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (6))){
var inst_18537 = (state_18606[(8)]);
var inst_18585 = (state_18606[(7)]);
var inst_18587 = (state_18606[(11)]);
var inst_18585__$1 = topic_fn.call(null,inst_18537);
var inst_18586 = cljs.core.deref.call(null,mults);
var inst_18587__$1 = cljs.core.get.call(null,inst_18586,inst_18585__$1);
var state_18606__$1 = (function (){var statearr_18622 = state_18606;
(statearr_18622[(7)] = inst_18585__$1);

(statearr_18622[(11)] = inst_18587__$1);

return statearr_18622;
})();
if(cljs.core.truth_(inst_18587__$1)){
var statearr_18623_18665 = state_18606__$1;
(statearr_18623_18665[(1)] = (19));

} else {
var statearr_18624_18666 = state_18606__$1;
(statearr_18624_18666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (25))){
var inst_18596 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18625_18667 = state_18606__$1;
(statearr_18625_18667[(2)] = inst_18596);

(statearr_18625_18667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (17))){
var inst_18561 = (state_18606[(10)]);
var inst_18570 = cljs.core.first.call(null,inst_18561);
var inst_18571 = cljs.core.async.muxch_STAR_.call(null,inst_18570);
var inst_18572 = cljs.core.async.close_BANG_.call(null,inst_18571);
var inst_18573 = cljs.core.next.call(null,inst_18561);
var inst_18547 = inst_18573;
var inst_18548 = null;
var inst_18549 = (0);
var inst_18550 = (0);
var state_18606__$1 = (function (){var statearr_18626 = state_18606;
(statearr_18626[(12)] = inst_18547);

(statearr_18626[(13)] = inst_18549);

(statearr_18626[(14)] = inst_18550);

(statearr_18626[(15)] = inst_18548);

(statearr_18626[(16)] = inst_18572);

return statearr_18626;
})();
var statearr_18627_18668 = state_18606__$1;
(statearr_18627_18668[(2)] = null);

(statearr_18627_18668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (3))){
var inst_18604 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18606__$1,inst_18604);
} else {
if((state_val_18607 === (12))){
var inst_18581 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18628_18669 = state_18606__$1;
(statearr_18628_18669[(2)] = inst_18581);

(statearr_18628_18669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (2))){
var state_18606__$1 = state_18606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18606__$1,(4),ch);
} else {
if((state_val_18607 === (23))){
var state_18606__$1 = state_18606;
var statearr_18629_18670 = state_18606__$1;
(statearr_18629_18670[(2)] = null);

(statearr_18629_18670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (19))){
var inst_18537 = (state_18606[(8)]);
var inst_18587 = (state_18606[(11)]);
var inst_18589 = cljs.core.async.muxch_STAR_.call(null,inst_18587);
var state_18606__$1 = state_18606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18606__$1,(22),inst_18589,inst_18537);
} else {
if((state_val_18607 === (11))){
var inst_18547 = (state_18606[(12)]);
var inst_18561 = (state_18606[(10)]);
var inst_18561__$1 = cljs.core.seq.call(null,inst_18547);
var state_18606__$1 = (function (){var statearr_18630 = state_18606;
(statearr_18630[(10)] = inst_18561__$1);

return statearr_18630;
})();
if(inst_18561__$1){
var statearr_18631_18671 = state_18606__$1;
(statearr_18631_18671[(1)] = (13));

} else {
var statearr_18632_18672 = state_18606__$1;
(statearr_18632_18672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (9))){
var inst_18583 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18633_18673 = state_18606__$1;
(statearr_18633_18673[(2)] = inst_18583);

(statearr_18633_18673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (5))){
var inst_18544 = cljs.core.deref.call(null,mults);
var inst_18545 = cljs.core.vals.call(null,inst_18544);
var inst_18546 = cljs.core.seq.call(null,inst_18545);
var inst_18547 = inst_18546;
var inst_18548 = null;
var inst_18549 = (0);
var inst_18550 = (0);
var state_18606__$1 = (function (){var statearr_18634 = state_18606;
(statearr_18634[(12)] = inst_18547);

(statearr_18634[(13)] = inst_18549);

(statearr_18634[(14)] = inst_18550);

(statearr_18634[(15)] = inst_18548);

return statearr_18634;
})();
var statearr_18635_18674 = state_18606__$1;
(statearr_18635_18674[(2)] = null);

(statearr_18635_18674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (14))){
var state_18606__$1 = state_18606;
var statearr_18639_18675 = state_18606__$1;
(statearr_18639_18675[(2)] = null);

(statearr_18639_18675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (16))){
var inst_18561 = (state_18606[(10)]);
var inst_18565 = cljs.core.chunk_first.call(null,inst_18561);
var inst_18566 = cljs.core.chunk_rest.call(null,inst_18561);
var inst_18567 = cljs.core.count.call(null,inst_18565);
var inst_18547 = inst_18566;
var inst_18548 = inst_18565;
var inst_18549 = inst_18567;
var inst_18550 = (0);
var state_18606__$1 = (function (){var statearr_18640 = state_18606;
(statearr_18640[(12)] = inst_18547);

(statearr_18640[(13)] = inst_18549);

(statearr_18640[(14)] = inst_18550);

(statearr_18640[(15)] = inst_18548);

return statearr_18640;
})();
var statearr_18641_18676 = state_18606__$1;
(statearr_18641_18676[(2)] = null);

(statearr_18641_18676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (10))){
var inst_18547 = (state_18606[(12)]);
var inst_18549 = (state_18606[(13)]);
var inst_18550 = (state_18606[(14)]);
var inst_18548 = (state_18606[(15)]);
var inst_18555 = cljs.core._nth.call(null,inst_18548,inst_18550);
var inst_18556 = cljs.core.async.muxch_STAR_.call(null,inst_18555);
var inst_18557 = cljs.core.async.close_BANG_.call(null,inst_18556);
var inst_18558 = (inst_18550 + (1));
var tmp18636 = inst_18547;
var tmp18637 = inst_18549;
var tmp18638 = inst_18548;
var inst_18547__$1 = tmp18636;
var inst_18548__$1 = tmp18638;
var inst_18549__$1 = tmp18637;
var inst_18550__$1 = inst_18558;
var state_18606__$1 = (function (){var statearr_18642 = state_18606;
(statearr_18642[(12)] = inst_18547__$1);

(statearr_18642[(17)] = inst_18557);

(statearr_18642[(13)] = inst_18549__$1);

(statearr_18642[(14)] = inst_18550__$1);

(statearr_18642[(15)] = inst_18548__$1);

return statearr_18642;
})();
var statearr_18643_18677 = state_18606__$1;
(statearr_18643_18677[(2)] = null);

(statearr_18643_18677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (18))){
var inst_18576 = (state_18606[(2)]);
var state_18606__$1 = state_18606;
var statearr_18644_18678 = state_18606__$1;
(statearr_18644_18678[(2)] = inst_18576);

(statearr_18644_18678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18607 === (8))){
var inst_18549 = (state_18606[(13)]);
var inst_18550 = (state_18606[(14)]);
var inst_18552 = (inst_18550 < inst_18549);
var inst_18553 = inst_18552;
var state_18606__$1 = state_18606;
if(cljs.core.truth_(inst_18553)){
var statearr_18645_18679 = state_18606__$1;
(statearr_18645_18679[(1)] = (10));

} else {
var statearr_18646_18680 = state_18606__$1;
(statearr_18646_18680[(1)] = (11));

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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_18647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18647[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_18647[(1)] = (1));

return statearr_18647;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_18606){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_18606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e18648){if((e18648 instanceof Object)){
var ex__15471__auto__ = e18648;
var statearr_18649_18681 = state_18606;
(statearr_18649_18681[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18682 = state_18606;
state_18606 = G__18682;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_18606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_18606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18650 = f__15565__auto__.call(null);
(statearr_18650[(6)] = c__15564__auto___18652);

return statearr_18650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
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
var G__18684 = arguments.length;
switch (G__18684) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18687 = arguments.length;
switch (G__18687) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__18690 = arguments.length;
switch (G__18690) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__15564__auto___18757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_18729){
var state_val_18730 = (state_18729[(1)]);
if((state_val_18730 === (7))){
var state_18729__$1 = state_18729;
var statearr_18731_18758 = state_18729__$1;
(statearr_18731_18758[(2)] = null);

(statearr_18731_18758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (1))){
var state_18729__$1 = state_18729;
var statearr_18732_18759 = state_18729__$1;
(statearr_18732_18759[(2)] = null);

(statearr_18732_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (4))){
var inst_18693 = (state_18729[(7)]);
var inst_18695 = (inst_18693 < cnt);
var state_18729__$1 = state_18729;
if(cljs.core.truth_(inst_18695)){
var statearr_18733_18760 = state_18729__$1;
(statearr_18733_18760[(1)] = (6));

} else {
var statearr_18734_18761 = state_18729__$1;
(statearr_18734_18761[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (15))){
var inst_18725 = (state_18729[(2)]);
var state_18729__$1 = state_18729;
var statearr_18735_18762 = state_18729__$1;
(statearr_18735_18762[(2)] = inst_18725);

(statearr_18735_18762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (13))){
var inst_18718 = cljs.core.async.close_BANG_.call(null,out);
var state_18729__$1 = state_18729;
var statearr_18736_18763 = state_18729__$1;
(statearr_18736_18763[(2)] = inst_18718);

(statearr_18736_18763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (6))){
var state_18729__$1 = state_18729;
var statearr_18737_18764 = state_18729__$1;
(statearr_18737_18764[(2)] = null);

(statearr_18737_18764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (3))){
var inst_18727 = (state_18729[(2)]);
var state_18729__$1 = state_18729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18729__$1,inst_18727);
} else {
if((state_val_18730 === (12))){
var inst_18715 = (state_18729[(8)]);
var inst_18715__$1 = (state_18729[(2)]);
var inst_18716 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18715__$1);
var state_18729__$1 = (function (){var statearr_18738 = state_18729;
(statearr_18738[(8)] = inst_18715__$1);

return statearr_18738;
})();
if(cljs.core.truth_(inst_18716)){
var statearr_18739_18765 = state_18729__$1;
(statearr_18739_18765[(1)] = (13));

} else {
var statearr_18740_18766 = state_18729__$1;
(statearr_18740_18766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (2))){
var inst_18692 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18693 = (0);
var state_18729__$1 = (function (){var statearr_18741 = state_18729;
(statearr_18741[(9)] = inst_18692);

(statearr_18741[(7)] = inst_18693);

return statearr_18741;
})();
var statearr_18742_18767 = state_18729__$1;
(statearr_18742_18767[(2)] = null);

(statearr_18742_18767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (11))){
var inst_18693 = (state_18729[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18729,(10),Object,null,(9));
var inst_18702 = chs__$1.call(null,inst_18693);
var inst_18703 = done.call(null,inst_18693);
var inst_18704 = cljs.core.async.take_BANG_.call(null,inst_18702,inst_18703);
var state_18729__$1 = state_18729;
var statearr_18743_18768 = state_18729__$1;
(statearr_18743_18768[(2)] = inst_18704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (9))){
var inst_18693 = (state_18729[(7)]);
var inst_18706 = (state_18729[(2)]);
var inst_18707 = (inst_18693 + (1));
var inst_18693__$1 = inst_18707;
var state_18729__$1 = (function (){var statearr_18744 = state_18729;
(statearr_18744[(10)] = inst_18706);

(statearr_18744[(7)] = inst_18693__$1);

return statearr_18744;
})();
var statearr_18745_18769 = state_18729__$1;
(statearr_18745_18769[(2)] = null);

(statearr_18745_18769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (5))){
var inst_18713 = (state_18729[(2)]);
var state_18729__$1 = (function (){var statearr_18746 = state_18729;
(statearr_18746[(11)] = inst_18713);

return statearr_18746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18729__$1,(12),dchan);
} else {
if((state_val_18730 === (14))){
var inst_18715 = (state_18729[(8)]);
var inst_18720 = cljs.core.apply.call(null,f,inst_18715);
var state_18729__$1 = state_18729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18729__$1,(16),out,inst_18720);
} else {
if((state_val_18730 === (16))){
var inst_18722 = (state_18729[(2)]);
var state_18729__$1 = (function (){var statearr_18747 = state_18729;
(statearr_18747[(12)] = inst_18722);

return statearr_18747;
})();
var statearr_18748_18770 = state_18729__$1;
(statearr_18748_18770[(2)] = null);

(statearr_18748_18770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (10))){
var inst_18697 = (state_18729[(2)]);
var inst_18698 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18729__$1 = (function (){var statearr_18749 = state_18729;
(statearr_18749[(13)] = inst_18697);

return statearr_18749;
})();
var statearr_18750_18771 = state_18729__$1;
(statearr_18750_18771[(2)] = inst_18698);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18730 === (8))){
var inst_18711 = (state_18729[(2)]);
var state_18729__$1 = state_18729;
var statearr_18751_18772 = state_18729__$1;
(statearr_18751_18772[(2)] = inst_18711);

(statearr_18751_18772[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_18752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18752[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_18752[(1)] = (1));

return statearr_18752;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_18729){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_18729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e18753){if((e18753 instanceof Object)){
var ex__15471__auto__ = e18753;
var statearr_18754_18773 = state_18729;
(statearr_18754_18773[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18774 = state_18729;
state_18729 = G__18774;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_18729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_18729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18755 = f__15565__auto__.call(null);
(statearr_18755[(6)] = c__15564__auto___18757);

return statearr_18755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
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
var G__18777 = arguments.length;
switch (G__18777) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15564__auto___18831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_18809){
var state_val_18810 = (state_18809[(1)]);
if((state_val_18810 === (7))){
var inst_18789 = (state_18809[(7)]);
var inst_18788 = (state_18809[(8)]);
var inst_18788__$1 = (state_18809[(2)]);
var inst_18789__$1 = cljs.core.nth.call(null,inst_18788__$1,(0),null);
var inst_18790 = cljs.core.nth.call(null,inst_18788__$1,(1),null);
var inst_18791 = (inst_18789__$1 == null);
var state_18809__$1 = (function (){var statearr_18811 = state_18809;
(statearr_18811[(7)] = inst_18789__$1);

(statearr_18811[(8)] = inst_18788__$1);

(statearr_18811[(9)] = inst_18790);

return statearr_18811;
})();
if(cljs.core.truth_(inst_18791)){
var statearr_18812_18832 = state_18809__$1;
(statearr_18812_18832[(1)] = (8));

} else {
var statearr_18813_18833 = state_18809__$1;
(statearr_18813_18833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18810 === (1))){
var inst_18778 = cljs.core.vec.call(null,chs);
var inst_18779 = inst_18778;
var state_18809__$1 = (function (){var statearr_18814 = state_18809;
(statearr_18814[(10)] = inst_18779);

return statearr_18814;
})();
var statearr_18815_18834 = state_18809__$1;
(statearr_18815_18834[(2)] = null);

(statearr_18815_18834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18810 === (4))){
var inst_18779 = (state_18809[(10)]);
var state_18809__$1 = state_18809;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18809__$1,(7),inst_18779);
} else {
if((state_val_18810 === (6))){
var inst_18805 = (state_18809[(2)]);
var state_18809__$1 = state_18809;
var statearr_18816_18835 = state_18809__$1;
(statearr_18816_18835[(2)] = inst_18805);

(statearr_18816_18835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18810 === (3))){
var inst_18807 = (state_18809[(2)]);
var state_18809__$1 = state_18809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18809__$1,inst_18807);
} else {
if((state_val_18810 === (2))){
var inst_18779 = (state_18809[(10)]);
var inst_18781 = cljs.core.count.call(null,inst_18779);
var inst_18782 = (inst_18781 > (0));
var state_18809__$1 = state_18809;
if(cljs.core.truth_(inst_18782)){
var statearr_18818_18836 = state_18809__$1;
(statearr_18818_18836[(1)] = (4));

} else {
var statearr_18819_18837 = state_18809__$1;
(statearr_18819_18837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18810 === (11))){
var inst_18779 = (state_18809[(10)]);
var inst_18798 = (state_18809[(2)]);
var tmp18817 = inst_18779;
var inst_18779__$1 = tmp18817;
var state_18809__$1 = (function (){var statearr_18820 = state_18809;
(statearr_18820[(10)] = inst_18779__$1);

(statearr_18820[(11)] = inst_18798);

return statearr_18820;
})();
var statearr_18821_18838 = state_18809__$1;
(statearr_18821_18838[(2)] = null);

(statearr_18821_18838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18810 === (9))){
var inst_18789 = (state_18809[(7)]);
var state_18809__$1 = state_18809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18809__$1,(11),out,inst_18789);
} else {
if((state_val_18810 === (5))){
var inst_18803 = cljs.core.async.close_BANG_.call(null,out);
var state_18809__$1 = state_18809;
var statearr_18822_18839 = state_18809__$1;
(statearr_18822_18839[(2)] = inst_18803);

(statearr_18822_18839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18810 === (10))){
var inst_18801 = (state_18809[(2)]);
var state_18809__$1 = state_18809;
var statearr_18823_18840 = state_18809__$1;
(statearr_18823_18840[(2)] = inst_18801);

(statearr_18823_18840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18810 === (8))){
var inst_18789 = (state_18809[(7)]);
var inst_18779 = (state_18809[(10)]);
var inst_18788 = (state_18809[(8)]);
var inst_18790 = (state_18809[(9)]);
var inst_18793 = (function (){var cs = inst_18779;
var vec__18784 = inst_18788;
var v = inst_18789;
var c = inst_18790;
return (function (p1__18775_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18775_SHARP_);
});
})();
var inst_18794 = cljs.core.filterv.call(null,inst_18793,inst_18779);
var inst_18779__$1 = inst_18794;
var state_18809__$1 = (function (){var statearr_18824 = state_18809;
(statearr_18824[(10)] = inst_18779__$1);

return statearr_18824;
})();
var statearr_18825_18841 = state_18809__$1;
(statearr_18825_18841[(2)] = null);

(statearr_18825_18841[(1)] = (2));


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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_18826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18826[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_18826[(1)] = (1));

return statearr_18826;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_18809){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_18809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e18827){if((e18827 instanceof Object)){
var ex__15471__auto__ = e18827;
var statearr_18828_18842 = state_18809;
(statearr_18828_18842[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18843 = state_18809;
state_18809 = G__18843;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_18809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_18809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18829 = f__15565__auto__.call(null);
(statearr_18829[(6)] = c__15564__auto___18831);

return statearr_18829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18845 = arguments.length;
switch (G__18845) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15564__auto___18890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_18869){
var state_val_18870 = (state_18869[(1)]);
if((state_val_18870 === (7))){
var inst_18851 = (state_18869[(7)]);
var inst_18851__$1 = (state_18869[(2)]);
var inst_18852 = (inst_18851__$1 == null);
var inst_18853 = cljs.core.not.call(null,inst_18852);
var state_18869__$1 = (function (){var statearr_18871 = state_18869;
(statearr_18871[(7)] = inst_18851__$1);

return statearr_18871;
})();
if(inst_18853){
var statearr_18872_18891 = state_18869__$1;
(statearr_18872_18891[(1)] = (8));

} else {
var statearr_18873_18892 = state_18869__$1;
(statearr_18873_18892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (1))){
var inst_18846 = (0);
var state_18869__$1 = (function (){var statearr_18874 = state_18869;
(statearr_18874[(8)] = inst_18846);

return statearr_18874;
})();
var statearr_18875_18893 = state_18869__$1;
(statearr_18875_18893[(2)] = null);

(statearr_18875_18893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (4))){
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18869__$1,(7),ch);
} else {
if((state_val_18870 === (6))){
var inst_18864 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
var statearr_18876_18894 = state_18869__$1;
(statearr_18876_18894[(2)] = inst_18864);

(statearr_18876_18894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (3))){
var inst_18866 = (state_18869[(2)]);
var inst_18867 = cljs.core.async.close_BANG_.call(null,out);
var state_18869__$1 = (function (){var statearr_18877 = state_18869;
(statearr_18877[(9)] = inst_18866);

return statearr_18877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18869__$1,inst_18867);
} else {
if((state_val_18870 === (2))){
var inst_18846 = (state_18869[(8)]);
var inst_18848 = (inst_18846 < n);
var state_18869__$1 = state_18869;
if(cljs.core.truth_(inst_18848)){
var statearr_18878_18895 = state_18869__$1;
(statearr_18878_18895[(1)] = (4));

} else {
var statearr_18879_18896 = state_18869__$1;
(statearr_18879_18896[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (11))){
var inst_18846 = (state_18869[(8)]);
var inst_18856 = (state_18869[(2)]);
var inst_18857 = (inst_18846 + (1));
var inst_18846__$1 = inst_18857;
var state_18869__$1 = (function (){var statearr_18880 = state_18869;
(statearr_18880[(8)] = inst_18846__$1);

(statearr_18880[(10)] = inst_18856);

return statearr_18880;
})();
var statearr_18881_18897 = state_18869__$1;
(statearr_18881_18897[(2)] = null);

(statearr_18881_18897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (9))){
var state_18869__$1 = state_18869;
var statearr_18882_18898 = state_18869__$1;
(statearr_18882_18898[(2)] = null);

(statearr_18882_18898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (5))){
var state_18869__$1 = state_18869;
var statearr_18883_18899 = state_18869__$1;
(statearr_18883_18899[(2)] = null);

(statearr_18883_18899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (10))){
var inst_18861 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
var statearr_18884_18900 = state_18869__$1;
(statearr_18884_18900[(2)] = inst_18861);

(statearr_18884_18900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (8))){
var inst_18851 = (state_18869[(7)]);
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18869__$1,(11),out,inst_18851);
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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_18885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18885[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_18885[(1)] = (1));

return statearr_18885;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_18869){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_18869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e18886){if((e18886 instanceof Object)){
var ex__15471__auto__ = e18886;
var statearr_18887_18901 = state_18869;
(statearr_18887_18901[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18902 = state_18869;
state_18869 = G__18902;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_18869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_18869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18888 = f__15565__auto__.call(null);
(statearr_18888[(6)] = c__15564__auto___18890);

return statearr_18888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18904 = (function (f,ch,meta18905){
this.f = f;
this.ch = ch;
this.meta18905 = meta18905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18906,meta18905__$1){
var self__ = this;
var _18906__$1 = this;
return (new cljs.core.async.t_cljs$core$async18904(self__.f,self__.ch,meta18905__$1));
}));

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18906){
var self__ = this;
var _18906__$1 = this;
return self__.meta18905;
}));

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18907 = (function (f,ch,meta18905,_,fn1,meta18908){
this.f = f;
this.ch = ch;
this.meta18905 = meta18905;
this._ = _;
this.fn1 = fn1;
this.meta18908 = meta18908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18909,meta18908__$1){
var self__ = this;
var _18909__$1 = this;
return (new cljs.core.async.t_cljs$core$async18907(self__.f,self__.ch,self__.meta18905,self__._,self__.fn1,meta18908__$1));
}));

(cljs.core.async.t_cljs$core$async18907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18909){
var self__ = this;
var _18909__$1 = this;
return self__.meta18908;
}));

(cljs.core.async.t_cljs$core$async18907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__18903_SHARP_){
return f1.call(null,(((p1__18903_SHARP_ == null))?null:self__.f.call(null,p1__18903_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async18907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18905","meta18905",312954870,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18904","cljs.core.async/t_cljs$core$async18904",-1008820058,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18908","meta18908",-523137563,null)], null);
}));

(cljs.core.async.t_cljs$core$async18907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18907");

(cljs.core.async.t_cljs$core$async18907.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18907.
 */
cljs.core.async.__GT_t_cljs$core$async18907 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18907(f__$1,ch__$1,meta18905__$1,___$2,fn1__$1,meta18908){
return (new cljs.core.async.t_cljs$core$async18907(f__$1,ch__$1,meta18905__$1,___$2,fn1__$1,meta18908));
});

}

return (new cljs.core.async.t_cljs$core$async18907(self__.f,self__.ch,self__.meta18905,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18905","meta18905",312954870,null)], null);
}));

(cljs.core.async.t_cljs$core$async18904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18904");

(cljs.core.async.t_cljs$core$async18904.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18904.
 */
cljs.core.async.__GT_t_cljs$core$async18904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18904(f__$1,ch__$1,meta18905){
return (new cljs.core.async.t_cljs$core$async18904(f__$1,ch__$1,meta18905));
});

}

return (new cljs.core.async.t_cljs$core$async18904(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18910 = (function (f,ch,meta18911){
this.f = f;
this.ch = ch;
this.meta18911 = meta18911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18912,meta18911__$1){
var self__ = this;
var _18912__$1 = this;
return (new cljs.core.async.t_cljs$core$async18910(self__.f,self__.ch,meta18911__$1));
}));

(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18912){
var self__ = this;
var _18912__$1 = this;
return self__.meta18911;
}));

(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async18910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18911","meta18911",257436291,null)], null);
}));

(cljs.core.async.t_cljs$core$async18910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18910");

(cljs.core.async.t_cljs$core$async18910.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18910.
 */
cljs.core.async.__GT_t_cljs$core$async18910 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18910(f__$1,ch__$1,meta18911){
return (new cljs.core.async.t_cljs$core$async18910(f__$1,ch__$1,meta18911));
});

}

return (new cljs.core.async.t_cljs$core$async18910(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18913 = (function (p,ch,meta18914){
this.p = p;
this.ch = ch;
this.meta18914 = meta18914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18915,meta18914__$1){
var self__ = this;
var _18915__$1 = this;
return (new cljs.core.async.t_cljs$core$async18913(self__.p,self__.ch,meta18914__$1));
}));

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18915){
var self__ = this;
var _18915__$1 = this;
return self__.meta18914;
}));

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18914","meta18914",435484059,null)], null);
}));

(cljs.core.async.t_cljs$core$async18913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18913");

(cljs.core.async.t_cljs$core$async18913.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async18913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18913.
 */
cljs.core.async.__GT_t_cljs$core$async18913 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18913(p__$1,ch__$1,meta18914){
return (new cljs.core.async.t_cljs$core$async18913(p__$1,ch__$1,meta18914));
});

}

return (new cljs.core.async.t_cljs$core$async18913(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18917 = arguments.length;
switch (G__18917) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15564__auto___18957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_18938){
var state_val_18939 = (state_18938[(1)]);
if((state_val_18939 === (7))){
var inst_18934 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18940_18958 = state_18938__$1;
(statearr_18940_18958[(2)] = inst_18934);

(statearr_18940_18958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (1))){
var state_18938__$1 = state_18938;
var statearr_18941_18959 = state_18938__$1;
(statearr_18941_18959[(2)] = null);

(statearr_18941_18959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (4))){
var inst_18920 = (state_18938[(7)]);
var inst_18920__$1 = (state_18938[(2)]);
var inst_18921 = (inst_18920__$1 == null);
var state_18938__$1 = (function (){var statearr_18942 = state_18938;
(statearr_18942[(7)] = inst_18920__$1);

return statearr_18942;
})();
if(cljs.core.truth_(inst_18921)){
var statearr_18943_18960 = state_18938__$1;
(statearr_18943_18960[(1)] = (5));

} else {
var statearr_18944_18961 = state_18938__$1;
(statearr_18944_18961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (6))){
var inst_18920 = (state_18938[(7)]);
var inst_18925 = p.call(null,inst_18920);
var state_18938__$1 = state_18938;
if(cljs.core.truth_(inst_18925)){
var statearr_18945_18962 = state_18938__$1;
(statearr_18945_18962[(1)] = (8));

} else {
var statearr_18946_18963 = state_18938__$1;
(statearr_18946_18963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (3))){
var inst_18936 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18938__$1,inst_18936);
} else {
if((state_val_18939 === (2))){
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18938__$1,(4),ch);
} else {
if((state_val_18939 === (11))){
var inst_18928 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18947_18964 = state_18938__$1;
(statearr_18947_18964[(2)] = inst_18928);

(statearr_18947_18964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (9))){
var state_18938__$1 = state_18938;
var statearr_18948_18965 = state_18938__$1;
(statearr_18948_18965[(2)] = null);

(statearr_18948_18965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (5))){
var inst_18923 = cljs.core.async.close_BANG_.call(null,out);
var state_18938__$1 = state_18938;
var statearr_18949_18966 = state_18938__$1;
(statearr_18949_18966[(2)] = inst_18923);

(statearr_18949_18966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (10))){
var inst_18931 = (state_18938[(2)]);
var state_18938__$1 = (function (){var statearr_18950 = state_18938;
(statearr_18950[(8)] = inst_18931);

return statearr_18950;
})();
var statearr_18951_18967 = state_18938__$1;
(statearr_18951_18967[(2)] = null);

(statearr_18951_18967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (8))){
var inst_18920 = (state_18938[(7)]);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18938__$1,(11),out,inst_18920);
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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_18952 = [null,null,null,null,null,null,null,null,null];
(statearr_18952[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_18952[(1)] = (1));

return statearr_18952;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_18938){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_18938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e18953){if((e18953 instanceof Object)){
var ex__15471__auto__ = e18953;
var statearr_18954_18968 = state_18938;
(statearr_18954_18968[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18969 = state_18938;
state_18938 = G__18969;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_18938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_18938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_18955 = f__15565__auto__.call(null);
(statearr_18955[(6)] = c__15564__auto___18957);

return statearr_18955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18971 = arguments.length;
switch (G__18971) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15564__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_19034){
var state_val_19035 = (state_19034[(1)]);
if((state_val_19035 === (7))){
var inst_19030 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19036_19074 = state_19034__$1;
(statearr_19036_19074[(2)] = inst_19030);

(statearr_19036_19074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (20))){
var inst_19000 = (state_19034[(7)]);
var inst_19011 = (state_19034[(2)]);
var inst_19012 = cljs.core.next.call(null,inst_19000);
var inst_18986 = inst_19012;
var inst_18987 = null;
var inst_18988 = (0);
var inst_18989 = (0);
var state_19034__$1 = (function (){var statearr_19037 = state_19034;
(statearr_19037[(8)] = inst_18987);

(statearr_19037[(9)] = inst_18989);

(statearr_19037[(10)] = inst_19011);

(statearr_19037[(11)] = inst_18988);

(statearr_19037[(12)] = inst_18986);

return statearr_19037;
})();
var statearr_19038_19075 = state_19034__$1;
(statearr_19038_19075[(2)] = null);

(statearr_19038_19075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (1))){
var state_19034__$1 = state_19034;
var statearr_19039_19076 = state_19034__$1;
(statearr_19039_19076[(2)] = null);

(statearr_19039_19076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (4))){
var inst_18975 = (state_19034[(13)]);
var inst_18975__$1 = (state_19034[(2)]);
var inst_18976 = (inst_18975__$1 == null);
var state_19034__$1 = (function (){var statearr_19040 = state_19034;
(statearr_19040[(13)] = inst_18975__$1);

return statearr_19040;
})();
if(cljs.core.truth_(inst_18976)){
var statearr_19041_19077 = state_19034__$1;
(statearr_19041_19077[(1)] = (5));

} else {
var statearr_19042_19078 = state_19034__$1;
(statearr_19042_19078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (15))){
var state_19034__$1 = state_19034;
var statearr_19046_19079 = state_19034__$1;
(statearr_19046_19079[(2)] = null);

(statearr_19046_19079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (21))){
var state_19034__$1 = state_19034;
var statearr_19047_19080 = state_19034__$1;
(statearr_19047_19080[(2)] = null);

(statearr_19047_19080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (13))){
var inst_18987 = (state_19034[(8)]);
var inst_18989 = (state_19034[(9)]);
var inst_18988 = (state_19034[(11)]);
var inst_18986 = (state_19034[(12)]);
var inst_18996 = (state_19034[(2)]);
var inst_18997 = (inst_18989 + (1));
var tmp19043 = inst_18987;
var tmp19044 = inst_18988;
var tmp19045 = inst_18986;
var inst_18986__$1 = tmp19045;
var inst_18987__$1 = tmp19043;
var inst_18988__$1 = tmp19044;
var inst_18989__$1 = inst_18997;
var state_19034__$1 = (function (){var statearr_19048 = state_19034;
(statearr_19048[(14)] = inst_18996);

(statearr_19048[(8)] = inst_18987__$1);

(statearr_19048[(9)] = inst_18989__$1);

(statearr_19048[(11)] = inst_18988__$1);

(statearr_19048[(12)] = inst_18986__$1);

return statearr_19048;
})();
var statearr_19049_19081 = state_19034__$1;
(statearr_19049_19081[(2)] = null);

(statearr_19049_19081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (22))){
var state_19034__$1 = state_19034;
var statearr_19050_19082 = state_19034__$1;
(statearr_19050_19082[(2)] = null);

(statearr_19050_19082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (6))){
var inst_18975 = (state_19034[(13)]);
var inst_18984 = f.call(null,inst_18975);
var inst_18985 = cljs.core.seq.call(null,inst_18984);
var inst_18986 = inst_18985;
var inst_18987 = null;
var inst_18988 = (0);
var inst_18989 = (0);
var state_19034__$1 = (function (){var statearr_19051 = state_19034;
(statearr_19051[(8)] = inst_18987);

(statearr_19051[(9)] = inst_18989);

(statearr_19051[(11)] = inst_18988);

(statearr_19051[(12)] = inst_18986);

return statearr_19051;
})();
var statearr_19052_19083 = state_19034__$1;
(statearr_19052_19083[(2)] = null);

(statearr_19052_19083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (17))){
var inst_19000 = (state_19034[(7)]);
var inst_19004 = cljs.core.chunk_first.call(null,inst_19000);
var inst_19005 = cljs.core.chunk_rest.call(null,inst_19000);
var inst_19006 = cljs.core.count.call(null,inst_19004);
var inst_18986 = inst_19005;
var inst_18987 = inst_19004;
var inst_18988 = inst_19006;
var inst_18989 = (0);
var state_19034__$1 = (function (){var statearr_19053 = state_19034;
(statearr_19053[(8)] = inst_18987);

(statearr_19053[(9)] = inst_18989);

(statearr_19053[(11)] = inst_18988);

(statearr_19053[(12)] = inst_18986);

return statearr_19053;
})();
var statearr_19054_19084 = state_19034__$1;
(statearr_19054_19084[(2)] = null);

(statearr_19054_19084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (3))){
var inst_19032 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19034__$1,inst_19032);
} else {
if((state_val_19035 === (12))){
var inst_19020 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19055_19085 = state_19034__$1;
(statearr_19055_19085[(2)] = inst_19020);

(statearr_19055_19085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (2))){
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19034__$1,(4),in$);
} else {
if((state_val_19035 === (23))){
var inst_19028 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19056_19086 = state_19034__$1;
(statearr_19056_19086[(2)] = inst_19028);

(statearr_19056_19086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (19))){
var inst_19015 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19057_19087 = state_19034__$1;
(statearr_19057_19087[(2)] = inst_19015);

(statearr_19057_19087[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (11))){
var inst_19000 = (state_19034[(7)]);
var inst_18986 = (state_19034[(12)]);
var inst_19000__$1 = cljs.core.seq.call(null,inst_18986);
var state_19034__$1 = (function (){var statearr_19058 = state_19034;
(statearr_19058[(7)] = inst_19000__$1);

return statearr_19058;
})();
if(inst_19000__$1){
var statearr_19059_19088 = state_19034__$1;
(statearr_19059_19088[(1)] = (14));

} else {
var statearr_19060_19089 = state_19034__$1;
(statearr_19060_19089[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (9))){
var inst_19022 = (state_19034[(2)]);
var inst_19023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19034__$1 = (function (){var statearr_19061 = state_19034;
(statearr_19061[(15)] = inst_19022);

return statearr_19061;
})();
if(cljs.core.truth_(inst_19023)){
var statearr_19062_19090 = state_19034__$1;
(statearr_19062_19090[(1)] = (21));

} else {
var statearr_19063_19091 = state_19034__$1;
(statearr_19063_19091[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (5))){
var inst_18978 = cljs.core.async.close_BANG_.call(null,out);
var state_19034__$1 = state_19034;
var statearr_19064_19092 = state_19034__$1;
(statearr_19064_19092[(2)] = inst_18978);

(statearr_19064_19092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (14))){
var inst_19000 = (state_19034[(7)]);
var inst_19002 = cljs.core.chunked_seq_QMARK_.call(null,inst_19000);
var state_19034__$1 = state_19034;
if(inst_19002){
var statearr_19065_19093 = state_19034__$1;
(statearr_19065_19093[(1)] = (17));

} else {
var statearr_19066_19094 = state_19034__$1;
(statearr_19066_19094[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (16))){
var inst_19018 = (state_19034[(2)]);
var state_19034__$1 = state_19034;
var statearr_19067_19095 = state_19034__$1;
(statearr_19067_19095[(2)] = inst_19018);

(statearr_19067_19095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19035 === (10))){
var inst_18987 = (state_19034[(8)]);
var inst_18989 = (state_19034[(9)]);
var inst_18994 = cljs.core._nth.call(null,inst_18987,inst_18989);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19034__$1,(13),out,inst_18994);
} else {
if((state_val_19035 === (18))){
var inst_19000 = (state_19034[(7)]);
var inst_19009 = cljs.core.first.call(null,inst_19000);
var state_19034__$1 = state_19034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19034__$1,(20),out,inst_19009);
} else {
if((state_val_19035 === (8))){
var inst_18989 = (state_19034[(9)]);
var inst_18988 = (state_19034[(11)]);
var inst_18991 = (inst_18989 < inst_18988);
var inst_18992 = inst_18991;
var state_19034__$1 = state_19034;
if(cljs.core.truth_(inst_18992)){
var statearr_19068_19096 = state_19034__$1;
(statearr_19068_19096[(1)] = (10));

} else {
var statearr_19069_19097 = state_19034__$1;
(statearr_19069_19097[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__15468__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15468__auto____0 = (function (){
var statearr_19070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19070[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15468__auto__);

(statearr_19070[(1)] = (1));

return statearr_19070;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15468__auto____1 = (function (state_19034){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_19034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e19071){if((e19071 instanceof Object)){
var ex__15471__auto__ = e19071;
var statearr_19072_19098 = state_19034;
(statearr_19072_19098[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19099 = state_19034;
state_19034 = G__19099;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15468__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15468__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15468__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15468__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_19073 = f__15565__auto__.call(null);
(statearr_19073[(6)] = c__15564__auto__);

return statearr_19073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));

return c__15564__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19101 = arguments.length;
switch (G__19101) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19104 = arguments.length;
switch (G__19104) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19107 = arguments.length;
switch (G__19107) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15564__auto___19154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_19131){
var state_val_19132 = (state_19131[(1)]);
if((state_val_19132 === (7))){
var inst_19126 = (state_19131[(2)]);
var state_19131__$1 = state_19131;
var statearr_19133_19155 = state_19131__$1;
(statearr_19133_19155[(2)] = inst_19126);

(statearr_19133_19155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (1))){
var inst_19108 = null;
var state_19131__$1 = (function (){var statearr_19134 = state_19131;
(statearr_19134[(7)] = inst_19108);

return statearr_19134;
})();
var statearr_19135_19156 = state_19131__$1;
(statearr_19135_19156[(2)] = null);

(statearr_19135_19156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (4))){
var inst_19111 = (state_19131[(8)]);
var inst_19111__$1 = (state_19131[(2)]);
var inst_19112 = (inst_19111__$1 == null);
var inst_19113 = cljs.core.not.call(null,inst_19112);
var state_19131__$1 = (function (){var statearr_19136 = state_19131;
(statearr_19136[(8)] = inst_19111__$1);

return statearr_19136;
})();
if(inst_19113){
var statearr_19137_19157 = state_19131__$1;
(statearr_19137_19157[(1)] = (5));

} else {
var statearr_19138_19158 = state_19131__$1;
(statearr_19138_19158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (6))){
var state_19131__$1 = state_19131;
var statearr_19139_19159 = state_19131__$1;
(statearr_19139_19159[(2)] = null);

(statearr_19139_19159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (3))){
var inst_19128 = (state_19131[(2)]);
var inst_19129 = cljs.core.async.close_BANG_.call(null,out);
var state_19131__$1 = (function (){var statearr_19140 = state_19131;
(statearr_19140[(9)] = inst_19128);

return statearr_19140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19131__$1,inst_19129);
} else {
if((state_val_19132 === (2))){
var state_19131__$1 = state_19131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19131__$1,(4),ch);
} else {
if((state_val_19132 === (11))){
var inst_19111 = (state_19131[(8)]);
var inst_19120 = (state_19131[(2)]);
var inst_19108 = inst_19111;
var state_19131__$1 = (function (){var statearr_19141 = state_19131;
(statearr_19141[(10)] = inst_19120);

(statearr_19141[(7)] = inst_19108);

return statearr_19141;
})();
var statearr_19142_19160 = state_19131__$1;
(statearr_19142_19160[(2)] = null);

(statearr_19142_19160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (9))){
var inst_19111 = (state_19131[(8)]);
var state_19131__$1 = state_19131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19131__$1,(11),out,inst_19111);
} else {
if((state_val_19132 === (5))){
var inst_19108 = (state_19131[(7)]);
var inst_19111 = (state_19131[(8)]);
var inst_19115 = cljs.core._EQ_.call(null,inst_19111,inst_19108);
var state_19131__$1 = state_19131;
if(inst_19115){
var statearr_19144_19161 = state_19131__$1;
(statearr_19144_19161[(1)] = (8));

} else {
var statearr_19145_19162 = state_19131__$1;
(statearr_19145_19162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (10))){
var inst_19123 = (state_19131[(2)]);
var state_19131__$1 = state_19131;
var statearr_19146_19163 = state_19131__$1;
(statearr_19146_19163[(2)] = inst_19123);

(statearr_19146_19163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19132 === (8))){
var inst_19108 = (state_19131[(7)]);
var tmp19143 = inst_19108;
var inst_19108__$1 = tmp19143;
var state_19131__$1 = (function (){var statearr_19147 = state_19131;
(statearr_19147[(7)] = inst_19108__$1);

return statearr_19147;
})();
var statearr_19148_19164 = state_19131__$1;
(statearr_19148_19164[(2)] = null);

(statearr_19148_19164[(1)] = (2));


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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_19149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19149[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_19149[(1)] = (1));

return statearr_19149;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_19131){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_19131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e19150){if((e19150 instanceof Object)){
var ex__15471__auto__ = e19150;
var statearr_19151_19165 = state_19131;
(statearr_19151_19165[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19166 = state_19131;
state_19131 = G__19166;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_19131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_19131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_19152 = f__15565__auto__.call(null);
(statearr_19152[(6)] = c__15564__auto___19154);

return statearr_19152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19168 = arguments.length;
switch (G__19168) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15564__auto___19234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_19206){
var state_val_19207 = (state_19206[(1)]);
if((state_val_19207 === (7))){
var inst_19202 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19208_19235 = state_19206__$1;
(statearr_19208_19235[(2)] = inst_19202);

(statearr_19208_19235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (1))){
var inst_19169 = (new Array(n));
var inst_19170 = inst_19169;
var inst_19171 = (0);
var state_19206__$1 = (function (){var statearr_19209 = state_19206;
(statearr_19209[(7)] = inst_19170);

(statearr_19209[(8)] = inst_19171);

return statearr_19209;
})();
var statearr_19210_19236 = state_19206__$1;
(statearr_19210_19236[(2)] = null);

(statearr_19210_19236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (4))){
var inst_19174 = (state_19206[(9)]);
var inst_19174__$1 = (state_19206[(2)]);
var inst_19175 = (inst_19174__$1 == null);
var inst_19176 = cljs.core.not.call(null,inst_19175);
var state_19206__$1 = (function (){var statearr_19211 = state_19206;
(statearr_19211[(9)] = inst_19174__$1);

return statearr_19211;
})();
if(inst_19176){
var statearr_19212_19237 = state_19206__$1;
(statearr_19212_19237[(1)] = (5));

} else {
var statearr_19213_19238 = state_19206__$1;
(statearr_19213_19238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (15))){
var inst_19196 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19214_19239 = state_19206__$1;
(statearr_19214_19239[(2)] = inst_19196);

(statearr_19214_19239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (13))){
var state_19206__$1 = state_19206;
var statearr_19215_19240 = state_19206__$1;
(statearr_19215_19240[(2)] = null);

(statearr_19215_19240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (6))){
var inst_19171 = (state_19206[(8)]);
var inst_19192 = (inst_19171 > (0));
var state_19206__$1 = state_19206;
if(cljs.core.truth_(inst_19192)){
var statearr_19216_19241 = state_19206__$1;
(statearr_19216_19241[(1)] = (12));

} else {
var statearr_19217_19242 = state_19206__$1;
(statearr_19217_19242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (3))){
var inst_19204 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19206__$1,inst_19204);
} else {
if((state_val_19207 === (12))){
var inst_19170 = (state_19206[(7)]);
var inst_19194 = cljs.core.vec.call(null,inst_19170);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19206__$1,(15),out,inst_19194);
} else {
if((state_val_19207 === (2))){
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19206__$1,(4),ch);
} else {
if((state_val_19207 === (11))){
var inst_19186 = (state_19206[(2)]);
var inst_19187 = (new Array(n));
var inst_19170 = inst_19187;
var inst_19171 = (0);
var state_19206__$1 = (function (){var statearr_19218 = state_19206;
(statearr_19218[(10)] = inst_19186);

(statearr_19218[(7)] = inst_19170);

(statearr_19218[(8)] = inst_19171);

return statearr_19218;
})();
var statearr_19219_19243 = state_19206__$1;
(statearr_19219_19243[(2)] = null);

(statearr_19219_19243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (9))){
var inst_19170 = (state_19206[(7)]);
var inst_19184 = cljs.core.vec.call(null,inst_19170);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19206__$1,(11),out,inst_19184);
} else {
if((state_val_19207 === (5))){
var inst_19170 = (state_19206[(7)]);
var inst_19179 = (state_19206[(11)]);
var inst_19174 = (state_19206[(9)]);
var inst_19171 = (state_19206[(8)]);
var inst_19178 = (inst_19170[inst_19171] = inst_19174);
var inst_19179__$1 = (inst_19171 + (1));
var inst_19180 = (inst_19179__$1 < n);
var state_19206__$1 = (function (){var statearr_19220 = state_19206;
(statearr_19220[(11)] = inst_19179__$1);

(statearr_19220[(12)] = inst_19178);

return statearr_19220;
})();
if(cljs.core.truth_(inst_19180)){
var statearr_19221_19244 = state_19206__$1;
(statearr_19221_19244[(1)] = (8));

} else {
var statearr_19222_19245 = state_19206__$1;
(statearr_19222_19245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (14))){
var inst_19199 = (state_19206[(2)]);
var inst_19200 = cljs.core.async.close_BANG_.call(null,out);
var state_19206__$1 = (function (){var statearr_19224 = state_19206;
(statearr_19224[(13)] = inst_19199);

return statearr_19224;
})();
var statearr_19225_19246 = state_19206__$1;
(statearr_19225_19246[(2)] = inst_19200);

(statearr_19225_19246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (10))){
var inst_19190 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19226_19247 = state_19206__$1;
(statearr_19226_19247[(2)] = inst_19190);

(statearr_19226_19247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (8))){
var inst_19170 = (state_19206[(7)]);
var inst_19179 = (state_19206[(11)]);
var tmp19223 = inst_19170;
var inst_19170__$1 = tmp19223;
var inst_19171 = inst_19179;
var state_19206__$1 = (function (){var statearr_19227 = state_19206;
(statearr_19227[(7)] = inst_19170__$1);

(statearr_19227[(8)] = inst_19171);

return statearr_19227;
})();
var statearr_19228_19248 = state_19206__$1;
(statearr_19228_19248[(2)] = null);

(statearr_19228_19248[(1)] = (2));


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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_19229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19229[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_19229[(1)] = (1));

return statearr_19229;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_19206){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_19206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e19230){if((e19230 instanceof Object)){
var ex__15471__auto__ = e19230;
var statearr_19231_19249 = state_19206;
(statearr_19231_19249[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19250 = state_19206;
state_19206 = G__19250;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_19206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_19206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_19232 = f__15565__auto__.call(null);
(statearr_19232[(6)] = c__15564__auto___19234);

return statearr_19232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19252 = arguments.length;
switch (G__19252) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15564__auto___19322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15565__auto__ = (function (){var switch__15467__auto__ = (function (state_19294){
var state_val_19295 = (state_19294[(1)]);
if((state_val_19295 === (7))){
var inst_19290 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
var statearr_19296_19323 = state_19294__$1;
(statearr_19296_19323[(2)] = inst_19290);

(statearr_19296_19323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (1))){
var inst_19253 = [];
var inst_19254 = inst_19253;
var inst_19255 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19294__$1 = (function (){var statearr_19297 = state_19294;
(statearr_19297[(7)] = inst_19254);

(statearr_19297[(8)] = inst_19255);

return statearr_19297;
})();
var statearr_19298_19324 = state_19294__$1;
(statearr_19298_19324[(2)] = null);

(statearr_19298_19324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (4))){
var inst_19258 = (state_19294[(9)]);
var inst_19258__$1 = (state_19294[(2)]);
var inst_19259 = (inst_19258__$1 == null);
var inst_19260 = cljs.core.not.call(null,inst_19259);
var state_19294__$1 = (function (){var statearr_19299 = state_19294;
(statearr_19299[(9)] = inst_19258__$1);

return statearr_19299;
})();
if(inst_19260){
var statearr_19300_19325 = state_19294__$1;
(statearr_19300_19325[(1)] = (5));

} else {
var statearr_19301_19326 = state_19294__$1;
(statearr_19301_19326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (15))){
var inst_19284 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
var statearr_19302_19327 = state_19294__$1;
(statearr_19302_19327[(2)] = inst_19284);

(statearr_19302_19327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (13))){
var state_19294__$1 = state_19294;
var statearr_19303_19328 = state_19294__$1;
(statearr_19303_19328[(2)] = null);

(statearr_19303_19328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (6))){
var inst_19254 = (state_19294[(7)]);
var inst_19279 = inst_19254.length;
var inst_19280 = (inst_19279 > (0));
var state_19294__$1 = state_19294;
if(cljs.core.truth_(inst_19280)){
var statearr_19304_19329 = state_19294__$1;
(statearr_19304_19329[(1)] = (12));

} else {
var statearr_19305_19330 = state_19294__$1;
(statearr_19305_19330[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (3))){
var inst_19292 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19294__$1,inst_19292);
} else {
if((state_val_19295 === (12))){
var inst_19254 = (state_19294[(7)]);
var inst_19282 = cljs.core.vec.call(null,inst_19254);
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19294__$1,(15),out,inst_19282);
} else {
if((state_val_19295 === (2))){
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19294__$1,(4),ch);
} else {
if((state_val_19295 === (11))){
var inst_19258 = (state_19294[(9)]);
var inst_19262 = (state_19294[(10)]);
var inst_19272 = (state_19294[(2)]);
var inst_19273 = [];
var inst_19274 = inst_19273.push(inst_19258);
var inst_19254 = inst_19273;
var inst_19255 = inst_19262;
var state_19294__$1 = (function (){var statearr_19306 = state_19294;
(statearr_19306[(7)] = inst_19254);

(statearr_19306[(8)] = inst_19255);

(statearr_19306[(11)] = inst_19274);

(statearr_19306[(12)] = inst_19272);

return statearr_19306;
})();
var statearr_19307_19331 = state_19294__$1;
(statearr_19307_19331[(2)] = null);

(statearr_19307_19331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (9))){
var inst_19254 = (state_19294[(7)]);
var inst_19270 = cljs.core.vec.call(null,inst_19254);
var state_19294__$1 = state_19294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19294__$1,(11),out,inst_19270);
} else {
if((state_val_19295 === (5))){
var inst_19255 = (state_19294[(8)]);
var inst_19258 = (state_19294[(9)]);
var inst_19262 = (state_19294[(10)]);
var inst_19262__$1 = f.call(null,inst_19258);
var inst_19263 = cljs.core._EQ_.call(null,inst_19262__$1,inst_19255);
var inst_19264 = cljs.core.keyword_identical_QMARK_.call(null,inst_19255,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19265 = ((inst_19263) || (inst_19264));
var state_19294__$1 = (function (){var statearr_19308 = state_19294;
(statearr_19308[(10)] = inst_19262__$1);

return statearr_19308;
})();
if(cljs.core.truth_(inst_19265)){
var statearr_19309_19332 = state_19294__$1;
(statearr_19309_19332[(1)] = (8));

} else {
var statearr_19310_19333 = state_19294__$1;
(statearr_19310_19333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (14))){
var inst_19287 = (state_19294[(2)]);
var inst_19288 = cljs.core.async.close_BANG_.call(null,out);
var state_19294__$1 = (function (){var statearr_19312 = state_19294;
(statearr_19312[(13)] = inst_19287);

return statearr_19312;
})();
var statearr_19313_19334 = state_19294__$1;
(statearr_19313_19334[(2)] = inst_19288);

(statearr_19313_19334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (10))){
var inst_19277 = (state_19294[(2)]);
var state_19294__$1 = state_19294;
var statearr_19314_19335 = state_19294__$1;
(statearr_19314_19335[(2)] = inst_19277);

(statearr_19314_19335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19295 === (8))){
var inst_19254 = (state_19294[(7)]);
var inst_19258 = (state_19294[(9)]);
var inst_19262 = (state_19294[(10)]);
var inst_19267 = inst_19254.push(inst_19258);
var tmp19311 = inst_19254;
var inst_19254__$1 = tmp19311;
var inst_19255 = inst_19262;
var state_19294__$1 = (function (){var statearr_19315 = state_19294;
(statearr_19315[(7)] = inst_19254__$1);

(statearr_19315[(8)] = inst_19255);

(statearr_19315[(14)] = inst_19267);

return statearr_19315;
})();
var statearr_19316_19336 = state_19294__$1;
(statearr_19316_19336[(2)] = null);

(statearr_19316_19336[(1)] = (2));


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
var cljs$core$async$state_machine__15468__auto__ = null;
var cljs$core$async$state_machine__15468__auto____0 = (function (){
var statearr_19317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19317[(0)] = cljs$core$async$state_machine__15468__auto__);

(statearr_19317[(1)] = (1));

return statearr_19317;
});
var cljs$core$async$state_machine__15468__auto____1 = (function (state_19294){
while(true){
var ret_value__15469__auto__ = (function (){try{while(true){
var result__15470__auto__ = switch__15467__auto__.call(null,state_19294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15470__auto__;
}
break;
}
}catch (e19318){if((e19318 instanceof Object)){
var ex__15471__auto__ = e19318;
var statearr_19319_19337 = state_19294;
(statearr_19319_19337[(5)] = ex__15471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19338 = state_19294;
state_19294 = G__19338;
continue;
} else {
return ret_value__15469__auto__;
}
break;
}
});
cljs$core$async$state_machine__15468__auto__ = function(state_19294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15468__auto____1.call(this,state_19294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15468__auto____0;
cljs$core$async$state_machine__15468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15468__auto____1;
return cljs$core$async$state_machine__15468__auto__;
})()
})();
var state__15566__auto__ = (function (){var statearr_19320 = f__15565__auto__.call(null);
(statearr_19320[(6)] = c__15564__auto___19322);

return statearr_19320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15566__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
