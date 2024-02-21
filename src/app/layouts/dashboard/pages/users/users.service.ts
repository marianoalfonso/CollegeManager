import { Injectable } from '@angular/core';
import { Pagination, Role, User } from '../../../models';
import { Observable, delay, mergeMap, of, tap, catchError } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { LoadingService } from '../../../../core/services/loading.service';

// let para poder borrar elementos
// let USERS_DB: User[] = [];

const ROLES_DB: string[] = ['admin', 'user'];

// los servicios se instancian por unica vez
// y son unicos para todas las llamadas

// 'providedIn: root' indica que el servicio se provee para toda la aplicacion
// por lo que se puede invocar desde cualquier lado que sera visible
// @Injectable({
//   providedIn: 'root'
// })

// si lo usamos de la siguinte manera, debemos declarar el servicio en los providers
// de los modulos donde usemos el servicio, esto es mejor para el lazyloading
@Injectable()
export class UsersService {
  constructor(
    private notifier: AlertsService,
    private httpClient: HttpClient,
    private loadingService: LoadingService
  ) {}

  // este metodo se comunica con la DB y devuelve un observable con el array de usuarios
  getUsers() {
    // // {of} es la abreviatura para devolver rapidamente un observable
    // // el pipe delay aplica una demora en la devolucion del observable
    // return of(USERS_DB).pipe(delay(2000));

    // utilizamos la llamada al servicio JSON
    //devuelve un OBJETO, no un array, debemos indicarle en el generico que devuelve un array de N
    // return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(delay(1000));
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`).pipe(
      delay(1000),
      catchError((error) => {
        this.notifier.showError('error al recuperar los usuarios');
        return of([]);
      })
    );
  }

  paginateUsers(page: number, perPage = 5) {
    // el get va a devolver una paginacion
    return this.httpClient.get<Pagination<User>>(
      `${environment.apiUrl}/users?_page=${page}&_per_page=${perPage}`
    );
  }

  // actualizar el usuario mediante edicion
  updateUser(idUser: number, payload: User) {
    this.loadingService.setIsLoading(true);
    return this.httpClient
      .put<User>(`${environment.apiUrl}/users/${idUser}`, { ...payload })
      .pipe(
        mergeMap(() => this.paginateUsers(1)),
        tap(() => {
          this.notifier.showSuccess(
            'Usuarios',
            'usuario modificado correctamente !!'
          ),
          this.loadingService.setIsLoading(false);    
        })
      );
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(2000));
  }

  // agrego un usuario al array y devuelvo la funcion getUsers
  createUser(payload: User) {
    return this.httpClient
      .post<User>(`${environment.apiUrl}/users`, {
        ...payload,
        token: this.generateString(32),
      })
      .pipe(mergeMap(() => this.getUsers())); //hago merge del observable devuelto por el POST on el devuelto por el GET
  }

  deleteUser(payload: User) {
    // // recibo el objeto User completo para poder obtener el nombre
    // // filtro y me quedo con los que sean diferentes al userID recibido
    // USERS_DB = USERS_DB.filter((user) => user.id !== payload.id);
    // // tap, con el pipe y el tap le indicamos que haga algo inmediatamente
    // // despues que el observable emita un valor
    // const mensaje = `usuario "${ payload.lastName }" eliminado correctamente`;
    // return this.getUsers().pipe(tap(() => this.notifier.showSuccess('usuarios', mensaje)));
    return this.httpClient
      .delete<User>(`${environment.apiUrl}/users/${payload.id}`)
      .pipe(mergeMap(() => this.getUsers()));
  }

  // me devuelve un observable del tipo User
  getUserById(id: number | string): Observable<User | undefined> {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  // genera una cadena random para el token
  generateString(length: number) {
    const setCaracteres: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = setCaracteres.length;
    for (let i = 0; i < length; i++) {
      result += setCaracteres.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result;
  }
}
