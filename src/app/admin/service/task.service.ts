import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { Task } from '../task-new/task-new.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageTasksField:string = 'tm.tasks';

  private _tasks:Task[] = [];

  constructor(private loginService: LoginService) { }

  getMaxIdOfTaskArray():number {
    let maxId = 0;
    this._tasks.forEach( t => {
      maxId = Math.max(maxId,t.id);
    });
    return maxId;
  }

  addNewTask(task:Task) {
    task.user = this.loginService.readLoggedUserFromStorage()!;
    task.id = this.getMaxIdOfTaskArray()+1;
    this._tasks.push(task);
    this.writeTaskArrayToStorage();
  }

  get tasks() {
    return this.readTaskArrayFromStorage();
  }

  readTaskArrayFromStorage():Task[] {
    const taskJSON = localStorage.getItem(this.storageTasksField);
    let taskArray = [];
    if (taskJSON) {
      taskArray = JSON.parse(taskJSON);
    }
    return taskArray;
  }

  writeTaskArrayToStorage() {
    localStorage.setItem(this.storageTasksField,JSON.stringify(this._tasks));
  }

  setTaskStatus(taskId:number,status:boolean) {
    let moddedTaskArray = this._tasks.map( t => {
      if (t.id === taskId) {
        t.status = status;
      }
      return t;
    })
    this._tasks = moddedTaskArray;
    this.writeTaskArrayToStorage();
  }


}
