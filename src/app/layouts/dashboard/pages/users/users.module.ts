import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './components/user-form/user-form.component';

// angular material imports
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; //envoltura del form
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { UsersService } from '../../../../core/services/users.service';
import { UsersMockService } from '../../../../core/services/users-mock.service';
import { MY_USER_TOKEN } from '../../../../core/injection-tokens';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    // angular material imports
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,

    ReactiveFormsModule,
    SharedModule,
    RouterModule,

    UsersRoutingModule,
  ],
  exports: [
    UsersComponent,
  ],
  providers: [
    // referencio la clase del tipo servicio
    UsersService,
    {
      provide: MY_USER_TOKEN,
      useValue: 'this is a valid token',
    },

    // {
    //   // aca indico que cuando se provea el UsersService,
    //   // use la clase UserMockService
    //   provide: UsersService,
    //   useClass: UsersMockService,
    // }
  ]
})
export class UsersModule { }
