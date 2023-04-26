import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { TaskNewComponent } from './task-new/task-new.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'newtask',
    component: TaskNewComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
