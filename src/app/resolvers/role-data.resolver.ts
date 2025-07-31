import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RoleDataService } from '../services/role-data.service';
import { AuthenticationService } from '../services/authentication.service';

export const roleDataResolver: ResolveFn<any> = (route, state) => {
  let  roleDataService:RoleDataService= inject(RoleDataService);
  let auth: AuthenticationService = inject(AuthenticationService);

  const role = auth.getRole() ?? '';
  return roleDataService.getData(role);
};
