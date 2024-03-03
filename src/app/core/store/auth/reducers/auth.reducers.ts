import { createReducer, on } from "@ngrx/store";
import { User } from "../../../../layouts/models";
import { authActions } from "../actions/auth.actions";

export const featureName = "auth";

export interface authState {
    user: User | null;
}

const initialState: authState = {
    user: null,
}

// implementamos los metodos
export const authReducer = createReducer(initialState,
    on(authActions.setAuthUser, (state, action) => {
        return { //debemos devover un estado nuevo basado en el anterior
            ...state, //devolvemos el estado completo
            user: action.user, //pisamos el usuario dentro del estado
        };
    }),
    on(authActions.logout, () => initialState)
    );

