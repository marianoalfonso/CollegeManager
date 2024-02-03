import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../injection-tokens';


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

  constructor(@Inject(MY_USER_TOKEN) userToken: string) { 
    console.log('servicio inicializado:', userToken);
  }

  getUsers() {
    console.log('users fetched from real DB');
    return ['Maria', 'Lucia'];
  }

}
