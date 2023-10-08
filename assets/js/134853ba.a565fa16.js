"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4996);const i={title:"Design Pattern",hide_title:!0,sidebar_position:1},s="Design Pattern",l={unversionedId:"getting-started/for-contributor/design_pattern",id:"getting-started/for-contributor/design_pattern",title:"Design Pattern",description:"Developing large-scale projects poses challenges including complexity, maintainability, scalability, and high performance. Complexity arises from multiple interdependent submodules and components, making the overall architecture and logic intricate and difficult to develop, debug, and test. Maintaining such projects becomes critical as they expand, requiring ongoing maintenance, upgrades, and improvements. Proper decoupling of modules is essential to prevent changes in one module from affecting others, which can increase maintenance costs.",source:"@site/docs/getting-started/for-contributor/design_pattern.md",sourceDirName:"getting-started/for-contributor",slug:"/getting-started/for-contributor/design_pattern",permalink:"/getting-started/for-contributor/design_pattern",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-contributor/design_pattern.md",tags:[],version:"current",lastUpdatedAt:1696753662,formattedLastUpdatedAt:"Oct 8, 2023",sidebarPosition:1,frontMatter:{title:"Design Pattern",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For Contributors",permalink:"/category/for-contributors"},next:{title:"Mempool",permalink:"/getting-started/for-contributor/mempool"}},c={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Decoupling Between Modules",id:"decoupling-between-modules",level:2},{value:"Mempool Class Diagram",id:"mempool-class-diagram",level:3},{value:"MemPoolAdapter",id:"mempooladapter",level:3},{value:"DefaultMemPoolAdapter",id:"defaultmempooladapter",level:3},{value:"Storage, Network, and Others",id:"storage-network-and-others",level:3},{value:"Advantages of Adapter Pattern",id:"advantages-of-adapter-pattern",level:2},{value:"Abstraction",id:"abstraction",level:3},{value:"Improved Collaboration",id:"improved-collaboration",level:3},{value:"Simplified Testing",id:"simplified-testing",level:3},{value:"Implementation of MemPool Module",id:"implementation-of-mempool-module",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-pattern"},"Design Pattern"),(0,o.kt)("p",null,"Developing large-scale projects poses challenges including complexity, maintainability, scalability, and high performance. Complexity arises from multiple interdependent submodules and components, making the overall architecture and logic intricate and difficult to develop, debug, and test. Maintaining such projects becomes critical as they expand, requiring ongoing maintenance, upgrades, and improvements. Proper decoupling of modules is essential to prevent changes in one module from affecting others, which can increase maintenance costs."),(0,o.kt)("p",null,"In the following sections, we will explore how Axon leverages the Adapter design pattern to decouple its submodules and overcome the challenges of complexity and maintainability."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("img",{src:(0,r.Z)("img/for-contributors/Architect design_pattern_fig.1.png"),style:{maxHeight:"500px",display:"block",margin:"0 auto"}}),(0,o.kt)("p",null,"As illustrated above, Axon consists primarily of the following modules: Web3 RPC (Ethereum-compatible), Network, Sync, Consensus; ",(0,o.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/getting-started/for-contributor/mempool"},"MemPool")," (aka., memory pool, or transaction pool), ",(0,o.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/getting-started/for-contributor/executor"},"Executor")," (EVM), ",(0,o.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/getting-started/for-contributor/interoperability"},"Interoperability"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/getting-started/for-contributor/storage"},"Storage")," (KV database)."),(0,o.kt)("p",null,"These modules have interdependencies and interactions. For example, the MemPool module relies on the Sync module to synchronize transactions and blocks from other nodes. It also uses the Network module to broadcast the received transactions across the network."),(0,o.kt)("p",null,"The challenges due to high complexity and maintainability issue are encountered during the development, testing, and maintenance stages of Axon."),(0,o.kt)("h2",{id:"decoupling-between-modules"},"Decoupling Between Modules"),(0,o.kt)("p",null,"To ease development, testing, and maintenance, it is vital to decouple modules. After evaluating several common design patterns, such as the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Facade_pattern"},"Facade Pattern")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bridge_pattern"},"Bridge Pattern"),", we found that leveraging the adapter pattern can effectively achieve module decoupling."),(0,o.kt)("p",null,"The core idea involves abstracting the required functionality of each module from external modules into an Adapter trait. Each module internally implements a concrete Adapter (adapter). When performing its tasks, a module relies solely on the adapter\u2019s interface to interact with other modules to obtain necessary assistance."),(0,o.kt)("h3",{id:"mempool-class-diagram"},"Mempool Class Diagram"),(0,o.kt)("p",null,"Let's use the MemPool module as an example."),(0,o.kt)("img",{src:(0,r.Z)("img/for-contributors/MemPool module Design pattern fig.2.png"),style:{maxHeight:"500px",display:"block",margin:"0 auto"}}),(0,o.kt)("h3",{id:"mempooladapter"},"MemPoolAdapter"),(0,o.kt)("p",null,"This is the abstract trait for the MemPool adapter, which declares all the external interfaces required by the MemPool module. The specific implementation is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait MemPoolAdapter: Send + Sync {\n    async fn pull_txs(\n        &self,\n        ctx: Context,\n        height: Option<u64>,\n        tx_hashes: Vec<Hash>,\n    ) -> ProtocolResult<Vec<SignedTransaction>>;\n\n    async fn broadcast_tx(\n        &self,\n        ctx: Context,\n        origin: Option<usize>,\n        tx: SignedTransaction,\n    ) -> ProtocolResult<()>;\n\n    async fn check_authorization(\n        &self,\n        ctx: Context,\n        tx: &SignedTransaction,\n    ) -> ProtocolResult<U256>;\n\n    async fn check_transaction(&self, ctx: Context, tx: &SignedTransaction) -> ProtocolResult<()>;\n    ...\n}\n")),(0,o.kt)("h3",{id:"defaultmempooladapter"},"DefaultMemPoolAdapter"),(0,o.kt)("p",null,"DefaultMemPoolAdapter is the actual implementation of the MempoolAdapter in the Axon code, as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct DefaultMemPoolAdapter<C, N, S, DB, I> {\n    network:  N,\n    storage:  Arc<S>,\n    trie_db:  Arc<DB>,\n    metadata: Arc<MetadataHandle>,\n\n    addr_nonce:  DashMap<H160, (U256, U256)>,\n    gas_limit:   AtomicU64,\n    max_tx_size: AtomicUsize,\n    chain_id:    u64,\n\n    stx_tx: UnboundedSender<(Option<usize>, SignedTransaction)>,\n    err_rx: Mutex<UnboundedReceiver<ProtocolError>>,\n\n    pin_c: PhantomData<C>,\n    pin_i: PhantomData<I>,\n}\n\nimpl<C, N, S, DB, I> MemPoolAdapter for DefaultMemPoolAdapter<C, N, S, DB, I>\nwhere\n    C: Crypto + Send + Sync + 'static,\n    N: Rpc + PeerTrust + Gossip + Clone + Unpin + 'static,\n    S: Storage + 'static,\n    DB: trie::DB + 'static,\n    I: Interoperation + 'static,\n{\n    #[trace_span(kind = \"mempool.adapter\", logs = \"{txs_len: tx_hashes.len()}\")]\n    async fn pull_txs(\n        &self,\n        ctx: Context,\n        height: Option<u64>,\n        tx_hashes: Vec<Hash>,\n    ) -> ProtocolResult<Vec<SignedTransaction>> {\n    ...\n    }\n\n    async fn broadcast_tx(\n        &self,\n        _ctx: Context,\n        origin: Option<usize>,\n        stx: SignedTransaction,\n    ) -> ProtocolResult<()> {\n    ...\n    }\n\n    async fn check_authorization(\n        &self,\n        ctx: Context,\n        tx: &SignedTransaction,\n    ) -> ProtocolResult<U256> {\n        if is_call_system_script(tx.transaction.unsigned.action()) {\n            return self.check_system_script_tx_authorization(ctx, tx).await;\n        }\n\n        let addr = &tx.sender;\n        if let Some(res) = self.addr_nonce.get(addr) {\n            if tx.transaction.unsigned.nonce() < &res.value().0 {\n                return Err(MemPoolError::InvalidNonce {\n                    current:  res.value().0.as_u64(),\n                    tx_nonce: tx.transaction.unsigned.nonce().as_u64(),\n                }\n                .into());\n            } else if res.value().1 < tx.transaction.unsigned.may_cost() {\n                return Err(MemPoolError::ExceedBalance {\n                    tx_hash:         tx.transaction.hash,\n                    account_balance: res.value().1,\n                    tx_gas_limit:    *tx.transaction.unsigned.gas_limit(),\n                }\n                .into());\n            } else {\n                return Ok(tx.transaction.unsigned.nonce() - res.value().0);\n            }\n        }\n\n        let backend = AxonExecutorAdapter::from_root(\n            **CURRENT_STATE_ROOT.load(),\n            Arc::clone(&self.trie_db),\n            Arc::clone(&self.storage),\n            Default::default(),\n        )?;\n\n        let account = backend.basic(*addr);\n        self.addr_nonce\n            .insert(*addr, (account.nonce, account.balance));\n\n        if &account.nonce > tx.transaction.unsigned.nonce() {\n            return Err(MemPoolError::InvalidNonce {\n                current:  account.nonce.as_u64(),\n                tx_nonce: tx.transaction.unsigned.nonce().as_u64(),\n            }\n            .into());\n        }\n\n        if account.balance < tx.transaction.unsigned.may_cost() {\n            return Err(MemPoolError::ExceedBalance {\n                tx_hash:         tx.transaction.hash,\n                account_balance: account.balance,\n                tx_gas_limit:    *tx.transaction.unsigned.gas_limit(),\n            }\n            .into());\n        }\n\n        Ok(tx.transaction.unsigned.nonce() - account.nonce)\n    }\n    ...\n}\n")),(0,o.kt)("p",null,"You can see that some interface implementations are relatively complex, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"check_authorization"),"."),(0,o.kt)("h3",{id:"storage-network-and-others"},"Storage, Network, and Others"),(0,o.kt)("p",null,"These external modules serve as dependencies for the MemPool. For instance, MemPool relies on the storage module to verify if certain transactions exist. Note that both Network and Storage are traits, which are external abstractions of these modules."),(0,o.kt)("h2",{id:"advantages-of-adapter-pattern"},"Advantages of Adapter Pattern"),(0,o.kt)("h3",{id:"abstraction"},"Abstraction"),(0,o.kt)("p",null,"Abstraction provides the advantage of encapsulating and hiding implementation details. Referring to the previous illustration, for the Network trait, regardless of changes in interface implementations (e.g., broadcast), it requires no modifications to the DefaultMemPoolAdapter, as long as the abstract Network trait (i.e., function parameters and return values) remains unchanged."),(0,o.kt)("p",null,"Furthermore, by using the Adapter pattern, even if traits like Network undergo changes (which is unlikely), the DefaultMemPoolAdapter can hide these changes from the MemPoolImpl (MemPool implementation), minimizing the impact of external module modifications."),(0,o.kt)("h3",{id:"improved-collaboration"},"Improved Collaboration"),(0,o.kt)("p",null,"The class diagram suggests that, except for DefaultMemPoolAdapter, the remaining components of MemPool module are independent and can be developed and tested individually."),(0,o.kt)("h3",{id:"simplified-testing"},"Simplified Testing"),(0,o.kt)("p",null,"MemPoolAdapter also facilitates testing. As shown below, the HashMemPoolAdapter implemented tested is much simpler than the actual implementation of HashMemPoolAdapter, which is DefaultMemPoolAdapter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct HashMemPoolAdapter {\n    network_txs: DashMap<Hash, SignedTransaction>,\n}\n\nimpl HashMemPoolAdapter {\n    fn new() -> HashMemPoolAdapter {\n        HashMemPoolAdapter {\n            network_txs: DashMap::new(),\n        }\n    }\n}\n\n#[async_trait]\nimpl MemPoolAdapter for HashMemPoolAdapter {\n    async fn pull_txs(\n        &self,\n        _ctx: Context,\n        _height: Option<u64>,\n        tx_hashes: Vec<Hash>,\n    ) -> ProtocolResult<Vec<SignedTransaction>> {\n        let mut vec = Vec::with_capacity(tx_hashes.len());\n        for hash in tx_hashes {\n            if let Some(tx) = self.network_txs.get(&hash) {\n                vec.push(tx.clone());\n            }\n        }\n        Ok(vec)\n    }\n\n    async fn broadcast_tx(\n        &self,\n        _ctx: Context,\n        _origin: Option<usize>,\n        tx: SignedTransaction,\n    ) -> ProtocolResult<()> {\n        self.network_txs.insert(tx.transaction.hash, tx);\n        Ok(())\n    }\n\n    async fn check_authorization(\n        &self,\n        _ctx: Context,\n        _tx: &SignedTransaction,\n    ) -> ProtocolResult<U256> {\n        Ok(U256::zero())\n    }\n    ...\n}\n")),(0,o.kt)("p",null,"The adapter pattern effectively encapsulates external modules like Storage and Network. Comparing it with DefaultMemPoolAdapter, we can see that the implementation of HashMemPoolAdapter is straightforward. For instance, in transaction pool module testing, there may be no specific requirements for the ",(0,o.kt)("inlineCode",{parentName:"p"},"check_authorization")," interface. In such cases, we can simply return Ok(U256::zero()), significantly simplifying the testing code."),(0,o.kt)("h2",{id:"implementation-of-mempool-module"},"Implementation of MemPool Module"),(0,o.kt)("p",null,"As explained earlier, the MemPool module abstracts other modules (such as Network and Storage) as traits. Similarly, MemPool module also provides services to other modules and requires its own abstraction. Specifically, it exposes the MemPool abstraction to interact with others. Here is the code for reference:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait MemPool: Send + Sync {\n    async fn insert(&self, ctx: Context, tx: SignedTransaction) -> ProtocolResult<()>;\n\n    async fn package(\n        &self,\n        ctx: Context,\n        cycles_limit: U256,\n        tx_num_limit: u64,\n    ) -> ProtocolResult<PackedTxHashes>;\n\n    async fn flush(\n        &self,\n        ctx: Context,\n        tx_hashes: &[Hash],\n        current_number: BlockNumber,\n    ) -> ProtocolResult<()>;\n\n    async fn get_full_txs(\n        &self,\n        ctx: Context,\n        height: Option<u64>,\n        tx_hashes: &[Hash],\n    ) -> ProtocolResult<Vec<SignedTransaction>>;\n\n    async fn ensure_order_txs(\n        &self,\n        ctx: Context,\n        height: Option<u64>,\n        order_tx_hashes: &[Hash],\n    ) -> ProtocolResult<()>;\n\n    async fn get_tx_count_by_address(&self, ctx: Context, address: H160) -> ProtocolResult<usize>;\n\n    fn get_tx_from_mem(&self, ctx: Context, tx_hash: &Hash) -> Option<SignedTransaction>;\n\n    fn set_args(&self, context: Context, state_root: MerkleRoot, gas_limit: u64, max_tx_size: u64);\n}\n")),(0,o.kt)("p",null,"Through the adaptation of the classic adapter design pattern, Axon effectively reduces the coupling between its sub-modules. This approach resolves challenges regarding interdependencies, maintenance complexity, and testing difficulties encountered in the development process."))}m.isMDXComponent=!0}}]);