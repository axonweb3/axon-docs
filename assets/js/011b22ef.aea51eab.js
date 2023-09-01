"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,k=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(k,s(s({ref:t},p),{},{components:n})):o.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905)),a=n(4996);const s={title:"Quick Start",hide_title:!0,sidebar_position:1},c="Quick Start: Running Axon and BlockScan Locally with Docker",i={unversionedId:"getting-started/for-dapp-devs/quick_start",id:"getting-started/for-dapp-devs/quick_start",title:"Quick Start",description:"Run Axon and it's explorer (BlockScan) locally in Docker containers using docker-compose. Please read the docker-compose file to learn more about the services:",source:"@site/docs/getting-started/for-dapp-devs/quick_start.md",sourceDirName:"getting-started/for-dapp-devs",slug:"/getting-started/for-dapp-devs/quick_start",permalink:"/getting-started/for-dapp-devs/quick_start",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/getting-started/for-dapp-devs/quick_start.md",tags:[],version:"current",lastUpdatedAt:1693557726,formattedLastUpdatedAt:"Sep 1, 2023",sidebarPosition:1,frontMatter:{title:"Quick Start",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For DApp Devs",permalink:"/category/for-dapp-devs"},next:{title:"Send Transactions On Axon Via MetaMask",permalink:"/getting-started/for-dapp-devs/send_transactions_on_axon_via_metaMask"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the Services",id:"run-the-services",level:2},{value:"Watch the Logs",id:"watch-the-logs",level:3},{value:"Access the Chain",id:"access-the-chain",level:3},{value:"Access BlockScan",id:"access-blockscan",level:3},{value:"You Are Good to Go!",id:"you-are-good-to-go",level:2}],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-running-axon-and-blockscan-locally-with-docker"},"Quick Start: Running Axon and BlockScan Locally with Docker"),(0,r.kt)("p",null,"Run Axon and it's explorer (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Magickbase/blockscan"},"BlockScan"),") locally in Docker containers using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/compose"},"docker-compose"),". Please read ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon/blob/main/devtools/chain/docker-compose.yml"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"docker-compose")," file")," to learn more about the services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Axon node"),(0,r.kt)("li",{parentName:"ul"},"BlockScan as the explorer of Axon"),(0,r.kt)("li",{parentName:"ul"},"Postgres database")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": This integration is not ready for production use."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before getting started, ensure that you have the following prerequisites installed on your system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker v20.10+"),(0,r.kt)("li",{parentName:"ul"},"Docker-compose 2.x.x+")),(0,r.kt)("h2",{id:"run-the-services"},"Run the Services"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth=1 https://github.com/axonweb3/axon.git\ncd axon/devtools/chain\ndocker-compose up -d\n")),(0,r.kt)("h3",{id:"watch-the-logs"},"Watch the Logs"),(0,r.kt)("p",null,"To monitor the logs of the running services, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose logs -f --tail 1\n")),(0,r.kt)("p",null,"This command will display the logs of the services, showing the latest log entries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"chain-axon-1  | [2023-08-25T08:45:29.751879179+00:00 INFO overlord::state::process] Overlord: achieve consensus in height 254, costs 1 round 4.499679ms time\npostgres      | 2023-08-25 08:43:02.542 UTC [28] LOG:  checkpoint complete: wrote 134 buffers (0.8%); 0 WAL file(s) added, 0 removed, 0 recycled; write=13.325 s, sync=0.003 s, total=13.336 s; sync files=34, longest=0.003 s, average=0.001 s; distance=966 kB, estimate=966 kB\nblockscan     | 2023-08-25T08:45:24.008 application=indexer fetcher=empty_blocks_to_refetch [info] Start sanitizing of empty blocks. Batch size is 100\n...\n")),(0,r.kt)("h3",{id:"access-the-chain"},"Access the Chain"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc"},"Ethereum JSON-RPC API")," to interact with the Axon node. For instance, to get the chain ID of the Axon devnet, execute the following cURL command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Get the chain ID of the Axon devnet\ncurl --location --request POST \'http://127.0.0.1:8000\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "id": 42,\n    "jsonrpc": "2.0",\n    "method": "eth_chainId",\n    "params": []\n}\'\n\n# Result: a JSON response containing the chain ID of the Axon devnet.\n{"jsonrpc":"2.0","result":"0x7e6","id":42}\n')),(0,r.kt)("h3",{id:"access-blockscan"},"Access ",(0,r.kt)("a",{parentName:"h3",href:"http://127.0.0.1:4020"},"BlockScan")),(0,r.kt)("p",null,"To access the BlockScan explorer, open your browser and visit ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:4020"},"http://127.0.0.1:4020"),". This will allow you to explore the Axon blockchain using the BlockScan interface."),(0,r.kt)("img",{src:(0,a.Z)("img/for-dapp-devs/quick_start/blockscan-screenshot.png")}),(0,r.kt)("h2",{id:"you-are-good-to-go"},"You Are Good to Go!"),(0,r.kt)("p",null,"Congratulations!\nYou have successfully set up and run Axon and BlockScan locally in Docker containers. You can now start exploring the Axon blockchain and interacting with the services."),(0,r.kt)("p",null,"Next Steps: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.axonweb3.io/getting-started/for-dapp-devs/deploy_solidity"},"Deploy and Interact with a Solidity Contract")))}h.isMDXComponent=!0}}]);