"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[129],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=l.createContext({}),k=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return l.createElement(u.Provider,{value:e},t.children)},o="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},N=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=k(a),N=n,s=o["".concat(u,".").concat(N)]||o[N]||d[N]||r;return a?l.createElement(s,i(i({ref:e},m),{},{components:a})):l.createElement(s,i({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[o]="string"==typeof t?t:n,i[1]=p;for(var k=2;k<r;k++)i[k]=a[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},5015:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var l=a(7462),n=(a(7294),a(3905));a(4996);const r={title:"Configuration",hide_title:!0,sidebar_position:1},i="Configuration",p={unversionedId:"devops/configuration",id:"devops/configuration",title:"Configuration",description:"Basics",source:"@site/docs/devops/configuration.md",sourceDirName:"devops",slug:"/devops/configuration",permalink:"/devops/configuration",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/devops/configuration.md",tags:[],version:"current",lastUpdatedAt:1685936637,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:1,frontMatter:{title:"Configuration",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DevOps",permalink:"/category/devops"},next:{title:"Monitoring Platform",permalink:"/devops/monitoring-platform"}},u={},k=[{value:"Basics",id:"basics",level:2},{value:"accounts",id:"accounts",level:3},{value:"crosschain_contract_address",id:"crosschain_contract_address",level:3},{value:"data_path",id:"data_path",level:3},{value:"privkey",id:"privkey",level:3},{value:"wckb_contract_address",id:"wckb_contract_address",level:3},{value:"RPC",id:"rpc",level:2},{value:"maxconn",id:"maxconn",level:3},{value:"max_payload_size",id:"max_payload_size",level:3},{value:"http_listening_address",id:"http_listening_address",level:3},{value:"ws_listening_address",id:"ws_listening_address",level:3},{value:"client_version",id:"client_version",level:3},{value:"gas_cap",id:"gas_cap",level:3},{value:"Network",id:"network",level:2},{value:"bootstraps",id:"bootstraps",level:3},{value:"listening_address",id:"listening_address",level:3},{value:"max_connected_peers",id:"max_connected_peers",level:3},{value:"ping_interval",id:"ping_interval",level:3},{value:"rpc_timeout",id:"rpc_timeout",level:3},{value:"selfcheck_interval",id:"selfcheck_interval",level:3},{value:"Mempool",id:"mempool",level:2},{value:"pool_size",id:"pool_size",level:3},{value:"timeout_gap",id:"timeout_gap",level:3},{value:"broadcast_txs_interval",id:"broadcast_txs_interval",level:3},{value:"broadcast_txs_size",id:"broadcast_txs_size",level:3},{value:"Executor",id:"executor",level:2},{value:"triedb_cache_size",id:"triedb_cache_size",level:3},{value:"Consensus",id:"consensus",level:2},{value:"sync_txs_chunk_size",id:"sync_txs_chunk_size",level:3},{value:"Logger",id:"logger",level:2},{value:"console_show_file_and_line",id:"console_show_file_and_line",level:3},{value:"file_size_limit",id:"file_size_limit",level:3},{value:"filter",id:"filter",level:3},{value:"log_path",id:"log_path",level:3},{value:"log_to_console",id:"log_to_console",level:3},{value:"log_to_file",id:"log_to_file",level:3},{value:"metrics",id:"metrics",level:3},{value:"modules_level",id:"modules_level",level:3},{value:"Rocksdb",id:"rocksdb",level:2},{value:"max_open_files",id:"max_open_files",level:3},{value:"cache_size",id:"cache_size",level:3},{value:"options_file",id:"options_file",level:3},{value:"Jaeger (Optional)",id:"jaeger-optional",level:2},{value:"service_name (Optional)",id:"service_name-optional",level:3},{value:"tracing_address (Optional)",id:"tracing_address-optional",level:3},{value:"tracing_batch_size (Optional)",id:"tracing_batch_size-optional",level:3},{value:"Prometheus (Optional)",id:"prometheus-optional",level:2},{value:"listening_address (Optional)",id:"listening_address-optional",level:3}],m={toc:k},o="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(o,(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("h2",{id:"basics"},"Basics"),(0,n.kt)("h3",{id:"accounts"},"accounts"),(0,n.kt)("p",null,"Account is a list that includes the addresses and amount of tokens initially allocated. The value of each node has must be consistent."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vec<InitialAccount",">"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("p",null,"  Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'[[accounts]]\naddress = "0xa0ee7a142d267c1f36714e4a8f75612f20a79720"\nbalance = "04ee2d6d415b85acef8100000000"\n')),(0,n.kt)("h3",{id:"crosschain_contract_address"},"crosschain_contract_address"),(0,n.kt)("p",null,"The address of the cross-chain contract. The value each nodes has must be consistent. (They are not in use until the official launch of the cross-chain functionality.)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"H160"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"data_path"},"data_path"),(0,n.kt)("p",null,"The path for data storage."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"privkey"},"privkey"),(0,n.kt)("p",null,'The private key for the HTTP listening port node, used for handshake and message signing. Privkey can be directly written in the configuration file or read from an environment variable. For instance, privkey = "A" refers to the privkey fetches its value from Environment Variable A.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hex"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"wckb_contract_address"},"wckb_contract_address"),(0,n.kt)("p",null,"The address of the  WCKB (Wrapped CKB) ERC20 contract that represents the cross-chain assets transferred from CKB (currently not in use). The value each node has must be consistent."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"H160"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"rpc"},"RPC"),(0,n.kt)("h3",{id:"maxconn"},"maxconn"),(0,n.kt)("p",null,"The maximum number of TCP connections."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Unit"),(0,n.kt)("td",{parentName:"tr",align:null},"25000"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"max_payload_size"},"max_payload_size"),(0,n.kt)("p",null,"The maximum payload size for RPC requests, primarily for limiting the ",(0,n.kt)("inlineCode",{parentName:"p"},"send_rawTransaction")," interface. Recommended value is 1MB."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"1MB"),(0,n.kt)("td",{parentName:"tr",align:null},"Byte"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"http_listening_address"},"http_listening_address"),(0,n.kt)("p",null,"The HTTP listening port."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SocketAddr"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"ws_listening_address"},"ws_listening_address"),(0,n.kt)("p",null,"The WebSocket listening port."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SocketAddr"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"client_version"},"client_version"),(0,n.kt)("p",null,"The client version."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},'"0.1.0"'),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"gas_cap"},"gas_cap"),(0,n.kt)("p",null,"The maximum gas limit allowed for RPC."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"25000000"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h2",{id:"network"},"Network"),(0,n.kt)("h3",{id:"bootstraps"},"bootstraps"),(0,n.kt)("p",null,"An array containing the list of bootstrap nodes."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Vec<String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"listening_address"},"listening_address"),(0,n.kt)("p",null,"The listening address."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MultiAddr"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"max_connected_peers"},"max_connected_peers"),(0,n.kt)("p",null,"The maximum number of connectable peers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"40"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"ping_interval"},"ping_interval"),(0,n.kt)("p",null,"The interval of the timed ping-pong messages of the protocol."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"15"),(0,n.kt)("td",{parentName:"tr",align:null},"s"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"rpc_timeout"},"rpc_timeout"),(0,n.kt)("p",null,"The timeout duration of RPC requests."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"s"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"selfcheck_interval"},"selfcheck_interval"),(0,n.kt)("p",null,"The self-check interval of the maximum number of inbound P2P network connections."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"35"),(0,n.kt)("td",{parentName:"tr",align:null},"s"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h2",{id:"mempool"},"Mempool"),(0,n.kt)("h3",{id:"pool_size"},"pool_size"),(0,n.kt)("p",null,"The size of the transaction pool."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"timeout_gap"},"timeout_gap"),(0,n.kt)("p",null,"The number of blocks after which a transaction becomes invalid."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"broadcast_txs_interval"},"broadcast_txs_interval"),(0,n.kt)("p",null,"The interval of broadcasting transactions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"ms"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"broadcast_txs_size"},"broadcast_txs_size"),(0,n.kt)("p",null,"The number of transactions broadcasted at once."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h2",{id:"executor"},"Executor"),(0,n.kt)("h3",{id:"triedb_cache_size"},"triedb_cache_size"),(0,n.kt)("p",null,"The size of the trie database cache. Recommended value is 500 or higher. Larger value consumes more memory."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"consensus"},"Consensus"),(0,n.kt)("h3",{id:"sync_txs_chunk_size"},"sync_txs_chunk_size"),(0,n.kt)("p",null,"The maximum number of transactions in a chunk when synchronizing transactions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"500"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h2",{id:"logger"},"Logger"),(0,n.kt)("h3",{id:"console_show_file_and_line"},"console_show_file_and_line"),(0,n.kt)("p",null,"Whether to display file names and line numbers when output in console."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"file_size_limit"},"file_size_limit"),(0,n.kt)("p",null,"The maximum size of log files. 1GB by default."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"1024","*","1024","*","1024"),(0,n.kt)("td",{parentName:"tr",align:null},"Byte"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"filter"},"filter"),(0,n.kt)("p",null,"The level of log output."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Info"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"log_path"},"log_path"),(0,n.kt)("p",null,"The path of log files."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"data_path/logs"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"log_to_console"},"log_to_console"),(0,n.kt)("p",null,"Whether to output logs to console."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"log_to_file"},"log_to_file"),(0,n.kt)("p",null,"Whether to output logs to files."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"metrics"},"metrics"),(0,n.kt)("p",null,"Whether to enable metrics."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"modules_level"},"modules_level"),(0,n.kt)("p",null,"The log output level defined by module.  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HashMap<String, String",">"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml"},'modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n')),(0,n.kt)("h2",{id:"rocksdb"},"Rocksdb"),(0,n.kt)("h3",{id:"max_open_files"},"max_open_files"),(0,n.kt)("p",null,"The maximum number of open files."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h3",{id:"cache_size"},"cache_size"),(0,n.kt)("p",null,"The cache size for each column family. Larger value consumes more memory. Recommended to be 50 or higher."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"100"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"options_file"},"options_file"),(0,n.kt)("p",null,"The path to the RocksDB configuration file. It is recommended to use the provided configuration file."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h2",{id:"jaeger-optional"},"Jaeger (Optional)"),(0,n.kt)("h3",{id:"service_name-optional"},"service_name (Optional)"),(0,n.kt)("p",null,"The name of service."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"tracing_address-optional"},"tracing_address (Optional)"),(0,n.kt)("p",null,"The address to send tracing span."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SocketAddr"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h3",{id:"tracing_batch_size-optional"},"tracing_batch_size (Optional)"),(0,n.kt)("p",null,"The size of tracing batch."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uint"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("h2",{id:"prometheus-optional"},"Prometheus (Optional)"),(0,n.kt)("h3",{id:"listening_address-optional"},"listening_address (Optional)"),(0,n.kt)("p",null,"The Prometheus listening port."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SocketAddr"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))}d.isMDXComponent=!0}}]);