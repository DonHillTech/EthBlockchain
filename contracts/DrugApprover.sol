pragma solidity ^0.4.22;

contract DrugApprover {
  address owner;
  uint drugNumber;
  uint approvalCost;

  //All Drugs will have this structure 
    struct Drug {
        string drugName;
        uint drugNumber;
        uint price;
        uint status;
        address companyAddress;
        uint unitsAvailable;
        uint unitsSold;
        uint timeInSystem;
    }

  // Drugs will have these different status 
  enum DrugStatus {
        Waiting_Approval,
        Approved,
        Denied,
        Not_Available 
    }

  mapping (uint => Drug) public drugs;

// In order for certain things to happen with the drugs registered on the chain the owner must be involved 
  modifier isOwner () {
    require(msg.sender == owner);
    /*this means run the body of the function where the modifier is used: _; */
    _;
  }

  event drugSubmittal(uint drugNum);
  event Buy(uint drugNum);
  
  constructor() public{
    owner = msg.sender;
    drugNumber=0; 
    approvalCost=300;

  }

   // Drug must be an approved status in order to be sold     
  modifier approved (uint _drugNumber) {
    require(drugs[_drugNumber].status == uint (DrugStatus.Approved));
    _;
  }
  modifier available (uint _drugNumber) {
    require(drugs[_drugNumber].unitsSold < drugs[_drugNumber].unitsAvailable);
    _;
  }
  modifier amountPaid(uint _price) { require(msg.value >= _price); _;}

// function getRidOfDrug(uint _drugNumber){

// }
// Function to submit drugs 
  function submitDrugForApproval(string _name, uint _price, uint _unitsAvailable) public {
    emit drugSubmittal(drugNumber);
    drugs[drugNumber] = Drug({drugName: _name, unitsAvailable:_unitsAvailable, 
    drugNumber: drugNumber, price: _price, status: uint(DrugStatus.Waiting_Approval),
     companyAddress: msg.sender,  unitsSold:0, timeInSystem: now});
    drugNumber = drugNumber + 1;
  }

  
  function buyDrug(uint _drugNum)
    public
    payable
    approved(_drugNum)
    available(_drugNum)
    amountPaid(drugs[_drugNum].price)
  {
    emit Buy(_drugNum);
    // drugs[_drugNum].buyer = msg.sender;
    drugs[_drugNum].unitsSold++;
    drugs[_drugNum].unitsAvailable--;
    drugs[_drugNum].companyAddress.transfer(drugs[_drugNum].price);
  }

  // Approve Drug 
  function approveDrug(uint _drugNumber)
    public
    isOwner()
  {
    require(uint(drugs[_drugNumber].status) ==uint(DrugStatus.Waiting_Approval));
    drugs[_drugNumber].status= uint(DrugStatus.Approved);

  }


 // function to retrieve a drug
    function getDrug(uint _drugNumber) public view returns (string drugName, uint drugNum, uint price, uint status, address seller,
     address buyer, uint unitsSold, uint unitsAvailable) {
    drugName = drugs[_drugNumber].drugName;
    drugNum = drugs[_drugNumber].drugNumber;
    price = drugs[_drugNumber].price;
    status = uint(drugs[_drugNumber].status); 
    unitsSold = drugs[_drugNumber].unitsSold;
    unitsAvailable = drugs[_drugNumber].unitsAvailable;
    return (drugName, drugNum, price, status, seller, buyer, unitsSold, unitsAvailable);
  }



}
