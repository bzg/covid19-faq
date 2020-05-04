// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__13278 = e.target.readyState;
var fexpr__13277 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__13277.cljs$core$IFn$_invoke$arity$1 ? fexpr__13277.cljs$core$IFn$_invoke$arity$1(G__13278) : fexpr__13277.call(null,G__13278));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13280,handler){
var map__13281 = p__13280;
var map__13281__$1 = (((((!((map__13281 == null))))?(((((map__13281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13281):map__13281);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13281__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13281__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13281__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13281__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13281__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13281__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13281__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__13279_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13279_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___13299 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___13299)){
var response_type_13300 = temp__5735__auto___13299;
(this$__$1.responseType = cljs.core.name(response_type_13300));
} else {
}

var seq__13283_13301 = cljs.core.seq(headers);
var chunk__13284_13302 = null;
var count__13285_13303 = (0);
var i__13286_13304 = (0);
while(true){
if((i__13286_13304 < count__13285_13303)){
var vec__13293_13305 = chunk__13284_13302.cljs$core$IIndexed$_nth$arity$2(null,i__13286_13304);
var k_13306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293_13305,(0),null);
var v_13307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293_13305,(1),null);
this$__$1.setRequestHeader(k_13306,v_13307);


var G__13308 = seq__13283_13301;
var G__13309 = chunk__13284_13302;
var G__13310 = count__13285_13303;
var G__13311 = (i__13286_13304 + (1));
seq__13283_13301 = G__13308;
chunk__13284_13302 = G__13309;
count__13285_13303 = G__13310;
i__13286_13304 = G__13311;
continue;
} else {
var temp__5735__auto___13312 = cljs.core.seq(seq__13283_13301);
if(temp__5735__auto___13312){
var seq__13283_13313__$1 = temp__5735__auto___13312;
if(cljs.core.chunked_seq_QMARK_(seq__13283_13313__$1)){
var c__4609__auto___13314 = cljs.core.chunk_first(seq__13283_13313__$1);
var G__13315 = cljs.core.chunk_rest(seq__13283_13313__$1);
var G__13316 = c__4609__auto___13314;
var G__13317 = cljs.core.count(c__4609__auto___13314);
var G__13318 = (0);
seq__13283_13301 = G__13315;
chunk__13284_13302 = G__13316;
count__13285_13303 = G__13317;
i__13286_13304 = G__13318;
continue;
} else {
var vec__13296_13319 = cljs.core.first(seq__13283_13313__$1);
var k_13320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13296_13319,(0),null);
var v_13321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13296_13319,(1),null);
this$__$1.setRequestHeader(k_13320,v_13321);


var G__13322 = cljs.core.next(seq__13283_13313__$1);
var G__13323 = null;
var G__13324 = (0);
var G__13325 = (0);
seq__13283_13301 = G__13322;
chunk__13284_13302 = G__13323;
count__13285_13303 = G__13324;
i__13286_13304 = G__13325;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
