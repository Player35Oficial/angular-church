import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  console.log(route);
  console.log(state);
  const router = inject(Router);

  const isAuth = token;
  console.log(isAuth);

  if (isAuth) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
