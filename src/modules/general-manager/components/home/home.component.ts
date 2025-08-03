import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { countryManager } from '../../../../app/models/platform-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatIconModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data!: countryManager;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
   this.data = this.route.snapshot.data['roleData']
   console.log(this.data)
   
  }



}
