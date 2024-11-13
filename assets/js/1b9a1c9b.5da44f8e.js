"use strict";(self.webpackChunkblueprints_website=self.webpackChunkblueprints_website||[]).push([[594],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(5072),a=(n(1504),n(5788));const l={},o="Horn Service Kuksa",i={unversionedId:"service-to-signal/components/horn-service-kuksa/README",id:"service-to-signal/components/horn-service-kuksa/README",title:"Horn Service Kuksa",description:"This component implements the COVEAS uService for the Horn. It uses the Zenoh transport for Eclipse uProtocol. To start the service simply run:",source:"@site/docs/service-to-signal/components/horn-service-kuksa/README.md",sourceDirName:"service-to-signal/components/horn-service-kuksa",slug:"/service-to-signal/components/horn-service-kuksa/",permalink:"/docs/service-to-signal/components/horn-service-kuksa/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"overallSidebar",previous:{title:"service-to-signal-blueprint",permalink:"/docs/service-to-signal/"},next:{title:"Horn Client",permalink:"/docs/service-to-signal/components/horn-client/"}},s={},c=[],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"horn-service-kuksa"},"Horn Service Kuksa"),(0,a.yg)("p",null,"This component implements the COVEAS uService for the Horn. It uses the Zenoh transport for Eclipse uProtocol. To start the service simply run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cargo run\n")),(0,a.yg)("p",null,"You can use the following parameters to configure the ",(0,a.yg)("inlineCode",{parentName:"p"},"horn-service")," implementation:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Long Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Short Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Environment Variable"),(0,a.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Path to set a configuration for the Eclipse Zenoh transport. If no path is set, the default values from Eclipse Zenoh are used.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"listen"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"SERVICE_LISTEN"),(0,a.yg)("td",{parentName:"tr",align:null},"tcp/0.0.0.0:15000"),(0,a.yg)("td",{parentName:"tr",align:null},"Endpoint on which the service listens and is available.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kuksa_address"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"KUKSA_ADDRESS"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"http://127.0.0.1:55556"},"http://127.0.0.1:55556")),(0,a.yg)("td",{parentName:"tr",align:null},"Endpoint at which the services tries to connect with an instance of the Kuksa Databroker.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kuksa_enabled"),(0,a.yg)("td",{parentName:"tr",align:null},"k"),(0,a.yg)("td",{parentName:"tr",align:null},"KUKSA_ENABLED"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"A flag to indicate whether an instance of the Kuksa Databroker is available. If ",(0,a.yg)("inlineCode",{parentName:"td"},"kuksa_enabled")," is ",(0,a.yg)("inlineCode",{parentName:"td"},"false"),", the service will only log changes of the horn status.")))))}g.isMDXComponent=!0}}]);