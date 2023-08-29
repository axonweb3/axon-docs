---
title: Explorer
hide_title: true
sidebar_position: 4
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Explorer
BlockScan is a explorer for ETH compatible chain like [Axon](https://github.com/nervosnetwork/axon) Side Chain which is a layer2 network build on [Nervos Network](https://www.nervos.org/) [CKB](https://github.com/nervosnetwork/ckb)

You can deploy explorer to query information on the axon chain and observe the status of the axon chain



### Deployment

#### More diverse deployment methods, gradually developed

#### Docker-compose

#####  1. Clone blockscan to target machine

``` shell
git clone https://github.com/Magickbase/blockscan.git
cd blockscan
```



##### 2. Edit the config config

- blockscan/dev.env

```shell
ETHEREUM_JSONRPC_VARIANT=geth


ETHEREUM_JSONRPC_HTTP_URL=https://axon1.layerview.io/
# Http address of axon rpc
ETHEREUM_JSONRPC_TRACE_URL=https://axon1.layerview.io/
# Http address of axon rpc
DATABASE_URL=postgresql://postgres:postgres123@db:5432/blockscan?ssl=false
# DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/blockscan?ssl=false

```



##### 3. Execute one-click deployment

```shell
cd ./bolockscan
sudo docekr-compose up -d
```



##### 4. Access explorer

```shell
http://xxxx:4020
```

<img alt="Untitled" src={useBaseUrl("Axon Explorer interface.png")}  width="80%"/>





🛠 This page is a work in progress. 🚧
