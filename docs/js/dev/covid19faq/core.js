// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('covid19faq.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.walk');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
if((typeof covid19faq !== 'undefined') && (typeof covid19faq.core !== 'undefined') && (typeof covid19faq.core.timeout !== 'undefined')){
} else {
covid19faq.core.timeout = (150);
}
if((typeof covid19faq !== 'undefined') && (typeof covid19faq.core !== 'undefined') && (typeof covid19faq.core.how_many_questions !== 'undefined')){
} else {
covid19faq.core.how_many_questions = (12);
}
if((typeof covid19faq !== 'undefined') && (typeof covid19faq.core !== 'undefined') && (typeof covid19faq.core.minimum_search_string_size !== 'undefined')){
} else {
covid19faq.core.minimum_search_string_size = (3);
}
if((typeof covid19faq !== 'undefined') && (typeof covid19faq.core !== 'undefined') && (typeof covid19faq.core.faq_covid_19_api_url !== 'undefined')){
} else {
covid19faq.core.faq_covid_19_api_url = "http://localhost:3000";
}
if((typeof covid19faq !== 'undefined') && (typeof covid19faq.core !== 'undefined') && (typeof covid19faq.core.faq_covid_19_data_url !== 'undefined')){
} else {
covid19faq.core.faq_covid_19_data_url = "https://bzg.github.io/covid19-faq-data/";
}
if((typeof covid19faq !== 'undefined') && (typeof covid19faq.core !== 'undefined') && (typeof covid19faq.core.faq_covid_19_questions !== 'undefined')){
} else {
covid19faq.core.faq_covid_19_questions = "faq-questions.json";
}
if((typeof covid19faq !== 'undefined') && (typeof covid19faq.core !== 'undefined') && (typeof covid19faq.core.faq_covid_19_answers_dir !== 'undefined')){
} else {
covid19faq.core.faq_covid_19_answers_dir = "answers/";
}
covid19faq.core.token = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
covid19faq.core.stats = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
covid19faq.core.noted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
covid19faq.core.init_filter = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$query,"",cljs.core.cst$kw$source,"",cljs.core.cst$kw$sort,"",cljs.core.cst$kw$faq,""], null);
covid19faq.core.global_filter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(covid19faq.core.init_filter);
covid19faq.core.set_focus_on_search = (function covid19faq$core$set_focus_on_search(){
return document.getElementById("search").focus();
});
covid19faq.core.clean_state = (function covid19faq$core$clean_state(m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,(function (){var iter__4582__auto__ = (function covid19faq$core$clean_state_$_iter__21661(s__21662){
return (new cljs.core.LazySeq(null,(function (){
var s__21662__$1 = s__21662;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21662__$1);
if(temp__5735__auto__){
var s__21662__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21662__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__21662__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__21664 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__21663 = (0);
while(true){
if((i__21663 < size__4581__auto__)){
var vec__21665 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__21663);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21665,(1),null);
if(cljs.core.empty_QMARK_(v)){
cljs.core.chunk_append(b__21664,k);

var G__21671 = (i__21663 + (1));
i__21663 = G__21671;
continue;
} else {
var G__21672 = (i__21663 + (1));
i__21663 = G__21672;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21664),covid19faq$core$clean_state_$_iter__21661(cljs.core.chunk_rest(s__21662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21664),null);
}
} else {
var vec__21668 = cljs.core.first(s__21662__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(1),null);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.cons(k,covid19faq$core$clean_state_$_iter__21661(cljs.core.rest(s__21662__$2)));
} else {
var G__21673 = cljs.core.rest(s__21662__$2);
s__21662__$1 = G__21673;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})());
});
/**
 * Set `key` in browser's localStorage to `val`.
 */
covid19faq.core.set_item_BANG_ = (function covid19faq$core$set_item_BANG_(key,val){
return window.localStorage.setItem(key,JSON.stringify(cljs.core.clj__GT_js(val)));
});
/**
 * Return the value of `key` from browser's localStorage.
 */
covid19faq.core.get_item = (function covid19faq$core$get_item(key){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(window.localStorage.getItem(key)));
});
/**
 * Remove the browser's localStorage value for the given `key`.
 */
covid19faq.core.remove_item_BANG_ = (function covid19faq$core$remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db_BANG_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$faqs,null,cljs.core.cst$kw$view,cljs.core.cst$kw$home,cljs.core.cst$kw$filter,covid19faq.core.init_filter], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$view_BANG_,(function (db,p__21674){
var vec__21675 = p__21674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21675,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21675,(1),null);
var query_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21675,(2),null);
cljs.core.reset_BANG_(covid19faq.core.global_filter,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([covid19faq.core.init_filter,query_params], 0)));

var G__21678_21679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_BANG_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([covid19faq.core.init_filter,query_params], 0))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21678_21679) : re_frame.core.dispatch.call(null,G__21678_21679));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$view,view);
}));
var G__21680_21682 = cljs.core.cst$kw$view_QMARK_;
var G__21681_21683 = (function (db,_){
return cljs.core.cst$kw$view.cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21680_21682,G__21681_21683) : re_frame.core.reg_sub.call(null,G__21680_21682,G__21681_21683));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filter_BANG_,(function (db,p__21684){
var vec__21685 = p__21684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$filter,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$filter.cljs$core$IFn$_invoke$arity$1(db),s], 0)));
}));
var G__21688_21690 = cljs.core.cst$kw$filter_QMARK_;
var G__21689_21691 = (function (db,_){
return cljs.core.cst$kw$filter.cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21688_21690,G__21689_21691) : re_frame.core.reg_sub.call(null,G__21688_21690,G__21689_21691));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$faqs_BANG_,(function (db,p__21692){
var vec__21693 = p__21692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693,(0),null);
var faqs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$faqs,faqs);
}));
var G__21696_21698 = cljs.core.cst$kw$faqs_QMARK_;
var G__21697_21699 = (function (db,_){
return cljs.core.cst$kw$faqs.cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21696_21698,G__21697_21699) : re_frame.core.reg_sub.call(null,G__21696_21698,G__21697_21699));
covid19faq.core.apply_filter = (function covid19faq$core$apply_filter(m){
var map__21702 = cljs.core.deref((function (){var G__21703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21703) : re_frame.core.subscribe.call(null,G__21703));
})());
var map__21702__$1 = (((((!((map__21702 == null))))?(((((map__21702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21702):map__21702);
var sort = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,cljs.core.cst$kw$sort);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,cljs.core.cst$kw$query);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21702__$1,cljs.core.cst$kw$source);
var p = ["(?i).*(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".*",clojure.string.split.cljs$core$IFn$_invoke$arity$2(query,/\s+/)),").*"].join('');
var f0 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21700_SHARP_){
if(cljs.core.truth_(cljs.core.not_empty(source))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,cljs.core.cst$kw$s.cljs$core$IFn$_invoke$arity$1(p1__21700_SHARP_));
} else {
return true;
}
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21701_SHARP_){
if(cljs.core.truth_(cljs.core.not_empty(query))){
var question = cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(p1__21701_SHARP_);
var match_against = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(p1__21701_SHARP_));
var temp__5735__auto__ = cljs.core.re_matches(cljs.core.re_pattern(p),match_against);
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
var matched = cljs.core.last(match);
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(question,matched);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__21701_SHARP_,cljs.core.cst$kw$x,idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$q,clojure.string.replace(question,cljs.core.last(match),["<b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(match)),"</b>"].join(''))], 0));
} else {
return null;
}
} else {
return p1__21701_SHARP_;
}
}),m)));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(covid19faq.core.how_many_questions,(function (){var pred__21705 = cljs.core._EQ_;
var expr__21706 = sort;
if(cljs.core.truth_((pred__21705.cljs$core$IFn$_invoke$arity$2 ? pred__21705.cljs$core$IFn$_invoke$arity$2("note",expr__21706) : pred__21705.call(null,"note",expr__21706)))){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$n,f0));
} else {
if(cljs.core.truth_((pred__21705.cljs$core$IFn$_invoke$arity$2 ? pred__21705.cljs$core$IFn$_invoke$arity$2("hits",expr__21706) : pred__21705.call(null,"hits",expr__21706)))){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$h,f0));
} else {
return cljs.core.shuffle(f0);
}
}
})());
});
var G__21708_21711 = cljs.core.cst$kw$filtered_DASH_faq_QMARK_;
var G__21709_21712 = (function (db,_){
return covid19faq.core.apply_filter(cljs.core.deref((function (){var G__21710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faqs_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21710) : re_frame.core.subscribe.call(null,G__21710));
})()));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__21708_21711,G__21709_21712) : re_frame.core.reg_sub.call(null,G__21708_21711,G__21709_21712));
covid19faq.core.filter_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
covid19faq.core.start_filter_loop = (function covid19faq$core$start_filter_loop(){
var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_21759){
var state_val_21760 = (state_21759[(1)]);
if((state_val_21760 === (7))){
var inst_21733 = (state_21759[(7)]);
var inst_21730 = (state_21759[(2)]);
var inst_21731 = cljs.core.deref(covid19faq.core.global_filter);
var inst_21732 = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(inst_21731);
var inst_21733__$1 = cljs.core.not_empty(inst_21732);
var state_21759__$1 = (function (){var statearr_21761 = state_21759;
(statearr_21761[(8)] = inst_21730);

(statearr_21761[(7)] = inst_21733__$1);

return statearr_21761;
})();
if(cljs.core.truth_(inst_21733__$1)){
var statearr_21762_21785 = state_21759__$1;
(statearr_21762_21785[(1)] = (8));

} else {
var statearr_21763_21786 = state_21759__$1;
(statearr_21763_21786[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (1))){
var state_21759__$1 = state_21759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21759__$1,(2),covid19faq.core.filter_chan);
} else {
if((state_val_21760 === (4))){
var inst_21757 = (state_21759[(2)]);
var state_21759__$1 = state_21759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21759__$1,inst_21757);
} else {
if((state_val_21760 === (13))){
var inst_21730 = (state_21759[(8)]);
var inst_21740 = (state_21759[(9)]);
var inst_21750 = (state_21759[(2)]);
var inst_21751 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21730,inst_21740,inst_21750], 0));
var inst_21752 = reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$home,null,inst_21751);
var state_21759__$1 = (function (){var statearr_21764 = state_21759;
(statearr_21764[(10)] = inst_21752);

return statearr_21764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21759__$1,(14),covid19faq.core.filter_chan);
} else {
if((state_val_21760 === (6))){
var state_21759__$1 = state_21759;
var statearr_21765_21787 = state_21759__$1;
(statearr_21765_21787[(2)] = null);

(statearr_21765_21787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (3))){
var inst_21715 = (state_21759[(11)]);
var inst_21723 = (state_21759[(12)]);
var inst_21717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21718 = [cljs.core.cst$kw$filter_BANG_,inst_21715];
var inst_21719 = (new cljs.core.PersistentVector(null,2,(5),inst_21717,inst_21718,null));
var inst_21720 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_21719) : re_frame.core.dispatch.call(null,inst_21719));
var inst_21721 = cljs.core.deref(covid19faq.core.global_filter);
var inst_21722 = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(inst_21721);
var inst_21723__$1 = cljs.core.not_empty(inst_21722);
var state_21759__$1 = (function (){var statearr_21766 = state_21759;
(statearr_21766[(12)] = inst_21723__$1);

(statearr_21766[(13)] = inst_21720);

return statearr_21766;
})();
if(cljs.core.truth_(inst_21723__$1)){
var statearr_21767_21788 = state_21759__$1;
(statearr_21767_21788[(1)] = (5));

} else {
var statearr_21768_21789 = state_21759__$1;
(statearr_21768_21789[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (12))){
var state_21759__$1 = state_21759;
var statearr_21769_21790 = state_21759__$1;
(statearr_21769_21790[(2)] = null);

(statearr_21769_21790[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (2))){
var inst_21714 = (state_21759[(2)]);
var inst_21715 = inst_21714;
var state_21759__$1 = (function (){var statearr_21770 = state_21759;
(statearr_21770[(11)] = inst_21715);

return statearr_21770;
})();
var statearr_21771_21791 = state_21759__$1;
(statearr_21771_21791[(2)] = null);

(statearr_21771_21791[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (11))){
var inst_21743 = (state_21759[(14)]);
var inst_21745 = [cljs.core.cst$kw$sort];
var inst_21746 = [inst_21743];
var inst_21747 = cljs.core.PersistentHashMap.fromArrays(inst_21745,inst_21746);
var state_21759__$1 = state_21759;
var statearr_21772_21792 = state_21759__$1;
(statearr_21772_21792[(2)] = inst_21747);

(statearr_21772_21792[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (9))){
var state_21759__$1 = state_21759;
var statearr_21773_21793 = state_21759__$1;
(statearr_21773_21793[(2)] = null);

(statearr_21773_21793[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (5))){
var inst_21723 = (state_21759[(12)]);
var inst_21725 = [cljs.core.cst$kw$query];
var inst_21726 = [inst_21723];
var inst_21727 = cljs.core.PersistentHashMap.fromArrays(inst_21725,inst_21726);
var state_21759__$1 = state_21759;
var statearr_21774_21794 = state_21759__$1;
(statearr_21774_21794[(2)] = inst_21727);

(statearr_21774_21794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (14))){
var inst_21754 = (state_21759[(2)]);
var inst_21715 = inst_21754;
var state_21759__$1 = (function (){var statearr_21775 = state_21759;
(statearr_21775[(11)] = inst_21715);

return statearr_21775;
})();
var statearr_21776_21795 = state_21759__$1;
(statearr_21776_21795[(2)] = null);

(statearr_21776_21795[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (10))){
var inst_21743 = (state_21759[(14)]);
var inst_21740 = (state_21759[(2)]);
var inst_21741 = cljs.core.deref(covid19faq.core.global_filter);
var inst_21742 = cljs.core.cst$kw$sort.cljs$core$IFn$_invoke$arity$1(inst_21741);
var inst_21743__$1 = cljs.core.not_empty(inst_21742);
var state_21759__$1 = (function (){var statearr_21777 = state_21759;
(statearr_21777[(14)] = inst_21743__$1);

(statearr_21777[(9)] = inst_21740);

return statearr_21777;
})();
if(cljs.core.truth_(inst_21743__$1)){
var statearr_21778_21796 = state_21759__$1;
(statearr_21778_21796[(1)] = (11));

} else {
var statearr_21779_21797 = state_21759__$1;
(statearr_21779_21797[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21760 === (8))){
var inst_21733 = (state_21759[(7)]);
var inst_21735 = [cljs.core.cst$kw$source];
var inst_21736 = [inst_21733];
var inst_21737 = cljs.core.PersistentHashMap.fromArrays(inst_21735,inst_21736);
var state_21759__$1 = state_21759;
var statearr_21780_21798 = state_21759__$1;
(statearr_21780_21798[(2)] = inst_21737);

(statearr_21780_21798[(1)] = (10));


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
var covid19faq$core$start_filter_loop_$_state_machine__17010__auto__ = null;
var covid19faq$core$start_filter_loop_$_state_machine__17010__auto____0 = (function (){
var statearr_21781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21781[(0)] = covid19faq$core$start_filter_loop_$_state_machine__17010__auto__);

(statearr_21781[(1)] = (1));

return statearr_21781;
});
var covid19faq$core$start_filter_loop_$_state_machine__17010__auto____1 = (function (state_21759){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_21759);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e21782){if((e21782 instanceof Object)){
var ex__17013__auto__ = e21782;
var statearr_21783_21799 = state_21759;
(statearr_21783_21799[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21759);

return cljs.core.cst$kw$recur;
} else {
throw e21782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__21800 = state_21759;
state_21759 = G__21800;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
covid19faq$core$start_filter_loop_$_state_machine__17010__auto__ = function(state_21759){
switch(arguments.length){
case 0:
return covid19faq$core$start_filter_loop_$_state_machine__17010__auto____0.call(this);
case 1:
return covid19faq$core$start_filter_loop_$_state_machine__17010__auto____1.call(this,state_21759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
covid19faq$core$start_filter_loop_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = covid19faq$core$start_filter_loop_$_state_machine__17010__auto____0;
covid19faq$core$start_filter_loop_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = covid19faq$core$start_filter_loop_$_state_machine__17010__auto____1;
return covid19faq$core$start_filter_loop_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_21784 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_21784[(6)] = c__17200__auto__);

return statearr_21784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
});
covid19faq.core.display_questions = (function covid19faq$core$display_questions(){
var questions = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.deref((function (){var G__21801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filtered_DASH_faq_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21801) : re_frame.core.subscribe.call(null,G__21801));
})()));
if(cljs.core.seq(questions)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$table_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table$is_DASH_hoverable$is_DASH_fullwidth$is_DASH_striped,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4582__auto__ = (function covid19faq$core$display_questions_$_iter__21802(s__21803){
return (new cljs.core.LazySeq(null,(function (){
var s__21803__$1 = s__21803;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21803__$1);
if(temp__5735__auto__){
var s__21803__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21803__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__21803__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__21805 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__21804 = (0);
while(true){
if((i__21804 < size__4581__auto__)){
var question = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__21804);
var id = cljs.core.cst$kw$i.cljs$core$IFn$_invoke$arity$1(question);
var text = cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(question);
cljs.core.chunk_append(b__21805,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$on_DASH_click,((function (i__21804,id,text,question,c__4580__auto__,size__4581__auto__,b__21805,s__21803__$2,temp__5735__auto__,questions){
return (function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$home,null,covid19faq.core.clean_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(covid19faq.core.global_filter),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$faq,id], null)], 0))));
});})(i__21804,id,text,question,c__4580__auto__,size__4581__auto__,b__21805,s__21803__$2,temp__5735__auto__,questions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,text], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null)));

var G__21806 = (i__21804 + (1));
i__21804 = G__21806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21805),covid19faq$core$display_questions_$_iter__21802(cljs.core.chunk_rest(s__21803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21805),null);
}
} else {
var question = cljs.core.first(s__21803__$2);
var id = cljs.core.cst$kw$i.cljs$core$IFn$_invoke$arity$1(question);
var text = cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(question);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$on_DASH_click,((function (id,text,question,s__21803__$2,temp__5735__auto__,questions){
return (function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$home,null,covid19faq.core.clean_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(covid19faq.core.global_filter),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$faq,id], null)], 0))));
});})(id,text,question,s__21803__$2,temp__5735__auto__,questions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,text], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null)),covid19faq$core$display_questions_$_iter__21802(cljs.core.rest(s__21803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(questions);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Aucune question n'a \u00E9t\u00E9 trouv\u00E9e : peut-\u00EAtre une faute de frappe ?"], null);
}
});
covid19faq.core.clipboard_button = (function covid19faq$core$clipboard_button(label,target){
var clipboard_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"clipboard-button",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (p1__21807_SHARP_){
var clipboard = (new ClipboardJS(reagent.dom.dom_node(p1__21807_SHARP_)));
return cljs.core.reset_BANG_(clipboard_atom,clipboard);
}),cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function (){
if((cljs.core.deref(clipboard_atom) == null)){
return null;
} else {
return cljs.core.reset_BANG_(clipboard_atom,null);
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$button$is_DASH_fullwidth$is_DASH_light$is_DASH_size_DASH_5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Copier dans le presse papier",cljs.core.cst$kw$data_DASH_clipboard_DASH_target,target], null),label], null);
})], null));
});
covid19faq.core.strip_html = (function covid19faq$core$strip_html(s){
return clojure.string.replace(clojure.string.replace(s,/<br\/?>/,"\n"),/<\/?[^>]+>/,"");
});
covid19faq.core.shorten_source_name = (function covid19faq$core$shorten_source_name(s){
var pred__21808 = cljs.core._EQ_;
var expr__21809 = s;
if(cljs.core.truth_((pred__21808.cljs$core$IFn$_invoke$arity$2 ? pred__21808.cljs$core$IFn$_invoke$arity$2("Soci\u00E9t\u00E9 Fran\u00E7aise de Pharmacologie et de Th\u00E9rapeutique",expr__21809) : pred__21808.call(null,"Soci\u00E9t\u00E9 Fran\u00E7aise de Pharmacologie et de Th\u00E9rapeutique",expr__21809)))){
return "Soci\u00E9t\u00E9 Fran\u00E7aise de Pharmacologie";
} else {
return s;
}
});
covid19faq.core.bottom_links = (function covid19faq$core$bottom_links(p__21811){
var map__21812 = p__21811;
var map__21812__$1 = (((((!((map__21812 == null))))?(((((map__21812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21812):map__21812);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,cljs.core.cst$kw$q);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,cljs.core.cst$kw$r);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,cljs.core.cst$kw$s);
var u = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,cljs.core.cst$kw$u);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,cljs.core.cst$kw$m);
var url = document.location.href;
var short_s = covid19faq.core.shorten_source_name(s);
var e_str = (cljs.core.truth_((function (){var and__4174__auto__ = q;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = r;
if(cljs.core.truth_(and__4174__auto____$1)){
var and__4174__auto____$2 = u;
if(cljs.core.truth_(and__4174__auto____$2)){
return url;
} else {
return and__4174__auto____$2;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())?["mailto:","?subject=[COVID-19] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"&body=",clojure.string.replace([covid19faq.core.strip_html(r),"\nSource officielle : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u),"\nEnvoy\u00E9 depuis : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/[\n\t]/,"%0D%0A%0D%0A")].join(''):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$button$is_DASH_fullwidth$is_DASH_success$is_DASH_light$is_DASH_size_DASH_5,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,"new",cljs.core.cst$kw$title,(cljs.core.truth_(m)?["R\u00E9ponse en date du ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),(10))," - cliquez pour consulter la source"].join(''):null),cljs.core.cst$kw$href,u], null),["Source: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(short_s)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$has_DASH_text_DASH_centered$is_DASH_3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$button$is_DASH_fullwidth$is_DASH_info$is_DASH_light$is_DASH_size_DASH_5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Lire d'autres questions de cette source",cljs.core.cst$kw$on_DASH_click,(function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$home,null,covid19faq.core.clean_state(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(covid19faq.core.global_filter),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$faq,"",cljs.core.cst$kw$source,s], null)], 0))));
})], null),"Questions de cette source"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$has_DASH_text_DASH_centered$is_DASH_2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$button$is_DASH_fullwidth$is_DASH_warning$is_DASH_light$is_DASH_size_DASH_5,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Envoyer la question et la r\u00E9ponse par email",cljs.core.cst$kw$href,e_str], null),"\uD83D\uDCE9"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$has_DASH_text_DASH_centered$is_DASH_1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.clipboard_button,"\uD83D\uDCCB","#copy-this"], null)], null)], null);
});
covid19faq.core.send_note = (function covid19faq$core$send_note(id,note){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([covid19faq.core.faq_covid_19_api_url,"/note"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$token,cljs.core.deref(covid19faq.core.token),cljs.core.cst$kw$note,note], null),cljs.core.cst$kw$handler,(function (r){
var pred__21814 = cljs.core._EQ_;
var expr__21815 = cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys(r));
if(cljs.core.truth_((pred__21814.cljs$core$IFn$_invoke$arity$2 ? pred__21814.cljs$core$IFn$_invoke$arity$2("OK",expr__21815) : pred__21814.call(null,"OK",expr__21815)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(covid19faq.core.noted,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,note]));

return covid19faq.core.set_item_BANG_(cljs.core.cst$kw$noted,cljs.core.deref(covid19faq.core.noted));
} else {
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error while sending the note"], 0));
}
}),cljs.core.cst$kw$error_DASH_handler,(function (r){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys(r))], 0));
})], null)], 0));
});
covid19faq.core.display_call_to_note = (function covid19faq$core$display_call_to_note(var_args){
var args__4795__auto__ = [];
var len__4789__auto___21823 = arguments.length;
var i__4790__auto___21824 = (0);
while(true){
if((i__4790__auto___21824 < len__4789__auto___21823)){
args__4795__auto__.push((arguments[i__4790__auto___21824]));

var G__21825 = (i__4790__auto___21824 + (1));
i__4790__auto___21824 = G__21825;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return covid19faq.core.display_call_to_note.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(covid19faq.core.display_call_to_note.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__21819){
var vec__21820 = p__21819;
var inactive_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21820,(0),null);
var ok = "\uD83D\uDE42";
var notok = "\uD83E\uDD14";
var space = "\u00A0\u00A0\u00A0";
if(cljs.core.truth_(inactive_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$has_DASH_text_DASH_centered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$is_DASH_size_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,"Mon appr\u00E9ciation pr\u00E9c\u00E9dente"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",cljs.core.get.cljs$core$IFn$_invoke$arity$2(covid19faq.core.get_item(cljs.core.cst$kw$noted),id)))?ok:notok)], null),space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$is_DASH_size_DASH_3,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Je veux revoter !",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(covid19faq.core.noted,cljs.core.dissoc,id);
})], null),"\uD83D\uDEAE"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$has_DASH_text_DASH_centered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$is_DASH_size_DASH_3,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u00C7a m'a \u00E9t\u00E9 utile\u00A0!",cljs.core.cst$kw$on_DASH_click,(function (){
return covid19faq.core.send_note(id,"1");
})], null),ok], null),space,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$is_DASH_size_DASH_3,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"\u00C7a ne m'a pas \u00E9t\u00E9 utile...",cljs.core.cst$kw$on_DASH_click,(function (){
return covid19faq.core.send_note(id,"-1");
})], null),notok], null)], null);
}
}));

