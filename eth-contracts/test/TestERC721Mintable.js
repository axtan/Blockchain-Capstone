var ERC721Mintable = artifacts.require('ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const account1   = accounts[0];
    const account2   = accounts[1];
    const account3   = accounts[2];
    const account4   = accounts[3];
    const account5   = accounts[4];
    const account6   = accounts[5];
    const account7   = accounts[6];
    const account8   = accounts[7];
    const account9   = accounts[8];
    const account10  = accounts[9];

    var owner;
    
    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account1});

            // TODO: mint multiple tokens
            await this.contract.mint(account1, 1, {from: account1});
            await this.contract.mint(account2, 2, {from: account1});
            await this.contract.mint(account3, 3, {from: account1});
            await this.contract.mint(account4, 4, {from: account1});
            await this.contract.mint(account5, 5, {from: account1});
            await this.contract.mint(account6, 6, {from: account1});
            await this.contract.mint(account7, 7, {from: account1});
            await this.contract.mint(account8, 8, {from: account1});
            await this.contract.mint(account9, 9, {from: account1});
            await this.contract.mint(account10, 10, {from: account1});
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call();
            assert.equal(totalSupply, 10, "Incorrect total supply");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf.call(account1);

            assert.equal(balance.toNumber(), 1, "Invalid token balance");  
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI.call(1);

            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1","Invalid token URI");
        })

        it('should transfer token from one owner to another and then from new to another one', async function () { 
            await this.contract.transferFrom(account1, account2, 1);
            owner = await this.contract.ownerOf.call(1);

            assert.equal(owner, account2, "Token wasn't transferred");

            await this.contract.transferFrom(account2, account3, 1, {from:account2});
            
            owner = await this.contract.ownerOf.call(1);
            assert.equal(owner, account3, "Token wasn't transferred");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.new({from: account1});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let bFailed = false;
            try {
                await this.contract.mint(account4, 5, {from: account2});
            } 
            catch (e) {
                bFailed = true;
            }
            
            assert.equal(bFailed, true, "Not contract owner can mint");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.owner.call({from: account1});

            assert.equal(owner, account1, "Could not get contract owner");
        })
    });
})
