import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { ShowCustomerComponent } from './Customer/show-customer/show-customer.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';
import { NotFoundComponentComponentComponent } from './not-found-component-component/not-found-component-component.component';

const routes: Routes = [
  {path:'', redirectTo:'customer', pathMatch:'full'},
  {path:'customer',component:ShowCustomerComponent},
  {path:'create',component:CreateCustomerComponent},
  {path:'update/:id',component:UpdateCustomerComponent},
  {path:'**',component:NotFoundComponentComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
