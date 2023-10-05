import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  route;
  state;
  const router = inject(Router);

  const isAuth = token;
  isAuth;

  if (isAuth) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
