// Compiled by ClojureScript 1.10.597 {}
goog.provide('covid19faq.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.walk');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('cljsjs.clipboard');
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
covid19faq.core.token = cljs.core.atom.call(null,null);
covid19faq.core.stats = cljs.core.atom.call(null,null);
covid19faq.core.init_filter = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"source","source",-433931539),"",new cljs.core.Keyword(null,"faq","faq",650618613),""], null);
covid19faq.core.global_filter = reagent.core.atom.call(null,covid19faq.core.init_filter);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db!","initialize-db!",-1953074686),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"faqs","faqs",636275568),null,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"filter","filter",-948537934),covid19faq.core.init_filter], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"view!","view!",884950805),(function (db,p__33043){
var vec__33044 = p__33043;
var _ = cljs.core.nth.call(null,vec__33044,(0),null);
var view = cljs.core.nth.call(null,vec__33044,(1),null);
var query_params = cljs.core.nth.call(null,vec__33044,(2),null);
cljs.core.reset_BANG_.call(null,covid19faq.core.global_filter,cljs.core.merge.call(null,covid19faq.core.init_filter,query_params));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter!","filter!",-662122145),cljs.core.merge.call(null,covid19faq.core.init_filter,query_params)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"view","view",1247994814),view);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"view?","view?",655244230),(function (db,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"filter!","filter!",-662122145),(function (db,p__33047){
var vec__33048 = p__33047;
var _ = cljs.core.nth.call(null,vec__33048,(0),null);
var s = cljs.core.nth.call(null,vec__33048,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter","filter",-948537934),cljs.core.merge.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db),s));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filter?","filter?",493339526),(function (db,_){
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"faqs!","faqs!",-1053641999),(function (db,p__33051){
var vec__33052 = p__33051;
var _ = cljs.core.nth.call(null,vec__33052,(0),null);
var faqs = cljs.core.nth.call(null,vec__33052,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"faqs","faqs",636275568),faqs);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"faqs?","faqs?",-1441807817),(function (db,_){
return new cljs.core.Keyword(null,"faqs","faqs",636275568).cljs$core$IFn$_invoke$arity$1(db);
}));
covid19faq.core.apply_filter = (function covid19faq$core$apply_filter(m){
var f = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter?","filter?",493339526)], null)));
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(f);
var src = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(f);
var p = ["(?i).*(",clojure.string.join.call(null,".*",clojure.string.split.call(null,q,/\s+/)),").*"].join('');
if((!(((cljs.core._EQ_.call(null,q,"")) && (cljs.core._EQ_.call(null,"",src)))))){
return cljs.core.filter.call(null,(function (p1__33055_SHARP_){
if(cljs.core.truth_(cljs.core.not_empty.call(null,src))){
return cljs.core._EQ_.call(null,src,new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p1__33055_SHARP_));
} else {
return true;
}
}),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.map.call(null,(function (p1__33056_SHARP_){
if(cljs.core.truth_(cljs.core.not_empty.call(null,q))){
var question = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(p1__33056_SHARP_);
var match_against = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(p1__33056_SHARP_));
var temp__5735__auto__ = cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,p),match_against);
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
var matched = cljs.core.last.call(null,match);
var idx = clojure.string.index_of.call(null,question,matched);
return cljs.core.assoc.call(null,p1__33056_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),idx,new cljs.core.Keyword(null,"q","q",689001697),clojure.string.replace.call(null,question,cljs.core.last.call(null,match),["<b>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,match)),"</b>"].join('')));
} else {
return null;
}
} else {
return p1__33056_SHARP_;
}
}),m)));
} else {
return cljs.core.take.call(null,covid19faq.core.how_many_questions,cljs.core.shuffle.call(null,m));
}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filtered-faq?","filtered-faq?",-902321249),(function (db,_){
return covid19faq.core.apply_filter.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faqs?","faqs?",-1441807817)], null))));
}));
covid19faq.core.filter_chan = cljs.core.async.chan.call(null);
covid19faq.core.start_filter_loop = (function covid19faq$core$start_filter_loop(){
var c__15081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15082__auto__ = (function (){var switch__15058__auto__ = (function (state_33093){
var state_val_33094 = (state_33093[(1)]);
if((state_val_33094 === (7))){
var inst_33077 = (state_33093[(7)]);
var inst_33074 = (state_33093[(2)]);
var inst_33075 = cljs.core.deref.call(null,covid19faq.core.global_filter);
var inst_33076 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(inst_33075);
var inst_33077__$1 = cljs.core.not_empty.call(null,inst_33076);
var state_33093__$1 = (function (){var statearr_33095 = state_33093;
(statearr_33095[(8)] = inst_33074);

(statearr_33095[(7)] = inst_33077__$1);

return statearr_33095;
})();
if(cljs.core.truth_(inst_33077__$1)){
var statearr_33096_33114 = state_33093__$1;
(statearr_33096_33114[(1)] = (8));

} else {
var statearr_33097_33115 = state_33093__$1;
(statearr_33097_33115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (1))){
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33093__$1,(2),covid19faq.core.filter_chan);
} else {
if((state_val_33094 === (4))){
var inst_33091 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33093__$1,inst_33091);
} else {
if((state_val_33094 === (6))){
var state_33093__$1 = state_33093;
var statearr_33098_33116 = state_33093__$1;
(statearr_33098_33116[(2)] = null);

(statearr_33098_33116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (3))){
var inst_33067 = (state_33093[(9)]);
var inst_33059 = (state_33093[(10)]);
var inst_33061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33062 = [new cljs.core.Keyword(null,"filter!","filter!",-662122145),inst_33059];
var inst_33063 = (new cljs.core.PersistentVector(null,2,(5),inst_33061,inst_33062,null));
var inst_33064 = re_frame.core.dispatch.call(null,inst_33063);
var inst_33065 = cljs.core.deref.call(null,covid19faq.core.global_filter);
var inst_33066 = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(inst_33065);
var inst_33067__$1 = cljs.core.not_empty.call(null,inst_33066);
var state_33093__$1 = (function (){var statearr_33099 = state_33093;
(statearr_33099[(9)] = inst_33067__$1);

(statearr_33099[(11)] = inst_33064);

return statearr_33099;
})();
if(cljs.core.truth_(inst_33067__$1)){
var statearr_33100_33117 = state_33093__$1;
(statearr_33100_33117[(1)] = (5));

} else {
var statearr_33101_33118 = state_33093__$1;
(statearr_33101_33118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (2))){
var inst_33058 = (state_33093[(2)]);
var inst_33059 = inst_33058;
var state_33093__$1 = (function (){var statearr_33102 = state_33093;
(statearr_33102[(10)] = inst_33059);

return statearr_33102;
})();
var statearr_33103_33119 = state_33093__$1;
(statearr_33103_33119[(2)] = null);

(statearr_33103_33119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (11))){
var inst_33088 = (state_33093[(2)]);
var inst_33059 = inst_33088;
var state_33093__$1 = (function (){var statearr_33104 = state_33093;
(statearr_33104[(10)] = inst_33059);

return statearr_33104;
})();
var statearr_33105_33120 = state_33093__$1;
(statearr_33105_33120[(2)] = null);

(statearr_33105_33120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (9))){
var state_33093__$1 = state_33093;
var statearr_33106_33121 = state_33093__$1;
(statearr_33106_33121[(2)] = null);

(statearr_33106_33121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (5))){
var inst_33067 = (state_33093[(9)]);
var inst_33069 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_33070 = [inst_33067];
var inst_33071 = cljs.core.PersistentHashMap.fromArrays(inst_33069,inst_33070);
var state_33093__$1 = state_33093;
var statearr_33107_33122 = state_33093__$1;
(statearr_33107_33122[(2)] = inst_33071);

(statearr_33107_33122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33094 === (10))){
var inst_33074 = (state_33093[(8)]);
var inst_33084 = (state_33093[(2)]);
var inst_33085 = cljs.core.merge.call(null,inst_33074,inst_33084);
var inst_33086 = reitit.frontend.easy.push_state.call(null,new cljs.core.Keyword(null,"home","home",-74557309),null,inst_33085);
var state_33093__$1 = (function (){var statearr_33108 = state_33093;
(statearr_33108[(12)] = inst_33086);

return statearr_33108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33093__$1,(11),covid19faq.core.filter_chan);
} else {
if((state_val_33094 === (8))){
var inst_33077 = (state_33093[(7)]);
var inst_33079 = [new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_33080 = [inst_33077];
var inst_33081 = cljs.core.PersistentHashMap.fromArrays(inst_33079,inst_33080);
var state_33093__$1 = state_33093;
var statearr_33109_33123 = state_33093__$1;
(statearr_33109_33123[(2)] = inst_33081);

(statearr_33109_33123[(1)] = (10));


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
var covid19faq$core$start_filter_loop_$_state_machine__15059__auto__ = null;
var covid19faq$core$start_filter_loop_$_state_machine__15059__auto____0 = (function (){
var statearr_33110 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33110[(0)] = covid19faq$core$start_filter_loop_$_state_machine__15059__auto__);

(statearr_33110[(1)] = (1));

return statearr_33110;
});
var covid19faq$core$start_filter_loop_$_state_machine__15059__auto____1 = (function (state_33093){
while(true){
var ret_value__15060__auto__ = (function (){try{while(true){
var result__15061__auto__ = switch__15058__auto__.call(null,state_33093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15061__auto__;
}
break;
}
}catch (e33111){if((e33111 instanceof Object)){
var ex__15062__auto__ = e33111;
var statearr_33112_33124 = state_33093;
(statearr_33112_33124[(5)] = ex__15062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33125 = state_33093;
state_33093 = G__33125;
continue;
} else {
return ret_value__15060__auto__;
}
break;
}
});
covid19faq$core$start_filter_loop_$_state_machine__15059__auto__ = function(state_33093){
switch(arguments.length){
case 0:
return covid19faq$core$start_filter_loop_$_state_machine__15059__auto____0.call(this);
case 1:
return covid19faq$core$start_filter_loop_$_state_machine__15059__auto____1.call(this,state_33093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
covid19faq$core$start_filter_loop_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$0 = covid19faq$core$start_filter_loop_$_state_machine__15059__auto____0;
covid19faq$core$start_filter_loop_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$1 = covid19faq$core$start_filter_loop_$_state_machine__15059__auto____1;
return covid19faq$core$start_filter_loop_$_state_machine__15059__auto__;
})()
})();
var state__15083__auto__ = (function (){var statearr_33113 = f__15082__auto__.call(null);
(statearr_33113[(6)] = c__15081__auto__);

return statearr_33113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15083__auto__);
}));

return c__15081__auto__;
});
covid19faq.core.display_questions = (function covid19faq$core$display_questions(){
var questions = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-faq?","filtered-faq?",-902321249)], null))));
if((!(cljs.core.empty_QMARK_.call(null,questions)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-container","div.table-container",-1574957621),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-hoverable.is-fullwidth.is-striped","table.table.is-hoverable.is-fullwidth.is-striped",1894255522),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function covid19faq$core$display_questions_$_iter__33126(s__33127){
return (new cljs.core.LazySeq(null,(function (){
var s__33127__$1 = s__33127;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33127__$1);
if(temp__5735__auto__){
var s__33127__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33127__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__33127__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__33129 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__33128 = (0);
while(true){
if((i__33128 < size__4581__auto__)){
var question = cljs.core._nth.call(null,c__4580__auto__,i__33128);
var id = new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(question);
var text = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(question);
cljs.core.chunk_append.call(null,b__33129,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33128,id,text,question,c__4580__auto__,size__4581__auto__,b__33129,s__33127__$2,temp__5735__auto__,questions){
return (function (){
return reitit.frontend.easy.push_state.call(null,new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"faq","faq",650618613),id], null));
});})(i__33128,id,text,question,c__4580__auto__,size__4581__auto__,b__33129,s__33127__$2,temp__5735__auto__,questions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),text], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null)));

var G__33130 = (i__33128 + (1));
i__33128 = G__33130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33129),covid19faq$core$display_questions_$_iter__33126.call(null,cljs.core.chunk_rest.call(null,s__33127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33129),null);
}
} else {
var question = cljs.core.first.call(null,s__33127__$2);
var id = new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(question);
var text = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(question);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,text,question,s__33127__$2,temp__5735__auto__,questions){
return (function (){
return reitit.frontend.easy.push_state.call(null,new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"faq","faq",650618613),id], null));
});})(id,text,question,s__33127__$2,temp__5735__auto__,questions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),text], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null)),covid19faq$core$display_questions_$_iter__33126.call(null,cljs.core.rest.call(null,s__33127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,questions);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Aucune question n'a \u00E9t\u00E9 trouv\u00E9e : peut-\u00EAtre une faute de frappe ?"], null);
}
});
covid19faq.core.clipboard_button = (function covid19faq$core$clipboard_button(label,target){
var clipboard_atom = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"clipboard-button",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__33131_SHARP_){
var clipboard = (new ClipboardJS(reagent.dom.dom_node.call(null,p1__33131_SHARP_)));
return cljs.core.reset_BANG_.call(null,clipboard_atom,clipboard);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
if((cljs.core.deref.call(null,clipboard_atom) == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,clipboard_atom,null);
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-fullwidth.is-light.is-size-5","a.button.is-fullwidth.is-light.is-size-5",-1686157807),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Copier dans le presse papier",new cljs.core.Keyword(null,"data-clipboard-target","data-clipboard-target",810388567),target], null),label], null);
})], null));
});
covid19faq.core.strip_html = (function covid19faq$core$strip_html(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/<br\/?>/,"\n"),/<\/?[^>]+>/,"");
});
covid19faq.core.shorten_source_name = (function covid19faq$core$shorten_source_name(s){
var pred__33132 = cljs.core._EQ_;
var expr__33133 = s;
if(cljs.core.truth_(pred__33132.call(null,"Soci\u00E9t\u00E9 Fran\u00E7aise de Pharmacologie et de Th\u00E9rapeutique",expr__33133))){
return "Soci\u00E9t\u00E9 Fran\u00E7aise de Pharmacologie";
} else {
return s;
}
});
covid19faq.core.bottom_links = (function covid19faq$core$bottom_links(p__33135){
var map__33136 = p__33135;
var map__33136__$1 = (((((!((map__33136 == null))))?(((((map__33136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33136):map__33136);
var q = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"q","q",689001697));
var r = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var s = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var u = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var m = cljs.core.get.call(null,map__33136__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var url = document.location.href;
var short_s = covid19faq.core.shorten_source_name.call(null,s);
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
})())?["mailto:","?subject=[COVID-19] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"&body=",clojure.string.replace.call(null,[covid19faq.core.strip_html.call(null,r),"\nSource officielle : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u),"\nEnvoy\u00E9 depuis : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/[\n\t]/,"%0D%0A%0D%0A")].join(''):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-6","div.column.is-6",-321873389),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-fullwidth.is-success.is-light.is-size-5","a.button.is-fullwidth.is-success.is-light.is-size-5",-718665441),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),"new",new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(m)?["R\u00E9ponse en date du ",cljs.core.subs.call(null,m,(0),(10))," - cliquez pour consulter la source"].join(''):null),new cljs.core.Keyword(null,"href","href",-793805698),u], null),["Source: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(short_s)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.has-text-centered.is-3","div.column.has-text-centered.is-3",-1435959251),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-fullwidth.is-info.is-light.is-size-5","a.button.is-fullwidth.is-info.is-light.is-size-5",86006725),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Lire d'autres questions de cette source",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reitit.frontend.easy.push_state.call(null,new cljs.core.Keyword(null,"home","home",-74557309),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),s], null));
})], null),"Questions de cette source"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.has-text-centered.is-2","div.column.has-text-centered.is-2",363241229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-fullwidth.is-warning.is-light.is-size-5","a.button.is-fullwidth.is-warning.is-light.is-size-5",-1185984581),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Envoyer la question et la r\u00E9ponse par email",new cljs.core.Keyword(null,"href","href",-793805698),e_str], null),"\uD83D\uDCE9"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.has-text-centered.is-1","div.column.has-text-centered.is-1",-141203747),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.clipboard_button,"\uD83D\uDCCB","#copy-this"], null)], null)], null);
});
covid19faq.core.send_note = (function covid19faq$core$send_note(id,note){
return ajax.core.GET.call(null,[covid19faq.core.faq_covid_19_api_url,"/note"].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"note","note",1426297904),note], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return cljs.core.prn.call(null,r);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return cljs.core.prn.call(null,r);
})], null));
});
covid19faq.core.display_call_to_note = (function covid19faq$core$display_call_to_note(id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.has-text-centered.is-size-3","div.columns.has-text-centered.is-size-3",605621304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u00C7a ne m'a pas \u00E9t\u00E9 utile",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return covid19faq.core.send_note.call(null,id,"-1");
})], null),"\uD83D\uDE21"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"\u00C7a m'a \u00E9t\u00E9 utile",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return covid19faq.core.send_note.call(null,id,"1");
})], null),"\uD83D\uDE03"], null)], null)], null)], null)], null)], null);
});
covid19faq.core.display_answer = (function covid19faq$core$display_answer(id){
var answer = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var a_url = [covid19faq.core.faq_covid_19_data_url,covid19faq.core.faq_covid_19_answers_dir,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".json"].join('');
return (function (){
ajax.core.GET.call(null,a_url,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__33138_SHARP_){
return cljs.core.reset_BANG_.call(null,answer,clojure.walk.keywordize_keys.call(null,p1__33138_SHARP_));
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"copy-this"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-vcentered","div.columns.is-vcentered",-767831570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.has-text-centered","div.column.has-text-centered",2111281694),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.delete.is-large","a.delete.is-large",1687850240),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Fermer la question",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reitit.frontend.easy.push_state.call(null,new cljs.core.Keyword(null,"home","home",-74557309));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-multiline.is-10","div.column.is-multiline.is-10",-776693871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.is-size-4","strong.is-size-4",327617286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,answer))], null)], null)], null)], null)], null),covid19faq.core.display_call_to_note.call(null,id)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,answer))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),(function (){var temp__5733__auto__ = cljs.core.deref.call(null,answer);
if(cljs.core.truth_(temp__5733__auto__)){
var a = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.bottom_links,a], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
}
})()], null);
});
});
covid19faq.core.faq_sources_select = (function covid19faq$core$faq_sources_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.select","select.select",844936906),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter?","filter?",493339526)], null))));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var ev = e.target.value;
document.getElementById("search").focus();

