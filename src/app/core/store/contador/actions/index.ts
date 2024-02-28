import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

// acciones definidas por grupo
export const ContadorActions = createActionGroup({
    // nombre que le doy al grupo de acciones
    source: 'Contador',
    events: {
        incrementar: emptyProps(), //emptyProps indica que el evento no recibe argumentos, caso contrario usamos Props(. . .)
        decrementar: props<{ cantidad: number }>(),
    },
});

// // tambien puede definirse como acciones individuales
// export const incrementar = createAction('incrementar');
// export const decrementar = createAction('decrementar', props<{ cabudad: number}>());