(covid19faq.core.display_call_to_note.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(covid19faq.core.display_call_to_note.cljs$lang$applyTo = (function (seq21817){
var G__21818 = cljs.core.first(seq21817);
var seq21817__$1 = cljs.core.next(seq21817);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21818,seq21817__$1);
}));

covid19faq.core.display_answer = (function covid19faq$core$display_answer(id){
var answer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var a_url = [covid19faq.core.faq_covid_19_data_url,covid19faq.core.faq_covid_19_answers_dir,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".json"].join('');
return (function (){
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(a_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,(function (p1__21826_SHARP_){
return cljs.core.reset_BANG_(answer,clojure.walk.keywordize_keys(p1__21826_SHARP_));
})], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$article,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"copy-this"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_vcentered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_1$has_DASH_text_DASH_centered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$delete$is_DASH_large,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Revenir aux autres questions",cljs.core.cst$kw$on_DASH_click,(function (){
reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$home,null,covid19faq.core.clean_state(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(covid19faq.core.global_filter),cljs.core.cst$kw$faq)));

return covid19faq.core.set_focus_on_search();
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_multiline$is_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong$is_DASH_size_DASH_4,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(answer))], null)], null)], null)], null)], null),((cljs.core.contains_QMARK_(cljs.core.deref(covid19faq.core.noted),id))?covid19faq.core.display_call_to_note.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["inactive"], 0)):covid19faq.core.display_call_to_note(id))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(answer))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null)], null),(function (){var temp__5733__auto__ = cljs.core.deref(answer);
if(cljs.core.truth_(temp__5733__auto__)){
var a = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.bottom_links,a], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null);
}
})()], null);
});
});
covid19faq.core.faq_sources_select = (function covid19faq$core$faq_sources_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,(function (){var or__4185__auto__ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__21828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21828) : re_frame.core.subscribe.call(null,G__21828));
})()));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$on_DASH_change,(function (e){
var ev = e.target.value;
covid19faq.core.set_focus_on_search();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(covid19faq.core.global_filter,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,"",cljs.core.cst$kw$source,ev], null));

