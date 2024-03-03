import { createReducer, on } from "@ngrx/store";
import { ContadorActions } from "../actions/contador.actions";

export interface ContadorState {
    value: number,
}

export const featureName = 'nombre_Feature_Personalizado';

const initialState: ContadorState = {
    value: 0,
}

// en el reducer decidimos que hacer cuando se dispara una accion desde actions
// en el callback, recibo el estado anterior en state, y trabajo sobre eso
export const contadorReducer = createReducer<ContadorState>(
    initialState, 
    on(ContadorActions.increase, (state) => {
        return {
            ...state, //para traer todas las propiedades del estado
            value: state.value + 1,
        }
    }),
    on(ContadorActions.decrease, (state, action) => {
        return {
            ...state, //para traer todas las propiedades del estado
            value: state.value - action.cantidad,
        }
    })
);