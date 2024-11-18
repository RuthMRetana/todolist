import { Injectable } from '@angular/core';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }
  
  getTasks(): Task[]{
    return this.tasks;
  }

  addTask(task:Task):void {
    this.tasks.push(task)
  }

  deleteTask(indice:number):void {
    //this.tasks = this.tasks.filter(task => task.id !== id);
   this.tasks.splice(indice,1);
  }
}
 
  