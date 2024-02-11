import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../../../models';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent {

  courseForm: FormGroup;

  // colocamos una referencia al mismo dialog
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    //para la edicion debemos insertar un token de angular material
    // y recibimos la data del producto siendo editado
    @Inject(MAT_DIALOG_DATA) private dataEditingCourse?: Course) {
      this.courseForm = this.fb.group({
        courseName: this.fb.control(''),
        startDate: this.fb.control(''),
      });
      
      // cuando llega un valor en el formulario, pisamos el valor con la data de edicion en curso
      if (dataEditingCourse) {
        this.courseForm.patchValue(dataEditingCourse);
      }
  }

  onSave(): void {
    this.dialogRef.close(this.courseForm.value);
  }

}
