import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private userRole: string | null = null;

  setUserRole(role: string) {
    this.userRole = role;
    this.userRole;
  }

  public getUserRole(): string | null {
    this.userRole;
    return this.userRole;
  }
}
