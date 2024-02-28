import { contadorReducer, featureName } from './reducers';

export const appReducers = {
    [featureName]: contadorReducer, 
}