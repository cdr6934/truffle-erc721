const WeBaseNFT = artifacts.require("WeBaseNFT");

contract("WeBaseNFT", accounts => {
  it("should put 10000 MetaCoin in the first account", () =>
  WeBaseNFT.deployed()
      .then(instance => instance.getBalance.call(accounts[0]))
      .then(balance => {
        assert.equal(
          balance.valueOf(),
          10000,
          "10000 wasn't in the first account"
        );
      }));
    });