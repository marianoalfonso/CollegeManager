import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EnrolmentsActions = createActionGroup({
  source: 'Enrolments',
  events: {
    'Load Enrolmentss': emptyProps(),
    'Load Enrolmentss Success': props<{ data: unknown }>(),
    'Load Enrolmentss Failure': props<{ error: unknown }>(),
  }
});
