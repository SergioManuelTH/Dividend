const Dividend = artifacts.require("Dividend");

module.exports = function(deployer) {
  deployer.deploy(Dividend,'TESTCOIN'); //si el contructor del contrato tiene args de entrada: deployer.deploy(Hello,'arg1', ..)
};
