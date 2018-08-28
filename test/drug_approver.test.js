var DrugApprover = artifacts.require('DrugApprover')
contract('DrugApprover', function(accounts) {

    const owner = accounts[0]
    const pfizer = accounts[1]
    const bayer = accounts[2]
    const emptyAddress = '0x0000000000000000000000000000000000000000'

    var drugNumber
    const price = web3.toWei(1, "ether")

    it("should add a drug with provided name, price, and qty", async() => {
        const drugApprover = await DrugApprover.deployed();

        var eventEmitted = false;

        var event = drugApprover.drugSubmittal(0)
        await event.watch((err, res) => {
            drugNumber = 0; // res.args.drugNumber.toString(10);
            eventEmitted = true;
        })

        const name = "Viagra";

        await drugApprover.submitDrugForApproval(name, price, 100);

        const result = await drugApprover.getDrug.call(0)
        console.log(result[0]);
        console.log(result);

        assert.equal(result[0], name, 'the name of the last added item does not match the expected value')
        assert.equal(result[2], price, 'the price of the last added item does not match the expected value')
        assert.equal(eventEmitted, true, 'adding an drug should emit a drugSubmittal event')
    })
});