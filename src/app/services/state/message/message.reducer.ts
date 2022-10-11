import { createReducer, on, State } from "@ngrx/store";
import { retriveMessage } from "./message.actions";

export const initialState : string = '';

export const msgReducer = createReducer(
    initialState,
    on(retriveMessage, (state, {message}) => message)
)
