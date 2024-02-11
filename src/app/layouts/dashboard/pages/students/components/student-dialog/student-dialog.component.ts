import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../../../models';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent {

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private dataStudentEditing?: Student
    ) {
      this.studentForm = this.fb.group({
        firstName: this.fb.control(''),
        lastname: this.fb.control(''),
        email: this.fb.control(''),
        birthDate: this.fb.control(''),
      });

      if(dataStudentEditing) {
        this.studentForm.patchValue(dataStudentEditing);
      }
    }

    onSave(): void {
      this.dialogRef.close(this.studentForm.value);
    }

}
