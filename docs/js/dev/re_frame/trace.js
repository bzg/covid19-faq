// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__14297){
var map__14298 = p__14297;
var map__14298__$1 = (((((!((map__14298 == null))))?(((((map__14298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14298):map__14298);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14298__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14298__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14298__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14298__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__14300_14324 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__14301_14325 = null;
var count__14302_14326 = (0);
var i__14303_14327 = (0);
while(true){
if((i__14303_14327 < count__14302_14326)){
var vec__14314_14328 = chunk__14301_14325.cljs$core$IIndexed$_nth$arity$2(null,i__14303_14327);
var k_14329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14314_14328,(0),null);
var cb_14330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14314_14328,(1),null);
try{var G__14318_14331 = cljs.core.deref(re_frame.trace.traces);
(cb_14330.cljs$core$IFn$_invoke$arity$1 ? cb_14330.cljs$core$IFn$_invoke$arity$1(G__14318_14331) : cb_14330.call(null,G__14318_14331));
}catch (e14317){var e_14332 = e14317;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14329,"while storing",cljs.core.deref(re_frame.trace.traces),e_14332], 0));
}

var G__14333 = seq__14300_14324;
var G__14334 = chunk__14301_14325;
var G__14335 = count__14302_14326;
var G__14336 = (i__14303_14327 + (1));
seq__14300_14324 = G__14333;
chunk__14301_14325 = G__14334;
count__14302_14326 = G__14335;
i__14303_14327 = G__14336;
continue;
} else {
var temp__5735__auto___14337 = cljs.core.seq(seq__14300_14324);
if(temp__5735__auto___14337){
var seq__14300_14338__$1 = temp__5735__auto___14337;
if(cljs.core.chunked_seq_QMARK_(seq__14300_14338__$1)){
var c__4609__auto___14339 = cljs.core.chunk_first(seq__14300_14338__$1);
var G__14340 = cljs.core.chunk_rest(seq__14300_14338__$1);
var G__14341 = c__4609__auto___14339;
var G__14342 = cljs.core.count(c__4609__auto___14339);
var G__14343 = (0);
seq__14300_14324 = G__14340;
chunk__14301_14325 = G__14341;
count__14302_14326 = G__14342;
i__14303_14327 = G__14343;
continue;
} else {
var vec__14319_14344 = cljs.core.first(seq__14300_14338__$1);
var k_14345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319_14344,(0),null);
var cb_14346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14319_14344,(1),null);
try{var G__14323_14347 = cljs.core.deref(re_frame.trace.traces);
(cb_14346.cljs$core$IFn$_invoke$arity$1 ? cb_14346.cljs$core$IFn$_invoke$arity$1(G__14323_14347) : cb_14346.call(null,G__14323_14347));
}catch (e14322){var e_14348 = e14322;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14345,"while storing",cljs.core.deref(re_frame.trace.traces),e_14348], 0));
}

var G__14349 = cljs.core.next(seq__14300_14338__$1);
var G__14350 = null;
var G__14351 = (0);
var G__14352 = (0);
seq__14300_14324 = G__14349;
chunk__14301_14325 = G__14350;
count__14302_14326 = G__14351;
i__14303_14327 = G__14352;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
