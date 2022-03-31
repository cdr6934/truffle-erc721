# Building ERC721 Contract with Truffle 
Most of this has been taken from the following [resources](https://trufflesuite.com/docs/truffle/quickstart.html)

## Project Start 
* Install truffle on machine globally 
```bash
npm install install -g truffle 
```

* Create a project 
```bash
truffle create rariable
```
* Add a contract to the contracts folder 

```
truffle create contract YourContractName 
```
In this case, we will just copy out from the wizard the various pieces we need for the specific ERC contract 

    * ERC-721 NFT - [contract](https://docs.openzeppelin.com/contracts/4.x/wizard)
* Create the migration file in migrations folder using the N_XXXX.js 
```javascript
const NftCollection = artifacts.require("NftCollection");

module.exports = function (deployer) {
  deployer.deploy(NftCollection);
};
```
* Update truffle-config.js file with blockchains

```json
   development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
```

* Compile the contracts 
```
truffle compile
```

* Migrate the contracts to the blockchain 
```
truffle migrate
```

* Write functions to test and ensure that the contract is creating NFTs. You can use the following [site](https://trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript.html#using-web3) to help understand the creation of the tests.  These are all using the Mocha test library with; instead of using describe you will be using contract function.
* Every interaction is going to be asynchronous.. instead of using Promise.prototype.then, take advantage of async/await syntax .


## Interacting with the Contract 
There are a few different ways to work with the console that will give one a better concept on how to interact with the contract 

### Remix IDE 
In order to use Remix and quickly have the ability to play with the contract use the following [package](https://www.npmjs.com/package/@remix-project/remixd) 

You can use the user interface on which the browser is connect that makes this straight forward to use. To start the server use: 
```bash
remixd -s ~/Documents/Web3/truffle-erc721 
```

### Truffle Console 
The [Truffle Console](https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts.html) provides the interface to test out the contract as well outside of using the ABI 

This is currently connected to wherever the contract has been placed. In this instance I have migrated the contracts to Ganache as a way to streamline the development of the contract and better understand its uses . 

```
truffle console
```

#### In order to find the accounts available for testing
```javascript 
const instance = await WeBaseNFT.deployed() 
instance
```
will output the contract details which can be useful to ensure that the contract returns something other than null. 


#### Create a token 
Just simply invoking the safeMint function 
```javascript
instance.safeMint("0x4eA9b25fDAB28fd4E7fC3581deF5C92d0E14544B","1E3D")
```
This will have created the NFT and that can be verified by 


### Get name of the contract 
instance.name()