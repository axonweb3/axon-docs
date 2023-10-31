"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={slug:"differences",title:"Differences Between Axon and Ethereum",position:8,sidebar_position:8},r=void 0,l={unversionedId:"difference_between_axon_and_ethereum",id:"difference_between_axon_and_ethereum",title:"Differences Between Axon and Ethereum",description:"This article summarizes the differences in terms of mining and wallet related APIs, and the calculation of the transactions root between Axon and Ethereum.",source:"@site/docs/difference_between_axon_and_ethereum.mdx",sourceDirName:".",slug:"/differences",permalink:"/differences",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/difference_between_axon_and_ethereum.mdx",tags:[],version:"current",lastUpdatedAt:1698758209,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:8,frontMatter:{slug:"differences",title:"Differences Between Axon and Ethereum",position:8,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/devops/proxy"},next:{title:"Security Guidelines",permalink:"/security"}},c={},s=[{value:"Mining Related",id:"mining-related",level:2},{value:"<code>eth_getUncleByBlockHashAndIndex</code> API",id:"eth_getunclebyblockhashandindex-api",level:3},{value:"<code>eth_getUncleByBlockNumberAndIndex</code> API",id:"eth_getunclebyblocknumberandindex-api",level:3},{value:"<code>eth_getUncleCountByBlockHash</code> API",id:"eth_getunclecountbyblockhash-api",level:3},{value:"<code>eth_getUncleCountByBlockNumber</code> API",id:"eth_getunclecountbyblocknumber-api",level:3},{value:"<code>eth_mining</code> API",id:"eth_mining-api",level:3},{value:"<code>eth_coinbase</code> API",id:"eth_coinbase-api",level:3},{value:"<code>eth_hashrate</code> API",id:"eth_hashrate-api",level:3},{value:"<code>eth_submitWork</code> API",id:"eth_submitwork-api",level:3},{value:"<code>eth_submitHashrate</code> API",id:"eth_submithashrate-api",level:3},{value:"<code>Difficulty</code> opcode",id:"difficulty-opcode",level:3},{value:"<code>gas_price</code> calculation",id:"gas_price-calculation",level:3},{value:"Wallet Related",id:"wallet-related",level:2},{value:"<code>eth_accounts</code> API",id:"eth_accounts-api",level:3},{value:"<code>eth_sign</code> API",id:"eth_sign-api",level:3},{value:"<code>eth_signTransaction</code> API",id:"eth_signtransaction-api",level:3},{value:"<code>eth_sendTransaction</code> API",id:"eth_sendtransaction-api",level:3},{value:"Others",id:"others",level:2},{value:"Transactions Root Calculation",id:"transactions-root-calculation",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article summarizes the differences in terms of mining and wallet related APIs, and the calculation of the transactions root between Axon and Ethereum."),(0,a.kt)("h2",{id:"mining-related"},"Mining Related"),(0,a.kt)("h3",{id:"eth_getunclebyblockhashandindex-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_getUncleByBlockHashAndIndex")," API"),(0,a.kt)("p",null,"Since Axon uses BFT consensus algorithm, no uncle block exists. The RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h3",{id:"eth_getunclebyblocknumberandindex-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_getUncleByBlockNumberAndIndex")," API"),(0,a.kt)("p",null,"Since Axon uses BFT consensus algorithm, no uncle block exists. The RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h3",{id:"eth_getunclecountbyblockhash-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_getUncleCountByBlockHash")," API"),(0,a.kt)("p",null,"Since Axon uses BFT consensus algorithm, no uncle block exists. The RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0"),"."),(0,a.kt)("h3",{id:"eth_getunclecountbyblocknumber-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_getUncleCountByBlockNumber")," API"),(0,a.kt)("p",null,"Since Axon uses BFT consensus algorithm, no uncle block exists. The RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0"),"."),(0,a.kt)("h3",{id:"eth_mining-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_mining")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"eth_coinbase-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_coinbase")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000"),"."),(0,a.kt)("h3",{id:"eth_hashrate-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_hashrate")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1"),"."),(0,a.kt)("h3",{id:"eth_submitwork-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_submitWork")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h3",{id:"eth_submithashrate-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_submitHashrate")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h3",{id:"difficulty-opcode"},(0,a.kt)("inlineCode",{parentName:"h3"},"Difficulty")," opcode"),(0,a.kt)("p",null,"Since Axon does not mine, this opcode always uses ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1"),"."),(0,a.kt)("h3",{id:"gas_price-calculation"},(0,a.kt)("inlineCode",{parentName:"h3"},"gas_price")," calculation"),(0,a.kt)("p",null,"Since Axon does not mine, Axon simplifies the process of ",(0,a.kt)("inlineCode",{parentName:"p"},"gas_price")," calculation of ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559")," transaction as ",(0,a.kt)("inlineCode",{parentName:"p"},"gas_price = max(tx.gas_price, tx.max_fee_per_gas)"),"."),(0,a.kt)("h2",{id:"wallet-related"},"Wallet Related"),(0,a.kt)("h3",{id:"eth_accounts-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_accounts")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method is not supported."),(0,a.kt)("h3",{id:"eth_sign-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_sign")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method is not supported."),(0,a.kt)("h3",{id:"eth_signtransaction-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_signTransaction")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method is not supported."),(0,a.kt)("h3",{id:"eth_sendtransaction-api"},(0,a.kt)("inlineCode",{parentName:"h3"},"eth_sendTransaction")," API"),(0,a.kt)("p",null,"Since Axon does not mine, this RPC method is not supported."),(0,a.kt)("h2",{id:"others"},"Others"),(0,a.kt)("h3",{id:"transactions-root-calculation"},"Transactions Root Calculation"),(0,a.kt)("p",null,"The transactions root calculation in Ethereum is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let mut trie = Trie::new(memory_db);\nfor (i, tx) in transactions.iter().enumerate() {\n    let key = rlp_encode(&i);\n    let val = rlp_encode(&tx);\n    trie.insert(key, val);\n}\nblock.header.transactions_root = trie.root();\n")),(0,a.kt)("p",null,"The calculation in Axon is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let mut trie = Trie::new(memory_db);\nfor (i, tx) in transactions.iter().enumerate() {\n    let key = rlp_encode(&i);\n    let val = rlp_encode(&keccak256(rlp_encode(&tx)));\n    trie.insert(key, val);\n}\nblock.header.transactions_root = trie.root();\n")))}p.isMDXComponent=!0}}]);