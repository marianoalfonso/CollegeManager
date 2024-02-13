import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authServcie = inject(AuthService);
  return authServcie.authUser?.role === 'admin' ? true : router.createUrlTree(['dashboard', 'home']);
};