cljs.core.reset_BANG_.call(null,covid19faq.core.global_filter,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),"",new cljs.core.Keyword(null,"source","source",-433931539),ev], null));

var c__15081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15082__auto__ = (function (){var switch__15058__auto__ = (function (state_33145){
var state_val_33146 = (state_33145[(1)]);
if((state_val_33146 === (1))){
var inst_33139 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_33140 = ["",ev];
var inst_33141 = cljs.core.PersistentHashMap.fromArrays(inst_33139,inst_33140);
var state_33145__$1 = state_33145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33145__$1,(2),covid19faq.core.filter_chan,inst_33141);
} else {
if((state_val_33146 === (2))){
var inst_33143 = (state_33145[(2)]);
var state_33145__$1 = state_33145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33145__$1,inst_33143);
} else {
return null;
}
}
});
return (function() {
var covid19faq$core$faq_sources_select_$_state_machine__15059__auto__ = null;
var covid19faq$core$faq_sources_select_$_state_machine__15059__auto____0 = (function (){
var statearr_33147 = [null,null,null,null,null,null,null];
(statearr_33147[(0)] = covid19faq$core$faq_sources_select_$_state_machine__15059__auto__);

(statearr_33147[(1)] = (1));

return statearr_33147;
});
var covid19faq$core$faq_sources_select_$_state_machine__15059__auto____1 = (function (state_33145){
while(true){
var ret_value__15060__auto__ = (function (){try{while(true){
var result__15061__auto__ = switch__15058__auto__.call(null,state_33145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15061__auto__;
}
break;
}
}catch (e33148){if((e33148 instanceof Object)){
var ex__15062__auto__ = e33148;
var statearr_33149_33155 = state_33145;
(statearr_33149_33155[(5)] = ex__15062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33156 = state_33145;
state_33145 = G__33156;
continue;
} else {
return ret_value__15060__auto__;
}
break;
}
});
covid19faq$core$faq_sources_select_$_state_machine__15059__auto__ = function(state_33145){
switch(arguments.length){
case 0:
return covid19faq$core$faq_sources_select_$_state_machine__15059__auto____0.call(this);
case 1:
return covid19faq$core$faq_sources_select_$_state_machine__15059__auto____1.call(this,state_33145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
covid19faq$core$faq_sources_select_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$0 = covid19faq$core$faq_sources_select_$_state_machine__15059__auto____0;
covid19faq$core$faq_sources_select_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$1 = covid19faq$core$faq_sources_select_$_state_machine__15059__auto____1;
return covid19faq$core$faq_sources_select_$_state_machine__15059__auto__;
})()
})();
var state__15083__auto__ = (function (){var statearr_33150 = f__15082__auto__.call(null);
(statearr_33150[(6)] = c__15081__auto__);

return statearr_33150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15083__auto__);
}));

return c__15081__auto__;
})], null),(function (){var iter__4582__auto__ = (function covid19faq$core$faq_sources_select_$_iter__33151(s__33152){
return (new cljs.core.LazySeq(null,(function (){
var s__33152__$1 = s__33152;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33152__$1);
if(temp__5735__auto__){
var s__33152__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33152__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__33152__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__33154 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__33153 = (0);
while(true){
if((i__33153 < size__4581__auto__)){
var s = cljs.core._nth.call(null,c__4580__auto__,i__33153);
cljs.core.chunk_append.call(null,b__33154,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null),covid19faq.core.shorten_source_name.call(null,s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null)));

var G__33157 = (i__33153 + (1));
i__33153 = G__33157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33154),covid19faq$core$faq_sources_select_$_iter__33151.call(null,cljs.core.chunk_rest.call(null,s__33152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33154),null);
}
} else {
var s = cljs.core.first.call(null,s__33152__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null),covid19faq.core.shorten_source_name.call(null,s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null)], null)),covid19faq$core$faq_sources_select_$_iter__33151.call(null,cljs.core.rest.call(null,s__33152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faqs?","faqs?",-1441807817)], null))))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Tout"], null)], null);
});
covid19faq.core.main_page = (function covid19faq$core$main_page(){
var answer_id = new cljs.core.Keyword(null,"faq","faq",650618613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter?","filter?",493339526)], null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-vcentered","div.columns.is-vcentered",-767831570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.column.is-8","input.input.column.is-8",962488368),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"search",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Recherche",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,covid19faq.core.global_filter));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter?","filter?",493339526)], null))));
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var ev = e.target.value;
var ev_size = cljs.core.count.call(null,ev);
cljs.core.reset_BANG_.call(null,covid19faq.core.global_filter,cljs.core.merge.call(null,cljs.core.deref.call(null,covid19faq.core.global_filter),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),ev], null)));

