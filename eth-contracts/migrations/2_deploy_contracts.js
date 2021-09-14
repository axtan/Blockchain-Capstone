// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier)
    .then(() => deployer.deploy(SolnSquareVerifier, SquareVerifier.address)).then( async () => {
      var contract = await SolnSquareVerifier.deployed();

      //var account = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'; // development creator
      var account = '0x919c2dA8b72c14087DE1EfebcA3708D8aC9617b4'; // rinkey creator

      var proof = require('../../zokrates/code/square/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 1, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof2/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 2, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof3/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 3, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof4/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 4, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof5/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 5, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof6/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 6, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof7/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 7, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof8/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 8, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof9/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 9, a, b, c, inputs, {from:account});

      var proof = require('../../zokrates/code/square/proof10/proof.json');
      var { proof: { a, b, c }, inputs: inputs } = proof;
      await contract.mintToken(account, 10, a, b, c, inputs, {from:account});
    });
}
