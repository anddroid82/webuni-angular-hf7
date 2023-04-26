import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { Task } from '../task-new/task-new.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageTasksField:string = 'tm.tasks';

  constructor(private loginService: LoginService) { }

  getMaxIdOfTaskArray(tasks:Task[]):number {
    let maxId = 0;
    tasks.forEach( t => {
      maxId = Math.max(maxId,t.id);
    });
    return maxId;
  }

  addNewTask(task:Task) {
    task.user = this.loginService.readLoggedUserFromStorage()!;
    let taskArray = this.readTaskArrayFromStorage();
    task.id = this.getMaxIdOfTaskArray(taskArray)+1;
    taskArray.push(task);
    this.writeTaskArrayToStorage(taskArray);
  }

  readTaskArrayFromStorage():Task[] {
    const taskJSON = localStorage.getItem(this.storageTasksField);
    let taskArray = [];
    if (taskJSON) {
      taskArray = JSON.parse(taskJSON);
    }
    return taskArray;
  }

  writeTaskArrayToStorage(tasks:Task[]) {
    localStorage.setItem(this.storageTasksField,JSON.stringify(tasks));
  }

  setTaskStatus(taskId:number,status:boolean) {
    const taskArray = this.readTaskArrayFromStorage();
    let moddedTaskArray = taskArray.map( t => {
      if (t.id === taskId) {
        t.status = status;
      }
      return t;
    })
    this.writeTaskArrayToStorage(moddedTaskArray);
  }


}
