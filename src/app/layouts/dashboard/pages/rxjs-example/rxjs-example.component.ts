import { Component } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss'
})
export class RxjsExampleComponent {

  loading: boolean = false;
  users: string[] = [];

  getUsersSuscription:? Subscription;

  constructor() {
    console.log('se instancio el componente');

    setTimeout(() => {
      console.log('timeout');
    }, 4000);

    console.log('fin');

    let loading = false;

    //this.getUsersFromPromise(); //llamada desde una promesa clasica
    this.getUsersFromObservable(); //llamada a un observable
  }

  getUsersFromObservable(): void {
    // perguntamos si getUsersSuscription tiene algun valor, borramos la suscricion
    this.getUsersSuscription?.unsubscribe();
    this.loading = true;
    const getUsers$ = new Observable<string[]>((Subscriber) => {
      setTimeout(() => {
        Subscriber.next(['batman', 'flash', 'acuaman']);
        Subscriber.complete(); //si no marco el suscriber como completo, queda emitiendo indefinidamente 
      }, 5000);
    });
    this.getUsersSuscription = getUsers$.subscribe({
      // el observable emite valores correctamente      
      next: (respuesta) => {
        this.users = respuesta;
      },
      // el observable emite errres
      error: () => {},
      // el observable finalizo y dejo de emitir valores
      complete: () => {
        this.loading = false;
      }
    });
  }
  

  getUsersFromPromise(): void {
    const getUsers = new Promise<string[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(['spiderman', 'superman', 'wonder woman']);
      }, 4000);
    });

    this.loading = true;
    getUsers
      // cuando la promesa se resuelve correctamente (resolve)
      .then((respuesta) => {
        this.users = respuesta;
      }
      )
      // cuando la promesa retorna error (reject)
      .catch((reject) => console.log(reject))
      // se ejecuta siempre sin importar el resultado de la promesa
      .finally(() => {
        this.loading = false;
      });
  }

}
