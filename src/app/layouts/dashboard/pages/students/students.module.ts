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

@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent,
  ],
  imports: [
    CommonModule,
    // angular material imports
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    StudentsComponent,
  ]
})
export class StudentsModule { }
