"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[5998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={slug:"security",title:"Security Guidelines",position:9,sidebar_position:9},a=void 0,s={unversionedId:"security_guideline",id:"security_guideline",title:"Security Guidelines",description:"To ensure the stability and security of your Axon chain, please adhere to the following security assumptions:",source:"@site/docs/security_guideline.mdx",sourceDirName:".",slug:"/security",permalink:"/security",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/security_guideline.mdx",tags:[],version:"current",lastUpdatedAt:1703466658,formattedLastUpdatedAt:"Dec 25, 2023",sidebarPosition:9,frontMatter:{slug:"security",title:"Security Guidelines",position:9,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Differences Between Axon and Ethereum",permalink:"/differences"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To ensure the stability and security of your Axon chain, please adhere to the following security assumptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Validator Trustworthiness"),": Assume the absence of ",(0,i.kt)("strong",{parentName:"li"},"any malicious")," entities within the validator list. A secure Axon chain relies on trustworthy validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High Availability"),": To maintain a robust network, it's crucial that at least ",(0,i.kt)("inlineCode",{parentName:"li"},"(n/3 + 1)")," nodes remain online at all times. This level of availability helps safeguard the chain's continuous operation and resilience against potential disruptions.")))}d.isMDXComponent=!0}}]);