import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {

  //declaro la variable y la inicializo en el constructor
  studentForm: FormGroup;

  // emitimos valores de hijo a padre
  @Output()
    studentSubmitted = new EventEmitter();
  
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      lastName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      email: this.fb.control('', Validators.required),
      birthDate: this.fb.control('', Validators.required),
    })
  }

  onSubmit(): void {
    // emito el evento que sera recibido en el componente padre
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.studentSubmitted.emit(this.studentForm.value);
      this.studentForm.reset();
    }

  }
}
