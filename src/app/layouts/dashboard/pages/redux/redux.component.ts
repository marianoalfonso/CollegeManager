import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContadorActions } from '../../../../core/store/contador/actions/contador.actions';
import { selectcontadorValue } from '../../../../core/store/contador/selectors/contador.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrl: './redux.component.scss'
})
export class ReduxComponent {

  value$: Observable<number>;

  // // // variante apra mostrarlo en la vista
  // value: number = 0;

  constructor(
    private store: Store) {
      this.value$ = this.store.select(selectcontadorValue);

      // // variante para mostrarlo en la vista
      // this.store.select(selectcontadorValue).subscribe({
      //   next: (value) => (this.value = value)
      // })
    }

  incrementNumber(): void {
    this.store.dispatch(ContadorActions.increase())
  }
  
  decrementNumber(): void {
    this.store.dispatch(ContadorActions.decrease({ cantidad: 2 }))
  }
}
