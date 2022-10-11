import { NotificationService } from './../../services/notifications.service';
import { Supplier } from './../../interfaces/supplier.model';
import { selectSupplierList } from './../../services/state/actions.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as ServiceActions from 'src/app/services/state/service.actions';
import { SupplierService } from 'src/app/services/state/supplier/supplier.service';


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
    private store: Store,
    private supplierService: SupplierService,
    private notificationService: NotificationService
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

    this.notificationService.createHubConnection();
    this.notificationService.startHubConnection();
    this.notificationService.getCustomerNotification();
    this.createSupplier();

  }

  createSupplier() {
    let supplier: Supplier = {
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
    this.supplierService.register(supplier).then(s => {
      this.store.dispatch(ServiceActions.registerSupplier({ supplier }))
    });
    alert('Supplier successfully registered.')
  }
}