if(((cljs.core._EQ_.call(null,ev_size,(0))) || ((ev_size >= covid19faq.core.minimum_search_string_size)))){
var c__15081__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15082__auto__ = (function (){var switch__15058__auto__ = (function (state_33167){
var state_val_33168 = (state_33167[(1)]);
if((state_val_33168 === (1))){
var inst_33158 = cljs.core.async.timeout.call(null,covid19faq.core.timeout);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33167__$1,(2),inst_33158);
} else {
if((state_val_33168 === (2))){
var inst_33160 = (state_33167[(2)]);
var inst_33161 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_33162 = [ev];
var inst_33163 = cljs.core.PersistentHashMap.fromArrays(inst_33161,inst_33162);
var state_33167__$1 = (function (){var statearr_33169 = state_33167;
(statearr_33169[(7)] = inst_33160);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33167__$1,(3),covid19faq.core.filter_chan,inst_33163);
} else {
if((state_val_33168 === (3))){
var inst_33165 = (state_33167[(2)]);
var state_33167__$1 = state_33167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33167__$1,inst_33165);
} else {
return null;
}
}
}
});
return (function() {
var covid19faq$core$main_page_$_state_machine__15059__auto__ = null;
var covid19faq$core$main_page_$_state_machine__15059__auto____0 = (function (){
var statearr_33170 = [null,null,null,null,null,null,null,null];
(statearr_33170[(0)] = covid19faq$core$main_page_$_state_machine__15059__auto__);

(statearr_33170[(1)] = (1));

return statearr_33170;
});
var covid19faq$core$main_page_$_state_machine__15059__auto____1 = (function (state_33167){
while(true){
var ret_value__15060__auto__ = (function (){try{while(true){
var result__15061__auto__ = switch__15058__auto__.call(null,state_33167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15061__auto__;
}
break;
}
}catch (e33171){if((e33171 instanceof Object)){
var ex__15062__auto__ = e33171;
var statearr_33172_33174 = state_33167;
(statearr_33172_33174[(5)] = ex__15062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33175 = state_33167;
state_33167 = G__33175;
continue;
} else {
return ret_value__15060__auto__;
}
break;
}
});
covid19faq$core$main_page_$_state_machine__15059__auto__ = function(state_33167){
switch(arguments.length){
case 0:
return covid19faq$core$main_page_$_state_machine__15059__auto____0.call(this);
case 1:
return covid19faq$core$main_page_$_state_machine__15059__auto____1.call(this,state_33167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
covid19faq$core$main_page_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$0 = covid19faq$core$main_page_$_state_machine__15059__auto____0;
covid19faq$core$main_page_$_state_machine__15059__auto__.cljs$core$IFn$_invoke$arity$1 = covid19faq$core$main_page_$_state_machine__15059__auto____1;
return covid19faq$core$main_page_$_state_machine__15059__auto__;
})()
})();
var state__15083__auto__ = (function (){var statearr_33173 = f__15082__auto__.call(null);
(statearr_33173[(6)] = c__15081__auto__);

return statearr_33173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15083__auto__);
}));

return c__15081__auto__;
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),covid19faq.core.faq_sources_select.call(null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,answer_id))?(function (){
ajax.core.GET.call(null,[covid19faq.core.faq_covid_19_api_url,"/hit"].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.deref.call(null,covid19faq.core.token),new cljs.core.Keyword(null,"id","id",-1388402092),answer_id], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return cljs.core.prn.call(null,r);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return cljs.core.prn.call(null,r);
})], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.display_answer,answer_id], null);
})()
:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.display_questions], null))], null);
});
covid19faq.core.main_class = (function covid19faq$core$main_class(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
ajax.core.GET.call(null,[covid19faq.core.faq_covid_19_data_url,covid19faq.core.faq_covid_19_questions].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__33176_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faqs!","faqs!",-1053641999),clojure.walk.keywordize_keys.call(null,p1__33176_SHARP_)], null));
}));

