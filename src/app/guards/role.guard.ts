import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRoleService } from '../services/user-role.service';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');
  const authService = inject(AuthService);
  const userRole = authService.decodeAccessToken().cargo;
  console.log(userRole);
  const router = inject(Router);

  if (userRole == 'admin') {
    return true;
  } else {
    router.navigate(['home']);
    return false;
  }
};
