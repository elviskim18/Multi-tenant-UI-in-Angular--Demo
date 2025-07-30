import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderTaskComponent } from './components/order-task/order-task.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'order', component:OrderTaskComponent  },
      
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldMemberRoutingModule { }
