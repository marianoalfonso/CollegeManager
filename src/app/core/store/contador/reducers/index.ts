// definimos como va a estar alojada la informacion en la aplicacion
import { createReducer, on } from "@ngrx/store";
import { ContadorActions } from "../actions";

export interface ContadorState {
    value: number;
}
export const featureName = 'contador';

const initialtate: ContadorState = {
    value: 10,
}

export const contadorReducer = createReducer<ContadorState>(initialtate, on(ContadorActions.incrementar, (state) => {
    return {
        value: state.value + 1,
    }
}));
