"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var o=n(7462),r=n(7294),i=n(3905),a=n(4996),l=n(6010),s=n(9960),c=n(941);function d(e){let{title:t,light:n,dark:o,url:i,description:a,imagePosition:d="bottom",alt:u}=e;const p={top:"column-reverse",bottom:"column",left:"row-reverse",right:"row"}[d],m=()=>r.createElement("div",{className:"card__body text"},r.createElement(s.Z,{to:i},"string"==typeof t?r.createElement("em",null,t):t),"string"==typeof a?r.createElement("p",{style:{color:"#666666",fontSize:"14px"}},a):a),h=()=>r.createElement("div",{className:"card__body image",style:{display:"flex",alignItems:"flex-end"}},r.createElement(s.Z,{to:i},r.createElement(c.Z,{alt:u||t,sources:{light:n,dark:o}})));return r.createElement("div",{className:(0,l.Z)("card"),style:{flexDirection:p,height:"100%"}},r.createElement(m,null),r.createElement(h,null))}const u={slug:"/",title:"Why Build With Axon",position:1,sidebar_position:1},p=void 0,m={unversionedId:"why_build_with_axon",id:"why_build_with_axon",title:"Why Build With Axon",description:"Axon facilitates the flow of assets and information between DApps built on different blockchains for a multi-chain future. With Axon, web3 builders can easily transform their ideas into reality. Whatever your project is, whether it\u2019s GameFi, DeFi, or NFT, Axon offers a scalable and cost-effective framework to deploy your applications.",source:"@site/docs/why_build_with_axon.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/why_build_with_axon.mdx",tags:[],version:"current",lastUpdatedAt:1671596732,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:1,frontMatter:{slug:"/",title:"Why Build With Axon",position:1,sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/category/getting-started"}},h={},f=[{value:"Universal Abstraction",id:"universal-abstraction",level:3},{value:"Highly Interoperable",id:"highly-interoperable",level:3},{value:"High Performance",id:"high-performance",level:3},{value:"Easy-to-Deploy",id:"easy-to-deploy",level:3}],y={toc:f};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Axon facilitates the flow of assets and information between DApps built on different blockchains for a multi-chain future. With Axon, web3 builders can easily transform their ideas into reality. Whatever your project is, whether it\u2019s GameFi, DeFi, or NFT, Axon offers a scalable and cost-effective framework to deploy your applications."),(0,i.kt)("h3",{id:"universal-abstraction"},"Universal Abstraction"),(0,i.kt)("p",null,"Axon\u2019s abstraction capacity is derived from the universal CKB, which allows for the construction of any account model and virtual machine instructions. Devs on Axon can load and verify cells through a precompiled contract on CKB-VM, which makes the development of multi-chain, contract wallet, and other applications much easier."),(0,i.kt)("h3",{id:"highly-interoperable"},"Highly Interoperable"),(0,i.kt)("p",null,"Axon will soon be fully compatible with Inter-Blockchain Communication (IBC)\u2014the gateway to the Cosmos ecosystem, and later with all EVM-based blockchains. In addition to these top two thriving networks, Axon will be continually onboarding more protocols."),(0,i.kt)("h3",{id:"high-performance"},"High Performance"),(0,i.kt)("p",null,"Axon uses a new Byzantine Fault Tolerance (BFT) based consensus algorithm that supports over 3000 TPS (tested 1000+ TPS on Uniswap V3) across hundreds of nodes with fast transaction finality."),(0,i.kt)("h3",{id:"easy-to-deploy"},"Easy-to-Deploy"),(0,i.kt)("p",null,"Axon provides a full-fledged toolkit that enables web3 developers to start building right away without having to understand the fundamentals. Designed with a different approach than Relayers, Axon automates off-chain communication, thereby significantly reducing deployment costs."),(0,i.kt)("div",{id:"homepage"},(0,i.kt)("h3",{style:{fontSize:"26px"}},"Feedback & Contribute"),(0,i.kt)("div",{className:"row feedback-contribute"},(0,i.kt)("div",{className:"col col--4"},(0,i.kt)(d,{title:"Community",light:(0,a.Z)("/img/community_light.svg"),dark:(0,a.Z)("/img/community_dark.svg"),url:"",description:"Under construction, please wait",imagePosition:"right",mdxType:"ImageCard"})),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)(d,{title:"Feedback",light:(0,a.Z)("/img/feedback_light.svg"),dark:(0,a.Z)("/img/feedback_dark.svg"),url:"https://twitter.com/AxonWeb3",description:"Tell us what you think",imagePosition:"right",mdxType:"ImageCard"})),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)(d,{title:"Contribute",light:(0,a.Z)("/img/contribute_light.svg"),dark:(0,a.Z)("/img/contribute_dark.svg"),url:"https://github.com/axonweb3/axon",description:"Submit a pull request",imagePosition:"right",mdxType:"ImageCard"})))))}b.isMDXComponent=!0}}]);