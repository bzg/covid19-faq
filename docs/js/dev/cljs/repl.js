// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26105){
var map__26106 = p__26105;
var map__26106__$1 = (((((!((map__26106 == null))))?(((((map__26106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26106):map__26106);
var m = map__26106__$1;
var n = cljs.core.get.call(null,map__26106__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26106__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26108_26140 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26109_26141 = null;
var count__26110_26142 = (0);
var i__26111_26143 = (0);
while(true){
if((i__26111_26143 < count__26110_26142)){
var f_26144 = cljs.core._nth.call(null,chunk__26109_26141,i__26111_26143);
cljs.core.println.call(null,"  ",f_26144);


var G__26145 = seq__26108_26140;
var G__26146 = chunk__26109_26141;
var G__26147 = count__26110_26142;
var G__26148 = (i__26111_26143 + (1));
seq__26108_26140 = G__26145;
chunk__26109_26141 = G__26146;
count__26110_26142 = G__26147;
i__26111_26143 = G__26148;
continue;
} else {
var temp__5735__auto___26149 = cljs.core.seq.call(null,seq__26108_26140);
if(temp__5735__auto___26149){
var seq__26108_26150__$1 = temp__5735__auto___26149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26108_26150__$1)){
var c__4609__auto___26151 = cljs.core.chunk_first.call(null,seq__26108_26150__$1);
var G__26152 = cljs.core.chunk_rest.call(null,seq__26108_26150__$1);
var G__26153 = c__4609__auto___26151;
var G__26154 = cljs.core.count.call(null,c__4609__auto___26151);
var G__26155 = (0);
seq__26108_26140 = G__26152;
chunk__26109_26141 = G__26153;
count__26110_26142 = G__26154;
i__26111_26143 = G__26155;
continue;
} else {
var f_26156 = cljs.core.first.call(null,seq__26108_26150__$1);
cljs.core.println.call(null,"  ",f_26156);


var G__26157 = cljs.core.next.call(null,seq__26108_26150__$1);
var G__26158 = null;
var G__26159 = (0);
var G__26160 = (0);
seq__26108_26140 = G__26157;
chunk__26109_26141 = G__26158;
count__26110_26142 = G__26159;
i__26111_26143 = G__26160;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26161 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26161);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26161)))?cljs.core.second.call(null,arglists_26161):arglists_26161));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26112_26162 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26113_26163 = null;
var count__26114_26164 = (0);
var i__26115_26165 = (0);
while(true){
if((i__26115_26165 < count__26114_26164)){
var vec__26126_26166 = cljs.core._nth.call(null,chunk__26113_26163,i__26115_26165);
var name_26167 = cljs.core.nth.call(null,vec__26126_26166,(0),null);
var map__26129_26168 = cljs.core.nth.call(null,vec__26126_26166,(1),null);
var map__26129_26169__$1 = (((((!((map__26129_26168 == null))))?(((((map__26129_26168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26129_26168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26129_26168):map__26129_26168);
var doc_26170 = cljs.core.get.call(null,map__26129_26169__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26171 = cljs.core.get.call(null,map__26129_26169__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26167);

cljs.core.println.call(null," ",arglists_26171);

if(cljs.core.truth_(doc_26170)){
cljs.core.println.call(null," ",doc_26170);
} else {
}


var G__26172 = seq__26112_26162;
var G__26173 = chunk__26113_26163;
var G__26174 = count__26114_26164;
var G__26175 = (i__26115_26165 + (1));
seq__26112_26162 = G__26172;
chunk__26113_26163 = G__26173;
count__26114_26164 = G__26174;
i__26115_26165 = G__26175;
continue;
} else {
var temp__5735__auto___26176 = cljs.core.seq.call(null,seq__26112_26162);
if(temp__5735__auto___26176){
var seq__26112_26177__$1 = temp__5735__auto___26176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26112_26177__$1)){
var c__4609__auto___26178 = cljs.core.chunk_first.call(null,seq__26112_26177__$1);
var G__26179 = cljs.core.chunk_rest.call(null,seq__26112_26177__$1);
var G__26180 = c__4609__auto___26178;
var G__26181 = cljs.core.count.call(null,c__4609__auto___26178);
var G__26182 = (0);
seq__26112_26162 = G__26179;
chunk__26113_26163 = G__26180;
count__26114_26164 = G__26181;
i__26115_26165 = G__26182;
continue;
} else {
var vec__26131_26183 = cljs.core.first.call(null,seq__26112_26177__$1);
var name_26184 = cljs.core.nth.call(null,vec__26131_26183,(0),null);
var map__26134_26185 = cljs.core.nth.call(null,vec__26131_26183,(1),null);
var map__26134_26186__$1 = (((((!((map__26134_26185 == null))))?(((((map__26134_26185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26134_26185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26134_26185):map__26134_26185);
var doc_26187 = cljs.core.get.call(null,map__26134_26186__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26188 = cljs.core.get.call(null,map__26134_26186__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26184);

cljs.core.println.call(null," ",arglists_26188);

if(cljs.core.truth_(doc_26187)){
cljs.core.println.call(null," ",doc_26187);
} else {
}


var G__26189 = cljs.core.next.call(null,seq__26112_26177__$1);
var G__26190 = null;
var G__26191 = (0);
var G__26192 = (0);
seq__26112_26162 = G__26189;
chunk__26113_26163 = G__26190;
count__26114_26164 = G__26191;
i__26115_26165 = G__26192;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__26136 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26137 = null;
var count__26138 = (0);
var i__26139 = (0);
while(true){
if((i__26139 < count__26138)){
var role = cljs.core._nth.call(null,chunk__26137,i__26139);
var temp__5735__auto___26193__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___26193__$1)){
var spec_26194 = temp__5735__auto___26193__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26194));
} else {
}


var G__26195 = seq__26136;
var G__26196 = chunk__26137;
var G__26197 = count__26138;
var G__26198 = (i__26139 + (1));
seq__26136 = G__26195;
chunk__26137 = G__26196;
count__26138 = G__26197;
i__26139 = G__26198;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__26136);
if(temp__5735__auto____$1){
var seq__26136__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26136__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__26136__$1);
var G__26199 = cljs.core.chunk_rest.call(null,seq__26136__$1);
var G__26200 = c__4609__auto__;
var G__26201 = cljs.core.count.call(null,c__4609__auto__);
var G__26202 = (0);
seq__26136 = G__26199;
chunk__26137 = G__26200;
count__26138 = G__26201;
i__26139 = G__26202;
continue;
} else {
var role = cljs.core.first.call(null,seq__26136__$1);
var temp__5735__auto___26203__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___26203__$2)){
var spec_26204 = temp__5735__auto___26203__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26204));
} else {
}


var G__26205 = cljs.core.next.call(null,seq__26136__$1);
var G__26206 = null;
var G__26207 = (0);
var G__26208 = (0);
seq__26136 = G__26205;
chunk__26137 = G__26206;
count__26138 = G__26207;
i__26139 = G__26208;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26209 = cljs.core.conj.call(null,via,t);
var G__26210 = cljs.core.ex_cause.call(null,t);
via = G__26209;
t = G__26210;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26213 = datafied_throwable;
var map__26213__$1 = (((((!((map__26213 == null))))?(((((map__26213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26213):map__26213);
var via = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26214 = cljs.core.last.call(null,via);
var map__26214__$1 = (((((!((map__26214 == null))))?(((((map__26214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26214):map__26214);
var type = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26215 = data;
var map__26215__$1 = (((((!((map__26215 == null))))?(((((map__26215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26215):map__26215);
var problems = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26216 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__26216__$1 = (((((!((map__26216 == null))))?(((((map__26216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26216):map__26216);
var top_data = map__26216__$1;
var source = cljs.core.get.call(null,map__26216__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__26221 = phase;
var G__26221__$1 = (((G__26221 instanceof cljs.core.Keyword))?G__26221.fqn:null);
switch (G__26221__$1) {
case "read-source":
var map__26222 = data;
var map__26222__$1 = (((((!((map__26222 == null))))?(((((map__26222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26222):map__26222);
var line = cljs.core.get.call(null,map__26222__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26222__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26224 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__26224__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26224,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26224);
var G__26224__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26224__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26224__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26224__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26224__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26225 = top_data;
var G__26225__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26225,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26225);
var G__26225__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26225__$1);
var G__26225__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26225__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26225__$2);
var G__26225__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26225__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26225__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26225__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26225__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26226 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26226,(0),null);
var method = cljs.core.nth.call(null,vec__26226,(1),null);
var file = cljs.core.nth.call(null,vec__26226,(2),null);
var line = cljs.core.nth.call(null,vec__26226,(3),null);
var G__26229 = top_data;
var G__26229__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__26229,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26229);
var G__26229__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__26229__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26229__$1);
var G__26229__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__26229__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26229__$2);
var G__26229__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26229__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26229__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26229__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26229__$4;
}

break;
case "execution":
var vec__26230 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26230,(0),null);
var method = cljs.core.nth.call(null,vec__26230,(1),null);
var file = cljs.core.nth.call(null,vec__26230,(2),null);
var line = cljs.core.nth.call(null,vec__26230,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__26212_SHARP_){
var or__4185__auto__ = (p1__26212_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__26212_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__26233 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26233__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__26233,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26233);
var G__26233__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26233__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26233__$1);
var G__26233__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__26233__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26233__$2);
var G__26233__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__26233__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26233__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26233__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26233__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26221__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26237){
var map__26238 = p__26237;
var map__26238__$1 = (((((!((map__26238 == null))))?(((((map__26238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26238):map__26238);
var triage_data = map__26238__$1;
var phase = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26240 = phase;
var G__26240__$1 = (((G__26240 instanceof cljs.core.Keyword))?G__26240.fqn:null);
switch (G__26240__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26241_26250 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26242_26251 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26243_26252 = true;
var _STAR_print_fn_STAR__temp_val__26244_26253 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26243_26252);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26244_26253);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26235_SHARP_){
return cljs.core.dissoc.call(null,p1__26235_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26242_26251);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26241_26250);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26245_26254 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26246_26255 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26247_26256 = true;
var _STAR_print_fn_STAR__temp_val__26248_26257 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26247_26256);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26248_26257);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26236_SHARP_){
return cljs.core.dissoc.call(null,p1__26236_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26246_26255);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26245_26254);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26240__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
