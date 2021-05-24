const GPPToken = artifacts.require("./GPPToken.sol");

module.exports = function(deployer) {
	const name = "GPP Token";
	const symbol = "GPP";
	const decimals = 18;
  deployer.deploy(GPPToken, name, symbol, decimals);
};
