"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(4996);const i={title:"Executor",hide_title:!0,sidebar_position:6},s="Executor",c={unversionedId:"getting-started/for-contributor/executor",id:"getting-started/for-contributor/executor",title:"Executor",description:"Executor is a module under the core module which executes block transactions on the Axon chain. The Executor contains the implementation of Precompiled Contracts and System Contracts. It also stores the metadata, CKB headers, Image Cells etc. The Executor can execute transactions for axon system contracts or any EVM compatible contracts on Axon. The application binary interface (ABI) of Metadata, CKB Light Client and Image Cells is defined in Solidity inside another module called \u201cBuiltin Contracts\u201d. For each system contract except Native Token, there is a corresponding precompiled contract. The overall architecture is shown below.",source:"@site/docs/getting-started/for-contributor/executor.md",sourceDirName:"getting-started/for-contributor",slug:"/getting-started/for-contributor/executor",permalink:"/getting-started/for-contributor/executor",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-contributor/executor.md",tags:[],version:"current",lastUpdatedAt:1695018351,formattedLastUpdatedAt:"Sep 18, 2023",sidebarPosition:6,frontMatter:{title:"Executor",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/getting-started/for-contributor/network"},next:{title:"System Contracts",permalink:"/category/system-contracts"}},l={},u=[{value:"Adapter",id:"adapter",level:2},{value:"Transaction Execution",id:"transaction-execution",level:2},{value:"Data Storage",id:"data-storage",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"executor"},"Executor"),(0,r.kt)("p",null,"Executor is a module under the core module which executes block transactions on the Axon chain. The Executor contains the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/category/contract-info"},"Precompiled Contracts")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/contract/system_contacts"},"System Contracts"),". It also stores the metadata, CKB headers, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/getting-started/for-contributor/system_contract/image_cell"},"Image Cells")," etc. The Executor can execute transactions for axon system contracts or any EVM compatible contracts on Axon. The application binary interface (ABI) of Metadata, CKB Light Client and Image Cells is defined in Solidity inside another module called \u201cBuiltin Contracts\u201d. For each system contract except Native Token, there is a corresponding precompiled contract. The overall architecture is shown below."),(0,r.kt)("img",{src:(0,o.Z)("img/for-contributors/Executor overall architecture.png")}),(0,r.kt)("h2",{id:"adapter"},"Adapter"),(0,r.kt)("p",null,"Executor has an adapter which is mainly used for API calls to the underlying executor system.  The trait of the ExecutorAdapter is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait ExecutorAdapter: ApplyBackend + Backend {\n    fn set_origin(&mut self, origin: H160);  // set the origin of the transaction to be sender.\n    fn set_gas_price(&mut self, gas_price: U256);\n    fn get_logs(&mut self) -> Vec<Log>;\n    fn commit(&mut self) -> MerkleRoot;\n    fn get(&self, key: &[u8]) -> Option<Bytes>;  // get data from the key-value db.\n    fn get_ctx(&self) -> ExecutorContext;\n    fn get_account(&self, address: &H160) -> Account;\n    fn save_account(&mut self, address: &H160, account: &Account);\n}\n")),(0,r.kt)("p",null,"We could see that the ExecutorAdapter is an EVM compatible backend. The Executor supports Legacy/Eip2930/Eip1559, three versions of transactions."),(0,r.kt)("h2",{id:"transaction-execution"},"Transaction Execution"),(0,r.kt)("p",null,"To execute a transaction, a base gas is required plus the calculated gas for each operation. For the precompiled contracts, the gas fee is fixed for each contract."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," transaction, base gas is  53,000. For ",(0,r.kt)("inlineCode",{parentName:"p"},"Call"),", base gas is 21,000."),(0,r.kt)("p",null,"The entire execution process is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For each transaction inside a block",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"In the beginning, the prepaid gas ",(0,r.kt)("inlineCode",{parentName:"li"},"gas_limit * gas_price")," is deducted from the account who sends the transaction."),(0,r.kt)("li",{parentName:"ol"},"Given different actions, the executor either creates a contract or calls a specific address."),(0,r.kt)("li",{parentName:"ol"},"Any remaining gas is calculated and added back to the sender\u2019s account."),(0,r.kt)("li",{parentName:"ol"},"If the transaction is the ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),", the address is returned in the ",(0,r.kt)("inlineCode",{parentName:"li"},"TxResp.code_address"),"."))),(0,r.kt)("li",{parentName:"ol"},"If the block is not the genesis block, fees are allocated to the validators based on their weights."),(0,r.kt)("li",{parentName:"ol"},"Update the global state root.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct TxResp {\n    pub exit_reason:  ExitReason,\n    pub ret:          Vec<u8>,\n    pub gas_used:     u64,\n    pub remain_gas:   u64,\n    pub fee_cost:     U256,\n    pub logs:         Vec<Log>,\n    pub code_address: Option<Hash>,\n    pub removed:      bool,\n}\n\npub struct ExecResp {\n    pub state_root:   MerkleRoot,\n    pub receipt_root: MerkleRoot,\n    pub gas_used:     u64,\n    pub tx_resp:      Vec<TxResp>,\n}\n")),(0,r.kt)("h2",{id:"data-storage"},"Data Storage"),(0,r.kt)("p",null,"The storage of core data, including Axon metadata, headers, CKB cells, is implemented through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rust-rocksdb"},"ckb-rocksdb"),", which is basically a key-value store."),(0,r.kt)("p",null,"For Metadata, the format is ",(0,r.kt)("inlineCode",{parentName:"p"},"{epoch: metadata}"),", and the epoch can be determined by the block number. To achieve that, another storage is used to store epoch ranges as a vector, ",(0,r.kt)("inlineCode",{parentName:"p"},"[0, end_block_1, end_block_2, ...]"),", and the epoch is implied by the index of the range where the current block number is. The end block is determined by the metadata."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," field in the metadata records the start and end block number that the metadata is in effect. Suppose currently there are three metadata shown in the following figure. In such case, the epoch storage stores ",(0,r.kt)("inlineCode",{parentName:"p"},"[0, 100, 200, 300]"),". Now we have a transaction at block number 150. We know it is in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"[100, 200]"),", which is the second range in the list. As a result, the metadata taken effect for the transaction is the second one."),(0,r.kt)("img",{src:(0,o.Z)("img/for-contributors/Executor metadata and blocks.png")}),(0,r.kt)("p",null,"For CKB Light Client and Image Cell, they share one database since the former stores headers and the latter stores cells of CKB layer 1 information."),(0,r.kt)("p",null,"The key to retrieve a header is ",(0,r.kt)("inlineCode",{parentName:"p"},"block_hash"),", to retrieve a call, ",(0,r.kt)("inlineCode",{parentName:"p"},"(out_point.tx_hash, out_point.index)"),"."),(0,r.kt)("p",null,"The structure of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Header {\n        pub version:           u32,\n        pub compact_target:    u32,\n        pub timestamp:         u64,\n        pub number:            u64,\n        pub epoch:             u64,\n        pub parent_hash:       [u8; 32],\n        pub transactions_root: [u8; 32],\n        pub proposals_hash:    [u8; 32],\n        pub uncles_hash:       [u8; 32],\n        pub dao:               [u8; 32],\n        pub nonce:             u128,\n        pub block_hash:        [u8; 32],\n    }\n")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"CellInfo"),", it is in the format of:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CellInfo {\n    pub cell_output:     Bytes, // packed::CellOutput\n    pub cell_data:       Bytes,\n    pub created_number:  u64,   // block number that the cell is created\n    pub consumed_number: Option<u64>,  // block number that the cell is consumed\n}\n")))}h.isMDXComponent=!0}}]);