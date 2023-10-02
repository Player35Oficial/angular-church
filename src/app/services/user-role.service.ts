import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private userRole: string | null = null;

  setUserRole(role: string) {
    this.userRole = role;
    console.log(this.userRole);
  }

  public getUserRole(): string | null {
    console.log(this.userRole);
    return this.userRole;
  }
}
