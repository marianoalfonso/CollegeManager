import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AuthService } from '../../layouts/auth/auth.service';
import { selectAuthUser } from '../store/auth/selectors/auth.selectors';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authServcie = inject(AuthService);
  // return authServcie.authUser?.role === 'admin' ? true : router.createUrlTree(['dashboard', 'home']);
  
  // para ver el rol del usuario almacenado en redux
  // invocamos al selector de redux (QUE DEVUELVE UN Observable, por use debemos usar pipe)
  const store = inject(Store);
  return store.select(selectAuthUser).pipe(
    map((user) => {
      return user?.role === 'admin' ? true : router.createUrlTree(['dashboard', 'home']);
    })
  )
};
