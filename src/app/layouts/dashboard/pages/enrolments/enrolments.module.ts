import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolmentsRoutingModule } from './enrolments-routing.module';
import { EnrolmentsComponent } from './enrolments.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrolmentsEffects } from './store/enrolments.effects';
import { StoreModule } from '@ngrx/store';
import { enrolmentsFeature } from './store/enrolments.reducer';
import { SharedModule } from '../../../../shared/shared.module';
import { EnrolmentDialogComponent } from './components/enrolment-dialog/enrolment-dialog.component';


@NgModule({
  declarations: [
    EnrolmentsComponent,
    EnrolmentDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrolmentsRoutingModule,
    StoreModule.forFeature(enrolmentsFeature),
    EffectsModule.forFeature([EnrolmentsEffects]),
  ]
})
export class EnrolmentsModule { }
