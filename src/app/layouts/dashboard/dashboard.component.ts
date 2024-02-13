import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;
  today = new Date();

  // inyectamos la dependencia Router
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) {

  }

  logOut(): void {
    this.authService.logOut();
  }

}
