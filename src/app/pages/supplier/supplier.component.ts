import { selectSupplierList } from './../../services/state/actions.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as ServiceActions from 'src/app/services/state/service.actions';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  title = 'supplier';

  public supplierForm!: FormGroup

  supplier$ = this.store.select(selectSupplierList)

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.supplierForm = this.formBuilder.group({
      name: [''],
      corporateName: [''],
      email: [''],
      phoneNumber: [''],
      einNumber: [''],
      city: [''],
      state: [''],
      streetName: [''],
      number: [''],
      zipCode: ['']
    });
  }

  createSupplier() {
    this.store.dispatch(ServiceActions.registerSupplier({
      supplier:
      {
        name: this.supplierForm.controls['name'].value,
        corporateName: this.supplierForm.controls['corporateName'].value,
        email: this.supplierForm.controls['email'].value,
        phoneNumber: this.supplierForm.controls['phoneNumber'].value,
        einNumber: this.supplierForm.controls['einNumber'].value,
        addressViewModel: {
          city: this.supplierForm.controls['city'].value,
          state: this.supplierForm.controls['state'].value,
          streetName: this.supplierForm.controls['streetName'].value,
          number: this.supplierForm.controls['number'].value,
          zipCode: this.supplierForm.controls['zipCode'].value
        }
      }
    }))
    alert('Supplier successfully registered.')
  }

}
