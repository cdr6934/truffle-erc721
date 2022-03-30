const WeBaseNFT = artifacts.require("WeBaseNFT");

contract("WeBaseNFT", () => {
    it("Has been deployed successfully", async () => {
        const greeter = await WeBaseNFT.deployed(); 
        assert(greeter, "Contract was not deployed")
    })

    it("Will return a hello", async () => {
        const nft = await WeBaseNFT.deployed(); 
        const expected = "Hi!"
        const actual = await nft.sayHello(); 
        assert.equal(actual, expected, "Greeting came back correct"); 
    })

    it("Check to make sure the correct owner", async () => {
        const nft = await WeBaseNFT.deployed(); 
        const expected = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
        const actual = await nft.owner.call(); 
        assert.equal(actual, expected, "The owner is not correct"); 
    })
})