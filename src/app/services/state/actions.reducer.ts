import { createReducer, on } from '@ngrx/store';
import * as ServiceActions from './service.actions';
export interface State {
  token: string | null,
  errorMessage?: string,
  name: string | null
}

export const initialState: State = {
  token: null,
  name: null
}

export const actionReducer = createReducer(
  initialState,
  on(ServiceActions.registerCustomerSuccess, (state, { registerResponse }) => {
    return {
      ...state,
      token: registerResponse.responseMessage
    }
  }),
  on(ServiceActions.registerCustomer, (state, { customer }) => {
    return {
      ...state,
      customer
    }
  }),
  on(ServiceActions.registerCustomerFailure, (state, { error }) => {
    return {
      ...state,
      token: null,
      name: null,
      errorMessage: error.responseMessage
    }
  }),
  on(ServiceActions.registerSupplierSuccess, (state, { registerResponse }) => {
    return {
      ...state,
      token: registerResponse.responseMessage
    }
  }),
  on(ServiceActions.registerSupplier, (state, { supplier }) => {
    return {
      ...state,
      supplier
    }
  }),
  on(ServiceActions.registerSupplierFailure, (state, { error }) => {
    return {
      ...state,
      token: null,
      name: null,
      errorMessage: error.responseMessage
    }
  })
);

