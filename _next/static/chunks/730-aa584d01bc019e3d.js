"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[730],{2609:function(e,r,t){var n=t(7294),o=function(){var e=n.useRef(!1);return n.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),e};r.ZP=function(e,r){void 0===r&&(r=!0);var t=o(),u=n.useState(e),i=u[0],a=u[1],c=n.useRef(i),s=n.useCallback(function(e){(t.current||!r)&&(c.current="function"==typeof e?e(c.current):e,a(c.current))},[]);return[c,s]}},2730:function(e,r,t){t.d(r,{ZP:function(){return es}});var n,o,u,i,a,c,s=t(7294),f=t(8137),l=t.n(f),d=t(2609);(n=i||(i={})).DELETE="DELETE",n.GET="GET",n.HEAD="HEAD",n.OPTIONS="OPTIONS",n.PATCH="PATCH",n.POST="POST",n.PUT="PUT",n.CONNECT="CONNECT",n.TRACE="TRACE",(o=a||(a={})).CACHE_FIRST="cache-first",o.CACHE_AND_NETWORK="cache-and-network",o.NETWORK_ONLY="network-only",o.CACHE_ONLY="cache-only",o.NO_CACHE="no-cache",o.EXACT_CACHE_AND_NETWORK="exact-cache-and-network";var p=function(e,r,t,n){return new(t||(t=Promise))(function(o,u){function i(e){try{c(n.next(e))}catch(e){u(e)}}function a(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?o(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(i,a)}c((n=n.apply(e,r||[])).next())})},h=function(e,r){var t,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=r.call(e,i)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};function v(e,r,t,n,o,u,i,a){if(void 0===t&&(t=""),void 0===n&&(n=""),void 0===o&&(o=""),void 0===u&&(u=""),void 0===i&&(i=""),void 0===a&&(a=""),!e){var c=void 0;if(void 0===r)c=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,n,o,u,i,a],f=0;(c=Error(r.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw c}}var y=function(e){return"string"==typeof e},b=function(e){return"[object Object]"===Object.prototype.toString.call(e)},w=function(e){return b(e)||Array.isArray(e)},g=function(e){return"function"==typeof e},m=function(e){return null==e};(u=c||(c={})).Browser="browser",u.Server="server",u.Native="native";var O=c.Browser,E=c.Server,T=c.Native,S=!!("undefined"!=typeof window&&window.document&&window.document.createElement),A=("undefined"!=typeof navigator&&"ReactNative"===navigator.product?T:S?O:E)===E,P=function(e,r,t){return void 0===t&&(t=0),p(void 0,void 0,void 0,function(){var n;return h(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,e.clone()[r[t]]()];case 1:return[2,o.sent()];case 2:if(n=o.sent(),r.length-1===t)throw n;return[2,P(e.clone(),r,++t)];case 3:return[2]}})})},N=["headers","ok","redirected","trailer","status","statusText","type","url","body","bodyUsed","data"],C=["clone","arrayBuffer","blob","formData","json","text"],x=function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),o=0,r=0;r<t;r++)for(var u=arguments[r],i=0,a=u.length;i<a;i++,o++)n[o]=u[i];return n}(N,C),k=function(e,r){return Object.defineProperties({},x.reduce(function(t,n){return N.includes(n)?t[n]={get:function(){var t=e instanceof Response?e:e&&e.current;if(t)return"data"===n?r.current:("clone"in t?t.clone():{})[n]},enumerable:!0}:C.includes(n)&&(t[n]={value:function(){var r=e instanceof Response?e:e&&e.current;if(r)return("clone"in r?r.clone():{})[n]()},enumerable:!0}),t},{}))};k();var j=function(e){var r={};return e.forEach(function(e,t){r[t]=e}),r},R=function(e,r){var t;return(0,s.useCallback)(e,(t=(0,s.useRef)(),JSON.stringify(r)!==JSON.stringify(t.current)&&(t.current=r),t.current))},D=function(e){return Number.isInteger(e)&&e>0},I=function(e,r){var t=Error(r);return t.name=e+"",t},L=function(e,r){return e?r?r.endsWith("/")&&e.startsWith("/")?e.substr(1):r.endsWith("/")||e.startsWith("/")||e.startsWith("?")||e.startsWith("&")||r.includes("?")?e:"/"+e:e.startsWith("?")||e.startsWith("&")||e.startsWith("/")?e:"/"+e:""},_=(0,s.createContext)({url:"",options:{},graphql:!1}),H=function(){return(H=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},q={host:"",path:void 0,customOptions:{cacheLife:0,cachePolicy:a.CACHE_FIRST,interceptors:{},onAbort:function(){},onError:function(){},onNewData:function(e,r){return r},onTimeout:function(){},perPage:0,persist:!1,responseType:["json","text","blob","arrayBuffer"],retries:0,retryDelay:1e3,retryOn:[],suspense:!1,timeout:0,data:void 0,loading:!1},requestInit:{headers:{Accept:"application/json, text/plain, */*"}},dependencies:void 0},W=Object.entries(q).reduce(function(e,r){var t,n=r[0],o=r[1];return b(o)?H(H({},e),o):H(H({},e),((t={})[n]=o,t))},{}),M=function(){return(M=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function G(e,r,t){v(!(b(e)&&b(r)),"You cannot have a 2nd parameter of useFetch as object when your first argument is an object.");var n=(0,s.useContext)(_),o=(0,s.useMemo)(function(){return y(e)&&e.includes("://")?e:n.url?n.url:W.host},[n.url,e]),u=(0,s.useMemo)(function(){if(y(e)&&!e.includes("://"))return e},[e]),i=(0,s.useMemo)(function(){return g(e)?e:g(r)?r:void 0},[]),a=(0,s.useMemo)(function(){var t={headers:{}};b(e)?t=e:b(r)&&(t=r);var o=n.options,u=M(M(M(M({},W),o),t),{headers:M(M(M({},W.headers),o.headers),t.headers),interceptors:M(M(M({},W.interceptors),o.interceptors),t.interceptors)});return i?i(u):u},[e,i,n.options]),c=(0,s.useMemo)(function(){return a?["body","cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","signal","window"].reduce(function(e,r){return r in a&&(e[r]=a[r]),e},{}):{}},[a]),f=(0,s.useMemo)(function(){return Array.isArray(r)?r:Array.isArray(t)?t:W.dependencies},[r,t]),l=a.cacheLife,d=a.retries,p=a.retryDelay,h=a.retryOn;v(Number.isInteger(l)&&l>=0,"`cacheLife` must be a number >= 0"),v(Number.isInteger(d)&&d>=0,"`retries` must be a number >= 0"),v(g(p)||Number.isInteger(p)&&p>=0,"`retryDelay` must be a positive number or a function returning a positive number."),v(g(h)||Array.isArray(h)&&h.every(D),"`retryOn` must be an array of positive numbers or a function returning a boolean.");var w=a.loading||Array.isArray(f),m=(0,s.useMemo)(function(){var e={};return"request"in a.interceptors&&(e.request=a.interceptors.request),"response"in a.interceptors&&(e.response=a.interceptors.response),e},[a]);return{host:o,path:u,customOptions:(0,s.useMemo)(function(){return M(M({},Object.keys(q.customOptions).reduce(function(e,r){return e[r]=a[r],e},{})),{interceptors:m,loading:w})},[m,w]),requestInit:c,dependencies:f}}var U=function(){return(U=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},J=function(e,r,t,n){return new(t||(t=Promise))(function(o,u){function i(e){try{c(n.next(e))}catch(e){u(e)}}function a(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?o(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(i,a)}c((n=n.apply(e,r||[])).next())})},Y=function(e,r){var t,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=r.call(e,i)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},B=i.GET,F=function(e,r,t,n){return new(t||(t=Promise))(function(o,u){function i(e){try{c(n.next(e))}catch(e){u(e)}}function a(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?o(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(i,a)}c((n=n.apply(e,r||[])).next())})},K=function(e,r){var t,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=r.call(e,i)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},Z="useHTTPcache",V=function(){try{return JSON.parse(localStorage.getItem(Z)||"{}")}catch(e){return localStorage.removeItem(Z),{}}},X=function(e){var r=e.cacheLife,t=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return F(void 0,void 0,void 0,function(){var r;return K(this,function(t){return r=V(),e.forEach(function(e){return delete r[e]}),localStorage.setItem(Z,JSON.stringify(r)),[2]})})},n=function(e){var r=V()[e]||{},n=r.expiration,o=r.response,u=n>0&&n<Date.now();return u&&t(e),u||!o};return Object.defineProperties(V(),{get:{value:function(e){return F(void 0,void 0,void 0,function(){var r,t,o,u,i;return K(this,function(a){return n(e)?[2]:(t=(r=V()[e].response).body,o=r.headers,u=r.status,i=r.statusText,[2,new Response(t,{status:u,statusText:i,headers:new Headers(o||{})})])})})},writable:!1},set:{value:function(e,t){return F(void 0,void 0,void 0,function(){var n,o,u,i;return K(this,function(a){switch(a.label){case 0:return o=n=V(),u=e,i={},[4,p(void 0,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,t.text()];case 1:return[2,{body:e.sent(),status:t.status,statusText:t.statusText,headers:j(t.headers)}]}})})];case 1:return o[u]=(i.response=a.sent(),i.expiration=Date.now()+r,i),localStorage.setItem(Z,JSON.stringify(n)),[2]}})})},writable:!1},has:{value:function(e){return F(void 0,void 0,void 0,function(){return K(this,function(r){return[2,!n(e)]})})},writable:!1},delete:{value:t,writable:!1},clear:{value:function(){return F(void 0,void 0,void 0,function(){return K(this,function(e){return localStorage.setItem(Z,JSON.stringify({})),[2]})})},writable:!1}})},z=function(e,r,t,n){return new(t||(t=Promise))(function(o,u){function i(e){try{c(n.next(e))}catch(e){u(e)}}function a(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?o(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(i,a)}c((n=n.apply(e,r||[])).next())})},Q=function(e,r){var t,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=r.call(e,i)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},$={},ee=function(e){var r=e.cacheLife,t=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return z(void 0,void 0,void 0,function(){var r,t;return Q(this,function(n){for(r=0;r<e.length;r++)t=e[r],delete $[t],delete $[t+":ts"];return[2]})})},n=function(e){var r=$[e+":ts"],n=r>0&&r<Date.now();return n&&t(e),n||!$[e]};return Object.defineProperties($,{get:{value:function(e){return z(void 0,void 0,void 0,function(){return Q(this,function(r){return n(e)?[2]:[2,$[e]]})})},writable:!1,configurable:!0},set:{value:function(e,t){return z(void 0,void 0,void 0,function(){return Q(this,function(n){return $[e]=t,$[e+":ts"]=r>0?Date.now()+r:0,[2]})})},writable:!1,configurable:!0},has:{value:function(e){return z(void 0,void 0,void 0,function(){return Q(this,function(r){return[2,!n(e)]})})},writable:!1,configurable:!0},delete:{value:t,writable:!1,configurable:!0},clear:{value:function(){return z(void 0,void 0,void 0,function(){return Q(this,function(e){return $={},[2]})})},writable:!1,configurable:!0}})},er=a.NETWORK_ONLY,et=a.NO_CACHE,en=function(e){var r=e.persist,t=e.cacheLife,n=e.cachePolicy,o=l()(),u=o.isNative;return(v(!(o.isServer&&r),"There is no persistent storage on the Server currently! \uD83D\uDE45‍♂️"),v(!(u&&r),"React Native support for persistent cache is not yet implemented. \uD83D\uDE45‍♂️"),v(!(r&&[et,er].includes(n)),"You cannot use option 'persist' with cachePolicy: "+n+" \uD83D\uDE45‍♂️"),r)?X({cacheLife:t||864e5}):ee({cacheLife:t})},eo=function(){return(eo=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},eu=function(e,r,t,n){return new(t||(t=Promise))(function(o,u){function i(e){try{c(n.next(e))}catch(e){u(e)}}function a(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){var r;e.done?o(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(i,a)}c((n=n.apply(e,r||[])).next())})},ei=function(e,r){var t,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=r.call(e,i)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},ea=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t},ec=a.CACHE_FIRST,es=function(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var n=G.apply(void 0,r),o=n.host,u=n.path,a=n.customOptions,c=n.requestInit,f=n.dependencies,b=a.cacheLife,O=a.cachePolicy,E=a.interceptors,T=a.onAbort,S=a.onError,N=a.onNewData,C=a.onTimeout,x=a.perPage,j=a.persist,D=a.responseType,_=a.retries,H=a.retryDelay,q=a.retryOn,W=a.suspense,M=a.timeout,F=ea(a,["cacheLife","cachePolicy","interceptors","onAbort","onError","onNewData","onTimeout","perPage","persist","responseType","retries","retryDelay","retryOn","suspense","timeout"]),K=en({persist:j,cacheLife:b,cachePolicy:O}),Z=l()().isServer,V=(0,s.useRef)(),X=(0,s.useRef)({}),z=(0,s.useRef)(F.data),Q=(0,s.useRef)(!1),$=(0,s.useRef)(0),ee=(0,s.useRef)(),er=(0,s.useRef)(!0),et=(0,s.useRef)("pending"),es=(0,s.useRef)(),ef=(0,s.useRef)(!1),el=(0,d.ZP)(F.loading),ed=el[0],ep=el[1],eh=(0,s.useReducer)(function(){return{}},[])[1],ev=R(function(r){var t=function(t,a){return eu(e,void 0,void 0,function(){var e,s,f,l,d,b,k,j,R,H,G,et,en,eo,eu,ea;return ei(this,function(ei){switch(ei.label){case 0:if(Z)return[2];return V.current=new AbortController,V.current.signal.onabort=T,[4,function(e,r,t,n,o,u,a,c,s,f){return J(this,void 0,void 0,function(){var n,l,d,p,h,b,g,m,O=this;return Y(this,function(E){switch(E.label){case 0:return v(!(w(c)&&w(s)),"If first argument of "+r.toLowerCase()+"() is an object, you cannot have a 2nd argument. \uD83D\uDE1C"),v(!(r===B&&w(c)),"You can only have query params as 1st argument of request.get()"),v(!(r===B&&void 0!==s),"You can only have query params as 1st argument of request.get()"),n=!A&&c instanceof URLSearchParams?"?"+c:y(c)?c:"",l=""+u+L(a,u)+L(n),d=c instanceof FormData?c:w(c)?JSON.stringify(c):!A&&(s instanceof FormData||s instanceof URLSearchParams)?s:w(s)||y(s)?JSON.stringify(s):w(e.body)||y(s)?JSON.stringify(e.body):null,p=function(){var t=(e.headers||{})["Content-Type"],n=!!t||[i.POST,i.PUT,i.PATCH].includes(r)&&!(d instanceof FormData),o=U({},e.headers);if(n)o["Content-Type"]=t||"application/json";else if(0===Object.keys(o).length)return null;return o}(),[4,J(O,void 0,void 0,function(){var o;return Y(this,function(i){switch(i.label){case 0:if(o=U(U({},e),{method:r,signal:t.signal}),null!==p?o.headers=p:delete o.headers,null!==d&&(o.body=d),!f)return[3,2];return[4,f({options:o,url:u,path:a,route:n})];case 1:return[2,i.sent()];case 2:return[2,o]}})})];case 1:return b=Object.entries({url:l,method:r,body:(h=E.sent()).body||""}).map(function(e){return e[0]+":"+e[1]}).join("||"),g={url:l,options:h},m={},[4,o.has(b)];case 2:return m.isCached=E.sent(),m.id=b,[4,o.get(b)];case 3:return[2,(g.response=(m.cached=E.sent(),m),g)]}})})}(c,r,e=V.current,0,K,o,u,t,a,E.request)];case 1:if(f=(s=ei.sent()).url,l=s.options,d=s.response,ee.current=void 0,x>0&&!er.current&&!ee.current)return[2,z.current];W||ep(!0),b=M&&setTimeout(function(){Q.current=!0,e.abort(),C&&C()},M),ei.label=2;case 2:if(ei.trys.push([2,17,23,24]),!(d.isCached&&O===ec))return[3,3];return j=d.cached,[3,5];case 3:return[4,fetch(f,l)];case 4:j=ei.sent().clone(),ei.label=5;case 5:var es,ef;return X.current=j.clone(),[4,(es=j,ef=F.data,p(void 0,void 0,void 0,function(){var e,r;return h(this,function(t){switch(t.label){case 0:if(void 0===es)throw Error("Response cannot be undefined... \uD83D\uDE35");if(void 0===D)throw Error("responseType cannot be undefined... \uD83D\uDE35");if(null==(e=Array.isArray(D)?D:[D])[0])throw Error("could not parse data from response \uD83D\uDE35");return[4,P(es,e)];case 1:return r=t.sent(),[2,!m(ef)&&m(r)?ef:r]}})}))];case 6:if(k=ei.sent(),X.current.data=N(z.current,k),R=X,!E.response)return[3,8];return[4,E.response({response:X.current,request:c})];case 7:return H=ei.sent(),[3,9];case 8:H=X.current,ei.label=9;case 9:if(R.current=H,v("data"in X.current,"You must have `data` field on the Response returned from your `interceptors.response`"),z.current=X.current.data,G={attempt:$.current,response:j},et=!g(q)&&Array.isArray(q)&&q.length<1&&(null==j?void 0:j.ok)===!1||Array.isArray(q)&&q.includes(j.status))return[3,12];if(!(en=g(q)))return[3,11];return[4,q(G)];case 10:en=ei.sent(),ei.label=11;case 11:et=en,ei.label=12;case 12:if(!(et&&_>0&&_>$.current))return[3,14];return[4,n(G,t,a)];case 13:return[2,ei.sent()];case 14:if(!(O===ec&&!d.isCached))return[3,16];return[4,K.set(d.id,j.clone())];case 15:ei.sent(),ei.label=16;case 16:return Array.isArray(z.current)&&z.current.length%x&&(er.current=!1),[3,24];case 17:if(eo=ei.sent(),$.current>=_&&Q.current&&(ee.current=I("AbortError","Timeout Error")),G={attempt:$.current,error:eo},eu=!g(q)&&Array.isArray(q)&&q.length<1)return[3,20];if(!(ea=g(q)))return[3,19];return[4,q(G)];case 18:ea=ei.sent(),ei.label=19;case 19:eu=ea,ei.label=20;case 20:if(!(eu&&_>0&&_>$.current))return[3,22];return[4,n(G,t,a)];case 21:return[2,ei.sent()];case 22:return"AbortError"!==eo.name&&(ee.current=eo),[3,24];case 23:return Q.current=!1,b&&clearTimeout(b),V.current=void 0,[7];case 24:return!j||j.ok||ee.current||(ee.current=I(j.status,j.statusText)),W||ep(!1),$.current===_&&($.current=0),ee.current&&S({error:ee.current}),[2,z.current]}})})},n=function(r,n,o){return eu(e,void 0,void 0,function(){var e;return ei(this,function(u){switch(u.label){case 0:if(Number.isInteger(e=g(H)?H(r):H)&&e>=0||console.error("retryDelay must be a number >= 0! If you're using it as a function, it must also return a number >= 0."),$.current++,!e)return[3,2];return[4,new Promise(function(r){return setTimeout(r,e)})];case 1:u.sent(),u.label=2;case 2:return[4,t(n,o)];case 3:return[2,u.sent()]}})})};return W?function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return eu(e,void 0,void 0,function(){return ei(this,function(e){switch(e.label){case 0:return es.current=t.apply(void 0,r).then(function(e){return et.current="success",e},function(){et.current="error"}),eh(),[4,es.current];case 1:return[2,e.sent()]}})})}:t},[Z,T,c,o,u,E,O,x,M,j,b,C,F.data,N,eh,W]),ey=(0,s.useCallback)(ev(i.POST),[ev]),eb=(0,s.useCallback)(ev(i.DELETE),[ev]),ew=(0,s.useMemo)(function(){return Object.defineProperties({get:ev(i.GET),post:ey,patch:ev(i.PATCH),put:ev(i.PUT),options:ev(i.OPTIONS),head:ev(i.HEAD),connect:ev(i.CONNECT),trace:ev(i.TRACE),del:eb,delete:eb,abort:function(){return V.current&&V.current.abort()},query:function(e,r){return ey({query:e,variables:r})},mutate:function(e,r){return ey({mutation:e,variables:r})},cache:K},{loading:{get:function(){return ed.current}},error:{get:function(){return ee.current}},data:{get:function(){return z.current}}})},[ev]),eg=(0,s.useMemo)(function(){return k(X,z)},[]);if((0,s.useEffect)(function(){return ef.current=!0,Array.isArray(f)&&(0,ew[(c.method||i.GET).toLowerCase()])(),function(){return ef.current=!1}},f),(0,s.useEffect)(function(){return ew.abort},[]),W&&es.current){if(Z)throw Error("Suspense on server side is not yet supported! \uD83D\uDE45‍♂️");switch(et.current){case"pending":throw es.current;case"error":throw ee.current}}return Object.assign([ew,eg,ed.current,ee.current],eo(eo({request:ew,response:eg},ew),{loading:ed.current,data:z.current,error:ee.current}))}},8137:function(e,r){var t,n,o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),(t=n=r.Device||(r.Device={})).Browser="browser",t.Server="server",t.Native="native";var u=n.Browser,i=n.Server,a=n.Native,c=!!("undefined"!=typeof window&&window.document&&window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"==navigator.product?a:c?u:i,f={isBrowser:s===u,isServer:s===i,isNative:s===a,device:s,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:s===u&&!!window.addEventListener,canUseViewport:s===u&&!!window.screen},l=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.reduce(function(e,r){return o(o({},e),r)},{})},d=function(){return l((Object.keys(f).map(function(e){return f[e]}),f))},p=d();r.weAreServer=function(){f.isServer=!0,p=d()},r.useSSR=function(){return p},r.default=r.useSSR}}]);