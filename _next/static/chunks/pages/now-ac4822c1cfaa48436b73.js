(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{2167:function(e,n,t){"use strict";var r=t(3038),c=t(862);n.default=void 0;var i=c(t(7294)),a=t(9414),o=t(4651),s=t(7426),l={};function u(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,c=(0,o.useRouter)(),f=i.default.useMemo((function(){var n=(0,a.resolveHref)(c,e.href,!0),t=r(n,2),i=t[0],o=t[1];return{href:i,as:e.as?(0,a.resolveHref)(c,e.as):o||i}}),[c,e.href,e.as]),d=f.href,h=f.as,p=e.children,x=e.replace,v=e.shallow,m=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(n=i.Children.only(p))&&"object"===typeof n&&n.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),w=r(j,2),y=w[0],_=w[1],k=i.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);(0,i.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(d),n="undefined"!==typeof g?g:c&&c.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(c,d,h,{locale:n})}),[h,d,_,g,t,c]);var E={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),n[c?"replace":"push"](t,r,{shallow:i,locale:s,scroll:o}))}(e,c,d,h,x,v,m,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(c,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof g?g:c&&c.locale,M=c&&c.isLocaleDomain&&(0,a.getDomainLocale)(h,L,c&&c.locales,c&&c.domainLocales);E.href=M||(0,a.addBasePath)((0,a.addLocale)(h,L,c&&c.defaultLocale))}return i.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),o.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[h,f]};var c=t(7294),i=t(3447),a="undefined"!==typeof IntersectionObserver;var o=new Map},7144:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/now",function(){return t(9655)}])},1664:function(e,n,t){e.exports=t(2167)},9655:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),c=t(4513),i=t(2148);function a(){return(0,r.jsxs)(c.pv,{title:"Now",meta_desc:"what I'm doing now",parent:{name:"pfg's homepage",href:"/"},filename:"/pages/now.tsx",children:[(0,r.jsx)("h2",{class:"font-black text-3xl my-3",children:"currently"}),(0,r.jsx)("p",{class:"mb-2",children:"making stuff"}),(0,r.jsx)("p",{class:"mb-2",children:(0,r.jsx)(i.A,{href:"https://nownownow.com/about",children:"what's a now page?"})})]})}},4513:function(e,n,t){"use strict";t.d(n,{K5:function(){return a},$_:function(){return o},z6:function(){return s},pv:function(){return l}});var r=t(5893),c=t(9008),i=t(1664);function a(e){return(0,r.jsx)("div",{class:"max-w-screen-lg mx-auto",children:(0,r.jsx)("div",{class:"p-4",children:e.children})})}function o(){return(0,r.jsx)("footer",{class:"bg-gray-600 text-white",children:(0,r.jsxs)(a,{children:[(0,r.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com/",target:"_blank",rel:"noopener",class:"underline",children:"Source"})," \xb7"," ",(0,r.jsx)("a",{href:"https://github.com/pfgithub/pfgithub.github.com/",target:"_blank",rel:"noopener",class:"underline",children:"Edit"})]})})}function s(e){return(0,r.jsxs)("div",{class:"p-4 flex flex-col sm:flex-row",children:[(0,r.jsx)(i.default,{href:e.parent.href,children:(0,r.jsxs)("a",{class:"flex-1 text-white hover:underline inline-block",children:[(0,r.jsx)("span",{"aria-label":"Back to",role:"img",children:"<"})," ",(0,r.jsx)("span",{children:e.parent.name})]})}),(0,r.jsx)("h1",{class:"flex-0 w-max text-2xl font-bold text-white flex justify-items-start items-center",children:e.title}),(0,r.jsx)("div",{class:"flex-1 flex justify-items-start items-center"})]})}function l(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.meta_desc})]}),(0,r.jsx)("header",{class:"bg-gray-800",children:(0,r.jsx)(s,{parent:e.parent,title:e.title})}),(0,r.jsx)("main",{class:"bg-gray-300 min-h-screen",children:(0,r.jsx)(a,{children:e.children})}),(0,r.jsx)(o,{})]})}},2148:function(e,n,t){"use strict";t.d(n,{A:function(){return c}});var r=t(5893);function c(e){return(0,r.jsx)("a",{href:e.href,class:"hover:underline text-blue-900",target:"_blank",rel:"noopener",children:e.children})}}},function(e){e.O(0,[774,888,179],(function(){return n=7144,e(e.s=n);var n}));var n=e.O();_N_E=n}]);