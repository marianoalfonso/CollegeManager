import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrolments from './enrolments.reducer';

export const selectEnrolmentsState = createFeatureSelector<fromEnrolments.State>(
  fromEnrolments.enrolmentsFeatureKey
);

// este selector sirve para acceder directamente al array de inscripciones
export const selectEnrolments = createSelector(selectEnrolmentsState, (state) => state.enrolments);

export const selectEnrolmentsIsLoading = createSelector(selectEnrolmentsState, (state) => state.loading);

// con este selector, de todo el objeto extraemos solament el array de estudiantes
export const selectEnrolmentsStudents = createSelector(selectEnrolmentsState, (state) => state.students);

// con este selector, de todo el objeto extraemos solament el array de estudiantes
export const selectEnrolmentCourses = createSelector(selectEnrolmentsState, (state) => state.courses); 