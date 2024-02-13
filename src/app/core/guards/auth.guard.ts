import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  
  console.log('guard activo');

  const router = inject(Router);
  const authServcie = inject(AuthService);
  // verifico si existe el usuario
  // return !!authServcie.authUser ? true : router.createUrlTree(['auth', 'login']);

  return authServcie.verifyToken().pipe(map((isAutenticated) => 
    isAutenticated ? true : router.createUrlTree(['auth', 'login'])));
};