var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_21835){
var state_val_21836 = (state_21835[(1)]);
if((state_val_21836 === (1))){
var inst_21829 = [cljs.core.cst$kw$query,cljs.core.cst$kw$source];
var inst_21830 = ["",ev];
var inst_21831 = cljs.core.PersistentHashMap.fromArrays(inst_21829,inst_21830);
var state_21835__$1 = state_21835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21835__$1,(2),covid19faq.core.filter_chan,inst_21831);
} else {
if((state_val_21836 === (2))){
var inst_21833 = (state_21835[(2)]);
var state_21835__$1 = state_21835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21835__$1,inst_21833);
} else {
return null;
}
}
});
return (function() {
var covid19faq$core$faq_sources_select_$_state_machine__17010__auto__ = null;
var covid19faq$core$faq_sources_select_$_state_machine__17010__auto____0 = (function (){
var statearr_21837 = [null,null,null,null,null,null,null];
(statearr_21837[(0)] = covid19faq$core$faq_sources_select_$_state_machine__17010__auto__);

(statearr_21837[(1)] = (1));

return statearr_21837;
});
var covid19faq$core$faq_sources_select_$_state_machine__17010__auto____1 = (function (state_21835){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_21835);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e21838){if((e21838 instanceof Object)){
var ex__17013__auto__ = e21838;
var statearr_21839_21846 = state_21835;
(statearr_21839_21846[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21835);

return cljs.core.cst$kw$recur;
} else {
throw e21838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__21847 = state_21835;
state_21835 = G__21847;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
covid19faq$core$faq_sources_select_$_state_machine__17010__auto__ = function(state_21835){
switch(arguments.length){
case 0:
return covid19faq$core$faq_sources_select_$_state_machine__17010__auto____0.call(this);
case 1:
return covid19faq$core$faq_sources_select_$_state_machine__17010__auto____1.call(this,state_21835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
covid19faq$core$faq_sources_select_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = covid19faq$core$faq_sources_select_$_state_machine__17010__auto____0;
covid19faq$core$faq_sources_select_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = covid19faq$core$faq_sources_select_$_state_machine__17010__auto____1;
return covid19faq$core$faq_sources_select_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_21840 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_21840[(6)] = c__17200__auto__);

return statearr_21840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
})], null),(function (){var iter__4582__auto__ = (function covid19faq$core$faq_sources_select_$_iter__21841(s__21842){
return (new cljs.core.LazySeq(null,(function (){
var s__21842__$1 = s__21842;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__21842__$1);
if(temp__5735__auto__){
var s__21842__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21842__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__21842__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__21844 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__21843 = (0);
while(true){
if((i__21843 < size__4581__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__21843);
cljs.core.chunk_append(b__21844,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,s], null),covid19faq.core.shorten_source_name(s)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null)));

var G__21848 = (i__21843 + (1));
i__21843 = G__21848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21844),covid19faq$core$faq_sources_select_$_iter__21841(cljs.core.chunk_rest(s__21842__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21844),null);
}
} else {
var s = cljs.core.first(s__21842__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,s], null),covid19faq.core.shorten_source_name(s)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.random_uuid()], null)),covid19faq$core$faq_sources_select_$_iter__21841(cljs.core.rest(s__21842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$s,cljs.core.deref((function (){var G__21845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faqs_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21845) : re_frame.core.subscribe.call(null,G__21845));
})()))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,""], null),"Toutes les questions"], null)], null);
});
covid19faq.core.faq_sort_select = (function covid19faq$core$faq_sort_select(sort_type){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,sort_type,cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$on_DASH_change,(function (e){
var ev = e.target.value;
covid19faq.core.set_focus_on_search();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(covid19faq.core.global_filter,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,"",cljs.core.cst$kw$sort,ev], null));

var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_21855){
var state_val_21856 = (state_21855[(1)]);
if((state_val_21856 === (1))){
var inst_21849 = [cljs.core.cst$kw$query,cljs.core.cst$kw$sort];
var inst_21850 = ["",ev];
var inst_21851 = cljs.core.PersistentHashMap.fromArrays(inst_21849,inst_21850);
var state_21855__$1 = state_21855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21855__$1,(2),covid19faq.core.filter_chan,inst_21851);
} else {
if((state_val_21856 === (2))){
var inst_21853 = (state_21855[(2)]);
var state_21855__$1 = state_21855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21855__$1,inst_21853);
} else {
return null;
}
}
});
return (function() {
var covid19faq$core$faq_sort_select_$_state_machine__17010__auto__ = null;
var covid19faq$core$faq_sort_select_$_state_machine__17010__auto____0 = (function (){
var statearr_21857 = [null,null,null,null,null,null,null];
(statearr_21857[(0)] = covid19faq$core$faq_sort_select_$_state_machine__17010__auto__);

(statearr_21857[(1)] = (1));

return statearr_21857;
});
var covid19faq$core$faq_sort_select_$_state_machine__17010__auto____1 = (function (state_21855){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_21855);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e21858){if((e21858 instanceof Object)){
var ex__17013__auto__ = e21858;
var statearr_21859_21861 = state_21855;
(statearr_21859_21861[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21855);

return cljs.core.cst$kw$recur;
} else {
throw e21858;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__21862 = state_21855;
state_21855 = G__21862;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
covid19faq$core$faq_sort_select_$_state_machine__17010__auto__ = function(state_21855){
switch(arguments.length){
case 0:
return covid19faq$core$faq_sort_select_$_state_machine__17010__auto____0.call(this);
case 1:
return covid19faq$core$faq_sort_select_$_state_machine__17010__auto____1.call(this,state_21855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
covid19faq$core$faq_sort_select_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = covid19faq$core$faq_sort_select_$_state_machine__17010__auto____0;
covid19faq$core$faq_sort_select_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = covid19faq$core$faq_sort_select_$_state_machine__17010__auto____1;
return covid19faq$core$faq_sort_select_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_21860 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_21860[(6)] = c__17200__auto__);

return statearr_21860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,""], null),"Au hasard"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"note"], null),"Les mieux not\u00E9es"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"hits"], null),"Les plus consult\u00E9es"], null)], null);
});
covid19faq.core.main_page = (function covid19faq$core$main_page(){
var filter = cljs.core.deref((function (){var G__21863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21863) : re_frame.core.subscribe.call(null,G__21863));
})());
var answer_id = cljs.core.cst$kw$faq.cljs$core$IFn$_invoke$arity$1(filter);
var sort_type = cljs.core.cst$kw$sort.cljs$core$IFn$_invoke$arity$1(filter);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_vcentered,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$input$column$is_DASH_6,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,"search",cljs.core.cst$kw$tabIndex,(0),cljs.core.cst$kw$size,(20),cljs.core.cst$kw$placeholder,"Recherche",cljs.core.cst$kw$value,(function (){var or__4185__auto__ = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(covid19faq.core.global_filter));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__21864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__21864) : re_frame.core.subscribe.call(null,G__21864));
})()));
}
})(),cljs.core.cst$kw$on_DASH_change,(function (e){
var ev = e.target.value;
var ev_size = cljs.core.count(ev);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(covid19faq.core.global_filter,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,ev], null));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev_size,(0))) || ((ev_size >= covid19faq.core.minimum_search_string_size)))){
var c__17200__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17201__auto__ = (function (){var switch__17009__auto__ = (function (state_21874){
var state_val_21875 = (state_21874[(1)]);
if((state_val_21875 === (1))){
var inst_21865 = cljs.core.async.timeout(covid19faq.core.timeout);
var state_21874__$1 = state_21874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21874__$1,(2),inst_21865);
} else {
if((state_val_21875 === (2))){
var inst_21867 = (state_21874[(2)]);
var inst_21868 = [cljs.core.cst$kw$query];
var inst_21869 = [ev];
var inst_21870 = cljs.core.PersistentHashMap.fromArrays(inst_21868,inst_21869);
var state_21874__$1 = (function (){var statearr_21876 = state_21874;
(statearr_21876[(7)] = inst_21867);

return statearr_21876;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21874__$1,(3),covid19faq.core.filter_chan,inst_21870);
} else {
if((state_val_21875 === (3))){
var inst_21872 = (state_21874[(2)]);
var state_21874__$1 = state_21874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21874__$1,inst_21872);
} else {
return null;
}
}
}
});
return (function() {
var covid19faq$core$main_page_$_state_machine__17010__auto__ = null;
var covid19faq$core$main_page_$_state_machine__17010__auto____0 = (function (){
var statearr_21877 = [null,null,null,null,null,null,null,null];
(statearr_21877[(0)] = covid19faq$core$main_page_$_state_machine__17010__auto__);

(statearr_21877[(1)] = (1));

return statearr_21877;
});
var covid19faq$core$main_page_$_state_machine__17010__auto____1 = (function (state_21874){
while(true){
var ret_value__17011__auto__ = (function (){try{while(true){
var result__17012__auto__ = switch__17009__auto__(state_21874);
if(cljs.core.keyword_identical_QMARK_(result__17012__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17012__auto__;
}
break;
}
}catch (e21878){if((e21878 instanceof Object)){
var ex__17013__auto__ = e21878;
var statearr_21879_21881 = state_21874;
(statearr_21879_21881[(5)] = ex__17013__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21874);

return cljs.core.cst$kw$recur;
} else {
throw e21878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17011__auto__,cljs.core.cst$kw$recur)){
var G__21882 = state_21874;
state_21874 = G__21882;
continue;
} else {
return ret_value__17011__auto__;
}
break;
}
});
covid19faq$core$main_page_$_state_machine__17010__auto__ = function(state_21874){
switch(arguments.length){
case 0:
return covid19faq$core$main_page_$_state_machine__17010__auto____0.call(this);
case 1:
return covid19faq$core$main_page_$_state_machine__17010__auto____1.call(this,state_21874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
covid19faq$core$main_page_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$0 = covid19faq$core$main_page_$_state_machine__17010__auto____0;
covid19faq$core$main_page_$_state_machine__17010__auto__.cljs$core$IFn$_invoke$arity$1 = covid19faq$core$main_page_$_state_machine__17010__auto____1;
return covid19faq$core$main_page_$_state_machine__17010__auto__;
})()
})();
var state__17202__auto__ = (function (){var statearr_21880 = (f__17201__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17201__auto__.cljs$core$IFn$_invoke$arity$0() : f__17201__auto__.call(null));
(statearr_21880[(6)] = c__17200__auto__);

return statearr_21880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17202__auto__);
}));

return c__17200__auto__;
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_3,covid19faq.core.faq_sources_select()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_2,covid19faq.core.faq_sort_select(sort_type)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$delete$is_DASH_medium,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"Effacer tous les filtres",cljs.core.cst$kw$on_DASH_click,(function (){
reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$home);

return covid19faq.core.set_focus_on_search();
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),(cljs.core.truth_(cljs.core.not_empty(answer_id))?(function (){
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([covid19faq.core.faq_covid_19_api_url,"/hit"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$format,cljs.core.cst$kw$json,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$token,cljs.core.deref(covid19faq.core.token),cljs.core.cst$kw$id,answer_id], null),cljs.core.cst$kw$handler,(function (r){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));
}),cljs.core.cst$kw$error_DASH_handler,(function (r){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));
})], null)], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.display_answer,answer_id], null);
})()
:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.display_questions], null))], null);
});
covid19faq.core.faq_with_stats = (function covid19faq$core$faq_with_stats(m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21883){
var map__21884 = p__21883;
var map__21884__$1 = (((((!((map__21884 == null))))?(((((map__21884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21884):map__21884);
var faq = map__21884__$1;
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21884__$1,cljs.core.cst$kw$i);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([faq,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$h,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(covid19faq.core.stats),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$hits], null)),cljs.core.cst$kw$n,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(covid19faq.core.stats),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$note,cljs.core.cst$kw$mean], null))], null)], 0));
}),clojure.walk.keywordize_keys(m));
});
covid19faq.core.main_class = (function covid19faq$core$main_class(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([covid19faq.core.faq_covid_19_api_url,"/stats"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,(function (p1__21886_SHARP_){
return cljs.core.reset_BANG_(covid19faq.core.stats,clojure.walk.keywordize_keys(p1__21886_SHARP_));
})], 0));

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([covid19faq.core.faq_covid_19_api_url,"/token"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,(function (p1__21887_SHARP_){
return cljs.core.reset_BANG_(covid19faq.core.token,(function (){var or__4185__auto__ = cljs.core.cst$kw$token.cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys(p1__21887_SHARP_));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
})], 0));

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([covid19faq.core.faq_covid_19_data_url,covid19faq.core.faq_covid_19_questions].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,(function (p1__21888_SHARP_){
var G__21889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$faqs_BANG_,covid19faq.core.faq_with_stats(p1__21888_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21889) : re_frame.core.dispatch.call(null,G__21889));
})], 0));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return covid19faq.core.main_page();
})], null));
});
covid19faq.core.routes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$home], null)], null);
covid19faq.core.on_navigate = (function covid19faq$core$on_navigate(match){
var G__21890 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$view_BANG_,cljs.core.cst$kw$home,cljs.core.cst$kw$query_DASH_params.cljs$core$IFn$_invoke$arity$1(match)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21890) : re_frame.core.dispatch.call(null,G__21890));
});
covid19faq.core.init = (function covid19faq$core$init(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

var G__21891_21892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db_BANG_], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__21891_21892) : re_frame.core.dispatch_sync.call(null,G__21891_21892));

covid19faq.core.start_filter_loop();

reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(covid19faq.core.routes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$conflicts,null], null)),covid19faq.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$use_DASH_fragment,true], null));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.main_class], null),document.getElementById("app"));

return covid19faq.core.set_focus_on_search();
});
goog.exportSymbol('covid19faq.core.init', covid19faq.core.init);
