import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoursesService } from './courses.service';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDialogComponent 
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MatIconModule,

    MatPaginatorModule

  ],
  providers: [
    CoursesService,
  ]
})
export class CoursesModule {

}
