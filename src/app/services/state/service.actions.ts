import { createAction, props } from "@ngrx/store";
import { ResponseModel } from "src/app/interfaces/response/response.model";
import { Customer } from "src/app/interfaces/customer.model";
import { Supplier } from "src/app/interfaces/supplier.model";


export const registerCustomer = createAction(
  '[Customer] Create Customer',
  props<{ customer: Customer }>()
)

export const registerCustomerSuccess = createAction(
  '[ResponseModel] Register Success',
  props<{ registerResponse: ResponseModel }>()
);

export const registerCustomerFailure = createAction(
  '[ResponseModel] Register Failure',
  props<{ error: ResponseModel }>()
);

export const registerSupplier = createAction(
  '[Supplier] Create Supplier',
  props<{ supplier: Supplier }>()
)

export const registerSupplierSuccess = createAction(
  '[ResponseModel] Register Success',
  props<{ registerResponse: ResponseModel }>()
);

export const registerSupplierFailure = createAction(
  '[ResponseModel] Register Failure',
  props<{ error: ResponseModel }>()
);

export const getCustomers = createAction(
  '[Customer List/API] Get Customer Success',
  props<{customers: ReadonlyArray<Customer>}>()
);

export const getSuppliers = createAction(
  '[Supplier List/API] Get Supplier Success',
  props<{suppliers: ReadonlyArray<Supplier>}>()
);
