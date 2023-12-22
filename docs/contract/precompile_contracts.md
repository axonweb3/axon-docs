---
title: Precompile Contracts
hide_title: true
sidebar_position: 2
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Precompile Contracts

On top of a set of opcodes, EVM also offers advanced functionalities through precompiled contracts. These are special contracts bundled with EVM at fixed addresses that can be called with a determined gas. The gas is purely the contractual cost, neither the cost of the call itself nor the instructions to put the parameters in memory.

Precompiled contract addresses start from 1 and increment for each contract. New hardforks may introduce new precompiled contracts. Similar to the regular contracts, new contracts are called from opcodes with instructions, such as [CALL](https://www.evm.codes/#F1).

For all precompiled contracts, inputs that are shorter than expected are assumed to be virtually padded with zeros at the end, whereas any surplus bytes at the end of inputs that are longer than expected are ignored.

The address precompile contract is described by the last 2 bytes:

| Byte range [0..18] | Byte range [18..20] |
| --- | --- |
| 000000000000000000000000000000000000 | `addr` |

### EcRecover

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000001 | 3000 | hash, v, r, s | publicAddress |

EcRecover is a elliptic curve digital signature algorithm (ECDSA) public key recovery function. For details, see [this page](https://www.evm.codes/precompiled#0x01?fork=london).

### SHA2-256

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000002 | 60 | data | hash |

SHA2-256 is the hash function used in Bitcoin. For details, see [this page](https://www.evm.codes/precompiled#0x02?fork=london)

### RIPEMD-160

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000003 | 600 | data | hash |

A hash function. For details, see [this page](https://www.evm.codes/precompiled#0x03?fork=london).

### Identity

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000004 | 15 | data | data |

Identity copies and returns input data. For details, see [this page](https://www.evm.codes/precompiled#0x04?fork=london).

### Modexp

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000005 | 200 | Bsize, Esize, Msize, B, E, M | value |

Modexp is an arbitrary-precision exponentiation under modulo. For details, see [this page](https://www.evm.codes/precompiled#0x05?fork=london).

### EcAdd

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000006 | 150 | x1, x2, y1, y2 | x, y |

EcAdd is the point addition (ADD) on the elliptic curve alt_bn128. For details, see [this page](https://www.evm.codes/precompiled#0x06?fork=london).

### EcMul

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000007 | 6000 | x1, x2, s | x, y |

EcMul is the scalar multiplication (MUL) on the elliptic curve alt_bn128. For details, see [this page](https://www.evm.codes/precompiled#0x07?fork=london).

### EcPairing

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000008 | 45000 | x1, y1, x2, y2, …, xk, yk | success |

EcPairing is the bilinear function on groups on the elliptic curve `alt_bn128`. For details, see [this page](https://www.evm.codes/precompiled#0x08?fork=london).

### Blake2f

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000009 | 0 | rounds, h, m, t, f | h |

Blake2f is the compression function F used in the BLAKE2 cryptographic hashing algorithm. For details,  see [this page](https://www.evm.codes/precompiled#0x09?fork=london).

### GetHeader

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000102 | 42000 | hash | header view |

Get the header of a relayed CKB block header by hash.

#### Inputs

<details><summary>Click here to view ABI</summary>

```solidity
struct Input {
    bytes32 hash;
}
```

</details>

#### Output

<details><summary>Click here to view ABI</summary>

```solidity
struct Header {
    uint32 version;
    uint32 compactTarget;
    uint64 timestamp;
    uint64 number;
    uint64 epoch;
    bytes32 parentHash;
    bytes32 transactionsRoot;
    bytes32 proposalsHash;
    bytes32 extraHash;
    bytes32 dao;
    uint128 nonce;
    bytes extension;
    bytes32 blockHash;
}
```
</details>

#### Example

<details><summary>Click here to view example</summary>

```solidity
contract GetCkbHeader {
    event GetHeaderEvent(CKBHeader);
    event NotGetHeaderEvent();

    int8 ret;

    function getHeader(bytes32 blockHash) public returns (CKBHeader memory) {
        address get_header_addr = address(0x0102);
        (bool isSuccess, bytes memory res) = get_header_addr.staticcall(
            abi.encode(blockHash)
        );

        CKBHeader memory header;
        if (isSuccess) {
            header = abi.decode(res, (CKBHeader));
            emit GetHeaderEvent(header);
        } else {
            emit NotGetHeaderEvent();
        }
        return header;
    }
}

```

</details>

### GetCell

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000103 | 42000 | out point | cell info |

Get the relayed cell information by out point.

#### Inputs

<details><summary>Click here to view ABI</summary>

```solidity
struct OutPoint {
    bytes32 txHash;
    uint32 index;
}
```

</details>

#### Output

<details><summary>Click here to view ABI</summary>

```solidity
struct CellInfo {
    OutPoint outPoint;
    CellOutput output;
    bytes data;
}

struct CellOutput {
    uint64 capacity;
    Script lock;
    Script[] type_;
}
```
</details>

#### Example

<details><summary>Click here to view example</summary>

```solidity
contract GetCkbCell {
    event GetCellEvent(OutPoint);
    event NotGetCellEvent();

    int8 ret;

    function getCell(bytes32 blockHash) public returns (CellInfo memory) {
        address get_cell_addr = address(0x0103);
        (bool isSuccess, bytes memory res) = get_cell_addr.staticcall(
            abi.encode(outPoint)
        );

        CellInfo memory cell;
        if (isSuccess) {
            cell = abi.decode(res, (CellInfo));
            emit GetCellEvent(cell);
        } else {
            emit NotGetCellEvent();
        }
        return cell;
    }
}

```

</details>

### CallCkbVm

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000104 | 300 | cell dep, args | big-endian bytes |

Call a script that runs in CKB-VM and return the execute result.

#### Inputs

<details><summary>Click here to view ABI</summary>

```solidity
struct CellDep {
    OutPoint outPoint;
    uint32   index;
}

struct InputArgs {
    bytes[] args;
}
```

</details>

#### Output

<details><summary>Click here to view ABI</summary>

```solidity
struct Result {
    int8 ret;
}
```

</details>

#### Example

<details><summary>Click here to view example</summary>

```solidity
contract CallCkbVm {
    event CallCkbVmEvent(int8);
    event NotGetCellEvent();

    int8 ret;

    function testCallCkbVm(
        bytes32 txHash,
        uint32 index,
        uint8 depType,
        bytes[] memory input_args
    ) public {
        OutPoint memory outPoint = OutPoint(txHash, index);
        (bool isSuccess, bytes memory res) = address(0x0104).staticcall(
            abi.encode(CellDep(outPoint, depType), input_args)
        );

        if (isSuccess) {
            ret = int8(uint8(res[0]));
            emit CallCkbVmEvent(ret);
        } else {
            emit NotGetCellEvent();
        }
    }

    function callCkbVm() public view returns (int8) {
        return ret;
    }
}

```

</details>

### CkbBlake2b

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000106 | 60 | data | hash |

Calculate the ckb-blake2b hash.

#### Inputs

<details><summary>Click here to view ABI</summary>

```solidity
struct Input {
    byte[] data;
}
```

</details>

#### Output

<details><summary>Click here to view ABI</summary>

```solidity
struct Output {
    bytes32 hash;
}
```
</details>

### CkbMbtVerify

| ADDRESS | MINIMUM GAS | INPUT | OUTPUT |
| --- | --- | --- | --- |
| 0x0000000000000000000000000000000000000107 | 56000 | verify proof payload | bool |

Verify the CKB merkle binary tree proof.

#### Inputs

<details><summary>Click here to view ABI</summary>

```solidity
struct VerifyProofPayload {
    uint8 verifyType;
    bytes32 transactionsRoot;
    bytes32 witnessesRoot;
    bytes32 rawTransactionsRoot;
    Proof proof;
}

struct Proof {
    uint32[] indices;
    bytes32[] lemmas;
    bytes32[] leaves;
}
```
If the verify_type is 0, the leaves should be in the rawTransactionsRoot, otherwise in the witnessesRoot.

</details>

#### Output

<details><summary>Click here to view ABI</summary>

```solidity
struct Output {
    bool ret;
}
```
</details>

#### Example

<details><summary>Click here to view example</summary>

```solidity
contract VerifyCMBTRoot {
    event VerifyCMBTRootEvent(bool);
    event NotVerifyCMBTRootEvent();

    int8 ret;

    function verifyCMBTRoot(VerifyProofPayload payload) public returns (bool) {
        address get_cell_addr = address(0x0107);
        (bool isSuccess, bytes memory res) = get_cell_addr.staticcall(
            abi.encode(payload)
        );

        if (isSuccess) {
            emit VerifyCMBTRootEvent(isSuccess);
        } else {
            emit NotVerifyCMBTRootEvent();
        }
        return isSuccess;
    }
}
```

</details>