import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { enrolmentsService } from './enrolments.service';
import { EnrolmentsActions } from './store/enrolments.actions';
import { selectEnrolments, selectEnrolmentsIsLoading } from './store/enrolments.selectors';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EnrolmentDialogComponent } from './components/enrolment-dialog/enrolment-dialog.component';

@Component({
  selector: 'app-enrolments',
  templateUrl: './enrolments.component.html',
  styleUrl: './enrolments.component.scss'
})
export class EnrolmentsComponent {
  enrolments$: any;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private matDialog: MatDialog
    ) {
      this.enrolments$ = this.store.select(selectEnrolments);
      this.isLoading$ = this.store.select(selectEnrolmentsIsLoading);
      this.store.dispatch(EnrolmentsActions.loadEnrolments());
  }

  createEnrolment(): void {
    this.matDialog.open(EnrolmentDialogComponent);
  }

}
