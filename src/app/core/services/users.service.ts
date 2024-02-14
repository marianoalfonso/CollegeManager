import { Injectable } from '@angular/core';
import { Role, User } from '../../layouts/models';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';

// let para poder borrar elementos
let USERS_DB: User[] = [];

const ROLES_DB: string[] = ['admin', 'user'];

// const ROLES_DB: Roles[] = [
//   {
//     id: 1,
//     name: 'admin',
//     description: 'administrador del sistema con privilegios totales',
//   },
//   {
//     id: 2,
//     name: 'user',
//     description: 'usuario con privilegios minimos',
//   },
// ]

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
    private httpClient: HttpClient) {}

  // este metodo se comunica con la DB y devuelve un observable con el array de usuarios
  getUsers() {
    // // {of} es la abreviatura para devolver rapidamente un observable
    // // el pipe delay aplica una demora en la devolucion del observable
    // return of(USERS_DB).pipe(delay(2000));

    // utilizamos la llamada al servicio JSON
    //devuelve un OBJETO, no un array, debemos indicarle en el generico que devuelve un array de N
    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(delay(1000)); 
  }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(2000));
  }

  // agrego un usuario al array y devuelvo la funcion getUsers
  createUser(payload: User) {
    USERS_DB.push(payload);
    return this.getUsers(); 
  }

  deleteUser(payload: User) {
    // recibo el objeto User completo para poder obtener el nombre
    // filtro y me quedo con los que sean diferentes al userID recibido
    USERS_DB = USERS_DB.filter((user) => user.id !== payload.id);
    // tap, con el pipe y el tap le indicamos que haga algo inmediatamente
    // despues que el observable emita un valor
    const mensaje = `usuario "${ payload.lastName }" eliminado correctamente`;
    return this.getUsers().pipe(tap(() => this.notifier.showSuccess('usuarios', mensaje)));
  }

  // me devuelve un observable del tipo User
  getUserById(id: number | string ): Observable<User | undefined> {
    return of(USERS_DB.find((user) => user.id == id)).pipe(delay(3000));
  }
}
