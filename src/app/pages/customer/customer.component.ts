import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectCustomerList } from 'src/app/services/state/actions.selector';
import * as ServiceActions from 'src/app/services/state/service.actions';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title = 'customer';

  public customerForm!: FormGroup

  customers$ = this.store.select(selectCustomerList);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phoneNumber: [''],
      city: [''],
      state: [''],
      streetName: [''],
      number: [''],
      zipCode: ['']

    });
  }

  createCustomer() {
    this.store.dispatch(ServiceActions.registerCustomer(
      {
        customer: {
          name: this.customerForm.controls['name'].value,
          email: this.customerForm.controls['email'].value,
          phoneNumber: this.customerForm.controls['phoneNumber'].value,
          addressViewModel: {
            city: this.customerForm.controls['city'].value,
            state: this.customerForm.controls['state'].value,
            streetName: this.customerForm.controls['streetName'].value,
            number: this.customerForm.controls['number'].value,
            zipCode: this.customerForm.controls['zipCode'].value
          }
        }
      }))
    alert('Customer successfully registered.')
  }
}
