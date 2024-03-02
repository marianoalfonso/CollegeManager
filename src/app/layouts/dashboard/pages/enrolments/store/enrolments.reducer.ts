import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrolmentsActions } from './enrolments.actions';

export const enrolmentsFeatureKey = 'enrolments';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(EnrolmentsActions.loadEnrolments, state => state),
  on(EnrolmentsActions.loadEnrolmentsSuccess, (state, action) => state),
  on(EnrolmentsActions.loadEnrolmentsFailure, (state, action) => state),
);

export const enrolmentsFeature = createFeature({
  name: enrolmentsFeatureKey,
  reducer,
});

