import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet,RouterLink,MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  
  ngAfterViewInit() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');
    if (toggleButton && sidebar) {
      toggleButton.addEventListener('click', () => {
        if (sidebar.classList.contains('show')) {
          sidebar.classList.remove('show');
          sidebar.classList.add('collapsed');
        } else {
          sidebar.classList.remove('collapsed');
          sidebar.classList.add('show');
        }
      });
    }
  }

}
