import { createAction, props } from "@ngrx/store";

export const retriveMessage = createAction(
    '[Message String] Get Message Success',
    props<{ message : string}>()
);
