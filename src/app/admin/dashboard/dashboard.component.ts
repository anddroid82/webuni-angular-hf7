import { Component, OnInit } from '@angular/core';
import { Task } from '../task-new/task-new.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasksFinished:Task[] = [];
  tasksProgress:Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.setTasksFinishedArray();
    this.setTasksProgressArray();
  }

  setTasksFinishedArray() {
    this.tasksFinished = this.taskService.tasks.filter(t => t.status);
  }
  setTasksProgressArray() {
    this.tasksProgress = this.taskService.tasks.filter(t => !t.status)
  }

  tasksFinishedMethod():Task[] {
    return this.taskService.tasks.filter(t => t.status);
  }
  tasksProgressMethod():Task[] {
    return this.taskService.tasks.filter(t => !t.status)
  }


}
