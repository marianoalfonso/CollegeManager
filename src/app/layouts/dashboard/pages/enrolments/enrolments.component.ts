import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { enrolmentsService } from './enrolments.service';
import { EnrolmentsActions } from './store/enrolments.actions';

@Component({
  selector: 'app-enrolments',
  templateUrl: './enrolments.component.html',
  styleUrl: './enrolments.component.scss'
})
export class EnrolmentsComponent {

  constructor(
    private enrolmentsService: enrolmentsService,
    private store: Store,) {
      this.store.dispatch(EnrolmentsActions.loadEnrolments());
  }

}
