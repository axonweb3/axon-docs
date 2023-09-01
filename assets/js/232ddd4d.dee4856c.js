"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),k=o,m=p["".concat(l,".").concat(k)]||p[k]||u[k]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),i=n(4996);const r={title:"Send Transactions On Axon Via MetaMask",hide_title:!0,sidebar_position:2},s="Send Transactions On Axon Via MetaMask",l={unversionedId:"getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",id:"getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",title:"Send Transactions On Axon Via MetaMask",description:"To proceed with this guide, you must have MetaMask installed. Visit Metamask and you will be automatically guided to the relevant store to download the extension or app based on the device and browser you\u2019re using.",source:"@site/docs/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask.md",sourceDirName:"getting-started/for-dapp-devs",slug:"/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",permalink:"/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask.md",tags:[],version:"current",lastUpdatedAt:1693557726,formattedLastUpdatedAt:"Sep 1, 2023",sidebarPosition:2,frontMatter:{title:"Send Transactions On Axon Via MetaMask",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/getting-started/for-dapp-devs/quick_start"},next:{title:"Deploy and Interact with a Solidity Contract",permalink:"/getting-started/for-dapp-devs/deploy_solidity"}},d={},c=[{value:"1 Set Up an Axon Node",id:"1-set-up-an-axon-node",level:2},{value:"1.1 Local Setup",id:"11-local-setup",level:3},{value:"1.2 Add Axon to MetaMask&#39;s Local Network",id:"12-add-axon-to-metamasks-local-network",level:3},{value:"Open Setting",id:"open-setting",level:4},{value:"Choose Networks",id:"choose-networks",level:4},{value:"Add Network",id:"add-network",level:4},{value:"Config Axon Network Manually",id:"config-axon-network-manually",level:4},{value:"Save Axon Network",id:"save-axon-network",level:4},{value:"2 Send a Transaction",id:"2-send-a-transaction",level:2},{value:"2.1 Add an Account",id:"21-add-an-account",level:3},{value:"2.2 Send a Transaction",id:"22-send-a-transaction",level:3}],p={toc:c},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-transactions-on-axon-via-metamask"},"Send Transactions On Axon Via MetaMask"),(0,o.kt)("p",null,"To proceed with this guide, you must have MetaMask installed. Visit ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask")," and you will be automatically guided to the relevant store to download the extension or app based on the device and browser you\u2019re using."),(0,o.kt)("p",null,"This guide provides instructions for sending transactions on Axon via MetaMask after setting up the Axon local node."),(0,o.kt)("h2",{id:"1-set-up-an-axon-node"},"1 Set Up an Axon Node"),(0,o.kt)("h3",{id:"11-local-setup"},"1.1 Local Setup"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon"},"Download Axon"),", find ",(0,o.kt)("b",null,"Install")," in ",(0,o.kt)("b",null,"README"),", and run the following commands to start the node:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cargo run --release -- -c devtools/chain/config.toml -g devtools/chain/genesis_single_node.json")),(0,o.kt)("p",null,"Once the node has been successfully set up, you will notice that the block height is increasing, for instance: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"Overlord: state go to new height 2171.\n")),(0,o.kt)("h3",{id:"12-add-axon-to-metamasks-local-network"},"1.2 Add Axon to MetaMask's Local Network"),(0,o.kt)("h4",{id:"open-setting"},"Open Setting"),(0,o.kt)("img",{alt:"open settings",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.1_open_settings.png"),width:"50%"}),(0,o.kt)("h4",{id:"choose-networks"},"Choose Networks"),(0,o.kt)("img",{alt:"choose networks",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.2_choose_networks.png"),width:"50%"}),(0,o.kt)("h4",{id:"add-network"},"Add Network"),(0,o.kt)("img",{alt:"Add network",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.3_Add_network.png"),width:"50%"}),(0,o.kt)("h4",{id:"config-axon-network-manually"},"Config Axon Network Manually"),(0,o.kt)("img",{alt:"Config Axon Network Manually",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/2.4_Config_Axon_Network_Manually.png"),width:"80%"}),(0,o.kt)("p",null,"On the ",(0,o.kt)("b",null,"Networks")," page, make sure that the ",(0,o.kt)("b",null,"New RPC URL")," and ",(0,o.kt)("b",null,"Chain ID")," are configured according to the following information. Copy and paste the text from the boxes below:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New RPC URL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," http://localhost:8000\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Chain ID")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022\n")),(0,o.kt)("p",null,"If you know Axon well enough, you can modify the ",(0,o.kt)("b",null,"RPC URL")," and ",(0,o.kt)("b",null,"Chain ID"),". They are in ",(0,o.kt)("inlineCode",{parentName:"p"},"devtools/chain/config.toml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"devtools/chain/genesis_single_node.json"),"."),(0,o.kt)("h4",{id:"save-axon-network"},"Save Axon Network"),(0,o.kt)("p",null,"Once you have filled out all the items above, click ",(0,o.kt)("b",null,"Save")," and you will be notified that the Axon network has been added."),(0,o.kt)("img",{alt:"Untitled",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled.png"),width:"80%"}),(0,o.kt)("h2",{id:"2-send-a-transaction"},"2 Send a Transaction"),(0,o.kt)("h3",{id:"21-add-an-account"},"2.1 Add an Account"),(0,o.kt)("p",null,"Add your Axon Genesis account to the local network. MetaMask supports importing accounts via both private keys and keystore files."),(0,o.kt)("p",null,"Here we use the private key. In Axon\u2019s repository, find ",(0,o.kt)("inlineCode",{parentName:"p"},"devtools/chain/config.toml")," and copy the corresponding content of the privKey."),(0,o.kt)("p",null,"For now, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x37aa0f893d05914a4def0460c0a984d3611546cfb26924d7a7ca6e0db9950a2d"),"."),(0,o.kt)("p",null,"The account and the balance will be displayed once the account is added. The Genesis account holds 1000,000,000,000,00 AXON configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"devtools/chain/config.toml"),"."),(0,o.kt)("img",{alt:"Untitled 1",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 1.png"),width:"80%"}),(0,o.kt)("h3",{id:"22-send-a-transaction"},"2.2 Send a Transaction"),(0,o.kt)("p",null,"Click ",(0,o.kt)("b",null,"Send")," on the balance page and let\u2019s transfer some tokens to another account. Here we are about to transfer 100 AXON to ",(0,o.kt)("inlineCode",{parentName:"p"},"0xdc796dfc1bb45f21d17be267877c3388d766937b"),"."),(0,o.kt)("img",{alt:"Untitled 2",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 2.png"),width:"50%"}),(0,o.kt)("p",null,"Click ",(0,o.kt)("b",null,"Next"),"."),(0,o.kt)("img",{alt:"Untitled 3",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 3.png"),width:"50%"}),(0,o.kt)("p",null,"Click ",(0,o.kt)("b",null,"Confirm"),"."),(0,o.kt)("img",{alt:"Untitled 4",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 4.png"),width:"80%"}),(0,o.kt)("p",null,"You'll see that the transaction is in ",(0,o.kt)("b",null,"Pending"),". It takes a few seconds for the status to change, then you'll know that the transaction has been successful and the balance is 100 AXON less."),(0,o.kt)("img",{alt:"Untitled 5",src:(0,i.Z)("img/for-dapp-devs/send-transactions-on-axon-via-metamask/Untitled 5.png"),width:"80%"}))}k.isMDXComponent=!0}}]);