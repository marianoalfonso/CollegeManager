import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrolmentsActions } from './enrolments.actions';

export const enrolmentsFeatureKey = 'enrolments';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(EnrolmentsActions.loadEnrolmentss, state => state),
  on(EnrolmentsActions.loadEnrolmentssSuccess, (state, action) => state),
  on(EnrolmentsActions.loadEnrolmentssFailure, (state, action) => state),
);

export const enrolmentsFeature = createFeature({
  name: enrolmentsFeatureKey,
  reducer,
});

