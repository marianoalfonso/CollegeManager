import { createFeatureSelector, createSelector } from "@ngrx/store";
import { contadorReducer, ContadorState, featureName } from "../reducers/contador.reducers";

export const selectContadorState = createFeatureSelector<ContadorState>(featureName);
export const selectcontadorValue = createSelector(selectContadorState,  (state) => state.value);