import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EnrolmentsActions = createActionGroup({
  source: 'Enrolments',
  events: {
    'Load Enrolments': emptyProps(),
    'Load Enrolments Success': props<{ data: unknown }>(),
    'Load Enrolments Failure': props<{ error: unknown }>(),
  }
});
