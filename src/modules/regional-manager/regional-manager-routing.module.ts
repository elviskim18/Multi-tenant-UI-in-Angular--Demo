import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageFieldmembersComponent } from './components/manage-fieldmembers/manage-fieldmembers.component';
import { ManageSchedulesComponent } from './components/manage-schedules/manage-schedules.component';
import { ManageStoresComponent } from './components/manage-stores/manage-stores.component';
import { NavComponent } from './components/nav/nav.component';
import { roleDataResolver } from '../../app/resolvers/role-data.resolver';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
      { path: '', component: HomeComponent,  },
      { path: 'manage-field-members', component: ManageFieldmembersComponent, resolve: { roleData: roleDataResolver } },
      { path: 'manage-schedules', component: ManageSchedulesComponent,resolve: { roleData: roleDataResolver } },
      { path: 'manage-stores', component: ManageStoresComponent, resolve: { roleData: roleDataResolver } },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionalManagerRoutingModule { }
