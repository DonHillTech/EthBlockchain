var Migrations = artifacts.require("./Migrations.sol");
var DrugApprover = artifacts.require("./DrugApprover.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(DrugApprover);
};