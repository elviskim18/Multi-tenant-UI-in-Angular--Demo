import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { regionalManager } from '../../../../app/models/platform-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-schedules',
  imports: [CommonModule],
  templateUrl: './manage-schedules.component.html',
  styleUrl: './manage-schedules.component.scss'
})
export class ManageSchedulesComponent {
  data!: regionalManager;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['roleData']
   console.log(this.data)
   
  }
}
