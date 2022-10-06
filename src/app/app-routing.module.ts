import { SupplierComponent } from './pages/supplier/supplier.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent,
  loadChildren: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  data: {
    pageTitle: 'Home'
  }
},
{
  path: 'customer',
  component: CustomerComponent,
  loadChildren: () => import('./pages/customer/customer.component').then(m => m.CustomerComponent),
  data: {
    pageTitle: 'Customer'
  }
},
{
  path: 'supplier',
  component: SupplierComponent,
  loadChildren: () => import('./pages/supplier/supplier.component').then(m => m.SupplierComponent),
  data: {
    pageTitle: 'Supplier'
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
