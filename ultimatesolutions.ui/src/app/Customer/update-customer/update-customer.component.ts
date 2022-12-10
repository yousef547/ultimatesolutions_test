import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpRequestService } from 'src/app/services/http-request.service';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerId: any;
  countDetails: any[];
  DetailsForm!:FormGroup;
  customer:any = false;
  constructor(private fb: FormBuilder,private router: Router,private _activetedRouder: ActivatedRoute, private toastr: ToastrService,private _HttpRequestsService: HttpRequestService) {
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


  getCustomer() {

    this.customerId = this._activetedRouder.snapshot.params["id"];
    this._HttpRequestsService.serviceGet(`Customers/${this.customerId}`).subscribe((res) => {
      this.customer=res;
      this.details.controls=[];
      for(var i =0;i<res.customerDetailsVM.length;i++){
        var obj=this.fb.group({
          "city": res.customerDetailsVM[i].city,
          "zone": res.customerDetailsVM[i].zone,
          "street": res.customerDetailsVM[i].street,
          "buliding": res.customerDetailsVM[i].buliding,
          "floor": res.customerDetailsVM[i].floor,
        })
        this.details.push(obj);
      }
      let contact = {
        code: this.customer.code,
        mobile: this.customer.mobile,
        name: this.customer.name,
        description: this.customer.description
       
      };
      this.DetailsForm.patchValue(contact);
    })
  }


  submitCustomer() {

    // console.log(this.DetailsForm.value);
    if (this.DetailsForm.invalid) {
      return
    }

    this._HttpRequestsService.servicePut(`Customers/${this.customerId}`, this.DetailsForm.value).subscribe((data) => {
      console.log(data);
      if (data.status) {
        this.toastr.info('Edit Customer', 'success!');
      }
    
    }, (error) => {
      this.toastr.error('Invalid !', 'Error!');
    });
  }


  ngOnInit(): void {
    this.creatForm();
    this.getCustomer();
  }

}
