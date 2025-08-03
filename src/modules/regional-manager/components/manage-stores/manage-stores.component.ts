import { Component } from '@angular/core';
import { regionalManager } from '../../../../app/models/platform-model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-stores',
  imports: [CommonModule],
  templateUrl: './manage-stores.component.html',
  styleUrl: './manage-stores.component.scss'
})
export class ManageStoresComponent {
  data!: regionalManager;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['roleData']
   console.log(this.data)
   
  }
}
