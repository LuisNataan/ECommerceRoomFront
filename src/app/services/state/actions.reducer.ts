import { createReducer, on } from '@ngrx/store';
import * as CustomerActions from './service.actions';
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
  on(CustomerActions.registerCustomerSuccess, (state, { registerResponse }) => {
    return {
      ...state,
      token: registerResponse.responseMessage
    }
  }),
  on(CustomerActions.registerCustomer, (state, { customer }) => {
    return {
      ...state,
      customer
    }
  }),
  on(CustomerActions.registerCustomerFailure, (state, { error }) => {
    return {
      ...state,
      token: null,
      name: null,
      errorMessage: error.responseMessage
    }
  })
);

