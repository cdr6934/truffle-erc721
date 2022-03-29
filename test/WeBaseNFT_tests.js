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
})