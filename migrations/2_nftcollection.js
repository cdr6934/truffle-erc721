const WeBaseNFT = artifacts.require("WeBaseNFT");

module.exports = function (deployer) {
  deployer.deploy(WeBaseNFT);
};
