import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsIntroduccionComponent } from './rxjs-introduccion.component';
import { LoadingService } from '../../../../core/services/loading.service';



@NgModule({
  declarations: [
    RxjsIntroduccionComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RxjsIntroduccionComponent,
  ]
})
export class RxjsIntroduccionModule { }
