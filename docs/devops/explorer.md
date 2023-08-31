---
title: Explorer
hide_title: true
sidebar_position: 4
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Explorer
Axon uses [BlockScan](https://github.com/Magickbase/blockscan), an explorer tailored for Ethereum-compatible chains. By deploying BlockScan, you can access data from Axon-based chains and monitor their status.

## Deployment

Docker Compose is the current deployment method.

### Docker Compose

1. Clone BlockScan repository to your target machine:

``` shell
git clone https://github.com/Magickbase/blockscan.git
cd blockscan
```

2. Edit the config file located at `- blockscan/dev.env`. Make the following adjustments:

```shell
ETHEREUM_JSONRPC_VARIANT=geth
ETHEREUM_JSONRPC_HTTP_URL=https://axon1.layerview.io/
# Http address of axon rpc
ETHEREUM_JSONRPC_TRACE_URL=https://axon1.layerview.io/
# Http address of axon rpc
DATABASE_URL=postgresql://postgres:postgres123@db:5432/blockscan?ssl=false
# DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/blockscan?ssl=false

```

3. Execute one-click deployment:

```shell
cd ./bolockscan
sudo docekr-compose up -d
```

4. Access the explorer at:

```shell
http://xxxx:4020
#  Replace this address with the actual URL where your BlockScan explorer is deployed
```

<img alt="Untitled" src={useBaseUrl("Axon Explorer interface.png")}  width="80%"/>
