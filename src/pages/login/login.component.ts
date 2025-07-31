import { Component } from '@angular/core';
import { AuthenticationService } from '../../app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(role: 'COUNTRY_MANAGER' | 'REGIONAL_MANAGER' | 'FIELD_MEMBER') {
    this.authService.setRole(role);

    // Navigate based on role
    switch (role) {
      case 'COUNTRY_MANAGER':
        this.router.navigate(['/manager']);
        break;
      case 'REGIONAL_MANAGER':
        this.router.navigate(['/regional']);
        break;
      case 'FIELD_MEMBER':
        this.router.navigate(['/field']);
        break;
    }
  }
}
