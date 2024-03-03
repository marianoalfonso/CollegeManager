import { Injectable } from '@angular/core';
import { User } from '../models';
import { Router } from '@angular/router';
import { LoginData } from '../models';
import { AlertsService } from '../../core/services/alerts.service';
import { Observable, delay, finalize, map, of, tap, catchError } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { authActions } from '../../core/store/auth/actions/auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private alertService: AlertsService,
    private loadingService: LoadingService,
    private httpClient: HttpClient,
    private store: Store  //inyectamos el servicio del store de redux
    ) { }

  setAuthUser(user: User): void {
    this.store.dispatch(authActions.setAuthUser({ user })); //pasamos el valor del usuario a redux
    localStorage.setItem('token', user.token);
  }

  authUser: User | null = null;

  logIn(data: LoginData): Observable<User[]> {
    // utilizamos queryparams
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users?email=${data.email}&password=${data.password}`)
      .pipe(
        // el tap es para: si la peticion sale bien, ejecuta algo aca
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            this.alertService.showError('datos no validos');
          }
        })
      )
  }

  logOut(): void {
    this.store.dispatch(authActions.logout());
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  // en apps reales, se envia el token almacenado en el localStorage
  // a la DB y esta devuelve true o false
  verifyToken() {
    // this.loadingService.setIsLoading(true);
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users?token=${localStorage.getItem('token')}`).pipe(
      map((response) => {
        // si hay elementos dentro del array
        if (response.length) {
          console.log('encontro datos');
          this.setAuthUser(response[0]);
          return true;
        } else {
          this.store.dispatch(authActions.logout());
          localStorage.removeItem('token');
          return false;
        }
      }),
      catchError(() => of(false)) //manejamos errores (como si esta caido el servicio)
    );

  }

}
