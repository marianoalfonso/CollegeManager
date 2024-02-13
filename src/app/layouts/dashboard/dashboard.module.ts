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
import { RxjsExampleModule } from './pages/rxjs-example/rxjs-example.module';
import { RxjsIntroduccionModule } from './pages/rxjs-introduccion/rxjs-introduccion.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
import { StudentDetailComponent } from './pages/students/pages/student-detail/student-detail.component';
import { adminGuard } from '../../core/guards/admin.guard';



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
    
    RxjsExampleModule,
    RxjsIntroduccionModule,
    
    RouterModule.forChild([
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((home) => home.HomeModule),
      },      
      {
        path: 'users',
        canActivate: [adminGuard],
        loadChildren: () => import('./pages/users/users.module').then((users) => users.UsersModule),
      },
      // {
      //   path: 'users/:id',
      //   component: UserDetailComponent,
      // },
      {
        path: 'students',
        loadChildren: () => import('./pages/students/students.module').then((student) => student.StudentsModule),
      },
      // {
      //   path: 'students/:id',
      //   component: StudentDetailComponent,
      // },
      {
        //dashboard/courses
        path: 'courses',
        // aplicamos lazy-load
        // es una Promesa, del archivo de modulos queremos estraer la clase CoursessModule
        loadChildren: () => import('./pages/courses/courses.module').then((course) => course.CoursesModule),
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
