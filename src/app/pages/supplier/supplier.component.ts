import { SupplierService } from './../../services/state/supplier/supplier.service';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
title = 'supplier';
  public supplierForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private supplierService: SupplierService
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
    let supplier: any = {
      Name: this.supplierForm.controls['name'].value,
      CorporateName: this.supplierForm.controls['corporateName'].value,
      Email: this.supplierForm.controls['email'].value,
      PhoneNumber: this.supplierForm.controls['phoneNumber'].value,
      EinNumber: this.supplierForm.controls['einNumber'].value,
      AddressViewModel: {
        City: this.supplierForm.controls['city'].value,
        State: this.supplierForm.controls['state'].value,
        StreetName: this.supplierForm.controls['streetName'].value,
        Number: this.supplierForm.controls['number'].value,
        ZipCode: this.supplierForm.controls['zipCode'].value
      }
    }
    this.supplierService.register(supplier);
    alert('Supplier successfully registered.')
  }

}
