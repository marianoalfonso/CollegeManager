import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

// const routes: Routes = [
//   {
//     // estamos en /dashboard/users
//     path: '', //cuando estemos en la ruta '' (que es /dashboard/users)
//     component: UsersComponent,  //cargamos este componente
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', //cuando estemos en la ruta '' (que es /dashboard/users)
        component: UsersComponent, //cargamos este componente
      },
    ]),
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
