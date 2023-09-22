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

  getUserRole(): string | null {
    return this.userRole;
  }
}
