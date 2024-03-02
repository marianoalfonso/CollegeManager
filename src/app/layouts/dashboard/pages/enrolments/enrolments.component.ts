import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { enrolmentsService } from './enrolments.service';
import { EnrolmentsActions } from './store/enrolments.actions';
import { selectEnrolments, selectEnrolmentsIsLoading } from './store/enrolments.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enrolments',
  templateUrl: './enrolments.component.html',
  styleUrl: './enrolments.component.scss'
})
export class EnrolmentsComponent {
  enrolments$: any;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store,) {
      this.enrolments$ = this.store.select(selectEnrolments);
      this.isLoading$ = this.store.select(selectEnrolmentsIsLoading);
      this.store.dispatch(EnrolmentsActions.loadEnrolments());
  }

}
