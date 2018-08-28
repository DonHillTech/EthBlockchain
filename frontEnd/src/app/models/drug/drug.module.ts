import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DrugModule {
  drugName: string;
  unitsAvailable: number;
  drugNumber: number;
  price: number;
  status: number; // uint(DrugStatus.Waiting_Approval),
  companyAddress: string;
  unitsSold: number;
  timeInSystem: any;
 }
