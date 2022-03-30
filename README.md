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
* Every intereaction is going to be asynchronous.. instead of using Promise.prototype.then, take advantage of async/await syntax .

In order to use Remix and quickly have the ability to play with the contract use the following [package](https://www.npmjs.com/package/@remix-project/remixd) 
```

```