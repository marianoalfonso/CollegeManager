import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authState, featureName } from "../reducers/auth.reducers";

export const selectAuthState = createFeatureSelector<authState>(featureName);
export const selectAuthUser = createSelector(selectAuthState, (state) => state.user);