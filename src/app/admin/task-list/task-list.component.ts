import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task-new/task-new.component';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input() taskList:Task[] = [];
  @Output() statusChange = new EventEmitter();

  constructor(private taskService:TaskService) {

  }

  setStatus(taskId:number,status:boolean) {
    this.taskService.setTaskStatus(taskId,status);
    this.statusChange.emit();
  }

}
