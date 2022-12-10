import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  countDetails: any[];
  DetailsForm!:FormGroup;
  result:any;
  constructor(private fb: FormBuilder, private toastr: ToastrService,private _HttpRequestsService: HttpRequestService) {
    this.countDetails = [0]
  }




  creatForm(){
    this.DetailsForm = this.fb.group(
      {
        code:[null,Validators.required],
        name: [null,Validators.required],
        mobile: [null,Validators.required],
        description: [null,Validators.required],
        customerDetailsVM: this.fb.array([this.CustomerDetails()])
      }
    );
  }

  get details() {
    return this.DetailsForm.get("customerDetailsVM") as FormArray;
  }

CustomerDetails() {

  return this.fb.group({
    'city': [null,Validators.required],
    'zone': [null,Validators.required],
    'street': [null,Validators.required],
    'buliding': [null,Validators.required],
    'floor': [null,Validators.required],
  })
}

  addDetails() {
    var arr = this.DetailsForm.get("customerDetailsVM") as FormArray
      arr.push(this.CustomerDetails());
  }

  delatetDetails(index: number) {
    if(this.DetailsForm.value.customerDetailsVM.length != 1){
      this.details.removeAt(index)
    }else {
      this.toastr.error('pls enter details', 'Error!');

    }

  }

  submitCustomer() {
    if (this.DetailsForm.invalid) {
            return
    }

    this._HttpRequestsService.servicePost('Customers', this.DetailsForm.value).subscribe((data) => {
      if (data.status) {
        this.toastr.info('Create Customer', 'success!');
        this.DetailsForm.reset()
      }
    });
  }
  ngOnInit(): void {
    this.creatForm();
  }

}
