---
title: Consensus
hide_title: true
sidebar_position: 2
---

import useBaseUrl from "@docusaurus/useBaseUrl";

# Overlord Consensus

## Design Overview

The core of Overlord design is to decouple transaction sequence from state consensus.

Suppose B(h, S, T) refers a block of height h that contains a state S and a set of ordered transactions T. In the second semantic of consensus, S is often understood as the state after the execution of T. This interpretation excludes that possibility that the execution module and the consensus module can parallel.

If S is viewed as the latest state created by the execution module when the consensus module starts to operate on B(h, S, T), the consensus module does not have to wait for the execution module to execute a new block, and the execution module can move forward with the ordered transactions. 

In this way, the consensus module can keep moving forward and organizing new transactions, meanwhile finalizing the latest state consensus of the execution module. The execution module can also continue executing the ordered transactions set until all the ordered transactions are completed.

### Protocol Description

In Overlord, we call a consensus block as a block, which contains Header and Body.

<img src={useBaseUrl("static/img/for-contributors/Figure 1 A block contains Header and Body.png")}/>

<p class="axon-anno">Figure 1 A block contains Header and Body</p>

* `height` a monotonically increasing value, equivalent to height;
- `prev_hash` hash of the previous block;
- `order_root` the Merkle Root of all pending transactions in the Body to be ordered;
- `state_root` represents the latest world state of the Merkle Patricia Tree (MPT) root;
- `confirm_roots` represents the set of `order_roots` executed from the `state_root` of the previous block to the `state_root` of the current block;
- `receipt_roots` records the `reconcert_roots` corresponding to each `order_root` that has been executed.
- `proof` proof of the previous block.

Overlord is the deterministic. Particularly, `proof` in the Header is  to verify the previous block, instead of the current one. Therefore, for the latest block, the proof that proves its legitimacy will be included in the next block that has not been produced yet. So how to verify the latest block? In fact, the honest nodes have already got the proof of the newest block and validated it before adding it on the blockchain. Therefore, blocks verified by honest nodes are valid and will not rollback. 

Thus, transactions are packaged for consensus. Once the consensus is reached, the consensus module adds the ordered transaction set to the queue for execution. The execution module processes the transaction set in sequence, and sends the `order_root` of the executed transaction set and the `stateRoot` to the consensus module after each execution. When the `Leader` assembles the transactions into a block, the latest `state_root` is taken as the latest state to be included in the consensus.

### Improvements

Overlord is an interpretation layer on top of the consensus algorithm. It decouples transaction sequence from state consensus by reinterpreting the consensus semantics, to achieve higher capacity in transaction processing. Theoretically, Overlord can be based on almost any BFT-like (Byzantine Fault Tolerance) algorithm. In Axon, specifically, Overlord is built on the improved [Tendermint](https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html).

The improvements we've made on Axon are in three major areas:

1. By applying aggregate signature on Tendermint, message complexity is reduced from $O(n^{2})$ to $O(n)$. Consequently, more consensus nodes are supported.
2. Add propose transaction area to the proposal, so that the synchronization is paralleled by and the consensus process of new transactions.
3. After receiving proposal, consensus nodes can prevote without waiting for block verification, and must get block verification result before voting precommit. Thus, block verification is paralleled by the prevote voting process.

#### Aggregate signature

In Tendermint, a node casts a prevote on a proposal upon receiving it. The prevote vote is then broadcast to other nodes across the network. The communication complexity at this moment is: $O(n^{2})$

Aggregate signature allows all the nodes to send prevote votes to a randomly specified Relayer node. The Relayer node collects the signatures it receives and computes the aggregate signature, then uses a bit vector to indicate the exact nodes involved. The aggregate signatures and the bit vector will be sent to other nodes. The precommit voting is done in a similar manner. As a result, the communication complexity can be reduced to: $O(n)$

But what if Relayer fails to send the aggregate signatures to the consensus nodes, or Relayer is evil and only sends the aggregate signature to a small portion of the consensus nodes, so the consensus can no longer work? 

This can be dismissed by a mechanism where honest nodes have to send nil vote in a timeout situation. A timer will be set immediately after a prevote vote is sent out. If a node does not receive any prevoteQC $^1$ within the timeout, it enters the pre-commit state and casts a nil precommit, then moves on to the next round. If everything goes well in the prevote stage, a timer will be set after precommit is proposed. If no precommitQC is received within the timeout, the node enters the next round.

#### Parallel Verification

Once a consensus node receives a proposal, it parallels the CompactBlock verification with the prevote vote, in order to get a complete transaction for verification. A node won't propose precommit until the prevote aggregate signature and the CompactBlock verification result are received.

## Overall Architecture

Overlord Consensus contains the following components:

- State Machine Replication (SMR): performs state transitions based on the input messages.
- State Store Module (State): stores the states of proposals, votes, etc.
- Timer: sets the timeout to trigger the state machine
- Write-Ahead Logging (WAL): reads and writes WAL logs

Upon receipt of a message, the state store module performs a basic check, whereafter the state is updated accordingly and the message is passed to the state machine. Additionally, to keep the consensus process active, a timer is needed to trigger the state machine once the timeout is reached. The state machine will send an event of the current state after a state transition. The state storage module and the timer listen to the event and start to process accordingly, such as WAL writing, votes-sending, and timer-setting. When the consensus process restarts, the state store module first reads from the WAL, then passes the data to the state machine. 

