import { Injectable } from '@angular/core';
import { User } from '../models';
import { Router } from '@angular/router';
import { LoginData } from '../models';
import { AlertsService } from '../../core/services/alerts.service';
import { delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';

const mockUser = {
  id: 15,
  firstName: 'nombre',
  lastName: 'apellido',
  email: 'test@test.com',
  password: 'test1234',
  role: 'admin'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private alertService: AlertsService,
    private loadingService: LoadingService) { }

  setAuthUser(mockUser: User): void {
    this.authUser = mockUser;
    localStorage.setItem('token', 'jpo4234lkjgmdlk34534');
  }

  authUser: User | null = null;

  logIn(data: LoginData): void {


    if (data.email === mockUser.email && data.password === mockUser.password) {
      this.setAuthUser(mockUser);
      this.router.navigate(['dashboard']);
    } else {
      this.alertService.showError('usuario invalido')
    }
  }

  logOut(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  // en apps reales, se envia el token almacenado en el localStorage
  // a la DB y esta devuelve true o false
  verifyToken() {
    this.loadingService.setIsLoading(true);
    return of(localStorage.getItem('token')).pipe(
      delay(1000),
      map((response) => !!response),
      tap(() => this.setAuthUser(mockUser)),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }

}
