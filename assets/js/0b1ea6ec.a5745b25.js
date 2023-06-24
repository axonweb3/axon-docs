"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4996);const i={slug:"fundamentals",title:"Axon Fundamentals",position:2,sidebar_position:2},s=void 0,l={unversionedId:"axon_fundamentals",id:"axon_fundamentals",title:"Axon Fundamentals",description:"Axon is a Proof-of-Stake (PoS) framework that enables developers to build app-chains as Layer 2 of CKB network. It provides a secure and efficient way of interacting with multiple participants in the network. Axon relies on a set of key concepts that underpin its operation and the various participants in its economic ecosystem. This essay contains two lists: one summarizes the key concepts; the other outlines the roles of the participants.",source:"@site/docs/axon_fundamentals.mdx",sourceDirName:".",slug:"/fundamentals",permalink:"/fundamentals",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/axon_fundamentals.mdx",tags:[],version:"current",lastUpdatedAt:1687594808,formattedLastUpdatedAt:"Jun 24, 2023",sidebarPosition:2,frontMatter:{slug:"fundamentals",title:"Axon Fundamentals",position:2,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Why Build With Axon",permalink:"/"},next:{title:"Getting Started",permalink:"/category/getting-started"}},c={},p=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Participants",id:"participants",level:2}],m={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Axon is a Proof-of-Stake (PoS) framework that enables developers to build app-chains as Layer 2 of CKB network. It provides a secure and efficient way of interacting with multiple participants in the network. Axon relies on a set of key concepts that underpin its operation and the various participants in its economic ecosystem. This essay contains two lists: one summarizes the key concepts; the other outlines the roles of the participants."),(0,r.kt)("img",{src:(0,o.Z)("img/Axon_fundamentals.gif")}),(0,r.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md"},"CKB")),": The underlying Layer 1 of Axon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell"},"Cell")),": The primary state units in CKB, within which users can include arbitrary states."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell"},"Type/Lock Script")),": Two kinds of scripts, type and lock, that are executed in CKB-VM. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," script is executed when a cell is created in a transaction output, to guarantee that the state in the cell is valid under specific rules. "),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"lock")," script is executed when the cell is referenced by a transaction input, to make sure the user has appropriate permissions to update or transfer the cell. "),(0,r.kt)("li",{parentName:"ul"},"If the execution of the ",(0,r.kt)("inlineCode",{parentName:"li"},"lock")," script returns true, the user is allowed to transfer the cell or update its data according to validation rules that are specified by the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\xa0script."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Axon Token (AT)"),": An abbreviation for the User Defined Token (UDT) issued on CKB corresponding to the chain built with Axon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application"),": The decentralized applications that are deployed on Axon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Epoch"),": The tenure of a validator set."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Period"),": A preset interval after which one of the validators must submit the latest Axon state to CKB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Metadata"),": The essential information about Axon, such as the list of validators and consensus configuration. Metadata is stored in metadata cell in CKB and is updated at the start of each epoch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Checkpoint"),": The latest status of Axon, such as state root, block hash, proposal count, and BLS signature. These status is submitted by an Axon node to a kicker at the end of each period and stored in the checkpoint cell in CKB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Quorum"),": the max number of Axon validators in an epoch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Image Cell System Contract (ICSC)"),": A system contract in Axon that receives cells sent by the emitter which will be explained next and stores them in a Merkle Patricia Tree (MPT)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CKB Light Client System Contract"),": A system contract in Axon that receives CKB block headers from the emitter and stores them in the same MPT with ICSC."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross-Chain Contract"),": A contract that records the cross-chain states and dispatch the cross-chain messages transmitted by Force Relay.")),(0,r.kt)("h2",{id:"participants"},"Participants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Seeder"),": The founder, who can create AT, initialize the Axon chain, and adjust some metadata with signed scripts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staker"),": Participants who intend to become validators. They stake Axon Token (AT) into the ",(0,r.kt)("em",{parentName:"li"},"stake type script"),", either with their own tokens or with delegated tokens via ",(0,r.kt)("em",{parentName:"li"},"delegate type script"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delegator"),": Participants who delegate their tokens to stakers they choose, to increase the latter\u2019s chance to be selected as the validators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Validator"),": Participants in Axon\u2019s consensus that are elected from stakers. The set of validators is selected as the top quorum stakers corresponding to the current epoch. The selection logic is defined in ",(0,r.kt)("em",{parentName:"li"},"metadata type script"),". The validator set changes every epoch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kicker"),": A permissionless role that performs the following function:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Relays the out point of the latest metadata cell to Axon, and the latest checkpoint to CKB."),(0,r.kt)("li",{parentName:"ul"},"Updates the metadata through subscribing the checkpoint cell in CKB."),(0,r.kt)("li",{parentName:"ul"},"Updates the reward cell to unlock rewards."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Forcerelay"),": A relayer that facilitates the transmission of messages from one network to another in the CKB ecosystem. The message schema follows the Inter-Blockchain Communication (IBC) protocol."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Emitter"),": A standalone program that can emit CKB block headers and some specified cells to Axon via Forcerelay.")))}h.isMDXComponent=!0}}]);