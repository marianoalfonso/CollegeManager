import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolmentsRoutingModule } from './enrolments-routing.module';
import { EnrolmentsComponent } from './enrolments.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrolmentsEffects } from './store/enrolments.effects';


@NgModule({
  declarations: [
    EnrolmentsComponent
  ],
  imports: [
    CommonModule,
    EnrolmentsRoutingModule,
    EffectsModule.forFeature([EnrolmentsEffects]),
  ]
})
export class EnrolmentsModule { }
