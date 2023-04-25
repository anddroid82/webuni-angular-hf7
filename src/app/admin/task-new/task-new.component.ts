import { Component } from '@angular/core';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.scss']
})
export class TaskNewComponent {

}

export interface Task {
  name:string,
  description:string,
  user:string
}