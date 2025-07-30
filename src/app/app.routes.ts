import { Routes } from '@angular/router';
import { LoginComponent } from '../Pages/login/login.component';
import { NotFoundComponent } from '../Pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
    {
        path: 'general-manager',
        loadChildren: () => import('../Modules/general-manager/general-manager.module').then(m => m.GeneralManagerModule),
        data: { role: 'GENERAL_MANAGER' }
    },
    {
        path: 'regional-manager',
        loadChildren: () => import('../Modules/regional-manager/regional-manager.module').then(m => m.RegionalManagerModule),
        data: { role: 'REGIONAL_MANAGER' }
    },
    {
        path: 'field-member',
        loadChildren: () => import('../Modules/field-member/field-member.module').then(m => m.FieldMemberModule),
        data: { role: 'REGIONAL_MANAGER' }
    },

];
