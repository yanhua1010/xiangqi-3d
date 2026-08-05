(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Nd={exports:{}},El={};var Bv;function w1(){if(Bv)return El;Bv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return El.Fragment=t,El.jsx=n,El.jsxs=n,El}var Iv;function C1(){return Iv||(Iv=1,Nd.exports=w1()),Nd.exports}var At=C1(),Pd={exports:{}},fe={};var zv;function D1(){if(zv)return fe;zv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function S(I,Q,Mt){this.props=I,this.context=Q,this.refs=y,this.updater=Mt||M}S.prototype.isReactComponent={},S.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function D(){}D.prototype=S.prototype;function U(I,Q,Mt){this.props=I,this.context=Q,this.refs=y,this.updater=Mt||M}var R=U.prototype=new D;R.constructor=U,T(R,S.prototype),R.isPureReactComponent=!0;var B=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function P(I,Q,Mt){var wt=Mt.ref;return{$$typeof:s,type:I,key:Q,ref:wt!==void 0?wt:null,props:Mt}}function V(I,Q){return P(I.type,Q,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function X(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Mt){return Q[Mt]})}var tt=/\/+/g;function ut(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?X(""+I.key):Q.toString(36)}function q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,Q,Mt,wt,Nt){var et=typeof I;(et==="undefined"||et==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(et){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case s:case t:St=!0;break;case _:return St=I._init,F(St(I._payload),Q,Mt,wt,Nt)}}if(St)return Nt=Nt(I),St=wt===""?"."+ut(I,0):wt,B(Nt)?(Mt="",St!=null&&(Mt=St.replace(tt,"$&/")+"/"),F(Nt,Q,Mt,"",function(se){return se})):Nt!=null&&(G(Nt)&&(Nt=V(Nt,Mt+(Nt.key==null||I&&I.key===Nt.key?"":(""+Nt.key).replace(tt,"$&/")+"/")+St)),Q.push(Nt)),1;St=0;var xt=wt===""?".":wt+":";if(B(I))for(var Ht=0;Ht<I.length;Ht++)wt=I[Ht],et=xt+ut(wt,Ht),St+=F(wt,Q,Mt,et,Nt);else if(Ht=x(I),typeof Ht=="function")for(I=Ht.call(I),Ht=0;!(wt=I.next()).done;)wt=wt.value,et=xt+ut(wt,Ht++),St+=F(wt,Q,Mt,et,Nt);else if(et==="object"){if(typeof I.then=="function")return F(q(I),Q,Mt,wt,Nt);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return St}function H(I,Q,Mt){if(I==null)return I;var wt=[],Nt=0;return F(I,wt,"","",function(et){return Q.call(Mt,et,Nt++)}),wt}function $(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(Mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=Mt)},function(Mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=Mt)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var dt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},bt={map:H,forEach:function(I,Q,Mt){H(I,function(){Q.apply(this,arguments)},Mt)},count:function(I){var Q=0;return H(I,function(){Q++}),Q},toArray:function(I){return H(I,function(Q){return Q})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return fe.Activity=v,fe.Children=bt,fe.Component=S,fe.Fragment=n,fe.Profiler=o,fe.PureComponent=U,fe.StrictMode=a,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},fe.cache=function(I){return function(){return I.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(I,Q,Mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var wt=T({},I.props),Nt=I.key;if(Q!=null)for(et in Q.key!==void 0&&(Nt=""+Q.key),Q)!A.call(Q,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Q.ref===void 0||(wt[et]=Q[et]);var et=arguments.length-2;if(et===1)wt.children=Mt;else if(1<et){for(var St=Array(et),xt=0;xt<et;xt++)St[xt]=arguments[xt+2];wt.children=St}return P(I.type,Nt,wt)},fe.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},fe.createElement=function(I,Q,Mt){var wt,Nt={},et=null;if(Q!=null)for(wt in Q.key!==void 0&&(et=""+Q.key),Q)A.call(Q,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Nt[wt]=Q[wt]);var St=arguments.length-2;if(St===1)Nt.children=Mt;else if(1<St){for(var xt=Array(St),Ht=0;Ht<St;Ht++)xt[Ht]=arguments[Ht+2];Nt.children=xt}if(I&&I.defaultProps)for(wt in St=I.defaultProps,St)Nt[wt]===void 0&&(Nt[wt]=St[wt]);return P(I,et,Nt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(I){return{$$typeof:h,render:I}},fe.isValidElement=G,fe.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:$}},fe.memo=function(I,Q){return{$$typeof:d,type:I,compare:Q===void 0?null:Q}},fe.startTransition=function(I){var Q=O.T,Mt={};O.T=Mt;try{var wt=I(),Nt=O.S;Nt!==null&&Nt(Mt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(N,dt)}catch(et){dt(et)}finally{Q!==null&&Mt.types!==null&&(Q.types=Mt.types),O.T=Q}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(I){return O.H.use(I)},fe.useActionState=function(I,Q,Mt){return O.H.useActionState(I,Q,Mt)},fe.useCallback=function(I,Q){return O.H.useCallback(I,Q)},fe.useContext=function(I){return O.H.useContext(I)},fe.useDebugValue=function(){},fe.useDeferredValue=function(I,Q){return O.H.useDeferredValue(I,Q)},fe.useEffect=function(I,Q){return O.H.useEffect(I,Q)},fe.useEffectEvent=function(I){return O.H.useEffectEvent(I)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(I,Q,Mt){return O.H.useImperativeHandle(I,Q,Mt)},fe.useInsertionEffect=function(I,Q){return O.H.useInsertionEffect(I,Q)},fe.useLayoutEffect=function(I,Q){return O.H.useLayoutEffect(I,Q)},fe.useMemo=function(I,Q){return O.H.useMemo(I,Q)},fe.useOptimistic=function(I,Q){return O.H.useOptimistic(I,Q)},fe.useReducer=function(I,Q,Mt){return O.H.useReducer(I,Q,Mt)},fe.useRef=function(I){return O.H.useRef(I)},fe.useState=function(I){return O.H.useState(I)},fe.useSyncExternalStore=function(I,Q,Mt){return O.H.useSyncExternalStore(I,Q,Mt)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.2.3",fe}var Fv;function bm(){return Fv||(Fv=1,Pd.exports=D1()),Pd.exports}var ot=bm(),Od={exports:{}},Tl={},Bd={exports:{}},Id={};var Hv;function U1(){return Hv||(Hv=1,(function(s){function t(F,H){var $=F.length;F.push(H);t:for(;0<$;){var dt=$-1>>>1,bt=F[dt];if(0<o(bt,H))F[dt]=H,F[$]=bt,$=dt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;t:for(var dt=0,bt=F.length,I=bt>>>1;dt<I;){var Q=2*(dt+1)-1,Mt=F[Q],wt=Q+1,Nt=F[wt];if(0>o(Mt,$))wt<bt&&0>o(Nt,Mt)?(F[dt]=Nt,F[wt]=$,dt=wt):(F[dt]=Mt,F[Q]=$,dt=Q);else if(wt<bt&&0>o(Nt,$))F[dt]=Nt,F[wt]=$,dt=wt;else break t}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],d=[],_=1,v=null,g=3,x=!1,M=!1,T=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=F)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function B(F){if(T=!1,R(F),!M)if(n(p)!==null)M=!0,N||(N=!0,X());else{var H=n(d);H!==null&&q(B,H.startTime-F)}}var N=!1,O=-1,A=5,P=-1;function V(){return y?!0:!(s.unstable_now()-P<A)}function G(){if(y=!1,N){var F=s.unstable_now();P=F;var H=!0;try{t:{M=!1,T&&(T=!1,D(O),O=-1),x=!0;var $=g;try{e:{for(R(F),v=n(p);v!==null&&!(v.expirationTime>F&&V());){var dt=v.callback;if(typeof dt=="function"){v.callback=null,g=v.priorityLevel;var bt=dt(v.expirationTime<=F);if(F=s.unstable_now(),typeof bt=="function"){v.callback=bt,R(F),H=!0;break e}v===n(p)&&a(p),R(F)}else a(p);v=n(p)}if(v!==null)H=!0;else{var I=n(d);I!==null&&q(B,I.startTime-F),H=!1}}break t}finally{v=null,g=$,x=!1}H=void 0}}finally{H?X():N=!1}}}var X;if(typeof U=="function")X=function(){U(G)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ut=tt.port2;tt.port1.onmessage=G,X=function(){ut.postMessage(null)}}else X=function(){S(G,0)};function q(F,H){O=S(function(){F(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(F){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var $=g;g=H;try{return F()}finally{g=$}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=g;g=F;try{return H()}finally{g=$}},s.unstable_scheduleCallback=function(F,H,$){var dt=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?dt+$:dt):$=dt,F){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=$+bt,F={id:_++,callback:H,priorityLevel:F,startTime:$,expirationTime:bt,sortIndex:-1},$>dt?(F.sortIndex=$,t(d,F),n(p)===null&&F===n(d)&&(T?(D(O),O=-1):T=!0,q(B,$-dt))):(F.sortIndex=bt,t(p,F),M||x||(M=!0,N||(N=!0,X()))),F},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(F){var H=g;return function(){var $=g;g=H;try{return F.apply(this,arguments)}finally{g=$}}}})(Id)),Id}var Gv;function L1(){return Gv||(Gv=1,Bd.exports=U1()),Bd.exports}var zd={exports:{}},Yn={};var Vv;function N1(){if(Vv)return Yn;Vv=1;var s=bm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Yn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,_)},Yn.flushSync=function(p){var d=u.T,_=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=_,a.d.f()}},Yn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Yn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Yn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=h(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&a.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Yn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Yn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=h(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Yn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Yn.requestFormReset=function(p){a.d.r(p)},Yn.unstable_batchedUpdates=function(p,d){return p(d)},Yn.useFormState=function(p,d,_){return u.H.useFormState(p,d,_)},Yn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Yn.version="19.2.3",Yn}var kv;function P1(){if(kv)return zd.exports;kv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),zd.exports=N1(),zd.exports}var Xv;function O1(){if(Xv)return Tl;Xv=1;var s=L1(),t=bm(),n=P1();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===r)return p(f),e;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=m;else{for(var b=!1,C=f.child;C;){if(C===r){b=!0,r=f,l=m;break}if(C===l){b=!0,l=f,r=m;break}C=C.sibling}if(!b){for(C=m.child;C;){if(C===r){b=!0,r=m,l=f;break}if(C===l){b=!0,l=m,r=f;break}C=C.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case N:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case A:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var q=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},dt=[],bt=-1;function I(e){return{current:e}}function Q(e){0>bt||(e.current=dt[bt],dt[bt]=null,bt--)}function Mt(e,i){bt++,dt[bt]=e.current,e.current=i}var wt=I(null),Nt=I(null),et=I(null),St=I(null);function xt(e,i){switch(Mt(et,i),Mt(Nt,e),Mt(wt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?sv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=sv(i),e=rv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(wt),Mt(wt,e)}function Ht(){Q(wt),Q(Nt),Q(et)}function se(e){e.memoizedState!==null&&Mt(St,e);var i=wt.current,r=rv(i,e.type);i!==r&&(Mt(Nt,e),Mt(wt,r))}function $t(e){Nt.current===e&&(Q(wt),Q(Nt)),St.current===e&&(Q(St),yl._currentValue=$)}var Qe,ue;function ve(e){if(Qe===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Qe=i&&i[1]||"",ue=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+ue}var Se=!1;function ge(e,i){if(!e||Se)return"";Se=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ft){var ct=ft}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ft){ct=ft}e.call(yt.prototype)}}else{try{throw Error()}catch(ft){ct=ft}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ft){if(ft&&ct&&typeof ft.stack=="string")return[ft.stack,ct.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],C=m[1];if(b&&C){var k=b.split(`
`),at=C.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<at.length&&!at[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===at.length)for(l=k.length-1,f=at.length-1;1<=l&&0<=f&&k[l]!==at[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==at[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==at[f]){var gt=`
`+k[l].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=l&&0<=f);break}}}finally{Se=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ve(r):""}function en(e,i){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==i&&i!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return ge(e.type,!1);case 11:return ge(e.type.render,!1);case 1:return ge(e.type,!0);case 31:return ve("Activity");default:return""}}function rn(e){try{var i="",r=null;do i+=en(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var je=Object.prototype.hasOwnProperty,pn=s.unstable_scheduleCallback,We=s.unstable_cancelCallback,on=s.unstable_shouldYield,z=s.unstable_requestPaint,Zt=s.unstable_now,Xt=s.unstable_getCurrentPriorityLevel,L=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,j=s.unstable_NormalPriority,nt=s.unstable_LowPriority,ht=s.unstable_IdlePriority,Tt=s.log,Ut=s.unstable_setDisableYieldValue,pt=null,mt=null;function Dt(e){if(typeof Tt=="function"&&Ut(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(pt,e)}catch{}}var Gt=Math.clz32?Math.clz32:ee,Bt=Math.log,Pt=Math.LN2;function ee(e){return e>>>=0,e===0?32:31-(Bt(e)/Pt|0)|0}var ne=256,le=262144,Y=4194304;function Ct(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?f=Ct(l):(b&=C,b!==0?f=Ct(b):r||(r=C&~e,r!==0&&(f=Ct(r))))):(C=l&~m,C!==0?f=Ct(C):b!==0?f=Ct(b):r||(r=l&~e,r!==0&&(f=Ct(r)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:f}function Lt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ft(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),e}function jt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Wt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ln(e,i,r,l,f,m){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,at=e.hiddenUpdates;for(r=b&~r;0<r;){var gt=31-Gt(r),yt=1<<gt;C[gt]=0,k[gt]=-1;var ct=at[gt];if(ct!==null)for(at[gt]=null,gt=0;gt<ct.length;gt++){var ft=ct[gt];ft!==null&&(ft.lane&=-536870913)}r&=~yt}l!==0&&Be(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function Be(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Gt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function pi(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Gt(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function mi(e,i){var r=i&-i;return r=(r&42)!==0?1:Po(r),(r&(e.suspendedLanes|i))!==0?0:r}function Po(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Cv(e.type))}function Mr(e,i){var r=H.p;try{return H.p=e,i()}finally{H.p=r}}var na=Math.random().toString(36).slice(2),Mn="__reactFiber$"+na,Gn="__reactProps$"+na,ai="__reactContainer$"+na,ks="__reactEvents$"+na,sc="__reactListeners$"+na,rc="__reactHandles$"+na,Xs="__reactResources$"+na,Za="__reactMarker$"+na;function Ka(e){delete e[Mn],delete e[Gn],delete e[ks],delete e[sc],delete e[rc]}function va(e){var i=e[Mn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ai]||r[Mn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=dv(e);e!==null;){if(r=e[Mn])return r;e=dv(e)}return i}e=r,r=e.parentNode}return null}function xa(e){if(e=e[Mn]||e[ai]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ws(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Qa(e){var i=e[Xs];return i||(i=e[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function bn(e){e[Za]=!0}var oc=new Set,w={};function K(e,i){lt(e,i),lt(e+"Capture",i)}function lt(e,i){for(w[e]=i,e=0;e<i.length;e++)oc.add(i[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},It={};function kt(e){return je.call(It,e)?!0:je.call(rt,e)?!1:st.test(e)?It[e]=!0:(rt[e]=!0,!1)}function Ot(e,i,r){if(kt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Kt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function qt(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function te(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ue(e){if(!e._valueTracker){var i=de(e)?"checked":"value";e._valueTracker=te(e,i,""+e[i])}}function cn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=de(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ie=/[\n"\\]/g;function ze(e){return e.replace(Ie,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Vt(e,i,r,l,f,m,b,C){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ie(i)):e.value!==""+ie(i)&&(e.value=""+ie(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Me(e,b,ie(i)):r!=null?Me(e,b,ie(r)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ie(C):e.removeAttribute("name")}function qn(e,i,r,l,f,m,b,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ue(e);return}r=r!=null?""+ie(r):"",i=i!=null?""+ie(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Ue(e)}function Me(e,i,r){i==="number"&&Je(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Ln(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ie(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function gi(e,i,r){if(i!=null&&(i=""+ie(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+ie(r):""}function Xi(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(q(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=ie(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ue(e)}function _i(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Fe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function un(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||Fe.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Wi(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&un(e,f,l)}else for(var m in i)i.hasOwnProperty(m)&&un(e,m,i[m])}function Oe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qs(e){return ja.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ya(){}var Df=null;function Uf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Er=null;function a0(e){var i=xa(e);if(i&&(e=i.stateNode)){var r=e[Gn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Vt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ze(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[Gn]||null;if(!f)throw Error(a(90));Vt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&cn(l)}break t;case"textarea":gi(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Ln(e,!!r.multiple,i,!1)}}}var Lf=!1;function s0(e,i,r){if(Lf)return e(i,r);Lf=!0;try{var l=e(i);return l}finally{if(Lf=!1,(br!==null||Er!==null)&&(Zc(),br&&(i=br,e=Er,Er=br=null,a0(i),e)))for(i=0;i<e.length;i++)a0(e[i])}}function Io(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Gn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=!1;if(Sa)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Nf=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Nf=!1}var Ja=null,Pf=null,lc=null;function r0(){if(lc)return lc;var e,i=Pf,r=i.length,l,f="value"in Ja?Ja.value:Ja.textContent,m=f.length;for(e=0;e<r&&i[e]===f[e];e++);var b=r-e;for(l=1;l<=b&&i[r-l]===f[m-l];l++);return lc=f.slice(e,1<l?1-l:void 0)}function cc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function uc(){return!0}function o0(){return!1}function si(e){function i(r,l,f,m,b){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?uc:o0,this.isPropagationStopped=o0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),i}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=si(Ys),Fo=v({},Ys,{view:0,detail:0}),AS=si(Fo),Of,Bf,Ho,hc=v({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ho&&(Ho&&e.type==="mousemove"?(Of=e.screenX-Ho.screenX,Bf=e.screenY-Ho.screenY):Bf=Of=0,Ho=e),Of)},movementY:function(e){return"movementY"in e?e.movementY:Bf}}),l0=si(hc),RS=v({},hc,{dataTransfer:0}),wS=si(RS),CS=v({},Fo,{relatedTarget:0}),If=si(CS),DS=v({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),US=si(DS),LS=v({},Ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),NS=si(LS),PS=v({},Ys,{data:0}),c0=si(PS),OS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=IS[e])?!!i[e]:!1}function zf(){return zS}var FS=v({},Fo,{key:function(e){if(e.key){var i=OS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=cc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?BS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(e){return e.type==="keypress"?cc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HS=si(FS),GS=v({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u0=si(GS),VS=v({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),kS=si(VS),XS=v({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),WS=si(XS),qS=v({},hc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),YS=si(qS),ZS=v({},Ys,{newState:0,oldState:0}),KS=si(ZS),QS=[9,13,27,32],Ff=Sa&&"CompositionEvent"in window,Go=null;Sa&&"documentMode"in document&&(Go=document.documentMode);var jS=Sa&&"TextEvent"in window&&!Go,f0=Sa&&(!Ff||Go&&8<Go&&11>=Go),h0=" ",d0=!1;function p0(e,i){switch(e){case"keyup":return QS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function JS(e,i){switch(e){case"compositionend":return m0(i);case"keypress":return i.which!==32?null:(d0=!0,h0);case"textInput":return e=i.data,e===h0&&d0?null:e;default:return null}}function $S(e,i){if(Tr)return e==="compositionend"||!Ff&&p0(e,i)?(e=r0(),lc=Pf=Ja=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return f0&&i.locale!=="ko"?null:i.data;default:return null}}var tM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!tM[e.type]:i==="textarea"}function _0(e,i,r,l){br?Er?Er.push(l):Er=[l]:br=l,i=eu(i,"onChange"),0<i.length&&(r=new fc("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Vo=null,ko=null;function eM(e){$_(e,0)}function dc(e){var i=Ws(e);if(cn(i))return e}function v0(e,i){if(e==="change")return i}var x0=!1;if(Sa){var Hf;if(Sa){var Gf="oninput"in document;if(!Gf){var y0=document.createElement("div");y0.setAttribute("oninput","return;"),Gf=typeof y0.oninput=="function"}Hf=Gf}else Hf=!1;x0=Hf&&(!document.documentMode||9<document.documentMode)}function S0(){Vo&&(Vo.detachEvent("onpropertychange",M0),ko=Vo=null)}function M0(e){if(e.propertyName==="value"&&dc(ko)){var i=[];_0(i,ko,e,Uf(e)),s0(eM,i)}}function nM(e,i,r){e==="focusin"?(S0(),Vo=i,ko=r,Vo.attachEvent("onpropertychange",M0)):e==="focusout"&&S0()}function iM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dc(ko)}function aM(e,i){if(e==="click")return dc(i)}function sM(e,i){if(e==="input"||e==="change")return dc(i)}function rM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var vi=typeof Object.is=="function"?Object.is:rM;function Xo(e,i){if(vi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!je.call(i,f)||!vi(e[f],i[f]))return!1}return!0}function b0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function E0(e,i){var r=b0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=b0(r)}}function T0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?T0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function A0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Je(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Je(e.document)}return i}function Vf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var oM=Sa&&"documentMode"in document&&11>=document.documentMode,Ar=null,kf=null,Wo=null,Xf=!1;function R0(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xf||Ar==null||Ar!==Je(l)||(l=Ar,"selectionStart"in l&&Vf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wo&&Xo(Wo,l)||(Wo=l,l=eu(kf,"onSelect"),0<l.length&&(i=new fc("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Ar)))}function Zs(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Rr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionrun:Zs("Transition","TransitionRun"),transitionstart:Zs("Transition","TransitionStart"),transitioncancel:Zs("Transition","TransitionCancel"),transitionend:Zs("Transition","TransitionEnd")},Wf={},w0={};Sa&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Ks(e){if(Wf[e])return Wf[e];if(!Rr[e])return e;var i=Rr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in w0)return Wf[e]=i[r];return e}var C0=Ks("animationend"),D0=Ks("animationiteration"),U0=Ks("animationstart"),lM=Ks("transitionrun"),cM=Ks("transitionstart"),uM=Ks("transitioncancel"),L0=Ks("transitionend"),N0=new Map,qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qf.push("scrollEnd");function qi(e,i){N0.set(e,i),K(i,[e])}var pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Li=[],wr=0,Yf=0;function mc(){for(var e=wr,i=Yf=wr=0;i<e;){var r=Li[i];Li[i++]=null;var l=Li[i];Li[i++]=null;var f=Li[i];Li[i++]=null;var m=Li[i];if(Li[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}m!==0&&P0(r,f,m)}}function gc(e,i,r,l){Li[wr++]=e,Li[wr++]=i,Li[wr++]=r,Li[wr++]=l,Yf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Zf(e,i,r,l){return gc(e,i,r,l),_c(e)}function Qs(e,i){return gc(e,null,null,i),_c(e)}function P0(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-Gt(r),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),m):null}function _c(e){if(50<dl)throw dl=0,id=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Cr={};function fM(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,i,r,l){return new fM(e,i,r,l)}function Kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,i){var r=e.alternate;return r===null?(r=xi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function O0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function vc(e,i,r,l,f,m){var b=0;if(l=e,typeof e=="function")Kf(e)&&(b=1);else if(typeof e=="string")b=g1(e,r,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=xi(31,r,i,f),e.elementType=P,e.lanes=m,e;case T:return js(r.children,f,m,i);case y:b=8,f|=24;break;case S:return e=xi(12,r,i,f|2),e.elementType=S,e.lanes=m,e;case B:return e=xi(13,r,i,f),e.elementType=B,e.lanes=m,e;case N:return e=xi(19,r,i,f),e.elementType=N,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:b=10;break t;case D:b=9;break t;case R:b=11;break t;case O:b=14;break t;case A:b=16,l=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=xi(b,r,i,f),i.elementType=e,i.type=l,i.lanes=m,i}function js(e,i,r,l){return e=xi(7,e,l,i),e.lanes=r,e}function Qf(e,i,r){return e=xi(6,e,null,i),e.lanes=r,e}function B0(e){var i=xi(18,null,null,0);return i.stateNode=e,i}function jf(e,i,r){return i=xi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var I0=new WeakMap;function Ni(e,i){if(typeof e=="object"&&e!==null){var r=I0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:rn(i)},I0.set(e,i),i)}return{value:e,source:i,stack:rn(i)}}var Dr=[],Ur=0,xc=null,qo=0,Pi=[],Oi=0,$a=null,aa=1,sa="";function ba(e,i){Dr[Ur++]=qo,Dr[Ur++]=xc,xc=e,qo=i}function z0(e,i,r){Pi[Oi++]=aa,Pi[Oi++]=sa,Pi[Oi++]=$a,$a=e;var l=aa;e=sa;var f=32-Gt(l)-1;l&=~(1<<f),r+=1;var m=32-Gt(i)+f;if(30<m){var b=f-f%5;m=(l&(1<<b)-1).toString(32),l>>=b,f-=b,aa=1<<32-Gt(i)+f|r<<f|l,sa=m+e}else aa=1<<m|r<<f|l,sa=e}function Jf(e){e.return!==null&&(ba(e,1),z0(e,1,0))}function $f(e){for(;e===xc;)xc=Dr[--Ur],Dr[Ur]=null,qo=Dr[--Ur],Dr[Ur]=null;for(;e===$a;)$a=Pi[--Oi],Pi[Oi]=null,sa=Pi[--Oi],Pi[Oi]=null,aa=Pi[--Oi],Pi[Oi]=null}function F0(e,i){Pi[Oi++]=aa,Pi[Oi++]=sa,Pi[Oi++]=$a,aa=i.id,sa=i.overflow,$a=e}var Vn=null,nn=null,we=!1,ts=null,Bi=!1,th=Error(a(519));function es(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yo(Ni(i,e)),th}function H0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[Mn]=e,i[Gn]=l,r){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(r=0;r<ml.length;r++)Ee(ml[r],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Xi(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||iv(i.textContent,r)?(l.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),l.onScroll!=null&&Ee("scroll",i),l.onScrollEnd!=null&&Ee("scrollend",i),l.onClick!=null&&(i.onclick=ya),i=!0):i=!1,i||es(e,!0)}function G0(e){for(Vn=e.return;Vn;)switch(Vn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Vn=Vn.return}}function Lr(e){if(e!==Vn)return!1;if(!we)return G0(e),we=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||vd(e.type,e.memoizedProps)),r=!r),r&&nn&&es(e),G0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=hv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=hv(e)}else i===27?(i=nn,ms(e.type)?(e=bd,bd=null,nn=e):nn=i):nn=Vn?zi(e.stateNode.nextSibling):null;return!0}function Js(){nn=Vn=null,we=!1}function eh(){var e=ts;return e!==null&&(ci===null?ci=e:ci.push.apply(ci,e),ts=null),e}function Yo(e){ts===null?ts=[e]:ts.push(e)}var nh=I(null),$s=null,Ea=null;function ns(e,i,r){Mt(nh,i._currentValue),i._currentValue=r}function Ta(e){e._currentValue=nh.current,Q(nh)}function ih(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function ah(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=f;for(var k=0;k<i.length;k++)if(C.context===i[k]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),ih(m.return,r,e),l||(b=null);break t}m=C.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),ih(b,r,e),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===e){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Nr(e,i,r,l){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var C=f.type;vi(f.pendingProps.value,b.value)||(e!==null?e.push(C):e=[C])}}else if(f===St.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(yl):e=[yl])}f=f.return}e!==null&&ah(i,e,r,l),i.flags|=262144}function yc(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){$s=e,Ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function kn(e){return V0($s,e)}function Sc(e,i){return $s===null&&tr(e),V0(e,i)}function V0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ea===null){if(e===null)throw Error(a(308));Ea=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ea=Ea.next=i;return r}var hM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},dM=s.unstable_scheduleCallback,pM=s.unstable_NormalPriority,En={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new hM,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&dM(pM,function(){e.controller.abort()})}var Ko=null,rh=0,Pr=0,Or=null;function mM(e,i){if(Ko===null){var r=Ko=[];rh=0,Pr=cd(),Or={status:"pending",value:void 0,then:function(l){r.push(l)}}}return rh++,i.then(k0,k0),i}function k0(){if(--rh===0&&Ko!==null){Or!==null&&(Or.status="fulfilled");var e=Ko;Ko=null,Pr=0,Or=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function gM(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var X0=F.S;F.S=function(e,i){R_=Zt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&mM(e,i),X0!==null&&X0(e,i)};var er=I(null);function oh(){var e=er.current;return e!==null?e:$e.pooledCache}function Mc(e,i){i===null?Mt(er,er.current):Mt(er,i.pool)}function W0(){var e=oh();return e===null?null:{parent:En._currentValue,pool:e}}var Br=Error(a(460)),lh=Error(a(474)),bc=Error(a(542)),Ec={then:function(){}};function q0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Y0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(ya,ya),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,K0(e),e;default:if(typeof i.status=="string")i.then(ya,ya);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,K0(e),e}throw ir=i,Br}}function nr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ir=r,Br):r}}var ir=null;function Z0(){if(ir===null)throw Error(a(459));var e=ir;return ir=null,e}function K0(e){if(e===Br||e===bc)throw Error(a(483))}var Ir=null,Qo=0;function Tc(e){var i=Qo;return Qo+=1,Ir===null&&(Ir=[]),Y0(Ir,e,i)}function jo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ac(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Q0(e){function i(J,W){if(e){var it=J.deletions;it===null?(J.deletions=[W],J.flags|=16):it.push(W)}}function r(J,W){if(!e)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function l(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=Ma(J,W),J.index=0,J.sibling=null,J}function m(J,W,it){return J.index=it,e?(it=J.alternate,it!==null?(it=it.index,it<W?(J.flags|=67108866,W):it):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function b(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function C(J,W,it,vt){return W===null||W.tag!==6?(W=Qf(it,J.mode,vt),W.return=J,W):(W=f(W,it),W.return=J,W)}function k(J,W,it,vt){var ae=it.type;return ae===T?gt(J,W,it.props.children,vt,it.key):W!==null&&(W.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===A&&nr(ae)===W.type)?(W=f(W,it.props),jo(W,it),W.return=J,W):(W=vc(it.type,it.key,it.props,null,J.mode,vt),jo(W,it),W.return=J,W)}function at(J,W,it,vt){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=jf(it,J.mode,vt),W.return=J,W):(W=f(W,it.children||[]),W.return=J,W)}function gt(J,W,it,vt,ae){return W===null||W.tag!==7?(W=js(it,J.mode,vt,ae),W.return=J,W):(W=f(W,it),W.return=J,W)}function yt(J,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Qf(""+W,J.mode,it),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return it=vc(W.type,W.key,W.props,null,J.mode,it),jo(it,W),it.return=J,it;case M:return W=jf(W,J.mode,it),W.return=J,W;case A:return W=nr(W),yt(J,W,it)}if(q(W)||X(W))return W=js(W,J.mode,it,null),W.return=J,W;if(typeof W.then=="function")return yt(J,Tc(W),it);if(W.$$typeof===U)return yt(J,Sc(J,W),it);Ac(J,W)}return null}function ct(J,W,it,vt){var ae=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ae!==null?null:C(J,W,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case x:return it.key===ae?k(J,W,it,vt):null;case M:return it.key===ae?at(J,W,it,vt):null;case A:return it=nr(it),ct(J,W,it,vt)}if(q(it)||X(it))return ae!==null?null:gt(J,W,it,vt,null);if(typeof it.then=="function")return ct(J,W,Tc(it),vt);if(it.$$typeof===U)return ct(J,W,Sc(J,it),vt);Ac(J,it)}return null}function ft(J,W,it,vt,ae){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(it)||null,C(W,J,""+vt,ae);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case x:return J=J.get(vt.key===null?it:vt.key)||null,k(W,J,vt,ae);case M:return J=J.get(vt.key===null?it:vt.key)||null,at(W,J,vt,ae);case A:return vt=nr(vt),ft(J,W,it,vt,ae)}if(q(vt)||X(vt))return J=J.get(it)||null,gt(W,J,vt,ae,null);if(typeof vt.then=="function")return ft(J,W,it,Tc(vt),ae);if(vt.$$typeof===U)return ft(J,W,it,Sc(W,vt),ae);Ac(W,vt)}return null}function Qt(J,W,it,vt){for(var ae=null,Le=null,Jt=W,me=W=0,Ae=null;Jt!==null&&me<it.length;me++){Jt.index>me?(Ae=Jt,Jt=null):Ae=Jt.sibling;var Ne=ct(J,Jt,it[me],vt);if(Ne===null){Jt===null&&(Jt=Ae);break}e&&Jt&&Ne.alternate===null&&i(J,Jt),W=m(Ne,W,me),Le===null?ae=Ne:Le.sibling=Ne,Le=Ne,Jt=Ae}if(me===it.length)return r(J,Jt),we&&ba(J,me),ae;if(Jt===null){for(;me<it.length;me++)Jt=yt(J,it[me],vt),Jt!==null&&(W=m(Jt,W,me),Le===null?ae=Jt:Le.sibling=Jt,Le=Jt);return we&&ba(J,me),ae}for(Jt=l(Jt);me<it.length;me++)Ae=ft(Jt,J,me,it[me],vt),Ae!==null&&(e&&Ae.alternate!==null&&Jt.delete(Ae.key===null?me:Ae.key),W=m(Ae,W,me),Le===null?ae=Ae:Le.sibling=Ae,Le=Ae);return e&&Jt.forEach(function(ys){return i(J,ys)}),we&&ba(J,me),ae}function re(J,W,it,vt){if(it==null)throw Error(a(151));for(var ae=null,Le=null,Jt=W,me=W=0,Ae=null,Ne=it.next();Jt!==null&&!Ne.done;me++,Ne=it.next()){Jt.index>me?(Ae=Jt,Jt=null):Ae=Jt.sibling;var ys=ct(J,Jt,Ne.value,vt);if(ys===null){Jt===null&&(Jt=Ae);break}e&&Jt&&ys.alternate===null&&i(J,Jt),W=m(ys,W,me),Le===null?ae=ys:Le.sibling=ys,Le=ys,Jt=Ae}if(Ne.done)return r(J,Jt),we&&ba(J,me),ae;if(Jt===null){for(;!Ne.done;me++,Ne=it.next())Ne=yt(J,Ne.value,vt),Ne!==null&&(W=m(Ne,W,me),Le===null?ae=Ne:Le.sibling=Ne,Le=Ne);return we&&ba(J,me),ae}for(Jt=l(Jt);!Ne.done;me++,Ne=it.next())Ne=ft(Jt,J,me,Ne.value,vt),Ne!==null&&(e&&Ne.alternate!==null&&Jt.delete(Ne.key===null?me:Ne.key),W=m(Ne,W,me),Le===null?ae=Ne:Le.sibling=Ne,Le=Ne);return e&&Jt.forEach(function(R1){return i(J,R1)}),we&&ba(J,me),ae}function Ze(J,W,it,vt){if(typeof it=="object"&&it!==null&&it.type===T&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case x:t:{for(var ae=it.key;W!==null;){if(W.key===ae){if(ae=it.type,ae===T){if(W.tag===7){r(J,W.sibling),vt=f(W,it.props.children),vt.return=J,J=vt;break t}}else if(W.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===A&&nr(ae)===W.type){r(J,W.sibling),vt=f(W,it.props),jo(vt,it),vt.return=J,J=vt;break t}r(J,W);break}else i(J,W);W=W.sibling}it.type===T?(vt=js(it.props.children,J.mode,vt,it.key),vt.return=J,J=vt):(vt=vc(it.type,it.key,it.props,null,J.mode,vt),jo(vt,it),vt.return=J,J=vt)}return b(J);case M:t:{for(ae=it.key;W!==null;){if(W.key===ae)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){r(J,W.sibling),vt=f(W,it.children||[]),vt.return=J,J=vt;break t}else{r(J,W);break}else i(J,W);W=W.sibling}vt=jf(it,J.mode,vt),vt.return=J,J=vt}return b(J);case A:return it=nr(it),Ze(J,W,it,vt)}if(q(it))return Qt(J,W,it,vt);if(X(it)){if(ae=X(it),typeof ae!="function")throw Error(a(150));return it=ae.call(it),re(J,W,it,vt)}if(typeof it.then=="function")return Ze(J,W,Tc(it),vt);if(it.$$typeof===U)return Ze(J,W,Sc(J,it),vt);Ac(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(r(J,W.sibling),vt=f(W,it),vt.return=J,J=vt):(r(J,W),vt=Qf(it,J.mode,vt),vt.return=J,J=vt),b(J)):r(J,W)}return function(J,W,it,vt){try{Qo=0;var ae=Ze(J,W,it,vt);return Ir=null,ae}catch(Jt){if(Jt===Br||Jt===bc)throw Jt;var Le=xi(29,Jt,null,J.mode);return Le.lanes=vt,Le.return=J,Le}}}var ar=Q0(!0),j0=Q0(!1),is=!1;function ch(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function as(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ss(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=_c(e),P0(e,null,r),i}return gc(e,l,i,r),_c(e)}function Jo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,pi(e,r)}}function fh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?f=m=i:m=m.next=i}else f=m=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var hh=!1;function $o(){if(hh){var e=Or;if(e!==null)throw e}}function tl(e,i,r,l){hh=!1;var f=e.updateQueue;is=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var k=C,at=k.next;k.next=null,b===null?m=at:b.next=at,b=k;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,C=gt.lastBaseUpdate,C!==b&&(C===null?gt.firstBaseUpdate=at:C.next=at,gt.lastBaseUpdate=k))}if(m!==null){var yt=f.baseState;b=0,gt=at=k=null,C=m;do{var ct=C.lane&-536870913,ft=ct!==C.lane;if(ft?(Te&ct)===ct:(l&ct)===ct){ct!==0&&ct===Pr&&(hh=!0),gt!==null&&(gt=gt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Qt=e,re=C;ct=i;var Ze=r;switch(re.tag){case 1:if(Qt=re.payload,typeof Qt=="function"){yt=Qt.call(Ze,yt,ct);break t}yt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=re.payload,ct=typeof Qt=="function"?Qt.call(Ze,yt,ct):Qt,ct==null)break t;yt=v({},yt,ct);break t;case 2:is=!0}}ct=C.callback,ct!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=f.callbacks,ft===null?f.callbacks=[ct]:ft.push(ct))}else ft={lane:ct,tag:C.tag,payload:C.payload,callback:C.callback,next:null},gt===null?(at=gt=ft,k=yt):gt=gt.next=ft,b|=ct;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ft=C,C=ft.next,ft.next=null,f.lastBaseUpdate=ft,f.shared.pending=null}}while(!0);gt===null&&(k=yt),f.baseState=k,f.firstBaseUpdate=at,f.lastBaseUpdate=gt,m===null&&(f.shared.lanes=0),us|=b,e.lanes=b,e.memoizedState=yt}}function J0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function $0(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)J0(r[e],i)}var zr=I(null),Rc=I(0);function tg(e,i){e=Pa,Mt(Rc,e),Mt(zr,i),Pa=e|i.baseLanes}function dh(){Mt(Rc,Pa),Mt(zr,zr.current)}function ph(){Pa=Rc.current,Q(zr),Q(Rc)}var yi=I(null),Ii=null;function rs(e){var i=e.alternate;Mt(xn,xn.current&1),Mt(yi,e),Ii===null&&(i===null||zr.current!==null||i.memoizedState!==null)&&(Ii=e)}function mh(e){Mt(xn,xn.current),Mt(yi,e),Ii===null&&(Ii=e)}function eg(e){e.tag===22?(Mt(xn,xn.current),Mt(yi,e),Ii===null&&(Ii=e)):os()}function os(){Mt(xn,xn.current),Mt(yi,yi.current)}function Si(e){Q(yi),Ii===e&&(Ii=null),Q(xn)}var xn=I(0);function wc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Sd(r)||Md(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Aa=0,pe=null,qe=null,Tn=null,Cc=!1,Fr=!1,sr=!1,Dc=0,el=0,Hr=null,_M=0;function _n(){throw Error(a(321))}function gh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!vi(e[r],i[r]))return!1;return!0}function _h(e,i,r,l,f,m){return Aa=m,pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?zg:Lh,sr=!1,m=r(l,f),sr=!1,Fr&&(m=ig(i,r,l,f)),ng(e),m}function ng(e){F.H=al;var i=qe!==null&&qe.next!==null;if(Aa=0,Tn=qe=pe=null,Cc=!1,el=0,Hr=null,i)throw Error(a(300));e===null||An||(e=e.dependencies,e!==null&&yc(e)&&(An=!0))}function ig(e,i,r,l){pe=e;var f=0;do{if(Fr&&(Hr=null),el=0,Fr=!1,25<=f)throw Error(a(301));if(f+=1,Tn=qe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Fg,m=i(r,l)}while(Fr);return m}function vM(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?nl(i):i,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(pe.flags|=1024),i}function vh(){var e=Dc!==0;return Dc=0,e}function xh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function yh(e){if(Cc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Cc=!1}Aa=0,Tn=qe=pe=null,Fr=!1,el=Dc=0,Hr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?pe.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function yn(){if(qe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var i=Tn===null?pe.memoizedState:Tn.next;if(i!==null)Tn=i,qe=e;else{if(e===null)throw pe.alternate===null?Error(a(467)):Error(a(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Tn===null?pe.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function Uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(e){var i=el;return el+=1,Hr===null&&(Hr=[]),e=Y0(Hr,e,i),i=pe,(Tn===null?i.memoizedState:Tn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?zg:Lh),e}function Lc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nl(e);if(e.$$typeof===U)return kn(e)}throw Error(a(438,String(e)))}function Sh(e){var i=null,r=pe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Uc(),pe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=V;return i.index++,r}function Ra(e,i){return typeof i=="function"?i(e):i}function Nc(e){var i=yn();return Mh(i,qe,e)}function Mh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}i.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var C=b=null,k=null,at=i,gt=!1;do{var yt=at.lane&-536870913;if(yt!==at.lane?(Te&yt)===yt:(Aa&yt)===yt){var ct=at.revertLane;if(ct===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),yt===Pr&&(gt=!0);else if((Aa&ct)===ct){at=at.next,ct===Pr&&(gt=!0);continue}else yt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},k===null?(C=k=yt,b=m):k=k.next=yt,pe.lanes|=ct,us|=ct;yt=at.action,sr&&r(m,yt),m=at.hasEagerState?at.eagerState:r(m,yt)}else ct={lane:yt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},k===null?(C=k=ct,b=m):k=k.next=ct,pe.lanes|=yt,us|=yt;at=at.next}while(at!==null&&at!==i);if(k===null?b=m:k.next=C,!vi(m,e.memoizedState)&&(An=!0,gt&&(r=Or,r!==null)))throw r;e.memoizedState=m,e.baseState=b,e.baseQueue=k,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function bh(e){var i=yn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,m=i.memoizedState;if(f!==null){r.pending=null;var b=f=f.next;do m=e(m,b.action),b=b.next;while(b!==f);vi(m,i.memoizedState)||(An=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function ag(e,i,r){var l=pe,f=yn(),m=we;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!vi((qe||f).memoizedState,r);if(b&&(f.memoizedState=r,An=!0),f=f.queue,Ah(og.bind(null,l,f,e),[e]),f.getSnapshot!==i||b||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,Gr(9,{destroy:void 0},rg.bind(null,l,f,r,i),null),$e===null)throw Error(a(349));m||(Aa&127)!==0||sg(l,i,r)}return r}function sg(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=pe.updateQueue,i===null?(i=Uc(),pe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function rg(e,i,r,l){i.value=r,i.getSnapshot=l,lg(i)&&cg(e)}function og(e,i,r){return r(function(){lg(i)&&cg(e)})}function lg(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!vi(e,r)}catch{return!0}}function cg(e){var i=Qs(e,2);i!==null&&ui(i,e,2)}function Eh(e){var i=$n();if(typeof e=="function"){var r=e;if(e=r(),sr){Dt(!0);try{r()}finally{Dt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},i}function ug(e,i,r,l){return e.baseState=r,Mh(e,qe,typeof l=="function"?l:Ra)}function xM(e,i,r,l,f){if(Bc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};F.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,fg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function fg(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var m=F.T,b={};F.T=b;try{var C=r(f,l),k=F.S;k!==null&&k(b,C),hg(e,i,C)}catch(at){Th(e,i,at)}finally{m!==null&&b.types!==null&&(m.types=b.types),F.T=m}}else try{m=r(f,l),hg(e,i,m)}catch(at){Th(e,i,at)}}function hg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){dg(e,i,l)},function(l){return Th(e,i,l)}):dg(e,i,r)}function dg(e,i,r){i.status="fulfilled",i.value=r,pg(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,fg(e,r)))}function Th(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,pg(i),i=i.next;while(i!==l)}e.action=null}function pg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function mg(e,i){return i}function gg(e,i){if(we){var r=$e.formState;if(r!==null){t:{var l=pe;if(we){if(nn){e:{for(var f=nn,m=Bi;f.nodeType!==8;){if(!m){f=null;break e}if(f=zi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){nn=zi(f.nextSibling),l=f.data==="F!";break t}}es(l)}l=!1}l&&(i=r[0])}}return r=$n(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mg,lastRenderedState:i},r.queue=l,r=Og.bind(null,pe,l),l.dispatch=r,l=Eh(!1),m=Uh.bind(null,pe,!1,l.queue),l=$n(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=xM.bind(null,pe,f,m,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function _g(e){var i=yn();return vg(i,qe,e)}function vg(e,i,r){if(i=Mh(e,i,mg)[0],e=Nc(Ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=nl(i)}catch(b){throw b===Br?bc:b}else l=i;i=yn();var f=i.queue,m=f.dispatch;return r!==i.memoizedState&&(pe.flags|=2048,Gr(9,{destroy:void 0},yM.bind(null,f,r),null)),[l,m,e]}function yM(e,i){e.action=i}function xg(e){var i=yn(),r=qe;if(r!==null)return vg(i,r,e);yn(),i=i.memoizedState,r=yn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Gr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=pe.updateQueue,i===null&&(i=Uc(),pe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function yg(){return yn().memoizedState}function Pc(e,i,r,l){var f=$n();pe.flags|=e,f.memoizedState=Gr(1|i,{destroy:void 0},r,l===void 0?null:l)}function Oc(e,i,r,l){var f=yn();l=l===void 0?null:l;var m=f.memoizedState.inst;qe!==null&&l!==null&&gh(l,qe.memoizedState.deps)?f.memoizedState=Gr(i,m,r,l):(pe.flags|=e,f.memoizedState=Gr(1|i,m,r,l))}function Sg(e,i){Pc(8390656,8,e,i)}function Ah(e,i){Oc(2048,8,e,i)}function SM(e){pe.flags|=4;var i=pe.updateQueue;if(i===null)i=Uc(),pe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Mg(e){var i=yn().memoizedState;return SM({ref:i,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function bg(e,i){return Oc(4,2,e,i)}function Eg(e,i){return Oc(4,4,e,i)}function Tg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Ag(e,i,r){r=r!=null?r.concat([e]):null,Oc(4,4,Tg.bind(null,i,e),r)}function Rh(){}function Rg(e,i){var r=yn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&gh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function wg(e,i){var r=yn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&gh(i,l[1]))return l[0];if(l=e(),sr){Dt(!0);try{e()}finally{Dt(!1)}}return r.memoizedState=[l,i],l}function wh(e,i,r){return r===void 0||(Aa&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=C_(),pe.lanes|=e,us|=e,r)}function Cg(e,i,r,l){return vi(r,i)?r:zr.current!==null?(e=wh(e,r,l),vi(e,i)||(An=!0),e):(Aa&42)===0||(Aa&1073741824)!==0&&(Te&261930)===0?(An=!0,e.memoizedState=r):(e=C_(),pe.lanes|=e,us|=e,i)}function Dg(e,i,r,l,f){var m=H.p;H.p=m!==0&&8>m?m:8;var b=F.T,C={};F.T=C,Uh(e,!1,i,r);try{var k=f(),at=F.S;if(at!==null&&at(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var gt=gM(k,l);il(e,i,gt,Ei(e))}else il(e,i,l,Ei(e))}catch(yt){il(e,i,{then:function(){},status:"rejected",reason:yt},Ei())}finally{H.p=m,b!==null&&C.types!==null&&(b.types=C.types),F.T=b}}function MM(){}function Ch(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=Ug(e).queue;Dg(e,f,i,$,r===null?MM:function(){return Lg(e),r(l)})}function Ug(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:$},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Lg(e){var i=Ug(e);i.next===null&&(i=e.alternate.memoizedState),il(e,i.next.queue,{},Ei())}function Dh(){return kn(yl)}function Ng(){return yn().memoizedState}function Pg(){return yn().memoizedState}function bM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ei();e=as(r);var l=ss(i,e,r);l!==null&&(ui(l,i,r),Jo(l,i,r)),i={cache:sh()},e.payload=i;return}i=i.return}}function EM(e,i,r){var l=Ei();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bc(e)?Bg(i,r):(r=Zf(e,i,r,l),r!==null&&(ui(r,e,l),Ig(r,i,l)))}function Og(e,i,r){var l=Ei();il(e,i,r,l)}function il(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Bg(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,C=m(b,r);if(f.hasEagerState=!0,f.eagerState=C,vi(C,b))return gc(e,i,f,0),$e===null&&mc(),!1}catch{}if(r=Zf(e,i,f,l),r!==null)return ui(r,e,l),Ig(r,i,l),!0}return!1}function Uh(e,i,r,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Bc(e)){if(i)throw Error(a(479))}else i=Zf(e,r,l,2),i!==null&&ui(i,e,2)}function Bc(e){var i=e.alternate;return e===pe||i!==null&&i===pe}function Bg(e,i){Fr=Cc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Ig(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,pi(e,r)}}var al={readContext:kn,use:Lc,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};al.useEffectEvent=_n;var zg={readContext:kn,use:Lc,useCallback:function(e,i){return $n().memoizedState=[e,i===void 0?null:i],e},useContext:kn,useEffect:Sg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Pc(4194308,4,Tg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Pc(4194308,4,e,i)},useInsertionEffect:function(e,i){Pc(4,2,e,i)},useMemo:function(e,i){var r=$n();i=i===void 0?null:i;var l=e();if(sr){Dt(!0);try{e()}finally{Dt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=$n();if(r!==void 0){var f=r(i);if(sr){Dt(!0);try{r(i)}finally{Dt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=EM.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var i=$n();return e={current:e},i.memoizedState=e},useState:function(e){e=Eh(e);var i=e.queue,r=Og.bind(null,pe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Rh,useDeferredValue:function(e,i){var r=$n();return wh(r,e,i)},useTransition:function(){var e=Eh(!1);return e=Dg.bind(null,pe,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=pe,f=$n();if(we){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),$e===null)throw Error(a(349));(Te&127)!==0||sg(l,i,r)}f.memoizedState=r;var m={value:r,getSnapshot:i};return f.queue=m,Sg(og.bind(null,l,m,e),[e]),l.flags|=2048,Gr(9,{destroy:void 0},rg.bind(null,l,m,r,i),null),r},useId:function(){var e=$n(),i=$e.identifierPrefix;if(we){var r=sa,l=aa;r=(l&~(1<<32-Gt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Dc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=_M++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Dh,useFormState:gg,useActionState:gg,useOptimistic:function(e){var i=$n();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Uh.bind(null,pe,!0,r),r.dispatch=i,[e,i]},useMemoCache:Sh,useCacheRefresh:function(){return $n().memoizedState=bM.bind(null,pe)},useEffectEvent:function(e){var i=$n(),r={impl:e};return i.memoizedState=r,function(){if((Pe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Lh={readContext:kn,use:Lc,useCallback:Rg,useContext:kn,useEffect:Ah,useImperativeHandle:Ag,useInsertionEffect:bg,useLayoutEffect:Eg,useMemo:wg,useReducer:Nc,useRef:yg,useState:function(){return Nc(Ra)},useDebugValue:Rh,useDeferredValue:function(e,i){var r=yn();return Cg(r,qe.memoizedState,e,i)},useTransition:function(){var e=Nc(Ra)[0],i=yn().memoizedState;return[typeof e=="boolean"?e:nl(e),i]},useSyncExternalStore:ag,useId:Ng,useHostTransitionStatus:Dh,useFormState:_g,useActionState:_g,useOptimistic:function(e,i){var r=yn();return ug(r,qe,e,i)},useMemoCache:Sh,useCacheRefresh:Pg};Lh.useEffectEvent=Mg;var Fg={readContext:kn,use:Lc,useCallback:Rg,useContext:kn,useEffect:Ah,useImperativeHandle:Ag,useInsertionEffect:bg,useLayoutEffect:Eg,useMemo:wg,useReducer:bh,useRef:yg,useState:function(){return bh(Ra)},useDebugValue:Rh,useDeferredValue:function(e,i){var r=yn();return qe===null?wh(r,e,i):Cg(r,qe.memoizedState,e,i)},useTransition:function(){var e=bh(Ra)[0],i=yn().memoizedState;return[typeof e=="boolean"?e:nl(e),i]},useSyncExternalStore:ag,useId:Ng,useHostTransitionStatus:Dh,useFormState:xg,useActionState:xg,useOptimistic:function(e,i){var r=yn();return qe!==null?ug(r,qe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Sh,useCacheRefresh:Pg};Fg.useEffectEvent=Mg;function Nh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ph={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=Ei(),f=as(l);f.payload=i,r!=null&&(f.callback=r),i=ss(e,f,l),i!==null&&(ui(i,e,l),Jo(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=Ei(),f=as(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=ss(e,f,l),i!==null&&(ui(i,e,l),Jo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Ei(),l=as(r);l.tag=2,i!=null&&(l.callback=i),i=ss(e,l,r),i!==null&&(ui(i,e,r),Jo(i,e,r))}};function Hg(e,i,r,l,f,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!Xo(r,l)||!Xo(f,m):!0}function Gg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Ph.enqueueReplaceState(i,i.state,null)}function rr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function Vg(e){pc(e)}function kg(e){console.error(e)}function Xg(e){pc(e)}function Ic(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Wg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Oh(e,i,r){return r=as(r),r.tag=3,r.payload={element:null},r.callback=function(){Ic(e,i)},r}function qg(e){return e=as(e),e.tag=3,e}function Yg(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){Wg(i,r,l)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Wg(i,r,l),typeof f!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function TM(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Nr(i,r,f,!0),r=yi.current,r!==null){switch(r.tag){case 31:case 13:return Ii===null?Kc():r.alternate===null&&vn===0&&(vn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Ec?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),rd(e,l,f)),!1;case 22:return r.flags|=65536,l===Ec?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),rd(e,l,f)),!1}throw Error(a(435,r.tag))}return rd(e,l,f),Kc(),!1}if(we)return i=yi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==th&&(e=Error(a(422),{cause:l}),Yo(Ni(e,r)))):(l!==th&&(i=Error(a(423),{cause:l}),Yo(Ni(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Ni(l,r),f=Oh(e.stateNode,l,f),fh(e,f),vn!==4&&(vn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ni(m,r),hl===null?hl=[m]:hl.push(m),vn!==4&&(vn=2),i===null)return!0;l=Ni(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Oh(r.stateNode,l,e),fh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fs===null||!fs.has(m))))return r.flags|=65536,f&=-f,r.lanes|=f,f=qg(f),Yg(f,e,r,l),fh(r,f),!1}r=r.return}while(r!==null);return!1}var Bh=Error(a(461)),An=!1;function Xn(e,i,r,l){i.child=e===null?j0(i,null,r,l):ar(i,e.child,r,l)}function Zg(e,i,r,l,f){r=r.render;var m=i.ref;if("ref"in l){var b={};for(var C in l)C!=="ref"&&(b[C]=l[C])}else b=l;return tr(i),l=_h(e,i,r,b,m,f),C=vh(),e!==null&&!An?(xh(e,i,f),wa(e,i,f)):(we&&C&&Jf(i),i.flags|=1,Xn(e,i,l,f),i.child)}function Kg(e,i,r,l,f){if(e===null){var m=r.type;return typeof m=="function"&&!Kf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Qg(e,i,m,l,f)):(e=vc(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Xh(e,f)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:Xo,r(b,l)&&e.ref===i.ref)return wa(e,i,f)}return i.flags|=1,e=Ma(m,l),e.ref=i.ref,e.return=i,i.child=e}function Qg(e,i,r,l,f){if(e!==null){var m=e.memoizedProps;if(Xo(m,l)&&e.ref===i.ref)if(An=!1,i.pendingProps=l=m,Xh(e,f))(e.flags&131072)!==0&&(An=!0);else return i.lanes=e.lanes,wa(e,i,f)}return Ih(e,i,r,l,f)}function jg(e,i,r,l){var f=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return Jg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mc(i,m!==null?m.cachePool:null),m!==null?tg(i,m):dh(),eg(i);else return l=i.lanes=536870912,Jg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Mc(i,m.cachePool),tg(i,m),os(),i.memoizedState=null):(e!==null&&Mc(i,null),dh(),os());return Xn(e,i,f,r),i.child}function sl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Jg(e,i,r,l,f){var m=oh();return m=m===null?null:{parent:En._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Mc(i,null),dh(),eg(i),e!==null&&Nr(e,i,l,!0),i.childLanes=f,null}function zc(e,i){return i=Hc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function $g(e,i,r){return ar(i,e.child,null,r),e=zc(i,i.pendingProps),e.flags|=2,Si(i),i.memoizedState=null,e}function AM(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=zc(i,l),i.lanes=536870912,sl(null,e);if(mh(i),(e=nn)?(e=fv(e,Bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:$a!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=B0(e),r.return=i,i.child=r,Vn=i,nn=null)):e=null,e===null)throw es(i);return i.lanes=536870912,null}return zc(i,l)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(mh(i),f)if(i.flags&256)i.flags&=-257,i=$g(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(An||Nr(e,i,r,!1),f=(r&e.childLanes)!==0,An||f){if(l=$e,l!==null&&(b=mi(l,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,Qs(e,b),ui(l,e,b),Bh;Kc(),i=$g(e,i,r)}else e=m.treeContext,nn=zi(b.nextSibling),Vn=i,we=!0,ts=null,Bi=!1,e!==null&&F0(i,e),i=zc(i,l),i.flags|=4096;return i}return e=Ma(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Fc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Ih(e,i,r,l,f){return tr(i),r=_h(e,i,r,l,void 0,f),l=vh(),e!==null&&!An?(xh(e,i,f),wa(e,i,f)):(we&&l&&Jf(i),i.flags|=1,Xn(e,i,r,f),i.child)}function t_(e,i,r,l,f,m){return tr(i),i.updateQueue=null,r=ig(i,l,r,f),ng(e),l=vh(),e!==null&&!An?(xh(e,i,m),wa(e,i,m)):(we&&l&&Jf(i),i.flags|=1,Xn(e,i,r,m),i.child)}function e_(e,i,r,l,f){if(tr(i),i.stateNode===null){var m=Cr,b=r.contextType;typeof b=="object"&&b!==null&&(m=kn(b)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ph,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ch(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?kn(b):Cr,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Nh(i,r,b,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Ph.enqueueReplaceState(m,m.state,null),tl(i,l,m,f),$o(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var C=i.memoizedProps,k=rr(r,C);m.props=k;var at=m.context,gt=r.contextType;b=Cr,typeof gt=="object"&&gt!==null&&(b=kn(gt));var yt=r.getDerivedStateFromProps;gt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,gt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||at!==b)&&Gg(i,m,l,b),is=!1;var ct=i.memoizedState;m.state=ct,tl(i,l,m,f),$o(),at=i.memoizedState,C||ct!==at||is?(typeof yt=="function"&&(Nh(i,r,yt,l),at=i.memoizedState),(k=is||Hg(i,r,k,l,ct,at,b))?(gt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=at),m.props=l,m.state=at,m.context=b,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,uh(e,i),b=i.memoizedProps,gt=rr(r,b),m.props=gt,yt=i.pendingProps,ct=m.context,at=r.contextType,k=Cr,typeof at=="object"&&at!==null&&(k=kn(at)),C=r.getDerivedStateFromProps,(at=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==yt||ct!==k)&&Gg(i,m,l,k),is=!1,ct=i.memoizedState,m.state=ct,tl(i,l,m,f),$o();var ft=i.memoizedState;b!==yt||ct!==ft||is||e!==null&&e.dependencies!==null&&yc(e.dependencies)?(typeof C=="function"&&(Nh(i,r,C,l),ft=i.memoizedState),(gt=is||Hg(i,r,gt,l,ct,ft,k)||e!==null&&e.dependencies!==null&&yc(e.dependencies))?(at||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ft,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ft,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ft),m.props=l,m.state=ft,m.context=k,l=gt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Fc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=ar(i,e.child,null,f),i.child=ar(i,null,r,f)):Xn(e,i,r,f),i.memoizedState=m.state,e=i.child):e=wa(e,i,f),e}function n_(e,i,r,l){return Js(),i.flags|=256,Xn(e,i,r,l),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fh(e){return{baseLanes:e,cachePool:W0()}}function Hh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=bi),e}function i_(e,i,r){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(f?rs(i):os(),(e=nn)?(e=fv(e,Bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:$a!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=B0(e),r.return=i,i.child=r,Vn=i,nn=null)):e=null,e===null)throw es(i);return Md(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(os(),f=i.mode,C=Hc({mode:"hidden",children:C},f),l=js(l,f,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=Fh(r),l.childLanes=Hh(e,b,r),i.memoizedState=zh,sl(null,l)):(rs(i),Gh(i,C))}var k=e.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(m)i.flags&256?(rs(i),i.flags&=-257,i=Vh(e,i,r)):i.memoizedState!==null?(os(),i.child=e.child,i.flags|=128,i=null):(os(),C=l.fallback,f=i.mode,l=Hc({mode:"visible",children:l.children},f),C=js(C,f,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,ar(i,e.child,null,r),l=i.child,l.memoizedState=Fh(r),l.childLanes=Hh(e,b,r),i.memoizedState=zh,i=sl(null,l));else if(rs(i),Md(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var at=b.dgst;b=at,l=Error(a(419)),l.stack="",l.digest=b,Yo({value:l,source:null,stack:null}),i=Vh(e,i,r)}else if(An||Nr(e,i,r,!1),b=(r&e.childLanes)!==0,An||b){if(b=$e,b!==null&&(l=mi(b,r),l!==0&&l!==k.retryLane))throw k.retryLane=l,Qs(e,l),ui(b,e,l),Bh;Sd(C)||Kc(),i=Vh(e,i,r)}else Sd(C)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,nn=zi(C.nextSibling),Vn=i,we=!0,ts=null,Bi=!1,e!==null&&F0(i,e),i=Gh(i,l.children),i.flags|=4096);return i}return f?(os(),C=l.fallback,f=i.mode,k=e.child,at=k.sibling,l=Ma(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,at!==null?C=Ma(at,C):(C=js(C,f,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,sl(null,l),l=i.child,C=e.child.memoizedState,C===null?C=Fh(r):(f=C.cachePool,f!==null?(k=En._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=W0(),C={baseLanes:C.baseLanes|r,cachePool:f}),l.memoizedState=C,l.childLanes=Hh(e,b,r),i.memoizedState=zh,sl(e.child,l)):(rs(i),r=e.child,e=r.sibling,r=Ma(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function Gh(e,i){return i=Hc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Hc(e,i){return e=xi(22,e,null,i),e.lanes=0,e}function Vh(e,i,r){return ar(i,e.child,null,r),e=Gh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function a_(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ih(e.return,i,r)}function kh(e,i,r,l,f,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=r,b.tailMode=f,b.treeForkCount=m)}function s_(e,i,r){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var b=xn.current,C=(b&2)!==0;if(C?(b=b&1|2,i.flags|=128):b&=1,Mt(xn,b),Xn(e,i,l,r),l=we?qo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a_(e,r,i);else if(e.tag===19)a_(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&wc(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),kh(i,!1,f,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&wc(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}kh(i,!0,r,null,m,l);break;case"together":kh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function wa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),us|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Nr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ma(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ma(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Xh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&yc(e)))}function RM(e,i,r){switch(i.tag){case 3:xt(i,i.stateNode.containerInfo),ns(i,En,e.memoizedState.cache),Js();break;case 27:case 5:se(i);break;case 4:xt(i,i.stateNode.containerInfo);break;case 10:ns(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(rs(i),i.flags|=128,null):(r&i.child.childLanes)!==0?i_(e,i,r):(rs(i),e=wa(e,i,r),e!==null?e.sibling:null);rs(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Nr(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return s_(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Mt(xn,xn.current),l)break;return null;case 22:return i.lanes=0,jg(e,i,r,i.pendingProps);case 24:ns(i,En,e.memoizedState.cache)}return wa(e,i,r)}function r_(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)An=!0;else{if(!Xh(e,r)&&(i.flags&128)===0)return An=!1,RM(e,i,r);An=(e.flags&131072)!==0}else An=!1,we&&(i.flags&1048576)!==0&&z0(i,qo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=nr(i.elementType),i.type=e,typeof e=="function")Kf(e)?(l=rr(e,l),i.tag=1,i=e_(null,i,e,l,r)):(i.tag=0,i=Ih(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===R){i.tag=11,i=Zg(null,i,e,l,r);break t}else if(f===O){i.tag=14,i=Kg(null,i,e,l,r);break t}}throw i=ut(e)||e,Error(a(306,i,""))}}return i;case 0:return Ih(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=rr(l,i.pendingProps),e_(e,i,l,f,r);case 3:t:{if(xt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,uh(e,i),tl(i,l,null,r);var b=i.memoizedState;if(l=b.cache,ns(i,En,l),l!==m.cache&&ah(i,[En],r,!0),$o(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=n_(e,i,l,r);break t}else if(l!==f){f=Ni(Error(a(424)),i),Yo(f),i=n_(e,i,l,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nn=zi(e.firstChild),Vn=i,we=!0,ts=null,Bi=!0,r=j0(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Js(),l===f){i=wa(e,i,r);break t}Xn(e,i,l,r)}i=i.child}return i;case 26:return Fc(e,i),e===null?(r=_v(i.type,null,i.pendingProps,null))?i.memoizedState=r:we||(r=i.type,e=i.pendingProps,l=nu(et.current).createElement(r),l[Mn]=i,l[Gn]=e,Wn(l,r,e),bn(l),i.stateNode=l):i.memoizedState=_v(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return se(i),e===null&&we&&(l=i.stateNode=pv(i.type,i.pendingProps,et.current),Vn=i,Bi=!0,f=nn,ms(i.type)?(bd=f,nn=zi(l.firstChild)):nn=f),Xn(e,i,i.pendingProps.children,r),Fc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((f=l=nn)&&(l=i1(l,i.type,i.pendingProps,Bi),l!==null?(i.stateNode=l,Vn=i,nn=zi(l.firstChild),Bi=!1,f=!0):f=!1),f||es(i)),se(i),f=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,l=m.children,vd(f,m)?l=null:b!==null&&vd(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=_h(e,i,vM,null,null,r),yl._currentValue=f),Fc(e,i),Xn(e,i,l,r),i.child;case 6:return e===null&&we&&((e=r=nn)&&(r=a1(r,i.pendingProps,Bi),r!==null?(i.stateNode=r,Vn=i,nn=null,e=!0):e=!1),e||es(i)),null;case 13:return i_(e,i,r);case 4:return xt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ar(i,null,l,r):Xn(e,i,l,r),i.child;case 11:return Zg(e,i,i.type,i.pendingProps,r);case 7:return Xn(e,i,i.pendingProps,r),i.child;case 8:return Xn(e,i,i.pendingProps.children,r),i.child;case 12:return Xn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,ns(i,i.type,l.value),Xn(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,tr(i),f=kn(f),l=l(f),i.flags|=1,Xn(e,i,l,r),i.child;case 14:return Kg(e,i,i.type,i.pendingProps,r);case 15:return Qg(e,i,i.type,i.pendingProps,r);case 19:return s_(e,i,r);case 31:return AM(e,i,r);case 22:return jg(e,i,r,i.pendingProps);case 24:return tr(i),l=kn(En),e===null?(f=oh(),f===null&&(f=$e,m=sh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=r),f=m),i.memoizedState={parent:l,cache:f},ch(i),ns(i,En,f)):((e.lanes&r)!==0&&(uh(e,i),tl(i,null,null,r),$o()),f=e.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ns(i,En,l)):(l=m.cache,ns(i,En,l),l!==f.cache&&ah(i,[En],r,!0))),Xn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ca(e){e.flags|=4}function Wh(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(N_())e.flags|=8192;else throw ir=Ec,lh}else e.flags&=-16777217}function o_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mv(i))if(N_())e.flags|=8192;else throw ir=Ec,lh}function Gc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Et():536870912,e.lanes|=i,Wr|=i)}function rl(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function an(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function wM(e,i,r){var l=i.pendingProps;switch($f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ta(En),Ht(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(i)?Ca(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,eh())),an(i),null;case 26:var f=i.type,m=i.memoizedState;return e===null?(Ca(i),m!==null?(an(i),o_(i,m)):(an(i),Wh(i,f,null,l,r))):m?m!==e.memoizedState?(Ca(i),an(i),o_(i,m)):(an(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ca(i),an(i),Wh(i,f,e,l,r)),null;case 27:if($t(i),r=et.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}e=wt.current,Lr(i)?H0(i):(e=pv(f,l,r),i.stateNode=e,Ca(i))}return an(i),null;case 5:if($t(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}if(m=wt.current,Lr(i))H0(i);else{var b=nu(et.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}m[Mn]=i,m[Gn]=l;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(Wn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ca(i)}}return an(i),Wh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ca(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=et.current,Lr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=Vn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Mn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||iv(e.nodeValue,r)),e||es(i,!0)}else e=nu(e).createTextNode(l),e[Mn]=i,i.stateNode=e}return an(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Lr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Mn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),e=!1}else r=eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Si(i),i):(Si(i),null);if((i.flags&128)!==0)throw Error(a(558))}return an(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Lr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Mn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),f=!1}else f=eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Si(i),i):(Si(i),null)}return Si(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Gc(i,i.updateQueue),an(i),null);case 4:return Ht(),e===null&&dd(i.stateNode.containerInfo),an(i),null;case 10:return Ta(i.type),an(i),null;case 19:if(Q(xn),l=i.memoizedState,l===null)return an(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)rl(l,!1);else{if(vn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=wc(e),m!==null){for(i.flags|=128,rl(l,!1),e=m.updateQueue,i.updateQueue=e,Gc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)O0(r,e),r=r.sibling;return Mt(xn,xn.current&1|2),we&&ba(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Zt()>qc&&(i.flags|=128,f=!0,rl(l,!1),i.lanes=4194304)}else{if(!f)if(e=wc(m),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Gc(i,e),rl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!we)return an(i),null}else 2*Zt()-l.renderingStartTime>qc&&r!==536870912&&(i.flags|=128,f=!0,rl(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Zt(),e.sibling=null,r=xn.current,Mt(xn,f?r&1|2:r&1),we&&ba(i,l.treeForkCount),e):(an(i),null);case 22:case 23:return Si(i),ph(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),r=i.updateQueue,r!==null&&Gc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&Q(er),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ta(En),an(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function CM(e,i){switch($f(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ta(En),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return $t(i),null;case 31:if(i.memoizedState!==null){if(Si(i),i.alternate===null)throw Error(a(340));Js()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Si(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Js()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(xn),null;case 4:return Ht(),null;case 10:return Ta(i.type),null;case 22:case 23:return Si(i),ph(),e!==null&&Q(er),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ta(En),null;case 25:return null;default:return null}}function l_(e,i){switch($f(i),i.tag){case 3:Ta(En),Ht();break;case 26:case 27:case 5:$t(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&Si(i);break;case 13:Si(i);break;case 19:Q(xn);break;case 10:Ta(i.type);break;case 22:case 23:Si(i),ph(),e!==null&&Q(er);break;case 24:Ta(En)}}function ol(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var m=r.create,b=r.inst;l=m(),b.destroy=l}r=r.next}while(r!==f)}}catch(C){Ge(i,i.return,C)}}function ls(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var b=l.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,f=i;var k=r,at=C;try{at()}catch(gt){Ge(f,k,gt)}}}l=l.next}while(l!==m)}}catch(gt){Ge(i,i.return,gt)}}function c_(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{$0(i,r)}catch(l){Ge(e,e.return,l)}}}function u_(e,i,r){r.props=rr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ge(e,i,l)}}function ll(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Ge(e,i,f)}}function ra(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ge(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ge(e,i,f)}else r.current=null}function f_(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ge(e,e.return,f)}}function qh(e,i,r){try{var l=e.stateNode;jM(l,e.type,r,i),l[Gn]=i}catch(f){Ge(e,e.return,f)}}function h_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ms(e.type)||e.tag===4}function Yh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||h_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ms(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ya));else if(l!==4&&(l===27&&ms(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Zh(e,i,r),e=e.sibling;e!==null;)Zh(e,i,r),e=e.sibling}function Vc(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&ms(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Vc(e,i,r),e=e.sibling;e!==null;)Vc(e,i,r),e=e.sibling}function d_(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Wn(i,l,r),i[Mn]=e,i[Gn]=r}catch(m){Ge(e,e.return,m)}}var Da=!1,Rn=!1,Kh=!1,p_=typeof WeakSet=="function"?WeakSet:Set,zn=null;function DM(e,i){if(e=e.containerInfo,gd=cu,e=A0(e),Vf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var b=0,C=-1,k=-1,at=0,gt=0,yt=e,ct=null;e:for(;;){for(var ft;yt!==r||f!==0&&yt.nodeType!==3||(C=b+f),yt!==m||l!==0&&yt.nodeType!==3||(k=b+l),yt.nodeType===3&&(b+=yt.nodeValue.length),(ft=yt.firstChild)!==null;)ct=yt,yt=ft;for(;;){if(yt===e)break e;if(ct===r&&++at===f&&(C=b),ct===m&&++gt===l&&(k=b),(ft=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ft}r=C===-1||k===-1?null:{start:C,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(_d={focusedElem:e,selectionRange:r},cu=!1,zn=i;zn!==null;)if(i=zn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,zn=e;else for(;zn!==null;){switch(i=zn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,f=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Qt=rr(r.type,f);e=l.getSnapshotBeforeUpdate(Qt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ge(r,r.return,re)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)yd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,zn=e;break}zn=i.return}}function m_(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:La(e,r),l&4&&ol(5,r);break;case 1:if(La(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(b){Ge(r,r.return,b)}else{var f=rr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ge(r,r.return,b)}}l&64&&c_(r),l&512&&ll(r,r.return);break;case 3:if(La(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{$0(e,i)}catch(b){Ge(r,r.return,b)}}break;case 27:i===null&&l&4&&d_(r);case 26:case 5:La(e,r),i===null&&l&4&&f_(r),l&512&&ll(r,r.return);break;case 12:La(e,r);break;case 31:La(e,r),l&4&&v_(e,r);break;case 13:La(e,r),l&4&&x_(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=FM.bind(null,r),s1(e,r))));break;case 22:if(l=r.memoizedState!==null||Da,!l){i=i!==null&&i.memoizedState!==null||Rn,f=Da;var m=Rn;Da=l,(Rn=i)&&!m?Na(e,r,(r.subtreeFlags&8772)!==0):La(e,r),Da=f,Rn=m}break;case 30:break;default:La(e,r)}}function g_(e){var i=e.alternate;i!==null&&(e.alternate=null,g_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ka(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,ri=!1;function Ua(e,i,r){for(r=r.child;r!==null;)__(e,i,r),r=r.sibling}function __(e,i,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(pt,r)}catch{}switch(r.tag){case 26:Rn||ra(r,i),Ua(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Rn||ra(r,i);var l=fn,f=ri;ms(r.type)&&(fn=r.stateNode,ri=!1),Ua(e,i,r),_l(r.stateNode),fn=l,ri=f;break;case 5:Rn||ra(r,i);case 6:if(l=fn,f=ri,fn=null,Ua(e,i,r),fn=l,ri=f,fn!==null)if(ri)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(r.stateNode)}catch(m){Ge(r,i,m)}else try{fn.removeChild(r.stateNode)}catch(m){Ge(r,i,m)}break;case 18:fn!==null&&(ri?(e=fn,cv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),$r(e)):cv(fn,r.stateNode));break;case 4:l=fn,f=ri,fn=r.stateNode.containerInfo,ri=!0,Ua(e,i,r),fn=l,ri=f;break;case 0:case 11:case 14:case 15:ls(2,r,i),Rn||ls(4,r,i),Ua(e,i,r);break;case 1:Rn||(ra(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&u_(r,i,l)),Ua(e,i,r);break;case 21:Ua(e,i,r);break;case 22:Rn=(l=Rn)||r.memoizedState!==null,Ua(e,i,r),Rn=l;break;default:Ua(e,i,r)}}function v_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$r(e)}catch(r){Ge(i,i.return,r)}}}function x_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$r(e)}catch(r){Ge(i,i.return,r)}}function UM(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new p_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new p_),i;default:throw Error(a(435,e.tag))}}function kc(e,i){var r=UM(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=HM.bind(null,e,l);l.then(f,f)}})}function oi(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],m=e,b=i,C=b;t:for(;C!==null;){switch(C.tag){case 27:if(ms(C.type)){fn=C.stateNode,ri=!1;break t}break;case 5:fn=C.stateNode,ri=!1;break t;case 3:case 4:fn=C.stateNode.containerInfo,ri=!0;break t}C=C.return}if(fn===null)throw Error(a(160));__(m,b,f),fn=null,ri=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)y_(i,e),i=i.sibling}var Yi=null;function y_(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oi(i,e),li(e),l&4&&(ls(3,e,e.return),ol(3,e),ls(5,e,e.return));break;case 1:oi(i,e),li(e),l&512&&(Rn||r===null||ra(r,r.return)),l&64&&Da&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Yi;if(oi(i,e),li(e),l&512&&(Rn||r===null||ra(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Za]||m[Mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Wn(m,l,r),m[Mn]=e,bn(m),l=m;break t;case"link":var b=yv("link","href",f).get(l+(r.href||""));if(b){for(var C=0;C<b.length;C++)if(m=b[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(C,1);break e}}m=f.createElement(l),Wn(m,l,r),f.head.appendChild(m);break;case"meta":if(b=yv("meta","content",f).get(l+(r.content||""))){for(C=0;C<b.length;C++)if(m=b[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(C,1);break e}}m=f.createElement(l),Wn(m,l,r),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[Mn]=e,bn(m),l=m}e.stateNode=l}else Sv(f,e.type,e.stateNode);else e.stateNode=xv(f,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?Sv(f,e.type,e.stateNode):xv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&qh(e,e.memoizedProps,r.memoizedProps)}break;case 27:oi(i,e),li(e),l&512&&(Rn||r===null||ra(r,r.return)),r!==null&&l&4&&qh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(oi(i,e),li(e),l&512&&(Rn||r===null||ra(r,r.return)),e.flags&32){f=e.stateNode;try{_i(f,"")}catch(Qt){Ge(e,e.return,Qt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,qh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Kh=!0);break;case 6:if(oi(i,e),li(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Qt){Ge(e,e.return,Qt)}}break;case 3:if(su=null,f=Yi,Yi=iu(i.containerInfo),oi(i,e),Yi=f,li(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{$r(i.containerInfo)}catch(Qt){Ge(e,e.return,Qt)}Kh&&(Kh=!1,S_(e));break;case 4:l=Yi,Yi=iu(e.stateNode.containerInfo),oi(i,e),li(e),Yi=l;break;case 12:oi(i,e),li(e);break;case 31:oi(i,e),li(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 13:oi(i,e),li(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Wc=Zt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 22:f=e.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,at=Da,gt=Rn;if(Da=at||f,Rn=gt||k,oi(i,e),Rn=gt,Da=at,li(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||k||Da||Rn||or(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){k=r=i;try{if(m=k.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=k.stateNode;var yt=k.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Qt){Ge(k,k.return,Qt)}}}else if(i.tag===6){if(r===null){k=i;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(Qt){Ge(k,k.return,Qt)}}}else if(i.tag===18){if(r===null){k=i;try{var ft=k.stateNode;f?uv(ft,!0):uv(k.stateNode,!1)}catch(Qt){Ge(k,k.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,kc(e,r))));break;case 19:oi(i,e),li(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 30:break;case 21:break;default:oi(i,e),li(e)}}function li(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(h_(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,m=Yh(e);Vc(e,m,f);break;case 5:var b=r.stateNode;r.flags&32&&(_i(b,""),r.flags&=-33);var C=Yh(e);Vc(e,C,b);break;case 3:case 4:var k=r.stateNode.containerInfo,at=Yh(e);Zh(e,at,k);break;default:throw Error(a(161))}}catch(gt){Ge(e,e.return,gt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function S_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;S_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function La(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)m_(e,i.alternate,i),i=i.sibling}function or(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ls(4,i,i.return),or(i);break;case 1:ra(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&u_(i,i.return,r),or(i);break;case 27:_l(i.stateNode);case 26:case 5:ra(i,i.return),or(i);break;case 22:i.memoizedState===null&&or(i);break;case 30:or(i);break;default:or(i)}e=e.sibling}}function Na(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Na(f,m,r),ol(4,m);break;case 1:if(Na(f,m,r),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(at){Ge(l,l.return,at)}if(l=m,f=l.updateQueue,f!==null){var C=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)J0(k[f],C)}catch(at){Ge(l,l.return,at)}}r&&b&64&&c_(m),ll(m,m.return);break;case 27:d_(m);case 26:case 5:Na(f,m,r),r&&l===null&&b&4&&f_(m),ll(m,m.return);break;case 12:Na(f,m,r);break;case 31:Na(f,m,r),r&&b&4&&v_(f,m);break;case 13:Na(f,m,r),r&&b&4&&x_(f,m);break;case 22:m.memoizedState===null&&Na(f,m,r),ll(m,m.return);break;case 30:break;default:Na(f,m,r)}i=i.sibling}}function Qh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Zo(r))}function jh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e))}function Zi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)M_(e,i,r,l),i=i.sibling}function M_(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Zi(e,i,r,l),f&2048&&ol(9,i);break;case 1:Zi(e,i,r,l);break;case 3:Zi(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e)));break;case 12:if(f&2048){Zi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,C=m.onPostCommit;typeof C=="function"&&C(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Ge(i,i.return,k)}}else Zi(e,i,r,l);break;case 31:Zi(e,i,r,l);break;case 13:Zi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Zi(e,i,r,l):cl(e,i):m._visibility&2?Zi(e,i,r,l):(m._visibility|=2,Vr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Qh(b,i);break;case 24:Zi(e,i,r,l),f&2048&&jh(i.alternate,i);break;default:Zi(e,i,r,l)}}function Vr(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,C=r,k=l,at=b.flags;switch(b.tag){case 0:case 11:case 15:Vr(m,b,C,k,f),ol(8,b);break;case 23:break;case 22:var gt=b.stateNode;b.memoizedState!==null?gt._visibility&2?Vr(m,b,C,k,f):cl(m,b):(gt._visibility|=2,Vr(m,b,C,k,f)),f&&at&2048&&Qh(b.alternate,b);break;case 24:Vr(m,b,C,k,f),f&&at&2048&&jh(b.alternate,b);break;default:Vr(m,b,C,k,f)}i=i.sibling}}function cl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:cl(r,l),f&2048&&Qh(l.alternate,l);break;case 24:cl(r,l),f&2048&&jh(l.alternate,l);break;default:cl(r,l)}i=i.sibling}}var ul=8192;function kr(e,i,r){if(e.subtreeFlags&ul)for(e=e.child;e!==null;)b_(e,i,r),e=e.sibling}function b_(e,i,r){switch(e.tag){case 26:kr(e,i,r),e.flags&ul&&e.memoizedState!==null&&_1(r,Yi,e.memoizedState,e.memoizedProps);break;case 5:kr(e,i,r);break;case 3:case 4:var l=Yi;Yi=iu(e.stateNode.containerInfo),kr(e,i,r),Yi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ul,ul=16777216,kr(e,i,r),ul=l):kr(e,i,r));break;default:kr(e,i,r)}}function E_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function fl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];zn=l,A_(l,e)}E_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T_(e),e=e.sibling}function T_(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&ls(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Xc(e)):fl(e);break;default:fl(e)}}function Xc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];zn=l,A_(l,e)}E_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ls(8,i,i.return),Xc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Xc(i));break;default:Xc(i)}e=e.sibling}}function A_(e,i){for(;zn!==null;){var r=zn;switch(r.tag){case 0:case 11:case 15:ls(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,zn=l;else t:for(r=e;zn!==null;){l=zn;var f=l.sibling,m=l.return;if(g_(l),l===r){zn=null;break t}if(f!==null){f.return=m,zn=f;break t}zn=m}}}var LM={getCacheForType:function(e){var i=kn(En),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return kn(En).controller.signal}},NM=typeof WeakMap=="function"?WeakMap:Map,Pe=0,$e=null,be=null,Te=0,He=0,Mi=null,cs=!1,Xr=!1,Jh=!1,Pa=0,vn=0,us=0,lr=0,$h=0,bi=0,Wr=0,hl=null,ci=null,td=!1,Wc=0,R_=0,qc=1/0,Yc=null,fs=null,Nn=0,hs=null,qr=null,Oa=0,ed=0,nd=null,w_=null,dl=0,id=null;function Ei(){return(Pe&2)!==0&&Te!==0?Te&-Te:F.T!==null?cd():Bo()}function C_(){if(bi===0)if((Te&536870912)===0||we){var e=le;le<<=1,(le&3932160)===0&&(le=262144),bi=e}else bi=536870912;return e=yi.current,e!==null&&(e.flags|=32),bi}function ui(e,i,r){(e===$e&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),ds(e,Te,bi,!1)),Wt(e,r),((Pe&2)===0||e!==$e)&&(e===$e&&((Pe&2)===0&&(lr|=r),vn===4&&ds(e,Te,bi,!1)),oa(e))}function D_(e,i,r){if((Pe&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Lt(e,i),f=l?BM(e,i):sd(e,i,!0),m=l;do{if(f===0){Xr&&!l&&ds(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!PM(r)){f=sd(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var C=e;f=hl;var k=C.current.memoizedState.isDehydrated;if(k&&(Yr(C,b).flags|=256),b=sd(C,b,!1),b!==2){if(Jh&&!k){C.errorRecoveryDisabledLanes|=m,lr|=m,f=4;break t}m=ci,ci=f,m!==null&&(ci===null?ci=m:ci.push.apply(ci,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){Yr(e,0),ds(e,i,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ds(l,i,bi,!cs);break t;case 2:ci=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Wc+300-Zt(),10<f)){if(ds(l,i,bi,!cs),_t(l,0,!0)!==0)break t;Oa=i,l.timeoutHandle=ov(U_.bind(null,l,r,ci,Yc,td,i,bi,lr,Wr,cs,m,"Throttled",-0,0),f);break t}U_(l,r,ci,Yc,td,i,bi,lr,Wr,cs,m,null,-0,0)}}break}while(!0);oa(e)}function U_(e,i,r,l,f,m,b,C,k,at,gt,yt,ct,ft){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ya},b_(i,m,yt);var Qt=(m&62914560)===m?Wc-Zt():(m&4194048)===m?R_-Zt():0;if(Qt=v1(yt,Qt),Qt!==null){Oa=m,e.cancelPendingCommit=Qt(F_.bind(null,e,i,m,r,l,f,b,C,k,gt,yt,null,ct,ft)),ds(e,m,b,!at);return}}F_(e,i,m,r,l,f,b,C,k)}function PM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],m=f.getSnapshot;f=f.value;try{if(!vi(m(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ds(e,i,r,l){i&=~$h,i&=~lr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var m=31-Gt(f),b=1<<m;l[m]=-1,f&=~b}r!==0&&Be(e,r,i)}function Zc(){return(Pe&6)===0?(pl(0),!1):!0}function ad(){if(be!==null){if(He===0)var e=be.return;else e=be,Ea=$s=null,yh(e),Ir=null,Qo=0,e=be;for(;e!==null;)l_(e.alternate,e),e=e.return;be=null}}function Yr(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,t1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Oa=0,ad(),$e=e,be=r=Ma(e.current,null),Te=i,He=0,Mi=null,cs=!1,Xr=Lt(e,i),Jh=!1,Wr=bi=$h=lr=us=vn=0,ci=hl=null,td=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Gt(l),m=1<<f;i|=e[f],l&=~m}return Pa=i,mc(),r}function L_(e,i){pe=null,F.H=al,i===Br||i===bc?(i=Z0(),He=3):i===lh?(i=Z0(),He=4):He=i===Bh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Mi=i,be===null&&(vn=1,Ic(e,Ni(i,e.current)))}function N_(){var e=yi.current;return e===null?!0:(Te&4194048)===Te?Ii===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Ii:!1}function P_(){var e=F.H;return F.H=al,e===null?al:e}function O_(){var e=F.A;return F.A=LM,e}function Kc(){vn=4,cs||(Te&4194048)!==Te&&yi.current!==null||(Xr=!0),(us&134217727)===0&&(lr&134217727)===0||$e===null||ds($e,Te,bi,!1)}function sd(e,i,r){var l=Pe;Pe|=2;var f=P_(),m=O_();($e!==e||Te!==i)&&(Yc=null,Yr(e,i)),i=!1;var b=vn;t:do try{if(He!==0&&be!==null){var C=be,k=Mi;switch(He){case 8:ad(),b=6;break t;case 3:case 2:case 9:case 6:yi.current===null&&(i=!0);var at=He;if(He=0,Mi=null,Zr(e,C,k,at),r&&Xr){b=0;break t}break;default:at=He,He=0,Mi=null,Zr(e,C,k,at)}}OM(),b=vn;break}catch(gt){L_(e,gt)}while(!0);return i&&e.shellSuspendCounter++,Ea=$s=null,Pe=l,F.H=f,F.A=m,be===null&&($e=null,Te=0,mc()),b}function OM(){for(;be!==null;)B_(be)}function BM(e,i){var r=Pe;Pe|=2;var l=P_(),f=O_();$e!==e||Te!==i?(Yc=null,qc=Zt()+500,Yr(e,i)):Xr=Lt(e,i);t:do try{if(He!==0&&be!==null){i=be;var m=Mi;e:switch(He){case 1:He=0,Mi=null,Zr(e,i,m,1);break;case 2:case 9:if(q0(m)){He=0,Mi=null,I_(i);break}i=function(){He!==2&&He!==9||$e!==e||(He=7),oa(e)},m.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:q0(m)?(He=0,Mi=null,I_(i)):(He=0,Mi=null,Zr(e,i,m,7));break;case 5:var b=null;switch(be.tag){case 26:b=be.memoizedState;case 5:case 27:var C=be;if(b?Mv(b):C.stateNode.complete){He=0,Mi=null;var k=C.sibling;if(k!==null)be=k;else{var at=C.return;at!==null?(be=at,Qc(at)):be=null}break e}}He=0,Mi=null,Zr(e,i,m,5);break;case 6:He=0,Mi=null,Zr(e,i,m,6);break;case 8:ad(),vn=6;break t;default:throw Error(a(462))}}IM();break}catch(gt){L_(e,gt)}while(!0);return Ea=$s=null,F.H=l,F.A=f,Pe=r,be!==null?0:($e=null,Te=0,mc(),vn)}function IM(){for(;be!==null&&!on();)B_(be)}function B_(e){var i=r_(e.alternate,e,Pa);e.memoizedProps=e.pendingProps,i===null?Qc(e):be=i}function I_(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=t_(r,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=t_(r,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:yh(i);default:l_(r,i),i=be=O0(i,Pa),i=r_(r,i,Pa)}e.memoizedProps=e.pendingProps,i===null?Qc(e):be=i}function Zr(e,i,r,l){Ea=$s=null,yh(i),Ir=null,Qo=0;var f=i.return;try{if(TM(e,f,i,r,Te)){vn=1,Ic(e,Ni(r,e.current)),be=null;return}}catch(m){if(f!==null)throw be=f,m;vn=1,Ic(e,Ni(r,e.current)),be=null;return}i.flags&32768?(we||l===1?e=!0:Xr||(Te&536870912)!==0?e=!1:(cs=e=!0,(l===2||l===9||l===3||l===6)&&(l=yi.current,l!==null&&l.tag===13&&(l.flags|=16384))),z_(i,e)):Qc(i)}function Qc(e){var i=e;do{if((i.flags&32768)!==0){z_(i,cs);return}e=i.return;var r=wM(i.alternate,i,Pa);if(r!==null){be=r;return}if(i=i.sibling,i!==null){be=i;return}be=i=e}while(i!==null);vn===0&&(vn=5)}function z_(e,i){do{var r=CM(e.alternate,e);if(r!==null){r.flags&=32767,be=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){be=e;return}be=e=r}while(e!==null);vn=6,be=null}function F_(e,i,r,l,f,m,b,C,k){e.cancelPendingCommit=null;do jc();while(Nn!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Yf,ln(e,r,m,b,C,k),e===$e&&(be=$e=null,Te=0),qr=i,hs=e,Oa=r,ed=m,nd=f,w_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,GM(j,function(){return X_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=H.p,H.p=2,b=Pe,Pe|=4;try{DM(e,i,r)}finally{Pe=b,H.p=f,F.T=l}}Nn=1,H_(),G_(),V_()}}function H_(){if(Nn===1){Nn=0;var e=hs,i=qr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var l=H.p;H.p=2;var f=Pe;Pe|=4;try{y_(i,e);var m=_d,b=A0(e.containerInfo),C=m.focusedElem,k=m.selectionRange;if(b!==C&&C&&C.ownerDocument&&T0(C.ownerDocument.documentElement,C)){if(k!==null&&Vf(C)){var at=k.start,gt=k.end;if(gt===void 0&&(gt=at),"selectionStart"in C)C.selectionStart=at,C.selectionEnd=Math.min(gt,C.value.length);else{var yt=C.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ft=ct.getSelection(),Qt=C.textContent.length,re=Math.min(k.start,Qt),Ze=k.end===void 0?re:Math.min(k.end,Qt);!ft.extend&&re>Ze&&(b=Ze,Ze=re,re=b);var J=E0(C,re),W=E0(C,Ze);if(J&&W&&(ft.rangeCount!==1||ft.anchorNode!==J.node||ft.anchorOffset!==J.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var it=yt.createRange();it.setStart(J.node,J.offset),ft.removeAllRanges(),re>Ze?(ft.addRange(it),ft.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ft.addRange(it))}}}}for(yt=[],ft=C;ft=ft.parentNode;)ft.nodeType===1&&yt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var vt=yt[C];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}cu=!!gd,_d=gd=null}finally{Pe=f,H.p=l,F.T=r}}e.current=i,Nn=2}}function G_(){if(Nn===2){Nn=0;var e=hs,i=qr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var l=H.p;H.p=2;var f=Pe;Pe|=4;try{m_(e,i.alternate,i)}finally{Pe=f,H.p=l,F.T=r}}Nn=3}}function V_(){if(Nn===4||Nn===3){Nn=0,z();var e=hs,i=qr,r=Oa,l=w_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Nn=5:(Nn=0,qr=hs=null,k_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(fs=null),Oo(r),i=i.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=H.p,H.p=2,F.T=null;try{for(var m=e.onRecoverableError,b=0;b<l.length;b++){var C=l[b];m(C.value,{componentStack:C.stack})}}finally{F.T=i,H.p=f}}(Oa&3)!==0&&jc(),oa(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===id?dl++:(dl=0,id=e):dl=0,pl(0)}}function k_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Zo(i)))}function jc(){return H_(),G_(),V_(),X_()}function X_(){if(Nn!==5)return!1;var e=hs,i=ed;ed=0;var r=Oo(Oa),l=F.T,f=H.p;try{H.p=32>r?32:r,F.T=null,r=nd,nd=null;var m=hs,b=Oa;if(Nn=0,qr=hs=null,Oa=0,(Pe&6)!==0)throw Error(a(331));var C=Pe;if(Pe|=4,T_(m.current),M_(m,m.current,b,r),Pe=C,pl(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(pt,m)}catch{}return!0}finally{H.p=f,F.T=l,k_(e,i)}}function W_(e,i,r){i=Ni(r,i),i=Oh(e.stateNode,i,2),e=ss(e,i,2),e!==null&&(Wt(e,2),oa(e))}function Ge(e,i,r){if(e.tag===3)W_(e,e,r);else for(;i!==null;){if(i.tag===3){W_(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fs===null||!fs.has(l))){e=Ni(r,e),r=qg(2),l=ss(i,r,2),l!==null&&(Yg(r,l,i,e),Wt(l,2),oa(l));break}}i=i.return}}function rd(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new NM;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Jh=!0,f.add(r),e=zM.bind(null,e,i,r),i.then(e,e))}function zM(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,$e===e&&(Te&r)===r&&(vn===4||vn===3&&(Te&62914560)===Te&&300>Zt()-Wc?(Pe&2)===0&&Yr(e,0):$h|=r,Wr===Te&&(Wr=0)),oa(e)}function q_(e,i){i===0&&(i=Et()),e=Qs(e,i),e!==null&&(Wt(e,i),oa(e))}function FM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),q_(e,r)}function HM(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),q_(e,r)}function GM(e,i){return pn(e,i)}var Jc=null,Kr=null,od=!1,$c=!1,ld=!1,ps=0;function oa(e){e!==Kr&&e.next===null&&(Kr===null?Jc=Kr=e:Kr=Kr.next=e),$c=!0,od||(od=!0,kM())}function pl(e,i){if(!ld&&$c){ld=!0;do for(var r=!1,l=Jc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var b=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Gt(42|e)+1)-1,m&=f&~(b&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,Q_(l,m))}else m=Te,m=_t(l,l===$e?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Lt(l,m)||(r=!0,Q_(l,m));l=l.next}while(r);ld=!1}}function VM(){Y_()}function Y_(){$c=od=!1;var e=0;ps!==0&&$M()&&(e=ps);for(var i=Zt(),r=null,l=Jc;l!==null;){var f=l.next,m=Z_(l,i);m===0?(l.next=null,r===null?Jc=f:r.next=f,f===null&&(Kr=r)):(r=l,(e!==0||(m&3)!==0)&&($c=!0)),l=f}Nn!==0&&Nn!==5||pl(e),ps!==0&&(ps=0)}function Z_(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-Gt(m),C=1<<b,k=f[b];k===-1?((C&r)===0||(C&l)!==0)&&(f[b]=Ft(C,i)):k<=i&&(e.expiredLanes|=C),m&=~C}if(i=$e,r=Te,r=_t(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&We(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Lt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&We(l),Oo(r)){case 2:case 8:r=E;break;case 32:r=j;break;case 268435456:r=ht;break;default:r=j}return l=K_.bind(null,e),r=pn(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&We(l),e.callbackPriority=2,e.callbackNode=null,2}function K_(e,i){if(Nn!==0&&Nn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(jc()&&e.callbackNode!==r)return null;var l=Te;return l=_t(e,e===$e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(D_(e,l,i),Z_(e,Zt()),e.callbackNode!=null&&e.callbackNode===r?K_.bind(null,e):null)}function Q_(e,i){if(jc())return null;D_(e,i,!0)}function kM(){e1(function(){(Pe&6)!==0?pn(L,VM):Y_()})}function cd(){if(ps===0){var e=Pr;e===0&&(e=ne,ne<<=1,(ne&261888)===0&&(ne=256)),ps=e}return ps}function j_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qs(""+e)}function J_(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function XM(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var m=j_((f[Gn]||null).action),b=l.submitter;b&&(i=(i=b[Gn]||null)?j_(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var C=new fc("action","action",null,l,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ps!==0){var k=b?J_(f,b):new FormData(f);Ch(r,{pending:!0,data:k,method:f.method,action:m},null,k)}}else typeof m=="function"&&(C.preventDefault(),k=b?J_(f,b):new FormData(f),Ch(r,{pending:!0,data:k,method:f.method,action:m},m,k))},currentTarget:f}]})}}for(var ud=0;ud<qf.length;ud++){var fd=qf[ud],WM=fd.toLowerCase(),qM=fd[0].toUpperCase()+fd.slice(1);qi(WM,"on"+qM)}qi(C0,"onAnimationEnd"),qi(D0,"onAnimationIteration"),qi(U0,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(lM,"onTransitionRun"),qi(cM,"onTransitionStart"),qi(uM,"onTransitionCancel"),qi(L0,"onTransitionEnd"),lt("onMouseEnter",["mouseout","mouseover"]),lt("onMouseLeave",["mouseout","mouseover"]),lt("onPointerEnter",["pointerout","pointerover"]),lt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function $_(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var C=l[b],k=C.instance,at=C.currentTarget;if(C=C.listener,k!==m&&f.isPropagationStopped())break t;m=C,f.currentTarget=at;try{m(f)}catch(gt){pc(gt)}f.currentTarget=null,m=k}else for(b=0;b<l.length;b++){if(C=l[b],k=C.instance,at=C.currentTarget,C=C.listener,k!==m&&f.isPropagationStopped())break t;m=C,f.currentTarget=at;try{m(f)}catch(gt){pc(gt)}f.currentTarget=null,m=k}}}}function Ee(e,i){var r=i[ks];r===void 0&&(r=i[ks]=new Set);var l=e+"__bubble";r.has(l)||(tv(i,e,2,!1),r.add(l))}function hd(e,i,r){var l=0;i&&(l|=4),tv(r,e,l,i)}var tu="_reactListening"+Math.random().toString(36).slice(2);function dd(e){if(!e[tu]){e[tu]=!0,oc.forEach(function(r){r!=="selectionchange"&&(YM.has(r)||hd(r,!1,e),hd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[tu]||(i[tu]=!0,hd("selectionchange",!1,i))}}function tv(e,i,r,l){switch(Cv(i)){case 2:var f=S1;break;case 8:f=M1;break;default:f=wd}r=f.bind(null,i,r,e),f=void 0,!Nf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function pd(e,i,r,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var C=l.stateNode.containerInfo;if(C===f)break;if(b===4)for(b=l.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;C!==null;){if(b=va(C),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){l=m=b;continue t}C=C.parentNode}}l=l.return}s0(function(){var at=m,gt=Uf(r),yt=[];t:{var ct=N0.get(e);if(ct!==void 0){var ft=fc,Qt=e;switch(e){case"keypress":if(cc(r)===0)break t;case"keydown":case"keyup":ft=HS;break;case"focusin":Qt="focus",ft=If;break;case"focusout":Qt="blur",ft=If;break;case"beforeblur":case"afterblur":ft=If;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=l0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=kS;break;case C0:case D0:case U0:ft=US;break;case L0:ft=WS;break;case"scroll":case"scrollend":ft=AS;break;case"wheel":ft=YS;break;case"copy":case"cut":case"paste":ft=NS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=u0;break;case"toggle":case"beforetoggle":ft=KS}var re=(i&4)!==0,Ze=!re&&(e==="scroll"||e==="scrollend"),J=re?ct!==null?ct+"Capture":null:ct;re=[];for(var W=at,it;W!==null;){var vt=W;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||J===null||(vt=Io(W,J),vt!=null&&re.push(gl(W,vt,it))),Ze)break;W=W.return}0<re.length&&(ct=new ft(ct,Qt,null,r,gt),yt.push({event:ct,listeners:re}))}}if((i&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ct&&r!==Df&&(Qt=r.relatedTarget||r.fromElement)&&(va(Qt)||Qt[ai]))break t;if((ft||ct)&&(ct=gt.window===gt?gt:(ct=gt.ownerDocument)?ct.defaultView||ct.parentWindow:window,ft?(Qt=r.relatedTarget||r.toElement,ft=at,Qt=Qt?va(Qt):null,Qt!==null&&(Ze=c(Qt),re=Qt.tag,Qt!==Ze||re!==5&&re!==27&&re!==6)&&(Qt=null)):(ft=null,Qt=at),ft!==Qt)){if(re=l0,vt="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(re=u0,vt="onPointerLeave",J="onPointerEnter",W="pointer"),Ze=ft==null?ct:Ws(ft),it=Qt==null?ct:Ws(Qt),ct=new re(vt,W+"leave",ft,r,gt),ct.target=Ze,ct.relatedTarget=it,vt=null,va(gt)===at&&(re=new re(J,W+"enter",Qt,r,gt),re.target=it,re.relatedTarget=Ze,vt=re),Ze=vt,ft&&Qt)e:{for(re=ZM,J=ft,W=Qt,it=0,vt=J;vt;vt=re(vt))it++;vt=0;for(var ae=W;ae;ae=re(ae))vt++;for(;0<it-vt;)J=re(J),it--;for(;0<vt-it;)W=re(W),vt--;for(;it--;){if(J===W||W!==null&&J===W.alternate){re=J;break e}J=re(J),W=re(W)}re=null}else re=null;ft!==null&&ev(yt,ct,ft,re,!1),Qt!==null&&Ze!==null&&ev(yt,Ze,Qt,re,!0)}}t:{if(ct=at?Ws(at):window,ft=ct.nodeName&&ct.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ct.type==="file")var Le=v0;else if(g0(ct))if(x0)Le=sM;else{Le=iM;var Jt=nM}else ft=ct.nodeName,!ft||ft.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?at&&Oe(at.elementType)&&(Le=v0):Le=aM;if(Le&&(Le=Le(e,at))){_0(yt,Le,r,gt);break t}Jt&&Jt(e,ct,at),e==="focusout"&&at&&ct.type==="number"&&at.memoizedProps.value!=null&&Me(ct,"number",ct.value)}switch(Jt=at?Ws(at):window,e){case"focusin":(g0(Jt)||Jt.contentEditable==="true")&&(Ar=Jt,kf=at,Wo=null);break;case"focusout":Wo=kf=Ar=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,R0(yt,r,gt);break;case"selectionchange":if(oM)break;case"keydown":case"keyup":R0(yt,r,gt)}var me;if(Ff)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Tr?p0(e,r)&&(Ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ae="onCompositionStart");Ae&&(f0&&r.locale!=="ko"&&(Tr||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Tr&&(me=r0()):(Ja=gt,Pf="value"in Ja?Ja.value:Ja.textContent,Tr=!0)),Jt=eu(at,Ae),0<Jt.length&&(Ae=new c0(Ae,e,null,r,gt),yt.push({event:Ae,listeners:Jt}),me?Ae.data=me:(me=m0(r),me!==null&&(Ae.data=me)))),(me=jS?JS(e,r):$S(e,r))&&(Ae=eu(at,"onBeforeInput"),0<Ae.length&&(Jt=new c0("onBeforeInput","beforeinput",null,r,gt),yt.push({event:Jt,listeners:Ae}),Jt.data=me)),XM(yt,e,at,r,gt)}$_(yt,i)})}function gl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function eu(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Io(e,r),f!=null&&l.unshift(gl(e,f,m)),f=Io(e,i),f!=null&&l.push(gl(e,f,m))),e.tag===3)return l;e=e.return}return[]}function ZM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ev(e,i,r,l,f){for(var m=i._reactName,b=[];r!==null&&r!==l;){var C=r,k=C.alternate,at=C.stateNode;if(C=C.tag,k!==null&&k===l)break;C!==5&&C!==26&&C!==27||at===null||(k=at,f?(at=Io(r,m),at!=null&&b.unshift(gl(r,at,k))):f||(at=Io(r,m),at!=null&&b.push(gl(r,at,k)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var KM=/\r\n?/g,QM=/\u0000|\uFFFD/g;function nv(e){return(typeof e=="string"?e:""+e).replace(KM,`
`).replace(QM,"")}function iv(e,i){return i=nv(i),nv(e)===i}function Ye(e,i,r,l,f,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||_i(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&_i(e,""+l);break;case"className":Kt(e,"class",l);break;case"tabIndex":Kt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,r,l);break;case"style":Wi(e,l,m);break;case"data":if(i!=="object"){Kt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=qs(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Ye(e,i,"name",f.name,f,null),Ye(e,i,"formEncType",f.formEncType,f,null),Ye(e,i,"formMethod",f.formMethod,f,null),Ye(e,i,"formTarget",f.formTarget,f,null)):(Ye(e,i,"encType",f.encType,f,null),Ye(e,i,"method",f.method,f,null),Ye(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=qs(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=ya);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=qs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Ot(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ot(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ia.get(r)||r,Ot(e,r,l))}}function md(e,i,r,l,f,m){switch(r){case"style":Wi(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?_i(e,l):(typeof l=="number"||typeof l=="bigint")&&_i(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),m=e[Gn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Ot(e,r,l)}}}function Wn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,f=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,m,b,r,null)}}f&&Ye(e,i,"srcSet",r.srcSet,r,null),l&&Ye(e,i,"src",r.src,r,null);return;case"input":Ee("invalid",e);var C=m=b=f=null,k=null,at=null;for(l in r)if(r.hasOwnProperty(l)){var gt=r[l];if(gt!=null)switch(l){case"name":f=gt;break;case"type":b=gt;break;case"checked":k=gt;break;case"defaultChecked":at=gt;break;case"value":m=gt;break;case"defaultValue":C=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(a(137,i));break;default:Ye(e,i,l,gt,r,null)}}qn(e,m,C,k,at,b,f,!1);return;case"select":Ee("invalid",e),l=b=m=null;for(f in r)if(r.hasOwnProperty(f)&&(C=r[f],C!=null))switch(f){case"value":m=C;break;case"defaultValue":b=C;break;case"multiple":l=C;default:Ye(e,i,f,C,r,null)}i=m,r=b,e.multiple=!!l,i!=null?Ln(e,!!l,i,!1):r!=null&&Ln(e,!!l,r,!0);return;case"textarea":Ee("invalid",e),m=f=l=null;for(b in r)if(r.hasOwnProperty(b)&&(C=r[b],C!=null))switch(b){case"value":l=C;break;case"defaultValue":f=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Ye(e,i,b,C,r,null)}Xi(e,l,f,m);return;case"option":for(k in r)r.hasOwnProperty(k)&&(l=r[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ye(e,i,k,l,r,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<ml.length;l++)Ee(ml[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in r)if(r.hasOwnProperty(at)&&(l=r[at],l!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,at,l,r,null)}return;default:if(Oe(i)){for(gt in r)r.hasOwnProperty(gt)&&(l=r[gt],l!==void 0&&md(e,i,gt,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Ye(e,i,C,l,r,null))}function jM(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,C=null,k=null,at=null,gt=null;for(ft in r){var yt=r[ft];if(r.hasOwnProperty(ft)&&yt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":k=yt;default:l.hasOwnProperty(ft)||Ye(e,i,ft,null,l,yt)}}for(var ct in l){var ft=l[ct];if(yt=r[ct],l.hasOwnProperty(ct)&&(ft!=null||yt!=null))switch(ct){case"type":m=ft;break;case"name":f=ft;break;case"checked":at=ft;break;case"defaultChecked":gt=ft;break;case"value":b=ft;break;case"defaultValue":C=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:ft!==yt&&Ye(e,i,ct,ft,l,yt)}}Vt(e,b,C,k,at,gt,m,f);return;case"select":ft=b=C=ct=null;for(m in r)if(k=r[m],r.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":ft=k;default:l.hasOwnProperty(m)||Ye(e,i,m,null,l,k)}for(f in l)if(m=l[f],k=r[f],l.hasOwnProperty(f)&&(m!=null||k!=null))switch(f){case"value":ct=m;break;case"defaultValue":C=m;break;case"multiple":b=m;default:m!==k&&Ye(e,i,f,m,l,k)}i=C,r=b,l=ft,ct!=null?Ln(e,!!r,ct,!1):!!l!=!!r&&(i!=null?Ln(e,!!r,i,!0):Ln(e,!!r,r?[]:"",!1));return;case"textarea":ft=ct=null;for(C in r)if(f=r[C],r.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ye(e,i,C,null,l,f)}for(b in l)if(f=l[b],m=r[b],l.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":ct=f;break;case"defaultValue":ft=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Ye(e,i,b,f,l,m)}gi(e,ct,ft);return;case"option":for(var Qt in r)ct=r[Qt],r.hasOwnProperty(Qt)&&ct!=null&&!l.hasOwnProperty(Qt)&&(Qt==="selected"?e.selected=!1:Ye(e,i,Qt,null,l,ct));for(k in l)ct=l[k],ft=r[k],l.hasOwnProperty(k)&&ct!==ft&&(ct!=null||ft!=null)&&(k==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ye(e,i,k,ct,l,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in r)ct=r[re],r.hasOwnProperty(re)&&ct!=null&&!l.hasOwnProperty(re)&&Ye(e,i,re,null,l,ct);for(at in l)if(ct=l[at],ft=r[at],l.hasOwnProperty(at)&&ct!==ft&&(ct!=null||ft!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:Ye(e,i,at,ct,l,ft)}return;default:if(Oe(i)){for(var Ze in r)ct=r[Ze],r.hasOwnProperty(Ze)&&ct!==void 0&&!l.hasOwnProperty(Ze)&&md(e,i,Ze,void 0,l,ct);for(gt in l)ct=l[gt],ft=r[gt],!l.hasOwnProperty(gt)||ct===ft||ct===void 0&&ft===void 0||md(e,i,gt,ct,l,ft);return}}for(var J in r)ct=r[J],r.hasOwnProperty(J)&&ct!=null&&!l.hasOwnProperty(J)&&Ye(e,i,J,null,l,ct);for(yt in l)ct=l[yt],ft=r[yt],!l.hasOwnProperty(yt)||ct===ft||ct==null&&ft==null||Ye(e,i,yt,ct,l,ft)}function av(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],m=f.transferSize,b=f.initiatorType,C=f.duration;if(m&&C&&av(b)){for(b=0,C=f.responseEnd,l+=1;l<r.length;l++){var k=r[l],at=k.startTime;if(at>C)break;var gt=k.transferSize,yt=k.initiatorType;gt&&av(yt)&&(k=k.responseEnd,b+=gt*(k<C?1:(C-at)/(k-at)))}if(--l,i+=8*(m+b)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gd=null,_d=null;function nu(e){return e.nodeType===9?e:e.ownerDocument}function sv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function vd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xd=null;function $M(){var e=window.event;return e&&e.type==="popstate"?e===xd?!1:(xd=e,!0):(xd=null,!1)}var ov=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,lv=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof lv<"u"?function(e){return lv.resolve(null).then(e).catch(n1)}:ov;function n1(e){setTimeout(function(){throw e})}function ms(e){return e==="head"}function cv(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),$r(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")_l(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,_l(r);for(var m=r.firstChild;m;){var b=m.nextSibling,C=m.nodeName;m[Za]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&_l(e.ownerDocument.body);r=f}while(r);$r(i)}function uv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function yd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":yd(r),Ka(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function i1(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Za])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=zi(e.nextSibling),e===null)break}return null}function a1(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=zi(e.nextSibling),e===null))return null;return e}function fv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=zi(e.nextSibling),e===null))return null;return e}function Sd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function s1(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var bd=null;function hv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return zi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function dv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function pv(e,i,r){switch(i=nu(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function _l(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ka(e)}var Fi=new Map,mv=new Set;function iu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ba=H.d;H.d={f:r1,r:o1,D:l1,C:c1,L:u1,m:f1,X:d1,S:h1,M:p1};function r1(){var e=Ba.f(),i=Zc();return e||i}function o1(e){var i=xa(e);i!==null&&i.tag===5&&i.type==="form"?Lg(i):Ba.r(e)}var Qr=typeof document>"u"?null:document;function gv(e,i,r){var l=Qr;if(l&&typeof i=="string"&&i){var f=ze(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),mv.has(f)||(mv.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Wn(i,"link",e),bn(i),l.head.appendChild(i)))}}function l1(e){Ba.D(e),gv("dns-prefetch",e,null)}function c1(e,i){Ba.C(e,i),gv("preconnect",e,i)}function u1(e,i,r){Ba.L(e,i,r);var l=Qr;if(l&&e&&i){var f='link[rel="preload"][as="'+ze(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+ze(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+ze(r.imageSizes)+'"]')):f+='[href="'+ze(e)+'"]';var m=f;switch(i){case"style":m=jr(e);break;case"script":m=Jr(e)}Fi.has(m)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Fi.set(m,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(vl(m))||i==="script"&&l.querySelector(xl(m))||(i=l.createElement("link"),Wn(i,"link",e),bn(i),l.head.appendChild(i)))}}function f1(e,i){Ba.m(e,i);var r=Qr;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ze(l)+'"][href="'+ze(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Jr(e)}if(!Fi.has(m)&&(e=v({rel:"modulepreload",href:e},i),Fi.set(m,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(xl(m)))return}l=r.createElement("link"),Wn(l,"link",e),bn(l),r.head.appendChild(l)}}}function h1(e,i,r){Ba.S(e,i,r);var l=Qr;if(l&&e){var f=Qa(l).hoistableStyles,m=jr(e);i=i||"default";var b=f.get(m);if(!b){var C={loading:0,preload:null};if(b=l.querySelector(vl(m)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Fi.get(m))&&Ed(e,r);var k=b=l.createElement("link");bn(k),Wn(k,"link",e),k._p=new Promise(function(at,gt){k.onload=at,k.onerror=gt}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,au(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:C},f.set(m,b)}}}function d1(e,i){Ba.X(e,i);var r=Qr;if(r&&e){var l=Qa(r).hoistableScripts,f=Jr(e),m=l.get(f);m||(m=r.querySelector(xl(f)),m||(e=v({src:e,async:!0},i),(i=Fi.get(f))&&Td(e,i),m=r.createElement("script"),bn(m),Wn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function p1(e,i){Ba.M(e,i);var r=Qr;if(r&&e){var l=Qa(r).hoistableScripts,f=Jr(e),m=l.get(f);m||(m=r.querySelector(xl(f)),m||(e=v({src:e,async:!0,type:"module"},i),(i=Fi.get(f))&&Td(e,i),m=r.createElement("script"),bn(m),Wn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function _v(e,i,r,l){var f=(f=et.current)?iu(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=jr(r.href),r=Qa(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=jr(r.href);var m=Qa(f).hoistableStyles,b=m.get(e);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=f.querySelector(vl(e)))&&!m._p&&(b.instance=m,b.state.loading=5),Fi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Fi.set(e,r),m||m1(f,e,r,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Jr(r),r=Qa(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function jr(e){return'href="'+ze(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function vv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function m1(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Wn(i,"link",r),bn(i),e.head.appendChild(i))}function Jr(e){return'[src="'+ze(e)+'"]'}function xl(e){return"script[async]"+e}function xv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ze(r.href)+'"]');if(l)return i.instance=l,bn(l),l;var f=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),bn(l),Wn(l,"style",f),au(l,r.precedence,e),i.instance=l;case"stylesheet":f=jr(r.href);var m=e.querySelector(vl(f));if(m)return i.state.loading|=4,i.instance=m,bn(m),m;l=vv(r),(f=Fi.get(f))&&Ed(l,f),m=(e.ownerDocument||e).createElement("link"),bn(m);var b=m;return b._p=new Promise(function(C,k){b.onload=C,b.onerror=k}),Wn(m,"link",l),i.state.loading|=4,au(m,r.precedence,e),i.instance=m;case"script":return m=Jr(r.src),(f=e.querySelector(xl(m)))?(i.instance=f,bn(f),f):(l=r,(f=Fi.get(m))&&(l=v({},r),Td(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),bn(f),Wn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,au(l,r.precedence,e));return i.instance}function au(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,b=0;b<l.length;b++){var C=l[b];if(C.dataset.precedence===i)m=C;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Ed(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Td(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var su=null;function yv(e,i,r){if(su===null){var l=new Map,f=su=new Map;f.set(r,l)}else f=su,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var m=r[f];if(!(m[Za]||m[Mn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var C=l.get(b);C?C.push(m):l.set(b,[m])}}return l}function Sv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function g1(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Mv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _1(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=jr(l.href),m=i.querySelector(vl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=ru.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,bn(m);return}m=i.ownerDocument||i,l=vv(l),(f=Fi.get(f))&&Ed(l,f),m=m.createElement("link"),bn(m);var b=m;b._p=new Promise(function(C,k){b.onload=C,b.onerror=k}),Wn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=ru.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Ad=0;function v1(e,i){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Ad===0&&(Ad=62500*JM());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Ad?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function lu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,i.forEach(x1,e),ou=null,ru.call(e))}function x1(e,i){if(!(i.state.loading&4)){var r=ou.get(e);if(r)var l=r.get(null);else{r=new Map,ou.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),l=b)}l&&r.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),m=r.get(b)||l,m===l&&r.set(null,f),r.set(b,f),this.count++,l=ru.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var yl={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function y1(e,i,r,l,f,m,b,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.hiddenUpdates=jt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function bv(e,i,r,l,f,m,b,C,k,at,gt,yt){return e=new y1(e,i,r,b,k,at,gt,yt,C),i=1,m===!0&&(i|=24),m=xi(3,null,null,i),e.current=m,m.stateNode=e,i=sh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},ch(m),e}function Ev(e){return e?(e=Cr,e):Cr}function Tv(e,i,r,l,f,m){f=Ev(f),l.context===null?l.context=f:l.pendingContext=f,l=as(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=ss(e,l,i),r!==null&&(ui(r,e,i),Jo(r,e,i))}function Av(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Rd(e,i){Av(e,i),(e=e.alternate)&&Av(e,i)}function Rv(e){if(e.tag===13||e.tag===31){var i=Qs(e,67108864);i!==null&&ui(i,e,67108864),Rd(e,67108864)}}function wv(e){if(e.tag===13||e.tag===31){var i=Ei();i=Po(i);var r=Qs(e,i);r!==null&&ui(r,e,i),Rd(e,i)}}var cu=!0;function S1(e,i,r,l){var f=F.T;F.T=null;var m=H.p;try{H.p=2,wd(e,i,r,l)}finally{H.p=m,F.T=f}}function M1(e,i,r,l){var f=F.T;F.T=null;var m=H.p;try{H.p=8,wd(e,i,r,l)}finally{H.p=m,F.T=f}}function wd(e,i,r,l){if(cu){var f=Cd(l);if(f===null)pd(e,i,l,uu,r),Dv(e,l);else if(E1(f,e,i,r,l))l.stopPropagation();else if(Dv(e,l),i&4&&-1<b1.indexOf(e)){for(;f!==null;){var m=xa(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Ct(m.pendingLanes);if(b!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var k=1<<31-Gt(b);C.entanglements[1]|=k,b&=~k}oa(m),(Pe&6)===0&&(qc=Zt()+500,pl(0))}}break;case 31:case 13:C=Qs(m,2),C!==null&&ui(C,m,2),Zc(),Rd(m,2)}if(m=Cd(l),m===null&&pd(e,i,l,uu,r),m===f)break;f=m}f!==null&&l.stopPropagation()}else pd(e,i,l,null,r)}}function Cd(e){return e=Uf(e),Dd(e)}var uu=null;function Dd(e){if(uu=null,e=va(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return uu=e,null}function Cv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case L:return 2;case E:return 8;case j:case nt:return 32;case ht:return 268435456;default:return 32}default:return 32}}var Ud=!1,gs=null,_s=null,vs=null,Sl=new Map,Ml=new Map,xs=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dv(e,i){switch(e){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":Sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(i.pointerId)}}function bl(e,i,r,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=xa(i),i!==null&&Rv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function E1(e,i,r,l,f){switch(i){case"focusin":return gs=bl(gs,e,i,r,l,f),!0;case"dragenter":return _s=bl(_s,e,i,r,l,f),!0;case"mouseover":return vs=bl(vs,e,i,r,l,f),!0;case"pointerover":var m=f.pointerId;return Sl.set(m,bl(Sl.get(m)||null,e,i,r,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Ml.set(m,bl(Ml.get(m)||null,e,i,r,l,f)),!0}return!1}function Uv(e){var i=va(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,Mr(e.priority,function(){wv(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,Mr(e.priority,function(){wv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Cd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Df=l,r.target.dispatchEvent(l),Df=null}else return i=xa(r),i!==null&&Rv(i),e.blockedOn=r,!1;i.shift()}return!0}function Lv(e,i,r){fu(e)&&r.delete(i)}function T1(){Ud=!1,gs!==null&&fu(gs)&&(gs=null),_s!==null&&fu(_s)&&(_s=null),vs!==null&&fu(vs)&&(vs=null),Sl.forEach(Lv),Ml.forEach(Lv)}function hu(e,i){e.blockedOn===i&&(e.blockedOn=null,Ud||(Ud=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,T1)))}var du=null;function Nv(e){du!==e&&(du=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){du===e&&(du=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Dd(l||r)===null)continue;break}var m=xa(r);m!==null&&(e.splice(i,3),i-=3,Ch(m,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function $r(e){function i(k){return hu(k,e)}gs!==null&&hu(gs,e),_s!==null&&hu(_s,e),vs!==null&&hu(vs,e),Sl.forEach(i),Ml.forEach(i);for(var r=0;r<xs.length;r++){var l=xs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xs.length&&(r=xs[0],r.blockedOn===null);)Uv(r),r.blockedOn===null&&xs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],m=r[l+1],b=f[Gn]||null;if(typeof m=="function")b||Nv(r);else if(b){var C=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Gn]||null)C=b.formAction;else if(Dd(f)!==null)continue}else C=b.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Nv(r)}}}function Pv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ld(e){this._internalRoot=e}pu.prototype.render=Ld.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=Ei();Tv(r,l,e,i,null,null)},pu.prototype.unmount=Ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Tv(e.current,2,null,e,null,null),Zc(),i[ai]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var i=Bo();e={blockedOn:null,target:e,priority:i};for(var r=0;r<xs.length&&i!==0&&i<xs[r].priority;r++);xs.splice(r,0,e),r===0&&Uv(e)}};var Ov=t.version;if(Ov!=="19.2.3")throw Error(a(527,Ov,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var A1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{pt=mu.inject(A1),mt=mu}catch{}}return Tl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=Vg,m=kg,b=Xg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=bv(e,1,!1,null,null,r,l,null,f,m,b,Pv),e[ai]=i.current,dd(e),new Ld(i)},Tl.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",m=Vg,b=kg,C=Xg,k=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(k=r.formState)),i=bv(e,1,!0,i,r??null,l,f,k,m,b,C,Pv),i.context=Ev(null),r=i.current,l=Ei(),l=Po(l),f=as(l),f.callback=null,ss(r,f,l),r=l,i.current.lanes=r,Wt(i,r),oa(i),e[ai]=i.current,dd(e),new pu(i)},Tl.version="19.2.3",Tl}var Wv;function B1(){if(Wv)return Od.exports;Wv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Od.exports=O1(),Od.exports}var I1=B1();var Em=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,dy=/^[\\/]{2}/;function z1(s,t){return t+s.replace(/\\/g,"/")}var qv="popstate";function Yv(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function F1(s={}){function t(a,o){let c=o.state?.masked,{pathname:u,search:h,hash:p}=c||a.location;return Dp("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function n(a,o){return typeof o=="string"?o:Gl(o)}return G1(t,n,null,s)}function On(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function ga(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H1(){return Math.random().toString(36).substring(2,10)}function Zv(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function Dp(s,t,n=null,a,o){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Jl(t):t,state:n,key:t&&t.key||a||H1(),mask:o}}function Gl({pathname:s="/",search:t="",hash:n=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function Jl(s){let t={};if(s){let n=s.indexOf("#");n>=0&&(t.hash=s.substring(n),s=s.substring(0,n));let a=s.indexOf("?");a>=0&&(t.search=s.substring(a),s=s.substring(0,a)),s&&(t.pathname=s)}return t}function G1(s,t,n,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,u=o.history,h="POP",p=null,d=_();d==null&&(d=0,u.replaceState({...u.state,idx:d},""));function _(){return(u.state||{idx:null}).idx}function v(){h="POP";let y=_(),S=y==null?null:y-d;d=y,p&&p({action:h,location:T.location,delta:S})}function g(y,S){h="PUSH";let D=Yv(y)?y:Dp(T.location,y,S);d=_()+1;let U=Zv(D,d),R=T.createHref(D.mask||D);try{u.pushState(U,"",R)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(R)}c&&p&&p({action:h,location:T.location,delta:1})}function x(y,S){h="REPLACE";let D=Yv(y)?y:Dp(T.location,y,S);d=_();let U=Zv(D,d),R=T.createHref(D.mask||D);u.replaceState(U,"",R),c&&p&&p({action:h,location:T.location,delta:0})}function M(y){return V1(o,y)}let T={get action(){return h},get location(){return s(o,u)},listen(y){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(qv,v),p=y,()=>{o.removeEventListener(qv,v),p=null}},createHref(y){return t(o,y)},createURL:M,encodeLocation(y){let S=M(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:x,go(y){return u.go(y)}};return T}function V1(s,t,n=!1){let a="http://localhost";s&&(a=s.location.origin!=="null"?s.location.origin:s.location.href),On(a,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:Gl(t);return o=o.replace(/ $/,"%20"),!n&&dy.test(o)&&(o=a+o),new URL(o,a)}function py(s,t,n="/"){return k1(s,t,n,!1)}function k1(s,t,n,a,o){let c=typeof t=="string"?Jl(t):t,u=Xa(c.pathname||"/",n);if(u==null)return null;let h=X1(s),p=null,d=eb(u);for(let _=0;p==null&&_<h.length;++_)p=tb(h[_],d,a);return p}function X1(s){let t=my(s);return W1(t),t}function my(s,t=[],n=[],a="",o=!1){let c=(u,h,p=o,d)=>{let _={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(a)&&p)return;On(_.relativePath.startsWith(a),`Absolute route path "${_.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(a.length)}let v=ea([a,_.relativePath]),g=n.concat(_);u.children&&u.children.length>0&&(On(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),my(u.children,t,g,v,p)),!(u.path==null&&!u.index)&&t.push({path:v,score:J1(v,u.index),routesMeta:g.map((x,M)=>{let[T,y]=vy(x.relativePath,x.caseSensitive,M===g.length-1);return{...x,matcher:T,compiledParams:y}})})};return s.forEach((u,h)=>{if(u.path===""||!u.path?.includes("?"))c(u,h);else for(let p of gy(u.path))c(u,h,!0,p)}),t}function gy(s){let t=s.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let u=gy(a.join("/")),h=[];return h.push(...u.map(p=>p===""?c:[c,p].join("/"))),o&&h.push(...u),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function W1(s){s.sort((t,n)=>t.score!==n.score?n.score-t.score:$1(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var q1=/^:[\w-]+$/,Y1=3,Z1=2,K1=1,Q1=10,j1=-2,Kv=s=>s==="*";function J1(s,t){let n=s.split("/"),a=n.length;return n.some(Kv)&&(a+=j1),t&&(a+=Z1),n.filter(o=>!Kv(o)).reduce((o,c)=>o+(q1.test(c)?Y1:c===""?K1:Q1),a)}function $1(s,t){return s.length===t.length&&s.slice(0,-1).every((a,o)=>a===t[o])?s[s.length-1]-t[t.length-1]:0}function tb(s,t,n=!1){let{routesMeta:a}=s,o={},c="/",u=[];for(let h=0;h<a.length;++h){let p=a[h],d=h===a.length-1,_=c==="/"?t:t.slice(c.length)||"/",v={path:p.relativePath,caseSensitive:p.caseSensitive,end:d},g=p.matcher&&p.compiledParams?_y(v,_,p.matcher,p.compiledParams):rf(v,_),x=p.route;if(!g&&d&&n&&!a[a.length-1].route.index&&(g=rf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:ea([c,g.pathname]),pathnameBase:ab(ea([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=ea([c,g.pathnameBase]))}return u}function rf(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,a]=vy(s.path,s.caseSensitive,s.end);return _y(s,t,n,a)}function _y(s,t,n,a){let o=t.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((d,{paramName:_,isOptional:v},g)=>{if(_==="*"){let M=h[g]||"";u=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const x=h[g];return v&&!x?d[_]=void 0:d[_]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:c,pathnameBase:u,pattern:s}}function vy(s,t=!1,n=!0){ga(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,p,d,_)=>{if(a.push({paramName:h,isOptional:p!=null}),p){let v=_.charAt(d+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function eb(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ga(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Xa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=s.charAt(n);return a&&a!=="/"?null:s.slice(n)||"/"}function nb(s,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof s=="string"?Jl(s):s,c;return n?(n=yy(n),n.startsWith("/")?c=Qv(n.substring(1),"/"):c=Qv(n,t)):c=t,{pathname:c,search:sb(a),hash:rb(o)}}function Qv(s,t){let n=of(t).split("/");return s.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Fd(s,t,n,a){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ib(s){return s.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xy(s){let t=ib(s);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Tm(s,t,n,a=!1){let o;typeof s=="string"?o=Jl(s):(o={...s},On(!o.pathname||!o.pathname.includes("?"),Fd("?","pathname","search",o)),On(!o.pathname||!o.pathname.includes("#"),Fd("#","pathname","hash",o)),On(!o.search||!o.search.includes("#"),Fd("#","search","hash",o)));let c=s===""||o.pathname==="",u=c?"/":o.pathname,h;if(u==null)h=n;else{let v=t.length-1;if(!a&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),v-=1;o.pathname=g.join("/")}h=v>=0?t[v]:"/"}let p=nb(o,h),d=u&&u!=="/"&&u.endsWith("/"),_=(c||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(d||_)&&(p.pathname+="/"),p}var yy=s=>s.replace(/[\\/]{2,}/g,"/"),ea=s=>yy(s.join("/")),of=s=>s.replace(/\/+$/,""),ab=s=>of(s).replace(/^\/*/,"/"),sb=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,rb=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,ob=class{constructor(s,t,n,a=!1){this.status=s,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function lb(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function cb(s){let t=s.map(n=>n.route.path).filter(Boolean);return ea(t)||"/"}var Sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function My(s,t){let n=s;if(typeof n!="string"||!Em.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,o=!1;if(Sy)try{let c=new URL(window.location.href),u=dy.test(n)?new URL(z1(n,c.protocol)):new URL(n),h=Xa(u.pathname,t);u.origin===c.origin&&h!=null?n=h+u.search+u.hash:o=!0}catch{ga(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var by=["POST","PUT","PATCH","DELETE"];new Set(by);var ub=["GET",...by];new Set(ub);var fb=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function hb(s){try{return fb.includes(new URL(s).protocol)}catch{return!1}}var Uo=ot.createContext(null);Uo.displayName="DataRouter";var xf=ot.createContext(null);xf.displayName="DataRouterState";var Ey=ot.createContext(!1);function db(){return ot.useContext(Ey)}var Ty=ot.createContext({isTransitioning:!1});Ty.displayName="ViewTransition";var pb=ot.createContext(new Map);pb.displayName="Fetchers";var mb=ot.createContext(null);mb.displayName="Await";var ki=ot.createContext(null);ki.displayName="Navigation";var yf=ot.createContext(null);yf.displayName="Location";var qa=ot.createContext({outlet:null,matches:[],isDataRoute:!1});qa.displayName="Route";var Am=ot.createContext(null);Am.displayName="RouteError";var Ay="REACT_ROUTER_ERROR",gb="REDIRECT",_b="ROUTE_ERROR_RESPONSE";function vb(s){if(s.startsWith(`${Ay}:${gb}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function xb(s){if(s.startsWith(`${Ay}:${_b}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new ob(t.status,t.statusText,t.data)}catch{}}function yb(s,{relative:t}={}){On($l(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=ot.useContext(ki),{hash:o,pathname:c,search:u}=tc(s,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:ea([n,c])),a.createHref({pathname:h,search:u,hash:o})}function $l(){return ot.useContext(yf)!=null}function Ya(){return On($l(),"useLocation() may be used only in the context of a <Router> component."),ot.useContext(yf).location}var Ry="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wy(s){ot.useContext(ki).static||ot.useLayoutEffect(s)}function Sb(){let{isDataRoute:s}=ot.useContext(qa);return s?Pb():Mb()}function Mb(){On($l(),"useNavigate() may be used only in the context of a <Router> component.");let s=ot.useContext(Uo),{basename:t,navigator:n}=ot.useContext(ki),{matches:a}=ot.useContext(qa),{pathname:o}=Ya(),c=JSON.stringify(xy(a)),u=ot.useRef(!1);return wy(()=>{u.current=!0}),ot.useCallback((p,d={})=>{if(ga(u.current,Ry),!u.current)return;if(typeof p=="number"){n.go(p);return}let _=Tm(p,JSON.parse(c),o,d.relative==="path");s==null&&t!=="/"&&(_.pathname=_.pathname==="/"?t:ea([t,_.pathname])),(d.replace?n.replace:n.push)(_,d.state,d)},[t,n,c,o,s])}ot.createContext(null);function tc(s,{relative:t}={}){let{matches:n}=ot.useContext(qa),{pathname:a}=Ya(),o=JSON.stringify(xy(n));return ot.useMemo(()=>Tm(s,JSON.parse(o),a,t==="path"),[s,o,a,t])}function bb(s,t,n){On($l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=ot.useContext(ki),{matches:o}=ot.useContext(qa),c=o[o.length-1],u=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",d=c&&c.route;{let y=d&&d.path||"";Dy(h,!d||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let _=Ya(),v;v=_;let g=v.pathname||"/",x=g;if(p!=="/"){let y=p.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let M=n&&n.state.matches.length?n.state.matches.map(y=>Object.assign(y,{route:n.manifest[y.route.id]||y.route})):py(s,{pathname:x});return ga(d||M!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),ga(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),wb(M&&M.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:ea([p,a.encodeLocation?a.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:ea([p,a.encodeLocation?a.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),o,n)}function Eb(){let s=Nb(),t=lb(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=ot.createElement(ot.Fragment,null,ot.createElement("p",null,"💿 Hey developer 👋"),ot.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ot.createElement("code",{style:c},"ErrorBoundary")," or"," ",ot.createElement("code",{style:c},"errorElement")," prop on your route.")),ot.createElement(ot.Fragment,null,ot.createElement("h2",null,"Unexpected Application Error!"),ot.createElement("h3",{style:{fontStyle:"italic"}},t),n?ot.createElement("pre",{style:o},n):null,u)}var Tb=ot.createElement(Eb,null),Cy=class extends ot.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const n=xb(s.digest);n&&(s=n)}let t=s!==void 0?ot.createElement(qa.Provider,{value:this.props.routeContext},ot.createElement(Am.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ot.createElement(Ab,{error:s},t):t}};Cy.contextType=Ey;var Hd=new WeakMap;function Ab({children:s,error:t}){let{basename:n}=ot.useContext(ki);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=vb(t.digest);if(a){let o=Hd.get(t);if(o)throw o;let c=My(a.location,n),u=c.absoluteURL||c.to;if(hb(u))throw new Error("Invalid redirect location");if(Sy&&!Hd.get(t))if(c.isExternal||a.reloadDocument)window.location.href=u;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:a.replace}));throw Hd.set(t,h),h}return ot.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return s}function Rb({routeContext:s,match:t,children:n}){let a=ot.useContext(Uo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ot.createElement(qa.Provider,{value:s},n)}function wb(s,t=[],n){let a=n?.state;if(s==null){if(!a)return null;if(a.errors)s=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)s=a.matches;else return null}let o=s,c=a?.errors;if(c!=null){let _=o.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);On(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,_+1))}let u=!1,h=-1;if(n&&a){u=a.renderFallback;for(let _=0;_<o.length;_++){let v=o[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=_),v.route.id){let{loaderData:g,errors:x}=a,M=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!x||x[v.route.id]===void 0);if(v.route.lazy||M){n.isStatic&&(u=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let p=n?.onError,d=a&&p?(_,v)=>{p(_,{location:a.location,params:a.matches?.[0]?.params??{},pattern:cb(a.matches),errorInfo:v})}:void 0;return o.reduceRight((_,v,g)=>{let x,M=!1,T=null,y=null;a&&(x=c&&v.route.id?c[v.route.id]:void 0,T=v.route.errorElement||Tb,u&&(h<0&&g===0?(Dy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):h===g&&(M=!0,y=v.route.hydrateFallbackElement||null)));let S=t.concat(o.slice(0,g+1)),D=()=>{let U;return x?U=T:M?U=y:v.route.Component?U=ot.createElement(v.route.Component,null):v.route.element?U=v.route.element:U=_,ot.createElement(Rb,{match:v,routeContext:{outlet:_,matches:S,isDataRoute:a!=null},children:U})};return a&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?ot.createElement(Cy,{location:a.location,revalidation:a.revalidation,component:T,error:x,children:D(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:d}):D()},null)}function Rm(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cb(s){let t=ot.useContext(Uo);return On(t,Rm(s)),t}function Db(s){let t=ot.useContext(xf);return On(t,Rm(s)),t}function Ub(s){let t=ot.useContext(qa);return On(t,Rm(s)),t}function wm(s){let t=Ub(s),n=t.matches[t.matches.length-1];return On(n.route.id,`${s} can only be used on routes that contain a unique "id"`),n.route.id}function Lb(){return wm("useRouteId")}function Nb(){let s=ot.useContext(Am),t=Db("useRouteError"),n=wm("useRouteError");return s!==void 0?s:t.errors?.[n]}function Pb(){let{router:s}=Cb("useNavigate"),t=wm("useNavigate"),n=ot.useRef(!1);return wy(()=>{n.current=!0}),ot.useCallback(async(o,c={})=>{ga(n.current,Ry),n.current&&(typeof o=="number"?await s.navigate(o):await s.navigate(o,{fromRouteId:t,...c}))},[s,t])}var jv={};function Dy(s,t,n){!t&&!jv[s]&&(jv[s]=!0,ga(!1,n))}ot.memo(Ob);function Ob({routes:s,manifest:t,future:n,state:a,isStatic:o,onError:c}){return bb(s,void 0,{manifest:t,state:a,isStatic:o,onError:c})}function Bb({basename:s="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:c=!1,useTransitions:u}){On(!$l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),p=ot.useMemo(()=>({basename:h,navigator:o,static:c,useTransitions:u,future:{}}),[h,o,c,u]);typeof n=="string"&&(n=Jl(n));let{pathname:d="/",search:_="",hash:v="",state:g=null,key:x="default",mask:M}=n,T=ot.useMemo(()=>{let y=Xa(d,h);return y==null?null:{location:{pathname:y,search:_,hash:v,state:g,key:x,mask:M},navigationType:a}},[h,d,_,v,g,x,a,M]);return ga(T!=null,`<Router basename="${h}"> is not able to match the URL "${d}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:ot.createElement(ki.Provider,{value:p},ot.createElement(yf.Provider,{children:t,value:T}))}var Ku="get",Qu="application/x-www-form-urlencoded";function Sf(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function Ib(s){return Sf(s)&&s.tagName.toLowerCase()==="button"}function zb(s){return Sf(s)&&s.tagName.toLowerCase()==="form"}function Fb(s){return Sf(s)&&s.tagName.toLowerCase()==="input"}function Hb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Gb(s,t){return s.button===0&&(!t||t==="_self")&&!Hb(s)}var gu=null;function Vb(){if(gu===null)try{new FormData(document.createElement("form"),0),gu=!1}catch{gu=!0}return gu}var kb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gd(s){return s!=null&&!kb.has(s)?(ga(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qu}"`),null):s}function Xb(s,t){let n,a,o,c,u;if(zb(s)){let h=s.getAttribute("action");a=h?Xa(h,t):null,n=s.getAttribute("method")||Ku,o=Gd(s.getAttribute("enctype"))||Qu,c=new FormData(s)}else if(Ib(s)||Fb(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(a=p?Xa(p,t):null,n=s.getAttribute("formmethod")||h.getAttribute("method")||Ku,o=Gd(s.getAttribute("formenctype"))||Gd(h.getAttribute("enctype"))||Qu,c=new FormData(h,s),!Vb()){let{name:d,type:_,value:v}=s;if(_==="image"){let g=d?`${d}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else d&&c.append(d,v)}}else{if(Sf(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ku,a=null,o=Qu,u=s}return c&&o==="text/plain"&&(u=c,c=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cm(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Uy(s,t,n,a){let o=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:t&&Xa(o.pathname,t)==="/"?o.pathname=`${of(t)}/_root.${a}`:o.pathname=`${of(o.pathname)}.${a}`,o}async function Wb(s,t){if(s.id in t)return t[s.id];try{let n=await import(s.module);return t[s.id]=n,n}catch(n){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Yb(s,t,n){let a=await Promise.all(s.map(async o=>{let c=t.routes[o.route.id];if(c){let u=await Wb(c,n);return u.links?u.links():[]}return[]}));return jb(a.flat(1).filter(qb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Jv(s,t,n,a,o,c){let u=(p,d)=>n[d]?p.route.id!==n[d].route.id:!0,h=(p,d)=>n[d].pathname!==p.pathname||n[d].route.path?.endsWith("*")&&n[d].params["*"]!==p.params["*"];return c==="assets"?t.filter((p,d)=>u(p,d)||h(p,d)):c==="data"?t.filter((p,d)=>{let _=a.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(u(p,d)||h(p,d))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Zb(s,t,{includeHydrateFallback:n}={}){return Kb(s.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function Kb(s){return[...new Set(s)]}function Qb(s){let t={},n=Object.keys(s).sort();for(let a of n)t[a]=s[a];return t}function jb(s,t){let n=new Set;return new Set(t),s.reduce((a,o)=>{let c=JSON.stringify(Qb(o));return n.has(c)||(n.add(c),a.push({key:c,link:o})),a},[])}function Dm(){let s=ot.useContext(Uo);return Cm(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Jb(){let s=ot.useContext(xf);return Cm(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Um=ot.createContext(void 0);Um.displayName="FrameworkContext";function Mf(){let s=ot.useContext(Um);return Cm(s,"You must render this element inside a <HydratedRouter> element"),s}function $b(s,t){let n=ot.useContext(Um),[a,o]=ot.useState(!1),[c,u]=ot.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:d,onMouseLeave:_,onTouchStart:v}=t,g=ot.useRef(null);ot.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let T=S=>{S.forEach(D=>{u(D.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[s]),ot.useEffect(()=>{if(a){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[a]);let x=()=>{o(!0)},M=()=>{o(!1),u(!1)};return n?s!=="intent"?[c,g,{}]:[c,g,{onFocus:Al(h,x),onBlur:Al(p,M),onMouseEnter:Al(d,x),onMouseLeave:Al(_,M),onTouchStart:Al(v,x)}]:[!1,g,{}]}function Al(s,t){return n=>{s&&s(n),n.defaultPrevented||t(n)}}function tE({page:s,...t}){let n=db(),{nonce:a}=Mf(),{router:o}=Dm(),c=ot.useMemo(()=>py(o.routes,s,o.basename),[o.routes,s,o.basename]);return c?(t.nonce==null&&a&&(t={...t,nonce:a}),n?ot.createElement(nE,{page:s,matches:c,...t}):ot.createElement(iE,{page:s,matches:c,...t})):null}function eE(s){let{manifest:t,routeModules:n}=Mf(),[a,o]=ot.useState([]);return ot.useEffect(()=>{let c=!1;return Yb(s,t,n).then(u=>{c||o(u)}),()=>{c=!0}},[s,t,n]),a}function nE({page:s,matches:t,...n}){let a=Ya(),{future:o}=Mf(),{basename:c}=Dm(),u=ot.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let h=Uy(s,c,o.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,d=[];for(let _ of t)typeof _.route.shouldRevalidate=="function"?p=!0:d.push(_.route.id);return p&&d.length>0&&h.searchParams.set("_routes",d.join(",")),[h.pathname+h.search]},[c,o.v8_trailingSlashAwareDataRequests,s,a,t]);return ot.createElement(ot.Fragment,null,u.map(h=>ot.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...n})))}function iE({page:s,matches:t,...n}){let a=Ya(),{future:o,manifest:c,routeModules:u}=Mf(),{basename:h}=Dm(),{loaderData:p,matches:d}=Jb(),_=ot.useMemo(()=>Jv(s,t,d,c,a,"data"),[s,t,d,c,a]),v=ot.useMemo(()=>Jv(s,t,d,c,a,"assets"),[s,t,d,c,a]),g=ot.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let T=new Set,y=!1;if(t.forEach(D=>{let U=c.routes[D.route.id];!U||!U.hasLoader||(!_.some(R=>R.route.id===D.route.id)&&D.route.id in p&&u[D.route.id]?.shouldRevalidate||U.hasClientLoader?y=!0:T.add(D.route.id))}),T.size===0)return[];let S=Uy(s,h,o.v8_trailingSlashAwareDataRequests,"data");return y&&T.size>0&&S.searchParams.set("_routes",t.filter(D=>T.has(D.route.id)).map(D=>D.route.id).join(",")),[S.pathname+S.search]},[h,o.v8_trailingSlashAwareDataRequests,p,a,c,_,t,s,u]),x=ot.useMemo(()=>Zb(v,c),[v,c]),M=eE(v);return ot.createElement(ot.Fragment,null,g.map(T=>ot.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),x.map(T=>ot.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),M.map(({key:T,link:y})=>ot.createElement("link",{key:T,nonce:n.nonce,...y,crossOrigin:y.crossOrigin??n.crossOrigin})))}function aE(...s){return t=>{s.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var sE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sE&&(window.__reactRouterVersion="7.18.2")}catch{}function rE({basename:s,children:t,useTransitions:n,window:a}){let o=ot.useRef();o.current==null&&(o.current=F1({window:a,v5Compat:!0}));let c=o.current,[u,h]=ot.useState({action:c.action,location:c.location}),p=ot.useCallback(d=>{n===!1?h(d):ot.startTransition(()=>h(d))},[n]);return ot.useLayoutEffect(()=>c.listen(p),[c,p]),ot.createElement(Bb,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:c,useTransitions:n})}var Ly=ot.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:c,replace:u,mask:h,state:p,target:d,to:_,preventScrollReset:v,viewTransition:g,defaultShouldRevalidate:x,...M},T){let{basename:y,navigator:S,useTransitions:D}=ot.useContext(ki),U=typeof _=="string"&&Em.test(_),R=My(_,y);_=R.to;let B=yb(_,{relative:o}),N=Ya(),O=null;if(h){let q=Tm(h,[],N.mask?N.mask.pathname:"/",!0);y!=="/"&&(q.pathname=q.pathname==="/"?y:ea([y,q.pathname])),O=S.createHref(q)}let[A,P,V]=$b(a,M),G=uE(_,{replace:u,mask:h,state:p,target:d,preventScrollReset:v,relative:o,viewTransition:g,defaultShouldRevalidate:x,useTransitions:D});function X(q){t&&t(q),q.defaultPrevented||G(q)}let tt=!(R.isExternal||c),ut=ot.createElement("a",{...M,...V,href:(tt?O:void 0)||R.absoluteURL||B,onClick:tt?X:t,ref:aE(T,P),target:d,"data-discover":!U&&n==="render"?"true":void 0});return A&&!U?ot.createElement(ot.Fragment,null,ut,ot.createElement(tE,{page:B})):ut});Ly.displayName="Link";var oE=ot.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:c,to:u,viewTransition:h,children:p,...d},_){let v=tc(u,{relative:d.relative}),g=Ya(),x=ot.useContext(xf),{navigator:M,basename:T}=ot.useContext(ki),y=x!=null&&mE(v)&&h===!0,S=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,D=g.pathname,U=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(D=D.toLowerCase(),U=U?U.toLowerCase():null,S=S.toLowerCase()),U&&T&&(U=Xa(U,T)||U);const R=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let B=D===S||!o&&D.startsWith(S)&&D.charAt(R)==="/",N=U!=null&&(U===S||!o&&U.startsWith(S)&&U.charAt(S.length)==="/"),O={isActive:B,isPending:N,isTransitioning:y},A=B?t:void 0,P;typeof a=="function"?P=a(O):P=[a,B?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let V=typeof c=="function"?c(O):c;return ot.createElement(Ly,{...d,"aria-current":A,className:P,ref:_,style:V,to:u,viewTransition:h},typeof p=="function"?p(O):p)});oE.displayName="NavLink";var lE=ot.forwardRef(({discover:s="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:c,method:u=Ku,action:h,onSubmit:p,relative:d,preventScrollReset:_,viewTransition:v,defaultShouldRevalidate:g,...x},M)=>{let{useTransitions:T}=ot.useContext(ki),y=dE(),S=pE(h,{relative:d}),D=u.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&Em.test(h),R=B=>{if(p&&p(B),B.defaultPrevented)return;B.preventDefault();let N=B.nativeEvent.submitter,O=N?.getAttribute("formmethod")||u,A=()=>y(N||B.currentTarget,{fetcherKey:t,method:O,navigate:n,replace:o,state:c,relative:d,preventScrollReset:_,viewTransition:v,defaultShouldRevalidate:g});T&&n!==!1?ot.startTransition(()=>A()):A()};return ot.createElement("form",{ref:M,method:D,action:S,onSubmit:a?p:R,...x,"data-discover":!U&&s==="render"?"true":void 0})});lE.displayName="Form";function cE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ny(s){let t=ot.useContext(Uo);return On(t,cE(s)),t}function uE(s,{target:t,replace:n,mask:a,state:o,preventScrollReset:c,relative:u,viewTransition:h,defaultShouldRevalidate:p,useTransitions:d}={}){let _=Sb(),v=Ya(),g=tc(s,{relative:u});return ot.useCallback(x=>{if(Gb(x,t)){x.preventDefault();let M=n!==void 0?n:Gl(v)===Gl(g),T=()=>_(s,{replace:M,mask:a,state:o,preventScrollReset:c,relative:u,viewTransition:h,defaultShouldRevalidate:p});d?ot.startTransition(()=>T()):T()}},[v,_,g,n,a,o,t,s,c,u,h,p,d])}var fE=0,hE=()=>`__${String(++fE)}__`;function dE(){let{router:s}=Ny("useSubmit"),{basename:t}=ot.useContext(ki),n=Lb(),a=s.fetch,o=s.navigate;return ot.useCallback(async(c,u={})=>{let{action:h,method:p,encType:d,formData:_,body:v}=Xb(c,t);if(u.navigate===!1){let g=u.fetcherKey||hE();await a(g,n,u.action||h,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:_,body:v,formMethod:u.method||p,formEncType:u.encType||d,flushSync:u.flushSync})}else await o(u.action||h,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:_,body:v,formMethod:u.method||p,formEncType:u.encType||d,replace:u.replace,state:u.state,fromRouteId:n,flushSync:u.flushSync,viewTransition:u.viewTransition})},[a,o,t,n])}function pE(s,{relative:t}={}){let{basename:n}=ot.useContext(ki),a=ot.useContext(qa);On(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...tc(s||".",{relative:t})},u=Ya();if(s==null){c.search=u.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let _=h.toString();c.search=_?`?${_}`:""}}return(!s||s===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:ea([n,c.pathname])),Gl(c)}function mE(s,{relative:t}={}){let n=ot.useContext(Ty);On(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Ny("useViewTransitionState"),o=tc(s,{relative:t});if(!n.isTransitioning)return!1;let c=Xa(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=Xa(n.nextLocation.pathname,a)||n.nextLocation.pathname;return rf(o.pathname,u)!=null||rf(o.pathname,c)!=null}const To=9,ec=10,Py={r:{K:"帅",A:"仕",B:"相",N:"马",R:"车",C:"炮",P:"兵"},b:{K:"将",A:"士",B:"象",N:"马",R:"车",C:"砲",P:"卒"}};function nc(s){return s==="r"?"b":"r"}let Oy=1;function Ss(s,t){return{id:Oy++,type:s,color:t}}function _u(){Oy=1;const s=Array.from({length:ec},()=>Array(To).fill(null)),t=["R","N","B","A","K","A","B","N","R"];for(let n=0;n<To;n++)s[0][n]=Ss(t[n],"b"),s[9][n]=Ss(t[n],"r");s[2][1]=Ss("C","b"),s[2][7]=Ss("C","b"),s[7][1]=Ss("C","r"),s[7][7]=Ss("C","r");for(const n of[0,2,4,6,8])s[3][n]=Ss("P","b"),s[6][n]=Ss("P","r");return s}function to(s,t){return s>=0&&s<To&&t>=0&&t<ec}function $v(s,t,n){return t<3||t>5?!1:s==="r"?n>=7&&n<=9:n>=0&&n<=2}function gE(s,t){return s==="r"?t<=4:t>=5}function By(s,t,n){const a=s[n][t];if(!a)return[];const o=[],c=nc(a.color),u=(h,p)=>{if(!to(h,p))return!1;const d=s[p][h];return(!d||d.color===c)&&o.push({x:h,y:p}),!d};switch(a.type){case"R":{for(const[h,p]of[[1,0],[-1,0],[0,1],[0,-1]]){let d=t+h,_=n+p;for(;to(d,_)&&u(d,_);)d+=h,_+=p}break}case"C":{for(const[h,p]of[[1,0],[-1,0],[0,1],[0,-1]]){let d=t+h,_=n+p,v=!1;for(;to(d,_);){const g=s[_][d];if(!v)g?v=!0:o.push({x:d,y:_});else if(g){g.color===c&&o.push({x:d,y:_});break}d+=h,_+=p}}break}case"N":{const h=[[1,0,2,1],[1,0,2,-1],[-1,0,-2,1],[-1,0,-2,-1],[0,1,1,2],[0,1,-1,2],[0,-1,1,-2],[0,-1,-1,-2]];for(const[p,d,_,v]of h){if(s[n+d]?.[t+p])continue;const g=t+_,x=n+v;if(!to(g,x))continue;const M=s[x][g];(!M||M.color===c)&&o.push({x:g,y:x})}break}case"B":{for(const[h,p]of[[2,2],[2,-2],[-2,2],[-2,-2]]){const d=t+h,_=n+p;if(!to(d,_)||a.color==="r"&&_<5||a.color==="b"&&_>4||s[n+p/2][t+h/2])continue;const v=s[_][d];(!v||v.color===c)&&o.push({x:d,y:_})}break}case"A":{for(const[h,p]of[[1,1],[1,-1],[-1,1],[-1,-1]]){const d=t+h,_=n+p;if(!$v(a.color,d,_))continue;const v=s[_][d];(!v||v.color===c)&&o.push({x:d,y:_})}break}case"K":{for(const[h,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const d=t+h,_=n+p;if(!$v(a.color,d,_))continue;const v=s[_][d];(!v||v.color===c)&&o.push({x:d,y:_})}break}case"P":{const p=[[0,a.color==="r"?-1:1]];gE(a.color,n)&&p.push([1,0],[-1,0]);for(const[d,_]of p){const v=t+d,g=n+_;if(!to(v,g))continue;const x=s[g][v];(!x||x.color===c)&&o.push({x:v,y:g})}break}}return o}function Vl(s,t){for(let n=0;n<ec;n++)for(let a=0;a<To;a++){const o=s[n][a];if(o&&o.type==="K"&&o.color===t)return{x:a,y:n}}return null}function _E(s){const t=Vl(s,"r"),n=Vl(s,"b");if(!t||!n||t.x!==n.x)return!1;const a=Math.min(t.y,n.y),o=Math.max(t.y,n.y);for(let c=a+1;c<o;c++)if(s[c][t.x])return!1;return!0}function Lm(s,t){if(_E(s))return!0;const n=Vl(s,t);if(!n)return!0;const a=nc(t);for(let o=0;o<ec;o++)for(let c=0;c<To;c++){const u=s[o][c];if(u&&u.color===a&&By(s,c,o).some(h=>h.x===n.x&&h.y===n.y))return!0}return!1}function kl(s,t){const n=s.map(a=>a.slice());return n[t.from.y][t.from.x]=null,n[t.to.y][t.to.x]=t.piece,n}function ju(s,t,n){const a=s[n][t];return a?By(s,t,n).map(o=>{const c=s[o.y][o.x];return{piece:a,from:{x:t,y:n},to:o,captured:c}}).filter(o=>!Lm(kl(s,o),a.color)):[]}function Nm(s,t){const n=[];for(let a=0;a<ec;a++)for(let o=0;o<To;o++){const c=s[a][o];c&&c.color===t&&n.push(...ju(s,o,a))}return n}function vE(s,t){return Nm(s,t).length===0?Lm(s,t)?"checkmate":"stalemate":"playing"}const Ns={K:1e4,R:600,C:300,N:270,B:120,A:120,P:60},xE=[[14,14,12,18,16,18,12,14,14],[16,20,18,24,26,24,18,20,16],[12,12,12,18,18,18,12,12,12],[12,18,16,22,22,22,16,18,12],[12,14,12,18,18,18,12,14,12],[12,16,14,20,20,20,14,16,12],[6,10,8,14,14,14,8,10,6],[4,8,6,14,12,14,6,8,4],[8,4,8,16,8,16,8,4,8],[-2,10,6,14,12,14,6,10,-2]],yE=[[4,8,16,12,4,12,16,8,4],[4,10,28,16,8,16,28,10,4],[12,14,16,20,18,20,16,14,12],[8,24,18,24,20,24,18,24,8],[6,16,14,18,16,18,14,16,6],[4,12,16,14,12,14,16,12,4],[2,6,8,6,10,6,8,6,2],[4,2,8,8,4,8,8,2,4],[0,2,4,4,-2,4,4,2,0],[0,-4,0,0,0,0,0,-4,0]],tx=[[0,0,0,0,0,0,0,0,0],[10,10,10,10,10,10,10,10,10],[20,20,20,20,20,20,20,20,20],[30,40,40,50,50,50,40,40,30],[40,60,60,80,80,80,60,60,40],[50,70,70,90,90,90,70,70,50],[60,80,80,90,90,90,80,80,60],[70,80,80,90,90,90,80,80,70],[70,80,80,90,90,90,80,80,70],[70,80,80,90,90,90,80,80,70]],SE=[[6,4,0,-10,-12,-10,0,4,6],[2,2,0,-4,-14,-4,0,2,2],[2,2,0,-10,-8,-10,0,2,2],[0,0,-2,4,10,4,-2,0,0],[0,0,0,2,8,2,0,0,0],[-2,0,4,2,6,2,4,0,-2],[0,0,0,2,4,2,0,0,0],[4,0,8,6,10,6,8,0,4],[0,2,4,6,6,6,4,2,0],[0,0,2,6,6,6,2,0,0]];function ME(s,t,n,a){const o=a==="r"?n:9-n;switch(s){case"R":return xE[9-o][t];case"N":return yE[9-o][t];case"P":return a==="r"?tx[9-n][t]:tx[n][t];case"C":return SE[9-o][t];default:return 0}}function bE(s){let t=0;for(let n=0;n<10;n++)for(let a=0;a<9;a++){const o=s[n][a];if(!o)continue;const c=Ns[o.type]+ME(o.type,a,n,o.color);t+=o.color==="r"?c:-c}return t}const Iy=99999;function zy(s){return s.sort((t,n)=>{const a=t.captured?Ns[t.captured.type]*10-Ns[t.piece.type]:0;return(n.captured?Ns[n.captured.type]*10-Ns[n.piece.type]:0)-a})}function Fy(s,t,n,a,o,c){const u=Nm(s,t);if(u.length===0)return-Iy+c;if(n===0){const p=bE(s);return t==="r"?p:-p}zy(u);let h=-1/0;for(const p of u){const d=kl(s,p),_=-Fy(d,nc(t),n-1,-o,-a,c+1);if(_>h&&(h=_),_>a&&(a=_),a>=o)break}return h}function EE(s,t,n){const a=n<=2?1200:n===3?3500:7e3,o=Date.now();let c=null;for(let u=Math.min(2,n);u<=n;u++){const h=Nm(s,t);if(h.length===0)return null;if(zy(h),c){const g=h.findIndex(x=>x.from.x===c.from.x&&x.from.y===c.from.y&&x.to.x===c.to.x&&x.to.y===c.to.y);if(g>0){const[x]=h.splice(g,1);h.unshift(x)}}let p=null,d=-1/0,_=-1/0,v=!1;for(const g of h){const x=kl(s,g);let M=-Fy(x,nc(t),u-1,-1/0,-_,1);if(u===n&&(M+=Math.random()*4),M>d&&(d=M,p=g),M>_&&(_=M),Date.now()-o>a){v=!0;break}}if(p&&(c=p),v||d>Iy-100)break}return c}const Vd="一二三四五六七八九";function TE(s,t){const n=Py[t.piece.color][t.piece.type],a=t.piece.color==="r",o=[];for(let g=0;g<10;g++){const x=s[g][t.from.x];x&&x.type===t.piece.type&&x.color===t.piece.color&&g!==t.from.y&&o.push(g)}let c;if(o.length>0&&["R","N","C","P"].includes(t.piece.type))c=((a?o.every(x=>t.from.y<x):o.every(x=>t.from.y>x))?"前":"后")+n;else{const g=a?9-t.from.x:t.from.x+1;c=n+(a?Vd[g-1]:String(g))}const u=a?9-t.to.x:t.to.x+1,h=a?Vd[u-1]:String(u);if(t.from.y===t.to.y)return`${c}平${h}`;const d=(a?t.to.y<t.from.y:t.to.y>t.from.y)?"进":"退";if(["N","B","A"].includes(t.piece.type))return`${c}${d}${h}`;const _=Math.abs(t.to.y-t.from.y),v=a?Vd[_-1]:String(_);return`${c}${d}${v}`}const Pm="185",Mo={ROTATE:0,DOLLY:1,PAN:2},So={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AE=0,ex=1,RE=2,Ju=1,Hy=2,Bl=3,Os=0,jn=1,Ji=2,da=0,_r=1,lf=2,nx=3,ix=4,wE=5,dr=100,CE=101,DE=102,UE=103,LE=104,NE=200,PE=201,OE=202,BE=203,Up=204,Lp=205,IE=206,zE=207,FE=208,HE=209,GE=210,VE=211,kE=212,XE=213,WE=214,Np=0,Pp=1,Op=2,Ao=3,Bp=4,Ip=5,zp=6,Fp=7,Gy=0,qE=1,YE=2,pa=0,Vy=1,ky=2,Xy=3,Om=4,Wy=5,qy=6,Yy=7,Zy=300,vr=301,Ro=302,kd=303,Xd=304,bf=306,Xl=1e3,ta=1001,Hp=1002,Sn=1003,ZE=1004,vu=1005,Qn=1006,Wd=1007,mr=1008,wi=1009,Ky=1010,Qy=1011,Wl=1012,Bm=1013,_a=1014,Vi=1015,Ui=1016,Im=1017,zm=1018,ql=1020,jy=35902,Jy=35899,$y=1021,tS=1022,Di=1023,Wa=1026,gr=1027,eS=1028,Fm=1029,xr=1030,Hm=1031,Gm=1033,$u=33776,tf=33777,ef=33778,nf=33779,Gp=35840,Vp=35841,kp=35842,Xp=35843,Wp=36196,qp=37492,Yp=37496,Zp=37488,Kp=37489,cf=37490,Qp=37491,jp=37808,Jp=37809,$p=37810,tm=37811,em=37812,nm=37813,im=37814,am=37815,sm=37816,rm=37817,om=37818,lm=37819,cm=37820,um=37821,fm=36492,hm=36494,dm=36495,pm=36283,mm=36284,uf=36285,gm=36286,KE=3200,_m=0,QE=1,Ls="",di="srgb",ff="srgb-linear",hf="linear",Ve="srgb",eo=7680,ax=519,jE=512,JE=513,$E=514,Vm=515,tT=516,eT=517,km=518,nT=519,vm=35044,sx="300 es",ha=2e3,Yl=2001;function iT(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function df(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function aT(){const s=df("canvas");return s.style.display="block",s}const rx={};function pf(...s){const t="THREE."+s.shift();console.log(t,...s)}function nS(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function oe(...s){s=nS(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...s)}}function Ce(...s){s=nS(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...s)}}function bo(...s){const t=s.join(" ");t in rx||(rx[t]=!0,oe(...s))}function sT(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const rT={[Np]:Pp,[Op]:zp,[Bp]:Fp,[Ao]:Ip,[Pp]:Np,[zp]:Op,[Fp]:Bp,[Ip]:Ao};class Gs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ox=1234567;const zl=Math.PI/180,Zl=180/Math.PI;function Va(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]).toLowerCase()}function ye(s,t,n){return Math.max(t,Math.min(n,s))}function Xm(s,t){return(s%t+t)%t}function oT(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function lT(s,t,n){return s!==t?(n-s)/(t-s):0}function Fl(s,t,n){return(1-n)*s+n*t}function cT(s,t,n,a){return Fl(s,t,1-Math.exp(-n*a))}function uT(s,t=1){return t-Math.abs(Xm(s,t*2)-t)}function fT(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function hT(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function dT(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pT(s,t){return s+Math.random()*(t-s)}function mT(s){return s*(.5-Math.random())}function gT(s){s!==void 0&&(ox=s);let t=ox+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _T(s){return s*zl}function vT(s){return s*Zl}function xT(s){return(s&s-1)===0&&s!==0}function yT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ST(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function MT(s,t,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((t+a)/2),_=u((t+a)/2),v=c((t-a)/2),g=u((t-a)/2),x=c((a-t)/2),M=u((a-t)/2);switch(o){case"XYX":s.set(h*_,p*v,p*g,h*d);break;case"YZY":s.set(p*g,h*_,p*v,h*d);break;case"ZXZ":s.set(p*v,p*g,h*_,h*d);break;case"XZX":s.set(h*_,p*M,p*x,h*d);break;case"YXY":s.set(p*x,h*_,p*M,h*d);break;case"ZYZ":s.set(p*M,p*x,h*_,h*d);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function $i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Hl={DEG2RAD:zl,RAD2DEG:Zl,generateUUID:Va,clamp:ye,euclideanModulo:Xm,mapLinear:oT,inverseLerp:lT,lerp:Fl,damp:cT,pingpong:uT,smoothstep:fT,smootherstep:hT,randInt:dT,randFloat:pT,randFloatSpread:mT,seededRandom:gT,degToRad:_T,radToDeg:vT,isPowerOfTwo:xT,ceilPowerOfTwo:yT,floorPowerOfTwo:ST,setQuaternionFromProperEuler:MT,normalize:ke,denormalize:$i},$m=class $m{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$m.prototype.isVector2=!0;let Yt=$m;class Bs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let p=a[o+0],d=a[o+1],_=a[o+2],v=a[o+3],g=c[u+0],x=c[u+1],M=c[u+2],T=c[u+3];if(v!==T||p!==g||d!==x||_!==M){let y=p*g+d*x+_*M+v*T;y<0&&(g=-g,x=-x,M=-M,T=-T,y=-y);let S=1-h;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);S=Math.sin(S*D)/U,h=Math.sin(h*D)/U,p=p*S+g*h,d=d*S+x*h,_=_*S+M*h,v=v*S+T*h}else{p=p*S+g*h,d=d*S+x*h,_=_*S+M*h,v=v*S+T*h;const D=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=D,d*=D,_*=D,v*=D}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],p=a[o+1],d=a[o+2],_=a[o+3],v=c[u],g=c[u+1],x=c[u+2],M=c[u+3];return t[n]=h*M+_*v+p*x-d*g,t[n+1]=p*M+_*g+d*v-h*x,t[n+2]=d*M+_*x+h*g-p*v,t[n+3]=_*M-h*v-p*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,d=h(a/2),_=h(o/2),v=h(c/2),g=p(a/2),x=p(o/2),M=p(c/2);switch(u){case"XYZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"YXZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"ZXY":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"ZYX":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"YZX":this._x=g*_*v+d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v-g*x*M;break;case"XZY":this._x=g*_*v-d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v+g*x*M;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],_=n[6],v=n[10],g=a+h+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-p)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(_-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+u*h+o*d-c*p,this._y=o*_+u*p+c*h-a*d,this._z=c*_+u*d+a*p-o*h,this._w=u*_-a*h-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const t0=class t0{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(lx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(lx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,p=t.w,d=2*(u*o-h*a),_=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+p*d+u*v-h*_,this.y=a+p*_+h*d-c*v,this.z=o+p*v+c*_-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return qd.copy(this).projectOnVector(t),this.sub(qd)}reflect(t){return this.sub(qd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};t0.prototype.isVector3=!0;let Z=t0;const qd=new Z,lx=new Bs,e0=class e0{constructor(t,n,a,o,c,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,d)}set(t,n,a,o,c,u,h,p,d){const _=this.elements;return _[0]=t,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=p,_[6]=a,_[7]=u,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],_=a[4],v=a[7],g=a[2],x=a[5],M=a[8],T=o[0],y=o[3],S=o[6],D=o[1],U=o[4],R=o[7],B=o[2],N=o[5],O=o[8];return c[0]=u*T+h*D+p*B,c[3]=u*y+h*U+p*N,c[6]=u*S+h*R+p*O,c[1]=d*T+_*D+v*B,c[4]=d*y+_*U+v*N,c[7]=d*S+_*R+v*O,c[2]=g*T+x*D+M*B,c[5]=g*y+x*U+M*N,c[8]=g*S+x*R+M*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],_=t[8];return n*u*_-n*h*d-a*c*_+a*h*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],_=t[8],v=_*u-h*d,g=h*p-_*c,x=d*c-u*p,M=n*v+a*g+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(o*d-_*a)*T,t[2]=(h*a-o*u)*T,t[3]=g*T,t[4]=(_*n-o*p)*T,t[5]=(o*c-h*n)*T,t[6]=x*T,t[7]=(a*p-d*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+t,-o*d,o*p,-o*(-d*u+p*h)+h+n,0,0,1),this}scale(t,n){return bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yd.makeScale(t,n)),this}rotate(t){return bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yd.makeRotation(-t)),this}translate(t,n){return bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};e0.prototype.isMatrix3=!0;let he=e0;const Yd=new he,cx=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ux=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bT(){const s={enabled:!0,workingColorSpace:ff,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ve&&(o.r=ka(o.r),o.g=ka(o.g),o.b=ka(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ve&&(o.r=Eo(o.r),o.g=Eo(o.g),o.b=Eo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ls?hf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[ff]:{primaries:t,whitePoint:a,transfer:hf,toXYZ:cx,fromXYZ:ux,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:a,transfer:Ve,toXYZ:cx,fromXYZ:ux,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const De=bT();function ka(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let no;class ET{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{no===void 0&&(no=df("canvas")),no.width=t.width,no.height=t.height;const o=no.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=no}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=df("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ka(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ka(n[a]/255)*255):n[a]=ka(n[a]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let TT=0;class Wm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Zd(o[u].image)):c.push(Zd(o[u]))}else c=Zd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Zd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ET.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let AT=0;const Kd=new Z;class Jn extends Gs{constructor(t=Jn.DEFAULT_IMAGE,n=Jn.DEFAULT_MAPPING,a=ta,o=ta,c=Qn,u=mr,h=Di,p=wi,d=Jn.DEFAULT_ANISOTROPY,_=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=Va(),this.name="",this.source=new Wm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xl:t.x=t.x-Math.floor(t.x);break;case ta:t.x=t.x<0?0:1;break;case Hp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xl:t.y=t.y-Math.floor(t.y);break;case ta:t.y=t.y<0?0:1;break;case Hp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Zy;Jn.DEFAULT_ANISOTROPY=1;const n0=class n0{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,d=p[0],_=p[4],v=p[8],g=p[1],x=p[5],M=p[9],T=p[2],y=p[6],S=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,R=(x+1)/2,B=(S+1)/2,N=(_+g)/4,O=(v+T)/4,A=(M+y)/4;return U>R&&U>B?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=N/a,c=O/a):R>B?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=N/o,c=A/o):B<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),a=O/c,o=A/c),this.set(a,o,c,n),this}let D=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(y-M)/D,this.y=(v-T)/D,this.z=(g-_)/D,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};n0.prototype.isVector4=!0;let mn=n0;class RT extends Gs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new mn(0,0,t,n),this.scissorTest=!1,this.viewport=new mn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new Jn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Wm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends RT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class iS extends Jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wT extends Jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vf=class vf{constructor(t,n,a,o,c,u,h,p,d,_,v,g,x,M,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,d,_,v,g,x,M,T,y)}set(t,n,a,o,c,u,h,p,d,_,v,g,x,M,T,y){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=h,S[13]=p,S[2]=d,S[6]=_,S[10]=v,S[14]=g,S[3]=x,S[7]=M,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vf().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/io.setFromMatrixColumn(t,0).length(),c=1/io.setFromMatrixColumn(t,1).length(),u=1/io.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=u*_,x=u*v,M=h*_,T=h*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=x+M*d,n[5]=g-T*d,n[9]=-h*p,n[2]=T-g*d,n[6]=M+x*d,n[10]=u*p}else if(t.order==="YXZ"){const g=p*_,x=p*v,M=d*_,T=d*v;n[0]=g+T*h,n[4]=M*h-x,n[8]=u*d,n[1]=u*v,n[5]=u*_,n[9]=-h,n[2]=x*h-M,n[6]=T+g*h,n[10]=u*p}else if(t.order==="ZXY"){const g=p*_,x=p*v,M=d*_,T=d*v;n[0]=g-T*h,n[4]=-u*v,n[8]=M+x*h,n[1]=x+M*h,n[5]=u*_,n[9]=T-g*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const g=u*_,x=u*v,M=h*_,T=h*v;n[0]=p*_,n[4]=M*d-x,n[8]=g*d+T,n[1]=p*v,n[5]=T*d+g,n[9]=x*d-M,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const g=u*p,x=u*d,M=h*p,T=h*d;n[0]=p*_,n[4]=T-g*v,n[8]=M*v+x,n[1]=v,n[5]=u*_,n[9]=-h*_,n[2]=-d*_,n[6]=x*v+M,n[10]=g-T*v}else if(t.order==="XZY"){const g=u*p,x=u*d,M=h*p,T=h*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=g*v+T,n[5]=u*_,n[9]=x*v-M,n[2]=M*v-x,n[6]=h*_,n[10]=T*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CT,t,DT)}lookAt(t,n,a){const o=this.elements;return Ti.subVectors(t,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ms.crossVectors(a,Ti),Ms.lengthSq()===0&&(Math.abs(a.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ms.crossVectors(a,Ti)),Ms.normalize(),xu.crossVectors(Ti,Ms),o[0]=Ms.x,o[4]=xu.x,o[8]=Ti.x,o[1]=Ms.y,o[5]=xu.y,o[9]=Ti.y,o[2]=Ms.z,o[6]=xu.z,o[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],_=a[1],v=a[5],g=a[9],x=a[13],M=a[2],T=a[6],y=a[10],S=a[14],D=a[3],U=a[7],R=a[11],B=a[15],N=o[0],O=o[4],A=o[8],P=o[12],V=o[1],G=o[5],X=o[9],tt=o[13],ut=o[2],q=o[6],F=o[10],H=o[14],$=o[3],dt=o[7],bt=o[11],I=o[15];return c[0]=u*N+h*V+p*ut+d*$,c[4]=u*O+h*G+p*q+d*dt,c[8]=u*A+h*X+p*F+d*bt,c[12]=u*P+h*tt+p*H+d*I,c[1]=_*N+v*V+g*ut+x*$,c[5]=_*O+v*G+g*q+x*dt,c[9]=_*A+v*X+g*F+x*bt,c[13]=_*P+v*tt+g*H+x*I,c[2]=M*N+T*V+y*ut+S*$,c[6]=M*O+T*G+y*q+S*dt,c[10]=M*A+T*X+y*F+S*bt,c[14]=M*P+T*tt+y*H+S*I,c[3]=D*N+U*V+R*ut+B*$,c[7]=D*O+U*G+R*q+B*dt,c[11]=D*A+U*X+R*F+B*bt,c[15]=D*P+U*tt+R*H+B*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],p=t[9],d=t[13],_=t[2],v=t[6],g=t[10],x=t[14],M=t[3],T=t[7],y=t[11],S=t[15],D=p*x-d*g,U=h*x-d*v,R=h*g-p*v,B=u*x-d*_,N=u*g-p*_,O=u*v-h*_;return n*(T*D-y*U+S*R)-a*(M*D-y*B+S*N)+o*(M*U-T*B+S*O)-c*(M*R-T*N+y*O)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[1],u=t[5],h=t[9],p=t[2],d=t[6],_=t[10];return n*(u*_-h*d)-a*(c*_-h*p)+o*(c*d-u*p)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],d=t[7],_=t[8],v=t[9],g=t[10],x=t[11],M=t[12],T=t[13],y=t[14],S=t[15],D=n*h-a*u,U=n*p-o*u,R=n*d-c*u,B=a*p-o*h,N=a*d-c*h,O=o*d-c*p,A=_*T-v*M,P=_*y-g*M,V=_*S-x*M,G=v*y-g*T,X=v*S-x*T,tt=g*S-x*y,ut=D*tt-U*X+R*G+B*V-N*P+O*A;if(ut===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ut;return t[0]=(h*tt-p*X+d*G)*q,t[1]=(o*X-a*tt-c*G)*q,t[2]=(T*O-y*N+S*B)*q,t[3]=(g*N-v*O-x*B)*q,t[4]=(p*V-u*tt-d*P)*q,t[5]=(n*tt-o*V+c*P)*q,t[6]=(y*R-M*O-S*U)*q,t[7]=(_*O-g*R+x*U)*q,t[8]=(u*X-h*V+d*A)*q,t[9]=(a*V-n*X-c*A)*q,t[10]=(M*N-T*R+S*D)*q,t[11]=(v*R-_*N-x*D)*q,t[12]=(h*P-u*G-p*A)*q,t[13]=(n*G-a*P+o*A)*q,t[14]=(T*U-M*B-y*D)*q,t[15]=(_*B-v*U+g*D)*q,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,p=t.z,d=c*u,_=c*h;return this.set(d*u+a,d*h-o*p,d*p+o*h,0,d*h+o*p,_*h+a,_*p-o*u,0,d*p-o*h,_*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,_=u+u,v=h+h,g=c*d,x=c*_,M=c*v,T=u*_,y=u*v,S=h*v,D=p*d,U=p*_,R=p*v,B=a.x,N=a.y,O=a.z;return o[0]=(1-(T+S))*B,o[1]=(x+R)*B,o[2]=(M-U)*B,o[3]=0,o[4]=(x-R)*N,o[5]=(1-(g+S))*N,o[6]=(y+D)*N,o[7]=0,o[8]=(M+U)*O,o[9]=(y-D)*O,o[10]=(1-(g+T))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=io.set(o[0],o[1],o[2]).length();const h=io.set(o[4],o[5],o[6]).length(),p=io.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ki.copy(this);const d=1/u,_=1/h,v=1/p;return Ki.elements[0]*=d,Ki.elements[1]*=d,Ki.elements[2]*=d,Ki.elements[4]*=_,Ki.elements[5]*=_,Ki.elements[6]*=_,Ki.elements[8]*=v,Ki.elements[9]*=v,Ki.elements[10]*=v,n.setFromRotationMatrix(Ki),a.x=u,a.y=h,a.z=p,this}makePerspective(t,n,a,o,c,u,h=ha,p=!1){const d=this.elements,_=2*c/(n-t),v=2*c/(a-o),g=(n+t)/(n-t),x=(a+o)/(a-o);let M,T;if(p)M=c/(u-c),T=u*c/(u-c);else if(h===ha)M=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===Yl)M=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ha,p=!1){const d=this.elements,_=2/(n-t),v=2/(a-o),g=-(n+t)/(n-t),x=-(a+o)/(a-o);let M,T;if(p)M=1/(u-c),T=u/(u-c);else if(h===ha)M=-2/(u-c),T=-(u+c)/(u-c);else if(h===Yl)M=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};vf.prototype.isMatrix4=!0;let sn=vf;const io=new Z,Ki=new sn,CT=new Z(0,0,0),DT=new Z(1,1,1),Ms=new Z,xu=new Z,Ti=new Z,fx=new sn,hx=new Bs;class Is{constructor(t=0,n=0,a=0,o=Is.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],p=o[1],d=o[5],_=o[9],v=o[2],g=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return fx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hx.setFromEuler(this),this.setFromQuaternion(hx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Is.DEFAULT_ORDER="XYZ";class qm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let UT=0;const dx=new Z,ao=new Bs,Ia=new sn,yu=new Z,Rl=new Z,LT=new Z,NT=new Bs,px=new Z(1,0,0),mx=new Z(0,1,0),gx=new Z(0,0,1),_x={type:"added"},PT={type:"removed"},so={type:"childadded",child:null},Qd={type:"childremoved",child:null};class Un extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new Z,n=new Is,a=new Bs,o=new Z(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new he}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(px,t)}rotateY(t){return this.rotateOnAxis(mx,t)}rotateZ(t){return this.rotateOnAxis(gx,t)}translateOnAxis(t,n){return dx.copy(t).applyQuaternion(this.quaternion),this.position.add(dx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(px,t)}translateY(t){return this.translateOnAxis(mx,t)}translateZ(t){return this.translateOnAxis(gx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?yu.copy(t):yu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(Rl,yu,this.up):Ia.lookAt(yu,Rl,this.up),this.quaternion.setFromRotationMatrix(Ia),o&&(Ia.extractRotation(o.matrixWorld),ao.setFromRotationMatrix(Ia),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_x),so.child=t,this.dispatchEvent(so),so.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(PT),Qd.child=t,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_x),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,t,LT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,NT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),d=u(t.textures),_=u(t.images),v=u(t.shapes),g=u(t.skeletons),x=u(t.animations),M=u(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(h){const p=[];for(const d in h){const _=h[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Un.DEFAULT_UP=new Z(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Re extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OT={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const T of t.hand.values()){const y=n.getJointPose(T,a),S=this._getHandJoint(d,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&g>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Re;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Jd(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ce{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=De.workingColorSpace){return this.r=t,this.g=n,this.b=a,De.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=De.workingColorSpace){if(t=Xm(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Jd(u,c,t+1/3),this.g=Jd(u,c,t),this.b=Jd(u,c,t-1/3)}return De.colorSpaceToWorking(this,o),this}setStyle(t,n=di){function a(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=di){const a=aS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ka(t.r),this.g=ka(t.g),this.b=ka(t.b),this}copyLinearToSRGB(t){return this.r=Eo(t.r),this.g=Eo(t.g),this.b=Eo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return De.workingToColorSpace(Kn.copy(this),t),Math.round(ye(Kn.r*255,0,255))*65536+Math.round(ye(Kn.g*255,0,255))*256+Math.round(ye(Kn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(Kn.copy(this),n);const a=Kn.r,o=Kn.g,c=Kn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,d;const _=(h+u)/2;if(h===u)p=0,d=0;else{const v=u-h;switch(d=_<=.5?v/(u+h):v/(2-u-h),u){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(Kn.copy(this),n),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=di){De.workingToColorSpace(Kn.copy(this),t);const n=Kn.r,a=Kn.g,o=Kn.b;return t!==di?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(bs),this.setHSL(bs.h+t,bs.s+n,bs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(bs),t.getHSL(Su);const a=Fl(bs.h,Su.h,n),o=Fl(bs.s,Su.s,n),c=Fl(bs.l,Su.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new ce;ce.NAMES=aS;class Ym{constructor(t,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=n,this.far=a}clone(){return new Ym(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class BT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qi=new Z,za=new Z,$d=new Z,Fa=new Z,ro=new Z,oo=new Z,vx=new Z,tp=new Z,ep=new Z,np=new Z,ip=new mn,ap=new mn,sp=new mn;class Gi{constructor(t=new Z,n=new Z,a=new Z){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Qi.subVectors(t,n),o.cross(Qi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Qi.subVectors(o,n),za.subVectors(a,n),$d.subVectors(t,n);const u=Qi.dot(Qi),h=Qi.dot(za),p=Qi.dot($d),d=za.dot(za),_=za.dot($d),v=u*d-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,x=(d*p-h*_)*g,M=(u*_-h*p)*g;return c.set(1-x-M,M,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(t,n,a,o,c,u,h,p){return this.getBarycoord(t,n,a,o,Fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fa.x),p.addScaledVector(u,Fa.y),p.addScaledVector(h,Fa.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return ip.setScalar(0),ap.setScalar(0),sp.setScalar(0),ip.fromBufferAttribute(t,n),ap.fromBufferAttribute(t,a),sp.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(ip,c.x),u.addScaledVector(ap,c.y),u.addScaledVector(sp,c.z),u}static isFrontFacing(t,n,a,o){return Qi.subVectors(a,n),za.subVectors(t,n),Qi.cross(za).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),za.subVectors(this.a,this.b),Qi.cross(za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Gi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;ro.subVectors(o,a),oo.subVectors(c,a),tp.subVectors(t,a);const p=ro.dot(tp),d=oo.dot(tp);if(p<=0&&d<=0)return n.copy(a);ep.subVectors(t,o);const _=ro.dot(ep),v=oo.dot(ep);if(_>=0&&v<=_)return n.copy(o);const g=p*v-_*d;if(g<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(a).addScaledVector(ro,u);np.subVectors(t,c);const x=ro.dot(np),M=oo.dot(np);if(M>=0&&x<=M)return n.copy(c);const T=x*d-p*M;if(T<=0&&d>=0&&M<=0)return h=d/(d-M),n.copy(a).addScaledVector(oo,h);const y=_*M-x*v;if(y<=0&&v-_>=0&&x-M>=0)return vx.subVectors(c,o),h=(v-_)/(v-_+(x-M)),n.copy(o).addScaledVector(vx,h);const S=1/(y+T+g);return u=T*S,h=g*S,n.copy(a).addScaledVector(ro,u).addScaledVector(oo,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ic{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ji.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ji.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ji.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,ji):ji.fromBufferAttribute(c,u),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Mu.copy(a.boundingBox)),Mu.applyMatrix4(t.matrixWorld),this.union(Mu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wl),bu.subVectors(this.max,wl),lo.subVectors(t.a,wl),co.subVectors(t.b,wl),uo.subVectors(t.c,wl),Es.subVectors(co,lo),Ts.subVectors(uo,co),cr.subVectors(lo,uo);let n=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-cr.z,cr.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,cr.z,0,-cr.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-cr.y,cr.x,0];return!rp(n,lo,co,uo,bu)||(n=[1,0,0,0,1,0,0,0,1],!rp(n,lo,co,uo,bu))?!1:(Eu.crossVectors(Es,Ts),n=[Eu.x,Eu.y,Eu.z],rp(n,lo,co,uo,bu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ha=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ji=new Z,Mu=new ic,lo=new Z,co=new Z,uo=new Z,Es=new Z,Ts=new Z,cr=new Z,wl=new Z,bu=new Z,Eu=new Z,ur=new Z;function rp(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){ur.fromArray(s,c);const h=o.x*Math.abs(ur.x)+o.y*Math.abs(ur.y)+o.z*Math.abs(ur.z),p=t.dot(ur),d=n.dot(ur),_=a.dot(ur);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>h)return!1}return!0}const wn=new Z,Tu=new Yt;let IT=0;class ni extends Gs{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=vm,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Tu.fromBufferAttribute(this,n),Tu.applyMatrix3(t),this.setXY(n,Tu.x,Tu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix3(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix4(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)wn.fromBufferAttribute(this,n),wn.applyNormalMatrix(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)wn.fromBufferAttribute(this,n),wn.transformDirection(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ke(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$i(n,this.array)),n}setX(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$i(n,this.array)),n}setY(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$i(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$i(n,this.array)),n}setW(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),o=ke(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),o=ke(o,this.array),c=ke(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vm&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class sS extends ni{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class rS extends ni{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class gn extends ni{constructor(t,n,a){super(new Float32Array(t),n,a)}}const zT=new ic,Cl=new Z,op=new Z;class Ef{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):zT.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cl.subVectors(t,this.center);const n=Cl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Cl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(op.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cl.copy(t.center).add(op)),this.expandByPoint(Cl.copy(t.center).sub(op))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let FT=0;const Hi=new sn,lp=new Un,fo=new Z,Ai=new ic,Dl=new ic,Fn=new Z;class Hn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iT(t)?rS:sS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new he().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,n,a){return Hi.makeTranslation(t,n,a),this.applyMatrix4(Hi),this}scale(t,n,a){return Hi.makeScale(t,n,a),this.applyMatrix4(Hi),this}lookAt(t){return lp.lookAt(t),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ic);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const a=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Dl.setFromBufferAttribute(h),this.morphTargetsRelative?(Fn.addVectors(Ai.min,Dl.min),Ai.expandByPoint(Fn),Fn.addVectors(Ai.max,Dl.max),Ai.expandByPoint(Fn)):(Ai.expandByPoint(Dl.min),Ai.expandByPoint(Dl.max))}Ai.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Fn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Fn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,_=h.count;d<_;d++)Fn.fromBufferAttribute(h,d),p&&(fo.fromBufferAttribute(t,d),Fn.add(fo)),o=Math.max(o,a.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new ni(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],p=[];for(let A=0;A<a.count;A++)h[A]=new Z,p[A]=new Z;const d=new Z,_=new Z,v=new Z,g=new Yt,x=new Yt,M=new Yt,T=new Z,y=new Z;function S(A,P,V){d.fromBufferAttribute(a,A),_.fromBufferAttribute(a,P),v.fromBufferAttribute(a,V),g.fromBufferAttribute(c,A),x.fromBufferAttribute(c,P),M.fromBufferAttribute(c,V),_.sub(d),v.sub(d),x.sub(g),M.sub(g);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(T.copy(_).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(G),y.copy(v).multiplyScalar(x.x).addScaledVector(_,-M.x).multiplyScalar(G),h[A].add(T),h[P].add(T),h[V].add(T),p[A].add(y),p[P].add(y),p[V].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let A=0,P=D.length;A<P;++A){const V=D[A],G=V.start,X=V.count;for(let tt=G,ut=G+X;tt<ut;tt+=3)S(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new Z,R=new Z,B=new Z,N=new Z;function O(A){B.fromBufferAttribute(o,A),N.copy(B);const P=h[A];U.copy(P),U.sub(B.multiplyScalar(B.dot(P))).normalize(),R.crossVectors(N,P);const G=R.dot(p[A])<0?-1:1;u.setXYZW(A,U.x,U.y,U.z,G)}for(let A=0,P=D.length;A<P;++A){const V=D[A],G=V.start,X=V.count;for(let tt=G,ut=G+X;tt<ut;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const o=new Z,c=new Z,u=new Z,h=new Z,p=new Z,d=new Z,_=new Z,v=new Z;if(t)for(let g=0,x=t.count;g<x;g+=3){const M=t.getX(g+0),T=t.getX(g+1),y=t.getX(g+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),h.fromBufferAttribute(a,M),p.fromBufferAttribute(a,T),d.fromBufferAttribute(a,y),h.add(_),p.add(_),d.add(_),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,x=n.count;g<x;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Fn.fromBufferAttribute(t,n),Fn.normalize(),t.setXYZ(n,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function t(h,p){const d=h.array,_=h.itemSize,v=h.normalized,g=new d.constructor(p.length*_);let x=0,M=0;for(let T=0,y=p.length;T<y;T++){h.isInterleavedBufferAttribute?x=p[T]*h.data.stride+h.offset:x=p[T]*_;for(let S=0;S<_;S++)g[M++]=d[x++]}return new ni(g,_,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let _=0,v=d.length;_<v;_++){const g=d[_],x=t(g,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,g=d.length;v<g;v++){const x=d[v];_.push(x.toJSON(t.data))}_.length>0&&(o[p]=_,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const _=o[d];this.setAttribute(d,_.clone(n))}const c=t.morphAttributes;for(const d in c){const _=[],v=c[d];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,_=u.length;d<_;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class HT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=vm,this.updateRanges=[],this.version=0,this.uuid=Va()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new Z;class mf{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.applyMatrix4(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.applyNormalMatrix(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ti.fromBufferAttribute(this,n),ti.transformDirection(t),this.setXYZ(n,ti.x,ti.y,ti.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=$i(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ke(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=$i(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=$i(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=$i(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=$i(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),o=ke(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),o=ke(o,this.array),c=ke(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){pf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new ni(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let GT=0;class yr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=_r,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Up,this.blendDst=Lp,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(a.blending=this.blending),this.side!==Os&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Up&&(a.blendSrc=this.blendSrc),this.blendDst!==Lp&&(a.blendDst=this.blendDst),this.blendEquation!==dr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ax&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Yt().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oS extends yr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ho;const Ul=new Z,po=new Z,mo=new Z,go=new Yt,Ll=new Yt,lS=new sn,Au=new Z,Nl=new Z,Ru=new Z,xx=new Yt,cp=new Yt,yx=new Yt;class VT extends Un{constructor(t=new oS){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new Hn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new HT(n,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new mf(a,3,0,!1)),ho.setAttribute("uv",new mf(a,2,3,!1))}this.geometry=ho,this.material=t,this.center=new Yt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),lS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;wu(Au.set(-.5,-.5,0),mo,u,po,o,c),wu(Nl.set(.5,-.5,0),mo,u,po,o,c),wu(Ru.set(.5,.5,0),mo,u,po,o,c),xx.set(0,0),cp.set(1,0),yx.set(1,1);let h=t.ray.intersectTriangle(Au,Nl,Ru,!1,Ul);if(h===null&&(wu(Nl.set(-.5,.5,0),mo,u,po,o,c),cp.set(0,1),h=t.ray.intersectTriangle(Au,Ru,Nl,!1,Ul),h===null))return;const p=t.ray.origin.distanceTo(Ul);p<t.near||p>t.far||n.push({distance:p,point:Ul.clone(),uv:Gi.getInterpolation(Ul,Au,Nl,Ru,xx,cp,yx,new Yt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wu(s,t,n,a,o,c){go.subVectors(s,n).addScalar(.5).multiply(a),o!==void 0?(Ll.x=c*go.x-o*go.y,Ll.y=o*go.x+c*go.y):Ll.copy(go),s.copy(t),s.x+=Ll.x,s.y+=Ll.y,s.applyMatrix4(lS)}const Ga=new Z,up=new Z,Cu=new Z,As=new Z,fp=new Z,Du=new Z,hp=new Z;class Tf{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ga)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ga.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ga.copy(this.origin).addScaledVector(this.direction,n),Ga.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){up.copy(t).add(n).multiplyScalar(.5),Cu.copy(n).sub(t).normalize(),As.copy(this.origin).sub(up);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Cu),h=As.dot(this.direction),p=-As.dot(Cu),d=As.lengthSq(),_=Math.abs(1-u*u);let v,g,x,M;if(_>0)if(v=u*p-h,g=u*h-p,M=c*_,v>=0)if(g>=-M)if(g<=M){const T=1/_;v*=T,g*=T,x=v*(v+u*g+2*h)+g*(u*v+g+2*p)+d}else g=c,v=Math.max(0,-(u*g+h)),x=-v*v+g*(g+2*p)+d;else g=-c,v=Math.max(0,-(u*g+h)),x=-v*v+g*(g+2*p)+d;else g<=-M?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-p),c),x=-v*v+g*(g+2*p)+d):g<=M?(v=0,g=Math.min(Math.max(-c,-p),c),x=g*(g+2*p)+d):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-p),c),x=-v*v+g*(g+2*p)+d);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),x=-v*v+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(up).addScaledVector(Cu,g),x}intersectSphere(t,n){Ga.subVectors(t.center,this.origin);const a=Ga.dot(this.direction),o=Ga.dot(Ga)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(t.min.x-g.x)*d,o=(t.max.x-g.x)*d):(a=(t.max.x-g.x)*d,o=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,u=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,u=(t.min.y-g.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Ga)!==null}intersectTriangle(t,n,a,o,c){fp.subVectors(n,t),Du.subVectors(a,t),hp.crossVectors(fp,Du);let u=this.direction.dot(hp),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;As.subVectors(this.origin,t);const p=h*this.direction.dot(Du.crossVectors(As,Du));if(p<0)return null;const d=h*this.direction.dot(fp.cross(As));if(d<0||p+d>u)return null;const _=-h*As.dot(hp);return _<0?null:this.at(_/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ci extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=Gy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Sx=new sn,fr=new Tf,Uu=new Ef,Mx=new Z,Lu=new Z,Nu=new Z,Pu=new Z,dp=new Z,Ou=new Z,bx=new Z,Bu=new Z;class xe extends Un{constructor(t=new Hn,n=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Ou.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const _=h[p],v=c[p];_!==0&&(dp.fromBufferAttribute(v,t),u?Ou.addScaledVector(dp,_):Ou.addScaledVector(dp.sub(n),_))}n.add(Ou)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Uu.copy(a.boundingSphere),Uu.applyMatrix4(c),fr.copy(t.ray).recast(t.near),!(Uu.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Uu,Mx)===null||fr.origin.distanceToSquared(Mx)>(t.far-t.near)**2))&&(Sx.copy(c).invert(),fr.copy(t.ray).applyMatrix4(Sx),!(a.boundingBox!==null&&fr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,fr)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=u[y.materialIndex],D=Math.max(y.start,x.start),U=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let R=D,B=U;R<B;R+=3){const N=h.getX(R),O=h.getX(R+1),A=h.getX(R+2);o=Iu(this,S,t,a,d,_,v,N,O,A),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let y=M,S=T;y<S;y+=3){const D=h.getX(y),U=h.getX(y+1),R=h.getX(y+2);o=Iu(this,u,t,a,d,_,v,D,U,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=u[y.materialIndex],D=Math.max(y.start,x.start),U=Math.min(p.count,Math.min(y.start+y.count,x.start+x.count));for(let R=D,B=U;R<B;R+=3){const N=R,O=R+1,A=R+2;o=Iu(this,S,t,a,d,_,v,N,O,A),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let y=M,S=T;y<S;y+=3){const D=y,U=y+1,R=y+2;o=Iu(this,u,t,a,d,_,v,D,U,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function kT(s,t,n,a,o,c,u,h){let p;if(t.side===jn?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,t.side===Os,h),p===null)return null;Bu.copy(h),Bu.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(Bu);return d<n.near||d>n.far?null:{distance:d,point:Bu.clone(),object:s}}function Iu(s,t,n,a,o,c,u,h,p,d){s.getVertexPosition(h,Lu),s.getVertexPosition(p,Nu),s.getVertexPosition(d,Pu);const _=kT(s,t,n,a,Lu,Nu,Pu,bx);if(_){const v=new Z;Gi.getBarycoord(bx,Lu,Nu,Pu,v),o&&(_.uv=Gi.getInterpolatedAttribute(o,h,p,d,v,new Yt)),c&&(_.uv1=Gi.getInterpolatedAttribute(c,h,p,d,v,new Yt)),u&&(_.normal=Gi.getInterpolatedAttribute(u,h,p,d,v,new Z),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:p,c:d,normal:new Z,materialIndex:0};Gi.getNormal(Lu,Nu,Pu,g.normal),_.face=g,_.barycoord=v}return _}class cS extends Jn{constructor(t=null,n=1,a=1,o,c,u,h,p,d=Sn,_=Sn,v,g){super(null,u,h,p,d,_,o,c,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pp=new Z,XT=new Z,WT=new he;class Us{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=pp.subVectors(a,n).cross(XT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(pp),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||WT.getNormalMatrix(t),o=this.coplanarPoint(pp).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Ef,qT=new Yt(.5,.5),zu=new Z;class Zm{constructor(t=new Us,n=new Us,a=new Us,o=new Us,c=new Us,u=new Us){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ha,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],p=c[2],d=c[3],_=c[4],v=c[5],g=c[6],x=c[7],M=c[8],T=c[9],y=c[10],S=c[11],D=c[12],U=c[13],R=c[14],B=c[15];if(o[0].setComponents(d-u,x-_,S-M,B-D).normalize(),o[1].setComponents(d+u,x+_,S+M,B+D).normalize(),o[2].setComponents(d+h,x+v,S+T,B+U).normalize(),o[3].setComponents(d-h,x-v,S-T,B-U).normalize(),a)o[4].setComponents(p,g,y,R).normalize(),o[5].setComponents(d-p,x-g,S-y,B-R).normalize();else if(o[4].setComponents(d-p,x-g,S-y,B-R).normalize(),n===ha)o[5].setComponents(d+p,x+g,S+y,B+R).normalize();else if(n===Yl)o[5].setComponents(p,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);const n=qT.distanceTo(t.center);return hr.radius=.7071067811865476+n,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(zu.x=o.normal.x>0?t.max.x:t.min.x,zu.y=o.normal.y>0?t.max.y:t.min.y,zu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(zu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YT extends yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ex=new sn,xm=new Tf,Fu=new Ef,Hu=new Z;class Tx extends Un{constructor(t=new Hn,n=new YT){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Fu.copy(a.boundingSphere),Fu.applyMatrix4(o),Fu.radius+=c,t.ray.intersectsSphere(Fu)===!1)return;Ex.copy(o).invert(),xm.copy(t.ray).applyMatrix4(Ex);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,v=a.attributes.position;if(d!==null){const g=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let M=g,T=x;M<T;M++){const y=d.getX(M);Hu.fromBufferAttribute(v,y),Ax(Hu,y,p,o,t,n,this)}}else{const g=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=g,T=x;M<T;M++)Hu.fromBufferAttribute(v,M),Ax(Hu,M,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ax(s,t,n,a,o,c,u){const h=xm.distanceSqToPoint(s);if(h<n){const p=new Z;xm.closestPointToPoint(s,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class uS extends Jn{constructor(t=[],n=vr,a,o,c,u,h,p,d,_){super(t,n,a,o,c,u,h,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ZT extends Jn{constructor(t,n,a,o,c,u,h,p,d){super(t,n,a,o,c,u,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wo extends Jn{constructor(t,n,a=_a,o,c,u,h=Sn,p=Sn,d,_=Wa,v=1){if(_!==Wa&&_!==gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,o,c,u,h,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class KT extends wo{constructor(t,n=_a,a=vr,o,c,u=Sn,h=Sn,p,d=Wa){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,a,o,c,u,h,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fS extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zs extends Hn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],_=[],v=[];let g=0,x=0;M("z","y","x",-1,-1,a,n,t,u,c,0),M("z","y","x",1,-1,a,n,-t,u,c,1),M("x","z","y",1,1,t,a,n,o,u,2),M("x","z","y",1,-1,t,a,-n,o,u,3),M("x","y","z",1,-1,t,n,a,o,c,4),M("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(v,2));function M(T,y,S,D,U,R,B,N,O,A,P){const V=R/O,G=B/A,X=R/2,tt=B/2,ut=N/2,q=O+1,F=A+1;let H=0,$=0;const dt=new Z;for(let bt=0;bt<F;bt++){const I=bt*G-tt;for(let Q=0;Q<q;Q++){const Mt=Q*V-X;dt[T]=Mt*D,dt[y]=I*U,dt[S]=ut,d.push(dt.x,dt.y,dt.z),dt[T]=0,dt[y]=0,dt[S]=N>0?1:-1,_.push(dt.x,dt.y,dt.z),v.push(Q/O),v.push(1-bt/A),H+=1}}for(let bt=0;bt<A;bt++)for(let I=0;I<O;I++){const Q=g+I+q*bt,Mt=g+I+q*(bt+1),wt=g+(I+1)+q*(bt+1),Nt=g+(I+1)+q*bt;p.push(Q,Mt,Nt),p.push(Mt,wt,Nt),$+=6}h.addGroup(x,$,P),x+=$,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Kl extends Hn{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],p=[],d=new Z,_=new Yt;u.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let v=0,g=3;v<=n;v++,g+=3){const x=a+v/n*o;d.x=t*Math.cos(x),d.y=t*Math.sin(x),u.push(d.x,d.y,d.z),h.push(0,0,1),_.x=(u[g]/t+1)/2,_.y=(u[g+1]/t+1)/2,p.push(_.x,_.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hi extends Hn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:p};const d=this;o=Math.floor(o),c=Math.floor(c);const _=[],v=[],g=[],x=[];let M=0;const T=[],y=a/2;let S=0;D(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(x,2));function D(){const R=new Z,B=new Z;let N=0;const O=(n-t)/a;for(let A=0;A<=c;A++){const P=[],V=A/c,G=V*(n-t)+t;for(let X=0;X<=o;X++){const tt=X/o,ut=tt*p+h,q=Math.sin(ut),F=Math.cos(ut);B.x=G*q,B.y=-V*a+y,B.z=G*F,v.push(B.x,B.y,B.z),R.set(q,O,F).normalize(),g.push(R.x,R.y,R.z),x.push(tt,1-V),P.push(M++)}T.push(P)}for(let A=0;A<o;A++)for(let P=0;P<c;P++){const V=T[P][A],G=T[P+1][A],X=T[P+1][A+1],tt=T[P][A+1];(t>0||P!==0)&&(_.push(V,G,tt),N+=3),(n>0||P!==c-1)&&(_.push(G,X,tt),N+=3)}d.addGroup(S,N,0),S+=N}function U(R){const B=M,N=new Yt,O=new Z;let A=0;const P=R===!0?t:n,V=R===!0?1:-1;for(let X=1;X<=o;X++)v.push(0,y*V,0),g.push(0,V,0),x.push(.5,.5),M++;const G=M;for(let X=0;X<=o;X++){const ut=X/o*p+h,q=Math.cos(ut),F=Math.sin(ut);O.x=P*F,O.y=y*V,O.z=P*q,v.push(O.x,O.y,O.z),g.push(0,V,0),N.x=q*.5+.5,N.y=F*.5*V+.5,x.push(N.x,N.y),M++}for(let X=0;X<o;X++){const tt=B+X,ut=G+X;R===!0?_.push(ut,ut+1,tt):_.push(ut+1,ut,tt),A+=3}d.addGroup(S,A,R===!0?1:2),S+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ql extends hi{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new Ql(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lo extends Hn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,_=p+1,v=t/h,g=n/p,x=[],M=[],T=[],y=[];for(let S=0;S<_;S++){const D=S*g-u;for(let U=0;U<d;U++){const R=U*v-c;M.push(R,-D,0),T.push(0,0,1),y.push(U/h),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let D=0;D<h;D++){const U=D+d*S,R=D+d*(S+1),B=D+1+d*(S+1),N=D+1+d*S;x.push(U,R,N),x.push(R,B,N)}this.setIndex(x),this.setAttribute("position",new gn(M,3)),this.setAttribute("normal",new gn(T,3)),this.setAttribute("uv",new gn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.width,t.height,t.widthSegments,t.heightSegments)}}class jl extends Hn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+h,Math.PI);let d=0;const _=[],v=new Z,g=new Z,x=[],M=[],T=[],y=[];for(let S=0;S<=a;S++){const D=[],U=S/a,R=u+U*h,B=t*Math.cos(R),N=Math.sqrt(t*t-B*B);let O=0;S===0&&u===0?O=.5/n:S===a&&p===Math.PI&&(O=-.5/n);for(let A=0;A<=n;A++){const P=A/n,V=o+P*c;v.x=-N*Math.cos(V),v.y=B,v.z=N*Math.sin(V),M.push(v.x,v.y,v.z),g.copy(v).normalize(),T.push(g.x,g.y,g.z),y.push(P+O,1-U),D.push(d++)}_.push(D)}for(let S=0;S<a;S++)for(let D=0;D<n;D++){const U=_[S][D+1],R=_[S][D],B=_[S+1][D],N=_[S+1][D+1];(S!==0||u>0)&&x.push(U,R,N),(S!==a-1||p<Math.PI)&&x.push(R,B,N)}this.setIndex(x),this.setAttribute("position",new gn(M,3)),this.setAttribute("normal",new gn(T,3)),this.setAttribute("uv",new gn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fa extends Hn{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2,u=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c,thetaStart:u,thetaLength:h},a=Math.floor(a),o=Math.floor(o);const p=[],d=[],_=[],v=[],g=new Z,x=new Z,M=new Z;for(let T=0;T<=a;T++){const y=u+T/a*h;for(let S=0;S<=o;S++){const D=S/o*c;x.x=(t+n*Math.cos(y))*Math.cos(D),x.y=(t+n*Math.cos(y))*Math.sin(D),x.z=n*Math.sin(y),d.push(x.x,x.y,x.z),g.x=t*Math.cos(D),g.y=t*Math.sin(D),M.subVectors(x,g).normalize(),_.push(M.x,M.y,M.z),v.push(S/o),v.push(T/a)}}for(let T=1;T<=a;T++)for(let y=1;y<=o;y++){const S=(o+1)*T+y-1,D=(o+1)*(T-1)+y-1,U=(o+1)*(T-1)+y,R=(o+1)*T+y;p.push(S,D,R),p.push(D,U,R)}this.setIndex(p),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Co(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];if(Rx(o))o.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(Rx(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();t[n][a]=c}else t[n][a]=o.slice();else t[n][a]=o}}return t}function ei(s){const t={};for(let n=0;n<s.length;n++){const a=Co(s[n]);for(const o in a)t[o]=a[o]}return t}function Rx(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function QT(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function hS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const gf={clone:Co,merge:ei};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=JT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=QT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new ce().setHex(o.value);break;case"v2":this.uniforms[a].value=new Yt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new Z().fromArray(o.value);break;case"v4":this.uniforms[a].value=new mn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new he().fromArray(o.value);break;case"m4":this.uniforms[a].value=new sn().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class $T extends Dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tn extends yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_m,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mp extends tn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tA extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eA extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Km extends Un{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class nA extends Km{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const gp=new sn,wx=new Z,Cx=new Z;class dS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zm,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;wx.setFromMatrixPosition(t.matrixWorld),n.position.copy(wx),Cx.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Cx),n.updateMatrixWorld(),gp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gp,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Yl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(gp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gu=new Z,Vu=new Bs,la=new Z;class pS extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ha,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gu,Vu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gu,Vu,la.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(Gu,Vu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gu,Vu,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rs=new Z,Dx=new Yt,Ux=new Yt;class Ri extends pS{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Rs.x,Rs.y).multiplyScalar(-t/Rs.z)}getViewSize(t,n){return this.getViewBounds(t,Dx,Ux),n.subVectors(Ux,Dx)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(zl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class iA extends dS{constructor(){super(new Ri(90,1,.5,500)),this.isPointLightShadow=!0}}class aA extends Km{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new iA}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Af extends pS{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sA extends dS{constructor(){super(new Af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _p extends Km{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new sA}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const _o=-90,vo=1;class rA extends Un{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ri(_o,vo,t,n);o.layers=this.layers,this.add(o);const c=new Ri(_o,vo,t,n);c.layers=this.layers,this.add(c);const u=new Ri(_o,vo,t,n);u.layers=this.layers,this.add(u);const h=new Ri(_o,vo,t,n);h.layers=this.layers,this.add(h);const p=new Ri(_o,vo,t,n);p.layers=this.layers,this.add(p);const d=new Ri(_o,vo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const d of n)this.remove(d);if(t===ha)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Yl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,3,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,x),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class oA extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lA{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=cA.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cA(){this._document.hidden===!1&&this.reset()}const Lx=new sn;class uA{constructor(t,n,a=0,o=1/0){this.ray=new Tf(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new qm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ce("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Lx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lx),this}intersectObject(t,n=!0,a=[]){return ym(t,this,a,n),a.sort(Nx),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)ym(t[o],this,a,n);return a.sort(Nx),a}}function Nx(s,t){return s.distance-t.distance}function ym(s,t,n,a){let o=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,h=c.length;u<h;u++)ym(c[u],t,n,!0)}}class fA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class Px{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(ye(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const i0=class i0{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=o,this}};i0.prototype.isMatrix2=!0;let Ox=i0;class hA extends Gs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Bx(s,t,n,a){const o=dA(a);switch(n){case $y:return s*t;case eS:return s*t/o.components*o.byteLength;case Fm:return s*t/o.components*o.byteLength;case xr:return s*t*2/o.components*o.byteLength;case Hm:return s*t*2/o.components*o.byteLength;case tS:return s*t*3/o.components*o.byteLength;case Di:return s*t*4/o.components*o.byteLength;case Gm:return s*t*4/o.components*o.byteLength;case $u:case tf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ef:case nf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vp:case Xp:return Math.max(s,16)*Math.max(t,8)/4;case Gp:case kp:return Math.max(s,8)*Math.max(t,8)/2;case Wp:case qp:case Zp:case Kp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yp:case cf:case Qp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $p:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case tm:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case em:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case nm:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case im:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case am:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sm:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case rm:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case om:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case lm:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cm:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case um:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fm:case hm:case dm:return Math.ceil(s/4)*Math.ceil(t/4)*16;case pm:case mm:return Math.ceil(s/4)*Math.ceil(t/4)*8;case uf:case gm:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dA(s){switch(s){case wi:case Ky:return{byteLength:1,components:1};case Wl:case Qy:case Ui:return{byteLength:2,components:1};case Im:case zm:return{byteLength:2,components:4};case _a:case Bm:case Vi:return{byteLength:4,components:1};case jy:case Jy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pm}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pm);function mS(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function pA(s){const t=new WeakMap;function n(h,p){const d=h.array,_=h.usage,v=d.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,d,_),h.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=s.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,d){const _=p.array,v=p.updateRanges;if(s.bindBuffer(d,h),v.length===0)s.bufferSubData(d,0,_);else{v.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<v.length;x++){const M=v[g],T=v[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,v[g]=T)}v.length=g+1;for(let x=0,M=v.length;x<M;x++){const T=v[x];s.bufferSubData(d,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:c,update:u}}var mA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,EA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,GA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WA="gl_FragColor = linearToOutputTexel( gl_FragColor );",qA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$A=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,o2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,v2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,W2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ER=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:mA,alphahash_pars_fragment:gA,alphamap_fragment:_A,alphamap_pars_fragment:vA,alphatest_fragment:xA,alphatest_pars_fragment:yA,aomap_fragment:SA,aomap_pars_fragment:MA,batching_pars_vertex:bA,batching_vertex:EA,begin_vertex:TA,beginnormal_vertex:AA,bsdfs:RA,iridescence_fragment:wA,bumpmap_pars_fragment:CA,clipping_planes_fragment:DA,clipping_planes_pars_fragment:UA,clipping_planes_pars_vertex:LA,clipping_planes_vertex:NA,color_fragment:PA,color_pars_fragment:OA,color_pars_vertex:BA,color_vertex:IA,common:zA,cube_uv_reflection_fragment:FA,defaultnormal_vertex:HA,displacementmap_pars_vertex:GA,displacementmap_vertex:VA,emissivemap_fragment:kA,emissivemap_pars_fragment:XA,colorspace_fragment:WA,colorspace_pars_fragment:qA,envmap_fragment:YA,envmap_common_pars_fragment:ZA,envmap_pars_fragment:KA,envmap_pars_vertex:QA,envmap_physical_pars_fragment:o2,envmap_vertex:jA,fog_vertex:JA,fog_pars_vertex:$A,fog_fragment:t2,fog_pars_fragment:e2,gradientmap_pars_fragment:n2,lightmap_pars_fragment:i2,lights_lambert_fragment:a2,lights_lambert_pars_fragment:s2,lights_pars_begin:r2,lights_toon_fragment:l2,lights_toon_pars_fragment:c2,lights_phong_fragment:u2,lights_phong_pars_fragment:f2,lights_physical_fragment:h2,lights_physical_pars_fragment:d2,lights_fragment_begin:p2,lights_fragment_maps:m2,lights_fragment_end:g2,lightprobes_pars_fragment:_2,logdepthbuf_fragment:v2,logdepthbuf_pars_fragment:x2,logdepthbuf_pars_vertex:y2,logdepthbuf_vertex:S2,map_fragment:M2,map_pars_fragment:b2,map_particle_fragment:E2,map_particle_pars_fragment:T2,metalnessmap_fragment:A2,metalnessmap_pars_fragment:R2,morphinstance_vertex:w2,morphcolor_vertex:C2,morphnormal_vertex:D2,morphtarget_pars_vertex:U2,morphtarget_vertex:L2,normal_fragment_begin:N2,normal_fragment_maps:P2,normal_pars_fragment:O2,normal_pars_vertex:B2,normal_vertex:I2,normalmap_pars_fragment:z2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:H2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:V2,opaque_fragment:k2,packing:X2,premultiplied_alpha_fragment:W2,project_vertex:q2,dithering_fragment:Y2,dithering_pars_fragment:Z2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Q2,shadowmap_pars_fragment:j2,shadowmap_pars_vertex:J2,shadowmap_vertex:$2,shadowmask_pars_fragment:tR,skinbase_vertex:eR,skinning_pars_vertex:nR,skinning_vertex:iR,skinnormal_vertex:aR,specularmap_fragment:sR,specularmap_pars_fragment:rR,tonemapping_fragment:oR,tonemapping_pars_fragment:lR,transmission_fragment:cR,transmission_pars_fragment:uR,uv_pars_fragment:fR,uv_pars_vertex:hR,uv_vertex:dR,worldpos_vertex:pR,background_vert:mR,background_frag:gR,backgroundCube_vert:_R,backgroundCube_frag:vR,cube_vert:xR,cube_frag:yR,depth_vert:SR,depth_frag:MR,distance_vert:bR,distance_frag:ER,equirect_vert:TR,equirect_frag:AR,linedashed_vert:RR,linedashed_frag:wR,meshbasic_vert:CR,meshbasic_frag:DR,meshlambert_vert:UR,meshlambert_frag:LR,meshmatcap_vert:NR,meshmatcap_frag:PR,meshnormal_vert:OR,meshnormal_frag:BR,meshphong_vert:IR,meshphong_frag:zR,meshphysical_vert:FR,meshphysical_frag:HR,meshtoon_vert:GR,meshtoon_frag:VR,points_vert:kR,points_frag:XR,shadow_vert:WR,shadow_frag:qR,sprite_vert:YR,sprite_frag:ZR},zt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ua={basic:{uniforms:ei([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:ei([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:ei([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:ei([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:ei([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:ei([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:ei([zt.points,zt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:ei([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:ei([zt.common,zt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:ei([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:ei([zt.sprite,zt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:ei([zt.common,zt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:ei([zt.lights,zt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ua.physical={uniforms:ei([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const ku={r:0,b:0,g:0},KR=new sn,gS=new he;gS.set(-1,0,0,0,1,0,0,0,1);function QR(s,t,n,a,o,c){const u=new ce(0);let h=o===!0?0:1,p,d,_=null,v=0,g=null;function x(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const R=D.backgroundBlurriness>0;U=t.get(U,R)}return U}function M(D){let U=!1;const R=x(D);R===null?y(u,h):R&&R.isColor&&(y(R,1),U=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(D,U){const R=x(U);R&&(R.isCubeTexture||R.mapping===bf)?(d===void 0&&(d=new xe(new zs(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Co(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(KR.makeRotationFromEuler(U.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(gS),d.material.toneMapped=De.getTransfer(R.colorSpace)!==Ve,(_!==R||v!==R.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,g=s.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new xe(new Lo(2,2),new Dn({name:"BackgroundMaterial",uniforms:Co(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=De.getTransfer(R.colorSpace)!==Ve,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,g=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function y(D,U){D.getRGB(ku,hS(s)),n.buffers.color.setClear(ku.r,ku.g,ku.b,U,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,U=1){u.set(D),h=U,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,y(u,h)},render:M,addToRenderList:T,dispose:S}}function jR(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=g(null);let c=o,u=!1;function h(G,X,tt,ut,q){let F=!1;const H=v(G,ut,tt,X);c!==H&&(c=H,d(c.object)),F=x(G,ut,tt,q),F&&M(G,ut,tt,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,R(G,X,tt,ut),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function p(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function v(G,X,tt,ut){const q=ut.wireframe===!0;let F=a[X.id];F===void 0&&(F={},a[X.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let $=F[H];$===void 0&&($={},F[H]=$);let dt=$[tt.id];dt===void 0&&(dt={},$[tt.id]=dt);let bt=dt[q];return bt===void 0&&(bt=g(p()),dt[q]=bt),bt}function g(G){const X=[],tt=[],ut=[];for(let q=0;q<n;q++)X[q]=0,tt[q]=0,ut[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:tt,attributeDivisors:ut,object:G,attributes:{},index:null}}function x(G,X,tt,ut){const q=c.attributes,F=X.attributes;let H=0;const $=tt.getAttributes();for(const dt in $)if($[dt].location>=0){const I=q[dt];let Q=F[dt];if(Q===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;H++}return c.attributesNum!==H||c.index!==ut}function M(G,X,tt,ut){const q={},F=X.attributes;let H=0;const $=tt.getAttributes();for(const dt in $)if($[dt].location>=0){let I=F[dt];I===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),q[dt]=Q,H++}c.attributes=q,c.attributesNum=H,c.index=ut}function T(){const G=c.newAttributes;for(let X=0,tt=G.length;X<tt;X++)G[X]=0}function y(G){S(G,0)}function S(G,X){const tt=c.newAttributes,ut=c.enabledAttributes,q=c.attributeDivisors;tt[G]=1,ut[G]===0&&(s.enableVertexAttribArray(G),ut[G]=1),q[G]!==X&&(s.vertexAttribDivisor(G,X),q[G]=X)}function D(){const G=c.newAttributes,X=c.enabledAttributes;for(let tt=0,ut=X.length;tt<ut;tt++)X[tt]!==G[tt]&&(s.disableVertexAttribArray(tt),X[tt]=0)}function U(G,X,tt,ut,q,F,H){H===!0?s.vertexAttribIPointer(G,X,tt,q,F):s.vertexAttribPointer(G,X,tt,ut,q,F)}function R(G,X,tt,ut){T();const q=ut.attributes,F=tt.getAttributes(),H=X.defaultAttributeValues;for(const $ in F){const dt=F[$];if(dt.location>=0){let bt=q[$];if(bt===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(bt=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(bt=G.instanceColor)),bt!==void 0){const I=bt.normalized,Q=bt.itemSize,Mt=t.get(bt);if(Mt===void 0)continue;const wt=Mt.buffer,Nt=Mt.type,et=Mt.bytesPerElement,St=Nt===s.INT||Nt===s.UNSIGNED_INT||bt.gpuType===Bm;if(bt.isInterleavedBufferAttribute){const xt=bt.data,Ht=xt.stride,se=bt.offset;if(xt.isInstancedInterleavedBuffer){for(let $t=0;$t<dt.locationSize;$t++)S(dt.location+$t,xt.meshPerAttribute);G.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let $t=0;$t<dt.locationSize;$t++)y(dt.location+$t);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let $t=0;$t<dt.locationSize;$t++)U(dt.location+$t,Q/dt.locationSize,Nt,I,Ht*et,(se+Q/dt.locationSize*$t)*et,St)}else{if(bt.isInstancedBufferAttribute){for(let xt=0;xt<dt.locationSize;xt++)S(dt.location+xt,bt.meshPerAttribute);G.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let xt=0;xt<dt.locationSize;xt++)y(dt.location+xt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let xt=0;xt<dt.locationSize;xt++)U(dt.location+xt,Q/dt.locationSize,Nt,I,Q*et,Q/dt.locationSize*xt*et,St)}}else if(H!==void 0){const I=H[$];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(dt.location,I);break;case 3:s.vertexAttrib3fv(dt.location,I);break;case 4:s.vertexAttrib4fv(dt.location,I);break;default:s.vertexAttrib1fv(dt.location,I)}}}}D()}function B(){P();for(const G in a){const X=a[G];for(const tt in X){const ut=X[tt];for(const q in ut){const F=ut[q];for(const H in F)_(F[H].object),delete F[H];delete ut[q]}}delete a[G]}}function N(G){if(a[G.id]===void 0)return;const X=a[G.id];for(const tt in X){const ut=X[tt];for(const q in ut){const F=ut[q];for(const H in F)_(F[H].object),delete F[H];delete ut[q]}}delete a[G.id]}function O(G){for(const X in a){const tt=a[X];for(const ut in tt){const q=tt[ut];if(q[G.id]===void 0)continue;const F=q[G.id];for(const H in F)_(F[H].object),delete F[H];delete q[G.id]}}}function A(G){for(const X in a){const tt=a[X],ut=G.isInstancedMesh===!0?G.id:0,q=tt[ut];if(q!==void 0){for(const F in q){const H=q[F];for(const $ in H)_(H[$].object),delete H[$];delete q[F]}delete tt[ut],Object.keys(tt).length===0&&delete a[X]}}}function P(){V(),u=!0,c!==o&&(c=o,d(c.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:P,resetDefaultState:V,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function JR(s,t,n){let a;function o(p){a=p}function c(p,d){s.drawArrays(a,p,d),n.update(d,a,1)}function u(p,d,_){_!==0&&(s.drawArraysInstanced(a,p,d,_),n.update(d,a,_))}function h(p,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,_);let g=0;for(let x=0;x<_;x++)g+=d[x];n.update(g,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function $R(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Di&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const A=O===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==wi&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!A)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(oe("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:R,maxSamples:B,samples:N}}function t3(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Us,h=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||a!==0||o;return o=g,a=v.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,x){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,S=s.get(v);if(!o||M===null||M.length===0||c&&!y)c?_(null):d();else{const D=c?0:a,U=D*4;let R=S.clippingState||null;p.value=R,R=_(M,g,U,x);for(let B=0;B!==U;++B)R[B]=n[B];S.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(v,g,x,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,M!==!0||y===null){const S=x+T*4,D=g.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let U=0,R=x;U!==T;++U,R+=4)u.copy(v[U]).applyMatrix4(D,h),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}const Ps=4,Ix=[.125,.215,.35,.446,.526,.582],pr=20,e3=256,Pl=new Af,zx=new ce;let vp=null,xp=0,yp=0,Sp=!1;const n3=new Z;class Fx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=n3}=c;vp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),Sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vp,xp,yp),this._renderer.xr.enabled=Sp,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vr||t.mapping===Ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vp=this._renderer.getRenderTarget(),xp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),Sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ui,format:Di,colorSpace:ff,depthBuffer:!1},o=Hx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=i3(c)),this._blurMaterial=s3(c,t,n),this._ggxMaterial=a3(c,t,n)}return o}_compileMaterial(t){const n=new xe(new Hn,t);this._renderer.compile(n,Pl)}_sceneToCubeUV(t,n,a,o,c){const p=new Ri(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(zx),v.toneMapping=pa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new zs,new Ci({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let S=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,S=!0):(y.color.copy(zx),S=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(p.up.set(0,d[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[U],c.y,c.z)):R===1?(p.up.set(0,0,d[U]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[U],c.z)):(p.up.set(0,d[U],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[U]));const B=this._cubeSize;xo(o,R*B,U>2?B:0,B,B),v.setRenderTarget(o),S&&v.render(T,p),v.render(t,p)}v.toneMapping=x,v.autoClear=g,t.background=D}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===vr||t.mapping===Ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;xo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Pl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,x=v*g,{_lodMax:M}=this,T=this._sizeLods[a],y=3*T*(a>M-Ps?a-M+Ps:0),S=4*(this._cubeSize-T);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=M-n,xo(c,y,S,3*T,2*T),o.setRenderTarget(c),o.render(h,Pl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-a,xo(t,y,S,3*T,2*T),o.setRenderTarget(t),o.render(h,Pl)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=d;const g=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*pr-1),T=c/M,y=isFinite(c)?1+Math.floor(_*T):pr;y>pr&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${pr}`);const S=[];let D=0;for(let O=0;O<pr;++O){const A=O/T,P=Math.exp(-A*A/2);S.push(P),O===0?D+=P:O<y&&(D+=2*P)}for(let O=0;O<S.length;O++)S[O]=S[O]/D;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:U}=this;g.dTheta.value=M,g.mipInt.value=U-a;const R=this._sizeLods[o],B=3*R*(o>U-Ps?o-U+Ps:0),N=4*(this._cubeSize-R);xo(n,B,N,3*R,2*R),p.setRenderTarget(n),p.render(v,Pl)}}function i3(s){const t=[],n=[],a=[];let o=s;const c=s-Ps+1+Ix.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let p=1/h;u>s-Ps?p=Ix[u-s+Ps-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,M=6,T=3,y=2,S=1,D=new Float32Array(T*M*x),U=new Float32Array(y*M*x),R=new Float32Array(S*M*x);for(let N=0;N<x;N++){const O=N%3*2/3-1,A=N>2?0:-1,P=[O,A,0,O+2/3,A,0,O+2/3,A+1,0,O,A,0,O+2/3,A+1,0,O,A+1,0];D.set(P,T*M*N),U.set(g,y*M*N);const V=[N,N,N,N,N,N];R.set(V,S*M*N)}const B=new Hn;B.setAttribute("position",new ni(D,T)),B.setAttribute("uv",new ni(U,y)),B.setAttribute("faceIndex",new ni(R,S)),a.push(new xe(B,null)),o>Ps&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Hx(s,t,n){const a=new ii(s,t,n);return a.texture.mapping=bf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function xo(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function a3(s,t,n){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function s3(s,t,n){const a=new Float32Array(pr),o=new Z(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Gx(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Vx(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class _S extends ii{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new uS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new zs(5,5,5),c=new Dn({name:"CubemapFromEquirect",uniforms:Co(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:da});c.uniforms.tEquirect.value=n;const u=new xe(o,c),h=n.minFilter;return n.minFilter===mr&&(n.minFilter=Qn),new rA(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function r3(s){let t=new WeakMap,n=new WeakMap,a=null;function o(g,x=!1){return g==null?null:x?u(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===kd||x===Xd)if(t.has(g)){const M=t.get(g).texture;return h(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const T=new _S(M.height);return T.fromEquirectangularTexture(s,g),t.set(g,T),g.addEventListener("dispose",d),h(T.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,M=x===kd||x===Xd,T=x===vr||x===Ro;if(M||T){let y=n.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return a===null&&(a=new Fx(s)),y=M?a.fromEquirectangular(g,y):a.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const D=g.image;return M&&D&&D.height>0||T&&D&&p(D)?(a===null&&(a=new Fx(s)),y=M?a.fromEquirectangular(g):a.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,x){return x===kd?g.mapping=vr:x===Xd&&(g.mapping=Ro),g}function p(g){let x=0;const M=6;for(let T=0;T<M;T++)g[T]!==void 0&&x++;return x===M}function d(g){const x=g.target;x.removeEventListener("dispose",d);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const M=n.get(x);M!==void 0&&(n.delete(x),M.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function o3(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&bo("WebGLRenderer: "+a+" extension not supported."),o}}}function l3(s,t,n,a){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const x=c.get(g);x&&(t.remove(x),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const x in g)t.update(g[x],s.ARRAY_BUFFER)}function d(v){const g=[],x=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(x!==null){const D=x.array;T=x.version;for(let U=0,R=D.length;U<R;U+=3){const B=D[U+0],N=D[U+1],O=D[U+2];g.push(B,N,N,O,O,B)}}else{const D=M.array;T=M.version;for(let U=0,R=D.length/3-1;U<R;U+=3){const B=U+0,N=U+1,O=U+2;g.push(B,N,N,O,O,B)}}const y=new(M.count>=65535?rS:sS)(g,1);y.version=T;const S=c.get(v);S&&t.remove(S),c.set(v,y)}function _(v){const g=c.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&d(v)}else d(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function c3(s,t,n){let a;function o(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function p(v,g){s.drawElements(a,g,c,v*u),n.update(g,a,1)}function d(v,g,x){x!==0&&(s.drawElementsInstanced(a,g,c,v*u,x),n.update(g,a,x))}function _(v,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,x);let T=0;for(let y=0;y<x;y++)T+=g[y];n.update(T,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function u3(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:Ce("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function f3(s,t,n){const a=new WeakMap,o=new mn;function c(u,h,p){const d=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let V=function(){A.dispose(),a.delete(h),h.removeEventListener("dispose",V)};var x=V;g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let B=h.attributes.position.count*R,N=1;B>t.maxTextureSize&&(N=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const O=new Float32Array(B*N*4*v),A=new iS(O,B,N,v);A.type=Vi,A.needsUpdate=!0;const P=R*4;for(let G=0;G<v;G++){const X=S[G],tt=D[G],ut=U[G],q=B*N*4*G;for(let F=0;F<X.count;F++){const H=F*P;M===!0&&(o.fromBufferAttribute(X,F),O[q+H+0]=o.x,O[q+H+1]=o.y,O[q+H+2]=o.z,O[q+H+3]=0),T===!0&&(o.fromBufferAttribute(tt,F),O[q+H+4]=o.x,O[q+H+5]=o.y,O[q+H+6]=o.z,O[q+H+7]=0),y===!0&&(o.fromBufferAttribute(ut,F),O[q+H+8]=o.x,O[q+H+9]=o.y,O[q+H+10]=o.z,O[q+H+11]=ut.itemSize===4?o.w:1)}}g={count:v,texture:A,size:new Yt(B,N)},a.set(h,g),h.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<d.length;y++)M+=d[y];const T=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function h3(s,t,n,a,o){let c=new WeakMap;function u(d){const _=o.render.frame,v=d.geometry,g=t.get(d,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==_&&(n.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return g}function h(){c=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const d3={[Vy]:"LINEAR_TONE_MAPPING",[ky]:"REINHARD_TONE_MAPPING",[Xy]:"CINEON_TONE_MAPPING",[Om]:"ACES_FILMIC_TONE_MAPPING",[qy]:"AGX_TONE_MAPPING",[Yy]:"NEUTRAL_TONE_MAPPING",[Wy]:"CUSTOM_TONE_MAPPING"};function p3(s,t,n,a,o,c){const u=new ii(t,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new wo(t,n):void 0}),h=new ii(t,n,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),p=new Hn;p.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new gn([0,2,0,0,2,0],2));const d=new $T({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new xe(p,d),v=new Af(-1,1,1,-1,0,1);let g=null,x=null,M=!1,T,y=null,S=[],D=!1;this.setSize=function(U,R){u.setSize(U,R),h.setSize(U,R);for(let B=0;B<S.length;B++){const N=S[B];N.setSize&&N.setSize(U,R)}},this.setEffects=function(U){S=U,D=S.length>0&&S[0].isRenderPass===!0;const R=u.width,B=u.height;for(let N=0;N<S.length;N++){const O=S[N];O.setSize&&O.setSize(R,B)}},this.begin=function(U,R){if(M||U.toneMapping===pa&&S.length===0)return!1;if(y=R,R!==null){const B=R.width,N=R.height;(u.width!==B||u.height!==N)&&this.setSize(B,N)}return D===!1&&U.setRenderTarget(u),T=U.toneMapping,U.toneMapping=pa,!0},this.hasRenderPass=function(){return D},this.end=function(U,R){U.toneMapping=T,M=!0;let B=u,N=h;for(let O=0;O<S.length;O++){const A=S[O];if(A.enabled!==!1&&(A.render(U,N,B,R),A.needsSwap!==!1)){const P=B;B=N,N=P}}if(g!==U.outputColorSpace||x!==U.toneMapping){g=U.outputColorSpace,x=U.toneMapping,d.defines={},De.getTransfer(g)===Ve&&(d.defines.SRGB_TRANSFER="");const O=d3[x];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=B.texture,U.setRenderTarget(y),U.render(_,v),y=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),p.dispose(),d.dispose()}}const vS=new Jn,Sm=new wo(1,1),xS=new iS,yS=new wT,SS=new uS,kx=[],Xx=[],Wx=new Float32Array(16),qx=new Float32Array(9),Yx=new Float32Array(4);function No(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=kx[o];if(c===void 0&&(c=new Float32Array(o),kx[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function Bn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function In(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function wf(s,t){let n=Xx[t];n===void 0&&(n=new Int32Array(t),Xx[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function m3(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function g3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bn(n,t))return;s.uniform2fv(this.addr,t),In(n,t)}}function _3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Bn(n,t))return;s.uniform3fv(this.addr,t),In(n,t)}}function v3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bn(n,t))return;s.uniform4fv(this.addr,t),In(n,t)}}function x3(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Bn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),In(n,t)}else{if(Bn(n,a))return;Yx.set(a),s.uniformMatrix2fv(this.addr,!1,Yx),In(n,a)}}function y3(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Bn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),In(n,t)}else{if(Bn(n,a))return;qx.set(a),s.uniformMatrix3fv(this.addr,!1,qx),In(n,a)}}function S3(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Bn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),In(n,t)}else{if(Bn(n,a))return;Wx.set(a),s.uniformMatrix4fv(this.addr,!1,Wx),In(n,a)}}function M3(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function b3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bn(n,t))return;s.uniform2iv(this.addr,t),In(n,t)}}function E3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bn(n,t))return;s.uniform3iv(this.addr,t),In(n,t)}}function T3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bn(n,t))return;s.uniform4iv(this.addr,t),In(n,t)}}function A3(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function R3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Bn(n,t))return;s.uniform2uiv(this.addr,t),In(n,t)}}function w3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Bn(n,t))return;s.uniform3uiv(this.addr,t),In(n,t)}}function C3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Bn(n,t))return;s.uniform4uiv(this.addr,t),In(n,t)}}function D3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Sm.compareFunction=n.isReversedDepthBuffer()?km:Vm,c=Sm):c=vS,n.setTexture2D(t||c,o)}function U3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||yS,o)}function L3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||SS,o)}function N3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||xS,o)}function P3(s){switch(s){case 5126:return m3;case 35664:return g3;case 35665:return _3;case 35666:return v3;case 35674:return x3;case 35675:return y3;case 35676:return S3;case 5124:case 35670:return M3;case 35667:case 35671:return b3;case 35668:case 35672:return E3;case 35669:case 35673:return T3;case 5125:return A3;case 36294:return R3;case 36295:return w3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return D3;case 35679:case 36299:case 36307:return U3;case 35680:case 36300:case 36308:case 36293:return L3;case 36289:case 36303:case 36311:case 36292:return N3}}function O3(s,t){s.uniform1fv(this.addr,t)}function B3(s,t){const n=No(t,this.size,2);s.uniform2fv(this.addr,n)}function I3(s,t){const n=No(t,this.size,3);s.uniform3fv(this.addr,n)}function z3(s,t){const n=No(t,this.size,4);s.uniform4fv(this.addr,n)}function F3(s,t){const n=No(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function H3(s,t){const n=No(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function G3(s,t){const n=No(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function V3(s,t){s.uniform1iv(this.addr,t)}function k3(s,t){s.uniform2iv(this.addr,t)}function X3(s,t){s.uniform3iv(this.addr,t)}function W3(s,t){s.uniform4iv(this.addr,t)}function q3(s,t){s.uniform1uiv(this.addr,t)}function Y3(s,t){s.uniform2uiv(this.addr,t)}function Z3(s,t){s.uniform3uiv(this.addr,t)}function K3(s,t){s.uniform4uiv(this.addr,t)}function Q3(s,t,n){const a=this.cache,o=t.length,c=wf(n,o);Bn(a,c)||(s.uniform1iv(this.addr,c),In(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=Sm:u=vS;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function j3(s,t,n){const a=this.cache,o=t.length,c=wf(n,o);Bn(a,c)||(s.uniform1iv(this.addr,c),In(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||yS,c[u])}function J3(s,t,n){const a=this.cache,o=t.length,c=wf(n,o);Bn(a,c)||(s.uniform1iv(this.addr,c),In(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||SS,c[u])}function $3(s,t,n){const a=this.cache,o=t.length,c=wf(n,o);Bn(a,c)||(s.uniform1iv(this.addr,c),In(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||xS,c[u])}function tw(s){switch(s){case 5126:return O3;case 35664:return B3;case 35665:return I3;case 35666:return z3;case 35674:return F3;case 35675:return H3;case 35676:return G3;case 5124:case 35670:return V3;case 35667:case 35671:return k3;case 35668:case 35672:return X3;case 35669:case 35673:return W3;case 5125:return q3;case 36294:return Y3;case 36295:return Z3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Q3;case 35679:case 36299:case 36307:return j3;case 35680:case 36300:case 36308:case 36293:return J3;case 36289:case 36303:case 36311:case 36292:return $3}}class ew{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=P3(n.type)}}class nw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tw(n.type)}}class iw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const Mp=/(\w+)(\])?(\[|\.)?/g;function Zx(s,t){s.seq.push(t),s.map[t.id]=t}function aw(s,t,n){const a=s.name,o=a.length;for(Mp.lastIndex=0;;){const c=Mp.exec(a),u=Mp.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){Zx(n,d===void 0?new ew(h,s,t):new nw(h,s,t));break}else{let v=n.map[h];v===void 0&&(v=new iw(h),Zx(n,v)),n=v}}}class af{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=t.getActiveUniform(n,u),p=t.getUniformLocation(n,h.name);aw(h,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function Kx(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const sw=37297;let rw=0;function ow(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const Qx=new he;function lw(s){De._getMatrix(Qx,De.workingColorSpace,s);const t=`mat3( ${Qx.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(s)){case hf:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function jx(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+ow(s.getShaderSource(t),h)}else return c}function cw(s,t){const n=lw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const uw={[Vy]:"Linear",[ky]:"Reinhard",[Xy]:"Cineon",[Om]:"ACESFilmic",[qy]:"AgX",[Yy]:"Neutral",[Wy]:"Custom"};function fw(s,t){const n=uw[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xu=new Z;function hw(){De.getLuminanceCoefficients(Xu);const s=Xu.x.toFixed(4),t=Xu.y.toFixed(4),n=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function pw(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function mw(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function Il(s){return s!==""}function Jx(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $x(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mm(s){return s.replace(gw,vw)}const _w=new Map;function vw(s,t){let n=_e[t];if(n===void 0){const a=_w.get(t);if(a!==void 0)n=_e[a],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mm(n)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ty(s){return s.replace(xw,yw)}function yw(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ey(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Sw={[Ju]:"SHADOWMAP_TYPE_PCF",[Bl]:"SHADOWMAP_TYPE_VSM"};function Mw(s){return Sw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bw={[vr]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[bf]:"ENVMAP_TYPE_CUBE_UV"};function Ew(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":bw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Tw={[Ro]:"ENVMAP_MODE_REFRACTION"};function Aw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Rw={[Gy]:"ENVMAP_BLENDING_MULTIPLY",[qE]:"ENVMAP_BLENDING_MIX",[YE]:"ENVMAP_BLENDING_ADD"};function ww(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Rw[s.combine]||"ENVMAP_BLENDING_NONE"}function Cw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function Dw(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=Mw(n),d=Ew(n),_=Aw(n),v=ww(n),g=Cw(n),x=dw(n),M=pw(c),T=o.createProgram();let y,S,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Il).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Il).join(`
`),S.length>0&&(S+=`
`)):(y=[ey(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),S=[ey(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pa?"#define TONE_MAPPING":"",n.toneMapping!==pa?_e.tonemapping_pars_fragment:"",n.toneMapping!==pa?fw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,cw("linearToOutputTexel",n.outputColorSpace),hw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Il).join(`
`)),u=Mm(u),u=Jx(u,n),u=$x(u,n),h=Mm(h),h=Jx(h,n),h=$x(h,n),u=ty(u),h=ty(h),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===sx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=D+y+u,R=D+S+h,B=Kx(o,o.VERTEX_SHADER,U),N=Kx(o,o.FRAGMENT_SHADER,R);o.attachShader(T,B),o.attachShader(T,N),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(G){if(s.debug.checkShaderErrors){const X=o.getProgramInfoLog(T)||"",tt=o.getShaderInfoLog(B)||"",ut=o.getShaderInfoLog(N)||"",q=X.trim(),F=tt.trim(),H=ut.trim();let $=!0,dt=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,B,N);else{const bt=jx(o,B,"vertex"),I=jx(o,N,"fragment");Ce("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+q+`
`+bt+`
`+I)}else q!==""?oe("WebGLProgram: Program Info Log:",q):(F===""||H==="")&&(dt=!1);dt&&(G.diagnostics={runnable:$,programLog:q,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:S}})}o.deleteShader(B),o.deleteShader(N),A=new af(o,T),P=mw(o,T)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(T,sw)),V},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rw++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=N,this}let Uw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new Nw(t),n.set(t,a)),a}}class Nw{constructor(t){this.id=Uw++,this.code=t,this.usedTimes=0}}function Pw(s){return s===xr||s===cf||s===uf}function Ow(s,t,n,a,o,c){const u=new qm,h=new Lw,p=new Set,d=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return p.add(A),A===0?"uv":`uv${A}`}function T(A,P,V,G,X,tt){const ut=G.fog,q=X.geometry,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,$=t.get(A.envMap||F,H),dt=$&&$.mapping===bf?$.image.height:null,bt=x[A.type];A.precision!==null&&(g=a.getMaxPrecision(A.precision),g!==A.precision&&oe("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const I=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=I!==void 0?I.length:0;let Mt=0;q.morphAttributes.position!==void 0&&(Mt=1),q.morphAttributes.normal!==void 0&&(Mt=2),q.morphAttributes.color!==void 0&&(Mt=3);let wt,Nt,et,St;if(bt){const Wt=ua[bt];wt=Wt.vertexShader,Nt=Wt.fragmentShader}else{wt=A.vertexShader,Nt=A.fragmentShader;const Wt=h.getVertexShaderStage(A),ln=h.getFragmentShaderStage(A);h.update(A,Wt,ln),et=Wt.id,St=ln.id}const xt=s.getRenderTarget(),Ht=s.state.buffers.depth.getReversed(),se=X.isInstancedMesh===!0,$t=X.isBatchedMesh===!0,Qe=!!A.map,ue=!!A.matcap,ve=!!$,Se=!!A.aoMap,ge=!!A.lightMap,en=!!A.bumpMap&&A.wireframe===!1,rn=!!A.normalMap,je=!!A.displacementMap,pn=!!A.emissiveMap,We=!!A.metalnessMap,on=!!A.roughnessMap,z=A.anisotropy>0,Zt=A.clearcoat>0,Xt=A.dispersion>0,L=A.iridescence>0,E=A.sheen>0,j=A.transmission>0,nt=z&&!!A.anisotropyMap,ht=Zt&&!!A.clearcoatMap,Tt=Zt&&!!A.clearcoatNormalMap,Ut=Zt&&!!A.clearcoatRoughnessMap,pt=L&&!!A.iridescenceMap,mt=L&&!!A.iridescenceThicknessMap,Dt=E&&!!A.sheenColorMap,Gt=E&&!!A.sheenRoughnessMap,Bt=!!A.specularMap,Pt=!!A.specularColorMap,ee=!!A.specularIntensityMap,ne=j&&!!A.transmissionMap,le=j&&!!A.thicknessMap,Y=!!A.gradientMap,Ct=!!A.alphaMap,_t=A.alphaTest>0,Lt=!!A.alphaHash,Ft=!!A.extensions;let Et=pa;A.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Et=s.toneMapping);const jt={shaderID:bt,shaderType:A.type,shaderName:A.name,vertexShader:wt,fragmentShader:Nt,defines:A.defines,customVertexShaderID:et,customFragmentShaderID:St,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:$t,batchingColor:$t&&X._colorsTexture!==null,instancing:se,instancingColor:se&&X.instanceColor!==null,instancingMorph:se&&X.morphTexture!==null,outputColorSpace:xt===null?s.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Qe,matcap:ue,envMap:ve,envMapMode:ve&&$.mapping,envMapCubeUVHeight:dt,aoMap:Se,lightMap:ge,bumpMap:en,normalMap:rn,displacementMap:je,emissiveMap:pn,normalMapObjectSpace:rn&&A.normalMapType===QE,normalMapTangentSpace:rn&&A.normalMapType===_m,packedNormalMap:rn&&A.normalMapType===_m&&Pw(A.normalMap.format),metalnessMap:We,roughnessMap:on,anisotropy:z,anisotropyMap:nt,clearcoat:Zt,clearcoatMap:ht,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ut,dispersion:Xt,iridescence:L,iridescenceMap:pt,iridescenceThicknessMap:mt,sheen:E,sheenColorMap:Dt,sheenRoughnessMap:Gt,specularMap:Bt,specularColorMap:Pt,specularIntensityMap:ee,transmission:j,transmissionMap:ne,thicknessMap:le,gradientMap:Y,opaque:A.transparent===!1&&A.blending===_r&&A.alphaToCoverage===!1,alphaMap:Ct,alphaTest:_t,alphaHash:Lt,combine:A.combine,mapUv:Qe&&M(A.map.channel),aoMapUv:Se&&M(A.aoMap.channel),lightMapUv:ge&&M(A.lightMap.channel),bumpMapUv:en&&M(A.bumpMap.channel),normalMapUv:rn&&M(A.normalMap.channel),displacementMapUv:je&&M(A.displacementMap.channel),emissiveMapUv:pn&&M(A.emissiveMap.channel),metalnessMapUv:We&&M(A.metalnessMap.channel),roughnessMapUv:on&&M(A.roughnessMap.channel),anisotropyMapUv:nt&&M(A.anisotropyMap.channel),clearcoatMapUv:ht&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&M(A.sheenRoughnessMap.channel),specularMapUv:Bt&&M(A.specularMap.channel),specularColorMapUv:Pt&&M(A.specularColorMap.channel),specularIntensityMapUv:ee&&M(A.specularIntensityMap.channel),transmissionMapUv:ne&&M(A.transmissionMap.channel),thicknessMapUv:le&&M(A.thicknessMap.channel),alphaMapUv:Ct&&M(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rn||z),vertexNormals:!!q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(Qe||Ct),fog:!!ut,useFog:A.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||q.attributes.normal===void 0&&rn===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Mt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Et,decodeVideoTexture:Qe&&A.map.isVideoTexture===!0&&De.getTransfer(A.map.colorSpace)===Ve,decodeVideoTextureEmissive:pn&&A.emissiveMap.isVideoTexture===!0&&De.getTransfer(A.emissiveMap.colorSpace)===Ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ji,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ft&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&A.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return jt.vertexUv1s=p.has(1),jt.vertexUv2s=p.has(2),jt.vertexUv3s=p.has(3),p.clear(),jt}function y(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)P.push(V),P.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(S(P,A),D(P,A),P.push(s.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function S(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function D(A,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),A.push(u.mask)}function U(A){const P=x[A.type];let V;if(P){const G=ua[P];V=gf.clone(G.uniforms)}else V=A.uniforms;return V}function R(A,P){let V=_.get(P);return V!==void 0?++V.usedTimes:(V=new Dw(s,P,A,o),d.push(V),_.set(P,V)),V}function B(A){if(--A.usedTimes===0){const P=d.indexOf(A);d[P]=d[d.length-1],d.pop(),_.delete(A.cacheKey),A.destroy()}}function N(A){h.remove(A)}function O(){h.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:U,acquireProgram:R,releaseProgram:B,releaseShaderCache:N,programs:d,dispose:O}}function Bw(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,p){s.get(u)[h]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function Iw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ny(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function iy(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function h(g,x,M,T,y,S){let D=s[t];return D===void 0?(D={id:g.id,object:g,geometry:x,material:M,materialVariant:u(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:S},s[t]=D):(D.id=g.id,D.object=g,D.geometry=x,D.material=M,D.materialVariant=u(g),D.groupOrder=T,D.renderOrder=g.renderOrder,D.z=y,D.group=S),t++,D}function p(g,x,M,T,y,S){const D=h(g,x,M,T,y,S);M.transmission>0?a.push(D):M.transparent===!0?o.push(D):n.push(D)}function d(g,x,M,T,y,S){const D=h(g,x,M,T,y,S);M.transmission>0?a.unshift(D):M.transparent===!0?o.unshift(D):n.unshift(D)}function _(g,x,M){n.length>1&&n.sort(g||Iw),a.length>1&&a.sort(x||ny),o.length>1&&o.sort(x||ny),M&&(n.reverse(),a.reverse(),o.reverse())}function v(){for(let g=t,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:d,finish:v,sort:_}}function zw(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new iy,s.set(a,[u])):o>=c.length?(u=new iy,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function Fw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new ce};break;case"SpotLight":n={position:new Z,direction:new Z,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":n={color:new ce,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[t.id]=n,n}}}function Hw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let Gw=0;function Vw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function kw(s){const t=new Fw,n=Hw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Z);const o=new Z,c=new sn,u=new sn;function h(d){let _=0,v=0,g=0;for(let P=0;P<9;P++)a.probe[P].set(0,0,0);let x=0,M=0,T=0,y=0,S=0,D=0,U=0,R=0,B=0,N=0,O=0;d.sort(Vw);for(let P=0,V=d.length;P<V;P++){const G=d[P],X=G.color,tt=G.intensity,ut=G.distance;let q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===xr?q=G.shadow.map.texture:q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=X.r*tt,v+=X.g*tt,g+=X.b*tt;else if(G.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(G.sh.coefficients[F],tt);O++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=n.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,a.directionalShadow[x]=$,a.directionalShadowMap[x]=q,a.directionalShadowMatrix[x]=G.shadow.matrix,D++}a.directional[x]=F,x++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(X).multiplyScalar(tt),F.distance=ut,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,a.spot[T]=F;const H=G.shadow;if(G.map&&(a.spotLightMap[B]=G.map,B++,H.updateMatrices(G),G.castShadow&&N++),a.spotLightMatrix[T]=H.matrix,G.castShadow){const $=n.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,a.spotShadow[T]=$,a.spotShadowMap[T]=q,R++}T++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(X).multiplyScalar(tt),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=F,y++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,$=n.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,a.pointShadow[M]=$,a.pointShadowMap[M]=q,a.pointShadowMatrix[M]=G.shadow.matrix,U++}a.point[M]=F,M++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(tt),F.groundColor.copy(G.groundColor).multiplyScalar(tt),a.hemi[S]=F,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=zt.LTC_FLOAT_1,a.rectAreaLTC2=zt.LTC_FLOAT_2):(a.rectAreaLTC1=zt.LTC_HALF_1,a.rectAreaLTC2=zt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const A=a.hash;(A.directionalLength!==x||A.pointLength!==M||A.spotLength!==T||A.rectAreaLength!==y||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==U||A.numSpotShadows!==R||A.numSpotMaps!==B||A.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=y,a.point.length=M,a.hemi.length=S,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=R+B-N,a.spotLightMap.length=B,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=O,A.directionalLength=x,A.pointLength=M,A.spotLength=T,A.rectAreaLength=y,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=U,A.numSpotShadows=R,A.numSpotMaps=B,A.numLightProbes=O,a.version=Gw++)}function p(d,_){let v=0,g=0,x=0,M=0,T=0;const y=_.matrixWorldInverse;for(let S=0,D=d.length;S<D;S++){const U=d[S];if(U.isDirectionalLight){const R=a.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(U.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(U.isRectAreaLight){const R=a.rectArea[M];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(U.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const R=a.point[g];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),g++}else if(U.isHemisphereLight){const R=a.hemi[T];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:a}}function ay(s){const t=new kw(s),n=[],a=[],o=[];function c(g){v.camera=g,n.length=0,a.length=0,o.length=0}function u(g){n.push(g)}function h(g){a.push(g)}function p(g){o.push(g)}function d(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function Xw(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new ay(s),t.set(o,[h])):c>=u.length?(h=new ay(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Zw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],sy=new sn,Ol=new Z,bp=new Z;function Kw(s,t,n){let a=new Zm;const o=new Yt,c=new Yt,u=new mn,h=new tA,p=new eA,d={},_=n.maxTextureSize,v={[Os]:jn,[jn]:Os,[Ji]:Ji},g=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Ww,fragmentShader:qw}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new Hn;M.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xe(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let S=this.type;this.render=function(N,O,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===Hy&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ju);const P=s.getRenderTarget(),V=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),X=s.state;X.setBlending(da),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const tt=S!==this.type;tt&&O.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(q=>q.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,q=N.length;ut<q;ut++){const F=N[ut],H=F.shadow;if(H===void 0){oe("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();o.multiply($),c.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/$.x),o.x=c.x*$.x,H.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/$.y),o.y=c.y*$.y,H.mapSize.y=c.y));const dt=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=dt,H.map===null||tt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Bl){if(F.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ii(o.x,o.y,{format:xr,type:Ui,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new wo(o.x,o.y,Vi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn}else F.isPointLight?(H.map=new _S(o.x),H.map.depthTexture=new KT(o.x,_a)):(H.map=new ii(o.x,o.y),H.map.depthTexture=new wo(o.x,o.y,_a)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Wa,this.type===Ju?(H.map.depthTexture.compareFunction=dt?km:Vm,H.map.depthTexture.minFilter=Qn,H.map.depthTexture.magFilter=Qn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn);H.camera.updateProjectionMatrix()}const bt=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<bt;I++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,I),s.clear();else{I===0&&(s.setRenderTarget(H.map),s.clear());const Q=H.getViewport(I);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),X.viewport(u)}if(F.isPointLight){const Q=H.camera,Mt=H.matrix,wt=F.distance||Q.far;wt!==Q.far&&(Q.far=wt,Q.updateProjectionMatrix()),Ol.setFromMatrixPosition(F.matrixWorld),Q.position.copy(Ol),bp.copy(Q.position),bp.add(Yw[I]),Q.up.copy(Zw[I]),Q.lookAt(bp),Q.updateMatrixWorld(),Mt.makeTranslation(-Ol.x,-Ol.y,-Ol.z),sy.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sy,Q.coordinateSystem,Q.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),R(O,A,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Bl&&D(H,A),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(P,V,G)};function D(N,O){const A=t.update(T);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ii(o.x,o.y,{format:xr,type:Ui})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(O,null,A,g,T,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(O,null,A,x,T,null)}function U(N,O,A,P){let V=null;const G=A.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)V=G;else if(V=A.isPointLight===!0?p:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const X=V.uuid,tt=O.uuid;let ut=d[X];ut===void 0&&(ut={},d[X]=ut);let q=ut[tt];q===void 0&&(q=V.clone(),ut[tt]=q,O.addEventListener("dispose",B)),V=q}if(V.visible=O.visible,V.wireframe=O.wireframe,P===Bl?V.side=O.shadowSide!==null?O.shadowSide:O.side:V.side=O.shadowSide!==null?O.shadowSide:v[O.side],V.alphaMap=O.alphaMap,V.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,V.map=O.map,V.clipShadows=O.clipShadows,V.clippingPlanes=O.clippingPlanes,V.clipIntersection=O.clipIntersection,V.displacementMap=O.displacementMap,V.displacementScale=O.displacementScale,V.displacementBias=O.displacementBias,V.wireframeLinewidth=O.wireframeLinewidth,V.linewidth=O.linewidth,A.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const X=s.properties.get(V);X.light=A}return V}function R(N,O,A,P,V){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===Bl)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,N.matrixWorld);const tt=t.update(N),ut=N.material;if(Array.isArray(ut)){const q=tt.groups;for(let F=0,H=q.length;F<H;F++){const $=q[F],dt=ut[$.materialIndex];if(dt&&dt.visible){const bt=U(N,dt,P,V);N.onBeforeShadow(s,N,O,A,tt,bt,$),s.renderBufferDirect(A,null,tt,bt,N,$),N.onAfterShadow(s,N,O,A,tt,bt,$)}}}else if(ut.visible){const q=U(N,ut,P,V);N.onBeforeShadow(s,N,O,A,tt,q,null),s.renderBufferDirect(A,null,tt,q,N,null),N.onAfterShadow(s,N,O,A,tt,q,null)}}const X=N.children;for(let tt=0,ut=X.length;tt<ut;tt++)R(X[tt],O,A,P,V)}function B(N){N.target.removeEventListener("dispose",B);for(const A in d){const P=d[A],V=N.target.uuid;V in P&&(P[V].dispose(),delete P[V])}}}function Qw(s,t){function n(){let Y=!1;const Ct=new mn;let _t=null;const Lt=new mn(0,0,0,0);return{setMask:function(Ft){_t!==Ft&&!Y&&(s.colorMask(Ft,Ft,Ft,Ft),_t=Ft)},setLocked:function(Ft){Y=Ft},setClear:function(Ft,Et,jt,Wt,ln){ln===!0&&(Ft*=Wt,Et*=Wt,jt*=Wt),Ct.set(Ft,Et,jt,Wt),Lt.equals(Ct)===!1&&(s.clearColor(Ft,Et,jt,Wt),Lt.copy(Ct))},reset:function(){Y=!1,_t=null,Lt.set(-1,0,0,0)}}}function a(){let Y=!1,Ct=!1,_t=null,Lt=null,Ft=null;return{setReversed:function(Et){if(Ct!==Et){const jt=t.get("EXT_clip_control");Et?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const Wt=Ft;Ft=null,this.setClear(Wt)}},getReversed:function(){return Ct},setTest:function(Et){Et?xt(s.DEPTH_TEST):Ht(s.DEPTH_TEST)},setMask:function(Et){_t!==Et&&!Y&&(s.depthMask(Et),_t=Et)},setFunc:function(Et){if(Ct&&(Et=rT[Et]),Lt!==Et){switch(Et){case Np:s.depthFunc(s.NEVER);break;case Pp:s.depthFunc(s.ALWAYS);break;case Op:s.depthFunc(s.LESS);break;case Ao:s.depthFunc(s.LEQUAL);break;case Bp:s.depthFunc(s.EQUAL);break;case Ip:s.depthFunc(s.GEQUAL);break;case zp:s.depthFunc(s.GREATER);break;case Fp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Lt=Et}},setLocked:function(Et){Y=Et},setClear:function(Et){Ft!==Et&&(Ft=Et,Ct&&(Et=1-Et),s.clearDepth(Et))},reset:function(){Y=!1,_t=null,Lt=null,Ft=null,Ct=!1}}}function o(){let Y=!1,Ct=null,_t=null,Lt=null,Ft=null,Et=null,jt=null,Wt=null,ln=null;return{setTest:function(Be){Y||(Be?xt(s.STENCIL_TEST):Ht(s.STENCIL_TEST))},setMask:function(Be){Ct!==Be&&!Y&&(s.stencilMask(Be),Ct=Be)},setFunc:function(Be,pi,mi){(_t!==Be||Lt!==pi||Ft!==mi)&&(s.stencilFunc(Be,pi,mi),_t=Be,Lt=pi,Ft=mi)},setOp:function(Be,pi,mi){(Et!==Be||jt!==pi||Wt!==mi)&&(s.stencilOp(Be,pi,mi),Et=Be,jt=pi,Wt=mi)},setLocked:function(Be){Y=Be},setClear:function(Be){ln!==Be&&(s.clearStencil(Be),ln=Be)},reset:function(){Y=!1,Ct=null,_t=null,Lt=null,Ft=null,Et=null,jt=null,Wt=null,ln=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,d=new WeakMap;let _={},v={},g={},x=new WeakMap,M=[],T=null,y=!1,S=null,D=null,U=null,R=null,B=null,N=null,O=null,A=new ce(0,0,0),P=0,V=!1,G=null,X=null,tt=null,ut=null,q=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const dt=s.getParameter(s.VERSION);dt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(dt)[1]),H=$>=1):dt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),H=$>=2);let bt=null,I={};const Q=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),wt=new mn().fromArray(Q),Nt=new mn().fromArray(Mt);function et(Y,Ct,_t,Lt){const Ft=new Uint8Array(4),Et=s.createTexture();s.bindTexture(Y,Et),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<_t;jt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,Ft):s.texImage2D(Ct+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ft);return Et}const St={};St[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),xt(s.DEPTH_TEST),u.setFunc(Ao),en(!1),rn(ex),xt(s.CULL_FACE),Se(da);function xt(Y){_[Y]!==!0&&(s.enable(Y),_[Y]=!0)}function Ht(Y){_[Y]!==!1&&(s.disable(Y),_[Y]=!1)}function se(Y,Ct){return g[Y]!==Ct?(s.bindFramebuffer(Y,Ct),g[Y]=Ct,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ct),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function $t(Y,Ct){let _t=M,Lt=!1;if(Y){_t=x.get(Ct),_t===void 0&&(_t=[],x.set(Ct,_t));const Ft=Y.textures;if(_t.length!==Ft.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,jt=Ft.length;Et<jt;Et++)_t[Et]=s.COLOR_ATTACHMENT0+Et;_t.length=Ft.length,Lt=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,Lt=!0);Lt&&s.drawBuffers(_t)}function Qe(Y){return T!==Y?(s.useProgram(Y),T=Y,!0):!1}const ue={[dr]:s.FUNC_ADD,[CE]:s.FUNC_SUBTRACT,[DE]:s.FUNC_REVERSE_SUBTRACT};ue[UE]=s.MIN,ue[LE]=s.MAX;const ve={[NE]:s.ZERO,[PE]:s.ONE,[OE]:s.SRC_COLOR,[Up]:s.SRC_ALPHA,[GE]:s.SRC_ALPHA_SATURATE,[FE]:s.DST_COLOR,[IE]:s.DST_ALPHA,[BE]:s.ONE_MINUS_SRC_COLOR,[Lp]:s.ONE_MINUS_SRC_ALPHA,[HE]:s.ONE_MINUS_DST_COLOR,[zE]:s.ONE_MINUS_DST_ALPHA,[VE]:s.CONSTANT_COLOR,[kE]:s.ONE_MINUS_CONSTANT_COLOR,[XE]:s.CONSTANT_ALPHA,[WE]:s.ONE_MINUS_CONSTANT_ALPHA};function Se(Y,Ct,_t,Lt,Ft,Et,jt,Wt,ln,Be){if(Y===da){y===!0&&(Ht(s.BLEND),y=!1);return}if(y===!1&&(xt(s.BLEND),y=!0),Y!==wE){if(Y!==S||Be!==V){if((D!==dr||B!==dr)&&(s.blendEquation(s.FUNC_ADD),D=dr,B=dr),Be)switch(Y){case _r:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lf:s.blendFunc(s.ONE,s.ONE);break;case nx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ix:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ce("WebGLState: Invalid blending: ",Y);break}else switch(Y){case _r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nx:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ix:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",Y);break}U=null,R=null,N=null,O=null,A.set(0,0,0),P=0,S=Y,V=Be}return}Ft=Ft||Ct,Et=Et||_t,jt=jt||Lt,(Ct!==D||Ft!==B)&&(s.blendEquationSeparate(ue[Ct],ue[Ft]),D=Ct,B=Ft),(_t!==U||Lt!==R||Et!==N||jt!==O)&&(s.blendFuncSeparate(ve[_t],ve[Lt],ve[Et],ve[jt]),U=_t,R=Lt,N=Et,O=jt),(Wt.equals(A)===!1||ln!==P)&&(s.blendColor(Wt.r,Wt.g,Wt.b,ln),A.copy(Wt),P=ln),S=Y,V=!1}function ge(Y,Ct){Y.side===Ji?Ht(s.CULL_FACE):xt(s.CULL_FACE);let _t=Y.side===jn;Ct&&(_t=!_t),en(_t),Y.blending===_r&&Y.transparent===!1?Se(da):Se(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Lt=Y.stencilWrite;h.setTest(Lt),Lt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),pn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function en(Y){G!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),G=Y)}function rn(Y){Y!==AE?(xt(s.CULL_FACE),Y!==X&&(Y===ex?s.cullFace(s.BACK):Y===RE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ht(s.CULL_FACE),X=Y}function je(Y){Y!==tt&&(H&&s.lineWidth(Y),tt=Y)}function pn(Y,Ct,_t){Y?(xt(s.POLYGON_OFFSET_FILL),(ut!==Ct||q!==_t)&&(ut=Ct,q=_t,u.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,_t))):Ht(s.POLYGON_OFFSET_FILL)}function We(Y){Y?xt(s.SCISSOR_TEST):Ht(s.SCISSOR_TEST)}function on(Y){Y===void 0&&(Y=s.TEXTURE0+F-1),bt!==Y&&(s.activeTexture(Y),bt=Y)}function z(Y,Ct,_t){_t===void 0&&(bt===null?_t=s.TEXTURE0+F-1:_t=bt);let Lt=I[_t];Lt===void 0&&(Lt={type:void 0,texture:void 0},I[_t]=Lt),(Lt.type!==Y||Lt.texture!==Ct)&&(bt!==_t&&(s.activeTexture(_t),bt=_t),s.bindTexture(Y,Ct||St[Y]),Lt.type=Y,Lt.texture=Ct)}function Zt(){const Y=I[bt];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Xt(){try{s.compressedTexImage2D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function E(){try{s.texSubImage2D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function j(){try{s.texSubImage3D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function nt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function ht(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function Tt(){try{s.texStorage2D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function Ut(){try{s.texStorage3D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function pt(){try{s.texImage2D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function mt(){try{s.texImage3D(...arguments)}catch(Y){Ce("WebGLState:",Y)}}function Dt(Y){return v[Y]!==void 0?v[Y]:s.getParameter(Y)}function Gt(Y,Ct){v[Y]!==Ct&&(s.pixelStorei(Y,Ct),v[Y]=Ct)}function Bt(Y){wt.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),wt.copy(Y))}function Pt(Y){Nt.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Nt.copy(Y))}function ee(Y,Ct){let _t=d.get(Ct);_t===void 0&&(_t=new WeakMap,d.set(Ct,_t));let Lt=_t.get(Y);Lt===void 0&&(Lt=s.getUniformBlockIndex(Ct,Y.name),_t.set(Y,Lt))}function ne(Y,Ct){const Lt=d.get(Ct).get(Y);p.get(Ct)!==Lt&&(s.uniformBlockBinding(Ct,Lt,Y.__bindingPointIndex),p.set(Ct,Lt))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},bt=null,I={},g={},x=new WeakMap,M=[],T=null,y=!1,S=null,D=null,U=null,R=null,B=null,N=null,O=null,A=new ce(0,0,0),P=0,V=!1,G=null,X=null,tt=null,ut=null,q=null,wt.set(0,0,s.canvas.width,s.canvas.height),Nt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:xt,disable:Ht,bindFramebuffer:se,drawBuffers:$t,useProgram:Qe,setBlending:Se,setMaterial:ge,setFlipSided:en,setCullFace:rn,setLineWidth:je,setPolygonOffset:pn,setScissorTest:We,activeTexture:on,bindTexture:z,unbindTexture:Zt,compressedTexImage2D:Xt,compressedTexImage3D:L,texImage2D:pt,texImage3D:mt,pixelStorei:Gt,getParameter:Dt,updateUBOMapping:ee,uniformBlockBinding:ne,texStorage2D:Tt,texStorage3D:Ut,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:nt,compressedTexSubImage3D:ht,scissor:Bt,viewport:Pt,reset:le}}function jw(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Yt,_=new WeakMap,v=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,E){return M?new OffscreenCanvas(L,E):df("canvas")}function y(L,E,j){let nt=1;const ht=Xt(L);if((ht.width>j||ht.height>j)&&(nt=j/Math.max(ht.width,ht.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Tt=Math.floor(nt*ht.width),Ut=Math.floor(nt*ht.height);g===void 0&&(g=T(Tt,Ut));const pt=E?T(Tt,Ut):g;return pt.width=Tt,pt.height=Ut,pt.getContext("2d").drawImage(L,0,0,Tt,Ut),oe("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Tt+"x"+Ut+")."),pt}else return"data"in L&&oe("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function S(L){return L.generateMipmaps}function D(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(L,E,j,nt,ht,Tt=!1){if(L!==null){if(s[L]!==void 0)return s[L];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ut;nt&&(Ut=t.get("EXT_texture_norm16"),Ut||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=E;if(E===s.RED&&(j===s.FLOAT&&(pt=s.R32F),j===s.HALF_FLOAT&&(pt=s.R16F),j===s.UNSIGNED_BYTE&&(pt=s.R8),j===s.UNSIGNED_SHORT&&Ut&&(pt=Ut.R16_EXT),j===s.SHORT&&Ut&&(pt=Ut.R16_SNORM_EXT)),E===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(pt=s.R8UI),j===s.UNSIGNED_SHORT&&(pt=s.R16UI),j===s.UNSIGNED_INT&&(pt=s.R32UI),j===s.BYTE&&(pt=s.R8I),j===s.SHORT&&(pt=s.R16I),j===s.INT&&(pt=s.R32I)),E===s.RG&&(j===s.FLOAT&&(pt=s.RG32F),j===s.HALF_FLOAT&&(pt=s.RG16F),j===s.UNSIGNED_BYTE&&(pt=s.RG8),j===s.UNSIGNED_SHORT&&Ut&&(pt=Ut.RG16_EXT),j===s.SHORT&&Ut&&(pt=Ut.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(pt=s.RG8UI),j===s.UNSIGNED_SHORT&&(pt=s.RG16UI),j===s.UNSIGNED_INT&&(pt=s.RG32UI),j===s.BYTE&&(pt=s.RG8I),j===s.SHORT&&(pt=s.RG16I),j===s.INT&&(pt=s.RG32I)),E===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(pt=s.RGB8UI),j===s.UNSIGNED_SHORT&&(pt=s.RGB16UI),j===s.UNSIGNED_INT&&(pt=s.RGB32UI),j===s.BYTE&&(pt=s.RGB8I),j===s.SHORT&&(pt=s.RGB16I),j===s.INT&&(pt=s.RGB32I)),E===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(pt=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(pt=s.RGBA16UI),j===s.UNSIGNED_INT&&(pt=s.RGBA32UI),j===s.BYTE&&(pt=s.RGBA8I),j===s.SHORT&&(pt=s.RGBA16I),j===s.INT&&(pt=s.RGBA32I)),E===s.RGB&&(j===s.UNSIGNED_SHORT&&Ut&&(pt=Ut.RGB16_EXT),j===s.SHORT&&Ut&&(pt=Ut.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(pt=s.R11F_G11F_B10F)),E===s.RGBA){const mt=Tt?hf:De.getTransfer(ht);j===s.FLOAT&&(pt=s.RGBA32F),j===s.HALF_FLOAT&&(pt=s.RGBA16F),j===s.UNSIGNED_BYTE&&(pt=mt===Ve?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&Ut&&(pt=Ut.RGBA16_EXT),j===s.SHORT&&Ut&&(pt=Ut.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function B(L,E){let j;return L?E===null||E===_a||E===ql?j=s.DEPTH24_STENCIL8:E===Vi?j=s.DEPTH32F_STENCIL8:E===Wl&&(j=s.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_a||E===ql?j=s.DEPTH_COMPONENT24:E===Vi?j=s.DEPTH_COMPONENT32F:E===Wl&&(j=s.DEPTH_COMPONENT16),j}function N(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Qn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function O(L){const E=L.target;E.removeEventListener("dispose",O),P(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function A(L){const E=L.target;E.removeEventListener("dispose",A),G(E)}function P(L){const E=a.get(L);if(E.__webglInit===void 0)return;const j=L.source,nt=x.get(j);if(nt){const ht=nt[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&V(L),Object.keys(nt).length===0&&x.delete(j)}a.remove(L)}function V(L){const E=a.get(L);s.deleteTexture(E.__webglTexture);const j=L.source,nt=x.get(j);delete nt[E.__cacheKey],u.memory.textures--}function G(L){const E=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let ht=0;ht<E.__webglFramebuffer[nt].length;ht++)s.deleteFramebuffer(E.__webglFramebuffer[nt][ht]);else s.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)s.deleteFramebuffer(E.__webglFramebuffer[nt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=L.textures;for(let nt=0,ht=j.length;nt<ht;nt++){const Tt=a.get(j[nt]);Tt.__webglTexture&&(s.deleteTexture(Tt.__webglTexture),u.memory.textures--),a.remove(j[nt])}a.remove(L)}let X=0;function tt(){X=0}function ut(){return X}function q(L){X=L}function F(){const L=X;return L>=o.maxTextures&&oe("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),X+=1,L}function H(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){const j=a.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const nt=L.image;if(nt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(j,L,E);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+E)}function dt(L,E){const j=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Ht(j,L,E);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+E)}function bt(L,E){const j=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Ht(j,L,E);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+E)}function I(L,E){const j=a.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){se(j,L,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+E)}const Q={[Xl]:s.REPEAT,[ta]:s.CLAMP_TO_EDGE,[Hp]:s.MIRRORED_REPEAT},Mt={[Sn]:s.NEAREST,[ZE]:s.NEAREST_MIPMAP_NEAREST,[vu]:s.NEAREST_MIPMAP_LINEAR,[Qn]:s.LINEAR,[Wd]:s.LINEAR_MIPMAP_NEAREST,[mr]:s.LINEAR_MIPMAP_LINEAR},wt={[jE]:s.NEVER,[nT]:s.ALWAYS,[JE]:s.LESS,[Vm]:s.LEQUAL,[$E]:s.EQUAL,[km]:s.GEQUAL,[tT]:s.GREATER,[eT]:s.NOTEQUAL};function Nt(L,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Qn||E.magFilter===Wd||E.magFilter===vu||E.magFilter===mr||E.minFilter===Qn||E.minFilter===Wd||E.minFilter===vu||E.minFilter===mr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Q[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Q[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Q[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Mt[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,wt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==vu&&E.minFilter!==mr||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function et(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",O));const nt=E.source;let ht=x.get(nt);ht===void 0&&(ht={},x.set(nt,ht));const Tt=H(E);if(Tt!==L.__cacheKey){ht[Tt]===void 0&&(ht[Tt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,j=!0),ht[Tt].usedTimes++;const Ut=ht[L.__cacheKey];Ut!==void 0&&(ht[L.__cacheKey].usedTimes--,Ut.usedTimes===0&&V(E)),L.__cacheKey=Tt,L.__webglTexture=ht[Tt].texture}return j}function St(L,E,j){return Math.floor(Math.floor(L/j)/E)}function xt(L,E,j,nt){const Tt=L.updateRanges;if(Tt.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,j,nt,E.data);else{Tt.sort((Gt,Bt)=>Gt.start-Bt.start);let Ut=0;for(let Gt=1;Gt<Tt.length;Gt++){const Bt=Tt[Ut],Pt=Tt[Gt],ee=Bt.start+Bt.count,ne=St(Pt.start,E.width,4),le=St(Bt.start,E.width,4);Pt.start<=ee+1&&ne===le&&St(Pt.start+Pt.count-1,E.width,4)===ne?Bt.count=Math.max(Bt.count,Pt.start+Pt.count-Bt.start):(++Ut,Tt[Ut]=Pt)}Tt.length=Ut+1;const pt=n.getParameter(s.UNPACK_ROW_LENGTH),mt=n.getParameter(s.UNPACK_SKIP_PIXELS),Dt=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Gt=0,Bt=Tt.length;Gt<Bt;Gt++){const Pt=Tt[Gt],ee=Math.floor(Pt.start/4),ne=Math.ceil(Pt.count/4),le=ee%E.width,Y=Math.floor(ee/E.width),Ct=ne,_t=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,le),n.pixelStorei(s.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(s.TEXTURE_2D,0,le,Y,Ct,_t,j,nt,E.data)}L.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,pt),n.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(s.UNPACK_SKIP_ROWS,Dt)}}function Ht(L,E,j){let nt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=s.TEXTURE_3D);const ht=et(L,E),Tt=E.source;n.bindTexture(nt,L.__webglTexture,s.TEXTURE0+j);const Ut=a.get(Tt);if(Tt.version!==Ut.__version||ht===!0){if(n.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _t=De.getPrimaries(De.workingColorSpace),Lt=E.colorSpace===Ls?null:De.getPrimaries(E.colorSpace),Ft=E.colorSpace===Ls||_t===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let mt=y(E.image,!1,o.maxTextureSize);mt=Zt(E,mt);const Dt=c.convert(E.format,E.colorSpace),Gt=c.convert(E.type);let Bt=R(E.internalFormat,Dt,Gt,E.normalized,E.colorSpace,E.isVideoTexture);Nt(nt,E);let Pt;const ee=E.mipmaps,ne=E.isVideoTexture!==!0,le=Ut.__version===void 0||ht===!0,Y=Tt.dataReady,Ct=N(E,mt);if(E.isDepthTexture)Bt=B(E.format===gr,E.type),le&&(ne?n.texStorage2D(s.TEXTURE_2D,1,Bt,mt.width,mt.height):n.texImage2D(s.TEXTURE_2D,0,Bt,mt.width,mt.height,0,Dt,Gt,null));else if(E.isDataTexture)if(ee.length>0){ne&&le&&n.texStorage2D(s.TEXTURE_2D,Ct,Bt,ee[0].width,ee[0].height);for(let _t=0,Lt=ee.length;_t<Lt;_t++)Pt=ee[_t],ne?Y&&n.texSubImage2D(s.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Dt,Gt,Pt.data):n.texImage2D(s.TEXTURE_2D,_t,Bt,Pt.width,Pt.height,0,Dt,Gt,Pt.data);E.generateMipmaps=!1}else ne?(le&&n.texStorage2D(s.TEXTURE_2D,Ct,Bt,mt.width,mt.height),Y&&xt(E,mt,Dt,Gt)):n.texImage2D(s.TEXTURE_2D,0,Bt,mt.width,mt.height,0,Dt,Gt,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Bt,ee[0].width,ee[0].height,mt.depth);for(let _t=0,Lt=ee.length;_t<Lt;_t++)if(Pt=ee[_t],E.format!==Di)if(Dt!==null)if(ne){if(Y)if(E.layerUpdates.size>0){const Ft=Bx(Pt.width,Pt.height,E.format,E.type);for(const Et of E.layerUpdates){const jt=Pt.data.subarray(Et*Ft/Pt.data.BYTES_PER_ELEMENT,(Et+1)*Ft/Pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,Et,Pt.width,Pt.height,1,Dt,jt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,0,Pt.width,Pt.height,mt.depth,Dt,Pt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_t,Bt,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Y&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,_t,0,0,0,Pt.width,Pt.height,mt.depth,Dt,Gt,Pt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,_t,Bt,Pt.width,Pt.height,mt.depth,0,Dt,Gt,Pt.data)}else{ne&&le&&n.texStorage2D(s.TEXTURE_2D,Ct,Bt,ee[0].width,ee[0].height);for(let _t=0,Lt=ee.length;_t<Lt;_t++)Pt=ee[_t],E.format!==Di?Dt!==null?ne?Y&&n.compressedTexSubImage2D(s.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Dt,Pt.data):n.compressedTexImage2D(s.TEXTURE_2D,_t,Bt,Pt.width,Pt.height,0,Pt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Y&&n.texSubImage2D(s.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Dt,Gt,Pt.data):n.texImage2D(s.TEXTURE_2D,_t,Bt,Pt.width,Pt.height,0,Dt,Gt,Pt.data)}else if(E.isDataArrayTexture)if(ne){if(le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Bt,mt.width,mt.height,mt.depth),Y)if(E.layerUpdates.size>0){const _t=Bx(mt.width,mt.height,E.format,E.type);for(const Lt of E.layerUpdates){const Ft=mt.data.subarray(Lt*_t/mt.data.BYTES_PER_ELEMENT,(Lt+1)*_t/mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Lt,mt.width,mt.height,1,Dt,Gt,Ft)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Dt,Gt,mt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,mt.width,mt.height,mt.depth,0,Dt,Gt,mt.data);else if(E.isData3DTexture)ne?(le&&n.texStorage3D(s.TEXTURE_3D,Ct,Bt,mt.width,mt.height,mt.depth),Y&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Dt,Gt,mt.data)):n.texImage3D(s.TEXTURE_3D,0,Bt,mt.width,mt.height,mt.depth,0,Dt,Gt,mt.data);else if(E.isFramebufferTexture){if(le)if(ne)n.texStorage2D(s.TEXTURE_2D,Ct,Bt,mt.width,mt.height);else{let _t=mt.width,Lt=mt.height;for(let Ft=0;Ft<Ct;Ft++)n.texImage2D(s.TEXTURE_2D,Ft,Bt,_t,Lt,0,Dt,Gt,null),_t>>=1,Lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const _t=s.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),mt.parentNode!==_t){_t.appendChild(mt),v.add(E),_t.onpaint=Lt=>{const Ft=Lt.changedElements;for(const Et of v)Ft.includes(Et.image)&&(Et.needsUpdate=!0)},_t.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,mt);else{const Ft=s.RGBA,Et=s.RGBA,jt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ft,Et,jt,mt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ee.length>0){if(ne&&le){const _t=Xt(ee[0]);n.texStorage2D(s.TEXTURE_2D,Ct,Bt,_t.width,_t.height)}for(let _t=0,Lt=ee.length;_t<Lt;_t++)Pt=ee[_t],ne?Y&&n.texSubImage2D(s.TEXTURE_2D,_t,0,0,Dt,Gt,Pt):n.texImage2D(s.TEXTURE_2D,_t,Bt,Dt,Gt,Pt);E.generateMipmaps=!1}else if(ne){if(le){const _t=Xt(mt);n.texStorage2D(s.TEXTURE_2D,Ct,Bt,_t.width,_t.height)}Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,Gt,mt)}else n.texImage2D(s.TEXTURE_2D,0,Bt,Dt,Gt,mt);S(E)&&D(nt),Ut.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function se(L,E,j){if(E.image.length!==6)return;const nt=et(L,E),ht=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+j);const Tt=a.get(ht);if(ht.version!==Tt.__version||nt===!0){n.activeTexture(s.TEXTURE0+j);const Ut=De.getPrimaries(De.workingColorSpace),pt=E.colorSpace===Ls?null:De.getPrimaries(E.colorSpace),mt=E.colorSpace===Ls||Ut===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,Gt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let Et=0;Et<6;Et++)!Dt&&!Gt?Bt[Et]=y(E.image[Et],!0,o.maxCubemapSize):Bt[Et]=Gt?E.image[Et].image:E.image[Et],Bt[Et]=Zt(E,Bt[Et]);const Pt=Bt[0],ee=c.convert(E.format,E.colorSpace),ne=c.convert(E.type),le=R(E.internalFormat,ee,ne,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,Ct=Tt.__version===void 0||nt===!0,_t=ht.dataReady;let Lt=N(E,Pt);Nt(s.TEXTURE_CUBE_MAP,E);let Ft;if(Dt){Y&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,le,Pt.width,Pt.height);for(let Et=0;Et<6;Et++){Ft=Bt[Et].mipmaps;for(let jt=0;jt<Ft.length;jt++){const Wt=Ft[jt];E.format!==Di?ee!==null?Y?_t&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,Wt.width,Wt.height,ee,Wt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,le,Wt.width,Wt.height,0,Wt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?_t&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,Wt.width,Wt.height,ee,ne,Wt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,le,Wt.width,Wt.height,0,ee,ne,Wt.data)}}}else{if(Ft=E.mipmaps,Y&&Ct){Ft.length>0&&Lt++;const Et=Xt(Bt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,le,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Gt){Y?_t&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Bt[Et].width,Bt[Et].height,ee,ne,Bt[Et].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,Bt[Et].width,Bt[Et].height,0,ee,ne,Bt[Et].data);for(let jt=0;jt<Ft.length;jt++){const ln=Ft[jt].image[Et].image;Y?_t&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,ln.width,ln.height,ee,ne,ln.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,le,ln.width,ln.height,0,ee,ne,ln.data)}}else{Y?_t&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ee,ne,Bt[Et]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,ee,ne,Bt[Et]);for(let jt=0;jt<Ft.length;jt++){const Wt=Ft[jt];Y?_t&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,ee,ne,Wt.image[Et]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,le,ee,ne,Wt.image[Et])}}}S(E)&&D(s.TEXTURE_CUBE_MAP),Tt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function $t(L,E,j,nt,ht,Tt){const Ut=c.convert(j.format,j.colorSpace),pt=c.convert(j.type),mt=R(j.internalFormat,Ut,pt,j.normalized,j.colorSpace),Dt=a.get(E),Gt=a.get(j);if(Gt.__renderTarget=E,!Dt.__hasExternalTextures){const Bt=Math.max(1,E.width>>Tt),Pt=Math.max(1,E.height>>Tt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?n.texImage3D(ht,Tt,mt,Bt,Pt,E.depth,0,Ut,pt,null):n.texImage2D(ht,Tt,mt,Bt,Pt,0,Ut,pt,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),on(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ht,Gt.__webglTexture,0,We(E)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ht,Gt.__webglTexture,Tt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(L,E,j){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const nt=E.depthTexture,ht=nt&&nt.isDepthTexture?nt.type:null,Tt=B(E.stencilBuffer,ht),Ut=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;on(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(E),Tt,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(E),Tt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,L)}else{const nt=E.textures;for(let ht=0;ht<nt.length;ht++){const Tt=nt[ht],Ut=c.convert(Tt.format,Tt.colorSpace),pt=c.convert(Tt.type),mt=R(Tt.internalFormat,Ut,pt,Tt.normalized,Tt.colorSpace);on(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(E),mt,E.width,E.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(E),mt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,mt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(L,E,j){const nt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=a.get(E.depthTexture);if(ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),nt){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ht.__webglTexture===void 0){ht.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=c.convert(E.depthTexture.format),Gt=c.convert(E.depthTexture.type);let Bt;E.depthTexture.format===Wa?Bt=s.DEPTH_COMPONENT24:E.depthTexture.format===gr&&(Bt=s.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Bt,E.width,E.height,0,Dt,Gt,null)}}else $(E.depthTexture,0);const Tt=ht.__webglTexture,Ut=We(E),pt=nt?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,mt=E.depthTexture.format===gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wa)on(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,pt,Tt,0,Ut):s.framebufferTexture2D(s.FRAMEBUFFER,mt,pt,Tt,0);else if(E.depthTexture.format===gr)on(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,pt,Tt,0,Ut):s.framebufferTexture2D(s.FRAMEBUFFER,mt,pt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(L){const E=a.get(L),j=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",ht)};nt.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=nt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let nt=0;nt<6;nt++)ue(E.__webglFramebuffer[nt],L,nt);else{const nt=L.texture.mipmaps;nt&&nt.length>0?ue(E.__webglFramebuffer[0],L,0):ue(E.__webglFramebuffer,L,0)}else if(j){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=s.createRenderbuffer(),Qe(E.__webglDepthbuffer[nt],L,!1);else{const ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=E.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,Tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Tt)}}else{const nt=L.texture.mipmaps;if(nt&&nt.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Qe(E.__webglDepthbuffer,L,!1);else{const ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Tt)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(L,E,j){const nt=a.get(L);E!==void 0&&$t(nt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ve(L)}function ge(L){const E=L.texture,j=a.get(L),nt=a.get(E);L.addEventListener("dispose",A);const ht=L.textures,Tt=L.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=E.version,u.memory.textures++),Tt){j.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[pt]=[];for(let mt=0;mt<E.mipmaps.length;mt++)j.__webglFramebuffer[pt][mt]=s.createFramebuffer()}else j.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let pt=0;pt<E.mipmaps.length;pt++)j.__webglFramebuffer[pt]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Ut)for(let pt=0,mt=ht.length;pt<mt;pt++){const Dt=a.get(ht[pt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&on(L)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pt=0;pt<ht.length;pt++){const mt=ht[pt];j.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[pt]);const Dt=c.convert(mt.format,mt.colorSpace),Gt=c.convert(mt.type),Bt=R(mt.internalFormat,Dt,Gt,mt.normalized,mt.colorSpace,L.isXRRenderTarget===!0),Pt=We(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,Bt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,j.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Qe(j.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Tt){n.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Nt(s.TEXTURE_CUBE_MAP,E);for(let pt=0;pt<6;pt++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)$t(j.__webglFramebuffer[pt][mt],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,mt);else $t(j.__webglFramebuffer[pt],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);S(E)&&D(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ut){for(let pt=0,mt=ht.length;pt<mt;pt++){const Dt=ht[pt],Gt=a.get(Dt);let Bt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Bt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Bt,Gt.__webglTexture),Nt(Bt,Dt),$t(j.__webglFramebuffer,L,Dt,s.COLOR_ATTACHMENT0+pt,Bt,0),S(Dt)&&D(Bt)}n.unbindTexture()}else{let pt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(pt,nt.__webglTexture),Nt(pt,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)$t(j.__webglFramebuffer[mt],L,E,s.COLOR_ATTACHMENT0,pt,mt);else $t(j.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,pt,0);S(E)&&D(pt),n.unbindTexture()}L.depthBuffer&&ve(L)}function en(L){const E=L.textures;for(let j=0,nt=E.length;j<nt;j++){const ht=E[j];if(S(ht)){const Tt=U(L),Ut=a.get(ht).__webglTexture;n.bindTexture(Tt,Ut),D(Tt),n.unbindTexture()}}}const rn=[],je=[];function pn(L){if(L.samples>0){if(on(L)===!1){const E=L.textures,j=L.width,nt=L.height;let ht=s.COLOR_BUFFER_BIT;const Tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=a.get(L),pt=E.length>1;if(pt)for(let Dt=0;Dt<E.length;Dt++)n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const mt=L.texture.mipmaps;mt&&mt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const Gt=a.get(E[Dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,j,nt,0,0,j,nt,ht,s.NEAREST),p===!0&&(rn.length=0,je.length=0,rn.push(s.COLOR_ATTACHMENT0+Dt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(rn.push(Tt),je.push(Tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rn))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Dt=0;Dt<E.length;Dt++){n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const Gt=a.get(E[Dt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,Gt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function We(L){return Math.min(o.maxSamples,L.samples)}function on(L){const E=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(L){const E=u.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Zt(L,E){const j=L.colorSpace,nt=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==ff&&j!==Ls&&(De.getTransfer(j)===Ve?(nt!==Di||ht!==wi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",j)),E}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=tt,this.getTextureUnits=ut,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=dt,this.setTexture3D=bt,this.setTextureCube=I,this.rebindTextures=Se,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Jw(s,t){function n(a,o=Ls){let c;const u=De.getTransfer(o);if(a===wi)return s.UNSIGNED_BYTE;if(a===Im)return s.UNSIGNED_SHORT_4_4_4_4;if(a===zm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===jy)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===Jy)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===Ky)return s.BYTE;if(a===Qy)return s.SHORT;if(a===Wl)return s.UNSIGNED_SHORT;if(a===Bm)return s.INT;if(a===_a)return s.UNSIGNED_INT;if(a===Vi)return s.FLOAT;if(a===Ui)return s.HALF_FLOAT;if(a===$y)return s.ALPHA;if(a===tS)return s.RGB;if(a===Di)return s.RGBA;if(a===Wa)return s.DEPTH_COMPONENT;if(a===gr)return s.DEPTH_STENCIL;if(a===eS)return s.RED;if(a===Fm)return s.RED_INTEGER;if(a===xr)return s.RG;if(a===Hm)return s.RG_INTEGER;if(a===Gm)return s.RGBA_INTEGER;if(a===$u||a===tf||a===ef||a===nf)if(u===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===$u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ef)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===nf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===$u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===tf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ef)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===nf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Gp||a===Vp||a===kp||a===Xp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Gp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Vp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===kp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Wp||a===qp||a===Yp||a===Zp||a===Kp||a===cf||a===Qp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Wp||a===qp)return u===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Yp)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Zp)return c.COMPRESSED_R11_EAC;if(a===Kp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===cf)return c.COMPRESSED_RG11_EAC;if(a===Qp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===jp||a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am||a===sm||a===rm||a===om||a===lm||a===cm||a===um)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===jp)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Jp)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===$p)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===tm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===em)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===nm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===im)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===am)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===sm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===rm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===om)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===lm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===cm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===um)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===fm||a===hm||a===dm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===fm)return u===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===hm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===dm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===pm||a===mm||a===uf||a===gm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===pm)return c.COMPRESSED_RED_RGTC1_EXT;if(a===mm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===uf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ql?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const $w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new fS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Dn({vertexShader:$w,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xe(new Lo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nC extends Gs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,d=null,_=null,v=null,g=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",y=new eC,S={},D=n.getContextAttributes();let U=null,R=null;const B=[],N=[],O=new Yt;let A=null;const P=new Ri;P.viewport=new mn;const V=new Ri;V.viewport=new mn;const G=[P,V],X=new oA;let tt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let St=B[et];return St===void 0&&(St=new jd,B[et]=St),St.getTargetRaySpace()},this.getControllerGrip=function(et){let St=B[et];return St===void 0&&(St=new jd,B[et]=St),St.getGripSpace()},this.getHand=function(et){let St=B[et];return St===void 0&&(St=new jd,B[et]=St),St.getHandSpace()};function q(et){const St=N.indexOf(et.inputSource);if(St===-1)return;const xt=B[St];xt!==void 0&&(xt.update(et.inputSource,et.frame,d||u),xt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let et=0;et<B.length;et++){const St=N[et];St!==null&&(N[et]=null,B[et].disconnect(St))}tt=null,ut=null,y.reset();for(const et in S)delete S[et];t.setRenderTarget(U),x=null,g=null,v=null,o=null,R=null,Nt.stop(),a.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,a.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,a.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(et){d=et},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(et){if(o=et,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ht=null,se=null;D.depth&&(se=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xt=D.stencil?gr:Wa,Ht=D.stencil?ql:_a);const $t={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer($t),o.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new ii(g.textureWidth,g.textureHeight,{format:Di,type:wi,depthTexture:new wo(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,xt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new ii(x.framebufferWidth,x.framebufferHeight,{format:Di,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),Nt.setContext(o),Nt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(et){for(let St=0;St<et.removed.length;St++){const xt=et.removed[St],Ht=N.indexOf(xt);Ht>=0&&(N[Ht]=null,B[Ht].disconnect(xt))}for(let St=0;St<et.added.length;St++){const xt=et.added[St];let Ht=N.indexOf(xt);if(Ht===-1){for(let $t=0;$t<B.length;$t++)if($t>=N.length){N.push(xt),Ht=$t;break}else if(N[$t]===null){N[$t]=xt,Ht=$t;break}if(Ht===-1)break}const se=B[Ht];se&&se.connect(xt)}}const $=new Z,dt=new Z;function bt(et,St,xt){$.setFromMatrixPosition(St.matrixWorld),dt.setFromMatrixPosition(xt.matrixWorld);const Ht=$.distanceTo(dt),se=St.projectionMatrix.elements,$t=xt.projectionMatrix.elements,Qe=se[14]/(se[10]-1),ue=se[14]/(se[10]+1),ve=(se[9]+1)/se[5],Se=(se[9]-1)/se[5],ge=(se[8]-1)/se[0],en=($t[8]+1)/$t[0],rn=Qe*ge,je=Qe*en,pn=Ht/(-ge+en),We=pn*-ge;if(St.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(We),et.translateZ(pn),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),se[10]===-1)et.projectionMatrix.copy(St.projectionMatrix),et.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const on=Qe+pn,z=ue+pn,Zt=rn-We,Xt=je+(Ht-We),L=ve*ue/z*on,E=Se*ue/z*on;et.projectionMatrix.makePerspective(Zt,Xt,L,E,on,z),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function I(et,St){St===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(St.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(o===null)return;let St=et.near,xt=et.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(xt=y.depthFar)),X.near=V.near=P.near=St,X.far=V.far=P.far=xt,(tt!==X.near||ut!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),tt=X.near,ut=X.far),X.layers.mask=et.layers.mask|6,P.layers.mask=X.layers.mask&-5,V.layers.mask=X.layers.mask&-3;const Ht=et.parent,se=X.cameras;I(X,Ht);for(let $t=0;$t<se.length;$t++)I(se[$t],Ht);se.length===2?bt(X,P,V):X.projectionMatrix.copy(P.projectionMatrix),Q(et,X,Ht)};function Q(et,St,xt){xt===null?et.matrix.copy(St.matrixWorld):(et.matrix.copy(xt.matrixWorld),et.matrix.invert(),et.matrix.multiply(St.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(St.projectionMatrix),et.projectionMatrixInverse.copy(St.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Zl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(et){p=et,g!==null&&(g.fixedFoveation=et),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(et){return S[et]};let Mt=null;function wt(et,St){if(_=St.getViewerPose(d||u),M=St,_!==null){const xt=_.views;x!==null&&(t.setRenderTargetFramebuffer(R,x.framebuffer),t.setRenderTarget(R));let Ht=!1;xt.length!==X.cameras.length&&(X.cameras.length=0,Ht=!0);for(let ue=0;ue<xt.length;ue++){const ve=xt[ue];let Se=null;if(x!==null)Se=x.getViewport(ve);else{const en=v.getViewSubImage(g,ve);Se=en.viewport,ue===0&&(t.setRenderTargetTextures(R,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(R))}let ge=G[ue];ge===void 0&&(ge=new Ri,ge.layers.enable(ue),ge.viewport=new mn,G[ue]=ge),ge.matrix.fromArray(ve.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ve.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Se.x,Se.y,Se.width,Se.height),ue===0&&(X.matrix.copy(ge.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ht===!0&&X.cameras.push(ge)}const se=o.enabledFeatures;if(se&&se.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const ue=v.getDepthInformation(xt[0]);ue&&ue.isValid&&ue.texture&&y.init(ue,o.renderState)}if(se&&se.includes("camera-access")&&T){t.state.unbindTexture(),v=a.getBinding();for(let ue=0;ue<xt.length;ue++){const ve=xt[ue].camera;if(ve){let Se=S[ve];Se||(Se=new fS,S[ve]=Se);const ge=v.getCameraImage(ve);Se.sourceTexture=ge}}}}for(let xt=0;xt<B.length;xt++){const Ht=N[xt],se=B[xt];Ht!==null&&se!==void 0&&se.update(Ht,St,d||u)}Mt&&Mt(et,St),St.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:St}),M=null}const Nt=new mS;Nt.setAnimationLoop(wt),this.setAnimationLoop=function(et){Mt=et},this.dispose=function(){}}}const iC=new sn,MS=new he;MS.set(-1,0,0,0,1,0,0,0,1);function aC(s,t){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,hS(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,D,U,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&x(y,S,R)):S.isMeshMatcapMaterial?(c(y,S),M(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),T(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?p(y,S,D,U):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=t.get(S),U=D.envMap,R=D.envMapRotation;U&&(y.envMap.value=U,y.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(R)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(MS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,D,U){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=U*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const D=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function sC(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,B){const N=B.program;a.uniformBlockBinding(R,N)}function d(R,B){let N=o[R.id];N===void 0&&(y(R),N=_(R),o[R.id]=N,R.addEventListener("dispose",D));const O=B.program;a.updateUBOMapping(R,O);const A=t.render.frame;c[R.id]!==A&&(g(R),c[R.id]=A)}function _(R){const B=v();R.__bindingPointIndex=B;const N=s.createBuffer(),O=R.__size,A=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,O,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,B,N),N}function v(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const B=o[R.id],N=R.uniforms,O=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,B);for(let A=0,P=N.length;A<P;A++){const V=N[A];if(Array.isArray(V))for(let G=0,X=V.length;G<X;G++)x(V[G],A,G,O);else x(V,A,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(R,B,N,O){if(T(R,B,N,O)===!0){const A=R.__offset,P=R.value;if(Array.isArray(P)){let V=0;for(let G=0;G<P.length;G++){const X=P[G],tt=S(X);M(X,R.__data,V),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(P,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,R.__data)}}function M(R,B,N){typeof R=="number"||typeof R=="boolean"?B[0]=R:R.isMatrix3?(B[0]=R.elements[0],B[1]=R.elements[1],B[2]=R.elements[2],B[3]=0,B[4]=R.elements[3],B[5]=R.elements[4],B[6]=R.elements[5],B[7]=0,B[8]=R.elements[6],B[9]=R.elements[7],B[10]=R.elements[8],B[11]=0):ArrayBuffer.isView(R)?B.set(new R.constructor(R.buffer,R.byteOffset,B.length)):R.toArray(B,N)}function T(R,B,N,O){const A=R.value,P=B+"_"+N;if(O[P]===void 0)return typeof A=="number"||typeof A=="boolean"?O[P]=A:ArrayBuffer.isView(A)?O[P]=A.slice():O[P]=A.clone(),!0;{const V=O[P];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return O[P]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(V.equals(A)===!1)return V.copy(A),!0}}return!1}function y(R){const B=R.uniforms;let N=0;const O=16;for(let P=0,V=B.length;P<V;P++){const G=Array.isArray(B[P])?B[P]:[B[P]];for(let X=0,tt=G.length;X<tt;X++){const ut=G[X],q=Array.isArray(ut.value)?ut.value:[ut.value];for(let F=0,H=q.length;F<H;F++){const $=q[F],dt=S($),bt=N%O,I=bt%dt.boundary,Q=bt+I;N+=I,Q!==0&&O-Q<dt.storage&&(N+=O-Q),ut.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=N,N+=dt.storage}}}const A=N%O;return A>0&&(N+=O-A),R.__size=N,R.__cache={},this}function S(R){const B={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(B.boundary=4,B.storage=4):R.isVector2?(B.boundary=8,B.storage=8):R.isVector3||R.isColor?(B.boundary=16,B.storage=12):R.isVector4?(B.boundary=16,B.storage=16):R.isMatrix3?(B.boundary=48,B.storage=48):R.isMatrix4?(B.boundary=64,B.storage=64):R.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(B.boundary=16,B.storage=R.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",R),B}function D(R){const B=R.target;B.removeEventListener("dispose",D);const N=u.indexOf(B.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[B.id]),delete o[B.id],delete c[B.id]}function U(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:p,update:d,dispose:U}}const rC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function oC(){return ca===null&&(ca=new cS(rC,16,16,xr,Ui),ca.name="DFG_LUT",ca.minFilter=Qn,ca.magFilter=Qn,ca.wrapS=ta,ca.wrapT=ta,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class lC{constructor(t={}){const{canvas:n=aT(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=wi}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const T=x,y=new Set([Gm,Hm,Fm]),S=new Set([wi,_a,Wl,ql,Im,zm]),D=new Uint32Array(4),U=new Int32Array(4),R=new Z;let B=null,N=null;const O=[],A=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let G=!1,X=null,tt=null,ut=null,q=null;this._outputColorSpace=di;let F=0,H=0,$=null,dt=-1,bt=null;const I=new mn,Q=new mn;let Mt=null;const wt=new ce(0);let Nt=0,et=n.width,St=n.height,xt=1,Ht=null,se=null;const $t=new mn(0,0,et,St),Qe=new mn(0,0,et,St);let ue=!1;const ve=new Zm;let Se=!1,ge=!1;const en=new sn,rn=new Z,je=new mn,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function on(){return $===null?xt:1}let z=a;function Zt(w,K){return n.getContext(w,K)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pm}`),n.addEventListener("webglcontextlost",ln,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",pi,!1),z===null){const K="webgl2";if(z=Zt(K,w),z===null)throw Zt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ce("WebGLRenderer: "+w.message),w}let Xt,L,E,j,nt,ht,Tt,Ut,pt,mt,Dt,Gt,Bt,Pt,ee,ne,le,Y,Ct,_t,Lt,Ft,Et;function jt(){Xt=new o3(z),Xt.init(),Lt=new Jw(z,Xt),L=new $R(z,Xt,t,Lt),E=new Qw(z,Xt),L.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),tt=z.createFramebuffer(),ut=z.createFramebuffer(),q=z.createFramebuffer(),j=new u3(z),nt=new Bw,ht=new jw(z,Xt,E,nt,L,Lt,j),Tt=new r3(V),Ut=new pA(z),Ft=new jR(z,Ut),pt=new l3(z,Ut,j,Ft),mt=new h3(z,pt,Ut,Ft,j),Y=new f3(z,L,ht),ee=new t3(nt),Dt=new Ow(V,Tt,Xt,L,Ft,ee),Gt=new aC(V,nt),Bt=new zw,Pt=new Xw(Xt),le=new QR(V,Tt,E,mt,M,p),ne=new Kw(V,mt,L),Et=new sC(z,j,L,E),Ct=new JR(z,Xt,j),_t=new c3(z,Xt,j),j.programs=Dt.programs,V.capabilities=L,V.extensions=Xt,V.properties=nt,V.renderLists=Bt,V.shadowMap=ne,V.state=E,V.info=j}jt(),T!==wi&&(P=new p3(T,n.width,n.height,h,o,c));const Wt=new nC(V,z);this.xr=Wt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(w){w!==void 0&&(xt=w,this.setSize(et,St,!1))},this.getSize=function(w){return w.set(et,St)},this.setSize=function(w,K,lt=!0){if(Wt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,St=K,n.width=Math.floor(w*xt),n.height=Math.floor(K*xt),lt===!0&&(n.style.width=w+"px",n.style.height=K+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(et*xt,St*xt).floor()},this.setDrawingBufferSize=function(w,K,lt){et=w,St=K,xt=lt,n.width=Math.floor(w*lt),n.height=Math.floor(K*lt),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(T===wi){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy($t)},this.setViewport=function(w,K,lt,st){w.isVector4?$t.set(w.x,w.y,w.z,w.w):$t.set(w,K,lt,st),E.viewport(I.copy($t).multiplyScalar(xt).round())},this.getScissor=function(w){return w.copy(Qe)},this.setScissor=function(w,K,lt,st){w.isVector4?Qe.set(w.x,w.y,w.z,w.w):Qe.set(w,K,lt,st),E.scissor(Q.copy(Qe).multiplyScalar(xt).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){E.setScissorTest(ue=w)},this.setOpaqueSort=function(w){Ht=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,lt=!0){let st=0;if(w){let rt=!1;if($!==null){const It=$.texture.format;rt=y.has(It)}if(rt){const It=$.texture.type,kt=S.has(It),Ot=le.getClearColor(),Kt=le.getClearAlpha(),qt=Ot.r,ie=Ot.g,de=Ot.b;kt?(D[0]=qt,D[1]=ie,D[2]=de,D[3]=Kt,z.clearBufferuiv(z.COLOR,0,D)):(U[0]=qt,U[1]=ie,U[2]=de,U[3]=Kt,z.clearBufferiv(z.COLOR,0,U))}else st|=z.COLOR_BUFFER_BIT}K&&(st|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(st|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&z.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),X=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ln,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),le.dispose(),Bt.dispose(),Pt.dispose(),nt.dispose(),Tt.dispose(),mt.dispose(),Ft.dispose(),Et.dispose(),Dt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Mn),Wt.removeEventListener("sessionend",Gn),ai.stop()};function ln(w){w.preventDefault(),pf("WebGLRenderer: Context Lost."),G=!0}function Be(){pf("WebGLRenderer: Context Restored."),G=!1;const w=j.autoReset,K=ne.enabled,lt=ne.autoUpdate,st=ne.needsUpdate,rt=ne.type;jt(),j.autoReset=w,ne.enabled=K,ne.autoUpdate=lt,ne.needsUpdate=st,ne.type=rt}function pi(w){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mi(w){const K=w.target;K.removeEventListener("dispose",mi),Po(K)}function Po(w){Oo(w),nt.remove(w)}function Oo(w){const K=nt.get(w).programs;K!==void 0&&(K.forEach(function(lt){Dt.releaseProgram(lt)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,lt,st,rt,It){K===null&&(K=pn);const kt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Ot=Qa(w,K,lt,st,rt);E.setMaterial(st,kt);let Kt=lt.index,qt=1;if(st.wireframe===!0){if(Kt=pt.getWireframeAttribute(lt),Kt===void 0)return;qt=2}const ie=lt.drawRange,de=lt.attributes.position;let te=ie.start*qt,Ue=(ie.start+ie.count)*qt;It!==null&&(te=Math.max(te,It.start*qt),Ue=Math.min(Ue,(It.start+It.count)*qt)),Kt!==null?(te=Math.max(te,0),Ue=Math.min(Ue,Kt.count)):de!=null&&(te=Math.max(te,0),Ue=Math.min(Ue,de.count));const cn=Ue-te;if(cn<0||cn===1/0)return;Ft.setup(rt,st,Ot,lt,Kt);let Je,Ie=Ct;if(Kt!==null&&(Je=Ut.get(Kt),Ie=_t,Ie.setIndex(Je)),rt.isMesh)st.wireframe===!0?(E.setLineWidth(st.wireframeLinewidth*on()),Ie.setMode(z.LINES)):Ie.setMode(z.TRIANGLES);else if(rt.isLine){let ze=st.linewidth;ze===void 0&&(ze=1),E.setLineWidth(ze*on()),rt.isLineSegments?Ie.setMode(z.LINES):rt.isLineLoop?Ie.setMode(z.LINE_LOOP):Ie.setMode(z.LINE_STRIP)}else rt.isPoints?Ie.setMode(z.POINTS):rt.isSprite&&Ie.setMode(z.TRIANGLES);if(rt.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const ze=rt._multiDrawStarts,Vt=rt._multiDrawCounts,qn=rt._multiDrawCount,Me=Kt?Ut.get(Kt).bytesPerElement:1,Ln=nt.get(st).currentProgram.getUniforms();for(let gi=0;gi<qn;gi++)Ln.setValue(z,"_gl_DrawID",gi),Ie.render(ze[gi]/Me,Vt[gi])}else if(rt.isInstancedMesh)Ie.renderInstances(te,cn,rt.count);else if(lt.isInstancedBufferGeometry){const ze=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Vt=Math.min(lt.instanceCount,ze);Ie.renderInstances(te,cn,Vt)}else Ie.render(te,cn)};function Bo(w,K,lt){w.transparent===!0&&w.side===Ji&&w.forceSinglePass===!1?(w.side=jn,w.needsUpdate=!0,Ka(w,K,lt),w.side=Os,w.needsUpdate=!0,Ka(w,K,lt),w.side=Ji):Ka(w,K,lt)}this.compile=function(w,K,lt=null){lt===null&&(lt=w),N=Pt.get(lt),N.init(K),A.push(N),lt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(N.pushLight(rt),rt.castShadow&&N.pushShadow(rt))}),w!==lt&&w.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(N.pushLight(rt),rt.castShadow&&N.pushShadow(rt))}),N.setupLights();const st=new Set;return w.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const It=rt.material;if(It)if(Array.isArray(It))for(let kt=0;kt<It.length;kt++){const Ot=It[kt];Bo(Ot,lt,rt),st.add(Ot)}else Bo(It,lt,rt),st.add(It)}),N=A.pop(),st},this.compileAsync=function(w,K,lt=null){const st=this.compile(w,K,lt);return new Promise(rt=>{function It(){if(st.forEach(function(kt){nt.get(kt).currentProgram.isReady()&&st.delete(kt)}),st.size===0){rt(w);return}setTimeout(It,10)}Xt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Mr=null;function na(w){Mr&&Mr(w)}function Mn(){ai.stop()}function Gn(){ai.start()}const ai=new mS;ai.setAnimationLoop(na),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(w){Mr=w,Wt.setAnimationLoop(w),w===null?ai.stop():ai.start()},Wt.addEventListener("sessionstart",Mn),Wt.addEventListener("sessionend",Gn),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;X!==null&&X.renderStart(w,K);const lt=Wt.enabled===!0&&Wt.isPresenting===!0,st=P!==null&&($===null||lt)&&P.begin(V,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(K),K=Wt.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,K,$),N=Pt.get(w,A.length),N.init(K),N.state.textureUnits=ht.getTextureUnits(),A.push(N),en.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ve.setFromProjectionMatrix(en,ha,K.reversedDepth),ge=this.localClippingEnabled,Se=ee.init(this.clippingPlanes,ge),B=Bt.get(w,O.length),B.init(),O.push(B),Wt.enabled===!0&&Wt.isPresenting===!0){const kt=V.xr.getDepthSensingMesh();kt!==null&&ks(kt,K,-1/0,V.sortObjects)}ks(w,K,0,V.sortObjects),B.finish(),V.sortObjects===!0&&B.sort(Ht,se,K.reversedDepth),We=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,We&&le.addToRenderList(B,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&ee.beginShadows();const rt=N.state.shadowsArray;if(ne.render(rt,w,K),Se===!0&&ee.endShadows(),(st&&P.hasRenderPass())===!1){const kt=B.opaque,Ot=B.transmissive;if(N.setupLights(),K.isArrayCamera){const Kt=K.cameras;if(Ot.length>0)for(let qt=0,ie=Kt.length;qt<ie;qt++){const de=Kt[qt];rc(kt,Ot,w,de)}We&&le.render(w);for(let qt=0,ie=Kt.length;qt<ie;qt++){const de=Kt[qt];sc(B,w,de,de.viewport)}}else Ot.length>0&&rc(kt,Ot,w,K),We&&le.render(w),sc(B,w,K)}$!==null&&H===0&&(ht.updateMultisampleRenderTarget($),ht.updateRenderTargetMipmap($)),st&&P.end(V),w.isScene===!0&&w.onAfterRender(V,w,K),Ft.resetDefaultState(),dt=-1,bt=null,A.pop(),A.length>0?(N=A[A.length-1],ht.setTextureUnits(N.state.textureUnits),Se===!0&&ee.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?B=O[O.length-1]:B=null,X!==null&&X.renderEnd()};function ks(w,K,lt,st){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLightProbeGrid)N.pushLightProbeGrid(w);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ve.intersectsSprite(w)){st&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(en);const kt=mt.update(w),Ot=w.material;Ot.visible&&B.push(w,kt,Ot,lt,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ve.intersectsObject(w))){const kt=mt.update(w),Ot=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),je.copy(kt.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(en)),Array.isArray(Ot)){const Kt=kt.groups;for(let qt=0,ie=Kt.length;qt<ie;qt++){const de=Kt[qt],te=Ot[de.materialIndex];te&&te.visible&&B.push(w,kt,te,lt,je.z,de)}}else Ot.visible&&B.push(w,kt,Ot,lt,je.z,null)}}const It=w.children;for(let kt=0,Ot=It.length;kt<Ot;kt++)ks(It[kt],K,lt,st)}function sc(w,K,lt,st){const{opaque:rt,transmissive:It,transparent:kt}=w;N.setupLightsView(lt),Se===!0&&ee.setGlobalState(V.clippingPlanes,lt),st&&E.viewport(I.copy(st)),rt.length>0&&Xs(rt,K,lt),It.length>0&&Xs(It,K,lt),kt.length>0&&Xs(kt,K,lt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rc(w,K,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[st.id]===void 0){const te=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[st.id]=new ii(1,1,{generateMipmaps:!0,type:te?Ui:wi,minFilter:mr,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const It=N.state.transmissionRenderTarget[st.id],kt=st.viewport||I;It.setSize(kt.z*V.transmissionResolutionScale,kt.w*V.transmissionResolutionScale);const Ot=V.getRenderTarget(),Kt=V.getActiveCubeFace(),qt=V.getActiveMipmapLevel();V.setRenderTarget(It),V.getClearColor(wt),Nt=V.getClearAlpha(),Nt<1&&V.setClearColor(16777215,.5),V.clear(),We&&le.render(lt);const ie=V.toneMapping;V.toneMapping=pa;const de=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),N.setupLightsView(st),Se===!0&&ee.setGlobalState(V.clippingPlanes,st),Xs(w,lt,st),ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ue=0,cn=K.length;Ue<cn;Ue++){const Je=K[Ue],{object:Ie,geometry:ze,material:Vt,group:qn}=Je;if(Vt.side===Ji&&Ie.layers.test(st.layers)){const Me=Vt.side;Vt.side=jn,Vt.needsUpdate=!0,Za(Ie,lt,st,ze,Vt,qn),Vt.side=Me,Vt.needsUpdate=!0,te=!0}}te===!0&&(ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It))}V.setRenderTarget(Ot,Kt,qt),V.setClearColor(wt,Nt),de!==void 0&&(st.viewport=de),V.toneMapping=ie}function Xs(w,K,lt){const st=K.isScene===!0?K.overrideMaterial:null;for(let rt=0,It=w.length;rt<It;rt++){const kt=w[rt],{object:Ot,geometry:Kt,group:qt}=kt;let ie=kt.material;ie.allowOverride===!0&&st!==null&&(ie=st),Ot.layers.test(lt.layers)&&Za(Ot,K,lt,Kt,ie,qt)}}function Za(w,K,lt,st,rt,It){w.onBeforeRender(V,K,lt,st,rt,It),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),rt.onBeforeRender(V,K,lt,st,w,It),rt.transparent===!0&&rt.side===Ji&&rt.forceSinglePass===!1?(rt.side=jn,rt.needsUpdate=!0,V.renderBufferDirect(lt,K,st,rt,w,It),rt.side=Os,rt.needsUpdate=!0,V.renderBufferDirect(lt,K,st,rt,w,It),rt.side=Ji):V.renderBufferDirect(lt,K,st,rt,w,It),w.onAfterRender(V,K,lt,st,rt,It)}function Ka(w,K,lt){K.isScene!==!0&&(K=pn);const st=nt.get(w),rt=N.state.lights,It=N.state.shadowsArray,kt=rt.state.version,Ot=Dt.getParameters(w,rt.state,It,K,lt,N.state.lightProbeGridArray),Kt=Dt.getProgramCacheKey(Ot);let qt=st.programs;st.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?K.environment:null,st.fog=K.fog;const ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;st.envMap=Tt.get(w.envMap||st.environment,ie),st.envMapRotation=st.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,qt===void 0&&(w.addEventListener("dispose",mi),qt=new Map,st.programs=qt);let de=qt.get(Kt);if(de!==void 0){if(st.currentProgram===de&&st.lightsStateVersion===kt)return xa(w,Ot),de}else Ot.uniforms=Dt.getUniforms(w),X!==null&&w.isNodeMaterial&&X.build(w,lt,Ot),w.onBeforeCompile(Ot,V),de=Dt.acquireProgram(Ot,Kt),qt.set(Kt,de),st.uniforms=Ot.uniforms;const te=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(te.clippingPlanes=ee.uniform),xa(w,Ot),st.needsLights=oc(w),st.lightsStateVersion=kt,st.needsLights&&(te.ambientLightColor.value=rt.state.ambient,te.lightProbe.value=rt.state.probe,te.directionalLights.value=rt.state.directional,te.directionalLightShadows.value=rt.state.directionalShadow,te.spotLights.value=rt.state.spot,te.spotLightShadows.value=rt.state.spotShadow,te.rectAreaLights.value=rt.state.rectArea,te.ltc_1.value=rt.state.rectAreaLTC1,te.ltc_2.value=rt.state.rectAreaLTC2,te.pointLights.value=rt.state.point,te.pointLightShadows.value=rt.state.pointShadow,te.hemisphereLights.value=rt.state.hemi,te.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,te.spotLightMatrix.value=rt.state.spotLightMatrix,te.spotLightMap.value=rt.state.spotLightMap,te.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.lightProbeGrid=N.state.lightProbeGridArray.length>0,st.currentProgram=de,st.uniformsList=null,de}function va(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=af.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function xa(w,K){const lt=nt.get(w);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function Ws(w,K){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;R.setFromMatrixPosition(K.matrixWorld);for(let lt=0,st=w.length;lt<st;lt++){const rt=w[lt];if(rt.texture!==null&&rt.boundingBox.containsPoint(R))return rt}return null}function Qa(w,K,lt,st,rt){K.isScene!==!0&&(K=pn),ht.resetTextureUnits();const It=K.fog,kt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?K.environment:null,Ot=$===null?V.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:De.workingColorSpace,Kt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,qt=Tt.get(st.envMap||kt,Kt),ie=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,de=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),te=!!lt.morphAttributes.position,Ue=!!lt.morphAttributes.normal,cn=!!lt.morphAttributes.color;let Je=pa;st.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Je=V.toneMapping);const Ie=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ze=Ie!==void 0?Ie.length:0,Vt=nt.get(st),qn=N.state.lights;if(Se===!0&&(ge===!0||w!==bt)){const Oe=w===bt&&st.id===dt;ee.setState(st,w,Oe)}let Me=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==qn.state.version||Vt.outputColorSpace!==Ot||rt.isBatchedMesh&&Vt.batching===!1||!rt.isBatchedMesh&&Vt.batching===!0||rt.isBatchedMesh&&Vt.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&Vt.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&Vt.instancing===!1||!rt.isInstancedMesh&&Vt.instancing===!0||rt.isSkinnedMesh&&Vt.skinning===!1||!rt.isSkinnedMesh&&Vt.skinning===!0||rt.isInstancedMesh&&Vt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Vt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Vt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Vt.instancingMorph===!1&&rt.morphTexture!==null||Vt.envMap!==qt||st.fog===!0&&Vt.fog!==It||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ee.numPlanes||Vt.numIntersection!==ee.numIntersection)||Vt.vertexAlphas!==ie||Vt.vertexTangents!==de||Vt.morphTargets!==te||Vt.morphNormals!==Ue||Vt.morphColors!==cn||Vt.toneMapping!==Je||Vt.morphTargetsCount!==ze||!!Vt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Vt.__version=st.version);let Ln=Vt.currentProgram;Me===!0&&(Ln=Ka(st,K,rt),X&&st.isNodeMaterial&&X.onUpdateProgram(st,Ln,Vt));let gi=!1,Xi=!1,_i=!1;const Fe=Ln.getUniforms(),un=Vt.uniforms;if(E.useProgram(Ln.program)&&(gi=!0,Xi=!0,_i=!0),st.id!==dt&&(dt=st.id,Xi=!0),Vt.needsLights){const Oe=Ws(N.state.lightProbeGridArray,rt);Vt.lightProbeGrid!==Oe&&(Vt.lightProbeGrid=Oe,Xi=!0)}if(gi||bt!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Fe.setValue(z,"projectionMatrix",w.projectionMatrix),Fe.setValue(z,"viewMatrix",w.matrixWorldInverse);const ia=Fe.map.cameraPosition;ia!==void 0&&ia.setValue(z,rn.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&Fe.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),bt!==w&&(bt=w,Xi=!0,_i=!0)}if(Vt.needsLights&&(qn.state.directionalShadowMap.length>0&&Fe.setValue(z,"directionalShadowMap",qn.state.directionalShadowMap,ht),qn.state.spotShadowMap.length>0&&Fe.setValue(z,"spotShadowMap",qn.state.spotShadowMap,ht),qn.state.pointShadowMap.length>0&&Fe.setValue(z,"pointShadowMap",qn.state.pointShadowMap,ht)),rt.isSkinnedMesh){Fe.setOptional(z,rt,"bindMatrix"),Fe.setOptional(z,rt,"bindMatrixInverse");const Oe=rt.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Fe.setValue(z,"boneTexture",Oe.boneTexture,ht))}rt.isBatchedMesh&&(Fe.setOptional(z,rt,"batchingTexture"),Fe.setValue(z,"batchingTexture",rt._matricesTexture,ht),Fe.setOptional(z,rt,"batchingIdTexture"),Fe.setValue(z,"batchingIdTexture",rt._indirectTexture,ht),Fe.setOptional(z,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Fe.setValue(z,"batchingColorTexture",rt._colorsTexture,ht));const Wi=lt.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&Y.update(rt,lt,Ln),(Xi||Vt.receiveShadow!==rt.receiveShadow)&&(Vt.receiveShadow=rt.receiveShadow,Fe.setValue(z,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&K.environment!==null&&(un.envMapIntensity.value=K.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=oC()),Xi){if(Fe.setValue(z,"toneMappingExposure",V.toneMappingExposure),Vt.needsLights&&bn(un,_i),It&&st.fog===!0&&Gt.refreshFogUniforms(un,It),Gt.refreshMaterialUniforms(un,st,xt,St,N.state.transmissionRenderTarget[w.id]),Vt.needsLights&&Vt.lightProbeGrid){const Oe=Vt.lightProbeGrid;un.probesSH.value=Oe.texture,un.probesMin.value.copy(Oe.boundingBox.min),un.probesMax.value.copy(Oe.boundingBox.max),un.probesResolution.value.copy(Oe.resolution)}af.upload(z,va(Vt),un,ht)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(af.upload(z,va(Vt),un,ht),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(z,"center",rt.center),Fe.setValue(z,"modelViewMatrix",rt.modelViewMatrix),Fe.setValue(z,"normalMatrix",rt.normalMatrix),Fe.setValue(z,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){const Oe=st.uniformsGroups;for(let ia=0,ja=Oe.length;ia<ja;ia++){const qs=Oe[ia];Et.update(qs,Ln),Et.bind(qs,Ln)}}return Ln}function bn(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function oc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,K,lt){const st=nt.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),nt.get(w.texture).__webglTexture=K,nt.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const lt=nt.get(w);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(w,K=0,lt=0){$=w,F=K,H=lt;let st=null,rt=!1,It=!1;if(w){const Ot=nt.get(w);if(Ot.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(z.FRAMEBUFFER,Ot.__webglFramebuffer),I.copy(w.viewport),Q.copy(w.scissor),Mt=w.scissorTest,E.viewport(I),E.scissor(Q),E.setScissorTest(Mt),dt=-1;return}else if(Ot.__webglFramebuffer===void 0)ht.setupRenderTarget(w);else if(Ot.__hasExternalTextures)ht.rebindTextures(w,nt.get(w.texture).__webglTexture,nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(Ot.__boundDepthTexture!==ie){if(ie!==null&&nt.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(w)}}const Kt=w.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(It=!0);const qt=nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[K])?st=qt[K][lt]:st=qt[K],rt=!0):w.samples>0&&ht.useMultisampledRTT(w)===!1?st=nt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?st=qt[lt]:st=qt,I.copy(w.viewport),Q.copy(w.scissor),Mt=w.scissorTest}else I.copy($t).multiplyScalar(xt).floor(),Q.copy(Qe).multiplyScalar(xt).floor(),Mt=ue;if(lt!==0&&(st=tt),E.bindFramebuffer(z.FRAMEBUFFER,st)&&E.drawBuffers(w,st),E.viewport(I),E.scissor(Q),E.setScissorTest(Mt),rt){const Ot=nt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ot.__webglTexture,lt)}else if(It){const Ot=K;for(let Kt=0;Kt<w.textures.length;Kt++){const qt=nt.get(w.textures[Kt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Kt,qt.__webglTexture,lt,Ot)}}else if(w!==null&&lt!==0){const Ot=nt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,lt)}dt=-1},this.readRenderTargetPixels=function(w,K,lt,st,rt,It,kt,Ot=0){if(!(w&&w.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(Kt=Kt[kt]),Kt){E.bindFramebuffer(z.FRAMEBUFFER,Kt);try{const qt=w.textures[Ot],ie=qt.format,de=qt.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),!L.textureFormatReadable(ie)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(de)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-st&&lt>=0&&lt<=w.height-rt&&z.readPixels(K,lt,st,rt,Lt.convert(ie),Lt.convert(de),It)}finally{const qt=$!==null?nt.get($).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(w,K,lt,st,rt,It,kt,Ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&kt!==void 0&&(Kt=Kt[kt]),Kt)if(K>=0&&K<=w.width-st&&lt>=0&&lt<=w.height-rt){E.bindFramebuffer(z.FRAMEBUFFER,Kt);const qt=w.textures[Ot],ie=qt.format,de=qt.type;if(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),!L.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,te),z.bufferData(z.PIXEL_PACK_BUFFER,It.byteLength,z.STREAM_READ),z.readPixels(K,lt,st,rt,Lt.convert(ie),Lt.convert(de),0);const Ue=$!==null?nt.get($).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,Ue);const cn=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await sT(z,cn,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,te),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,It),z.deleteBuffer(te),z.deleteSync(cn),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,lt=0){const st=Math.pow(2,-lt),rt=Math.floor(w.image.width*st),It=Math.floor(w.image.height*st),kt=K!==null?K.x:0,Ot=K!==null?K.y:0;ht.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,lt,0,0,kt,Ot,rt,It),E.unbindTexture()},this.copyTextureToTexture=function(w,K,lt=null,st=null,rt=0,It=0){let kt,Ot,Kt,qt,ie,de,te,Ue,cn;const Je=w.isCompressedTexture?w.mipmaps[It]:w.image;if(lt!==null)kt=lt.max.x-lt.min.x,Ot=lt.max.y-lt.min.y,Kt=lt.isBox3?lt.max.z-lt.min.z:1,qt=lt.min.x,ie=lt.min.y,de=lt.isBox3?lt.min.z:0;else{const un=Math.pow(2,-rt);kt=Math.floor(Je.width*un),Ot=Math.floor(Je.height*un),w.isDataArrayTexture?Kt=Je.depth:w.isData3DTexture?Kt=Math.floor(Je.depth*un):Kt=1,qt=0,ie=0,de=0}st!==null?(te=st.x,Ue=st.y,cn=st.z):(te=0,Ue=0,cn=0);const Ie=Lt.convert(K.format),ze=Lt.convert(K.type);let Vt;K.isData3DTexture?(ht.setTexture3D(K,0),Vt=z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ht.setTexture2DArray(K,0),Vt=z.TEXTURE_2D_ARRAY):(ht.setTexture2D(K,0),Vt=z.TEXTURE_2D),E.activeTexture(z.TEXTURE0),E.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const qn=E.getParameter(z.UNPACK_ROW_LENGTH),Me=E.getParameter(z.UNPACK_IMAGE_HEIGHT),Ln=E.getParameter(z.UNPACK_SKIP_PIXELS),gi=E.getParameter(z.UNPACK_SKIP_ROWS),Xi=E.getParameter(z.UNPACK_SKIP_IMAGES);E.pixelStorei(z.UNPACK_ROW_LENGTH,Je.width),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Je.height),E.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),E.pixelStorei(z.UNPACK_SKIP_ROWS,ie),E.pixelStorei(z.UNPACK_SKIP_IMAGES,de);const _i=w.isDataArrayTexture||w.isData3DTexture,Fe=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const un=nt.get(w),Wi=nt.get(K),Oe=nt.get(un.__renderTarget),ia=nt.get(Wi.__renderTarget);E.bindFramebuffer(z.READ_FRAMEBUFFER,Oe.__webglFramebuffer),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let ja=0;ja<Kt;ja++)_i&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.get(w).__webglTexture,rt,de+ja),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.get(K).__webglTexture,It,cn+ja)),z.blitFramebuffer(qt,ie,kt,Ot,te,Ue,kt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(rt!==0||w.isRenderTargetTexture||nt.has(w)){const un=nt.get(w),Wi=nt.get(K);E.bindFramebuffer(z.READ_FRAMEBUFFER,ut),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,q);for(let Oe=0;Oe<Kt;Oe++)_i?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,un.__webglTexture,rt,de+Oe):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,un.__webglTexture,rt),Fe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wi.__webglTexture,It,cn+Oe):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Wi.__webglTexture,It),rt!==0?z.blitFramebuffer(qt,ie,kt,Ot,te,Ue,kt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Fe?z.copyTexSubImage3D(Vt,It,te,Ue,cn+Oe,qt,ie,kt,Ot):z.copyTexSubImage2D(Vt,It,te,Ue,qt,ie,kt,Ot);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Fe?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Vt,It,te,Ue,cn,kt,Ot,Kt,Ie,ze,Je.data):K.isCompressedArrayTexture?z.compressedTexSubImage3D(Vt,It,te,Ue,cn,kt,Ot,Kt,Ie,Je.data):z.texSubImage3D(Vt,It,te,Ue,cn,kt,Ot,Kt,Ie,ze,Je):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,It,te,Ue,kt,Ot,Ie,ze,Je.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,It,te,Ue,Je.width,Je.height,Ie,Je.data):z.texSubImage2D(z.TEXTURE_2D,It,te,Ue,kt,Ot,Ie,ze,Je);E.pixelStorei(z.UNPACK_ROW_LENGTH,qn),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Me),E.pixelStorei(z.UNPACK_SKIP_PIXELS,Ln),E.pixelStorei(z.UNPACK_SKIP_ROWS,gi),E.pixelStorei(z.UNPACK_SKIP_IMAGES,Xi),It===0&&K.generateMipmaps&&z.generateMipmap(Vt),E.unbindTexture()},this.initRenderTarget=function(w){nt.get(w).__webglFramebuffer===void 0&&ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ht.setTextureCube(w,0):w.isData3DTexture?ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ht.setTexture2DArray(w,0):ht.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,E.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}const ry={type:"change"},Qm={type:"start"},bS={type:"end"},Wu=new Tf,oy=new Us,cC=Math.cos(70*Hl.DEG2RAD),Pn=new Z,fi=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ep=1e-6;class uC extends hA{constructor(t,n=null){super(t,n),this.state=Ke.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mo.ROTATE,MIDDLE:Mo.DOLLY,RIGHT:Mo.PAN},this.touches={ONE:So.ROTATE,TWO:So.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Bs,this._lastTargetPosition=new Z,this._quat=new Bs().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Px,this._sphericalDelta=new Px,this._scale=1,this._panOffset=new Z,this._rotateStart=new Yt,this._rotateEnd=new Yt,this._rotateDelta=new Yt,this._panStart=new Yt,this._panEnd=new Yt,this._panDelta=new Yt,this._dollyStart=new Yt,this._dollyEnd=new Yt,this._dollyDelta=new Yt,this._dollyDirection=new Z,this._mouse=new Yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hC.bind(this),this._onPointerDown=fC.bind(this),this._onPointerUp=dC.bind(this),this._onContextMenu=yC.bind(this),this._onMouseWheel=gC.bind(this),this._onKeyDown=_C.bind(this),this._onTouchStart=vC.bind(this),this._onTouchMove=xC.bind(this),this._onMouseDown=pC.bind(this),this._onMouseMove=mC.bind(this),this._interceptControlDown=SC.bind(this),this._interceptControlUp=MC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ry),this.update(),this.state=Ke.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;Pn.copy(n).sub(this.target),Pn.applyQuaternion(this._quat),this._spherical.setFromVector3(Pn),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=fi:a>Math.PI&&(a-=fi),o<-Math.PI?o+=fi:o>Math.PI&&(o-=fi),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(Pn.setFromSpherical(this._spherical),Pn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Pn.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new Z(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=Pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Wu.origin.copy(this.object.position),Wu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wu.direction))<cC?this.object.lookAt(this.target):(oy.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wu.intersectPlane(oy,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Ep||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ep||this._lastTargetPosition.distanceToSquared(this.target)>Ep?(this.dispatchEvent(ry),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fi/60*this.autoRotateSpeed*t:fi/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Pn.setFromMatrixColumn(n,0),Pn.multiplyScalar(-t),this._panOffset.add(Pn)}_panUp(t,n){this.screenSpacePanning===!0?Pn.setFromMatrixColumn(n,1):(Pn.setFromMatrixColumn(n,0),Pn.crossVectors(this.object.up,Pn)),Pn.multiplyScalar(t),this._panOffset.add(Pn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Pn.copy(o).sub(this.target);let c=Pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/n.clientHeight),this._rotateUp(fi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/n.clientHeight),this._rotateUp(fi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Yt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function fC(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function hC(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function dC(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bS),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function pC(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ke.DOLLY;break;case Mo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ke.ROTATE}break;case Mo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(Qm)}function mC(s){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function gC(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(s.preventDefault(),this.dispatchEvent(Qm),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(bS))}function _C(s){this.enabled!==!1&&this._handleKeyDown(s)}function vC(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case So.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ke.TOUCH_ROTATE;break;case So.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case So.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ke.TOUCH_DOLLY_PAN;break;case So.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(Qm)}function xC(s){switch(this._trackPointer(s),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ke.NONE}}function yC(s){this.enabled!==!1&&s.preventDefault()}function SC(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ac{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bC=new Af(-1,1,1,-1,0,1);class EC extends Hn{constructor(){super(),this.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gn([0,2,0,0,2,0],2))}}const TC=new EC;class jm{constructor(t){this._mesh=new xe(TC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,bC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ES extends ac{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Dn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gf.clone(t.uniforms),this.material=new Dn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jm(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ly extends ac{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class AC extends ac{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class RC{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Yt);this._width=a.width,this._height=a.height,n=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ES(sf),this.copyPass.material.blending=da,this.timer=new lA}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}ly!==void 0&&(u instanceof ly?a=!0:u instanceof AC&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wC extends ac{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ce}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const CC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Do extends ac{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Yt(t.x,t.y):new Yt(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(c,u,{type:Ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new ii(c,u,{type:Ui});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new ii(c,u,{type:Ui});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),u=Math.round(u/2)}const h=CC;this.highPassUniforms=gf.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new Yt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gf.clone(sf.uniforms),this.blendMaterial=new Dn({uniforms:this.copyUniforms,vertexShader:sf.vertexShader,fragmentShader:sf.fragmentShader,premultipliedAlpha:!0,blending:lf,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new Ci,this._fsQuad=new jm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Yt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[p].uniforms.direction.value=Do.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Do.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new Dn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Yt(.5,.5)},direction:{value:new Yt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Dn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Do.BlurDirectionX=new Yt(1,0);Do.BlurDirectionY=new Yt(0,1);const _f='"Ma Shan Zheng","ZCOOL XiaoWei","KaiTi","STKaiti",serif',Jm={goldBright:"#e9cf8f"};function Vs(s){const t=new ZT(s);return t.colorSpace=di,t.anisotropy=8,t}function Cf(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function DC(){const n=document.createElement("canvas");n.width=1024,n.height=1128;const a=n.getContext("2d"),o=Cf(20260805),c=a.createLinearGradient(0,0,1024,1128);c.addColorStop(0,"#8a4c2e"),c.addColorStop(.5,"#7d4529"),c.addColorStop(1,"#6b3820"),a.fillStyle=c,a.fillRect(0,0,1024,1128);for(let S=0;S<260;S++){const D=o()*1024,U=1+o()*3.2,R=1128*(.2+o()*.8),B=o()*1128-R/2;a.strokeStyle=o()>.5?"rgba(46,20,10,0.10)":"rgba(214,150,96,0.07)",a.lineWidth=U,a.beginPath(),a.moveTo(D,B),a.bezierCurveTo(D+(o()-.5)*26,B+R*.33,D+(o()-.5)*26,B+R*.66,D+(o()-.5)*14,B+R),a.stroke()}const u=a.createRadialGradient(1024/2,1128/2,80,1024/2,1128/2,1024*.62);u.addColorStop(0,"rgba(255,214,150,0.10)"),u.addColorStop(1,"rgba(0,0,0,0.16)"),a.fillStyle=u,a.fillRect(0,0,1024,1128);const h=S=>(S+4.9)/9.8*1024,p=S=>(S+5.4)/10.8*1128,d=a.createLinearGradient(0,0,1024,0);d.addColorStop(0,"#a5813f"),d.addColorStop(.5,"#e6c87a"),d.addColorStop(1,"#a5813f"),a.strokeStyle=d,a.shadowColor="rgba(0,0,0,0.55)",a.shadowBlur=3,a.shadowOffsetY=2;const _=(S,D,U,R,B=2.6)=>{a.lineWidth=B,a.beginPath(),a.moveTo(h(S),p(D)),a.lineTo(h(U),p(R)),a.stroke()};for(let S=-4;S<=4;S++)_(S,-4.5,S,4.5);for(let S=-4.5;S<=4.5;S++)_(-4,S,4,S,3);_(-1,-4.5,1,-2.5,2),_(1,-4.5,-1,-2.5,2),_(-1,2.5,1,4.5,2),_(1,2.5,-1,4.5,2),a.shadowBlur=0,a.shadowOffsetY=0;const v=[[-3,-2.5],[3,-2.5],[-3,2.5],[3,2.5],[-4,-1.5],[-2,-1.5],[0,-1.5],[2,-1.5],[4,-1.5],[-4,1.5],[-2,1.5],[0,1.5],[2,1.5],[4,1.5]];a.strokeStyle="rgba(230,200,122,0.9)",a.lineWidth=2;const g=.085,x=.13;for(const[S,D]of v)for(const U of[-1,1])for(const R of[-1,1])S===-4&&U<0||S===4&&U>0||(a.beginPath(),a.moveTo(h(S+U*x),p(D+R*x)-R*g*1128/1024*(1024/1128)*(1024/1024)*0+R*-g*(1128/1128)*0),a.moveTo(h(S+U*x),p(D+R*(x+g))),a.lineTo(h(S+U*x),p(D+R*x)),a.lineTo(h(S+U*(x+g)),p(D+R*x)),a.stroke());a.fillStyle="rgba(240,225,190,0.92)",a.strokeStyle="rgba(60,30,10,0.5)",a.lineWidth=2,a.font=`900 118px ${_f}`,a.textAlign="center",a.textBaseline="middle";const M=p(0),T=[["楚",h(-3)],["河",h(-1.4)],["漢",h(1.4)],["界",h(3)]];for(const[S,D]of T)a.strokeText(S,D,M),a.fillText(S,D,M);a.strokeStyle="rgba(214,178,106,0.95)",a.lineWidth=5,a.strokeRect(14,14,996,1100),a.lineWidth=2,a.strokeRect(30,30,964,1068),a.font=`700 34px ${_f}`,a.fillStyle="rgba(233,207,143,0.85)";const y=["一","二","三","四","五","六","七","八","九"];for(let S=0;S<9;S++)a.fillText(y[8-S],h(S-4),1104),a.fillText(String(S+1),h(S-4),24);return Vs(n)}function UC(s,t){const a=document.createElement("canvas");a.width=a.height=256;const o=a.getContext("2d"),c=o.createRadialGradient(256/2,256/2-20,10,256/2,256/2,256/2);t?(c.addColorStop(0,"#b54734"),c.addColorStop(.75,"#8e2f23"),c.addColorStop(1,"#6e2318")):(c.addColorStop(0,"#467067"),c.addColorStop(.75,"#2e5049"),c.addColorStop(1,"#203b35")),o.fillStyle=c,o.beginPath(),o.arc(256/2,256/2,256/2,0,Math.PI*2),o.fill(),o.strokeStyle=Jm.goldBright,o.lineWidth=7,o.beginPath(),o.arc(256/2,256/2,256/2-10,0,Math.PI*2),o.stroke(),o.lineWidth=2.5,o.beginPath(),o.arc(256/2,256/2,256/2-24,0,Math.PI*2),o.stroke(),o.font=`900 150px ${_f}`,o.textAlign="center",o.textBaseline="middle",o.fillStyle="rgba(20,8,4,0.6)",o.fillText(s,256/2+3,256/2+8);const u=o.createLinearGradient(0,40,0,216);return u.addColorStop(0,"#f2dd9e"),u.addColorStop(.5,"#dfc078"),u.addColorStop(1,"#b28a44"),o.fillStyle=u,o.fillText(s,256/2,256/2+4),Vs(a)}function LC(){const t=document.createElement("canvas");t.width=t.height=1024;const n=t.getContext("2d"),a=Cf(7);n.fillStyle="#e7dcc2",n.fillRect(0,0,1024,1024);for(let c=0;c<5200;c++)n.fillStyle=a()>.5?"rgba(120,100,70,0.05)":"rgba(255,252,240,0.06)",n.fillRect(a()*1024,a()*1024,1+a()*2,1+a()*6);for(let c=0;c<26;c++){const u=a()*1024,h=a()*1024,p=40+a()*190,d=n.createRadialGradient(u,h,0,u,h,p),_=a()>.45;d.addColorStop(0,_?"rgba(60,80,86,0.10)":"rgba(140,90,50,0.07)"),d.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(u,h,p,0,Math.PI*2),n.fill()}const o=n.createRadialGradient(1024/2,1024/2,1024*.28,1024/2,1024/2,1024*.52);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(38,52,59,0.26)"),n.fillStyle=o,n.fillRect(0,0,1024,1024),Vs(t)}function NC(s,t,n){const c=document.createElement("canvas");c.width=2048,c.height=512;const u=c.getContext("2d"),h=Cf(s),p=(v,g,x,M)=>{const T=[];for(let y=0;y<=2048;y+=8){const S=y/2048,D=v-Math.sin(S*Math.PI*x+M)*g*.6-Math.sin(S*Math.PI*x*2.7+M*2)*g*.28-h()*g*.12;T.push(Math.max(30,Math.min(452,D)))}return T},d=(v,g)=>{const x=u.createLinearGradient(0,Math.min(...v),0,512);x.addColorStop(0,t.replace("A",String(g))),x.addColorStop(1,t.replace("A","0")),u.fillStyle=x,u.beginPath(),u.moveTo(0,512),v.forEach((M,T)=>u.lineTo(T*8,M)),u.lineTo(2048,512),u.closePath(),u.fill()};d(p(512*.42,150,3+h()*3,h()*6),n),d(p(512*.58,110,5+h()*4,h()*6),n*.66);for(let v=0;v<8;v++){const g=512*(.42+h()*.3),x=u.createLinearGradient(0,g-30,0,g+30);x.addColorStop(0,"rgba(240,238,228,0)"),x.addColorStop(.5,`rgba(240,238,228,${.1+h()*.08})`),x.addColorStop(1,"rgba(240,238,228,0)"),u.fillStyle=x,u.fillRect(0,g-30,2048,60)}const _=Vs(c);return _.wrapS=Xl,_}function PC(s,t){const o=document.createElement("canvas");o.width=256,o.height=768;const c=o.getContext("2d"),u=c.createLinearGradient(0,0,256,0);t?(u.addColorStop(0,"#8e2f23"),u.addColorStop(.5,"#b54734"),u.addColorStop(1,"#8e2f23")):(u.addColorStop(0,"#1d322d"),u.addColorStop(.5,"#33534b"),u.addColorStop(1,"#1d322d")),c.fillStyle=u,c.fillRect(0,0,256,768);const h=Cf(3);for(let d=0;d<700;d++)c.fillStyle=h()>.5?"rgba(0,0,0,0.05)":"rgba(255,255,255,0.04)",c.fillRect(h()*256,h()*768,2,1);c.strokeStyle=Jm.goldBright,c.lineWidth=10,c.strokeRect(10,10,236,748),c.font=`900 190px ${_f}`,c.textAlign="center",c.textBaseline="middle",c.fillStyle="rgba(15,6,3,0.55)",c.fillText(s,256/2+4,768/2+4);const p=c.createLinearGradient(0,768/2-90,0,768/2+90);return p.addColorStop(0,"#f2dd9e"),p.addColorStop(1,"#b28a44"),c.fillStyle=p,c.fillText(s,256/2,768/2),c.globalCompositeOperation="destination-out",c.beginPath(),c.moveTo(256/2-46,768),c.lineTo(256/2+46,768),c.lineTo(256/2,678),c.closePath(),c.fill(),c.globalCompositeOperation="source-over",Vs(o)}function OC(s){const n=document.createElement("canvas");n.width=n.height=256;const a=n.getContext("2d");a.fillStyle=s?"#9c3527":"#274b44",a.fillRect(0,0,256,256),a.strokeStyle=Jm.goldBright,a.lineWidth=6,a.strokeRect(12,12,232,232),a.lineWidth=2,a.strokeRect(26,26,204,204);const o=192/8;a.lineWidth=3;for(let c=0;c<8;c++){const u=32+c*o;a.strokeRect(u+2,30,o-4,10),a.strokeRect(u+2,216,o-4,10),a.strokeRect(30,u+2,10,o-4),a.strokeRect(216,u+2,10,o-4)}a.translate(256/2,256/2);for(let c=0;c<8;c++)a.rotate(Math.PI/4),a.beginPath(),a.ellipse(0,-40,16,34,0,0,Math.PI*2),a.fillStyle="rgba(233,207,143,0.85)",a.fill();return a.beginPath(),a.arc(0,0,22,0,Math.PI*2),a.fillStyle=s?"#e9cf8f":"#dfc078",a.fill(),Vs(n)}function BC(s){const n=document.createElement("canvas");n.width=n.height=128;const a=n.getContext("2d");a.fillStyle=s,a.fillRect(0,0,128,128);const o=16,c=12;for(let h=0;h<128/c;h++)for(let p=-1;p<128/o+1;p++){const d=p*o+(h%2?o/2:0),_=h*c,v=a.createLinearGradient(d,_,d,_+c);v.addColorStop(0,"rgba(255,235,190,0.5)"),v.addColorStop(1,"rgba(20,10,5,0.55)"),a.fillStyle=v,a.beginPath(),a.roundRect(d+1,_+1,o-2,c+4,4),a.fill()}const u=Vs(n);return u.wrapS=u.wrapT=Xl,u}function IC(s,t){const a=document.createElement("canvas");a.width=a.height=256;const o=a.getContext("2d"),c=o.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return c.addColorStop(0,s),c.addColorStop(.4,t),c.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=c,o.fillRect(0,0,256,256),Vs(a)}const Tp=new Map;function TS(s){const t=s?"r":"b";if(Tp.has(t))return Tp.get(t);const n=s?11025452:3825496,a=s?8268318:2508096,o=s?14202218:12174537,c={glaze:new mp({color:n,roughness:.38,metalness:.08,clearcoat:.7,clearcoatRoughness:.28}),glazeDeep:new mp({color:a,roughness:.42,metalness:.08,clearcoat:.55,clearcoatRoughness:.32}),trim:new tn({color:o,roughness:.26,metalness:.95,emissive:o,emissiveIntensity:.12}),bronze:new tn({color:5925726,roughness:.34,metalness:.9}),dark:new tn({color:2366742,roughness:.72,metalness:.05}),wood:new tn({color:4860951,roughness:.78,metalness:.02}),skin:new tn({color:11892558,roughness:.82,metalness:0}),ivory:new tn({color:15391160,roughness:.5,metalness:0}),cream:new tn({color:15721935,roughness:.9,metalness:0,side:Ji}),jade:new mp({color:13623504,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.1,emissive:10467496,emissiveIntensity:.15}),armor:new tn({map:BC(s?"#7e2a1e":"#1d322d"),roughness:.5,metalness:.35}),saddle:new tn({map:OC(s),roughness:.85,metalness:0})};return Tp.set(t,c),c}function Fs(...s){const t=new Re;return s.forEach(n=>t.add(n)),t}function Rt(s,t,n=0,a=0,o=0){const c=new xe(s,t);return c.position.set(n,a,o),c.castShadow=!0,c}const dn=(s,t=14,n=10)=>new jl(s,t,n),Xe=(s,t,n,a=12)=>new hi(s,t,n,a),hn=(s,t,n)=>new zs(s,t,n),ma=(s,t,n=10)=>new Ql(s,t,n),Hs=(s,t,n=20)=>new fa(s,t,8,n);function zC(s){const t=Sr("K"),n=Rt(Xe(.15,.3,.5,16),s.glaze,0,.25,0),a=Rt(Xe(.085,.085,.015),s.trim,0,.35,.145);a.rotation.x=Math.PI/2;const o=Rt(Hs(.185,.022),s.trim,0,.29,0);o.rotation.x=Math.PI/2;const c=Rt(dn(.075),s.glazeDeep,-.17,.47,0),u=Rt(dn(.075),s.glazeDeep,.17,.47,0),h=Rt(Xe(.042,.048,.24),s.glaze,-.12,.4,.1);h.rotation.set(.7,0,.5);const p=Rt(Xe(.042,.048,.24),s.glaze,.12,.4,.1);p.rotation.set(.7,0,-.5);const d=Rt(hn(.075,.22,.018),s.jade,0,.4,.2);d.rotation.x=-.12;const _=Rt(dn(.105,18,14),s.skin,0,.6,0),v=Rt(Xe(.11,.115,.05,14),s.dark,0,.685,0),g=Rt(hn(.25,.016,.14),s.dark,0,.722,0),x=Rt(hn(.05,.03,.02),s.trim,0,.7,.075),M=[];for(const S of[.062,-.062])for(let D=0;D<4;D++){const U=new Re;U.position.set(-.09+D*.06,.715,S);for(let R=0;R<3;R++)U.add(Rt(dn(.011,8,6),R%2?s.jade:s.trim,0,-.035-R*.032,0));M.push(U)}const T=new Re;T.position.set(0,.52,-.14);const y=Rt(hn(.34,.42,.018),s.glazeDeep,0,-.2,-.02);return T.add(y),T.rotation.x=.16,t.root.add(Fs(n,a,o,c,u,h,p,d,_,v,g,x,T,...M)),t.head=_,t.body=n,t.cape=T,t.capeBase=.16,t.beads=M,t.height=.78,t}function FC(s){const t=Sr("A"),n=Rt(Xe(.13,.26,.46,14),s.glaze,0,.23,0),a=Rt(Hs(.155,.016),s.trim,0,.28,0);a.rotation.x=Math.PI/2;const o=Rt(Xe(.05,.1,.24,10),s.glazeDeep,-.16,.34,.02);o.rotation.z=.5;const c=Rt(Xe(.05,.1,.24,10),s.glazeDeep,.17,.36,.06);c.rotation.set(.5,0,-.55);const u=new Re;u.position.set(.22,.3,.13),u.add(Rt(Xe(.011,.013,.17),s.wood,0,0,0));for(let v=0;v<5;v++){const g=Rt(ma(.035,.17,6),s.cream,0,.14,0);g.scale.z=.28,g.rotation.z=(v-2)*.28,g.position.x=(v-2)*.028,g.position.y=.14+Math.abs(v-2)*-.012,u.add(g)}const h=Rt(dn(.095,16,12),s.skin,0,.535,0),p=Rt(Xe(.095,.1,.06,12),s.dark,0,.6,0),d=Rt(hn(.15,.014,.05),s.dark,-.155,.615,-.01);d.rotation.z=.1;const _=Rt(hn(.15,.014,.05),s.dark,.155,.615,-.01);return _.rotation.z=-.1,t.root.add(Fs(n,a,o,c,u,h,p,d,_)),t.head=h,t.body=n,t.fan=u,t.height=.66,t}function HC(s){const t=Sr("B"),n=Rt(dn(.24,18,14),s.glaze,0,.4,0);n.scale.set(1.02,.82,1.35);const a=Rt(hn(.38,.05,.42),s.saddle,0,.565,-.02),o=[];for(const S of[-1,1])for(const D of[-1,1])o.push(Rt(dn(.02,8,6),s.trim,S*.17,.53,-.02+D*.19));const c=Rt(dn(.165,16,12),s.glaze,0,.52,.31),u=Rt(Xe(.06,.06,.012),s.trim,0,.6,.4);u.rotation.x=-.55;const h=[];let p=new Re;p.position.set(0,.47,.44),p.rotation.x=1.05;const d=[0,-.34,-.3,-.22];for(let S=0;S<4;S++){const D=new Re,U=.052-S*.009,R=Rt(Xe(U,U+.008,.15,10),s.glaze,0,-.075,0);D.add(R),S>0&&(D.position.y=-.15,D.rotation.x=d[S]),p.add(D),h.push(D),p=D}const _=h[0],v=Rt(ma(.028,.16,8),s.ivory,-.1,.42,.42);v.rotation.x=1.25,v.rotation.z=.15;const g=Rt(ma(.028,.16,8),s.ivory,.1,.42,.42);g.rotation.x=1.25,g.rotation.z=-.15;const x=[];for(const S of[-1,1]){const D=new Re;D.position.set(S*.1,.56,.26);const U=Rt(dn(.15,12,8),s.glazeDeep,S*.09,0,0);U.scale.set(.9,1.05,.22),D.add(U),x.push(D)}const M=[],T=[[-.13,.15],[.13,.15],[-.13,-.17],[.13,-.17]];for(const[S,D]of T){const U=new Re;U.position.set(S,.34,D),U.add(Rt(Xe(.065,.075,.32,10),s.glazeDeep,0,-.16,0));const R=Rt(Hs(.075,.012),s.trim,0,-.28,0);R.rotation.x=Math.PI/2,U.add(R),M.push(U)}const y=new Re;return y.position.set(0,.44,-.33),y.rotation.x=-.7,y.add(Rt(Xe(.018,.028,.2,8),s.glazeDeep,0,-.1,0)),y.add(Rt(ma(.03,.07,8),s.dark,0,-.23,0)),t.root.add(Fs(n,a,...o,c,u,_,v,g,...x,...M,y)),t.body=n,t.head=c,t.trunk=h,t.trunkBase=[1.05,-.34,-.3,-.22],t.ears=x,t.legs=M,t.legPhase=[0,Math.PI,Math.PI,0],t.legAmp=.3,t.tail=y,t.tailBase=-.7,t.height=.7,t}function GC(s){const t=Sr("N"),n=Rt(dn(.26,18,14),s.glaze,0,.44,0);n.scale.set(.85,.9,1.45);const a=Rt(Xe(.075,.105,.3,12),s.glaze,0,.62,.26);a.rotation.x=.55;const o=new Re;o.position.set(0,.76,.4);const c=Rt(dn(.1,14,10),s.glaze,0,0,0);c.scale.set(.8,.85,1.35);const u=Rt(dn(.055,10,8),s.glazeDeep,0,-.045,.15);u.scale.set(.85,.8,1.2);const h=Rt(ma(.022,.07,6),s.dark,-.045,.1,-.03),p=Rt(ma(.022,.07,6),s.dark,.045,.1,-.03),d=Rt(Hs(.06,.008),s.trim,0,-.03,.14);d.rotation.x=.4,o.add(c,u,h,p,d),o.rotation.x=.35;const _=[];for(let y=0;y<5;y++){const S=y/4;_.push(Rt(hn(.028,.075,.05),s.dark,0,.8-S*.2,.33-S*.18))}const v=Rt(hn(.3,.045,.28),s.saddle,0,.6,-.02),g=Rt(Hs(.1,.022,14),s.trim,0,.625,-.02);g.rotation.x=Math.PI/2,g.scale.set(1.4,1,.6);const x=[],M=[[-.11,.24],[.11,.24],[-.11,-.24],[.11,-.24]];for(const[y,S]of M){const D=new Re;D.position.set(y,.36,S),D.add(Rt(Xe(.048,.038,.2,10),s.glaze,0,-.1,0));const U=new Re;U.position.y=-.2,U.add(Rt(Xe(.032,.028,.16,8),s.glazeDeep,0,-.07,0)),U.add(Rt(hn(.065,.045,.08),s.dark,0,-.16,.01)),D.add(U),x.push(D)}const T=new Re;return T.position.set(0,.52,-.36),T.rotation.x=-.85,T.add(Rt(Xe(.02,.035,.24,8),s.dark,0,-.12,0)),T.add(Rt(ma(.045,.1,8),s.dark,0,-.28,0)),t.root.add(Fs(n,a,o,..._,v,g,...x,T)),t.body=n,t.head=o,t.legs=x,t.legPhase=[0,Math.PI,Math.PI,0],t.legAmp=.5,t.tail=T,t.tailBase=-.85,t.height=.84,t}function VC(s){const t=Sr("R"),n=new Re,a=Rt(hn(.44,.15,.48),s.glaze,0,.34,0),o=Rt(hn(.46,.028,.03),s.trim,0,.44,.24),c=Rt(hn(.03,.028,.48),s.trim,-.215,.44,0),u=Rt(hn(.03,.028,.48),s.trim,.215,.44,0),h=Rt(hn(.018,.12,.38),s.saddle,-.225,.33,0),p=Rt(hn(.018,.12,.38),s.saddle,.225,.33,0),d=new Re;d.position.set(-.1,.42,-.1),d.rotation.z=.12,d.add(Rt(Xe(.014,.016,.55),s.wood,0,.22,0));const _=Rt(hn(.018,.05,.14),s.trim,0,.47,.05);d.add(_),d.add(Rt(ma(.02,.07,8),s.trim,0,.53,0)),n.add(a,o,c,u,h,p,d);const v=[];for(const M of[-1,1]){const T=new Re;T.position.set(M*.27,.26,0);const y=Rt(Xe(.26,.26,.05,20),s.wood,0,0,0);y.rotation.z=Math.PI/2,T.add(y);for(let S=0;S<8;S++){const D=Rt(hn(.022,.22,.022),s.trim,0,0,0);D.rotation.x=S/8*Math.PI,D.rotation.order="ZXY";const U=new Re;U.rotation.z=Math.PI/2,U.add(D),U.rotation.y=S/8*Math.PI,T.add(U)}T.add(Rt(dn(.05,10,8),s.trim,0,0,0)),v.push(T)}const g=Rt(Xe(.026,.03,.5),s.wood,0,.3,.48);g.rotation.x=Math.PI/2;const x=Rt(hn(.3,.035,.05),s.trim,0,.3,.72);return t.root.add(Fs(n,...v,g,x)),t.body=n,t.wheels=v,t.wheelRadius=.26,t.height=.72,t}function kC(s){const t=Sr("C"),n=Rt(hn(.3,.08,.42),s.wood,0,.24,-.02),a=Rt(hn(.09,.05,.38),s.wood,0,.16,-.3);a.rotation.x=.28;const o=Rt(hn(.05,.12,.1),s.glazeDeep,-.1,.34,.06),c=Rt(hn(.05,.12,.1),s.glazeDeep,.1,.34,.06),u=[];for(const T of[-1,1]){const y=new Re;y.position.set(T*.2,.2,.06);const S=Rt(Xe(.2,.2,.045,18),s.wood,0,0,0);S.rotation.z=Math.PI/2,y.add(S);for(let D=0;D<6;D++){const U=Rt(hn(.02,.17,.02),s.trim),R=new Re;R.rotation.z=Math.PI/2,R.add(U),R.rotation.y=D/6*Math.PI,y.add(R)}y.add(Rt(dn(.042,10,8),s.trim)),u.push(y)}const h=new Re;h.position.set(0,.4,.04);const p=Rt(Xe(.075,.095,.55,16),s.bronze,0,0,.02);p.rotation.x=Math.PI/2,h.add(p);for(const T of[-.18,0,.18]){const y=Rt(Hs(.088,.013),s.trim,0,0,T);h.add(y)}const d=Rt(Hs(.082,.016),s.trim,0,0,.3);h.add(d);const _=Rt(dn(.075,12,8),s.bronze,0,0,-.27);h.add(_);const v=Rt(dn(.1,10,8),new Ci({color:16765562,transparent:!0,opacity:.9}),0,0,.36);v.scale.setScalar(.001),h.add(v);const g=Rt(dn(.02,8,6),new Ci({color:16752704}),0,.09,-.22);h.add(g);const x=new Un;x.position.set(0,0,.36),h.add(x);const M=Fs(Rt(dn(.045,10,8),s.dark,.16,.045,-.2),Rt(dn(.045,10,8),s.dark,.24,.045,-.14),Rt(dn(.045,10,8),s.dark,.2,.12,-.17));return t.root.add(Fs(n,a,o,c,...u,h,M)),t.wheels=u,t.wheelRadius=.2,t.barrel=h,t.muzzle=x,t.muzzleFlash=v,t.fuseSpark=g,t.height=.56,t}function XC(s){const t=Sr("P"),n=[];for(const T of[-1,1]){const y=new Re;y.position.set(T*.065,.2,0),y.add(Rt(Xe(.045,.05,.2,8),s.dark,0,-.1,0)),n.push(y)}const a=Rt(Xe(.13,.165,.14,12),s.glazeDeep,0,.27,0),o=Rt(Xe(.105,.125,.24,12),s.armor,0,.45,0),c=Rt(dn(.06,10,8),s.glaze,-.125,.55,0);c.scale.y=.7;const u=Rt(dn(.06,10,8),s.glaze,.125,.55,0);u.scale.y=.7;const h=Rt(Xe(.032,.036,.2,8),s.glaze,.16,.46,.03);h.rotation.z=-.25;const p=Rt(Xe(.032,.036,.18,8),s.glaze,-.15,.47,0);p.rotation.z=.35;const d=new Re;d.position.set(.19,.06,.05),d.add(Rt(Xe(.011,.013,.62),s.wood,0,.31,0));const _=Rt(ma(.024,.09,8),s.trim,0,.66,0);d.add(_);const v=Rt(ma(.03,.06,8),s.glaze,0,.6,0);v.rotation.x=Math.PI,d.add(v);const g=Rt(dn(.088,16,12),s.skin,0,.62,0),x=Rt(dn(.034,8,6),s.dark,0,.7,-.02),M=Rt(Hs(.088,.01),s.trim,0,.635,0);return M.rotation.x=Math.PI/2,t.root.add(Fs(...n,a,o,c,u,p,h,d,g,x,M)),t.head=g,t.body=o,t.legs=n,t.legPhase=[0,Math.PI],t.legAmp=.42,t.spear=d,t.height=.72,t}function Sr(s){return{kind:s,root:new Re,legs:[],legPhase:[],legAmp:.35,wheels:[],trunk:[],trunkBase:[],ears:[],beads:[],tailBase:0,capeBase:0,marchPhase:Math.random()*6,wheelRadius:.25,height:.6}}function WC(s,t){const n=TS(t);let a;switch(s){case"K":a=zC(n);break;case"A":a=FC(n);break;case"B":a=HC(n);break;case"N":a=GC(n);break;case"R":a=VC(n);break;case"C":a=kC(n);break;default:a=XC(n);break}return a.root.traverse(o=>{o.frustumCulled=!1}),a}function qC(s,t,n,a,o=3){if(s.body){const h=1+Math.sin(t*2.1+s.marchPhase)*.015;s.body.scale.y=h*(s.body.userData.baseSY??1)}a&&(s.marchPhase+=n*o*3.2);const c=a?1:0;s.root.userData.marchMix=Hl.lerp(s.root.userData.marchMix??0,c,Math.min(1,n*8));const u=s.root.userData.marchMix;if(s.legs.forEach((h,p)=>{h.rotation.x=Math.sin(s.marchPhase+(s.legPhase[p]??0))*s.legAmp*u}),s.wheels.forEach(h=>{a&&(h.rotation.x+=n*o/s.wheelRadius)}),s.trunk.forEach((h,p)=>{const d=s.trunkBase[p]??0;h.rotation.x=d+Math.sin(t*1.7+p*.7+s.marchPhase*.1)*(.07+p*.02)-u*.3}),s.ears.forEach((h,p)=>{const d=p===0?-1:1;h.rotation.y=d*(.12+Math.sin(t*2.3+p)*.13)}),s.tail&&(s.tail.rotation.x=s.tailBase+Math.sin(t*1.9)*.16),s.fan&&(s.fan.rotation.z=Math.sin(t*1.4)*.16+u*.3),s.cape&&(s.cape.rotation.x=s.capeBase+Math.sin(t*1.5)*.05+u*.22),s.beads.forEach((h,p)=>{h.rotation.x=Math.sin(t*1.8+p*.9)*(.08+u*.12)}),s.head&&!s.trunk.length&&(s.head.rotation.y=Math.sin(t*.55+s.marchPhase)*.08),s.fuseSpark){const h=.7+Math.abs(Math.sin(t*7.3))*.9;s.fuseSpark.scale.setScalar(h),s.fuseSpark.material.color.setHSL(.07,1,.5+Math.abs(Math.sin(t*11))*.25)}}const YC=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ZC=`
varying vec3 vDir;
uniform float uTime;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
void main(){
  float h = clamp(vDir.y, -0.05, 1.0);
  vec3 top = vec3(0.10, 0.16, 0.21);     // 黛青
  vec3 mid = vec3(0.47, 0.53, 0.55);     // 烟云
  vec3 low = vec3(0.89, 0.86, 0.75);     // 宣纸雾
  vec3 col = mix(low, mid, smoothstep(0.0, 0.22, h));
  col = mix(col, top, smoothstep(0.18, 0.75, h));
  // 云纹
  vec2 uv = vDir.xz / max(0.12, vDir.y + 0.25);
  float n = noise(uv * 2.0 + uTime * 0.008) * 0.5 + noise(uv * 5.0 - uTime * 0.012) * 0.25;
  col += vec3(0.06, 0.055, 0.045) * n * smoothstep(0.55, 0.1, h);
  // 地平线暖调（红日方向）
  float sunAz = atan(vDir.z, vDir.x);
  float warm = smoothstep(0.72, 1.0, cos(sunAz + 2.01)) * smoothstep(0.30, 0.02, h);
  col += vec3(0.26, 0.09, 0.02) * warm;
  gl_FragColor = vec4(col, 1.0);
}`;function KC(s){const t={update:()=>{},lanternLights:[]},n=[];s.fog=new Ym(14081227,26,95);const a={uTime:{value:0}},o=new xe(new jl(120,32,20),new Dn({vertexShader:YC,fragmentShader:ZC,uniforms:a,side:jn,depthWrite:!1,fog:!1}));s.add(o),n.push({obj:o,fn:V=>{a.uTime.value=V}});const u=new Z(-.42,0,-.89).normalize().clone().multiplyScalar(58).setY(8.5),h=new xe(new Kl(5.2,40),new Ci({color:13715803,fog:!1}));h.position.copy(u),h.lookAt(0,6,0),s.add(h);const p=new VT(new oS({map:IC("rgba(255,120,90,0.85)","rgba(209,73,91,0.28)"),transparent:!0,depthWrite:!1,fog:!1}));p.scale.setScalar(26),p.position.copy(u),s.add(p),n.push({obj:p,fn:V=>{p.material.opacity=.85+Math.sin(V*.7)*.12}});const d=[[11,"rgba(72,94,102,A)",.6,56,26],[23,"rgba(48,66,74,A)",.78,45,21],[37,"rgba(28,40,46,A)",.95,34,17]];for(const[V,G,X,tt,ut]of d){const q=NC(V,G,X),F=new hi(tt,tt,ut,64,1,!0),H=new Ci({map:q,transparent:!0,side:jn,depthWrite:!1,fog:!0}),$=new xe(F,H);$.position.y=ut/2-.6,s.add($)}const _=new xe(new Kl(60,48),new tn({map:LC(),roughness:.95,metalness:0}));_.rotation.x=-Math.PI/2,_.position.y=-.52,_.receiveShadow=!0,s.add(_);const v=new tn({color:9145732,roughness:.9,metalness:.02}),g=new tn({color:7171942,roughness:.92}),x=new xe(new hi(9.2,9.8,.34,8),g);x.position.y=-.36,x.rotation.y=Math.PI/8,x.receiveShadow=!0;const M=new xe(new hi(7.6,8,.22,8),v);M.position.y=-.1,M.rotation.y=Math.PI/8,M.receiveShadow=!0,s.add(x,M);const T=new xe(new fa(6.9,.05,6,8),new tn({color:13214812,roughness:.3,metalness:.9}));T.rotation.x=Math.PI/2,T.rotation.z=Math.PI/8,T.position.y=.02,s.add(T);const y=[],S=[[-6.4,-6.4],[6.4,-6.4],[-6.4,6.4],[6.4,6.4]];for(const[V,G]of S){const X=new Re;X.position.set(V,0,G);const tt=new xe(new hi(.05,.07,3.2,8),new tn({color:3022098,roughness:.8}));tt.position.y=1.1,tt.castShadow=!0;const ut=new xe(new fa(.3,.03,6,12,Math.PI),tt.material);ut.position.set(Math.sign(-V)*.28,2.62,0),ut.rotation.z=Math.sign(-V)>0?-.4:Math.PI+.4;const q=new Re;q.position.set(Math.sign(-V)*.52,2.3,0);const F=new Ci({color:14702138,transparent:!0,opacity:.94}),H=new xe(new hi(.2,.2,.34,6),F),$=new xe(new hi(.24,.16,.08,6),new tn({color:13214812,metalness:.9,roughness:.3}));$.position.y=.21;const dt=$.clone();dt.rotation.x=Math.PI,dt.position.y=-.21;const bt=new xe(new Ql(.05,.22,6),new tn({color:14202218,roughness:.7}));bt.position.y=-.42,bt.rotation.x=Math.PI;const I=new aA(16747088,3.2,7,1.8);I.position.y=0,q.add(H,$,dt,bt,I),X.add(tt,ut,q),s.add(X),y.push(q),t.lanternLights.push(I)}n.push({obj:s,fn:V=>{y.forEach((G,X)=>{G.rotation.z=Math.sin(V*1.1+X*1.7)*.06,G.rotation.x=Math.cos(V*.9+X*2.3)*.05;const tt=t.lanternLights[X];tt.intensity=3.2+Math.sin(V*6+X*2.6)*.5})}});const D=[],U=(V,G,X,tt)=>{const ut=new Re;ut.position.set(X,0,tt);const q=new xe(new hi(.045,.06,5.2,8),new tn({color:3022098,roughness:.8}));q.position.y=2.1,q.castShadow=!0;const F=new xe(new jl(.09,10,8),new tn({color:14202218,metalness:.9,roughness:.25}));F.position.y=4.75;const H=PC(V,G),$=new xe(new Lo(1.1,3,6,12),new tn({map:H,transparent:!0,side:Ji,roughness:.85,alphaTest:.1,emissive:16777215,emissiveMap:H,emissiveIntensity:.22}));$.position.set(.62,3.2,0),ut.add(q,F,$),s.add(ut),D.push({cloth:$,phase:Math.random()*6})};U("帥",!0,-7.8,2.6),U("將",!1,7.8,-2.6);const R=new tn({color:2901048,roughness:.9}),B=new tn({color:4008472,roughness:.9}),N=(V,G,X)=>{const tt=new Re;tt.position.set(V,-.5,G),tt.scale.setScalar(X);const ut=new xe(new hi(.09,.14,1.2,7),B);ut.position.y=.6,ut.rotation.z=.08,tt.add(ut);const q=[[.9,.9,1.4],[.7,.75,2.05],[.48,.6,2.6]];for(const[F,H,$]of q){const dt=new xe(new Ql(F,H,8),R);dt.position.y=$,dt.scale.y=.62,dt.castShadow=!0,tt.add(dt)}s.add(tt)};N(-10.5,3.5,1.5),N(11,-4.5,1.8),N(9.5,8.5,1.2),s.add(new nA(14543082,9075290,.95));const O=new _p(16769968,2.3);O.position.set(8,14,6),O.castShadow=!0,O.shadow.mapSize.set(2048,2048),O.shadow.camera.left=-9,O.shadow.camera.right=9,O.shadow.camera.top=9,O.shadow.camera.bottom=-9,O.shadow.camera.far=40,O.shadow.bias=-4e-4,s.add(O);const A=new _p(16738901,.8);A.position.copy(u.clone().setY(12).normalize().multiplyScalar(20)),s.add(A);const P=new _p(10467529,.4);return P.position.set(-6,8,-8),s.add(P),n.push({obj:s,fn:V=>{for(const G of D){const X=G.cloth.geometry.attributes.position;for(let tt=0;tt<X.count;tt++){const ut=X.getX(tt),q=X.getY(tt),F=(ut+.55)/1.1;X.setZ(tt,Math.sin(V*3.2+G.phase+F*4.5+q*1.2)*.11*F)}X.needsUpdate=!0}}}),t.update=(V,G)=>{for(const X of n)X.fn(V,G)},t}class cy{constructor(t,n,a){this.variables=[],this.currentTextureIndex=0;let o=Vi;const c={passThruTexture:{value:null}},u=d(v(),c),h=new jm(u);this.setDataType=function(g){return o=g,this},this.addVariable=function(g,x,M){const T=this.createShaderMaterial(x),y={name:g,initialValueTexture:M,material:T,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Sn,magFilter:Sn};return this.variables.push(y),y},this.setVariableDependencies=function(g,x){g.dependencies=x},this.init=function(){if(a.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let g=0;g<this.variables.length;g++){const x=this.variables[g];x.renderTargets[0]=this.createRenderTarget(t,n,x.wrapS,x.wrapT,x.minFilter,x.magFilter),x.renderTargets[1]=this.createRenderTarget(t,n,x.wrapS,x.wrapT,x.minFilter,x.magFilter),this.renderTexture(x.initialValueTexture,x.renderTargets[0]),this.renderTexture(x.initialValueTexture,x.renderTargets[1]);const M=x.material,T=M.uniforms;if(x.dependencies!==null)for(let y=0;y<x.dependencies.length;y++){const S=x.dependencies[y];if(S.name!==x.name){let D=!1;for(let U=0;U<this.variables.length;U++)if(S.name===this.variables[U].name){D=!0;break}if(!D)return"Variable dependency not found. Variable="+x.name+", dependency="+S.name}T[S.name]={value:null},M.fragmentShader=`
uniform sampler2D `+S.name+`;
`+M.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const g=this.currentTextureIndex,x=this.currentTextureIndex===0?1:0;for(let M=0,T=this.variables.length;M<T;M++){const y=this.variables[M];if(y.dependencies!==null){const S=y.material.uniforms;for(let D=0,U=y.dependencies.length;D<U;D++){const R=y.dependencies[D];S[R.name].value=R.renderTargets[g].texture}}this.doRenderTarget(y.material,y.renderTargets[x])}this.currentTextureIndex=x},this.getCurrentRenderTarget=function(g){return g.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(g){return g.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){h.dispose();const g=this.variables;for(let x=0;x<g.length;x++){const M=g[x];M.initialValueTexture&&M.initialValueTexture.dispose();const T=M.renderTargets;for(let y=0;y<T.length;y++)T[y].dispose();M.material.dispose()}};function p(g){g.defines.resolution="vec2( "+t.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=p;function d(g,x){x=x||{};const M=new Dn({name:"GPUComputationShader",uniforms:x,vertexShader:_(),fragmentShader:g});return p(M),M}this.createShaderMaterial=d,this.createRenderTarget=function(g,x,M,T,y,S){return g=g||t,x=x||n,M=M||ta,T=T||ta,y=y||Sn,S=S||Sn,new ii(g,x,{wrapS:M,wrapT:T,minFilter:y,magFilter:S,format:Di,type:o,depthBuffer:!1})},this.createTexture=function(){const g=new Float32Array(t*n*4),x=new cS(g,t,n,Di,Vi);return x.needsUpdate=!0,x},this.renderTexture=function(g,x){c.passThruTexture.value=g,this.doRenderTarget(u,x),c.passThruTexture.value=null},this.doRenderTarget=function(g,x){const M=a.getRenderTarget(),T=a.xr.enabled,y=a.shadowMap.autoUpdate;a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,h.material=g,a.setRenderTarget(x),h.render(a),h.material=u,a.xr.enabled=T,a.shadowMap.autoUpdate=y,a.setRenderTarget(M)};function _(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function v(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const ws=128,Cs=96,QC=`
vec3 curl(vec3 p, float t){
  float x = sin(p.y*0.9 + t*0.4) + cos(p.z*0.7 + t*0.3);
  float y = sin(p.z*0.8 + t*0.5) + cos(p.x*0.6 + t*0.4);
  float z = sin(p.x*0.7 + t*0.3) + cos(p.y*0.9 + t*0.5);
  return vec3(x, y, z) * 0.33;
}
`,jC=`
uniform float uDt;
uniform float uTime;
void main(){
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 p = texture2D(texturePosition, uv);
  vec4 v = texture2D(textureVelocity, uv);
  float age = uTime - v.w;
  // 寿命尽 或 接近地面即重生（绝不让花瓣落地堆积）
  if (age > p.w || p.y < 0.08) {
    float rnd = fract(sin(dot(uv + uTime, vec2(12.9898, 78.233))) * 43758.5453);
    float rnd2 = fract(sin(dot(uv - uTime, vec2(39.3468, 11.1353))) * 24634.6345);
    p.x = (rnd - 0.5) * 17.0;
    p.z = (rnd2 - 0.5) * 19.0;
    p.y = 5.5 + rnd * 4.0;
    v.w = uTime;
    p.w = 8.0 + rnd2 * 9.0;
  }
  p.xyz += v.xyz * uDt;
  gl_FragColor = p;
}`,JC=`
uniform float uDt;
uniform float uTime;
${QC}
void main(){
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 p = texture2D(texturePosition, uv);
  vec4 v = texture2D(textureVelocity, uv);
  float petal = step(0.5, fract(uv.x * 61.7 + uv.y * 83.3));  // 一半花瓣一半雾
  vec3 c = curl(p.xyz * 0.6, uTime);
  // 花瓣：缓降 + 摇曳；雾：水平漂移
  vec3 fallV = mix(vec3(0.0, -0.16, 0.0), vec3(0.0, -0.03, 0.0), petal);
  vec3 drift = c * mix(0.30, 0.55, petal);
  drift.y *= 0.35;
  v.xyz = mix(v.xyz, fallV + drift, min(1.0, uDt * 1.6));
  gl_FragColor = v;
}`,$C=`
uniform float uDt;
uniform float uTime;
uniform vec3 uBurstPos[1];
uniform float uBurstTime[1];
void main(){
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 p = texture2D(texturePosition, uv);
  vec4 v = texture2D(textureVelocity, uv);
  float birth = uBurstTime[0];
  if (birth > p.w + 0.0001) {
    // 新一轮爆发：重置到爆发点
    float rnd = fract(sin(dot(uv + birth, vec2(12.9898, 78.233))) * 43758.5453);
    float rnd2 = fract(sin(dot(uv - birth, vec2(39.3468, 11.1353))) * 24634.6345);
    p.xyz = uBurstPos[0] + (vec3(rnd, rnd2, fract(rnd * 7.13)) - 0.5) * 0.1;
    p.w = birth;
  }
  p.xyz += v.xyz * uDt;
  gl_FragColor = p;
}`,tD=`
uniform float uDt;
uniform float uTime;
uniform float uBurstTime[1];
void main(){
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 p = texture2D(texturePosition, uv);
  vec4 v = texture2D(textureVelocity, uv);
  float birth = uBurstTime[0];
  // 爆发首帧：球面喷射 + 上挑
  if (birth > -0.5 && abs(birth - p.w) < 0.001 && v.w <= 0.0) {
    float a = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
    float b = fract(sin(dot(uv, vec2(39.3468, 11.1353))) * 24634.6345) * 2.0 - 1.0;
    float r = sqrt(1.0 - b * b);
    float sp = 1.1 + fract(a * 13.7) * 2.0;
    v.xyz = vec3(r * cos(a), abs(b) * 0.9 + 0.6, r * sin(a)) * sp;
    v.w = 0.42 + fract(a * 7.31) * 0.5;
  }
  // 重力 + 阻力 + 生命衰减
  v.y -= 4.2 * uDt;
  v.xyz *= (1.0 - min(0.9, uDt * 1.9));
  v.w -= uDt;
  gl_FragColor = v;
}`,uy=`
attribute vec2 ref;
uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;
uniform float uSize;
uniform float uTime;
varying float vLife;
varying float vTwinkle;
varying float vPetal;
void main(){
  vec4 p = texture2D(texturePosition, ref);
  vec4 v = texture2D(textureVelocity, ref);
  vLife = v.w;
  vPetal = step(0.5, fract(ref.x * 61.7 + ref.y * 83.3));
  vec4 mv = modelViewMatrix * vec4(p.xyz, 1.0);
  gl_Position = projectionMatrix * mv;
  float ps = uSize * (10.0 / max(0.1, -mv.z));
  gl_PointSize = min(ps, 13.0);
  vTwinkle = 0.65 + 0.35 * sin(uTime * 3.0 + ref.x * 40.0 + ref.y * 57.0);
}`,eD=`
varying float vLife;
varying float vTwinkle;
varying float vPetal;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uAlpha;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  // 花瓣略椭圆，雾为正圆柔边
  d.x *= mix(1.0, 1.6, vPetal);
  float r = length(d);
  float a = smoothstep(0.5, 0.08, r) * uAlpha * vTwinkle;
  vec3 col = mix(uColorA, uColorB, vPetal);
  gl_FragColor = vec4(col, a);
}`,nD=`
varying float vLife;
uniform vec3 uColors[1];
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d);
  float fade = smoothstep(0.5, 0.05, r) * clamp(vLife * 2.8, 0.0, 1.0);
  gl_FragColor = vec4(uColors[0] * 1.15, fade);
}`;class iD{ok=!0;gpuA;gpuB;aPos;aVel;bPos;bVel;time=0;bColors=[];constructor(t,n){try{this.initAmbient(t,n),this.initBurst(t,n)}catch(a){console.warn("[gpgpu] 降级为无粒子模式",a),this.ok=!1}}initAmbient(t,n){const a=new cy(ws,ws,t),o=a.createTexture(),c=a.createTexture(),u=o.image.data,h=c.image.data;for(let M=0;M<u.length;M+=4)u[M]=(Math.random()-.5)*17,u[M+1]=Math.random()*6,u[M+2]=(Math.random()-.5)*19,u[M+3]=8+Math.random()*9,h[M]=(Math.random()-.5)*.2,h[M+1]=-Math.random()*.15,h[M+2]=(Math.random()-.5)*.2,h[M+3]=-Math.random()*17;this.aPos=a.addVariable("texturePosition",jC,o),this.aVel=a.addVariable("textureVelocity",JC,c),a.setVariableDependencies(this.aPos,[this.aPos,this.aVel]),a.setVariableDependencies(this.aVel,[this.aPos,this.aVel]),this.aPos.material.uniforms.uDt={value:0},this.aPos.material.uniforms.uTime={value:0},this.aVel.material.uniforms.uDt={value:0},this.aVel.material.uniforms.uTime={value:0};const p=a.init();if(p)throw new Error(p);this.gpuA=a;const d=ws*ws,_=new Hn;_.setAttribute("position",new ni(new Float32Array(d*3),3));const v=new Float32Array(d*2);for(let M=0;M<d;M++)v[M*2]=M%ws/ws,v[M*2+1]=Math.floor(M/ws)/ws;_.setAttribute("ref",new ni(v,2));const g=new Dn({vertexShader:uy,fragmentShader:eD,uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uSize:{value:2.1},uTime:{value:0},uAlpha:{value:.38},uColorA:{value:new ce(15254634)},uColorB:{value:new ce(14542042)}},transparent:!0,depthWrite:!1,blending:_r}),x=new Tx(_,g);x.frustumCulled=!1,n.add(x),this.aPoints=x}aPoints;bPoints;initBurst(t,n){const a=new cy(Cs,Cs,t),o=a.createTexture(),c=a.createTexture(),u=o.image.data,h=c.image.data;for(let y=0;y<u.length;y+=4)u[y+3]=-1,h[y+3]=-1;this.bPos=a.addVariable("texturePosition",$C,o),this.bVel=a.addVariable("textureVelocity",tD,c),a.setVariableDependencies(this.bPos,[this.bPos,this.bVel]),a.setVariableDependencies(this.bVel,[this.bPos,this.bVel]);const p=[],d=[];p.push(new Z),d.push(-1),this.bColors.push(new ce(1,.7,.3)),this.bPos.material.uniforms.uDt={value:0},this.bPos.material.uniforms.uTime={value:0},this.bPos.material.uniforms.uBurstPos={value:p},this.bPos.material.uniforms.uBurstTime={value:d},this.bVel.material.uniforms.uDt={value:0},this.bVel.material.uniforms.uTime={value:0},this.bVel.material.uniforms.uBurstTime={value:d};const _=a.init();if(_)throw new Error(_);this.gpuB=a;const v=Cs*Cs,g=new Hn;g.setAttribute("position",new ni(new Float32Array(v*3),3));const x=new Float32Array(v*2);for(let y=0;y<v;y++)x[y*2]=y%Cs/Cs,x[y*2+1]=Math.floor(y/Cs)/Cs;g.setAttribute("ref",new ni(x,2));const M=new Dn({vertexShader:uy.replace("varying float vPetal;","varying float vPetal;").replace("float ps = uSize * (10.0 / max(0.1, -mv.z));","float ps = uSize * (10.0 / max(0.1, -mv.z)) * clamp(vLife * 3.0, 0.0, 1.0);"),fragmentShader:nD,uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uSize:{value:3.4},uTime:{value:0},uColors:{value:[this.bColors[0]]}},transparent:!0,depthWrite:!1,blending:lf}),T=new Tx(g,M);T.frustumCulled=!1,n.add(T),this.bPoints=T}burst(t,n=16757070){if(!this.ok||!this.gpuB||!this.bPos)return;const a=this.bPos.material.uniforms,o=this.bVel.material.uniforms;a.uBurstPos.value[0].copy(t),a.uBurstTime.value[0]=this.time,o.uBurstTime.value[0]=this.time,this.bColors[0].set(n);const c=this.bPoints?.material;c&&(c.uniforms.uColors.value=[this.bColors[0]])}update(t){if(this.ok){if(this.time+=t,this.gpuA&&this.aPos&&this.aVel){this.aPos.material.uniforms.uDt.value=t,this.aPos.material.uniforms.uTime.value=this.time,this.aVel.material.uniforms.uDt.value=t,this.aVel.material.uniforms.uTime.value=this.time,this.gpuA.compute();const n=this.aPoints?.material;n&&(n.uniforms.texturePosition.value=this.gpuA.getCurrentRenderTarget(this.aPos).texture,n.uniforms.textureVelocity.value=this.gpuA.getCurrentRenderTarget(this.aVel).texture,n.uniforms.uTime.value=this.time)}if(this.gpuB&&this.bPos&&this.bVel){this.bPos.material.uniforms.uDt.value=t,this.bPos.material.uniforms.uTime.value=this.time,this.bVel.material.uniforms.uDt.value=t,this.bVel.material.uniforms.uTime.value=this.time,this.gpuB.compute();const n=this.bPoints?.material;n&&(n.uniforms.texturePosition.value=this.gpuB.getCurrentRenderTarget(this.bPos).texture,n.uniforms.textureVelocity.value=this.gpuB.getCurrentRenderTarget(this.bVel).texture,n.uniforms.uTime.value=this.time)}}}}const yo=[146.83,164.81,185,220,246.94,293.66,329.63,369.99,440,493.88,587.33,659.25],Ap=73.42,fy=110;class aD{ctx=null;master;bgmBus;sfxBus;verb;ksCache=new Map;noiseBuf=null;timer=null;nextBeat=0;beat=0;phrase=[];phraseOwner="zheng";intensity=0;bgmMuted=!1;sfxMuted=!1;started=!1;init(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;this.ctx=new t;const n=this.ctx;this.master=n.createGain(),this.master.gain.value=.9;const a=n.createDynamicsCompressor();a.threshold.value=-18,a.knee.value=22,a.ratio.value=5,a.attack.value=.004,a.release.value=.24,this.master.connect(a),a.connect(n.destination),this.verb=n.createConvolver(),this.verb.buffer=this.makeImpulse(1.9,3.2);const o=n.createGain();o.gain.value=.33,this.verb.connect(o),o.connect(this.master),this.bgmBus=n.createGain(),this.bgmBus.gain.value=.8,this.sfxBus=n.createGain(),this.sfxBus.gain.value=1;for(const h of[this.bgmBus,this.sfxBus])h.connect(this.master),h.connect(this.verb);const c=n.createBuffer(1,n.sampleRate*2,n.sampleRate),u=c.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1;this.noiseBuf=c,this.startAmbience(),this.startPad(),this.nextBeat=n.currentTime+.15,this.timer=window.setInterval(()=>this.schedule(),42),this.started=!0}destroy(){this.timer!==null&&clearInterval(this.timer),this.ctx?.close(),this.ctx=null,this.started=!1}setBgmMuted(t){this.bgmMuted=t,this.bgmBus&&this.bgmBus.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.1)}setSfxMuted(t){this.sfxMuted=t,this.sfxBus&&this.sfxBus.gain.setTargetAtTime(t?0:1,this.ctx.currentTime,.05)}get isBgmMuted(){return this.bgmMuted}get isSfxMuted(){return this.sfxMuted}poke(t){this.intensity=Math.min(1,this.intensity+t)}makeImpulse(t,n){const a=this.ctx,o=Math.floor(a.sampleRate*t),c=a.createBuffer(2,o,a.sampleRate);for(let u=0;u<2;u++){const h=c.getChannelData(u);for(let p=0;p<o;p++)h[p]=(Math.random()*2-1)*Math.pow(1-p/o,n)}return c}ks(t){const n=Math.round(t*10),a=this.ksCache.get(n);if(a)return a;const o=this.ctx,c=o.sampleRate,u=Math.max(2,Math.round(c/t)),h=2.4,p=Math.floor(c*h),d=o.createBuffer(1,p,c),_=d.getChannelData(0),v=new Float32Array(u);for(let T=0;T<u;T++)v[T]=Math.random()*2-1;const g=Math.exp(-(2.4+t*.0016)/(h*c));let x=0;for(let T=0;T<p;T++){const y=v[x],S=v[(x+1)%u];v[x]=g*.5*(y+S),_[T]=y,x=(x+1)%u}const M=Math.floor(c*.005);for(let T=0;T<M;T++)_[T]*=T/M;return this.ksCache.set(n,d),this.ksCache.size>40&&this.ksCache.clear(),d}pluck(t,n,a=.5,o=0,c=9e3){const u=this.ctx,h=u.createBufferSource();h.buffer=this.ks(t);const p=u.createGain();p.gain.setValueAtTime(a,n);const d=u.createBiquadFilter();d.type="lowpass",d.frequency.value=c;const _=u.createStereoPanner();_.pan.value=o,h.connect(d),d.connect(p),p.connect(_),_.connect(this.bgmBus),h.start(n),h.stop(n+2.5)}dizi(t,n,a,o=.22){const c=this.ctx,u=c.createOscillator();u.type="triangle",u.frequency.setValueAtTime(t*.985,n),u.frequency.exponentialRampToValueAtTime(t,n+.09);const h=c.createOscillator();h.type="sine",h.frequency.value=t;const p=c.createOscillator();p.frequency.value=5.4;const d=c.createGain();d.gain.value=0,d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(t*.012,n+Math.min(.8,a*.5)),p.connect(d),d.connect(u.frequency);const _=c.createBufferSource();_.buffer=this.noiseBuf,_.loop=!0;const v=c.createBiquadFilter();v.type="bandpass",v.frequency.value=t*4,v.Q.value=2.2;const g=c.createGain();g.gain.value=o*.55,_.connect(v),v.connect(g);const x=c.createGain();x.gain.setValueAtTime(0,n),x.gain.linearRampToValueAtTime(o,n+.14),x.gain.setValueAtTime(o,Math.max(n+.14,n+a-.3)),x.gain.linearRampToValueAtTime(0,n+a),g.connect(x),u.connect(x),h.connect(x);const M=c.createStereoPanner();M.pan.value=-.15,x.connect(M),M.connect(this.bgmBus),u.start(n),h.start(n),p.start(n),_.start(n);const T=n+a+.05;u.stop(T),h.stop(T),p.stop(T),_.stop(T)}startPad(){const t=this.ctx,n=t.createGain();n.gain.value=.045;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=320;for(const[u,h]of[[Ap,-4],[fy,3],[Ap*2,6]]){const p=t.createOscillator();p.type="sine",p.frequency.value=u,p.detune.value=h,p.connect(a),p.start()}const o=t.createOscillator();o.frequency.value=.06;const c=t.createGain();c.gain.value=.018,o.connect(c),c.connect(n.gain),o.start(),a.connect(n),n.connect(this.bgmBus)}drum(t,n=100,a=.5,o=.32){const c=this.ctx,u=c.createOscillator();u.type="sine",u.frequency.setValueAtTime(n,t),u.frequency.exponentialRampToValueAtTime(n*.42,t+.16);const h=c.createGain();h.gain.setValueAtTime(a,t),h.gain.exponentialRampToValueAtTime(.001,t+o),u.connect(h),h.connect(this.bgmBus),u.start(t),u.stop(t+o+.05);const p=c.createBufferSource();p.buffer=this.noiseBuf;const d=c.createBiquadFilter();d.type="lowpass",d.frequency.value=260;const _=c.createGain();_.gain.setValueAtTime(a*.5,t),_.gain.exponentialRampToValueAtTime(.001,t+.09),p.connect(d),d.connect(_),_.connect(this.bgmBus),p.start(t),p.stop(t+.1)}gong(t,n=.32,a){const o=this.ctx,c=a??this.bgmBus,u=[1,1.19,1.56,2.01,2.66,3.36],h=196;for(let v=0;v<u.length;v++){const g=o.createOscillator();g.type="sine",g.frequency.value=h*u[v];const x=o.createGain(),M=n/(v*.9+1);x.gain.setValueAtTime(0,t),x.gain.linearRampToValueAtTime(M,t+.012+v*.004),x.gain.exponentialRampToValueAtTime(8e-4,t+2.8-v*.3),g.connect(x),x.connect(c),g.start(t),g.stop(t+3)}const p=o.createBufferSource();p.buffer=this.noiseBuf;const d=o.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(3200,t),d.frequency.exponentialRampToValueAtTime(900,t+1.6),d.Q.value=1.4;const _=o.createGain();_.gain.setValueAtTime(n*.5,t),_.gain.exponentialRampToValueAtTime(.001,t+1.6),p.connect(d),d.connect(_),_.connect(c),p.start(t),p.stop(t+1.7)}clap(t,n=.14){const a=this.ctx,o=a.createOscillator();o.type="square",o.frequency.value=1150;const c=a.createGain();c.gain.setValueAtTime(n,t),c.gain.exponentialRampToValueAtTime(.001,t+.045);const u=a.createBiquadFilter();u.type="bandpass",u.frequency.value=1150,u.Q.value=3,o.connect(u),u.connect(c),c.connect(this.bgmBus),o.start(t),o.stop(t+.06)}startAmbience(){const t=this.ctx,n=t.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=380,a.Q.value=.55;const o=t.createGain();o.gain.value=.035;const c=t.createOscillator();c.frequency.value=.08;const u=t.createGain();u.gain.value=.02,c.connect(u),u.connect(o.gain),n.connect(a),a.connect(o),o.connect(this.bgmBus),n.start(),c.start();const h=()=>{if(!this.ctx)return;const p=t.currentTime+.05,d=2+Math.floor(Math.random()*2),_=t.createStereoPanner();_.pan.value=Math.random()*1.6-.8,_.connect(this.bgmBus);for(let v=0;v<d;v++){const g=p+v*(.16+Math.random()*.1),x=t.createOscillator();x.type="sine";const M=2200+Math.random()*900;x.frequency.setValueAtTime(M,g),x.frequency.exponentialRampToValueAtTime(M*1.4,g+.05),x.frequency.exponentialRampToValueAtTime(M*.9,g+.12);const T=t.createGain();T.gain.setValueAtTime(0,g),T.gain.linearRampToValueAtTime(.028,g+.02),T.gain.exponentialRampToValueAtTime(.001,g+.14),x.connect(T),T.connect(_),x.start(g),x.stop(g+.16)}window.setTimeout(h,7e3+Math.random()*14e3)};window.setTimeout(h,3500)}buildPhrase(t){const n=[];let a=Math.random()<.5?5:7,o=0;const c=4+Math.floor(Math.random()*5);if(Math.random()<.12&&this.phraseOwner==="zheng"){const h=5+Math.floor(Math.random()*4),p=Math.max(0,a-h);for(let d=0;d<h;d++)n.push({time:o,freq:yo[p+d],dur:.09,vel:.16+d*.02}),o+=.065}for(let h=0;h<c;h++){const p=[-2,-1,-1,0,1,1,2,3,-3][Math.floor(Math.random()*9)];a=Math.max(2,Math.min(yo.length-1,a+p));const _=[.5,.5,1,.75,.25][Math.floor(Math.random()*5)]*t;n.push({time:o,freq:yo[a],dur:_*.92,vel:.24+Math.random()*.16}),o+=_}const u=Math.random()<.6?5:3;n.push({time:o,freq:yo[u],dur:t*1.8,vel:.3}),o+=t*(1.6+Math.random()*1.6),this.phrase=n,this.phraseLength=o}phraseLength=4;phraseStart=0;schedule(){const t=this.ctx;if(!t||this.bgmMuted){t&&(this.nextBeat=Math.max(this.nextBeat,t.currentTime+.05));return}const n=.18;this.intensity=Math.max(0,this.intensity-.004);const o=60/(68+this.intensity*26);for(;this.nextBeat<t.currentTime+n;){const c=this.nextBeat;if(this.beat++,c>=this.phraseStart+this.phraseLength-.01){this.phraseOwner=this.phraseOwner==="zheng"&&Math.random()<.45?"dizi":"zheng",this.buildPhrase(o),this.phraseStart=c+o*(this.phraseOwner==="dizi"?.5:0);for(const h of this.phrase){const p=this.phraseStart+h.time;this.phraseOwner==="zheng"?this.pluck(h.freq,p,h.vel,.12):this.dizi(h.freq*2,p,Math.max(h.dur,.6),.1)}this.phraseOwner==="dizi"&&(this.pluck(yo[1]/2,this.phraseStart,.2,.2,2400),this.pluck(yo[3]/2,this.phraseStart+o*2,.16,.2,2400))}this.beat%4===0&&this.pluck(Ap*2,c,.2,-.25,1600),this.beat%8===6&&this.pluck(fy*2,c,.15,-.25,1600);const u=this.intensity;u>.1&&this.beat%4===0&&this.drum(c,95,.28+u*.25),u>.3&&this.beat%4===2&&this.drum(c,85,.22+u*.22),u>.5&&this.beat%2===1&&this.drum(c+o*.5,130,.16+u*.15,.2),u>.65&&this.beat%4===3&&(this.clap(c,.1),this.clap(c+o*.5,.08)),u>.8&&this.beat%16===8&&this.gong(c,.2),this.nextBeat+=o}}now(){return this.ctx?this.ctx.currentTime:0}ready(){return!!this.ctx&&!this.sfxMuted}sfxPluck(t,n,a=9e3){const o=this.ctx,c=o.createBufferSource();c.buffer=this.ks(t);const u=o.createGain();u.gain.value=n;const h=o.createBiquadFilter();h.type="lowpass",h.frequency.value=a,c.connect(h),h.connect(u),u.connect(this.sfxBus),c.start(),c.stop(this.now()+2)}sfxNoise(t,n,a,o,c=1){const u=this.ctx,h=u.createBufferSource();h.buffer=this.noiseBuf;const p=u.createBiquadFilter();p.type=n,p.frequency.value=a,p.Q.value=c;const d=u.createGain(),_=this.now();d.gain.setValueAtTime(o,_),d.gain.exponentialRampToValueAtTime(.001,_+t),h.connect(p),p.connect(d),d.connect(this.sfxBus),h.start(_),h.stop(_+t+.02)}sfxTone(t,n,a,o,c="sine"){const u=this.ctx,h=this.now(),p=u.createOscillator();p.type=c,p.frequency.setValueAtTime(t,h),p.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+a*.8);const d=u.createGain();d.gain.setValueAtTime(o,h),d.gain.exponentialRampToValueAtTime(.001,h+a),p.connect(d),d.connect(this.sfxBus),p.start(h),p.stop(h+a+.02)}sfx={select:()=>{this.ready()&&(this.sfxTone(760,700,.07,.16,"triangle"),this.sfxNoise(.03,"highpass",3200,.05))},deselect:()=>{this.ready()&&this.sfxTone(520,470,.06,.1,"triangle")},move:()=>{this.ready()&&(this.sfxTone(210,95,.1,.4,"triangle"),this.sfxNoise(.05,"lowpass",800,.3),this.sfxTone(95,60,.16,.22))},capture:()=>{this.ready()&&(this.drumSfx(150,.5),this.sfxNoise(.22,"highpass",4200,.28,1.6),this.gong(this.now(),.12,this.sfxBus),this.poke(.35))},cannonFire:()=>{this.ready()&&(this.sfxTone(90,38,.5,.7),this.sfxNoise(.4,"lowpass",500,.5),this.poke(.3))},check:()=>{this.ready()&&(this.gong(this.now(),.3,this.sfxBus),this.drumSfx(110,.5),this.poke(.6))},win:()=>{if(!this.ready())return;const t=this.now();this.gong(t,.4,this.sfxBus),[293.66,329.63,369.99,440,493.88,587.33,659.25].forEach((n,a)=>{window.setTimeout(()=>this.sfxPluck(n,.3),120+a*80)});for(let n=0;n<6;n++)window.setTimeout(()=>this.drumSfx(120,.4),100+n*(140-n*12));this.poke(1)},lose:()=>{this.ready()&&(this.drumSfx(70,.5),[293.66,246.94,220,185,146.83].forEach((t,n)=>{window.setTimeout(()=>this.sfxPluck(t,.22,3e3),200+n*260)}))},illegal:()=>{this.ready()&&(this.sfxTone(230,190,.06,.16,"square"),window.setTimeout(()=>this.sfxTone(210,180,.06,.12,"square"),90))},undo:()=>{this.ready()&&this.sfxTone(980,1180,.09,.12,"triangle")},button:()=>{this.ready()&&this.sfxPluck(587.33,.12)},newGame:()=>{this.ready()&&(this.gong(this.now(),.2,this.sfxBus),window.setTimeout(()=>this.sfxPluck(293.66,.25),150),window.setTimeout(()=>this.sfxPluck(440,.2),300))}};drumSfx(t,n){const a=this.now(),o=this.ctx,c=o.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,a),c.frequency.exponentialRampToValueAtTime(t*.4,a+.15);const u=o.createGain();u.gain.setValueAtTime(n,a),u.gain.exponentialRampToValueAtTime(.001,a+.3),c.connect(u),u.connect(this.sfxBus),c.start(a),c.stop(a+.35)}}const Cn=new aD,qu=1,Yu=9.8,Rp=10.8,Ds=.14,Zu=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,sD=s=>1-Math.pow(1-s,3),rD=s=>s*s*s,oD={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:1.05},uGrain:{value:.045},uAspect:{value:16/9}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uGrain, uAspect;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
    void main(){
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      vec2 dir = vUv - 0.5;
      float v = smoothstep(1.25, 0.32, length(dir * vec2(uAspect, 1.0)) * 1.12);
      col *= mix(1.0, v, uVignette * 0.55);
      col *= vec3(1.02, 1.0, 0.97);                         // 暖宣纸调
      float g = (hash(gl_FragCoord.xy + fract(uTime * 13.7) * 97.0) - 0.5);
      col += g * uGrain * (1.0 - 0.5 * dot(col, vec3(0.333)));
      gl_FragColor = vec4(col, 1.0);
    }`};class lD{renderer;scene=new BT;camera;controls;composer;clock=new fA;env;gpgpu;pieces=new Map;tweens=[];hintGroup=new Re;lastMoveGroup=new Re;selectRing;checkRing;raycaster=new uA;pointer=new Yt;trayCount={r:0,b:0};shakeAmp=0;lastShakeOffset=new Z;idleTimer=0;raf=0;disposed=!1;introDone=!1;cinematic=!1;cineAngle=0;boardGroup=new Re;canvas;onCellClick=null;constructor(t){this.canvas=t,this.renderer=new lC({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hy,this.renderer.toneMapping=Om,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=di,this.camera=new Ri(42,1,.1,300),this.camera.position.set(0,2,17.5),this.controls=new uC(this.camera,t),this.controls.target.set(0,1.15,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI*.46,this.controls.minDistance=5,this.controls.maxDistance=26,this.controls.autoRotateSpeed=.55,this.controls.enabled=!1,this.composer=new RC(this.renderer),this.composer.addPass(new wC(this.scene,this.camera));const n=new Do(new Yt(1,1),.5,.45,.72);this.composer.addPass(n);const a=new ES(oD);this.composer.addPass(a),this.env=KC(this.scene),this.gpgpu=new iD(this.renderer,this.scene);const o=DC(),c=new xe(new Lo(Yu,Rp),new tn({map:o,roughness:.5,metalness:.08}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0;const u=new xe(new zs(Yu+.55,.3,Rp+.55),new tn({color:4858901,roughness:.6}));u.position.y=-.16,u.castShadow=!0;const h=new xe(new zs(Yu+.62,.06,Rp+.62),new tn({color:13214812,metalness:.9,roughness:.3}));h.position.y=-.03,this.boardGroup.add(c,u,h),this.boardGroup.position.y=.03,this.scene.add(this.boardGroup),this.selectRing=new xe(new fa(.44,.025,8,40),new Ci({color:16767370,transparent:!0,opacity:.9})),this.selectRing.rotation.x=-Math.PI/2,this.selectRing.visible=!1,this.checkRing=new xe(new fa(.5,.035,8,40),new Ci({color:16726832,transparent:!0,opacity:0})),this.checkRing.rotation.x=-Math.PI/2,this.scene.add(this.selectRing,this.checkRing,this.hintGroup,this.lastMoveGroup),this.resize(),window.addEventListener("resize",this.resize),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerMove),this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,this.idleTimer=0}),this.loop()}async init(){try{await Promise.race([Promise.all([document.fonts.load('110px "Ma Shan Zheng"',"帥將楚河漢界馬車炮兵仕相士卒象"),document.fonts.load('24px "ZCOOL XiaoWei"',"楚河漢界")]),new Promise(t=>setTimeout(t,2600))])}catch{}}boardToWorld(t,n){return new Z((t-4)*qu,0,(n-4.5)*qu)}buildPedestal(t,n){const a=TS(t==="r"),o=new Re,c=new xe(new hi(.365,.385,Ds,36),a.glazeDeep);c.position.y=Ds/2,c.castShadow=!0;const u=new xe(new Kl(.355,36),new tn({map:UC(n,t==="r"),roughness:.4,metalness:.1}));u.rotation.x=-Math.PI/2,u.position.y=Ds+.002;const h=new xe(new fa(.36,.016,8,40),a.trim);return h.rotation.x=Math.PI/2,h.position.y=Ds,o.add(c,u,h),o}spawnPiece(t,n,a){const o=Py[t.color][t.type],c=this.buildPedestal(t.color,o),u=WC(t.type,t.color==="r"),h=u.root;h.position.y=Ds,h.rotation.y=t.color==="r"?Math.PI:0,h.userData.homeYaw=h.rotation.y;const p=new Re;p.add(c,h);const d=this.boardToWorld(n,a);p.position.set(d.x,.03,d.z),p.userData.cell={x:n,y:a},this.scene.add(p),this.pieces.set(`${n},${a}`,{color:t.color,type:t.type,char:o,group:p,pedestal:c,charRoot:h,rig:u,alive:!0})}setBoard(t){for(const n of this.pieces.values())this.scene.remove(n.group);this.pieces.clear(),this.trayCount={r:0,b:0},this.clearHints(),this.clearLastMove(),this.selectRing.visible=!1,this.checkRing.material.opacity=0;for(let n=0;n<10;n++)for(let a=0;a<9;a++){const o=t[n][a];o&&this.spawnPiece(o,a,n)}}showHints(t){this.clearHints();for(const n of t){const a=this.boardToWorld(n.x,n.y);if(n.capture){const o=new xe(new fa(.42,.022,8,36),new Ci({color:14699066,transparent:!0,opacity:.85}));o.rotation.x=-Math.PI/2,o.position.set(a.x,.06,a.z),o.userData.pulse=!0,this.hintGroup.add(o)}else{const o=new xe(new hi(.1,.1,.02,20),new Ci({color:5556618,transparent:!0,opacity:.8}));o.position.set(a.x,.06,a.z),o.userData.pulse=!0,this.hintGroup.add(o)}}}clearHints(){this.hintGroup.children.forEach(t=>this.hintGroup.remove(t))}showSelection(t,n){const a=this.boardToWorld(t,n);this.selectRing.position.set(a.x,.07,a.z),this.selectRing.visible=!0}hideSelection(){this.selectRing.visible=!1}showLastMove(t,n){this.clearLastMove();for(const a of[t,n]){const o=this.boardToWorld(a.x,a.y),c=new xe(new fa(.4,.014,8,36),new Ci({color:14202218,transparent:!0,opacity:.4}));c.rotation.x=-Math.PI/2,c.position.set(o.x,.05,o.z),this.lastMoveGroup.add(c)}}clearLastMove(){this.lastMoveGroup.children.forEach(t=>this.lastMoveGroup.remove(t))}animate(t,n,a=Zu){return new Promise(o=>{this.tweens.push({t:0,dur:t,update:n,resolve:o,ease:a})})}async faceYaw(t,n,a=.22){const o=t.charRoot,c=o.rotation.y;let u=n-c;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;await this.animate(a,h=>{o.rotation.y=c+u*h})}async playMove(t,n){const a=`${t.from.x},${t.from.y}`,o=this.pieces.get(a);if(!o)return;this.pieces.delete(a);const c=n?this.pieces.get(`${t.to.x},${t.to.y}`):void 0;c&&this.pieces.delete(`${t.to.x},${t.to.y}`),this.pieces.set(`${t.to.x},${t.to.y}`,o);const u=o.group.position.clone(),h=this.boardToWorld(t.to.x,t.to.y).setY(.03),p=Math.atan2(h.x-u.x,h.z-u.z),d=u.distanceTo(h),v=Math.max(.3,d/3.4);await this.faceYaw(o,p);const g={on:!0};o.group.userData.marching=g;const x=o.type==="N"?.38:o.type==="B"?.07:o.type==="P"?.05:0;await this.animate(v,M=>{o.group.position.lerpVectors(u,h,M),o.group.position.y=.03+Math.sin(M*Math.PI)*x}),o.group.position.copy(h),o.group.userData.marching=null,c?(await this.attackAndCapture(o,c),Cn.sfx.capture()):(await this.animate(.12,M=>{o.group.position.y=.03+Math.sin(M*Math.PI)*.05}),Cn.sfx.move()),await this.faceYaw(o,o.charRoot.userData.homeYaw,.3),this.showLastMove(t.from,t.to)}async attackAndCapture(t,n){const a=t.rig,o=n.group,c=o.position.clone().setY(.5),u=(async()=>{switch(a.kind){case"C":{if(a.muzzleFlash&&a.barrel){const d=a.muzzleFlash;Cn.sfx.cannonFire();const _=new Z;a.muzzle.getWorldPosition(_),this.gpgpu.burst(_,16761962),this.shakeAmp=Math.max(this.shakeAmp,.35),await this.animate(.09,v=>d.scale.setScalar(.001+v*1.9),sD),await this.animate(.16,v=>{d.scale.setScalar(1.9*(1-v)),a.barrel.position.z=.04-Math.sin(v*Math.PI)*.13,a.barrel.rotation.x=-Math.sin(v*Math.PI)*.16})}break}case"N":{await this.animate(.3,d=>{t.charRoot.rotation.x=-Math.sin(d*Math.PI)*.55}),t.charRoot.rotation.x=0;break}case"B":{const d=a.head,_=a.trunkBase.slice();await this.animate(.34,v=>{d.rotation.x=-Math.sin(v*Math.PI)*.5,a.trunkBase=_.map((g,x)=>g-Math.sin(v*Math.PI)*(.5-x*.08))}),a.trunkBase=_,d.rotation.x=0;break}case"R":{const d=new Z(0,0,.3).applyEuler(t.charRoot.rotation),_=t.group.position.clone();await this.animate(.3,v=>{const g=Math.sin(v*Math.PI);t.group.position.copy(_).addScaledVector(d,g),t.charRoot.rotation.x=g*.18}),t.group.position.copy(_),t.charRoot.rotation.x=0;break}case"P":{const d=a.spear;await this.animate(.28,_=>{const v=Math.sin(_*Math.PI);d.rotation.x=v*.9,d.position.z=.05+v*.22,t.charRoot.rotation.x=v*.12}),t.charRoot.rotation.x=0,d.rotation.x=0,d.position.z=.05;break}default:await this.animate(.3,d=>{t.charRoot.rotation.x=Math.sin(d*Math.PI)*.3}),t.charRoot.rotation.x=0}})(),h=(async()=>{const d=Math.random()>.5?"x":"z",_=Math.random()>.5?1:-1;this.gpgpu.burst(c,n.color==="r"?14699066:5552288),this.gpgpu.burst(c.clone().setY(.9),16757070),this.shakeAmp=Math.max(this.shakeAmp,.5),n.charRoot.traverse(v=>{const g=v;if(g.isMesh){const x=g.material;x.transparent=!0}}),await this.animate(.55,v=>{n.charRoot.rotation[d]=_*rD(v)*1.5,n.charRoot.scale.y=1-v*.4},Zu),await this.animate(.3,v=>{n.charRoot.traverse(g=>{const x=g;x.isMesh&&(x.material.opacity=1-v)})}),this.scene.remove(o)})(),p=(async()=>{const d=n.color==="r"?1:-1,_=this.trayCount[n.color]++,v=new Z(d*(Yu/2+1.5+_%2*.9),.03,-3.4+Math.floor(_/2)*.95);n.group.remove(n.pedestal),this.scene.add(n.pedestal);const g=n.pedestal.position.clone().copy(o.position);n.pedestal.position.copy(g),await this.animate(.6,x=>{n.pedestal.position.lerpVectors(g,v,x),n.pedestal.position.y=.03+Math.sin(x*Math.PI)*1.6,n.pedestal.rotation.y=x*4},Zu)})();await Promise.all([u,h,p])}playCheckAlert(t){const n=this.pieces.get(`${t.x},${t.y}`);if(!n)return;const a=this.boardToWorld(t.x,t.y);this.checkRing.position.set(a.x,.08,a.z),this.animate(.5,o=>{n.charRoot.position.y=Ds+Math.abs(Math.sin(o*Math.PI*2))*.22*(1-o)}),this.checkPulse=2.2,Cn.sfx.check()}checkPulse=0;async celebrate(t){const n=[],a=[];for(const o of this.pieces.values())(o.color===t?n:a).push(o);for(const o of a)this.animate(.8,c=>{o.charRoot.rotation.x=c*.45,o.charRoot.position.y=Ds-c*.04});n.forEach((o,c)=>{window.setTimeout(()=>{this.animate(.7,u=>{o.charRoot.position.y=Ds+Math.abs(Math.sin(u*Math.PI*3))*.3*(1-u*.4),o.charRoot.rotation.y=o.charRoot.userData.homeYaw+Math.sin(u*Math.PI*2)*.5})},c*130)});for(let o=0;o<9;o++)window.setTimeout(()=>{const c=new Z((Math.random()-.5)*9,2.2+Math.random()*2.4,(Math.random()-.5)*10);this.gpgpu.burst(c,[16757070,14699066,15254634,5556618][o%4])},300+o*320);this.setCinematic(!0),await new Promise(o=>setTimeout(o,3400)),this.setCinematic(!1)}setCinematic(t){this.cinematic=t,t?(this.controls.autoRotate=!1,this.controls.enabled=!1):this.controls.enabled=!0}loop=()=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);const t=Math.min(this.clock.getDelta(),.12),n=this.clock.elapsedTime;for(let c=this.tweens.length-1;c>=0;c--){const u=this.tweens[c];u.t+=t;const h=Math.min(1,u.t/u.dur);u.update(u.ease(h)),h>=1&&(this.tweens.splice(c,1),u.resolve())}for(const c of this.pieces.values()){if(!c.alive)continue;const u=!!c.group.userData.marching;qC(c.rig,n+c.group.position.x,t,u,3.4)}const a=.75+Math.sin(n*4.2)*.25;for(const c of this.hintGroup.children){const u=c;u.material.opacity=.55*a+.25}if(this.selectRing.visible&&(this.selectRing.scale.setScalar(1+Math.sin(n*5)*.05),this.selectRing.material.opacity=.7+Math.sin(n*5)*.25),this.checkPulse>0){this.checkPulse-=t;const c=this.checkRing.material;c.opacity=Math.min(.9,this.checkPulse)*(.6+Math.sin(n*9)*.4),this.checkRing.scale.setScalar(1+Math.sin(n*9)*.08)}else this.checkRing.material.opacity=0;if(this.env.update(n,t),this.gpgpu.update(t),this.introDone)if(this.cinematic){this.cineAngle+=t*.35;const c=13.5;this.camera.position.set(Math.sin(this.cineAngle)*c,7.2+Math.sin(this.cineAngle*.7)*1.6,Math.cos(this.cineAngle)*c),this.camera.lookAt(0,1,0)}else this.idleTimer+=t,this.idleTimer>6&&!this.controls.autoRotate&&(this.controls.autoRotate=!0),this.controls.update();else{const c=Math.min(1,this.clock.elapsedTime/3.6),u=Zu(c),h=Hl.lerp(.5,0,u),p=Hl.lerp(2,5.8,u),d=Hl.lerp(17.5,16.9,u);this.camera.position.set(Math.sin(h)*d,p,Math.cos(h)*d),this.camera.lookAt(0,1.15,0),c>=1&&(this.introDone=!0,this.controls.enabled=!0,this.controls.autoRotate=!0)}this.camera.position.sub(this.lastShakeOffset),this.shakeAmp>.001?(this.lastShakeOffset.set((Math.random()-.5)*this.shakeAmp*.24,(Math.random()-.5)*this.shakeAmp*.18,(Math.random()-.5)*this.shakeAmp*.24),this.camera.position.add(this.lastShakeOffset),this.shakeAmp*=Math.exp(-t*6.5)):this.lastShakeOffset.set(0,0,0);const o=this.composer.passes[2];o.uniforms.uTime.value=n,this.composer.render()};onPointerDown=()=>{this.controls.autoRotate=!1,this.idleTimer=0};onPointerMove=t=>{this.pointer.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1)};handleClick(t){if(!this.onCellClick||t.target.closest(".gf-side, .gf-player, .gf-modal-mask, .gf-topbar, .gf-bottombar, .gf-intro, button, kbd"))return;this.pointer.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const a=this.raycaster.ray,o=a.direction.y;if(Math.abs(o)<1e-6)return;const c=-a.origin.y/o;if(c<0)return;const u=a.origin.clone().addScaledVector(a.direction,c),h=Math.round(u.x/qu+4),p=Math.round(u.z/qu+4.5);h>=0&&h<9&&p>=0&&p<10&&this.onCellClick(h,p)}boardToScreen(t,n){const a=this.boardToWorld(t,n).setY(.2);return a.project(this.camera),{x:(a.x*.5+.5)*window.innerWidth,y:(-a.y*.5+.5)*window.innerHeight}}debugCam(t,n,a,o=0,c=.4,u=0){this.introDone=!0,this.controls.enabled=!1,this.controls.autoRotate=!1,this.idleTimer=-99999,this.camera.position.set(Math.sin(a)*n,t,Math.cos(a)*n),this.camera.lookAt(o,c,u),this.controls.target.set(o,c,u),this.controls.update()}resize=()=>{const t=window.innerWidth,n=window.innerHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer.setSize(t,n);const a=this.composer.passes[2];a.uniforms.uAspect.value=t/n};dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.resize),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.renderer.dispose()}}const wp=[{label:"入門",depth:2},{label:"進階",depth:3},{label:"高手",depth:4}];function cD(s){let t=0;for(const n of s)for(const a of n)a&&(t+=(a.color==="r"?1:-1)*Ns[a.type]);return t}function hy(s,t){const n={K:1,A:2,B:2,N:2,R:2,C:2,P:5},a={K:0,A:0,B:0,N:0,R:0,C:0,P:0};for(const c of s)for(const u of c)u&&u.color===t&&a[u.type]++;const o=[];for(const c of Object.keys(n))for(let u=0;u<n[c]-a[c];u++)o.push({color:t,type:c,id:-1});return o.sort((c,u)=>Ns[u.type]-Ns[c.type])}const Cp={r:{K:"帥",A:"仕",B:"相",N:"馬",R:"車",C:"炮",P:"兵"},b:{K:"將",A:"士",B:"象",N:"馬",R:"車",C:"砲",P:"卒"}};function uD(){const s=ot.useRef(null),t=ot.useRef(null),[n,a]=ot.useState(!1),[o,c]=ot.useState(!1),[u,h]=ot.useState(_u),[p,d]=ot.useState("r"),[_,v]=ot.useState(null),[g,x]=ot.useState([]),[M,T]=ot.useState("playing"),[y,S]=ot.useState("ai"),[D,U]=ot.useState(3),[R,B]=ot.useState(!1),[N,O]=ot.useState(null),[A,P]=ot.useState(null),[V,G]=ot.useState(null),[X,tt]=ot.useState(!0),[ut,q]=ot.useState(!0),[F,H]=ot.useState(!1),[$,dt]=ot.useState(!1),[bt,I]=ot.useState(!1),Q=ot.useRef({board:u,turn:p,status:M,mode:y,depth:D});Q.current={board:u,turn:p,status:M,mode:y,depth:D};const Mt=ot.useRef(g);Mt.current=g;const wt=ot.useRef(null);wt.current=_;const Nt=ot.useRef(!1),et=ot.useRef("idle"),St=z=>{Mt.current=z,x(z)},xt=ot.useCallback(z=>{wt.current=z,v(z)},[]),Ht=ot.useRef(()=>{});ot.useEffect(()=>{const z=new lD(s.current);t.current=z,window.__xq=z,z.onCellClick=(Xt,L)=>Ht.current(Xt,L),z.init().then(()=>{z.setBoard(_u()),a(!0)});const Zt=Xt=>z.handleClick(Xt);return window.addEventListener("click",Zt),()=>{window.removeEventListener("click",Zt),z.dispose(),t.current=null}},[]);const se=ot.useCallback((z,Zt,Xt)=>{const L=Q.current,E=nc(L.turn),j=TE(L.board,Zt);St([...Mt.current,{move:Zt,notation:j,captured:Xt}]),h(z),d(E),xt(null);const nt=vE(z,E);T(nt);const ht=Lm(z,E);if(O(ht?E:null),nt!=="playing"){const Tt=nt==="checkmate"?L.turn:null;Tt?(G(Tt),P(Tt==="r"?"紅方勝":"黑方勝"),Tt==="r"||L.mode==="pvp"?Cn.sfx.win():Cn.sfx.lose(),Vl(z,E),t.current?.celebrate(Tt)):(P("困斃 · 和局"),Cn.sfx.lose())}else if(ht){P("將軍！");const Tt=Vl(z,E);Tt&&t.current?.playCheckAlert(Tt),window.setTimeout(()=>P(Ut=>Ut==="將軍！"?null:Ut),1800)}},[xt]),$t=ot.useCallback(async z=>{const Zt=Q.current,Xt=t.current;if(!Xt||Nt.current)return;Nt.current=!0;const L=Zt.board[z.to.y][z.to.x],E=kl(Zt.board,z);try{await Xt.playMove(z,L)}finally{se(E,z,L),Nt.current=!1}},[se]),Qe=ot.useCallback((z,Zt)=>{const Xt=Q.current,L=t.current,E=wt.current;if(!L||Nt.current||Xt.status!=="playing"||Xt.mode==="ai"&&Xt.turn==="b")return;const j=Xt.board[Zt][z];if(E){if(E.x===z&&E.y===Zt){xt(null),L.hideSelection(),L.clearHints(),Cn.sfx.deselect();return}const ht=ju(Xt.board,E.x,E.y).find(Tt=>Tt.to.x===z&&Tt.to.y===Zt);if(ht){$t(ht);return}if(j&&j.color===Xt.turn){xt({x:z,y:Zt}),L.showSelection(z,Zt),L.showHints(ju(Xt.board,z,Zt).map(Tt=>({...Tt.to,capture:!!Xt.board[Tt.to.y][Tt.to.x]}))),Cn.sfx.select();return}Cn.sfx.illegal();return}j&&j.color===Xt.turn&&(xt({x:z,y:Zt}),L.showSelection(z,Zt),L.showHints(ju(Xt.board,z,Zt).map(nt=>({...nt.to,capture:!!Xt.board[nt.to.y][nt.to.x]}))),Cn.sfx.select())},[$t,xt]);Ht.current=Qe,ot.useEffect(()=>{if(!o||y!=="ai"||p!=="b"||M!=="playing"||et.current!=="idle")return;et.current="scheduled";const z=window.setTimeout(()=>{const Zt=Q.current;if(!(Zt.turn==="b"&&Zt.status==="playing"&&Zt.mode==="ai")){et.current="idle";return}et.current="busy",B(!0),window.setTimeout(()=>{const Xt=EE(Zt.board,"b",Zt.depth);(Xt?$t(Xt):Promise.resolve()).finally(()=>{B(!1),et.current="idle"})},60)},620);return()=>{window.clearTimeout(z),et.current==="scheduled"&&(et.current="idle")}},[o,y,p,M,$t]);const ue=ot.useCallback(()=>{et.current="idle",B(!1);const z=_u();h(z),d("r"),xt(null),St([]),T("playing"),O(null),G(null),P(null),I(!1),t.current?.setBoard(z),t.current?.clearLastMove(),Cn.sfx.newGame()},[]),ve=ot.useCallback(()=>{const z=Mt.current;if(!z.length||Nt.current)return;et.current="idle",B(!1);const Zt=y==="ai"?Math.min(2,z.length):1,Xt=z.slice(0,z.length-Zt);let L=_u();for(const E of Xt)L=kl(L,E.move);h(L),St(Xt),d(Xt.length%2===0?"r":"b"),xt(null),T("playing"),O(null),G(null),P(null),t.current?.setBoard(L),t.current?.clearLastMove(),Cn.sfx.undo()},[y]);ot.useEffect(()=>{const z=Zt=>{if(!o)return;const Xt=Zt.key.toLowerCase();Xt==="n"?ue():Xt==="u"||Xt==="z"&&!Zt.metaKey&&!Zt.ctrlKey?ve():Xt==="m"?Se():Xt==="s"?ge():Xt==="c"?en():Xt==="escape"&&(xt(null),t.current?.hideSelection(),t.current?.clearHints())};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[o,ue,ve]);const Se=()=>{const z=!X;tt(z),Cn.setBgmMuted(!z)},ge=()=>{const z=!ut;q(z),Cn.setSfxMuted(!z)},en=()=>{const z=!F;H(z),t.current?.setCinematic(z)},rn=()=>{Cn.init(),Cn.sfx.newGame(),c(!0)},je=ot.useMemo(()=>cD(u),[u]),pn=ot.useMemo(()=>hy(u,"r"),[u]),We=ot.useMemo(()=>hy(u,"b"),[u]),on=M!=="playing"?"終局":p==="r"?"紅方行棋":R?"黑方運籌中…":"黑方行棋";return window.__st=()=>({turn:p,status:M,mode:y,depth:D,thinking:R,histLen:g.length,history:g,board:u,checkSide:N,ready:n,started:o,winner:V}),At.jsxs("div",{"code-path":"src/App.tsx:309:5",className:"gf-root",children:[At.jsx("canvas",{"code-path":"src/App.tsx:310:7",ref:s,className:"gf-canvas"}),!o&&At.jsx("div",{"code-path":"src/App.tsx:314:9",className:`gf-intro ${n?"ready":""}`,children:At.jsxs("div",{"code-path":"src/App.tsx:315:11",className:"gf-intro-inner",children:[At.jsx("p",{"code-path":"src/App.tsx:316:13",className:"gf-intro-quote",children:"運籌帷幄之中 · 決勝千里之外"}),At.jsxs("h1",{"code-path":"src/App.tsx:317:13",className:"gf-intro-title",children:[At.jsx("span",{"code-path":"src/App.tsx:318:15",children:"楚"}),At.jsx("span",{"code-path":"src/App.tsx:318:29",children:"河"}),At.jsx("span",{"code-path":"src/App.tsx:318:43",children:"漢"}),At.jsx("span",{"code-path":"src/App.tsx:318:57",children:"界"})]}),At.jsx("p",{"code-path":"src/App.tsx:320:13",className:"gf-intro-sub",children:"三維國風象棋 · 兵馬戰陣 · 水墨江山"}),At.jsx("button",{"code-path":"src/App.tsx:321:13",className:"gf-seal-btn",disabled:!n,onClick:rn,children:n?"開 戰":"營造江山…"}),At.jsx("p",{"code-path":"src/App.tsx:324:13",className:"gf-intro-hint",children:"點擊開戰 · 鳴鑼起陣 · 古箏奏鳴"})]})}),o&&At.jsxs(At.Fragment,{children:[At.jsxs("header",{"code-path":"src/App.tsx:333:11",className:"gf-topbar",children:[At.jsx("div",{"code-path":"src/App.tsx:334:13",className:"gf-title-vertical",children:"楚河漢界"}),At.jsx("div",{"code-path":"src/App.tsx:335:13",className:`gf-turn-pill ${p==="r"?"red":"black"} ${M!=="playing"?"over":""}`,children:on})]}),At.jsxs("aside",{"code-path":"src/App.tsx:341:11",className:"gf-player gf-player-top",children:[At.jsx("div",{"code-path":"src/App.tsx:342:13",className:"gf-avatar black",children:"將"}),At.jsxs("div",{"code-path":"src/App.tsx:343:13",className:"gf-player-info",children:[At.jsxs("div",{"code-path":"src/App.tsx:344:15",className:"gf-player-name",children:["黑方 ",y==="ai"?`· ${wp.find(z=>z.depth===D)?.label}軍師`:""]}),At.jsx("div",{"code-path":"src/App.tsx:345:15",className:"gf-captured",children:pn.map((z,Zt)=>At.jsx("span",{"code-path":"src/App.tsx:346:37",className:"gf-chip red",children:Cp[z.color][z.type]},Zt))})]}),je<-30&&At.jsxs("div",{"code-path":"src/App.tsx:349:27",className:"gf-adv black",children:["優勢 ",-Math.round(je/10)/10]})]}),At.jsxs("aside",{"code-path":"src/App.tsx:353:11",className:"gf-player gf-player-bottom",children:[At.jsx("div",{"code-path":"src/App.tsx:354:13",className:"gf-avatar red",children:"帥"}),At.jsxs("div",{"code-path":"src/App.tsx:355:13",className:"gf-player-info",children:[At.jsxs("div",{"code-path":"src/App.tsx:356:15",className:"gf-player-name",children:["紅方 ",y==="ai"?"· 你":""]}),At.jsx("div",{"code-path":"src/App.tsx:357:15",className:"gf-captured",children:We.map((z,Zt)=>At.jsx("span",{"code-path":"src/App.tsx:358:37",className:"gf-chip black",children:Cp[z.color][z.type]},Zt))})]}),je>30&&At.jsxs("div",{"code-path":"src/App.tsx:361:26",className:"gf-adv red",children:["優勢 ",Math.round(je/10)/10]})]}),At.jsxs("aside",{"code-path":"src/App.tsx:365:11",className:"gf-side",children:[At.jsxs("div",{"code-path":"src/App.tsx:366:13",className:"gf-controls",children:[At.jsx("button",{"code-path":"src/App.tsx:367:15",className:"gf-btn primary",onClick:()=>{Cn.sfx.button(),ue()},title:"新對局 (N)",children:"新對局"}),At.jsx("button",{"code-path":"src/App.tsx:368:15",className:"gf-btn",onClick:()=>{Cn.sfx.button(),ve()},disabled:!g.length,title:"悔棋 (U)",children:"悔棋"}),At.jsx("button",{"code-path":"src/App.tsx:369:15",className:`gf-btn ${X?"on":""}`,onClick:Se,title:"音樂 (M)",children:"樂"}),At.jsx("button",{"code-path":"src/App.tsx:370:15",className:`gf-btn ${ut?"on":""}`,onClick:ge,title:"音效 (S)",children:"音"}),At.jsx("button",{"code-path":"src/App.tsx:371:15",className:`gf-btn ${F?"on":""}`,onClick:en,title:"電影運鏡 (C) · 自動環遊鏡頭",children:"運鏡"}),At.jsx("button",{"code-path":"src/App.tsx:372:15",className:"gf-btn",onClick:()=>dt(!0),title:"幫助",children:"?"})]}),At.jsxs("div",{"code-path":"src/App.tsx:374:13",className:"gf-controls",children:[At.jsx("button",{"code-path":"src/App.tsx:375:15",className:`gf-btn wide ${y==="ai"?"on":""}`,onClick:()=>{S("ai"),ue()},children:"人機對弈"}),At.jsx("button",{"code-path":"src/App.tsx:376:15",className:`gf-btn wide ${y==="pvp"?"on":""}`,onClick:()=>{S("pvp"),ue()},children:"雙人對弈"})]}),At.jsx("div",{"code-path":"src/App.tsx:378:13",className:"gf-controls",children:wp.map(z=>At.jsx("button",{"code-path":"src/App.tsx:380:17",className:`gf-btn ${D===z.depth?"on":""}`,disabled:y==="pvp",onClick:()=>{U(z.depth),Cn.sfx.button()},children:z.label},z.depth))}),At.jsxs("div",{"code-path":"src/App.tsx:384:13",className:"gf-notation",children:[At.jsx("div",{"code-path":"src/App.tsx:385:15",className:"gf-notation-head",children:"棋 譜"}),At.jsxs("div",{"code-path":"src/App.tsx:386:15",className:"gf-notation-list",children:[g.length===0&&At.jsx("div",{"code-path":"src/App.tsx:387:42",className:"gf-notation-empty",children:"落子無悔 · 靜待開局"}),g.map((z,Zt)=>At.jsxs("div",{"code-path":"src/App.tsx:389:19",className:`gf-notation-row ${z.move.piece.color}`,children:[At.jsxs("span",{"code-path":"src/App.tsx:390:21",className:"gf-notation-no",children:[Zt+1,"."]}),At.jsx("span",{"code-path":"src/App.tsx:391:21",children:z.notation}),z.captured&&At.jsxs("span",{"code-path":"src/App.tsx:392:36",className:"gf-notation-cap",children:["吃",Cp[z.captured.color][z.captured.type]]})]},Zt)),At.jsx("div",{"code-path":"src/App.tsx:395:17",ref:z=>z?.scrollIntoView({block:"end"})})]})]})]}),At.jsxs("footer",{"code-path":"src/App.tsx:401:11",className:"gf-bottombar",children:[At.jsx("span",{"code-path":"src/App.tsx:402:13",children:"點子選棋 · 綠點可行 · 赤環可吃"}),At.jsxs("span",{"code-path":"src/App.tsx:403:13",className:"gf-kbd-group",children:[At.jsx("kbd",{"code-path":"src/App.tsx:404:15",children:"N"}),"新局 ",At.jsx("kbd",{"code-path":"src/App.tsx:404:30",children:"U"}),"悔棋 ",At.jsx("kbd",{"code-path":"src/App.tsx:404:45",children:"M"}),"樂 ",At.jsx("kbd",{"code-path":"src/App.tsx:404:59",children:"S"}),"音 ",At.jsx("kbd",{"code-path":"src/App.tsx:404:73",children:"C"}),"運鏡 ",At.jsx("kbd",{"code-path":"src/App.tsx:404:88",children:"Esc"}),"取消"]})]}),A&&M==="playing"&&At.jsx("div",{"code-path":"src/App.tsx:410:13",className:"gf-banner",children:At.jsx("span",{"code-path":"src/App.tsx:411:15",children:A})},A+g.length),N&&M==="playing"&&At.jsx("div",{"code-path":"src/App.tsx:417:13",className:`gf-check-pill ${N}`,children:N==="r"?"紅方被將軍":"黑方被將軍"}),M!=="playing"&&!bt&&At.jsx("div",{"code-path":"src/App.tsx:422:13",className:"gf-modal-mask",children:At.jsxs("div",{"code-path":"src/App.tsx:423:15",className:"gf-scroll",children:[At.jsx("div",{"code-path":"src/App.tsx:424:17",className:"gf-scroll-rod top"}),At.jsxs("div",{"code-path":"src/App.tsx:425:17",className:"gf-scroll-body",children:[At.jsx("div",{"code-path":"src/App.tsx:426:19",className:"gf-scroll-seal",children:V==="r"?"紅":V==="b"?"黑":"和"}),At.jsx("h2",{"code-path":"src/App.tsx:427:19",className:"gf-scroll-title",children:V?V==="r"?"紅方奏凱":"黑方奏凱":"困斃和局"}),At.jsxs("p",{"code-path":"src/App.tsx:430:19",className:"gf-scroll-line",children:["歷 ",g.length," 手 · ",y==="ai"?"人機對弈":"雙人對弈",y==="ai"?` · ${wp.find(z=>z.depth===D)?.label}`:""]}),At.jsx("p",{"code-path":"src/App.tsx:431:19",className:"gf-scroll-quote",children:V==="r"?"宜將剩勇追窮寇，不可沽名學霸王。":V==="b"?"勝敗兵家常事，捲土重來未可知。":"棋逢對手，將遇良才。"}),At.jsxs("div",{"code-path":"src/App.tsx:432:19",className:"gf-scroll-btns",children:[At.jsx("button",{"code-path":"src/App.tsx:433:21",className:"gf-btn primary big",onClick:ue,children:"再 戰"}),At.jsx("button",{"code-path":"src/App.tsx:434:21",className:"gf-btn big",onClick:()=>{I(!0),t.current?.celebrate(V??"r")},children:"觀 禮"})]})]}),At.jsx("div",{"code-path":"src/App.tsx:437:17",className:"gf-scroll-rod bottom"})]})}),$&&At.jsx("div",{"code-path":"src/App.tsx:444:13",className:"gf-modal-mask",onClick:()=>dt(!1),children:At.jsxs("div",{"code-path":"src/App.tsx:445:15",className:"gf-help",onClick:z=>z.stopPropagation(),children:[At.jsx("h3",{"code-path":"src/App.tsx:446:17",children:"對弈指南"}),At.jsx("p",{"code-path":"src/App.tsx:447:17",children:"點擊己方棋子選中，碧綠圓點為可行之位，赤紅圓環為可吃之子；再點目標位落子。"}),At.jsx("p",{"code-path":"src/App.tsx:448:17",children:"馬有蹩腿、象有塞眼、炮需隔子、將帥不照面——規則俱全，與坊間象棋無二。"}),At.jsxs("ul",{"code-path":"src/App.tsx:449:17",children:[At.jsxs("li",{"code-path":"src/App.tsx:450:19",children:[At.jsx("kbd",{"code-path":"src/App.tsx:450:23",children:"N"})," 新對局　",At.jsx("kbd",{"code-path":"src/App.tsx:450:40",children:"U"})," 悔棋　",At.jsx("kbd",{"code-path":"src/App.tsx:450:56",children:"Esc"})," 取消選中"]}),At.jsxs("li",{"code-path":"src/App.tsx:451:19",children:[At.jsx("kbd",{"code-path":"src/App.tsx:451:23",children:"M"})," 音樂開關　",At.jsx("kbd",{"code-path":"src/App.tsx:451:41",children:"S"})," 音效開關　",At.jsx("kbd",{"code-path":"src/App.tsx:451:59",children:"C"})," 電影運鏡"]}),At.jsx("li",{"code-path":"src/App.tsx:452:19",children:"拖拽旋轉視角 · 滾輪縮放 · 靜置片刻自動環遊"})]}),At.jsx("button",{"code-path":"src/App.tsx:454:17",className:"gf-btn primary",onClick:()=>dt(!1),children:"知 曉"})]})})]})]})}I1.createRoot(document.getElementById("root")).render(At.jsx(ot.StrictMode,{"code-path":"src/main.tsx:8:3",children:At.jsx(rE,{"code-path":"src/main.tsx:9:5",children:At.jsx(uD,{"code-path":"src/main.tsx:10:7"})})}));
