import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-persion',
  templateUrl: './add-edit-persion.component.html',
  styleUrls: ['./add-edit-persion.component.scss']
})
export class AddEditPersionComponent implements OnInit {
    dateSelect:any;
    formSendData:any;
    loginData: any;
    formServiceData: any;
    customerForm: FormGroup;
    couponRecord: any;
    finalvalue: number;
  constructor(public dialogRef: MatDialogRef<AddEditPersionComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
         public dialog: MatDialog, private formbulider: FormBuilder) { 

        this.dateSelect = {}
        this.formSendData = {}
        this.formServiceData = {}
       this.customerForm = this.formbulider.group({
        CustomerId: [null],
        FranchiseId: [null, [Validators.required]],
        CustomerName: [null, [Validators.required]],
        CustomerContactNo: [null, [Validators.required]],
        CustomerAddress: [null],
        DateOfBirth: [null],
        CustomerN: [null, [Validators.required]],
        City: [null],
        ContactTitle: [null],
        Region: [null],
        PostalCode: [null],
        Country: [null],
        Fax: [null],
        ContectName: [null]
        });
  }

  ngOnInit() {
  }
    onNoClick(): void {
        this.dialogRef.close();
    }
    // openSnackBar(message: string, action: string) {
    //     this._snackBar.open(message, action, {
    //         duration: 2000,
    //     });
    // }
    onSubmit(){

    }

}
