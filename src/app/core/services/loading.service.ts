import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  // basicamente los subjects son notificadores de cuando ocurre algo
  // al setearla privada, cancelamos la posibilidad de ser seteada desde el exterior de la clase
  private loadingTriggered$ = new Subject<boolean>();


  // para exponerla y poder cambiar el valor desde afuera de la clase
  // convertimos loadingTriggered$ de subject a observable
  // como sabemos, los observables solo emiten informacion
  public isLoading$ = this.loadingTriggered$.asObservable();

  // definimos un metodo
  setIsLoading(value: boolean): void {
    this.loadingTriggered$.next(value)
  }
}
