import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectCustomers = createFeatureSelector('customer');
export const selectSuppliers = createFeatureSelector('supplier');

export const selectCustomerList = createSelector(
  selectCustomers,
  (customers) => {
    return customers;
  }
);

export const selectSupplierList = createSelector(
  selectSuppliers, (suppliers) => {
    return suppliers;
  }
);


