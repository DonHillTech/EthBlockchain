import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;

const tokenAbi = require('../../../../build/contracts/DrugApprover.json');
@Injectable({
providedIn: 'root'
})
export class EthcontractService {
private web3Provider: null;
private contracts: {};

constructor() {

if (typeof window.web3 !== 'undefined') {
this.web3Provider = window.web3.currentProvider;
} else {
  // Using truffle develop test network so 9545 change if using something else
this.web3Provider = new Web3.providers.HttpProvider('http://localhost:9545');
}
window.web3 = new Web3(this.web3Provider);
}


submitDrugForApproval(
_drugName,
_price,
_unitsAvailable
) {

return new Promise((resolve, reject) => {
const drugApproverContract = TruffleContract(tokenAbi);
drugApproverContract.setProvider(this.web3Provider);
drugApproverContract.deployed().then(function(instance) {
return instance.submitDrugForApproval(
_drugName, _price, _unitsAvailable);
}).then(function(status) {
if ( status ) {
return resolve({status: true});
}
}).catch(function(error) {
console.log(error);
return reject('Error in SubmittingDrugForApproval service call');
});
});
}
}
