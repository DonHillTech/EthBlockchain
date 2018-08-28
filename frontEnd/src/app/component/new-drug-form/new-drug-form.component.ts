import { Component, OnInit } from '@angular/core';
import {Drug} from '../../models/drug';
import { EthcontractService } from '../../services/ethcontract.service';
@Component({
  selector: 'app-new-drug-form',
  templateUrl: './new-drug-form.component.html',
  styleUrls: ['./new-drug-form.component.css']
})
export class NewDrugFormComponent implements OnInit {

  newDrug: Drug = {
    drugName: '',
    unitsAvailable: 0,
    drugNumber: -1,
    price: 0,
    status: 0, // uint(DrugStatus.Waiting_Approval),
    companyAddress: '',
    unitsSold: 0,
    timeInSystem: null
  };
  constructor(private ecService: EthcontractService ) { }

  // function to submit form fields
  submitDrug() {
    if (this.newDrug.drugName !== '') {
    console.log(this.newDrug);
    this.ecService.submitDrugForApproval(
      this.newDrug.drugName,
      this.newDrug.price,
      this.newDrug.unitsAvailable
      ).then(function() {
        console.log('Success called on chain function');
        this.newDrug = {
          drugName: '',
          unitsAvailable: 0,
          drugNumber: -1,
          price: 0,
          status: 0, // uint(DrugStatus.Waiting_Approval),
          companyAddress: '',
          unitsSold: 0,
          timeInSystem: null
        };
   //  that.initAndDisplayAccount();
      }).catch(function(error) {
      console.log(error);
      this.newDrug = {
        drugName: '',
        unitsAvailable: 0,
        drugNumber: -1,
        price: 0,
        status: 0, // uint(DrugStatus.Waiting_Approval),
        companyAddress: '',
        unitsSold: 0,
        timeInSystem: null
      };
      // that.initAndDisplayAccount();
      });
      }
    }

  ngOnInit() {
  }
}

