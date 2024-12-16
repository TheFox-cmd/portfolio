import{r as P}from"../vendor-VdanABxa.js";var g={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=P,h=Symbol.for("react.element"),C=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,L=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,s={},b=null,x=null;n!==void 0&&(b=""+n),t.key!==void 0&&(b=""+t.key),t.ref!==void 0&&(x=t.ref);for(o in t)O.call(t,o)&&!M.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:h,type:e,key:b,ref:x,props:s,_owner:L.current}}c.Fragment=C;c.jsx=E;c.jsxs=E;g.exports=c;var A=g.exports;function j(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=j(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function T(){for(var e,t,n=0,o="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=j(e))&&(o&&(o+=" "),o+=t);return o}var r={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=Symbol.for("react.element"),v=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),p=Symbol.for("react.context"),k=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),w;w=Symbol.for("react.module.reference");function f(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _:switch(e=e.type,e){case i:case l:case u:case a:case d:return e;default:switch(e=e&&e.$$typeof,e){case k:case p:case m:case S:case $:case y:return e;default:return t}}case v:return t}}}r.ContextConsumer=p;r.ContextProvider=y;r.Element=_;r.ForwardRef=m;r.Fragment=i;r.Lazy=S;r.Memo=$;r.Portal=v;r.Profiler=l;r.StrictMode=u;r.Suspense=a;r.SuspenseList=d;r.isAsyncMode=function(){return!1};r.isConcurrentMode=function(){return!1};r.isContextConsumer=function(e){return f(e)===p};r.isContextProvider=function(e){return f(e)===y};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_};r.isForwardRef=function(e){return f(e)===m};r.isFragment=function(e){return f(e)===i};r.isLazy=function(e){return f(e)===S};r.isMemo=function(e){return f(e)===$};r.isPortal=function(e){return f(e)===v};r.isProfiler=function(e){return f(e)===l};r.isStrictMode=function(e){return f(e)===u};r.isSuspense=function(e){return f(e)===a};r.isSuspenseList=function(e){return f(e)===d};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===l||e===u||e===a||e===d||e===F||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===$||e.$$typeof===y||e.$$typeof===p||e.$$typeof===m||e.$$typeof===w||e.getModuleId!==void 0)};r.typeOf=f;export{T as c,A as j};
