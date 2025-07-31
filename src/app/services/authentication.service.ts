import { Injectable } from '@angular/core';
export type UserRole = 'COUNTRY_MANAGER' | 'REGIONAL_MANAGER' | 'FIELD_MEMBER';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private role: UserRole | null = null;


  constructor() { }

  setRole(role: UserRole) {
    this.role = role;
    localStorage.setItem('user_role', role);
  }

  getRole(): UserRole | null {
    return this.role || (localStorage.getItem('user_role') as UserRole);
  }

  clearRole() {
    this.role = null;
    localStorage.removeItem('user_role');
  }
}
