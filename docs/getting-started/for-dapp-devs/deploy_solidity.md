---
title: Deploy and Interact with a Solidity Contract
hide_title: true
sidebar_position: 3
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Deploy and Interact with a Solidity Contract

## Deploy a Solidity contract
Given Axon’s full compatibility with the EVM, contract deployment on Axon closely resembles the process on Ethereum. You can follow the [Hardhat Getting Started](https://hardhat.org/hardhat-runner/docs/getting-started) for guidance. The only distinction is the network configuration.

This document assumes that you have followed [the Axon quick start](./quick_start.md) to run an Axon node.

When the project is created by `npx hardhat`, you just need to edit the [hardhat.config.ts](https://hardhat.org/hardhat-runner/docs/config) file as follows:

```javascript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    axon: {
      url: "http://127.0.0.1:8000", // The RPC URL of Axon devnet
      // Axon devnet's accounts since the genesis block
      // See https://github.com/axonweb3/axon/blob/88c9a913/devtools/chain/specs/single_node/chain-spec.toml#L18C3-L21
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        count: 10, // the number of accounts to derive
      },
    },
  },
};

export default config;
```

Now you can connect Hardhat to this Axon node, for example to run a deployment script against it, you simply need to run it using `--network axon`:
```shell
$ npx hardhat run scripts/deploy.ts --network axon

# Result
Lock with 0.001ETH and unlock timestamp 1694748964 deployed to 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
```

## Interact With the Deployed Contract
Interacting with Axon contracts is the same as with Ethereum contracts. You can refer to https://docs.ethers.org for more details.

