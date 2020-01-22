import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { runInThisContext } from 'vm';
import { AddTaskPage } from '../add-task/add-task.page';
import { TaskService } from '../../data.service';
import { Task } from '../models/task.interface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private tasks: Promise<Task[]>; 
  private task: Task;

  constructor(public navCtrl: NavController, private taskService: TaskService) {

  }

  ionViewWillEnter() {
    this.task = this.getAllTasks();
  }


  addTask(){
    

  }
  
  
getAllTasks(){
  return this.taskService.getAllTasks();
}

}

