import { Component, OnInit } from '@angular/core';
import {Task} from '../model/taskData.interface';
import { Subscription } from 'rxjs';
import {TaskInfoService} from '../task-info.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history: Array<Task> = [];
  historySub:Subscription;
  
  constructor(
    private dataService:TaskInfoService
  ) { }

  ngOnInit() {
    this.historySub = this.dataService.list$.subscribe((taskData) => {
      this.history = taskData.filter( (task) =>{
        if(task.status == true){
          return task;
        }
      })
    });
  }
  delete(task){
    this.dataService.deleteFromList(task);
  
  }
}
