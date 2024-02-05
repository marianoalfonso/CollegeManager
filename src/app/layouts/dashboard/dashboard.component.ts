import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute) {

  }

  logOut(): void {
    // esto nos lleva a dashboard/users, ya que el ActivatedRoute es dashboard
    // this.router.navigate(['users'], { relativeTo: this.route });

    localStorage.removeItem('access-token');
    this.router.navigate(['auth', 'login']);
  }

}
