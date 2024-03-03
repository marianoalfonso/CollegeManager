import { createFeature, createReducer, on } from '@ngrx/store';
import { Course, Enrolment, Student } from '../../../../models';
import { EnrolmentsActions } from './enrolments.actions';

export const enrolmentsFeatureKey = 'enrolments';

export interface State {
  enrolments: Enrolment[];
  students: Student[];
  courses: Course[];
  loading: boolean;
  loadingStudents: boolean;
  loadingCourses: boolean;
  error: unknown;
}

export const initialState: State = {
  enrolments: [], //para iniciar, va a ser un array vacio
  students: [], //para iniciar, va a ser un array vacio
  courses: [], //para iniciar, va a ser un array vacio
  loading: false,
  loadingStudents: false,
  loadingCourses: false,
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
  on(EnrolmentsActions.loadStudents, (state) => {
    return {
      ...state,
      loadingStudents: true,
    }
  }),
  on(EnrolmentsActions.loadStudentsSuccess, (state, action) => {
    return {
      ...state,
      loadingStudents: false,
      students: action.data,
    }
  }),
  on(EnrolmentsActions.loadCourses, (state) => {
    return {
      ...state,
      loadingCourses: true,
    }
  }),
  on(EnrolmentsActions.loadCoursesSuccess, (state, action) => {
    return {
      ...state,
      loadingCourses: false,
      courses: action.data,
    }
  })
);

export const enrolmentsFeature = createFeature({
  name: enrolmentsFeatureKey,
  reducer,
});

