"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),r=n(4996);const i={title:"Faucet",hide_title:!0,sidebar_position:5},c="Faucet",l={unversionedId:"devops/faucet",id:"devops/faucet",title:"Faucet",description:"Axon Faucet provides tokens for testing purposes. You can explore and experiment with their full range of capabilities in a safe and controlled environment. These tokens can be used for a variety of purposes, including transaction, staking, delegation, and more.",source:"@site/docs/devops/faucet.md",sourceDirName:"devops",slug:"/devops/faucet",permalink:"/devops/faucet",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/devops/faucet.md",tags:[],version:"current",lastUpdatedAt:1691980308,formattedLastUpdatedAt:"Aug 14, 2023",sidebarPosition:5,frontMatter:{title:"Faucet",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Explorer",permalink:"/devops/explorer"},next:{title:"Proxy",permalink:"/devops/proxy"}},s={},p=[{value:"Deployment",id:"deployment",level:2},{value:"1. Copy axon-devops directory to the target machine",id:"1-copy-axon-devops-directory-to-the-target-machine",level:3},{value:"2. Edit the config file",id:"2-edit-the-config-file",level:3},{value:"3. Execute one-click deployment",id:"3-execute-one-click-deployment",level:3},{value:"4. Initialize a mnemonic phrase",id:"4-initialize-a-mnemonic-phrase",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faucet"},"Faucet"),(0,a.kt)("p",null,"Axon Faucet provides tokens for testing purposes. You can explore and experiment with their full range of capabilities in a safe and controlled environment. These tokens can be used for a variety of purposes, including transaction, staking, delegation, and more."),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("h3",{id:"1-copy-axon-devops-directory-to-the-target-machine"},"1. Copy axon-devops directory to the target machine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/axonweb3/axon-devops\ncd axon-devops/axon-faucet\n")),(0,a.kt)("h3",{id:"2-edit-the-config-file"},"2. Edit the config file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"axon-devops/axon-faucet/config.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'deploy_path: "/home/ckb/axon-faucet"\n# Which path that the axon-faucet repo clone into\nfaucet_repo: "https://github.com/axonweb3/axon-faucet.git"\n# The github address of axon-faucet \nfaucet_branch: "master"\n# The branch name of axon-faucet \naxon_faucet_rpc_url: http://xxxx.xxx.xxx.xxx:8000\n# Http address of axon rpc\naxon_faucet_claim_value: 1000000000000000000\n# Faucet claim value\nmongodb_password: mongodbpassword\n# mongo db password that using by faucet\nmongodb_url: mongodb://root:mongodbpassword@faucet-mongo:27017\n# URL address of mongo db that using by faucet\n')),(0,a.kt)("h3",{id:"3-execute-one-click-deployment"},"3. Execute one-click deployment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd axon-devops/axon-exeplorer\nmake start #start axon faucet\ndocker-compose ps # check axon faucet status\nmake down #stop axon faucet\n")),(0,a.kt)("h3",{id:"4-initialize-a-mnemonic-phrase"},"4. Initialize a mnemonic phrase"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://localhost:8502/api/import-mnemonic?mnemonic=test%20test%20test%20test%20test%20test%20test%20test%20test%20test%20test%20junk\n# Make sure to use unique mnemonic words in real deployment, NOT the sample words (these "test"s) here.\n')),(0,a.kt)("p",null,"Once successfully deployed, open your browser and visit the faucet page ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8502/"},"http://localhost:8502/")," to claim your tokens."),(0,a.kt)("img",{alt:"Untitled",src:(0,r.Z)("img/devops/Axon Faucet interface.png"),width:"80%"}))}m.isMDXComponent=!0}}]);