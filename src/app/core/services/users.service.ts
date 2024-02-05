import { Injectable } from '@angular/core';
import { Role, User } from '../../layouts/models';
import { Observable, delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

// let para poder borrar elementos
let USERS_DB: User[] = [
  // {
  //   id: 1,
  //   firstName: 'Roger',
  //   lastName: 'Federer',
  //   email: 'roger.federer@gmail.com',
  //   password: 'test1234',
  //   role: 'admin',
  // },
  // {
  //   id: 2,
  //   firstName: 'Luciana',
  //   lastName: 'Aimar',
  //   email: 'luciana.aimar@gmail.com',
  //   password: 'test1234',
  //   role: 'user',
  // },
  // {
  //   id: 3,
  //   firstName: 'Emanuel',
  //   lastName: 'Ginobili',
  //   email: 'emanuel.ginobili@gmail.com',
  //   password: 'test1234',
  //   role: 'user',
  // },
  {
    "id": 1,
    "firstName": "Neva",
    "lastName": "Avila",
    "email": "nevaavila@voratak.com",
    "password": "02345943-5d84-4179-9068-6868c2091038",
    "role": "user"
  },
  {
    "id": 2,
    "firstName": "Betty",
    "lastName": "Avery",
    "email": "bettyavery@voratak.com",
    "password": "532c166f-4850-4373-8645-3f8252733339",
    "role": "user"
  },
  {
    "id": 3,
    "firstName": "Hoffman",
    "lastName": "Russo",
    "email": "hoffmanrusso@voratak.com",
    "password": "270a39d2-810e-4210-b68c-cee435189c16",
    "role": "admin"
  },
  {
    "id": 4,
    "firstName": "Katheryn",
    "lastName": "Porter",
    "email": "katherynporter@voratak.com",
    "password": "a53c3443-12c2-4751-a108-34331d430331",
    "role": "admin"
  },
  {
    "id": 5,
    "firstName": "Alyssa",
    "lastName": "York",
    "email": "alyssayork@voratak.com",
    "password": "113e6ab3-6b83-4179-bac0-56b8a71ec530",
    "role": "admin"
  },
  {
    "id": 6,
    "firstName": "Cotton",
    "lastName": "Stark",
    "email": "cottonstark@voratak.com",
    "password": "5c59d07a-6b6c-4e33-aac4-989e173bc4e1",
    "role": "user"
  },
  {
    "id": 7,
    "firstName": "Caldwell",
    "lastName": "Morris",
    "email": "caldwellmorris@voratak.com",
    "password": "58f0a77a-deee-4d7c-ae50-3c2b0d1d2c24",
    "role": "user"
  }


] 

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

  constructor(private notifier: AlertsService) {}

  // este metodo se comunica con la DB y devuelve un observable con el array de usuarios
  getUsers() {
    console.log('users fetched from real DB');
    // {of} es la abreviatura para devolver rapidamente un observable
    // el pipe delay aplica una demora en la devolucion del observable
    return of(USERS_DB).pipe(delay(2000));
  }

  getRoles(): Observable<string[]> {
    console.log('roles fetched from real DB');
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
