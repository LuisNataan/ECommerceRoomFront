import { state } from '@angular/animations';
import {Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { registerCustomerSuccess, registerCustomerFailure,
  registerSupplier, registerSupplierSuccess, registerSupplierFailure
} from './service.actions';

export interface State{
  token: string | null,
  errorMessage?: string,
  name: string | null
}

export const initialState: State = {
  token: null,
  name: null
}

const actionReducer = createReducer(
  initialState,
  on(registerCustomerSuccess, (state, {registerResponse}) => {
    return {
      ...state,
      token: registerResponse.responseMessage
    }
  }),
  on(registerCustomerFailure, (state, {error}) => {
    return {
      ...state,
      token: null,
      name: null,
      errorMessage: error.responseMessage
    }
  })
);
