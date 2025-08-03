import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { RoleDataService } from './services/role-data.service';
import { roleDataResolver } from './resolvers/role-data.resolver';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'manager',component: MainnavComponent,
        loadChildren: () => import('../modules/general-manager/general-manager.module').then(m => m.GeneralManagerModule),
        resolve: { roleData: roleDataResolver },
        canActivate: [roleGuard],
        data: { role: 'COUNTRY_MANAGER' }
    },
    {
        path: 'regional',component: MainnavComponent,
        loadChildren: () => import('../modules/regional-manager/regional-manager.module').then(m => m.RegionalManagerModule),
        resolve: { roleData: roleDataResolver },
        canActivate: [roleGuard],
        data: { role: 'REGIONAL_MANAGER' }
    },
    {
        path: 'field',component: MainnavComponent,
        loadChildren: () => import('../modules/field-member/field-member.module').then(m => m.FieldMemberModule),
        resolve: { roleData: roleDataResolver },
        canActivate: [roleGuard],
        data: { role: 'FIELD_MEMBER' }
    },
  { path: '**', component: NotFoundComponent },


];
