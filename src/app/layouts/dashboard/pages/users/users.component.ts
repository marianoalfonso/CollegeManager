import { Component } from '@angular/core';
import { UsersService } from '../../../../core/services/users.service';
import { User } from '../../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  // realizamos la inyeccion por dependencias e inyectamos el servicio
  constructor(private userService: UsersService) {
    
  }


  displayedColumns: string[] = ['id', 'fullName', 'email', 'role'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Roger',
      lastName: 'Federer',
      email: 'roger.federer@gmail.com',
      password: 'test1234',
      role: 'admin',
    },
    {
      id: 2,
      firstName: 'Luciana',
      lastName: 'Aimar',
      email: 'luciana.aimar@gmail.com',
      password: 'test1234',
      role: 'user',
    },
    {
      id: 3,
      firstName: 'Emanuel',
      lastName: 'Ginobili',
      email: 'emanuel.ginobili@gmail.com',
      password: 'test1234',
      role: 'user',
    },
];

// cuando reciba el formulario de usuario
onUserSubmitted(ev: User): void {
  // creamos un nuevo array para origen de la tabla de angular material
  this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
}

}
