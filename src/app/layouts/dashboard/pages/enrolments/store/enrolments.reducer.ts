import { createFeature, createReducer, on } from '@ngrx/store';
import { Enrolment } from '../../../../models';
import { EnrolmentsActions } from './enrolments.actions';

export const enrolmentsFeatureKey = 'enrolments';

export interface State {
  enrolments: Enrolment[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  enrolments: [], //para iniciar, va a ser un array vacio
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  // al iniciar, devuelvo el estado cambiandole el valor de loading
  on(EnrolmentsActions.loadEnrolments, (state) => ({ ...state, loading: true })),
  // en caso de no haber error, cargamos el array con los datos del Actions.data
  on(EnrolmentsActions.loadEnrolmentsSuccess, (state, action) => ({ ...state, loading: false, enrolments: action.data })),
  // si hay error, lo recuperamos de action.error
  on(EnrolmentsActions.loadEnrolmentsFailure, (state, action) => ({ ...state, loading: false, error: action.error })),
);

export const enrolmentsFeature = createFeature({
  name: enrolmentsFeatureKey,
  reducer,
});

