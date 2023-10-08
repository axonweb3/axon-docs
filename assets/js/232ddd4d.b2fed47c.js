"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,h=p["".concat(d,".").concat(k)]||p[k]||u[k]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=k;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),s=n(4996);const i={title:"Send Transactions On Axon Via MetaMask",hide_title:!0,sidebar_position:2},r="Send Transactions On Axon Via MetaMask",d={unversionedId:"getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",id:"getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",title:"Send Transactions On Axon Via MetaMask",description:"To proceed with this guide, you must have MetaMask installed. Visit Metamask and you will be automatically guided to the relevant store to download the extension or app based on the device and browser you\u2019re using.",source:"@site/docs/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask.md",sourceDirName:"getting-started/for-dapp-devs",slug:"/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",permalink:"/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask.md",tags:[],version:"current",lastUpdatedAt:1696753662,formattedLastUpdatedAt:"Oct 8, 2023",sidebarPosition:2,frontMatter:{title:"Send Transactions On Axon Via MetaMask",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/getting-started/for-dapp-devs/quick_start"},next:{title:"Deploy and Interact with a Solidity Contract",permalink:"/getting-started/for-dapp-devs/deploy_solidity"}},l={},c=[{value:"1 Set Up an Axon Node",id:"1-set-up-an-axon-node",level:2},{value:"1.1 Local Setup",id:"11-local-setup",level:3},{value:"1.2 Add Axon to MetaMask&#39;s Local Network",id:"12-add-axon-to-metamasks-local-network",level:3},{value:"Open Setting",id:"open-setting",level:4},{value:"Choose Networks",id:"choose-networks",level:4},{value:"Add Network",id:"add-network",level:4},{value:"Config Axon Network Manually",id:"config-axon-network-manually",level:4},{value:"Save Axon Network",id:"save-axon-network",level:4},{value:"2 Send a Transaction",id:"2-send-a-transaction",level:2},{value:"2.1 Add an Account",id:"21-add-an-account",level:3},{value:"2.2 Send a Transaction",id:"22-send-a-transaction",level:3}],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-transactions-on-axon-via-metamask"},"Send Transactions On Axon Via MetaMask"),(0,o.kt)("p",null,"To proceed with this guide, you must have MetaMask installed. Visit ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask")," and you will be automatically guided to the relevant store to download the extension or app based on the device and browser you\u2019re using."),(0,o.kt)("p",null,"This guide provides instructions for sending transactions on Axon via MetaMask after setting up the Axon local node."),(0,o.kt)("h2",{id:"1-set-up-an-axon-node"},"1 Set Up an Axon Node"),(0,o.kt)("h3",{id:"11-local-setup"},"1.1 Local Setup"),(0,o.kt)("p",null,"This document assumes that you have followed ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/for-dapp-devs/quick_start"},"the Axon quick start")," to run an Axon node."),(0,o.kt)("p",null,"Once the node has been successfully set up, you will notice that the block height is increasing, for instance: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Overlord: state goto new height 2171.\n")),(0,o.kt)("h3",{id:"12-add-axon-to-metamasks-local-network"},"1.2 Add Axon to MetaMask's Local Network"),(0,o.kt)("h4",{id:"open-setting"},"Open Setting"),(0,o.kt)("img",{alt:"open settings",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.1_open_settings.png"),width:"50%"}),(0,o.kt)("h4",{id:"choose-networks"},"Choose Networks"),(0,o.kt)("img",{alt:"choose networks",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.2_choose_networks.png"),width:"50%"}),(0,o.kt)("h4",{id:"add-network"},"Add Network"),(0,o.kt)("img",{alt:"Add network",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.3_Add_network.png"),width:"50%"}),(0,o.kt)("h4",{id:"config-axon-network-manually"},"Config Axon Network Manually"),(0,o.kt)("img",{alt:"Config Axon Network Manually",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.4_Config_Axon_Network_Manually.png"),width:"80%"}),(0,o.kt)("p",null,"On the ",(0,o.kt)("b",null,"Networks")," page, make sure that the ",(0,o.kt)("b",null,"New RPC URL")," and ",(0,o.kt)("b",null,"Chain ID")," are configured according to the following information. Copy and paste the text from the boxes below:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Network name"),": axon-devnet"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New RPC URL"),": http://localhost:8000"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Chain ID"),": 0x41786f6e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'This is the hexadecimal of ASCII string "Axon"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Currency symbol"),": axon"),(0,o.kt)("p",null,"If you know Axon well enough, you can modify the ",(0,o.kt)("b",null,"RPC URL")," and ",(0,o.kt)("b",null,"Chain ID"),". They are in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/88c9a91354187f7935d4a17d1e0bbc9ef517519f/devtools/chain/config.toml#L7-L9"},(0,o.kt)("inlineCode",{parentName:"a"},"devtools/chain/config.toml"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/88c9a91354187f7935d4a17d1e0bbc9ef517519f/devtools/chain/specs/single_node/chain-spec.toml#L8-L9"},(0,o.kt)("inlineCode",{parentName:"a"},"devtools/chain/specs/single_node/chain-spec.toml")),"."),(0,o.kt)("h4",{id:"save-axon-network"},"Save Axon Network"),(0,o.kt)("p",null,"Once you have filled out all the items above, click ",(0,o.kt)("b",null,"Save")," and you will be notified that the Axon network has been added."),(0,o.kt)("img",{alt:"Untitled",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled.png"),width:"80%"}),(0,o.kt)("h2",{id:"2-send-a-transaction"},"2 Send a Transaction"),(0,o.kt)("h3",{id:"21-add-an-account"},"2.1 Add an Account"),(0,o.kt)("p",null,"Add your Axon Genesis account to the local network. MetaMask supports importing accounts via both private keys and keystore files."),(0,o.kt)("p",null,"In Axon\u2019s repository, the Genesis accounts and their associated funds are configured in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/6fe5777e0b4a9b994dc84a56a00005745fd05085/devtools/chain/specs/single_node/chain-spec.toml#L18-L56"},(0,o.kt)("inlineCode",{parentName:"a"},"devtools/chain/specs/single_node/chain-spec.toml")),". Select an account and then use its corresponding private key."),(0,o.kt)("p",null,"For example, the private key ",(0,o.kt)("inlineCode",{parentName:"p"},"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"),", which corresponds to the address ",(0,o.kt)("inlineCode",{parentName:"p"},"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"),", is derived from the mnemonic phrase ",(0,o.kt)("inlineCode",{parentName:"p"},"test test test test test test test test test test test junk")," for the first account. This mnemonic phrase is consistent with ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/reference#initial-state"},"the one used for the initialization of the Hardhat Network"),"."),(0,o.kt)("p",null,"The account and the balance will be displayed once the private key is added. This Genesis account holds 100,000,000,000,000 AXON, as configured in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/6fe5777e0b4a9b994dc84a56a00005745fd05085/devtools/chain/specs/single_node/chain-spec.toml#L20"},(0,o.kt)("inlineCode",{parentName:"a"},"devtools/chain/specs/single_node/chain-spec.toml")),"."),(0,o.kt)("img",{alt:"Untitled 1",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 1.png"),width:"50%"}),(0,o.kt)("h3",{id:"22-send-a-transaction"},"2.2 Send a Transaction"),(0,o.kt)("p",null,"Click ",(0,o.kt)("b",null,"Send")," on the balance page and let\u2019s transfer some tokens to another account. Here we are about to transfer 100 AXON to ",(0,o.kt)("inlineCode",{parentName:"p"},"0xdc796dfc1bb45f21d17be267877c3388d766937b"),"."),(0,o.kt)("img",{alt:"Untitled 2",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 2.png"),width:"50%"}),(0,o.kt)("p",null,"Click ",(0,o.kt)("b",null,"Next"),"."),(0,o.kt)("img",{alt:"Untitled 3",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 3.png"),width:"50%"}),(0,o.kt)("p",null,"Click ",(0,o.kt)("b",null,"Confirm"),"."),(0,o.kt)("img",{alt:"Untitled 4",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 4.png"),width:"80%"}),(0,o.kt)("p",null,"You'll see that the transaction is in ",(0,o.kt)("b",null,"Pending"),". It takes a few seconds for the status to change, then you'll know that the transaction has been successful and the balance is 100 AXON less."),(0,o.kt)("img",{alt:"Untitled 5",src:(0,s.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 5.png"),width:"80%"}))}k.isMDXComponent=!0}}]);