The overall architecture is illustrated below:

<img src={useBaseUrl("static/img/for-contributors/Figure 2 Overall architecture of Overlord Consensus.png")}/>

<p class="axon-anno">Figure 2 Overall architecture of Overlord Consensus</p>

### Consensus State Machine (SMR)

The state machine module is the core of Overlord. The main function is to control state changes and lock $^2$. When triggered by a message just arrived, it makes a state change according to the input and sends out the changed state as a new event. Implemented in real world, Overlord uses an optimized Tendermint state machine that applies BLS (Boneh–Lynn–Shacham) aggregate signature. 

#### Overlord‘s Working Process in Five Stages

**1 Proposal**

Nodes select a Leader of this round.

- **Leader**: Broadcasts a proposal.
- **Other nodes**: Set a timer T1 and send prevote votes to Relayer upon receipt of a proposal

**2 Prevote**

- **Relayer**: Sets a timer T2, aggregates the received prevote votes and generates a bit vector, then broadcasts the aggregated votes and bit vector to other nodes.
- **Other nodes**: Set a timer T2, check the validity of the aggregated prevote votes, generate PoLC $^3$ and send precommit votes.

**3 Pending**

- All node set a timer T3 and enter the precommit phase upon receipt of the proposal checksum results.

**4** **Precommit**

- **Relayer**: Sets a timer T4, aggregates the received precommit votes and generates a bit vector, then broadcast the aggregated votes and bit vector to other nodes.
- **Other nodes**: Set a timer T4 and check the validity of the aggregated precommit votes

**5 Submission**

- Each node submits the proposal.


The state transition of the consensus state machine is depicted below:

<img src={useBaseUrl("static/img/for-contributors/Figure 3 State transition in consensus state machine.png")}/>

<p class="axon-anno">Figure 3 State Transition in Consensus State Machine</p>

Prevote stage (2) and pending stage (3) are combined together to share a common timeout. After receiving the aggregate voting and checksum results, the state machine switches to the precommit stage (4).

### States in State Machine

The following states are stored in the state machine module:

- height: current height of the consensus
- round: current number of rounds of the consensus process
- step: current stage of the consensus process
- proposal_hash (optional): current hash of the consensus hash
- lock (optional): whether PoLC is reached

### State Store Module

The State Store Module (SSM) is the functional core of Overlord, mainly responsible for state storage, message broadcasting, block generation, and cryptographic operations. It verifies the messages sent from the network layer and determines whether the validated ones need to be included in WAL. Then it sends the messages to the state machine. The state storage module listens to the events sent from the state machine and handles them accordingly.

#### States in SSM

The following states are stored in SSM: 

- height: current height of the consensus
- round: current number of rounds of the consensus
- proposals: all the proposals of the current height cached
- votes: all the votes of the current height cached
- QCs: all the QCs of the current height cached
- authority_manage: manages the consensus list
- is_leader: indicates whether a node is a leader
- proof (optional): proof of the previous block
- last_commit_round (optional): round number of the last submission
- last_commit_proposal (optional): proposal submitted in the last round

#### Features

**Message Broadcasting**

When sending a message, based on the message and parameters, storage state module determines whether to broadcast the message to other nodes or send it to the Relayer.

**Block Generation**

When the state store module notices that a `NewRound` event has been sent from the state machine, it can determine whether itself is a block generation node by using a deterministic random number algorithm. If so, the node will make a proposal.

Deterministic random number algorithm: Because Overlord protocol accepts variable weights for block generation and voting, when determining whether it is the block generation node, a node normalizes the block generation weight and projects it over the entire `u64` range. The sum of the current `height` and `round` are employed as the random number seed, to determine which section in the `u64` range the generated random number falls into. The correlating node with this weight thus becomes the one to generate a new block.

**Cryptographic Operations**

Overlord performs the following cryptographic operations:

- Verify of newly received messages
- Verify aggregate signatures and examine if the weight exceeds upon receiving aggregate votes
- Sign a message when a proposal or vote is made
- Aggregate the received votes when the node itself is Relayer

#### State Storage Interface

### Timer

When the state machine runs into certain states, a timer needs to be set for the following operation, such as timeout message resending. The timer module listens for events sent by the state machine and sets the timer accordingly. When the timeout period elapses, the interface of the calling state machine module triggers a timeout. Timer and state storage are multiplexed with `SMREvent` and the interface.

### WAL

During the consensus process, some messages need to be written into WAL. When the consensus process restarts, the state store module first reads messages from WAL, then replies to the state before the restart. WAL module only interacts with state store module.


# Footnotes

1. QC refers to a Quorum Certificate. A quorum is the minimum number of votes that has to obtain in order to perform an operation. Quorum certificate is a proof that demonstrates a message (either a proposal or a block) has been verified by more than 2/3 nodes.
2. A validator precommits a block to which it is locked. A similar locking mechanism is described in [this paper](https://atrium.lib.uoguelph.ca/xmlui/handle/10214/9769) on Tendermint.
3. An abbreviation for “Proof of Lock Change”. Node can be permanently stuck at a lock for a variety of reasons, causing a lack of liveness in consensus which makes new consensus impossible. It is necessary to maintain liveness and to have a mechanism for changing locks, so that lock can be changed once PoLC is received.
