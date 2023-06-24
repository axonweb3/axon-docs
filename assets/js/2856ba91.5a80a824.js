"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const i={title:"Storage",hide_title:!0,sidebar_position:8},s="Storage",l={unversionedId:"getting-started/for-contributor/storage",id:"getting-started/for-contributor/storage",title:"Storage",description:"Axon\u2019s storage module works as a bridge between Axon and its database interface, handling the data I/O of other Axon modules.",source:"@site/docs/getting-started/for-contributor/storage.md",sourceDirName:"getting-started/for-contributor",slug:"/getting-started/for-contributor/storage",permalink:"/getting-started/for-contributor/storage",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-contributor/storage.md",tags:[],version:"current",lastUpdatedAt:1687594808,formattedLastUpdatedAt:"Jun 24, 2023",sidebarPosition:8,frontMatter:{title:"Storage",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Image Cell",permalink:"/getting-started/for-contributor/system_contract/image_cell"},next:{title:"Contract Info",permalink:"/category/contract-info"}},d={},c=[{value:"Data Decoupling",id:"data-decoupling",level:2},{value:"File Structure",id:"file-structure",level:2},{value:"Folder adapter",id:"folder-adapter",level:3},{value:"cache.rs",id:"cachers",level:3},{value:"libs.rs",id:"libsrs",level:3},{value:"hash_key.rs",id:"hash_keyrs",level:3},{value:"schema.rs",id:"schemars",level:3},{value:"Code Explained",id:"code-explained",level:2},{value:"Define Storage Trait",id:"define-storage-trait",level:3},{value:"Implement Storage Trait",id:"implement-storage-trait",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storage"},"Storage"),(0,n.kt)("p",null,"Axon\u2019s storage module works as a bridge between Axon and its database interface, handling the data I/O of other Axon modules."),(0,n.kt)("p",null,"Located at the bottom of Axon's architecture, the storage module serves as the block and state databases, as depicted below:"),(0,n.kt)("img",{src:(0,o.Z)("img/for-contributors/storage fig 1 overall architecture.png")}),(0,n.kt)("p",{class:"axon-anno"},"Figure 1. A high-level view of Axon\u2019s overall architecture and the location of the storage module"),(0,n.kt)("p",null,"The purpose of this article is to introduce the basics of Axon's storage module and how the decoupling mechanism works. Some implementation details and code examples will be given as well."),(0,n.kt)("h2",{id:"data-decoupling"},"Data Decoupling"),(0,n.kt)("p",null,"Axon storage module (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/tree/dc9de2220a42d61ed2b4e6624ef5faf6a64a6223/core/storage"},"GitHub repo"),") is used to store persistent data."),(0,n.kt)("img",{src:(0,o.Z)("img/for-contributors/storage fig 2.png")}),(0,n.kt)("p",{class:"axon-anno"},"Figure 2. The design of Axon\u2019s storage module and other related components"),(0,n.kt)("p",null,"Storage module connects memory or databases through the adapter pattern, as shown in the diagram above. This adapter plays a central role in data decoupling. First, it decouples Axon from other databases. When new databases are added, you only need to implement their corresponding traits. As soon as they are abstracted into a trait, other Axon modules can interact with Axon's database."),(0,n.kt)("p",null,"Axon\u2019s adapter pattern can also decouple the storage module from other modules inside Axon. The decoupling enables a module to use data by creating an adapter instance based on the previous abstract trait, so that other modules can process the data through this instance. This is how the decoupling of the storage module is implemented."),(0,n.kt)("p",null,"Find traits in: ",(0,n.kt)("inlineCode",{parentName:"p"},"protocol/src/traits/storage.rs"),"; find the implementation in ",(0,n.kt)("inlineCode",{parentName:"p"},"core/storage/src/lib.rs"),"."),(0,n.kt)("h2",{id:"file-structure"},"File Structure"),(0,n.kt)("p",null,"The storage folder (location:",(0,n.kt)("inlineCode",{parentName:"p"},"core/storage/src"),") contains the folder adapter and four files: cache.rs, libs.rs, hash_key.rs, schema.rs."),(0,n.kt)("img",{src:(0,o.Z)("img/for-contributors/Fig. file structure.png"),width:"30%"}),(0,n.kt)("h3",{id:"folder-adapter"},"Folder adapter"),(0,n.kt)("p",null,"There are three files in the folder adapters: memory.rs , rocks.rs, mod.rs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"mod.rs")," is the entry of the adapter module."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"memory.rs")," is used to access in-memory data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rocks.rs")," is used to access the rocksdb database.")),(0,n.kt)("p",null,"All added concrete databases should implement the StorageAdapter trait. For instance, to support leveldb, a new file named leveldb.rs should be created first. Then the trait StorageAdapter should be implemented for leveldb in leveldb.rs."),(0,n.kt)("h3",{id:"cachers"},"cache.rs"),(0,n.kt)("p",null,"It defines the data structure used to implement the cache function."),(0,n.kt)("h3",{id:"libsrs"},"libs.rs"),(0,n.kt)("p",null,"It is used to manage the implementation of traits related to data reading and writing in other modules."),(0,n.kt)("h3",{id:"hash_keyrs"},"hash_key.rs"),(0,n.kt)("p",null,"It is used to generate the hash type of the database key."),(0,n.kt)("h3",{id:"schemars"},"schema.rs"),(0,n.kt)("p",null,"It is used to manage the formatting of database entries."),(0,n.kt)("h2",{id:"code-explained"},"Code Explained"),(0,n.kt)("p",null,"Let\u2019s look at some code. Here I take a relatively simple module \u2014 IBC as an example to illustrate how the storage module works by defining and implementing the trait."),(0,n.kt)("h3",{id:"define-storage-trait"},"Define Storage Trait"),(0,n.kt)("p",null,"All traits should be written in the folder ",(0,n.kt)("inlineCode",{parentName:"p"},"protocol/src/traits/")," ; the traits related to data I/O are defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"protocol/src/traits/storage.rs"),"."),(0,n.kt)("p",null,"In this example, we define the trait ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/dc9de2220a42d61ed2b4e6624ef5faf6a64a6223/protocol/src/traits/storage.rs#L212"},(0,n.kt)("inlineCode",{parentName:"a"},"IbcCrossChainStorage"))," as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait IbcCrossChainStorage {\n    fn get_client_type(&self, client_id: &ClientId) -> ProtocolResult<Option<ClientType>>;\n\n    fn get_client_state(&self, client_id: &ClientId) -> ProtocolResult<Option<AnyClientState>>;\n\n    // ...other functions\n}\n")),(0,n.kt)("h3",{id:"implement-storage-trait"},"Implement Storage Trait"),(0,n.kt)("p",null,"After defining the storage trait of the module IBC, we implement the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/dc9de2220a42d61ed2b4e6624ef5faf6a64a6223/core/storage/src/lib.rs#L659"},(0,n.kt)("inlineCode",{parentName:"a"},"IbcCrossChainStorage"))," trait in storage module."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"impl<Adapter: StorageAdapter> IbcCrossChainStorage for ImplStorage<Adapter> {\n    fn get_client_type(&self, client_id: &ClientId) -> ProtocolResult<Option<ClientType>> {\n        Ok(self\n            .adapter\n            .get::<ClientTypeSchema>(IbcWrapper(ClientTypePath(client_id.clone())))?\n            .map(|res| res.0))\n    }\n\n    fn get_client_state(&self, client_id: &ClientId) -> ProtocolResult<Option<AnyClientState>> {\n        Ok(self\n            .adapter\n            .get::<ClientStateSchema>(IbcWrapper(ClientStatePath(client_id.clone())))?\n            .map(|res| res.0))\n    }\n    // ...other implements\n}\n")))}m.isMDXComponent=!0}}]);