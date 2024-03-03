import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course, Student } from '../../../../../models';
import { EnrolmentsActions } from '../../store/enrolments.actions';
import { Observable } from 'rxjs';
import { selectEnrolmentCourses, selectEnrolmentsStudents } from '../../store/enrolments.selectors';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enrolment-dialog',
  templateUrl: './enrolment-dialog.component.html',
  styleUrl: './enrolment-dialog.component.scss'
})
export class EnrolmentDialogComponent {

  students$: Observable<Student[]>;
  courses$: Observable<Course[]>;
  enrolmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EnrolmentDialogComponent>,
    private store: Store,) {

      this.enrolmentForm = this.fb.group({
        studentId: this.fb.control(''),
        courseId: this.fb.control(''),
      })

      this.store.dispatch(EnrolmentsActions.loadStudents());
      this.store.dispatch(EnrolmentsActions.loadCourses());
      // le asigno valor a la variable students
      this.students$ = this.store.select(selectEnrolmentsStudents);
      this.courses$ = this.store.select(selectEnrolmentCourses);
  }

  onSubmit(): void {
    if(this.enrolmentForm.invalid) {
      this.enrolmentForm.markAllAsTouched();
    } else {
      this.store.dispatch(EnrolmentsActions.createEnrolment({ data: this.enrolmentForm.value }));
      this.dialogRef.close();
    }
  }

}
