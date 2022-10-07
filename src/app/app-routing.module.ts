import { SupplierComponent } from './pages/supplier/supplier.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'customer', component: CustomerComponent },
{ path: 'supplier', component: SupplierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
