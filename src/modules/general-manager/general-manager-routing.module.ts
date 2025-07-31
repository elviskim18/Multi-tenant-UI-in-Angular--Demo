import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageRegionsComponent } from './components/manage-regions/manage-regions.component';
import { ManageRegionalManagersComponent } from './components/manage-regional-managers/manage-regional-managers.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'manage-managers', component: ManageRegionalManagersComponent },
    { path: 'manage-regions', component: ManageRegionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralManagerRoutingModule { }
