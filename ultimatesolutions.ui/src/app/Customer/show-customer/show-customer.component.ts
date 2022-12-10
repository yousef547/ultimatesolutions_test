import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from 'src/app/model/icustomer';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
  customers: ICustomer[]
  p = 1;
  count = 10;
  constructor(private _HttpRequestsService: HttpRequestService,private Toastr:ToastrService, private router: Router,private _activetedRouder: ActivatedRoute) {
    this.customers = [];
  }

  getCustomer() {
    this._HttpRequestsService.serviceGet('Customers').subscribe((res) => {
      for (var i = 0; i < res.length; i++) {
        this.customers.push(res[i])
      }
    })
  }

  deleteCustomer(id: number) {
    this._HttpRequestsService.serviceDelete(`Customers/${id}`).subscribe((res) => {
        console.log(res);
        this.reloadComponent();
        this.Toastr.info('Delete Customer', 'success!');

     
    })
  }

  reloadComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'],{
      relativeTo:this._activetedRouder
    })
  }

  ngOnInit(): void {
    this.getCustomer();
  }

}
