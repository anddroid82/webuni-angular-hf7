import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task-new/task-new.component';

@Pipe({
  name: 'task'
})
export class TaskPipe implements PipeTransform {

  transform(value: Task, ...args: unknown[]): string {
    return value.name+" - "+value.description+" ("+value.user+")";
  }

}
