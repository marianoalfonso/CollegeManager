import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ReactiveFormsModule } from '@angular/forms';  //para poder trabajar con formularios reactivos (formGroup)

// angular material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    // angular material imports 
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
