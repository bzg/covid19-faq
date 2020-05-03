// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10599__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10600__i = 0, G__10600__a = new Array(arguments.length -  0);
while (G__10600__i < G__10600__a.length) {G__10600__a[G__10600__i] = arguments[G__10600__i + 0]; ++G__10600__i;}
  args = new cljs.core.IndexedSeq(G__10600__a,0,null);
} 
return G__10599__delegate.call(this,args);};
G__10599.cljs$lang$maxFixedArity = 0;
G__10599.cljs$lang$applyTo = (function (arglist__10601){
var args = cljs.core.seq(arglist__10601);
return G__10599__delegate(args);
});
G__10599.cljs$core$IFn$_invoke$arity$variadic = G__10599__delegate;
return G__10599;
})()
);

(o.error = (function() { 
var G__10602__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10603__i = 0, G__10603__a = new Array(arguments.length -  0);
while (G__10603__i < G__10603__a.length) {G__10603__a[G__10603__i] = arguments[G__10603__i + 0]; ++G__10603__i;}
  args = new cljs.core.IndexedSeq(G__10603__a,0,null);
} 
return G__10602__delegate.call(this,args);};
G__10602.cljs$lang$maxFixedArity = 0;
G__10602.cljs$lang$applyTo = (function (arglist__10604){
var args = cljs.core.seq(arglist__10604);
return G__10602__delegate(args);
});
G__10602.cljs$core$IFn$_invoke$arity$variadic = G__10602__delegate;
return G__10602;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
