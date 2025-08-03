import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-tenant-demo';
  authService: AuthenticationService = inject(AuthenticationService);
  router: Router = inject(Router);

  ngOnInit() {
    const role = this.authService.getRole();
    if (!role) {
      this.router.navigate(['/login']);
    }
  }

}
