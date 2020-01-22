import { Component, OnInit } from '@angular/core';

import{Validators,FormBuilder,FormGroup} from '@angular/forms';

import { TaskInfoService } from '../services/task-info.service';
import{Task} from '../model/taskData.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  taskForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private dataService:TaskInfoService){
   }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      id:['',[Validators.required,Validators.minLength(2)]],
      name:['',[Validators.required,Validators.minLength(3)]],
      location:['',[Validators.required,Validators.minLength(3)]],
      desc:['',[Validators.required,Validators.minLength(3)]],
      cat:['',[Validators.required,Validators.minLength(3)]]
      

    })
  }

  addTask(){
    let task:Task ={
      id:this.taskForm.get('id').value,
      name: this.taskForm.get('name').value,
      location: this.taskForm.get('location').value,
      desc: this.taskForm.get('desc').value,
      cat: this.taskForm.get('cat').value,
      status:false,
      addedTime: new Date().getTime(),
      deletedTime:new Date().getTime()
    }
    this.dataService.addToList(task);
    this.taskForm.reset();
  }
    
  }

