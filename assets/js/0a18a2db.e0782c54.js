"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[767],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4469:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"Why Build With Axon",sidebar_position:1},i=void 0,l={unversionedId:"about-axon/Why_Build_With_Axon",id:"about-axon/Why_Build_With_Axon",title:"Why Build With Axon",description:"Axon facilitates the flow of assets and information between DApps built on different blockchains for a multi-chain future. With Axon, web3 builders can easily transform their ideas into reality. Whatever your project is, whether it\u2019s GameFi, DeFi, or NFT, Axon offers a scalable and cost-effective framework to deploy your applications.",source:"@site/docs/about-axon/Why_Build_With_Axon.md",sourceDirName:"about-axon",slug:"/about-axon/Why_Build_With_Axon",permalink:"/about-axon/Why_Build_With_Axon",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/about-axon/Why_Build_With_Axon.md",tags:[],version:"current",lastUpdatedAt:1667265208,formattedLastUpdatedAt:"Nov 1, 2022",sidebarPosition:1,frontMatter:{title:"Why Build With Axon",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About Axon",permalink:"/"},next:{title:"For DApp Devs",permalink:"/category/for-dapp-devs"}},s={},c=[{value:"High TPS",id:"high-tps",level:3},{value:"Easy-to-Deploy",id:"easy-to-deploy",level:3},{value:"Highly Interoperable",id:"highly-interoperable",level:3},{value:"Here\u2019s how we do it",id:"heres-how-we-do-it",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Axon facilitates the flow of assets and information between DApps built on different blockchains for a multi-chain future. With Axon, web3 builders can easily transform their ideas into reality. Whatever your project is, whether it\u2019s GameFi, DeFi, or NFT, Axon offers a scalable and cost-effective framework to deploy your applications."),(0,r.kt)("h3",{id:"high-tps"},"High TPS"),(0,r.kt)("p",null,"Axon uses a new Byzantine Fault Tolerance (BFT) based consensus algorithm called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/overlord"},"Overlord Consensus"),". It decouples transaction sequence from state consensus, so that execution and consensus process can be carried out simultaneously."),(0,r.kt)("p",null,"This parallel execution supports over 3000 TPS (Transactions Per Second) across hundreds of nodes, with a transaction delay of less than a few seconds."),(0,r.kt)("h3",{id:"easy-to-deploy"},"Easy-to-Deploy"),(0,r.kt)("p",null,"Axon provides a full-fledged toolkit that enables web3 developers to start building right away without having to understand the fundamentals. Designed with a different approach than Relayers, Axon automates off-chain communication, thereby significantly reducing deployment costs."),(0,r.kt)("p",null,"The hands-on tutorial ",(0,r.kt)("b",null,(0,r.kt)("a",{parentName:"p",href:"/for-dapp-devs/Zero_To_Axon_With_Axon_Cli"},"Zero to Axon with Axon-cli"))," teaches you how to build a chain from scratch in less than 15 minutes."),(0,r.kt)("h3",{id:"highly-interoperable"},"Highly Interoperable"),(0,r.kt)("p",null,"Axon will soon be fully compatible with Inter-Blockchain Communication (IBC)\u2014the gateway to the Cosmos ecosystem, and later with all EVM-based blockchains. In addition to these top two thriving networks, Axon will be continually onboarding more protocols."),(0,r.kt)("h3",{id:"heres-how-we-do-it"},"Here\u2019s how we do it"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CKB-VM"),(0,r.kt)("li",{parentName:"ul"},"Overlord Consensus"),(0,r.kt)("li",{parentName:"ul"},"P2P Network"),(0,r.kt)("li",{parentName:"ul"},"Mempool")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CKB-VM")),(0,r.kt)("p",null,"CKB Virtual Machine (CKB-VM) is the software implementation of the RISC-V instruction set used as a scripting VM. CKB-VM can call contracts on CKB, allowing protocols to be upgraded along with the contracts without hard-coding. With a variety of algorithms precompiled, CKB-VM greatly lowers the barrier to writing EVM-compatible contracts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/ckb-vm"},"Explore more"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Overlord Consensus")),(0,r.kt)("p",null,"Overlord is a BFT consensus algorithm that supports over 3000 TPS across hundreds of nodes, with a transaction delay of less than a few seconds. By decoupling transaction sequence from state consensus, Overlord Consensus enables the  execution and consensus process to run in parallel."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/overlord"},"Explore more"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"P2P Network")),(0,r.kt)("p",null,"The network of Axon is developed on top of Tentacle, a multi-layered P2P protocol stack, where each layer functions in a relatively independent manner. This design provides maximum flexibility for developers and reduces the complexity of development."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.cryptape.com/tentacle-the-network-layer-of-ckb"},"Explore more"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mempool")),(0,r.kt)("p",null,"Axon's mempool performs multiple validations before committing transactions to the block. When an influx of transactions comes in, the mempool slices these transactions into 4 queues to avert TPS exceeding the block interval limits."))}p.isMDXComponent=!0}}]);