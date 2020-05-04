// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14692 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14693 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14693);

try{try{var seq__14694 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14695 = null;
var count__14696 = (0);
var i__14697 = (0);
while(true){
if((i__14697 < count__14696)){
var vec__14704 = chunk__14695.cljs$core$IIndexed$_nth$arity$2(null,i__14697);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(1),null);
var temp__5733__auto___14726 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14726)){
var effect_fn_14727 = temp__5733__auto___14726;
(effect_fn_14727.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14727.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14727.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14728 = seq__14694;
var G__14729 = chunk__14695;
var G__14730 = count__14696;
var G__14731 = (i__14697 + (1));
seq__14694 = G__14728;
chunk__14695 = G__14729;
count__14696 = G__14730;
i__14697 = G__14731;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14694);
if(temp__5735__auto__){
var seq__14694__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14694__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__14694__$1);
var G__14732 = cljs.core.chunk_rest(seq__14694__$1);
var G__14733 = c__4609__auto__;
var G__14734 = cljs.core.count(c__4609__auto__);
var G__14735 = (0);
seq__14694 = G__14732;
chunk__14695 = G__14733;
count__14696 = G__14734;
i__14697 = G__14735;
continue;
} else {
var vec__14707 = cljs.core.first(seq__14694__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(1),null);
var temp__5733__auto___14736 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14736)){
var effect_fn_14737 = temp__5733__auto___14736;
(effect_fn_14737.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14737.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14737.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14738 = cljs.core.next(seq__14694__$1);
var G__14739 = null;
var G__14740 = (0);
var G__14741 = (0);
seq__14694 = G__14738;
chunk__14695 = G__14739;
count__14696 = G__14740;
i__14697 = G__14741;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__14214__auto___14742 = re_frame.interop.now();
var duration__14215__auto___14743 = (end__14214__auto___14742 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__14215__auto___14743,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__14214__auto___14742);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14692);
}} else {
var seq__14710 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__14711 = null;
var count__14712 = (0);
var i__14713 = (0);
while(true){
if((i__14713 < count__14712)){
var vec__14720 = chunk__14711.cljs$core$IIndexed$_nth$arity$2(null,i__14713);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720,(1),null);
var temp__5733__auto___14744 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14744)){
var effect_fn_14745 = temp__5733__auto___14744;
(effect_fn_14745.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14745.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14745.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14746 = seq__14710;
var G__14747 = chunk__14711;
var G__14748 = count__14712;
var G__14749 = (i__14713 + (1));
seq__14710 = G__14746;
chunk__14711 = G__14747;
count__14712 = G__14748;
i__14713 = G__14749;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14710);
if(temp__5735__auto__){
var seq__14710__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14710__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__14710__$1);
var G__14750 = cljs.core.chunk_rest(seq__14710__$1);
var G__14751 = c__4609__auto__;
var G__14752 = cljs.core.count(c__4609__auto__);
var G__14753 = (0);
seq__14710 = G__14750;
chunk__14711 = G__14751;
count__14712 = G__14752;
i__14713 = G__14753;
continue;
} else {
var vec__14723 = cljs.core.first(seq__14710__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(1),null);
var temp__5733__auto___14754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___14754)){
var effect_fn_14755 = temp__5733__auto___14754;
(effect_fn_14755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14756 = cljs.core.next(seq__14710__$1);
var G__14757 = null;
var G__14758 = (0);
var G__14759 = (0);
seq__14710 = G__14756;
chunk__14711 = G__14757;
count__14712 = G__14758;
i__14713 = G__14759;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__14760 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14761 = null;
var count__14762 = (0);
var i__14763 = (0);
while(true){
if((i__14763 < count__14762)){
var map__14768 = chunk__14761.cljs$core$IIndexed$_nth$arity$2(null,i__14763);
var map__14768__$1 = (((((!((map__14768 == null))))?(((((map__14768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14768):map__14768);
var effect = map__14768__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14768__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14768__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14760,chunk__14761,count__14762,i__14763,map__14768,map__14768__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14760,chunk__14761,count__14762,i__14763,map__14768,map__14768__$1,effect,ms,dispatch))
,ms);
}


var G__14772 = seq__14760;
var G__14773 = chunk__14761;
var G__14774 = count__14762;
var G__14775 = (i__14763 + (1));
seq__14760 = G__14772;
chunk__14761 = G__14773;
count__14762 = G__14774;
i__14763 = G__14775;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14760);
if(temp__5735__auto__){
var seq__14760__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14760__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__14760__$1);
var G__14776 = cljs.core.chunk_rest(seq__14760__$1);
var G__14777 = c__4609__auto__;
var G__14778 = cljs.core.count(c__4609__auto__);
var G__14779 = (0);
seq__14760 = G__14776;
chunk__14761 = G__14777;
count__14762 = G__14778;
i__14763 = G__14779;
continue;
} else {
var map__14770 = cljs.core.first(seq__14760__$1);
var map__14770__$1 = (((((!((map__14770 == null))))?(((((map__14770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14770):map__14770);
var effect = map__14770__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14770__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14770__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__14760,chunk__14761,count__14762,i__14763,map__14770,map__14770__$1,effect,ms,dispatch,seq__14760__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__14760,chunk__14761,count__14762,i__14763,map__14770,map__14770__$1,effect,ms,dispatch,seq__14760__$1,temp__5735__auto__))
,ms);
}


var G__14780 = cljs.core.next(seq__14760__$1);
var G__14781 = null;
var G__14782 = (0);
var G__14783 = (0);
seq__14760 = G__14780;
chunk__14761 = G__14781;
count__14762 = G__14782;
i__14763 = G__14783;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__14784 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14785 = null;
var count__14786 = (0);
var i__14787 = (0);
while(true){
if((i__14787 < count__14786)){
var event = chunk__14785.cljs$core$IIndexed$_nth$arity$2(null,i__14787);
re_frame.router.dispatch(event);


var G__14788 = seq__14784;
var G__14789 = chunk__14785;
var G__14790 = count__14786;
var G__14791 = (i__14787 + (1));
seq__14784 = G__14788;
chunk__14785 = G__14789;
count__14786 = G__14790;
i__14787 = G__14791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14784);
if(temp__5735__auto__){
var seq__14784__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14784__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__14784__$1);
var G__14792 = cljs.core.chunk_rest(seq__14784__$1);
var G__14793 = c__4609__auto__;
var G__14794 = cljs.core.count(c__4609__auto__);
var G__14795 = (0);
seq__14784 = G__14792;
chunk__14785 = G__14793;
count__14786 = G__14794;
i__14787 = G__14795;
continue;
} else {
var event = cljs.core.first(seq__14784__$1);
re_frame.router.dispatch(event);


var G__14796 = cljs.core.next(seq__14784__$1);
var G__14797 = null;
var G__14798 = (0);
var G__14799 = (0);
seq__14784 = G__14796;
chunk__14785 = G__14797;
count__14786 = G__14798;
i__14787 = G__14799;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14800 = cljs.core.seq(value);
var chunk__14801 = null;
var count__14802 = (0);
var i__14803 = (0);
while(true){
if((i__14803 < count__14802)){
var event = chunk__14801.cljs$core$IIndexed$_nth$arity$2(null,i__14803);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__14804 = seq__14800;
var G__14805 = chunk__14801;
var G__14806 = count__14802;
var G__14807 = (i__14803 + (1));
seq__14800 = G__14804;
chunk__14801 = G__14805;
count__14802 = G__14806;
i__14803 = G__14807;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14800);
if(temp__5735__auto__){
var seq__14800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14800__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__14800__$1);
var G__14808 = cljs.core.chunk_rest(seq__14800__$1);
var G__14809 = c__4609__auto__;
var G__14810 = cljs.core.count(c__4609__auto__);
var G__14811 = (0);
seq__14800 = G__14808;
chunk__14801 = G__14809;
count__14802 = G__14810;
i__14803 = G__14811;
continue;
} else {
var event = cljs.core.first(seq__14800__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__14812 = cljs.core.next(seq__14800__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14800 = G__14812;
chunk__14801 = G__14813;
count__14802 = G__14814;
i__14803 = G__14815;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
