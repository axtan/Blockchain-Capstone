# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 


## Install
```
npm install
```


## Zokrates

Square code
```
def main(private field a, field b) -> (field):
  field result = if a * a == b then 1 else 0 fi
  return result
```


Generate Verifier
```
zokrates compile -i ../square.code
zokrates setup
zokrates generate-proof
zokrates compute-witness -a $1 $2 #(change $1 and $2 to generate different proofs)
zokrates generate-proof
zokrates export-verifier

```


## Testing
```
#truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: TestERC721Mintable
    match erc721 spec
      ✓ should return total supply
      ✓ should get token balance
      ✓ should return token uri
      ✓ should transfer token from one owner to another and then from new to another one (125ms)
    have ownership properties
      ✓ should fail when minting when address is not contract owner (481ms)
      ✓ should return contract owner

  Contract: SolnSquareVerifier
    Test - SolnSquareVerifier
      ✓ Test if a new solution can be added for contract (48ms)
0xf17f52151EbEF6C7334FAD080c5704D77216b732, 5, 0x273d2a0828462ce16321db5c23227318eaab66f78bcbcb5451d85a747225d31f,0x20473b5d44b391d8102ba8a7bf6b1149b31304b19e29bb33482f5d33b2b36245, 0x28949238cab90cc773aa8d63b6612bb69d907b7c266d700bfb462cc568ad3393,0x23738b340cd903a9cba2fba2148b7a92aaa2e15f12b6d082faac4fab7cca1dfe,0x13b65e3c1d95669d73d108b49eb3c9cfb513231df3b23734a2450cb812bc6ce8,0x15329217296de4d4d73af47883bfcb989583ade4042a1cdcb739705361a9933c, 0x23649c164d7bab6a44728b929da7b613d820d704cf82bc5f9aceca33870e3bee,0x08fab874d5930a5e469c23efd79ccd2b175b53b0b013cc8d0a1ba84d85e14064, 0x0000000000000000000000000000000000000000000000000000000000000009,0x0000000000000000000000000000000000000000000000000000000000000001
      ✓ Test if an ERC721 token can be minted for contract (704ms)

  Contract: SquareVerifier
    ✓ Test verification with correct proof (600ms)
    ✓ Test verification with incorrect proof (568ms)


  10 passing (8s)




```

## Migrate
```
#truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9291583
   > block timestamp:     1631628762
   > account:             0x919c2dA8b72c14087DE1EfebcA3708D8aC9617b4
   > balance:             158.308120352455051065
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'SquareVerifier'
   --------------------------
   > block number:        9291585
   > block timestamp:     1631628767
   > account:             0x919c2dA8b72c14087DE1EfebcA3708D8aC9617b4
   > balance:             158.298486212455051065
   > gas used:            936051 (0xe4873)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00936051 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9291586
   > block timestamp:     1631628791
   > account:             0x919c2dA8b72c14087DE1EfebcA3708D8aC9617b4
   > balance:             158.266686362455051065
   > gas used:            3179985 (0x3085d1)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03179985 ETH

   -------------------------------------
   > Total cost:          0.04116036 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04326273 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x9673cb60387395e0f35499cbb367990734416d292efd86e46b3a2f43525801a6
   > Blocks: 2            Seconds: 16
   > contract address:    0x1224A03C485a1ea88D84F857F44E5cC1Ad9D2d7D
   > block number:        9291594
   > block timestamp:     1631628936
   > account:             0x919c2dA8b72c14087DE1EfebcA3708D8aC9617b4
   > balance:             158.307957352455051065
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================

   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0x079229ff9da020a7bfc6d093b33a87c671b4237614512e9897441a0f17b52faf
   > Blocks: 1            Seconds: 12
   > contract address:    0xbD77C3Ebb7302ea0E9A8B00FE6080A8B8D4A9905
   > block number:        9291596
   > block timestamp:     1631628966
   > account:             0x919c2dA8b72c14087DE1EfebcA3708D8aC9617b4
   > balance:             158.298139212455051065
   > gas used:            936051 (0xe4873)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00936051 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xffd03fdce40c1093e30ac6488b353f4a01179f9b31c26f13a8db7e70bb608277
   > Blocks: 1            Seconds: 12
   > contract address:    0xC79E438E8c52739b0c1795c308281b2a1538f79b
   > block number:        9291597
   > block timestamp:     1631628981
   > account:             0x919c2dA8b72c14087DE1EfebcA3708D8aC9617b4
   > balance:             158.264551362455051065
   > gas used:            3358785 (0x334041)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03358785 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04294836 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.04521373 ETH




```

## Contracts

SquareVerifier: 0xbD77C3Ebb7302ea0E9A8B00FE6080A8B8D4A9905
ABI: 
```
[{"constant":true,"inputs":[{"internalType":"uint256[2]","name":"a","type":"uint256[2]"},{"internalType":"uint256[2][2]","name":"b","type":"uint256[2][2]"},{"internalType":"uint256[2]","name":"c","type":"uint256[2]"},{"internalType":"uint256[2]","name":"input","type":"uint256[2]"}],"name":"verifyTx","outputs":[{"internalType":"bool","name":"r","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
```

SolnSquareVerifier: 0xC79E438E8c52739b0c1795c308281b2a1538f79b
ABI:
```
[{"inputs":[{"internalType":"address","name":"verifierAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"solutionAdded","type":"event"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_myid","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_myid","type":"bytes32"},{"internalType":"string","name":"_result","type":"string"},{"internalType":"bytes","name":"_proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"paused","type":"bool"}],"name":"setPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"uniqueSolutions","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"verifier","outputs":[{"internalType":"contract SquareVerifier","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"_address","type":"address"},{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"addSolution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256[2]","name":"a","type":"uint256[2]"},{"internalType":"uint256[2][2]","name":"b","type":"uint256[2][2]"},{"internalType":"uint256[2]","name":"c","type":"uint256[2]"},{"internalType":"uint256[2]","name":"input","type":"uint256[2]"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256[2]","name":"a","type":"uint256[2]"},{"internalType":"uint256[2][2]","name":"b","type":"uint256[2][2]"},{"internalType":"uint256[2]","name":"c","type":"uint256[2]"},{"internalType":"uint256[2]","name":"input","type":"uint256[2]"}],"name":"getVerifierKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"}]
```

## Etherscan 10 tokens created

https://rinkeby.etherscan.io/token/0xC79E438E8c52739b0c1795c308281b2a1538f79b

## Opensea

Collection:
https://testnets.opensea.io/collection/agallegos

Sold item (impossible to sold item in opensea with a revert transaction, in unit test is working. Maybe an outdated version of ERC721?):
https://testnets.opensea.io/assets/0xc79e438e8c52739b0c1795c308281b2a1538f79b/1

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
