import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralManagerRoutingModule } from './general-manager-routing.module';
import { ManagerNavComponent } from './components/manager-nav/manager-nav.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    GeneralManagerRoutingModule
  ]
})
export class GeneralManagerModule { }
