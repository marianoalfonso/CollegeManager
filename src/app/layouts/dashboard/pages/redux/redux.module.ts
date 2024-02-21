import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxComponent } from './redux.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    ReduxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReduxComponent,
      }
    ]),
  ]
})
export class ReduxModule { }
