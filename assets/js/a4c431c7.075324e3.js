"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));n(4996);const r={title:"Proxy",hide_title:!0,sidebar_position:6},i="Axon-Proxy",s={unversionedId:"devops/proxy",id:"devops/proxy",title:"Proxy",description:"When it comes to providing a single RPC endpoint supported by multiple nodes, a reliable load balancer becomes necessary. While HTTP and WebSocket load balancers like NGINX (previously used in Axon-devops) have been widely used, we encountered challenges in implementing advanced JSON-RPC handling, such as rate limiting, caching, and sticky load balancing with them.",source:"@site/docs/devops/proxy.md",sourceDirName:"devops",slug:"/devops/proxy",permalink:"/devops/proxy",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/devops/proxy.md",tags:[],version:"current",lastUpdatedAt:1698224524,formattedLastUpdatedAt:"Oct 25, 2023",sidebarPosition:6,frontMatter:{title:"Proxy",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Faucet",permalink:"/devops/faucet"},next:{title:"Security Guidelines",permalink:"/security"}},l={},c=[{value:"Implementation",id:"implementation",level:2},{value:"Rate Limiting",id:"rate-limiting",level:3},{value:"Caching",id:"caching",level:3},{value:"Filter-ID Sticky Load Balancing",id:"filter-id-sticky-load-balancing",level:3},{value:"Load Balancing, Health Checking, and Failover",id:"load-balancing-health-checking-and-failover",level:3},{value:"Config Reloading",id:"config-reloading",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Performance",id:"performance",level:2}],d={toc:c},h="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"axon-proxy"},"Axon-Proxy"),(0,o.kt)("p",null,"When it comes to providing a single RPC endpoint supported by multiple nodes, a reliable load balancer becomes necessary. While HTTP and WebSocket load balancers like NGINX (previously used in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon-devops"},"Axon-devops"),") have been widely used, we encountered challenges in implementing advanced JSON-RPC handling, such as rate limiting, caching, and sticky load balancing with them."),(0,o.kt)("p",null,"To address these limitations, we have built a new JSON-RPC load balancer Axon Proxy. By harnessing Rust's async ecosystem, Axon-Proxy offers robust support for complex use cases. Axon-Proxy will soon become the recommended JSON-RPC load balancer in Axon-devops; it is also a sensible choice for load balancing in other Ethereum JSON-RPC compatible blockchain nodes."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Building a JSON-RPC load balancer in Rust is straightforward using crates like tokio, axum, reqwest and serde_json. Axum is a popular web framework built on top of hyper and tokio. In axum HTTP and WebSocket handlers, we parse the JSON-RPC request, split it if it\u2019s a batch, and handle each request, either by returning a rate-limiting response, cached response or by forwarding it to a backend node."),(0,o.kt)("p",null,"The tower crate has ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/tower/latest/tower/balance/index.html"},"load balancing")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/tower/latest/tower/discover/index.html"},"service discovery")," functionalities and they are very good inspirations. But the service discovery mechanism doesn\u2019t fit with how we want to implement health checking and failover, so we ended up not using tower load balancing."),(0,o.kt)("h3",{id:"rate-limiting"},"Rate Limiting"),(0,o.kt)("p",null,"Axon-proxy supports rate limiting by IP (or IP and method name). Rate counters are stored in Redis so that they are shared among multiple instances of axon-proxy. Redis is still a lot slower compared to local memory, so it\u2019s planned to add in-process caching of already rate-limited keys, similar to ingress-nginx memchached rate-limiter."),(0,o.kt)("h3",{id:"caching"},"Caching"),(0,o.kt)("p",null,"Axon-proxy provides optional caching support for some methods, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_call")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_estimateGas")," for now. The cache key is the hash of the current tip block hash, the request method name and canonically serialized parameters. In-process request coalescing is also supported to prevent ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_stampede"},"dog-piling"),"."),(0,o.kt)("h3",{id:"filter-id-sticky-load-balancing"},"Filter-ID Sticky Load Balancing"),(0,o.kt)("p",null,"Filter-related methods, e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges"},(0,o.kt)("inlineCode",{parentName:"a"},"eth_getFilterChanges")),", are stateful. In Axon, filter states are stored in the local memory of each node, so the load balancer must forward filter requests to the corresponding node. In Axon-proxy, a mapping between filter IDs and nodes is stored and filter requests are forwarded accordingly."),(0,o.kt)("h3",{id:"load-balancing-health-checking-and-failover"},"Load Balancing, Health Checking, and Failover"),(0,o.kt)("p",null,"Two load balancing methods are supported: p2c least requests and client IP consistent hashing."),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"https://www.eecs.harvard.edu/~michaelm/postscripts/handbook2001.pdf"},"p2c")," least requests, two nodes are randomly chosen, and the one with fewer outstanding requests is selected. This should distribute requests uniformly among the backend nodes."),(0,o.kt)("p",null,"When using client IP consistent hashing, requests from a certain IP are mapped to a certain backend node, as long as the backend nodes don't change. When they\ndo change, only a minimum fraction of IPs will be mapped to a different node. The specific hashing method we use is ",(0,o.kt)("a",{parentName:"p",href:"https://www.snia.org/sites/default/files/SDC15_presentations/dist_sys/Jason_Resch_New_Consistent_Hashings_Rev.pdf"},"weighed rendezvous hashing"),". Rendezvous hashing has O(n) complexity where n is the number of nodes, but we don\u2019t expect to have more than a few hundred nodes, so it\u2019s fast enough. It\u2019s also easy to implement and plays nicely with health checking."),(0,o.kt)("p",null,"Active health checking is supported: when enabled axon-proxy will periodically check whether the backend nodes are healthy. Unhealthy nodes are excluded in load balancing. We are also planning to enhance the health checking by also considering block syncing status: nodes that fall behind or haven\u2019t caught up yet probably shouldn\u2019t be selected (inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/emeraldpay/dshackle"},"dshackle"),")."),(0,o.kt)("p",null,"In case a node doesn\u2019t respond timely but active health checking hasn\u2019t detected the issue yet, the failover mechanism comes into play: a second node is attempted as long as it is considered safe.  Unlike an HTTP load balancer that only sees POST requests, not knowing which ones are ",(0,o.kt)("a",{parentName:"p",href:"https://serverfault.com/questions/528653/how-can-i-stop-nginx-from-retrying-put-or-post-requests-on-upstream-server-timeo"},"safe to retry"),", Axon-proxy can examine the method name and retry all stateless or idempotent requests."),(0,o.kt)("h3",{id:"config-reloading"},"Config Reloading"),(0,o.kt)("p",null,"Most config options can be reloaded without restarting. Connection pools for backend nodes and Redis are kept across reloads. Load balancing and health checking status are not kept for now, which can be optimized in the future."),(0,o.kt)("h3",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Various metrics are recorded in Axon-proxy and exposed in Prometheus text format. Aside from several histograms, the majority of these metrics are atomic variables, in which some are already available for load balancing, so that exposing them as metrics has no extra cost except for encoding them on scraping."),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"Rust and axum both demonstrate remarkable performance (Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.techempower.com/benchmarks/#section=data-r21"},"this")," web framework benchmark ranking). We have also implemented optimizations such as serde_json ",(0,o.kt)("inlineCode",{parentName:"p"},"&RawValue")," to minimize data copies, byte slicing to reduce memory consumption, and vectorized I/O to further enhance efficiency."),(0,o.kt)("p",null,"To assess its performance, I have run a simple benchmark by calling a minimal ping/pong method through the proxy on a Ryzen 7950x desktop machine. The proxy is running with 12 threads. Rate limiting and request logging are disabled. The performance looks pretty good with the Req/Sec of 202357.66 and the max latency of only 3.94 ms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ rewrk -t4 -c64 -d 10s  --host http://127.0.0.1:8000 -m post -b \'{"jsonrpc":"2.0","id":1,"method":"@ping"}\'\nBeginning round 1...\nBenchmarking 64 connections @ http://127.0.0.1:8000 for 10 second(s)\n  Latencies:\n    Avg      Stdev    Min      Max\n    0.32ms   0.06ms   0.08ms   3.94ms\n  Requests:\n    Total: 2023663 Req/Sec: 202357.66\n  Transfer:\n    Total: 413.00 MB Transfer Rate: 41.30 MB/Sec\n')),(0,o.kt)("p",null,"There\u2019s a performance caveat in a specific case: large batch requests take longer to process if the proxy has high network latency to the backend nodes. This is because each request in the batch needs at least an RTT (real-time text) to be handled. It\u2019s currently not planned to change this because large batch requests should probably be limited in production. It\u2019s recommended to deploy the proxy close to the backend nodes if this is a concern. In the future, we may add a more latency-aware load balancing method, which will also help with this issue if the backend nodes have different latency."),(0,o.kt)("p",null,"Check out Axon-proxy\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon-proxy/"},"GitHub repo")," and try it out if you find it interesting or useful. Feel free to reach out to us if you find any problems, or have any questions or suggestions."))}p.isMDXComponent=!0}}]);