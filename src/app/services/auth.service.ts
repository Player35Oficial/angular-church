import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string | null = null;

  constructor(private jwtHelper: JwtHelperService) {}

  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('access_token', this.accessToken);
  }

  getAcessToken(): string | null {
    return this.accessToken;
  }

  clearAccessToken() {
    this.accessToken = null;
  }

  decodeAccessToken(): any {
    const accessToken = this.getAcessToken();

    if (accessToken) {
      return this.jwtHelper.decodeToken(accessToken);
    }

    return null;
  }
}
