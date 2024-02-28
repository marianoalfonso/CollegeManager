import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContadorActions } from '../../../../core/store/contador/actions';
import { selectorContadorValue } from '../../../../core/store/contador/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrl: './redux.component.scss'
})
export class ReduxComponent {
  value$ : Observable<number>;

  constructor(private store: Store) {
    this.value$ = this.store.select(selectorContadorValue);
  }

  incrementar(): void {
    this.store.dispatch(ContadorActions.incrementar());
  }

  decrementar(): void {
    // this.store.dispatch(ContadorActions.decrementar());
  }
}
