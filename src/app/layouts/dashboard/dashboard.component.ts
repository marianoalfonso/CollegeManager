import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthUser } from '../../core/store/auth/selectors/auth.selectors';
import { AuthService } from '../auth/auth.service';
import { User } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  today = new Date();

  authUser$: Observable<User | null>;

  // inyectamos la dependencia Router
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private store: Store) {
      this.authUser$ = this.store.select(selectAuthUser);
  }

  logOut(): void {
    this.authService.logOut();
  }

}
