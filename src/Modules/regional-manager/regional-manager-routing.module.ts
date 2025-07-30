import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageFieldmembersComponent } from './components/manage-fieldmembers/manage-fieldmembers.component';
import { ManageSchedulesComponent } from './components/manage-schedules/manage-schedules.component';
import { ManageStoresComponent } from './components/manage-stores/manage-stores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage-field-members', component: ManageFieldmembersComponent },
  { path: 'manage-schedules', component: ManageSchedulesComponent },
  { path: 'manage-stores', component: ManageStoresComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionalManagerRoutingModule { }
