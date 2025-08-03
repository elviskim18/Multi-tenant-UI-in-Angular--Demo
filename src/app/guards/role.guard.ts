import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthenticationService);
  const router = inject(Router);

   const expectedRole = route.data['role'];
    if (auth.getRole() === expectedRole) {
      console.log(`Access granted for role: ${expectedRole}`);
      return true;
    }
    router.navigate(['/login']);
    console.log(`Access denied for role`);
    return false;
};
