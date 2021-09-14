// Test if a new solution can be added for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');

contract('SolnSquareVerifier', accounts => {

    const account1 = accounts[0];
    const account2 = accounts[1];

    let proof = require('../../zokrates/code/square/proof.json');

    describe('Test - SolnSquareVerifier', function () {
        beforeEach(async function () {
            this.verifier = await SquareVerifier.new({ from: account1 });
            this.contract = await SolnSquareVerifier.new(this.verifier.address, { from: account1 });
        })

        it('Test if a new solution can be added for contract', async function () {
            const { proof: { a, b, c }, inputs: inputs } = proof;
            
            let key = await this.contract.getVerifierKey.call(proof['proof']['a'], proof['proof']['b'], proof['proof']['c'], inputs);

            let result = await this.contract.addSolution(2, account2, key);

            // Test event is emitted
            assert.equal(result.logs.length, 1, "No events were triggered.");
        })

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('Test if an ERC721 token can be minted for contract', async function () {
            const { proof: { a, b, c }, inputs: inputs } = proof;
            
            let totalSupply = (await this.contract.totalSupply.call()).toNumber();

            console.log(`${account2}, ${5}, ${a}, ${b}, ${c}, ${inputs}`)
            
            try
            {
                await this.contract.mintToken(account2, 5, a, b, c, inputs, {from: account1});
            }
            catch(e)
            {
                console.log(e);
            }
            

            let newTotalSupply = (await this.contract.totalSupply.call()).toNumber();

            assert.equal(totalSupply + 1, newTotalSupply, "Invalid proof result");
        })

    });
})