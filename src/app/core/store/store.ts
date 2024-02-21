import { contadorReducer, featureName } from "./contador/reducers/contador.reducers";

// el appReducers es un objeto que contiene todos los reducers de la aplicacion
export const appReducers = {
    // contadorReducer
    [featureName]: contadorReducer
};
