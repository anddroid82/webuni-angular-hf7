import { Component, Input } from '@angular/core';
import { Task } from '../task-new/task-new.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: Task = {
    id: 0,
    name: '',
    description: '',
    user: '',
    status: false
  };

  constructor(private taskService:TaskService) {

  }

  setStatus(arg1: boolean) {
    this.task.status = arg1;
    this.taskService.setTaskStatus(this.task.id,arg1);
  }


}
