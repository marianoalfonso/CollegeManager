import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  revealPassword: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private authServide: AuthService) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
    });
  }

  onSubmit(): void {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authServide.logIn(this.loginForm.value).subscribe();
    }
  }

}
