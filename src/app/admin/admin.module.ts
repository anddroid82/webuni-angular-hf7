import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TaskListComponent,
    TaskNewComponent,
    DashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
