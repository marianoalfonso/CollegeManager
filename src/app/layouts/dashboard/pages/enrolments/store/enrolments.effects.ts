import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrolmentsActions } from './enrolments.actions';
import { enrolmentsService } from '../enrolments.service';


@Injectable()
export class EnrolmentsEffects {

  loadEnrolmentss$ = createEffect(() => {
    return this.actions$.pipe(
      // las acciones se devuelven como un observable
      // el offType nos sirve para filtrar acciones
      ofType(EnrolmentsActions.loadEnrolments),
      // concatMap es para encadenar observables
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.enrolmentsService.getEnrolments().pipe(
          map((data) => EnrolmentsActions.loadEnrolmentsSuccess({ data })),
          catchError(error => of(EnrolmentsActions.loadEnrolmentsFailure({ error }))))
      )
    );
  });


  constructor(
    private actions$: Actions,
    private enrolmentsService: enrolmentsService) {}
}
