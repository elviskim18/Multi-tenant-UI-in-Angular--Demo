import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { fieldMembers } from '../../../../app/models/platform-model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatExpansionModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data!: fieldMembers;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['roleData']
   console.log(this.data)
   
  }
}
