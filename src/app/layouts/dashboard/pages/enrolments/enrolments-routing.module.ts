import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrolmentsComponent } from './enrolments.component';

const routes: Routes = [
  {
    path: '',
    component: EnrolmentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolmentsRoutingModule { }
