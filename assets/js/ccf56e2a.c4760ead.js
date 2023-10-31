"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[923],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(i),u=a,k=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return i?n.createElement(k,r(r({ref:t},d),{},{components:i})):n.createElement(k,r({ref:t},d))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8344:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(7462),a=(i(7294),i(3905)),o=i(4996);const r={title:"Staking Protocol",hide_title:!0,sidebar_position:1},s="Staking Protocol",l={unversionedId:"staking/staking-protocol",id:"staking/staking-protocol",title:"Staking Protocol",description:"This document describes the staking protocol in Axon, which is critical for ensuring the security and stability of the network. Validators run nodes and are in charge of participating in the consensus process. Anyone can engage in the staking as either a staker, who deposits their Axon Tokens (ATs) hoping to become a validator, or a delegator, who entrusts their tokens to a validator candidate. Kicker selects the stakers with the highest stakes to become future validators. An incentivized staker selection mechanism is correspondingly developed to promote honest behaviors among all participants.",source:"@site/docs/staking/staking-protocol.md",sourceDirName:"staking",slug:"/staking/staking-protocol",permalink:"/staking/staking-protocol",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/staking/staking-protocol.md",tags:[],version:"current",lastUpdatedAt:1698758209,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:1,frontMatter:{title:"Staking Protocol",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Staking",permalink:"/category/staking"},next:{title:"Contract Info",permalink:"/category/contract-info"}},c={},d=[{value:"Participants",id:"participants",level:2},{value:"Seeder",id:"seeder",level:3},{value:"Validator",id:"validator",level:3},{value:"Staker",id:"staker",level:3},{value:"Delegator",id:"delegator",level:3},{value:"Kicker",id:"kicker",level:3},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Overview",id:"overview",level:2},{value:"Deep Dive",id:"deep-dive",level:2},{value:"Initiation",id:"initiation",level:3},{value:"Staking",id:"staking",level:3},{value:"Delegation",id:"delegation",level:3},{value:"Validator Selection",id:"validator-selection",level:3},{value:"Checkpoint Recording",id:"checkpoint-recording",level:3},{value:"Reward Distribution",id:"reward-distribution",level:3}],h={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"staking-protocol"},"Staking Protocol"),(0,a.kt)("p",null,"This document describes the staking protocol in Axon, which is critical for ensuring the security and stability of the network. Validators run nodes and are in charge of participating in the consensus process. Anyone can engage in the staking as either a staker, who deposits their Axon Tokens (ATs) hoping to become a validator, or a delegator, who entrusts their tokens to a validator candidate. Kicker selects the stakers with the highest stakes to become future validators. An incentivized staker selection mechanism is correspondingly developed to promote honest behaviors among all participants."),(0,a.kt)("h2",{id:"participants"},"Participants"),(0,a.kt)("h3",{id:"seeder"},"Seeder"),(0,a.kt)("p",null,"Seeder is the founder who can create and issue ATs, and initialize chains based on Axon. The initialization requires the collaborative efforts of one or more individuals to determine the validators and initiate the operation of the chain."),(0,a.kt)("h3",{id:"validator"},"Validator"),(0,a.kt)("p",null,"Validators play a critical role in Axon's consensus mechanism by packaging transactions into blocks, ensuring the smooth operation of the chain, and earning rewards. It is important to note that validators are bounded by a defined tenure and a numerical limit, which regulate their involvement within the system."),(0,a.kt)("h3",{id:"staker"},"Staker"),(0,a.kt)("p",null,"Stakers are participants who intend to be validators by meeting specific criteria. Any individual can become a staker by staking a certain amount of ATs and successfully passing the validator selection process."),(0,a.kt)("h3",{id:"delegator"},"Delegator"),(0,a.kt)("p",null,"Considering the expenses associated with running a node, some participants prefer to earn rewards from their holdings of ATs without actively engaging in node operation. These individuals can delegate their tokens to stakers they have selected, thereby augmenting the likelihood of the latter being chosen as validators and consequently sharing in the earned rewards. By becoming delegators, participants can passively benefit from their AT holdings while supporting the network's operation through incentivized staker selection."),(0,a.kt)("h3",{id:"kicker"},"Kicker"),(0,a.kt)("p",null,"Within the Axon ecosystem, a kicker plays the permissionless role to address various critical tasks, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitoring the liveness of any Axon-based chain and promptly reporting its status (aka., checkpoint) to Layer 1."),(0,a.kt)("li",{parentName:"ul"},"Facilitating the selection for the upcoming set of validators (aka., metadata) when the previous tenure concludes"),(0,a.kt)("li",{parentName:"ul"},"Ensuring the accuracy and timeliness of the information regarding the latest staking and delegating allocations")),(0,a.kt)("p",null,"The kicker is pivotal in maintaining the integrity and smoothness of network operation by actively overseeing chain status, validator selection, and staking management."),(0,a.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Epoch: The duration of a validator set, lasting for a fixed number of ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," Axon blocks."),(0,a.kt)("li",{parentName:"ul"},"Period: A fixed interval of ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," Axon blocks, after which one of the validators must submit the latest state to Layer 1. When choosing the parameters, it is ensured that:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," is divisible by ",(0,a.kt)("inlineCode",{parentName:"li"},"y"),", i.e., ",(0,a.kt)("inlineCode",{parentName:"li"},"y|x")," , so that an epoch consists of a specific number of checkpoints."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"(x / y) mod validator_len")," must be ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,a.kt)("li",{parentName:"ul"},"Quorum: the maximum number of validators in an epoch."),(0,a.kt)("li",{parentName:"ul"},"Metadata: includes the essential information of Axon, such as the validators\u2019 history of proposal counts, and consensus configuration. Metadata is stored in Layer 1."),(0,a.kt)("li",{parentName:"ul"},"Checkpoint: is submitted by an Axon node to a kicker at the end of each period. Checkpoint includes the latest state of Axon, such as the state root, block hash, proposal count, and BLS signature of the latest block."),(0,a.kt)("li",{parentName:"ul"},"Commission Rate (per validator): the staker and delegators assign a percentage of the block rewards based on the amount of ATs."),(0,a.kt)("li",{parentName:"ul"},"Delegate Threshold (per validator): the minimum amount of delegated tokens that a staker accepts from each delegator. It is set by the staker.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("img",{src:(0,o.Z)("img/staking/Staking protocol overview.png"),style:{maxHeight:"800px",display:"block",margin:"0 auto"}}),(0,a.kt)("p",null,"The entire protocol can be divided into six sub-protocols according to their functionalities: initiation, staking, delegation, validator selection, checkpoint recording, and reward distribution. Initiation is executed only at the beginning of the protocol\u2019s lifecycle, while the other five are carried out continuously and repeatedly."),(0,a.kt)("h2",{id:"deep-dive"},"Deep Dive"),(0,a.kt)("h3",{id:"initiation"},"Initiation"),(0,a.kt)("p",null,"In this stage, seeder assumes a significant role by prescribing the metadata for the first two epochs and initiating the chain. As the primary architect and visionary of the network, founder establishes the foundational parameters and sets the trajectory for the early development and progression of the chains built on Axon."),(0,a.kt)("h3",{id:"staking"},"Staking"),(0,a.kt)("p",null,"Participants in Axon enjoy the flexibility to stake their ATs as they wish and to engage in the network at their convenience. However, it is essential to recognize that the analysis of the total staked amount is conducted on an epoch-by-epoch basis. Each epoch serves as a time unit during which all staking records are consolidated into a comprehensive sum, capturing the collective staking activities of the participants."),(0,a.kt)("p",null,"Notably, the effects of staking become apparent after a two-epoch duration has transpired. This deliberate delay ensures that the network can synchronize and account for all relevant staking activities before implementing changes. Meanwhile, each staker has to set a dividend ratio and a minimum delegate threshold. "),(0,a.kt)("p",null,"At the onset of epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", a kicker calculates the list of validators for epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+2"),". This selection process adheres to a well-defined and predetermined protocol, ensuring fairness and integrity. Consequently, only a maximum of quorum stakers, as determined by the protocol, will be selected as validators for epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+2"),". Once the staked tokens become effective, they remain valid until the validator\u2018s qualification expires."),(0,a.kt)("p",null,"It is crucial to note that if a participant's staked tokens fail to be selected for validation, the entire staked tokens will be promptly returned to the respective participants. This mechanism safeguards participants' interests and ensures that non-selected tokens are not locked or inaccessible, allowing for continuous flexibility and engagement within the Axon ecosystem."),(0,a.kt)("h3",{id:"delegation"},"Delegation"),(0,a.kt)("p",null,"Participants have the option to delegate or redeem their ATs to or from a staker. The delegated amount must exceed the minimum delegated threshold set by the corresponding staker. Similar to the staking protocol, these operations come into effect after two epochs, ensuring a consistent and synchronized process. Moreover, the statistical analysis of the total delegated amount is performed on an epoch-by-epoch basis."),(0,a.kt)("p",null,"If the designated staker fails to be selected as a validator for the subsequent epoch, all the delegated tokens will be promptly returned to the participant who initiated the delegation. This mechanism safeguards participants from potential losses."),(0,a.kt)("h3",{id:"validator-selection"},"Validator Selection"),(0,a.kt)("p",null,"To ensure the seamless operation of the ecosystem, kicker is responsible for determining the metadata for epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+1")," at the beginning of epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),". As articulated in the above passage on Staking, the staked tokens only take effect from epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+2")," onwards. Consequently, the tokens effectively staked in epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+1")," remain frozen from the start of epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("p",null,"Upon the completion of each epoch, validators are entitled to receive rewards for their contributions within the Axon ecosystem. However, it is important to note that these rewards are initially locked and remain inaccessible for a duration of two subsequent epochs. Once the rewards are unlocked, they are distributed to both the validators and their delegators."),(0,a.kt)("p",null,"Since validators from epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," still possess the staked tokens, the candidate set for epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+1")," is composed of both the validators from epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," and stakers who newly joined in epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n-1"),". To select the validators for epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+1"),", candidates are sorted based on their staked amounts. Stakers with the top quorum from this sorted list are chosen as validators for epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+1"),", and their updated validator statuses are recorded on-chain. The staked tokens of the remaining non-selected candidates are promptly returned, allowing them to withdraw and re-stake later. If the number of candidates is less than the required quorum, all candidates automatically become validators for epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"n+1"),". Smooth chain operation can be thus ensured even in such cases."),(0,a.kt)("img",{src:(0,o.Z)("img/staking/staking protocol validator selection.png"),style:{maxHeight:"800px",display:"block",margin:"0 auto"}}),(0,a.kt)("p",null,"This meticulous selection process guarantees the presence of a set of reliable validators for each epoch, enhancing the stability and integrity of the system while allowing for efficient participation and token management for the participants."),(0,a.kt)("h3",{id:"checkpoint-recording"},"Checkpoint Recording"),(0,a.kt)("p",null,"Checkpoint represents the most recent state of the system, which is periodically reported to Layer 1. It encompasses several essential components, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Epoch: The current epoch number, indicating the stage of the system's progression."),(0,a.kt)("li",{parentName:"ul"},"Period: The current period number, signifying the subdivision within an epoch."),(0,a.kt)("li",{parentName:"ul"},"State Root: The state root of the Axon block header at the end of a period, encapsulating the current state of the chain."),(0,a.kt)("li",{parentName:"ul"},"Block Height: The Axon block number at the end of a period, numerically representing the block's position within the chain."),(0,a.kt)("li",{parentName:"ul"},"Block Hash: The Axon block hash at the end of a period, serving as a unique identifier representing the integrity of the block."),(0,a.kt)("li",{parentName:"ul"},"Timestamp: The exact time at which the Axon block was finalized at the end of a period."),(0,a.kt)("li",{parentName:"ul"},"Propose Count: The count of blocks proposed by each validator since the beginning of the current epoch, quantifying the participation and contribution of validators during the epoch.")),(0,a.kt)("p",null,"Together, these elements constitute the checkpoint. As a crucial reference for Layer 1, checkpoints enable periodic updates and efficient monitoring of the state and progress of Axon\u2019s ecosystem."),(0,a.kt)("h3",{id:"reward-distribution"},"Reward Distribution"),(0,a.kt)("p",null,"Upon the completion of each epoch, validators are entitled to receive rewards for their contributions. However, these rewards are locked and remain inaccessible for two subsequent epochs. Once unlocked, the rewards are distributed to the validators and their delegators."),(0,a.kt)("p",null,"To ensure fair distribution, rewards (",(0,a.kt)("inlineCode",{parentName:"p"},"r"),") is divided into ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," pieces, where ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," represents the number of validators within the network. Each validator and their delegators receive an equal share, ",(0,a.kt)("inlineCode",{parentName:"p"},"p = r/i"),", representing the total rewards allocated for the epoch."),(0,a.kt)("p",null,"The unlocked rewards are distributed among the participants in a manner that aligns with their token amounts. Initially, the rewards are divided proportionally reflecting the participants\u2018 contribution and stake in Axon. After the distribution, each delegator must deduct a commission rate from their rewards and provide them to the validator. This commission compensates the validator and incentivizes their ongoing participation."),(0,a.kt)("p",null,"This distribution mechanism promotes fairness, transparency, and incentivizes active participation from validators and delegators, fostering a balanced and thriving Axon ecosystem."))}u.isMDXComponent=!0}}]);