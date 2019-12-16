import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { FormGroup,FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Task } from '../models/task.interface';
import { TaskService}  from '../../data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})

export class AddTaskPage implements OnInit {

  formGroup:FormGroup;
  task : Task;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController,public navParams: NavParams,private taskService: TaskService) {

    this.formGroup = new FormGroup
      ({
       title: new FormControl(),
         content: new FormControl(),
         date: new FormControl(),
       })

   }
  
   saveTask(task: Task){
     this.taskService.saveTask(task);
     this.navCtrl.pop();
   }

  ngOnInit() {
  }

}










  


