import { Component } from '@angular/core';
import { Task } from '../task-new/task-new.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  //tasksFinished:Task[] = [];
  //tasksProgress:Task[] = [];

  constructor(private taskService: TaskService) {
  }

  tasksFinished():Task[] {
    return this.taskService.tasks.filter(t => t.status);
  }
  tasksProgress(): any {
    return this.taskService.tasks.filter(t => !t.status)
  }


}
