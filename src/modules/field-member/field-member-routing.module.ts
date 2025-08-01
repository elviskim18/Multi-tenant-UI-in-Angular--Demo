import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderTaskComponent } from './components/order-task/order-task.component';
import { MemberNavComponent } from './components/member-nav/member-nav.component';
import { ExpiryTaskComponent } from './components/expiry-task/expiry-task.component';
import { StockTaskComponent } from './components/stock-task/stock-task.component';

const routes: Routes = [
  {
    path: '',
    component: MemberNavComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'order-task', component: OrderTaskComponent },
      { path: 'expiry-task', component: ExpiryTaskComponent },
      { path: 'stock-task', component: StockTaskComponent },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldMemberRoutingModule { }
