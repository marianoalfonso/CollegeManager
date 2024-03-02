import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrolment } from '../../../../models';

export const EnrolmentsActions = createActionGroup({
  source: 'Enrolments',
  events: {
    'Load Enrolments': emptyProps(),
    'Load Enrolments Success': props<{ data: Enrolment[] }>(),
    'Load Enrolments Failure': props<{ error: unknown }>(),
  }
});
