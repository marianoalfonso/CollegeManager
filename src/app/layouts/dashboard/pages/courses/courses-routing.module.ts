import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    // estamos en /dashboard/courses
    path: '', //cuando estemos en la ruta '' (que es /dashboard/courses)
    component: CoursesComponent,  //cargamos este componente
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
