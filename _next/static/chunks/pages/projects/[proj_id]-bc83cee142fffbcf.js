(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{7976:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[proj_id]",function(){return t(8806)}])},8806:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f},default:function(){return j}});var r=t(5893);t(4312);var i=t(9008),s=t.n(i),o=t(7294),l=t(4303),c=t(9876),d=t(9584),a=t(796);function h(){return(0,r.jsx)("div",{class:"inline-block align-bottom text-white",children:(0,r.jsxs)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",children:[(0,r.jsx)("title",{children:"External"}),(0,r.jsxs)("g",{strokeWidth:"2.1",stroke:"#fff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("polyline",{points:"17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"}),(0,r.jsx)("path",{d:"M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"})]})]})})}function x(){return(0,r.jsx)("div",{class:"inline-block align-bottom text-white",children:(0,r.jsxs)("svg",{width:"24px",height:"24px",role:"img",viewBox:"0 0 24 24",children:[(0,r.jsx)("title",{children:"Github"}),(0,r.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",fill:"#fff"})]})})}function u(e){return(0,r.jsxs)("a",{class:"inline-block p-4 px-8 rounded-md text-white <sm:min-w-max <sm:flex-1 <sm:text-center "+({web_demo:"bg-gradient-to-r from-green-500 to-green-600",github:"bg-gray-500",information:"bg-gradient-to-r from-blue-500 to-blue-600"})[e.style],href:e.href,target:"_blank",rel:"noopener",children:["github"===e.style?(0,r.jsx)(x,{}):(0,r.jsx)(h,{})," ",e.children]})}var f=!0;function j(e){let n=function(e){let n=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=[];return n.current&&e(n.current,e=>t.push(e)),()=>t.forEach(e=>e())},[n.current]),n}((n,t)=>{if(console.log(n,t),null!=window.visualViewport){let r=window.visualViewport,i=()=>{n.style.backgroundPosition=r.offsetLeft+"px "+r.offsetTop+"px",n.style.backgroundSize=e.project.img[0]*(1/r.scale)+"px"};r.addEventListener("resize",i),t(()=>r.removeEventListener("resize",i)),r.addEventListener("scroll",i),t(()=>r.removeEventListener("scroll",i))}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:e.project.title}),(0,r.jsx)("meta",{name:"description",content:function e(n){return n.map(n=>"string"==typeof n?n:e(n.c)).join("")}(e.project.body)})]}),(0,r.jsx)("header",{ref:n,style:{backgroundImage:"url("+JSON.stringify(e.project.img[2])+")"},class:"bg-fixed",children:(0,r.jsxs)("div",{class:"bg-gray-800 bg-opacity-90 text-gray-300",children:[(0,r.jsx)(l.z6,{title:e.project.title,parent:{name:"pfg's homepage",href:"/"}}),(0,r.jsx)(l.K5,{children:(0,r.jsxs)("div",{class:"mb-3 flex flex-wrap gap-4",children:[(0,r.jsx)(a.Os,{when:e.project.site,children:e=>(0,r.jsx)(u,{style:{informational:"information",demo:"web_demo",external:"information"}[e.kind],href:e.url,children:{informational:"Project Homepage",demo:"View Demo",external:"More Information"}[e.kind]})}),(0,r.jsx)(a.Os,{when:e.project.github,children:e=>(0,r.jsx)(u,{style:"github",href:"https://github.com/"+e.repo,children:"Source Code"})})]})})]})}),(0,r.jsx)("main",{class:"bg-gray-300 min-h-screen",children:(0,r.jsxs)(l.K5,{children:[(0,r.jsxs)("p",{class:"mb-3",children:[(0,r.jsx)(d.o,{els:e.project.body})," "]}),(0,r.jsxs)("p",{class:"mb-3",children:["Made with"," ",(0,r.jsx)(a.U2,{each:e.project.technologies,children:(e,n)=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(a.Vf,{when:0!==n(),children:", "}),(0,r.jsx)(p,{tech:e})]},n())})]}),(0,r.jsx)(a.Os,{when:e.project_readme,children:e=>(0,r.jsx)("div",{class:"markdown-body -mx-4 sm:mx-0 bg-white sm:rounded-xl p-10",dangerouslySetInnerHTML:{__html:e.text}})})]})}),(0,r.jsx)(l.$_,{})]})}function p(e){let n=()=>c.RJ[e.tech];return(0,r.jsx)("a",{href:n().link,class:"text-blue-700 hover:underline",target:"_blank",rel:"noopener",children:n().name})}},4312:function(){}},function(e){e.O(0,[664,388,570,774,888,179],function(){return e(e.s=7976)}),_N_E=e.O()}]);