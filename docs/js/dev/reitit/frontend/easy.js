// Compiled by ClojureScript 1.10.597 {}
goog.provide('reitit.frontend.easy');
goog.require('cljs.core');
goog.require('reitit.frontend.history');
if((typeof reitit !== 'undefined') && (typeof reitit.frontend !== 'undefined') && (typeof reitit.frontend.easy !== 'undefined') && (typeof reitit.frontend.easy.history !== 'undefined')){
} else {
reitit.frontend.easy.history = cljs.core.atom.call(null,null);
}
/**
 * This registers event listeners on HTML5 history and hashchange events.
 * 
 *   Automatically removes previous event listeners so it is safe to call this repeatedly, for example when using
 *   Figwheel or similar development workflow.
 * 
 *   Parameters:
 *   - router         The Reitit router.
 *   - on-navigate    Function to be called when route changes. Takes two parameters, ´match´ and ´history´ object.
 * 
 *   Options:
 *   - :use-fragment  (default true) If true, onhashchange and location hash are used to store the token.
 */
reitit.frontend.easy.start_BANG_ = (function reitit$frontend$easy$start_BANG_(router,on_navigate,opts){
return cljs.core.swap_BANG_.call(null,reitit.frontend.easy.history,(function (old_history){
reitit.frontend.history.stop_BANG_.call(null,old_history);

return reitit.frontend.history.start_BANG_.call(null,router,on_navigate,opts);
}));
});
reitit.frontend.easy.href = (function reitit$frontend$easy$href(var_args){
var G__19449 = arguments.length;
switch (G__19449) {
case 1:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1 = (function (k){
return reitit.frontend.history.href.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,null,null);
}));

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return reitit.frontend.history.href.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,params,null);
}));

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.history.href.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,params,query);
}));

(reitit.frontend.easy.href.cljs$lang$maxFixedArity = 3);

/**
 * Sets the new route, leaving previous route in history.
 */
reitit.frontend.easy.push_state = (function reitit$frontend$easy$push_state(var_args){
var G__19452 = arguments.length;
switch (G__19452) {
case 1:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1 = (function (k){
return reitit.frontend.history.push_state.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,null,null);
}));

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return reitit.frontend.history.push_state.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,params,null);
}));

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.history.push_state.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,params,query);
}));

(reitit.frontend.easy.push_state.cljs$lang$maxFixedArity = 3);

/**
 * Replaces current route. I.e. current route is not left on history.
 */
reitit.frontend.easy.replace_state = (function reitit$frontend$easy$replace_state(var_args){
var G__19455 = arguments.length;
switch (G__19455) {
case 1:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1 = (function (k){
return reitit.frontend.history.replace_state.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,null,null);
}));

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return reitit.frontend.history.replace_state.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,params,null);
}));

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.history.replace_state.call(null,cljs.core.deref.call(null,reitit.frontend.easy.history),k,params,query);
}));

(reitit.frontend.easy.replace_state.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=easy.js.map
