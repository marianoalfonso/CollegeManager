import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

// angular material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { StudentsModule } from './pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';
import { RxjsExampleModule } from './pages/rxjs-example/rxjs-example.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    StudentsModule,
    // angular material imports
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CoursesModule,
    RxjsExampleModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule {}
