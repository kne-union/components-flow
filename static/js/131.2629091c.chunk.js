/*! For license information please see 131.2629091c.chunk.js.LICENSE.txt */
(self.webpackChunk_kne_components_components_flow=self.webpackChunk_kne_components_components_flow||[]).push([[131],{39484:(e,t,r)=>{"use strict";r.d(t,{Kq:()=>a,NT:()=>c});var o=r(73884);const n=(0,o.createContext)({}),c=()=>(0,o.useContext)(n),{Provider:a,Consumer:s}=n},67131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});const o="style_node-delete__UcqZW__5qYCZ";var n=r(13050),c=r(41740),a=r.n(c),s=r(39484),u=r(70579);const i=(0,n.createWithRemoteLoader)({modules:["Icon","Tooltip"]})((e=>{let{remoteModules:t,node:r}=e;const[n]=t,{setFlowData:c}=(0,s.NT)(),i=()=>{c((e=>{const t=e.get(r.parentId),o=a()(e);var n;"conditions"===r.nodeType&&((null===(n=t.next)||void 0===n?void 0:n.length)>2?(o.set(r.parentId,Object.assign({},t,{next:t.next.filter((e=>e!==r.id))})),o.delete(r.id)):(o.set(r.parentId,Object.assign({},t,{next:[]})),t.next.forEach((e=>o.delete(e)))));return o}))};return(0,u.jsx)("span",{className:o,onClick:e=>{e.preventDefault(),e.stopPropagation(),null===i||void 0===i||i()},children:(0,u.jsx)(n,{type:"icon-close-thin",size:"16"})})}))},80726:e=>{e.exports=function(e,t){for(var r=-1,o=null==e?0:e.length;++r<o&&!1!==t(e[r],r,e););return e}},51104:(e,t,r)=>{var o=r(96614),n=r(28673);e.exports=function(e,t){return e&&o(t,n(t),e)}},55119:(e,t,r)=>{var o=r(96614),n=r(30474);e.exports=function(e,t){return e&&o(t,n(t),e)}},97132:(e,t,r)=>{var o=r(5538),n=r(80726),c=r(78420),a=r(51104),s=r(55119),u=r(44353),i=r(91980),b=r(98124),f=r(29075),p=r(59395),l=r(68592),j=r(26924),v=r(38268),y=r(18630),d=r(20310),x=r(54052),_=r(44543),A=r(57887),m=r(46686),w=r(45921),g=r(28673),O=r(30474),h="[object Arguments]",I="[object Function]",S="[object Object]",k={};k[h]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k[S]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k[I]=k["[object WeakMap]"]=!1,e.exports=function e(t,r,E,C,U,F){var D,N=1&r,P=2&r,R=4&r;if(E&&(D=U?E(t,C,U,F):E(t)),void 0!==D)return D;if(!m(t))return t;var T=x(t);if(T){if(D=v(t),!N)return i(t,D)}else{var M=j(t),B=M==I||"[object GeneratorFunction]"==M;if(_(t))return u(t,N);if(M==S||M==h||B&&!U){if(D=P||B?{}:d(t),!N)return P?f(t,s(D,t)):b(t,a(D,t))}else{if(!k[M])return U?t:{};D=y(t,M,N)}}F||(F=new o);var L=F.get(t);if(L)return L;F.set(t,D),w(t)?t.forEach((function(o){D.add(e(o,r,E,o,t,F))})):A(t)&&t.forEach((function(o,n){D.set(n,e(o,r,E,n,t,F))}));var W=T?void 0:(R?P?l:p:P?O:g)(t);return n(W||t,(function(o,n){W&&(o=t[n=o]),c(D,n,e(o,r,E,n,t,F))})),D}},5791:(e,t,r)=>{var o=r(26924),n=r(22761);e.exports=function(e){return n(e)&&"[object Map]"==o(e)}},20449:(e,t,r)=>{var o=r(26924),n=r(22761);e.exports=function(e){return n(e)&&"[object Set]"==o(e)}},6806:(e,t,r)=>{var o=r(61516);e.exports=function(e,t){var r=t?o(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},18962:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},11295:(e,t,r)=>{var o=r(9812),n=o?o.prototype:void 0,c=n?n.valueOf:void 0;e.exports=function(e){return c?Object(c.call(e)):{}}},98124:(e,t,r)=>{var o=r(96614),n=r(69621);e.exports=function(e,t){return o(e,n(e),t)}},29075:(e,t,r)=>{var o=r(96614),n=r(56326);e.exports=function(e,t){return o(e,n(e),t)}},68592:(e,t,r)=>{var o=r(4262),n=r(56326),c=r(30474);e.exports=function(e){return o(e,c,n)}},56326:(e,t,r)=>{var o=r(48895),n=r(85990),c=r(69621),a=r(57828),s=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)o(t,c(e)),e=n(e);return t}:a;e.exports=s},38268:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,o=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(o.index=e.index,o.input=e.input),o}},18630:(e,t,r)=>{var o=r(61516),n=r(6806),c=r(18962),a=r(11295),s=r(38710);e.exports=function(e,t,r){var u=e.constructor;switch(t){case"[object ArrayBuffer]":return o(e);case"[object Boolean]":case"[object Date]":return new u(+e);case"[object DataView]":return n(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return s(e,r);case"[object Map]":case"[object Set]":return new u;case"[object Number]":case"[object String]":return new u(e);case"[object RegExp]":return c(e);case"[object Symbol]":return a(e)}}},41740:(e,t,r)=>{var o=r(97132);e.exports=function(e){return o(e,4)}},57887:(e,t,r)=>{var o=r(5791),n=r(47574),c=r(56832),a=c&&c.isMap,s=a?n(a):o;e.exports=s},45921:(e,t,r)=>{var o=r(20449),n=r(47574),c=r(56832),a=c&&c.isSet,s=a?n(a):o;e.exports=s},51153:(e,t,r)=>{"use strict";var o=r(73884),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var o,c={},i=null,b=null;for(o in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(b=t.ref),t)a.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:n,type:e,key:i,ref:b,props:c,_owner:s.current}}t.Fragment=c,t.jsx=i,t.jsxs=i},70579:(e,t,r)=>{"use strict";e.exports=r(51153)}}]);
//# sourceMappingURL=131.2629091c.chunk.js.map