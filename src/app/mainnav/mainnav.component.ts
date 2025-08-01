import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainnav',
  imports: [RouterOutlet,MatIconModule],
  templateUrl: './mainnav.component.html',
  styleUrl: './mainnav.component.scss'
})
export class MainnavComponent {

  router = inject(Router);

  logout(){
    this.router.navigateByUrl('login')
  }

}
