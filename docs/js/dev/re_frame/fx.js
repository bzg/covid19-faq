// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__13228 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13229 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13229);

try{try{var seq__13230 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13231 = null;
var count__13232 = (0);
var i__13233 = (0);
while(true){
if((i__13233 < count__13232)){
var vec__13240 = cljs.core._nth.call(null,chunk__13231,i__13233);
var effect_key = cljs.core.nth.call(null,vec__13240,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13240,(1),null);
var temp__5733__auto___13262 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13262)){
var effect_fn_13263 = temp__5733__auto___13262;
effect_fn_13263.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13264 = seq__13230;
var G__13265 = chunk__13231;
var G__13266 = count__13232;
var G__13267 = (i__13233 + (1));
seq__13230 = G__13264;
chunk__13231 = G__13265;
count__13232 = G__13266;
i__13233 = G__13267;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13230);
if(temp__5735__auto__){
var seq__13230__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13230__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__13230__$1);
var G__13268 = cljs.core.chunk_rest.call(null,seq__13230__$1);
var G__13269 = c__4609__auto__;
var G__13270 = cljs.core.count.call(null,c__4609__auto__);
var G__13271 = (0);
seq__13230 = G__13268;
chunk__13231 = G__13269;
count__13232 = G__13270;
i__13233 = G__13271;
continue;
} else {
var vec__13243 = cljs.core.first.call(null,seq__13230__$1);
var effect_key = cljs.core.nth.call(null,vec__13243,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13243,(1),null);
var temp__5733__auto___13272 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13272)){
var effect_fn_13273 = temp__5733__auto___13272;
effect_fn_13273.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13274 = cljs.core.next.call(null,seq__13230__$1);
var G__13275 = null;
var G__13276 = (0);
var G__13277 = (0);
seq__13230 = G__13274;
chunk__13231 = G__13275;
count__13232 = G__13276;
i__13233 = G__13277;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__12768__auto___13278 = re_frame.interop.now.call(null);
var duration__12769__auto___13279 = (end__12768__auto___13278 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12769__auto___13279,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__12768__auto___13278);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13228);
}} else {
var seq__13246 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__13247 = null;
var count__13248 = (0);
var i__13249 = (0);
while(true){
if((i__13249 < count__13248)){
var vec__13256 = cljs.core._nth.call(null,chunk__13247,i__13249);
var effect_key = cljs.core.nth.call(null,vec__13256,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13256,(1),null);
var temp__5733__auto___13280 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13280)){
var effect_fn_13281 = temp__5733__auto___13280;
effect_fn_13281.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13282 = seq__13246;
var G__13283 = chunk__13247;
var G__13284 = count__13248;
var G__13285 = (i__13249 + (1));
seq__13246 = G__13282;
chunk__13247 = G__13283;
count__13248 = G__13284;
i__13249 = G__13285;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13246);
if(temp__5735__auto__){
var seq__13246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13246__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__13246__$1);
var G__13286 = cljs.core.chunk_rest.call(null,seq__13246__$1);
var G__13287 = c__4609__auto__;
var G__13288 = cljs.core.count.call(null,c__4609__auto__);
var G__13289 = (0);
seq__13246 = G__13286;
chunk__13247 = G__13287;
count__13248 = G__13288;
i__13249 = G__13289;
continue;
} else {
var vec__13259 = cljs.core.first.call(null,seq__13246__$1);
var effect_key = cljs.core.nth.call(null,vec__13259,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13259,(1),null);
var temp__5733__auto___13290 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13290)){
var effect_fn_13291 = temp__5733__auto___13290;
effect_fn_13291.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13292 = cljs.core.next.call(null,seq__13246__$1);
var G__13293 = null;
var G__13294 = (0);
var G__13295 = (0);
seq__13246 = G__13292;
chunk__13247 = G__13293;
count__13248 = G__13294;
i__13249 = G__13295;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__13296 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13297 = null;
var count__13298 = (0);
var i__13299 = (0);
while(true){
if((i__13299 < count__13298)){
var map__13304 = cljs.core._nth.call(null,chunk__13297,i__13299);
var map__13304__$1 = (((((!((map__13304 == null))))?(((((map__13304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13304):map__13304);
var effect = map__13304__$1;
var ms = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13296,chunk__13297,count__13298,i__13299,map__13304,map__13304__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13296,chunk__13297,count__13298,i__13299,map__13304,map__13304__$1,effect,ms,dispatch))
,ms);
}


var G__13308 = seq__13296;
var G__13309 = chunk__13297;
var G__13310 = count__13298;
var G__13311 = (i__13299 + (1));
seq__13296 = G__13308;
chunk__13297 = G__13309;
count__13298 = G__13310;
i__13299 = G__13311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13296);
if(temp__5735__auto__){
var seq__13296__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13296__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__13296__$1);
var G__13312 = cljs.core.chunk_rest.call(null,seq__13296__$1);
var G__13313 = c__4609__auto__;
var G__13314 = cljs.core.count.call(null,c__4609__auto__);
var G__13315 = (0);
seq__13296 = G__13312;
chunk__13297 = G__13313;
count__13298 = G__13314;
i__13299 = G__13315;
continue;
} else {
var map__13306 = cljs.core.first.call(null,seq__13296__$1);
var map__13306__$1 = (((((!((map__13306 == null))))?(((((map__13306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13306):map__13306);
var effect = map__13306__$1;
var ms = cljs.core.get.call(null,map__13306__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13306__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__13296,chunk__13297,count__13298,i__13299,map__13306,map__13306__$1,effect,ms,dispatch,seq__13296__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__13296,chunk__13297,count__13298,i__13299,map__13306,map__13306__$1,effect,ms,dispatch,seq__13296__$1,temp__5735__auto__))
,ms);
}


var G__13316 = cljs.core.next.call(null,seq__13296__$1);
var G__13317 = null;
var G__13318 = (0);
var G__13319 = (0);
seq__13296 = G__13316;
chunk__13297 = G__13317;
count__13298 = G__13318;
i__13299 = G__13319;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__13320 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13321 = null;
var count__13322 = (0);
var i__13323 = (0);
while(true){
if((i__13323 < count__13322)){
var event = cljs.core._nth.call(null,chunk__13321,i__13323);
re_frame.router.dispatch.call(null,event);


var G__13324 = seq__13320;
var G__13325 = chunk__13321;
var G__13326 = count__13322;
var G__13327 = (i__13323 + (1));
seq__13320 = G__13324;
chunk__13321 = G__13325;
count__13322 = G__13326;
i__13323 = G__13327;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13320);
if(temp__5735__auto__){
var seq__13320__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13320__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__13320__$1);
var G__13328 = cljs.core.chunk_rest.call(null,seq__13320__$1);
var G__13329 = c__4609__auto__;
var G__13330 = cljs.core.count.call(null,c__4609__auto__);
var G__13331 = (0);
seq__13320 = G__13328;
chunk__13321 = G__13329;
count__13322 = G__13330;
i__13323 = G__13331;
continue;
} else {
var event = cljs.core.first.call(null,seq__13320__$1);
re_frame.router.dispatch.call(null,event);


var G__13332 = cljs.core.next.call(null,seq__13320__$1);
var G__13333 = null;
var G__13334 = (0);
var G__13335 = (0);
seq__13320 = G__13332;
chunk__13321 = G__13333;
count__13322 = G__13334;
i__13323 = G__13335;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__13336 = cljs.core.seq.call(null,value);
var chunk__13337 = null;
var count__13338 = (0);
var i__13339 = (0);
while(true){
if((i__13339 < count__13338)){
var event = cljs.core._nth.call(null,chunk__13337,i__13339);
clear_event.call(null,event);


var G__13340 = seq__13336;
var G__13341 = chunk__13337;
var G__13342 = count__13338;
var G__13343 = (i__13339 + (1));
seq__13336 = G__13340;
chunk__13337 = G__13341;
count__13338 = G__13342;
i__13339 = G__13343;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13336);
if(temp__5735__auto__){
var seq__13336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13336__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__13336__$1);
var G__13344 = cljs.core.chunk_rest.call(null,seq__13336__$1);
var G__13345 = c__4609__auto__;
var G__13346 = cljs.core.count.call(null,c__4609__auto__);
var G__13347 = (0);
seq__13336 = G__13344;
chunk__13337 = G__13345;
count__13338 = G__13346;
i__13339 = G__13347;
continue;
} else {
var event = cljs.core.first.call(null,seq__13336__$1);
clear_event.call(null,event);


var G__13348 = cljs.core.next.call(null,seq__13336__$1);
var G__13349 = null;
var G__13350 = (0);
var G__13351 = (0);
seq__13336 = G__13348;
chunk__13337 = G__13349;
count__13338 = G__13350;
i__13339 = G__13351;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
