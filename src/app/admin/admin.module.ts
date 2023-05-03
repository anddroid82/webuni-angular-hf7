import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FormsModule } from '@angular/forms';
import { TaskPipe } from './pipe/task.pipe';
import { TaskComponent } from './task/task.component'

@NgModule({
  declarations: [
    DashboardComponent,
    TaskListComponent,
    TaskNewComponent,
    DashboardHeaderComponent,
    TaskPipe,
    TaskComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
