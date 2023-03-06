"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=n(7462),a=(n(7294),n(3905)),r=n(4996);const i={title:"Mempool",hide_title:!0,sidebar_position:5},s="Mempool",l={unversionedId:"getting-started/for-contributor/mempool",id:"getting-started/for-contributor/mempool",title:"Mempool",description:"Mempool (i.e., memory pool), or transaction pool, is the queue where unconfirmed transactions are temporarily stored for further verification in order to be included in a block.",source:"@site/docs/getting-started/for-contributor/mempool.md",sourceDirName:"getting-started/for-contributor",slug:"/getting-started/for-contributor/mempool",permalink:"/getting-started/for-contributor/mempool",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-contributor/mempool.md",tags:[],version:"current",lastUpdatedAt:1678070606,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:5,frontMatter:{title:"Mempool",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Executor",permalink:"/getting-started/for-contributor/executor"},next:{title:"Image Cell System Contract (ICSC)",permalink:"/getting-started/for-contributor/icsc"}},c={},m=[{value:"Mandatory Validations",id:"mandatory-validations",level:2},{value:"Challenges From High-Performance, Compatibility, and Nonce",id:"challenges-from-high-performance-compatibility-and-nonce",level:2},{value:"Four Transaction Queues To Ensure Smooth Flow Under High TPS",id:"four-transaction-queues-to-ensure-smooth-flow-under-high-tps",level:2},{value:"System Mempool For Built-In Contracts",id:"system-mempool-for-built-in-contracts",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mempool"},"Mempool"),(0,a.kt)("p",null,"Mempool (i.e., memory pool), or transaction pool, is the queue where unconfirmed transactions are temporarily stored for further verification in order to be included in a block. "),(0,a.kt)("p",null,"This brief introduction to Axon's mempool explains how Axon performs transaction validation, and helps you understand its uniqueness in the design of a high-performance EVM-compatible framework."),(0,a.kt)("h2",{id:"mandatory-validations"},"Mandatory Validations"),(0,a.kt)("p",null,"Any transaction on Axon is subject to a series of validations before and after entering into the mempool."),(0,a.kt)("p",null,"Before mempool, a transaction must undergo the following checks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Balance must be greater than the base fee; "),(0,a.kt)("li",{parentName:"ol"},"Transaction size must be smaller than 1M bytes;"),(0,a.kt)("li",{parentName:"ol"},"Other parameters including gas price, gas limit, and chain id;"),(0,a.kt)("li",{parentName:"ol"},"Transaction signature validation, to verify the authenticity of the transaction;"),(0,a.kt)("li",{parentName:"ol"},"De-duplicate test, to prevent duplicate transactions and guarantee the correctness of implementation.")),(0,a.kt)("p",null,"After entering the mempool, the following rules are required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transactions with the same sender are packaged strictly according to the order of nonce;"),(0,a.kt)("li",{parentName:"ul"},"For transactions with the same sender and the same nonce, the one with higher price will be kept;"),(0,a.kt)("li",{parentName:"ul"},"A transaction queue of the same sender can hold a maximum of 64 pending transactions;"),(0,a.kt)("li",{parentName:"ul"},"Transactions of different senders are sorted by price, from highest to lowest.")),(0,a.kt)("h2",{id:"challenges-from-high-performance-compatibility-and-nonce"},"Challenges From High-Performance, Compatibility, and Nonce"),(0,a.kt)("p",null,"Axon\u2019s mempool, as a high-performance framework, prioritizes high TPS. If we do full validation before packaging, the amount of transactions ready for submission per block will be very low (i.e. low TPS). Thus we made a tradeoff between TPS and revert transaction rate: Axon, in practice, only applies mandatory validations mentioned above before committing transactions. This simplifies validation process and increases the number of submitted transactions per block, at the cost of (slightly higher) possibility of transactions being reverted."),(0,a.kt)("p",null,"Another challenge is related to nonce. Ethereum mandates incrementing nonces on all transactions. For this reason, Axon must allow transactions that do not follow nonce increments to be temporarily held in the mempool. To minimize the negative impact of the nonce check requirements on performance, we have therefore incorporated the following designs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nonce check caches the current database value that will be cleared when the block is committed, meaning that nonce changes do not occur until the block is committed, in order to reduce the amount of I/O operations. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/axonweb3/axon/blob/95e37cac702d14252de61f63393a07ab8a68944a/core/mempool/src/lib.rs#L226-L238"},"flush cache"),"."),(0,a.kt)("li",{parentName:"ul"},"A transaction that enters the pool carries the value difference between its nonce and the current nonce, to make the sorting and verification easier. See  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/axonweb3/axon/blob/main/core/mempool/src/lib.rs#L114-L123"},"insert nonce difference"),"."),(0,a.kt)("li",{parentName:"ul"},"Uncommitted nonce in the pool will not be written back into the nonce check, due to poor write-back performance and the possibility of replacing the same nonce.")),(0,a.kt)("h2",{id:"four-transaction-queues-to-ensure-smooth-flow-under-high-tps"},"Four Transaction Queues To Ensure Smooth Flow Under High TPS"),(0,a.kt)("p",null,"The diagram below sketches the process where a transaction (with its state) passes the nonce check, enters the mempool, and goes through these queues."),(0,a.kt)("img",{src:(0,r.Z)("img/for-contributors/Mempool fig 1. 4 queues.png")}),(0,a.kt)("p",null,"These four queues are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mapping Queue: all transactions in the pool are indexed by \u201chash \u2192 tx\u201c mapping."),(0,a.kt)("li",{parentName:"ul"},"Pending Queue: supports concurrent inserts and handles all the activities associated with adding transactions to the mempool, making this process as fast as possible."),(0,a.kt)("li",{parentName:"ul"},"Sorting Queue: transactions are split and sorted by senders and nonces respectively. Well-sorted transactions are inserted into package queue."),(0,a.kt)("li",{parentName:"ul"},"Packaging Queue: transactions are packaged and ready to be added to the next block.")),(0,a.kt)("p",null,"As there are multiple queues in mempool to process the indexing and the state changes of transactions respectively, the full-lifecycle record of transaction (i.e. the state changes of a transaction from entering the mempool to being submitted or discarded) is needed, allowing Axon to ensure that one transaction is accessed consistently in any queue. Therefore, as soon as a transaction enters the mempool, it will be wrapped up in the form of \u201ctx + state\u201d. "),(0,a.kt)("p",null,'The full-lifecycle record of transaction - the state changes of a transaction from entering the mempool to being submitted or discarded - is required because there are multiple queues in mempool to process the indexing and the state changes of transactions, respectively. This enables Axon to guarantee that one transaction is accessed consistently in any queue. A transaction will therefore be wrapped up in the form of "tx + state" as soon as it enters the mempool.'),(0,a.kt)("h2",{id:"system-mempool-for-built-in-contracts"},"System Mempool For Built-In Contracts"),(0,a.kt)("p",null,"Axon, as a native cross-chain framework, supports not only native Ethereum-like transactions, but also other algorithms, such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/tree/main/core/executor/src/precompiles"},"blake2_f, rsa and secp256r1"),", and cross-chain modules. Accordingly, Axon makes some adjustments to the mempool."),(0,a.kt)("p",null,"In addition to the mempool for general transactions described above, Axon has a pool for built-in contracts called system mempool. This system mempool is embedded in the general mempool and formed by a simple queue without any redundant design."),(0,a.kt)("p",null,"For any transaction that fits a special address, native contracts or cross-chain, it will be passed into the system pool, in a first-in-first-out queue where only one transaction can be submitted per block cycle. "),(0,a.kt)("p",null,"The following code shows how to check transaction address in Axon:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pub enum TransactionAction {\n    Call(H160),\n    Create,}")),(0,a.kt)("p",null,"If  ",(0,a.kt)("inlineCode",{parentName:"p"},"Call(H160)")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0xffffffffffffffffffffffffffffffffffffff00"),", then it is a NativeTokenContract address;"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"Call(H160)")," = ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/main/devtools/chain/config.toml#L10"},(0,a.kt)("inlineCode",{parentName:"a"},"0xb484fd480e598621638f380f404697cd9f58b0f8")),", then it is the cross-chain address."),(0,a.kt)("p",null,"The system mempool and general mempool are two mutually independent modules. Packaging and sorting in the system mempool are separated from general transactions."),(0,a.kt)("img",{src:(0,r.Z)("img/for-contributors/Mempool fig 2. System and general mempool.png")}))}u.isMDXComponent=!0}}]);