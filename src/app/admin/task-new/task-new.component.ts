import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.scss']
})
export class TaskNewComponent {

  name:string = '';
  description:string = '';

  constructor(private taskService:TaskService,private router:Router) {
  }

  addButtonClicked(){
    const task:Task = {
      id:0,
      name:this.name,
      description: this.description,
      user: '',
      status: false
    };
    this.taskService.addNewTask(task);
    this.router.navigateByUrl('/dashboard');
  }
}

export interface Task {
  id:number,
  name:string,
  description:string,
  user:string,
  status:boolean
}