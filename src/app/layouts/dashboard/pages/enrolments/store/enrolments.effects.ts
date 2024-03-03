import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrolmentsActions } from './enrolments.actions';
import { enrolmentsService } from '../enrolments.service';
import { StudentsService } from '../../students/students.service';
import { CoursesService } from '../../courses/courses.service';


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

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrolmentsActions.loadStudents),
        concatMap(() => this.studentsService.getAllStudents().pipe(
          map((resp) => EnrolmentsActions.loadStudentsSuccess({ data: resp })),
          catchError((error) => {
             return of(EnrolmentsActions.loadStudentsFailure({ error }))
          })
        )
      )
    );
  });

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrolmentsActions.loadCourses),
        concatMap(() => this.coursesService.getAllCourses().pipe(
          map((resp) => EnrolmentsActions.loadCoursesSuccess({ data: resp })),
          catchError((error) => {
            return of(EnrolmentsActions.loadCoursesFailure({ error }))  
          })
      ))
    );
  });

  createEnrolment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrolmentsActions.createEnrolment),
        concatMap(() => this.enrolmentsService.getEnrolments().pipe(
          map((resp) => EnrolmentsActions.loadEnrolmentsSuccess({ data: resp })),
          catchError((error) => {
            return of(EnrolmentsActions.loadCoursesFailure({ error }))
          })
        ))
    );
  });


  constructor (
    private actions$: Actions,
    private enrolmentsService: enrolmentsService,
    private studentsService: StudentsService,
    private coursesService: CoursesService,) {

    }
} 
