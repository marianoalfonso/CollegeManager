import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    // estamos en /dashboard/courses
    path: '', //cuando estemos en la ruta '' (que es /dashboard/courses)
    component: HomeComponent,  //cargamos este componente
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
