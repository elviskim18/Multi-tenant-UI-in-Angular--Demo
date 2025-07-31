import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manager-nav',
  imports: [RouterOutlet],
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
