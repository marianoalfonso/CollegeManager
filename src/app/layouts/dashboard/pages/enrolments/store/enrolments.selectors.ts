import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrolments from './enrolments.reducer';

export const selectEnrolmentsState = createFeatureSelector<fromEnrolments.State>(
  fromEnrolments.enrolmentsFeatureKey
);
