(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{4939:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/regex_dictionary",function(){return r(378)}])},378:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7329),i=r(5893),s=r(7294),c=r(4513),l=r(1009);function u(e,t){return function(r,n){for(var i=[],s=t;s<e.length&&!(n(e[s])&&(i.push(e[s]),i.length>=r));s++);for(var c=!1,l=s;l<e.length;l++)if(n(e[l])){c=!0;break}return{current:i,next:u(e,s),has_remaining:c}}}function a(e){return u(e,0)}function o(e){var t=a(e.dict)(0,(function(){return!0})),r=t=t.next(100,e.filter);return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{class:"italic",children:0===r.current.length?"No Results":1===r.current.length?"1 Result":r.current.length+(r.has_remaining?"+":"")+" Results"}),r.current.map((function(e){return(0,i.jsx)("div",{children:e},e)})),r.has_remaining&&(0,i.jsx)("button",{onClick:function(){return alert("TODO next")},children:"Next \u2192"})]})}function d(e){var t,r,c=(0,s.useState)("/^.*$/i"),l=c[0],u=c[1],a=l.split("/"),d=(0,n.Z)(a),h=a.pop(),f=a.shift(),x=a.join("/");if(d.length<2)t=/^error$/i,r="Expected /regex/flags";else if(f)t=/^error$/i,r="Expected (nothing here)/regex/flags";else try{t=new RegExp(x,h),r=null}catch(g){t=/^error$/i,r=g.toString()}return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{value:l,onInput:function(e){return u(e.currentTarget.value)}}),null!=r&&(0,i.jsxs)("div",{class:"text-red-500",children:["Error! ",r]}),(0,i.jsx)(o,{dict:e.dict,filter:function(e){return!!t.exec(e)}})]})}function h(){var e=(0,l.ZP)("https://raw.githubusercontent.com/dwyl/english-words/master/words.txt",{},[]),t=e.loading,r=e.error,n=e.data;return t?(0,i.jsx)("div",{children:"Loading\u2026"}):r?(0,i.jsxs)("div",{class:"text-red-500",children:["Error! $",r.toString()]}):n?(0,i.jsx)(d,{dict:(""+n).split("\n").map((function(e){return e.trim()}))}):(0,i.jsx)("div",{children:"Invalid state"})}function f(){return(0,i.jsx)(c.pv,{title:"Regex Dictionary",meta_desc:"Search for english words using regex.",parent:{name:"Tools",href:"/tools"},filename:"/pages/tools/regex_dictionary.tsx",children:(0,i.jsx)(h,{})})}},4513:function(e,t,r){"use strict";r.d(t,{K5:function(){return c},$_:function(){return l},z6:function(){return u},pv:function(){return a}});var n=r(5893),i=r(9008),s=r(1664);function c(e){return(0,n.jsx)("div",{class:"max-w-screen-lg mx-auto",children:(0,n.jsx)("div",{class:"p-4",children:e.children})})}function l(){return(0,n.jsx)("footer",{class:"bg-gray-600 text-white",children:(0,n.jsxs)(c,{children:[(0,n.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com/",target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Source"})," \xb7"," ",(0,n.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com/",target:"_blank",rel:"noreferrer noopener",class:"underline",children:"Edit"})]})})}function u(e){return(0,n.jsxs)("div",{class:"p-4 flex flex-col sm:flex-row",children:[(0,n.jsx)(s.default,{href:e.parent.href,children:(0,n.jsxs)("a",{class:"flex-1 text-white hover:underline flex justify-items-start items-center",children:["< ",e.parent.name]})}),(0,n.jsx)("h1",{class:"flex-0 w-max text-2xl font-bold text-white flex justify-items-start items-center",children:e.title}),(0,n.jsx)("div",{class:"flex-1 flex justify-items-start items-center"})]})}function a(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:e.title}),(0,n.jsx)("meta",{name:"description",content:e.meta_desc})]}),(0,n.jsx)("header",{class:"bg-gray-800",children:(0,n.jsx)(u,{parent:e.parent,title:e.title})}),(0,n.jsx)("main",{class:"bg-gray-300 min-h-screen",children:(0,n.jsx)(c,{children:e.children})}),(0,n.jsx)(l,{})]})}}},function(e){e.O(0,[77,774,888,179],(function(){return t=4939,e(e.s=t);var t}));var t=e.O();_N_E=t}]);