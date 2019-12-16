import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';

import { TaskService } from '../../data.service';
import { Task } from '../models/task.interface';


@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  task : Task;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private taskService: TaskService) { 

      this.task = this.navParams.get('task');
    }

    deleteTask(createDate: number){
      this.taskService.deleteTask(createDate);
      this.navCtrl.pop();
    }

  ngOnInit() {
  }

}


