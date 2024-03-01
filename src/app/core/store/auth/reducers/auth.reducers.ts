import { createReducer } from "@ngrx/store";
import { User } from "../../../../layouts/models";

export const featureName = "auth";

export interface authState {
    user: User | null;
}

const initialState: authState = {
    user: null,
}

export const authReducer = createReducer(initialState);

