import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit { 
  tasks: Task[]= [];
  newTaskTitle: string = '';

  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask():void {
    const newTask:Task = {
      id:Date.now(),
      title:this.newTaskTitle,
      completed:false
    };

    this.taskService.addTask(newTask);
    this.newTaskTitle='';
  }

  deleteTask(id:number):void {
    this.taskService.deleteTask(id)
  }

}