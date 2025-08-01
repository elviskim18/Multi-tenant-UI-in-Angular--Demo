import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageRegionsComponent } from './components/manage-regions/manage-regions.component';
import { ManageRegionalManagersComponent } from './components/manage-regional-managers/manage-regional-managers.component';
import { ManagerNavComponent } from './components/manager-nav/manager-nav.component';

const routes: Routes = [
    {
        path: '',
        component: ManagerNavComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'admins', component: ManageRegionalManagersComponent },
          { path: 'towns', component: ManageRegionsComponent },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralManagerRoutingModule { }
