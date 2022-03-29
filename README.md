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

* Write functions to test and ensure that the contract is creating NFTs. You can use the following [site](https://trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript.html#using-web3) to help understand the creation of the tests. 