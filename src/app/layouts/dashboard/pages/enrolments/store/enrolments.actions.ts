import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course, Enrolment, EnrolmentData, Student } from '../../../../models';

export const EnrolmentsActions = createActionGroup({
  source: 'Enrolments',
  events: {
    'Load Enrolments': emptyProps(),
    'Load Enrolments Success': props<{ data: Enrolment[] }>(),
    'Load Enrolments Failure': props<{ error: unknown }>(),
    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: Student[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Course[] }>(),
    'Load Courses Failure': props<{ error: unknown }>(),
    'Create Enrolment': props<{ data: EnrolmentData }>(),
    'Create Enrolment Success': props<{ data: Enrolment }>(),
    'Create Enrolment Failure': props<{ error: unknown }>(),
}});
