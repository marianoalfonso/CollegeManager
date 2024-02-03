import { Component } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-rxjs-introduccion',
  templateUrl: './rxjs-introduccion.component.html',
  styles: ``
})
export class RxjsIntroduccionComponent {
  // esto es un observable
  numbersObservable$ = new Observable((suscriber) => {
    // emitimos valores al suscriber
    suscriber.next(1);
    suscriber.next(2);
    suscriber.next(3);
  });

  // esto es un subject, que es una clase que EXTIENDE una clase observable
  // un subject no recibe argumentos
  numbersSubject$ = new Subject();



  constructor(private loadingService: LoadingService, private alertsService: AlertsService) {
    //logica

    // cuando se inicia la clase con el constructor, generamos la suscripcion
    this.suscribeToNumbersObservable();

    // hacemos la suscripcion igual que con el observable
    // primer debemos suscribirnos y luego emitir valores
    this.suscribeToNumberSubject();
    // en un subject puedo emitir desde y cuando quiera
    // a diferencia del observable que emite dentro de la definicion
    this.numbersSubject$.next(4);
    this.numbersSubject$.next(5);
    this.numbersSubject$.next(6);

    this.getUsers();
  }

  suscribeToNumbersObservable(): void {
    this.numbersObservable$.subscribe({
      next: (numbers) => console.log('numeros observables: ', numbers),
    })
  }

  suscribeToNumberSubject(): void {
    this.numbersSubject$.subscribe({
      next: (numbers) => console.log('numeros subject: ', numbers),
    })
  }

  getUsers(): void {
    // creamos un observable para poder emitir (devolver) algunos usuarios
    const obs = new Observable<string[]>((suscriber) => {
      setTimeout(() => {
        suscriber.next([]);
        suscriber.next(['Daniela', 'Kevin', 'Lisa', 'Johanna']);
        suscriber.complete();
      }, 4000)
    }
    );

    // seteamos el valor del servicio loading
    this.loadingService.setIsLoading(true);
    // nos suscribimos al observable
    // con el pipe filter filtramos los arrays vacios
    obs.pipe(
      filter((data) => !!data.length), //con !! convertimos el numero devuelto por data.length en un booleano
      map((data) => data.map((elem) => elem.toUpperCase())),
    ).subscribe({
      next: (usuarios) => {
        console.log(usuarios);
        this.alertsService.showSuccess('Usuarios', 'los usuarios han sido listados')
      },
      error: (err) => {},
      complete: () => {
        this.loadingService.setIsLoading(false)
      }
    })

  }

}
