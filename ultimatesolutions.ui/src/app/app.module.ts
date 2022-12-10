import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCustomerComponent } from './Customer/show-customer/show-customer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { NotFoundComponentComponentComponent } from './not-found-component-component/not-found-component-component.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCustomerDetailsComponent } from './Customer/create-customer-details/create-customer-details.component';
import { ToastrModule } from 'ngx-toastr';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowCustomerComponent,
    CreateCustomerComponent,
    NotFoundComponentComponentComponent,
    CreateCustomerDetailsComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
