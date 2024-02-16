import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
        email: this.fb.control('', [Validators.required, Validators.email]),
        birthDate: this.fb.control('', Validators.required),
      });

      if(dataStudentEditing) {
        this.studentForm.patchValue(dataStudentEditing);
      }
    }

    onSave(): void {
      this.dialogRef.close(this.studentForm.value);
    }

}
