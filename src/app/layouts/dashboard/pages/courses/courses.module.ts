import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,

  ],
  providers: [
    CoursesService,
  ]
})
export class CoursesModule {
  displayedColumns: string[] = ['id', 'courseName', 'startDate', 'actions'];
  dataSource = [];


}
