import { authReducer } from "./auth/reducers/auth.reducers";
import { contadorReducer } from "./contador/reducers/contador.reducers";
import { featureName as contadorFeatureName } from "./contador/reducers/contador.reducers";
import { featureName as authFeatureName } from "./auth/reducers/auth.reducers";

// el appReducers es un objeto que contiene todos los reducers de la aplicacion
export const appReducers = {
    // contadorReducer
    [contadorFeatureName]: contadorReducer, //nombre definido en el reducer
    [authFeatureName]: authReducer, //nombre definido en el reducer
};
