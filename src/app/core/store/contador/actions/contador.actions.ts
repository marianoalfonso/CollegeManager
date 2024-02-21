import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

// acciones agrupadas
export const ContadorActions = createActionGroup({
    //source: nombre que le doy al grupo de acciones
    source: 'Contador',
    //nombre de las acciones
    events: {
        increase: emptyProps(), //sirve para indicar que no se recibe argumentos
        decrease: props<{ cantidad: number }>(), //recibimos parametro
    }
});

// // acciones individuales
// export const increase = createAction('increase');
// export const decrease = createAction('decrease', props<{ cantidad: number }>);

