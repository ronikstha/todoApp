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

  constructor(public navCtrl: NavController, private noteService: TaskService) {

  }

  ionViewWillEnter() {
    this.task = this.getAllTasks();
  }


  addTask(){
    this.navCtrl.push(AddTaskPage);

  }
  getTask(createDate: number){
    this.noteService.getTask(createDate).then((n) =>{
      this.task = n;
      this.navCtrl.push(TaskViewPage, { task: this.task })
    })

  }
  
getAllTasks(){
  return this.taskService.getAllTasks();
}

}
