import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; 
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-manager-nav',
  imports: [RouterOutlet,RouterLink,MatIconModule],
  templateUrl: './manager-nav.component.html',
  styleUrl: './manager-nav.component.scss'
})
export class ManagerNavComponent {

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
