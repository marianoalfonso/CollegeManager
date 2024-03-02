import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrolmentsActions } from './enrolments.actions';


@Injectable()
export class EnrolmentsEffects {

  loadEnrolmentss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrolmentsActions.loadEnrolmentss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => EnrolmentsActions.loadEnrolmentssSuccess({ data })),
          catchError(error => of(EnrolmentsActions.loadEnrolmentssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
