import { Component, OnInit } from '@angular/core';
import {Task} from '../model/taskData.interface';
import { Subscription } from 'rxjs';
import {TaskInfoService} from '../services/task-info.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {
  tasklist: Array<Task> = [];
  tasklistSub:Subscription;

  constructor(
    private dataService:TaskInfoService) { }

  ngOnInit() {

    this.tasklistSub = this.dataService.list$.subscribe((taskData) => {
      this.tasklist = taskData.filter( (task) =>{
        if(task.status == false){
          return task;
        }
      })
    });
  }
delete(task){
    this.dataService.deleteFromList(task);
  
    }
    changeStatus( addedTime ) {
       this.dataService.changeStatus( addedTime );
    }

  }

