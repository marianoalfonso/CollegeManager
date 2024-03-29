import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CollegeManager';

  isLoading = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading$.subscribe({
      next: (value) => {
        // envolvemos la asignacion dentro del timeout
        // para que se dispare luego del renderizado del html
        setTimeout(() => {
         this.isLoading = value; 
        });
      }
    })
  }
}