ajax.core.GET.call(null,[covid19faq.core.faq_covid_19_api_url,"/stats"].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__33177_SHARP_){
return cljs.core.reset_BANG_.call(null,covid19faq.core.stats,clojure.walk.keywordize_keys.call(null,p1__33177_SHARP_));
}));

return ajax.core.GET.call(null,[covid19faq.core.faq_covid_19_api_url,"/token"].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__33178_SHARP_){
return cljs.core.reset_BANG_.call(null,covid19faq.core.token,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys.call(null,p1__33178_SHARP_));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
}));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return covid19faq.core.main_page.call(null);
})], null));
});
covid19faq.core.routes = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
covid19faq.core.on_navigate = (function covid19faq$core$on_navigate(match){
var target_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(match);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view!","view!",884950805),cljs.core.keyword.call(null,target_page),params], null));
});
covid19faq.core.init = (function covid19faq$core$init(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db!","initialize-db!",-1953074686)], null));

covid19faq.core.start_filter_loop.call(null);

reitit.frontend.easy.start_BANG_.call(null,reitit.frontend.router.call(null,covid19faq.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),null], null)),covid19faq.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));

reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [covid19faq.core.main_class], null),document.getElementById("app"));

return document.getElementById("search").focus();
});
goog.exportSymbol('covid19faq.core.init', covid19faq.core.init);

//# sourceMappingURL=core.js.map
