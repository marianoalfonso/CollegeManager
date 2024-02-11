import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

// angular material imports
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; //envoltura del form
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { RouterModule } from '@angular/router';
import { StudentsService } from './students.service';
import { MatIconModule } from '@angular/material/icon';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent,
    StudentDetailComponent,
    StudentDialogComponent,
  ],
  imports: [
    CommonModule,
    // angular material imports
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,

    ReactiveFormsModule,
    // importo los pipe personalizados
    SharedModule,
    RouterModule,

    StudentsRoutingModule,
  ],
  exports: [
    StudentsComponent,
  ],
  providers: [
    StudentsService,
  ]
})
export class StudentsModule { }
