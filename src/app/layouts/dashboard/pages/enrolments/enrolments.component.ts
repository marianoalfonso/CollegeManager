import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { enrolmentsService } from './enrolments.service';
import { EnrolmentsActions } from './store/enrolments.actions';
import { selectEnrolments, selectEnrolmentsIsLoading } from './store/enrolments.selectors';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EnrolmentDialogComponent } from './components/enrolment-dialog/enrolment-dialog.component';
import { Enrolment } from '../../../models';
import { OnInitEffects } from '@ngrx/effects';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-enrolments',
  templateUrl: './enrolments.component.html',
  styleUrl: './enrolments.component.scss'
})
export class EnrolmentsComponent implements OnInit {
  enrolments$: any;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private matDialog: MatDialog,
    private loadingService: LoadingService,
    private enrolmentsService: enrolmentsService,
    ) {
      this.enrolments$ = this.store.select(selectEnrolments);
      this.isLoading$ = this.store.select(selectEnrolmentsIsLoading);
      this.store.dispatch(EnrolmentsActions.loadEnrolments());
  }

  displayedColumns: string[] = [
    'id',
    'student',
    'course',
  ];
  dataSource: Enrolment[] = [];

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);

    // uso el forkJoin para futuras modificaciones
    // donde deba manejar varios observables
    this.enrolmentsService.getEnrolments().subscribe({
      // this.studentService.getStudents().subscribe({
      // el value recibe un array de arrays,
      // donde el primer elemento es el array de Roles y el segundo el de Students
      next: (value) => {
        this.dataSource = value;
      },
      error: (err) => {},
      complete: () => this.loadingService.setIsLoading(false),
    });
  }

  createEnrolment(): void {
    this.matDialog.open(EnrolmentDialogComponent);
  }

}
