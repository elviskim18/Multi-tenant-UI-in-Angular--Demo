import { Component } from '@angular/core';
import { countryManager } from '../../../../app/models/platform-model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-regional-managers',
  imports: [CommonModule],
  templateUrl: './manage-regional-managers.component.html',
  styleUrl: './manage-regional-managers.component.scss'
})
export class ManageRegionalManagersComponent {
   data!: countryManager;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['roleData']
   console.log(this.data)
   
  }

}
