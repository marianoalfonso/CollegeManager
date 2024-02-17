import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private dataEditingUser?: User,
    ) {
      this.userForm = this.fb.group({
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
        password: this.fb.control('', Validators.required),
        role: this.fb.control('', Validators.required),
      });

      if(dataEditingUser) {
        this.userForm.patchValue(dataEditingUser);
      }
    }

    onSave(): void {
      this.dialogRef.close(this.userForm.value);
    }

}
