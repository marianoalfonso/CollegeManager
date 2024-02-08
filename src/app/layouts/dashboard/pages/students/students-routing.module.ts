import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    // estamos en /dashboard/students
    path: '', //cuando estemos en la ruta '' (que es /dashboard/students)
    component: StudentsComponent,  //cargamos este componente
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }