import { Component, OnInit } from '@angular/core';
import { Task } from '../task-new/task-new.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {

  tasksFinished:Task[] = [];
  tasksProgress:Task[] = [];

  constructor(private taskService:TaskService) {
  }
  
  ngOnInit(): void {
    this.refreshLists();
  }

  refreshLists(){
    const taskArray = this.taskService.readTaskArrayFromStorage();
    this.tasksFinished = taskArray.filter( t => t.status);
    this.tasksProgress = taskArray.filter( t => !t.status);
  }

  statusChanged(){
    this.refreshLists();
  }

}
