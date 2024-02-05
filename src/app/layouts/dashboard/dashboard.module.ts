import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

// angular material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { UsersModule } from './pages/users/users.module';
import { StudentsModule } from './pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';
import { RxjsExampleModule } from './pages/rxjs-example/rxjs-example.module';
import { RxjsIntroduccionModule } from './pages/rxjs-introduccion/rxjs-introduccion.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { UsersComponent } from './pages/users/users.component';



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
    MatListModule,
    
    CoursesModule,
    RxjsExampleModule,
    RxjsIntroduccionModule,
    
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },      
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        // cualquier cosa que no sea el home redirige a home
        path: '**',
        redirectTo: 'home'
      },
    ]),
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule {}
