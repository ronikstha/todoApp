import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/angular';
import { Task } from './app/models/task.interface';

@Injectable()
export class TaskService {
private tasks: Task[] =[];
private task: Task;
  constructor(public storage: Storage) {
    
  }

  saveTask(task: Task){
    task.createDate = Date.now();
    this.tasks.push(task);
    this.storage.set('tasks' , this.tasks);

  }

  getAllTasks() {
    return this.storage.get('tasks').then(
      (tasks) => {
        this.tasks =tasks == null ? [] : tasks;
        return [...this.tasks];
      }
    )
  }
  s
  getTask(createDate: number){
    return this.storage.get('tasks').then((tasks) => {
  this.task= [...this.tasks].find(r => r.createDate === createDate)
  return this.task;

    });
  }

  deleteTask(createDate: number){
    this.tasks = this.tasks.filter((task) => {
      return task.createDate !==createDate
    });
    this.storage.set('tasks',this.tasks);
  }

}
