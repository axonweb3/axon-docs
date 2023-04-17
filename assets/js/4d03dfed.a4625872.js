"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905)),r=n(4996);const o={title:"Interoperability",hide_title:!0,sidebar_position:3},s=void 0,l={unversionedId:"getting-started/for-contributor/interoperability",id:"getting-started/for-contributor/interoperability",title:"Interoperability",description:"Before proceeding, we recommend reading the following pieces to fully grasp this article, as they provide prerequisite knowledge:",source:"@site/docs/getting-started/for-contributor/interoperability.md",sourceDirName:"getting-started/for-contributor",slug:"/getting-started/for-contributor/interoperability",permalink:"/getting-started/for-contributor/interoperability",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-contributor/interoperability.md",tags:[],version:"current",lastUpdatedAt:1681713576,formattedLastUpdatedAt:"Apr 17, 2023",sidebarPosition:3,frontMatter:{title:"Interoperability",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Mempool",permalink:"/getting-started/for-contributor/mempool"},next:{title:"Consensus",permalink:"/getting-started/for-contributor/consensus"}},c={},p=[{value:"Interoperable Transaction Outlined",id:"interoperable-transaction-outlined",level:2},{value:"Signature Verification",id:"signature-verification",level:2},{value:"Signature Structure",id:"signature-structure",level:3},{value:"Verify by Calling CKB-VM",id:"verify-by-calling-ckb-vm",level:3},{value:"Verify by Mock Transaction",id:"verify-by-mock-transaction",level:3},{value:"Reality Input Mode Data Structure",id:"reality-input-mode-data-structure",level:4},{value:"Dummy Input Mode Data Structure",id:"dummy-input-mode-data-structure",level:4},{value:"Output Cell",id:"output-cell",level:4},{value:"Mock CKB Transaction Structure",id:"mock-ckb-transaction-structure",level:4},{value:"Signature Decode",id:"signature-decode",level:3},{value:"Interoperability in EVM",id:"interoperability-in-evm",level:2},{value:"Precompile Contracts",id:"precompile-contracts",level:3},{value:"Footnotes",id:"footnotes",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before proceeding, we recommend reading the following pieces to fully grasp this article, as they provide prerequisite knowledge:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.axonweb3.io/fundamentals"},"Axon Fundamentals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.axonweb3.io/getting-started/for-contributor/system_contract/image_cell"},"Image Cell System Contract")))),(0,a.kt)("p",null,"This article introduces the design of Axon\u2019s interoperable transaction module.\nLet\u2019s start with a brief recap on interoperability. Interoperability, in the realm of blockchain, refers to the ability of blockchains to communicate with one another, thereby enabling a blockchain to access data from and write data to other blockchains. However, a blockchain is akin to a computer devoid of an internet connection. It lacks the innate capabilities to communicate with other blockchains or ",(0,a.kt)("a",{parentName:"p",href:"https://blog.chain.link/understanding-how-data-and-apis-power-next-generation-economies/"},"external API"),", commonly known as the ",(0,a.kt)("a",{parentName:"p",href:"https://encyclopedia.pub/entry/2959"},"oracle problem"),". Interoperability provides a powerful solution to this issue, enabling seamless integration of various blockchain systems, making it possible to create complex, decentralized applications that leverage the benefits of multiple blockchains."),(0,a.kt)("p",null,"Axon is an app-chain",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," framework that natively supports interoperability. It is compatible with the Inter-Blockchain Communication (IBC) protocol, thereby enabling itself to communicate with any other IBC compatible chains. Axon also involves CKB-VM, a virtual machine used in CKB that is based on\xa0",(0,a.kt)("a",{parentName:"p",href:"https://riscv.org/"},"RISC-V")," instruction set. Combined with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/getting-started/for-contributor/system_contract/image_cell"},"Image Cell System Contract (ICSC)"),", Axon can execute any scripts deployed on CKB. This significantly enhances the interoperability of Axon and makes abstraction possible under the account model and EVM."),(0,a.kt)("h2",{id:"interoperable-transaction-outlined"},"Interoperable Transaction Outlined"),(0,a.kt)("p",null,"As it is known, Ethereum uses the Elliptic Curve Digital Signature (ECDSA) with secp256k1 curve to sign transactions. However, transactions on Axon are expected to be verified by a broader range of curves or even more intricate logic. This challenge is addressed by the built-in CKB-VM module included in the interoperable transaction verifier."),(0,a.kt)("img",{src:(0,r.Z)("img/for-contributors/interoperability axon.png")}),(0,a.kt)("p",null,"The image above illustrates the interplay among the components involved in the interoperable transaction. If you find it difficult to understand them all at once, don\u2019t worry. The following discussion will only focus on Axon."),(0,a.kt)("p",null,"In brief, all of the verification processes (arrows in green color), except the hardcoded secp256k1, can be compiled to RISC-V binary and deployed in CKB, the Layer 1, then the code cell will be synchronized to ICSC, and CKB-VM module can load the binary from ICSC and verify the transaction. This process might appear laborious, however, the advantages shown below are worth the effort:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Binaries deployed in CKB can be upgraded easily without breaking the compatibility of Axon. It only needs to change the reference to the script deployed cell, which is included in transaction in ICSC when a logic upgrade occurs."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("em",{parentName:"li"},"max_cycles")," argument of CKB-VM provides a robust guarantee against dead loops. According to the mechanism of CKB-VM, each instruction execution consumes some ",(0,a.kt)("a",{parentName:"li",href:"https://docs.nervos.org/docs/basics/glossary#cycles"},"cycles")," and if the sum of used cycles reaches the set cycle limit, the program will return directly."),(0,a.kt)("li",{parentName:"ol"},"The verification can reference the state in CKB Layer 1. CKB cells can not only store script binaries, but record information as well. Axon can read the data in CKB smoothly if it considers ICSC as an oracle.")),(0,a.kt)("h2",{id:"signature-verification"},"Signature Verification"),(0,a.kt)("p",null,"Axon uses a redefined signature component based on Ethereum to ensure compatibility. This component consists of two numbers (uint256): ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),", as well as a recovery identifier variable (uint8) called ECDSA. Additionally, the signature verified through CKB-VM is referred to as the Interoperability Signature (IOPSA)."),(0,a.kt)("h3",{id:"signature-structure"},"Signature Structure"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," fields employ the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bytes")," type to enhance the information containment capabilities of Axon transactions. ECDSA and IOPSA are distinguished by the signature length. Specifically, the ECDSA signature length is 65 bytes; the IOPSA signature length must be greater than 65."),(0,a.kt)("p",null,"IOPSA can be used in two ways: verify in CKB-VM by mock transactions and call CKB-VM directly."),(0,a.kt)("p",null,"Below is a comparison of Axon\u2019s signature structure with Ethereum:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," Axon Signature Structure "),(0,a.kt)("th",null," Ethereum Signature Structure ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct SignatureComponent {\n        pub r: Bytes,\n        pub s: Bytes,\n        pub v: u8,\n}\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct SignatureComponent {\n        pub r: U256,\n        pub s: U256,\n        pub v: u8,\n}\n"))))),(0,a.kt)("h3",{id:"verify-by-calling-ckb-vm"},"Verify by Calling CKB-VM"),(0,a.kt)("p",null,"To verify a variety of curves or algorithms, a simple and efficient method is calling CKB-VM. For the security of the asset, this approach only allows the verification of other digital signatures encoded in a whitelist, such as ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA"},"EdDSA"),", ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Signing_messages"},"RSA"),", ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLS_digital_signature"},"BLS"),". In this mode, the r field in signature component includes the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CellDepWithPubKey {\n        pub cell_dep: CellDep,\n        pub pub_key: Bytes,\n}\n\npub struct CellDep {\n        pub out_point: OutPoint,\n        pub dep_type: u8,\n}\n\npub strcut OutPoint {\n        pub tx_hash: H256,\n        pub index: u32,\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CellDep")," references to a live cell, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," field represents the signature. Interoperable transaction verifier finds the cell where the script is deployed via ",(0,a.kt)("inlineCode",{parentName:"p"},"cell_dep")," and loads the cell data as binary. It then executes the binary by calling the CKB-VM ","[API]","(Interoperable transaction verifier finds the cell where the script is deployed via cell_dep and loads), taking the public key and signature as input arguments. The order of arguments is fixed, with the public key being the first, followed by the signature. The verification of sender address is similar to Ethereum, and the sender should be the last 20 bytes of the public key ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/eth-hash"},"keccak256")," hash."),(0,a.kt)("h3",{id:"verify-by-mock-transaction"},"Verify by Mock Transaction"),(0,a.kt)("p",null,"Verify by mock transaction is more complex compared to calling CKB-VM. Axon first decodes the signature component, constructs a mock ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#44-transaction"},"CKB transaction"),", and then verifies the transaction in CKB transaction verifier. Unlike calling CKB-VM verification, this method can leverage CKB-VM ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md"},"syscalls")," to enhance script processing capabilities. By accessing information stored in cells through syscalls, the verification scripts can access more information in CKB, thereby greatly enhancing their processing capabilities. So far, Axon interoperability verifier can read all of the data stored in CKB and establish a bridge between the abstract accounts",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," in CKB and Axon. "),(0,a.kt)("p",null,"Mock transaction verification offers two modes depending on the type of cells taken as transaction input:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reality input mode: Use the existing cells in CKB as the input of the mock transaction to verify."),(0,a.kt)("li",{parentName:"ul"},"Dummy input mode: User input an inexistent cell that will be taken as the input of the mock transaction to verify.")),(0,a.kt)("h4",{id:"reality-input-mode-data-structure"},"Reality Input Mode Data Structure"),(0,a.kt)("p",null,"In reality mode, the ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," field in signature component includes the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CKBTxMockByRef {\n    pub cell_deps:             Vec<CellDep>,\n    pub header_deps:           Vec<H256>,\n    pub out_points:            Vec<OutPoint>,\n    pub out_point_addr_source: AddressSource,\n}\n\npub struct AddressSource {\n    pub type_: u8,\n    pub index: u32,\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddressSource"),": The source used to calculate the sender address.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type_"),": An ",(0,a.kt)("inlineCode",{parentName:"li"},"uint8")," that indicates which hash will be used to compute the sender. ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," represents lock script hash; ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," represents type script hash."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index"),": indicates that the sender is computed from the input at the specified index",(0,a.kt)("sup",{parentName:"li",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HeaderDeps"),": A list of references to the CKB block header. ",(0,a.kt)("inlineCode",{parentName:"li"},"HeaderDeps")," is similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"CellDeps"),", since they both provide some read-only data in a transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OutPoint"),": A reference of the input cell.")),(0,a.kt)("p",null,"The s field in signature component includes the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Witnesses {\n    pub inner: Vec<Witness>,\n}\n\npub struct Witness {\n    pub input_type:  Option<Bytes>,\n    pub output_type: Option<Bytes>,\n    pub lock:        Option<Bytes>,\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Witnesses")," are the information provided by the transaction creator to ensure the successful execution of the corresponding lock script. For example, signatures might be included to ensure that a signature verification lock script passes."),(0,a.kt)("h4",{id:"dummy-input-mode-data-structure"},"Dummy Input Mode Data Structure"),(0,a.kt)("p",null,"In this mode, the ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," field in the signature component includes the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CKBTxMockByRefAndOneInput {\n    pub cell_deps:             Vec<CellDep>,\n    pub header_deps:           Vec<H256>,\n    pub input_cell_with_data:  CellWithData,\n    pub out_point_addr_source: AddressSource,\n}\n\npub struct CellWithData {\n    pub type_script: Option<Script>,\n    pub lock_script: Script,\n    pub data:        Bytes,\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CellWithData")," object is the input dummy cell. It includes all information required by a cell except for ",(0,a.kt)("inlineCode",{parentName:"p"},"capacity"),". Capacity is the size of the cell, which Axon will compute according to the input. In this mode, the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"AddressSource")," must be ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," field in the signature component is the same as the reality input mode, which restricts the witness to only include one item."),(0,a.kt)("h4",{id:"output-cell"},"Output Cell"),(0,a.kt)("p",null,"Each CKB transaction must have at least one output cell. The output cell in an interoperable transaction has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "capacity": "Compute by Axon", \n    "lock": {\n        "code_hash": "0x0000000000000000000000000000000000000000000000000000000000000000", \n        "args": "0x", \n        "hash_type": "data"\n    }, \n    "type": {\n        "code_hash": "ckb_blake2b_256(AlwaysSuccessScript)", \n        "args": "Axon transaction signature hash", \n        "hash_type": "data1"\n    }\n}\n')),(0,a.kt)("p",null,"Because of the ",(0,a.kt)("inlineCode",{parentName:"p"},"lock")," script in output cells is not executed, all fields are ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," script is an always-success script, and the script argument is the Axon transaction signature hash which is specified in ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-155"},"EIP-155"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"capacity")," is calculated by the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In reality input mode, capacity is the sum of the input\u2019s capacity minus one."),(0,a.kt)("li",{parentName:"ul"},"In dummy input mode, capacity is ",(0,a.kt)("inlineCode",{parentName:"li"},"100"),".")),(0,a.kt)("h4",{id:"mock-ckb-transaction-structure"},"Mock CKB Transaction Structure"),(0,a.kt)("p",null,"After decoding the ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," field in signature component, Axon builds a mock CKB transaction with the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0x0", \n    "cell_deps": "Decode from signature r field", \n    "header_deps": "Decode from signature r field", \n    "inputs": "Decode from signature r field", \n    "outputs": [\n        "Mock by Axon", \n        ],\n    "outputs_data": [\n        "0x", \n    ], \n    "witnesses": "Decode from signature s field"\n}\n')),(0,a.kt)("h3",{id:"signature-decode"},"Signature Decode"),(0,a.kt)("p",null,"The first byte of the ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," field is used as a flag to determine the verification mode. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0"),": call CKB-VM verify mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),": reality input mode of verification by mock transaction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2"),": dummy input mode of verification by mock transaction")),(0,a.kt)("p",null,"Any other flag values are considered invalid. The following code demonstrates the different modes of verification used by Axon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"match signature.r[0] {\n        0u8 => {\n                let sig_r = rlp::decode::<CellDepWithPubKey>(&signature.r[1..])?;\n                ...\n        }\n        1u8 => {\n                let sig_r = rlp::decode::<CKBTxMockByRef>(&signature.r[1..])?;\n                ...\n        }\n        2u8 => {\n                let sig_r = rlp::decode::<CKBTxMockByRefAndOneInput>(& signature.r[1..])?;\n                ...\n        }\n        _ => return Err(InvalidFlag);\n}\n")),(0,a.kt)("p",null,"After the verification mode is determined, the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," field can be confirmed. If it is calling CKB-VM verification mode, take the ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," field as signature directly. Otherwise, the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," should be decoded as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Witnesses")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let witnesses = rlp::decode::<Witnesses>(&signature.s)?;\n")),(0,a.kt)("p",null,"Therefore, the encode of interoperability transaction signature component is the reverse of the above process. The encode functions are provided in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon-sdk-js"},"Axon SDK"),"."),(0,a.kt)("h2",{id:"interoperability-in-evm"},"Interoperability in EVM"),(0,a.kt)("p",null,"To expand the interoperability of EVM, Axon provides some precompile contracts to call CKB-VM. The process that calls CKB-VM in EVM is similar to that in interoperability transaction, they both depend on the same implementation."),(0,a.kt)("h3",{id:"precompile-contracts"},"Precompile Contracts"),(0,a.kt)("p",null,"\ud83d\udea7\xa0WIP. WE WILL UPDATE SOON! \ud83d\udea7"),(0,a.kt)("h2",{id:"footnotes"},"Footnotes"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Axon contains two types of contracts: general contracts and system contracts. The main difference is that system contracts are written in Rust only. Compared with general contracts, system contracts can invoke more system resources, such as storage. Besides, system contracts are not necessarily stored in EVM MPT, since they have their own storage space.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Abstract accounts are blockchain user accounts implemented as smart contracts that allow for a high degree of customization. This is because they can contain diverse types of logic and implement different flows. By shifting user authentication from the network to the smart contracts, abstract accounts empower wallet designers to determine how to authenticate their users.",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"CKB input usually contains multiple cells, whose serial numbers are represented via index. For example, index is 0 stands for the first cell; 1, the second.",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);