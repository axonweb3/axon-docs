"use strict";(self.webpackChunkaxon_docs=self.webpackChunkaxon_docs||[]).push([[142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=o,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4996);const l={title:"Zero to Axon with Axon-cli",hide_title:!0,sidebar_position:1},i=void 0,p={unversionedId:"for-dapp-devs/Zero_To_Axon_With_Axon_Cli",id:"for-dapp-devs/Zero_To_Axon_With_Axon_Cli",title:"Zero to Axon with Axon-cli",description:"Zero to Axon with Axon-cli",source:"@site/docs/for-dapp-devs/Zero_To_Axon_With_Axon_Cli.md",sourceDirName:"for-dapp-devs",slug:"/for-dapp-devs/Zero_To_Axon_With_Axon_Cli",permalink:"/for-dapp-devs/Zero_To_Axon_With_Axon_Cli",draft:!1,editUrl:"https://github.com/axonweb3/axon-docs/edit/main/docs/for-dapp-devs/Zero_To_Axon_With_Axon_Cli.md",tags:[],version:"current",lastUpdatedAt:1666345124,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:1,frontMatter:{title:"Zero to Axon with Axon-cli",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For DApp Devs",permalink:"/category/for-dapp-devs"},next:{title:"Send Transactions On Axon Via MetaMask",permalink:"/for-dapp-devs/Send_Transactions_On_Axon_Via_MetaMask"}},s={},d=[{value:"Zero to Axon with Axon-cli",id:"zero-to-axon-with-axon-cli",level:2},{value:"Install Axon-cli From GitHub",id:"install-axon-cli-from-github",level:3},{value:"Build Axon-cli Binary",id:"build-axon-cli-binary",level:3},{value:"Run Axon-cli",id:"run-axon-cli",level:3},{value:"Run Command Lines",id:"run-command-lines",level:3},{value:"Status Check",id:"status-check",level:3},{value:"Related Topics",id:"related-topics",level:3},{value:"Axon &amp; CKB",id:"axon--ckb",level:4},{value:"Deploy EVM DApps",id:"deploy-evm-dapps",level:4}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"zero-to-axon-with-axon-cli"},"Zero to Axon with Axon-cli"),(0,o.kt)("p",null,"Axon-cli is an all-in-one client that makes operating Axon fast and easy. It contains initialization, DevOps, and cross-chain requests, among other functions."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Zero to Axon with Axon-cli")," is a hands-on tutorial. In less than 15 minutes, you can build a chain from scratch and learn how to start and manage a node with just one command."),(0,o.kt)("h3",{id:"install-axon-cli-from-github"},"Install Axon-cli From GitHub"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start by cloning the Axon-cli GitHub repo from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/axonweb3/axon-devops/tree/main/axon-cli"},"GitHub"))),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone git@github.com:axonweb3/axon-cli.git")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Enter into axon-cli directory")),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"cd axon-cli")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Config Docker")),(0,o.kt)("p",null,"Before starting Docker containers, you have to enable TCP port for Docker (0.0.0.0:2375 in this case)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On Mac OS, run:")),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run -it -d --name=socat -p 2375:2375 -v /var/run/docker.sock:/var/run/docker.sock bobrik/socat TCP4-LISTEN:2375,fork,reuseaddr UNIX-CONNECT:/var/run/docker.sock")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On Linux:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"daemon.json")," file in ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/docker"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"hosts": ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/systemd/system/docker.service.d/override.conf"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Service]  ExecStart=  ExecStart=/usr/bin/dockerd\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Reload the system daemon")),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Restart Docker")),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl restart docker.service")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Config data directory")),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"cp -r devtools ~/.axon/")),(0,o.kt)("h3",{id:"build-axon-cli-binary"},"Build Axon-cli Binary"),(0,o.kt)("p",null,"Under the axon-cli directory, run the following command:"),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo build --release")),(0,o.kt)("p",null,"Now your basic Axon-cli development environment is ready."),(0,o.kt)("h3",{id:"run-axon-cli"},"Run Axon-cli"),(0,o.kt)("p",null,"Enter the axon-cli interface by running the following command:"),(0,o.kt)("p",null,"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"../target/release/axon-cli")),(0,o.kt)("p",null,"Quit axon-cli interface by ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl C"),"."),(0,o.kt)("h3",{id:"run-command-lines"},"Run Command Lines"),(0,o.kt)("p",null,"There are 5 commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"axon start"))),(0,o.kt)("p",null,"You can start one (by default) or four docker nodes. For example, to start four nodes by ",(0,o.kt)("inlineCode",{parentName:"p"},"axon start --number=4"),". You can specify the axon directory as well by adding a parameter like ",(0,o.kt)("inlineCode",{parentName:"p"},"-d=/root/test"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"axon stop"))),(0,o.kt)("p",null,"Stop the four Docker nodes just started."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"axon rm"))),(0,o.kt)("p",null,"Remove the four Docker containers just created."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"axon del"))),(0,o.kt)("p",null,"Delete specific chain data by adding parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--data-dir"),". Otherwise, it will delete the directory indicated by the command ",(0,o.kt)("inlineCode",{parentName:"p"},"axon start"),"."),(0,o.kt)("p",null,"For instance, when the start command is ",(0,o.kt)("inlineCode",{parentName:"p"},"axon start -d=devtools/chain"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"axon del")," will be the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"axon del -d=evtools/chain"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"axon bm \u2014data-dir your-path"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bm")," refers to benchmark. Start benchmark, so that transactions will be sent to the nodes. You must specify benchmark directory ",(0,o.kt)("inlineCode",{parentName:"p"},"--data-dir"),", such as ",(0,o.kt)("inlineCode",{parentName:"p"},"axon bm --data-dir=/home/user/git/axon-devops/benchmark/benchmark"),"."),(0,o.kt)("h3",{id:"status-check"},"Status Check"),(0,o.kt)("p",null,"Check the status by running the following commands:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Check the liveness of nodes"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CONTAINER ID   IMAGE                COMMAND                  CREATED          STATUS                                    PORTS                                            NAMES\n7087aae0fc3c   wenyuancas/axon:v1   "./axon -c=/app/devt\u2026"   5 seconds ago    Up 5 seconds                              0.0.0.0:8003->8000/tcp, 0.0.0.0:8903->8100/tcp   axon4\n509d345dbe92   wenyuancas/axon:v1   "./axon -c=/app/devt\u2026"   13 seconds ago   Up 13 seconds                             0.0.0.0:8002->8000/tcp, 0.0.0.0:8902->8100/tcp   axon3\nbcf08ee3df09   wenyuancas/axon:v1   "./axon -c=/app/devt\u2026"   21 seconds ago   Restarting (137) Less than a second ago                                                    axon2\n4d81c3373eed   wenyuancas/axon:v1   "./axon -c=/app/devt\u2026"   28 seconds ago   Up 2 seconds                              0.0.0.0:8000->8000/tcp, 0.0.0.0:8900->8100/tcp   axon1\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Check the logs"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$ ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs axon4 | grep height"))),(0,o.kt)("p",null,"Return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[2022-10-21T09:02:37.961286656+00:00 INFO overlord::state::process] Overlord: "02b77c74eb68af3d4d6cc7884ed6709f1a2a1af0f713382a4438ec2ea3a70d4d7f" become leader, height 1, round 3\n[2022-10-21T09:02:37.962387627+00:00 WARN overlord::state::process] Overlord: state receive an outdated status, height 1, self height 1\n[2022-10-21T09:02:48.281954825+00:00 INFO overlord::state::process] overlord: start from wal wal info height 1, round 3, step Propose\n[2022-10-21T09:02:48.285925397+00:00 INFO overlord::state::process] Overlord: "02b77c74eb68af3d4d6cc7884ed6709f1a2a1af0f713382a4438ec2ea3a70d4d7f" become leader, height 1, round 3\n[2022-10-21T09:02:48.286568906+00:00 WARN overlord::state::process] Overlord: state receive an outdated status, height 1, self height 1\n')),(0,o.kt)("p",null,"Logs contain useful information, such as block height (472 in this case), which will increase over time."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Check the network connection between nodes"))),(0,o.kt)("p",null,"Install the tools:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ `docker exec -it axon1 /bin/bash`\n$ `apt install net-tools`\n$ `apt install iputils-ping`\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"root@6f816d8be4b7:/app# ping axon2PING axon2 (172.18.0.2) 56(84) bytes of data.64 bytes from axon2.axon-cli_axon-net (172.18.0.2): icmp_seq=1 ttl=64 time=0.298 ms64 bytes from axon2.axon-cli_axon-net (172.18.0.2): icmp_seq=2 ttl=64 time=0.074 ms")),(0,o.kt)("p",null,"or ",(0,o.kt)("inlineCode",{parentName:"p"},"netstat -tnp | grep axon")," that shows 3 other nodes as follows:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"root@6f816d8be4b7:/app# netstat -tnp | grep axontcp 0 0 172.18.0.3:8001 172.18.0.2:8001 ESTABLISHED 1/./axontcp 0 0 172.18.0.3:8001 172.18.0.5:8001 ESTABLISHED 1/./axontcp 0 0 172.18.0.3:8001 172.18.0.4:8001 ESTABLISHED 1/./axon")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Start benchmark"))),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"axon bm")," command to start benchmark and run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs bm")," to check the status."),(0,o.kt)("p",null,"For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," $ `docker logs bm`\n")),(0,o.kt)("p",null,"/////////////////////////////////////////////////////"),(0,o.kt)("p",null,"benchmark time: 60000 msendpoint: ",(0,o.kt)("a",{parentName:"p",href:"http://172.17.0.1:8000"},"http://172.17.0.1:8000")),(0,o.kt)("p",null,"/////////////////////////////////////////////////////"),(0,o.kt)("p",null,"waiting...preparing..."),(0,o.kt)("p",null,"deploying contract: ERC20contract ERC20 deployed to 0xF67Bc4E50d1df92b0E4C61794A4517AF6a995CB2"),(0,o.kt)("p",null,"preparedbenchmark case 0: ./benchmark"),(0,o.kt)("p",null,"/////////////////////////////////////////////////////"),(0,o.kt)("p",null,"benchmark time: 64650.558417998254 mstransaction count: 7200TPS: 111.3679475658724 mstransfer rate: 98.83"),(0,o.kt)("p",null,"/////////////////////////////////////////////////////"),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Start ",(0,o.kt)("inlineCode",{parentName:"strong"},"apm")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"apm")," refers to Application Performance Management. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"apm start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"apm stop")," commands to start and stop this feature respectively."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1 Customize config files")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Config ",(0,o.kt)("strong",{parentName:"p"},"axon_node"),": In file ",(0,o.kt)("inlineCode",{parentName:"p"},"apm/deploy/hosts"),", change the ",(0,o.kt)("inlineCode",{parentName:"p"},"axon_node")," IP to your own IP. In my case, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"172.19.86.210"),"."),(0,o.kt)("p",{parentName:"li"},"For example, in file ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2026/apm/deploy/hosts"),", write : ",(0,o.kt)("inlineCode",{parentName:"p"},"[axon_node]  172.19.86.210")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Config ",(0,o.kt)("strong",{parentName:"p"},"monitor_dir"),":\nIn file ",(0,o.kt)("inlineCode",{parentName:"p"},"apm/deploy/roles/monitor/vars/main.yaml"),", replace ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_dir")," with your local directory. All monitor-related files will be moved here, and the data will be stored under ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_dir/data"),". Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," can not be used here."),(0,o.kt)("p",{parentName:"li"},"For example, in file ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2026/main.yaml"),", write  : ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_dir: /users/root/axon-cli/apm/deploy/monitor_dir")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Config ",(0,o.kt)("strong",{parentName:"p"},"monitor_agent_dir"),":\nIn file ",(0,o.kt)("inlineCode",{parentName:"p"},"apm/deploy/roles/agent/vars/main.yaml"),", set ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_agent_dir")," to your directory. All agent-related files will be moved here, and the data will be stored under ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_agent_dir/data"),". Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," can not be used here."),(0,o.kt)("p",{parentName:"li"},"For example, in file ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2026/main.yaml"),", write : ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_agent_dir: /users/root/axon-cli/apm/deploy/monitor_dir")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Config ",(0,o.kt)("strong",{parentName:"p"},"log_path"),": In file ",(0,o.kt)("inlineCode",{parentName:"p"},"apm/deploy/roles/agent/vars/main.yaml"),", set ",(0,o.kt)("inlineCode",{parentName:"p"},"log_path"),". At present there is no need to modify ",(0,o.kt)("inlineCode",{parentName:"p"},"monitor_address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"es_address"),". Notice that ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," can not be used here."),(0,o.kt)("p",{parentName:"li"},"For example, in file ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2026/main.yaml"),", write : ",(0,o.kt)("inlineCode",{parentName:"p"},"log_path: /users/root/axon-cli/apm/deploy/monitor_log")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2 Start a node")),(0,o.kt)("p",null,"Start a node by ",(0,o.kt)("inlineCode",{parentName:"p"},"apm start -p=/home/user/git/axon-cli/apm"),", or stop it by ",(0,o.kt)("inlineCode",{parentName:"p"},"apm stop"),"."),(0,o.kt)("p",null,"To clean the data, use: ",(0,o.kt)("inlineCode",{parentName:"p"},"apm clean -p=/home/user/git/axon-cli/apm"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"apm start")," may take a few minutes to complete due to heavy background processes."),(0,o.kt)("p",null,"After setting up the right config and successfully starting ",(0,o.kt)("inlineCode",{parentName:"p"},"apm"),", you can access the data-visualization platform Grafana by visiting ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8600")," in your browser."),(0,o.kt)("p",null,"Now you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"axon-node")," Dashboard is displayed as below. Grafana provides time range control which is 7 days by default. Click on the time units on the top navbar to change the range. (I select the ",(0,o.kt)("strong",{parentName:"p"},"Last 1 hour")," as shown below.)"),(0,o.kt)("img",{alt:"dash1 last 1 hour",src:(0,r.Z)("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash1 last 1 hour.png"),width:"100%"}),(0,o.kt)("img",{alt:"dash2",src:(0,r.Z)("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash2.png"),width:"100%"}),(0,o.kt)("p",null,"You can also view the benchmark in the Dashboard ",(0,o.kt)("inlineCode",{parentName:"p"},"axon-benchmark")," displayed as below."),(0,o.kt)("img",{alt:"dash3 benchmark",src:(0,r.Z)("img/for-dapp-devs/zero-to-axon-with-axon-cli/dash3 benchmark.png"),width:"100%"}),(0,o.kt)("h3",{id:"related-topics"},"Related Topics"),(0,o.kt)("h4",{id:"axon--ckb"},"Axon & CKB"),(0,o.kt)("p",null,"Axon repository on GitHub : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/axonweb3/axon"},"https://github.com/axonweb3/axon")),(0,o.kt)("p",null,"CKB docs and technical reference: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/"},"https://docs.nervos.org/")),(0,o.kt)("h4",{id:"deploy-evm-dapps"},"Deploy EVM DApps"),(0,o.kt)("p",null,"Learn how to get started with EVM and deploy Solidity-based smart contracts in Hardhat environment."),(0,o.kt)("p",null,"Solidity : ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/"},"https://docs.soliditylang.org/")),(0,o.kt)("p",null,"Hardhat : ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"https://hardhat.org/")))}m.isMDXComponent=!0}}]);