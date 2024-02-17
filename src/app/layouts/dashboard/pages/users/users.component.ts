import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Role, User } from '../../../models';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})

// los ciclos de vida en angular se implementan en el siguiente orden:
// .constructor
// .onchange
// .oninit
export class UsersComponent implements OnInit {
  // realizamos la inyeccion por dependencias e inyectamos el servicio user.service.ts
  constructor(
    private userService: UsersService,
    private loadingService: LoadingService,
    private alertService: AlertsService,
    private dialog: MatDialog
  ) {}

  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  dataSource: User[] = [];
  // roles: Role[] = [];
  roles: string[] = [];

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);

    // forkJoin recibe un array de observables
    forkJoin([
      this.userService.getRoles(),
      this.userService.getUsers(),
    ]).subscribe({
      // el value recibe un array de arrays,
      // donde el primer elemento es el array de Roles y el segundo el de Users
      next: (value) => {
        this.roles = value[0];
        this.dataSource = value[1];
      },
      error: (err) => {},
      complete: () => this.loadingService.setIsLoading(false),
    });
  }

  // este metodo es llamado desde el boton AGREGAR del form
  onUserCreated(): void {
    // se invoca al control DIALOG
    this.dialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.userService.createUser(result).subscribe({
              next: (courses) => (this.dataSource = courses),
            });
          }
        },
      });
  }

  // cuando reciba el formulario de usuario
  onUserSubmitted(ev: User): void {
    // creamos un nuevo array para origen de la tabla de angular material
    // this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
    this.loadingService.setIsLoading(true);
    // this.userService.createUser({ ...ev, id: new Date().getTime() }).subscribe({
    this.userService.createUser(ev).subscribe({
      // ...users porque angular material necesita un nuevo array para el refresh
      // de esta manera se dispara el ciclo de deteccion de cambios de a.material
      next: (users) => (this.dataSource = [...users]),
      error: (err) => {},
      complete: () => this.loadingService.setIsLoading(false),
    });
  }

  onUserDeleted(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.userService.deleteUser(ev).subscribe({
      next: (users) => (this.dataSource = [...users]),
      error: (err) => {},
      complete: () => this.loadingService.setIsLoading(false),
    });
  }

  onUserEdited(user: User) {
    this.dialog
      .open(UserDialogComponent, { data: user })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.userService.updateUser(user.id, result).subscribe({
              next: (courses) => (this.dataSource = courses),
            });
          }
        },
      });
  }
}
