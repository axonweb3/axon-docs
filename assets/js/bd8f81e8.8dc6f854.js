"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[131],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>y});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),d=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=d(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=d(n),h=r,y=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(y,i(i({ref:e},l),{},{components:n})):o.createElement(y,i({ref:e},l))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4114:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));n(4996);const a={title:"Deploy and Interact with a Solidity Contract",hide_title:!0,sidebar_position:3},i="Deploy and Interact with a Solidity Contract",s={unversionedId:"getting-started/for-dapp-devs/deploy_solidity",id:"getting-started/for-dapp-devs/deploy_solidity",title:"Deploy and Interact with a Solidity Contract",description:"Deploy a Solidity contract",source:"@site/docs/getting-started/for-dapp-devs/deploy_solidity.md",sourceDirName:"getting-started/for-dapp-devs",slug:"/getting-started/for-dapp-devs/deploy_solidity",permalink:"/getting-started/for-dapp-devs/deploy_solidity",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-dapp-devs/deploy_solidity.md",tags:[],version:"current",lastUpdatedAt:1697702452,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:3,frontMatter:{title:"Deploy and Interact with a Solidity Contract",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Send Transactions On Axon Via MetaMask",permalink:"/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask"},next:{title:"For Contributors",permalink:"/category/for-contributors"}},c={},d=[{value:"Deploy a Solidity contract",id:"deploy-a-solidity-contract",level:2},{value:"Interact With the Deployed Contract",id:"interact-with-the-deployed-contract",level:2}],l={toc:d},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-and-interact-with-a-solidity-contract"},"Deploy and Interact with a Solidity Contract"),(0,r.kt)("h2",{id:"deploy-a-solidity-contract"},"Deploy a Solidity contract"),(0,r.kt)("p",null,"Given Axon\u2019s full compatibility with the EVM, contract deployment on Axon closely resembles the process on Ethereum. You can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/docs/getting-started"},"Hardhat Getting Started")," for guidance. The only distinction is the network configuration."),(0,r.kt)("p",null,"This document assumes that you have followed ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/for-dapp-devs/quick_start"},"the Axon quick start")," to run an Axon node."),(0,r.kt)("p",null,"Once your project is created using ",(0,r.kt)("inlineCode",{parentName:"p"},"npx hardhat"),", you just need to edit the ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/docs/config"},"hardhat.config.ts")," file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { HardhatUserConfig } from "hardhat/config";\nimport "@nomicfoundation/hardhat-toolbox";\n\nconst config: HardhatUserConfig = {\n  solidity: "0.8.19",\n  networks: {\n    axon: {\n      url: "http://127.0.0.1:8000", // The RPC URL of Axon devnet\n      // Axon devnet\'s accounts since the genesis block\n      // See https://github.com/axonweb3/axon/blob/88c9a913/devtools/chain/specs/single_node/chain-spec.toml#L18C3-L21\n      accounts: {\n        mnemonic: "test test test test test test test test test test test junk",\n        count: 10, // the number of accounts to derive\n      },\n    },\n  },\n};\n\nexport default config;\n')),(0,r.kt)("p",null,"With these configurations in place, now you can connect Hardhat to this Axon node. For example, to run a deployment script against it, simply run the script using ",(0,r.kt)("inlineCode",{parentName:"p"},"--network axon"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx hardhat run scripts/deploy.ts --network axon\n\n# Result\nLock with 0.001ETH and unlock timestamp 1694761966 deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3\n")),(0,r.kt)("h2",{id:"interact-with-the-deployed-contract"},"Interact With the Deployed Contract"),(0,r.kt)("p",null,"Interacting with Axon contracts is the same as with Ethereum contracts. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethers.org"},"https://docs.ethers.org")," for more details."))}u.isMDXComponent=!0}}]);