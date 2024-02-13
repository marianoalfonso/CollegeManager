import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { StudentsComponent } from './layouts/dashboard/pages/students/students.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { AuthModule } from './layouts/auth/auth.module';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    // recibe un array porque puede recibir mas de un guard
    canActivate: [authGuard],
    component: DashboardComponent,
    loadChildren: () => import('./layouts/dashboard/dashboard.module')
      .then((mod) => mod.DashboardModule)
  },
  // {
  //   path: 'auth',
  //   component: AuthModule,
  //   loadChildren: () => import('./layouts/auth/auth.module')
  //     .then((mod) => mod.AuthModule)
  // },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/dashboard', //con la barra le especificamos que es una ruta absoluta
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
