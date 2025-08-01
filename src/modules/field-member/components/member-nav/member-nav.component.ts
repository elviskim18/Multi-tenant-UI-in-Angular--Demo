import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-member-nav',
  imports: [RouterOutlet,RouterLink,MatIconModule],
  templateUrl: './member-nav.component.html',
  styleUrl: './member-nav.component.scss'
})
export class MemberNavComponent {
  
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