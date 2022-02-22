import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NbCardModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { IncludeModule } from '../include/include.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule,
    IncludeModule
  ]
})
export class AdminModule { }
