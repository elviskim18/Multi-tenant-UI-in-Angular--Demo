import { Component } from '@angular/core';
import { regionalManager } from '../../../../app/models/platform-model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-fieldmembers',
  imports: [CommonModule],
  templateUrl: './manage-fieldmembers.component.html',
  styleUrl: './manage-fieldmembers.component.scss'
})
export class ManageFieldmembersComponent {
  data!: regionalManager;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['roleData']
   console.log(this.data)
   
  }
}
