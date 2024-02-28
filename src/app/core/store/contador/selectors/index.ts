import { createFeatureSelector, createSelector } from "@ngrx/store";
import { contadorReducer, ContadorState, featureName } from "../reducers";

export const selectContadorState = createFeatureSelector<ContadorState>(featureName);

export const selectorContadorValue = createSelector(selectContadorState, (state) => state.value );