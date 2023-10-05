import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRoleService } from './user-role.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string | null = null;

  constructor(
    private jwtHelper: JwtHelperService,
    private userRoleService: UserRoleService
  ) {}

  isLoggedIn(): boolean {
    if (this.accessToken) {
      console.log(this.accessToken);
      return true;
    } else {
      return false;
    }
  }

  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('access_token', this.accessToken);
    const userRole = this.decodeAccessToken().cargo;
    this.userRoleService.setUserRole(userRole);
  }

  getAcessToken(): string | null {
    return this.accessToken;
  }

  clearAccessToken() {
    this.accessToken = null;
    localStorage.clear();
  }

  decodeAccessToken(): any {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      return this.jwtHelper.decodeToken(accessToken);
    }

    return null;
  }
}
