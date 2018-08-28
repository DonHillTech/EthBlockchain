export class Drug {
    drugName: string;
    unitsAvailable: number;
    drugNumber?: number;
    price: number;
    status?: number; // uint(DrugStatus.Waiting_Approval),
    companyAddress?: string;
    unitsSold?: number;
    timeInSystem?: any;
}
