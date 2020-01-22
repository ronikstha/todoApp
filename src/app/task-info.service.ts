import { Injectable } from '@angular/core';
import{Task} from '../app/model/taskData.interface';
import{BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  taskList:Array<Task> = new Array();
  list$= new BehaviorSubject<Task[]>(this.taskList) ;

  
  constructor() { 
    this.loadData().then((data:Array<Task>) =>{
      data.forEach((item) =>{
        this.taskList.push(item)


        
      })
        this.list$.next( this.taskList );
    })
  }

  addToList(task:Task){
    this.taskList.push(task);
    this.list$.next(this.taskList);
    this.saveData();
    
  }
  deleteFromList( id: number){
    
    this.taskList.forEach((task:Task, index)=>{
      if(task.addedTime == id){
        this.taskList.splice(index,1);
      }
      this.list$.next( this.taskList );
    });

  }


  saveData(){
    let data = JSON.stringify( this.taskList );
    try{
      window.localStorage.setItem("tasks" , data)
      if( !window.localStorage.getItem("tasks") ){
        throw("local storage not available");
      }
    }
    catch( exc ){
      console.log( exc )
    }
  }

  loadData(){
    return new Promise( (resolve, reject) => {
      if(!window.localStorage.getItem("tasks")){
        reject(false);
      }
      else{

        let data =JSON.parse(window.localStorage.getItem("tasks"));
        resolve(data);
      }
    });
  }

 changeStatus(addedTime){
   this.taskList.forEach(
     (task) => {
       if( task.addedTime == addedTime ) {
         task.status = true;
       }
     }
   );
   this.saveData();
   this.list$.next( this.taskList);

 } 

}
