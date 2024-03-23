import { Injectable } from '@angular/core';
import { Itodos } from '../models/interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todoArray : Array<Itodos> = [
  {
    fname : "anuja",
    lname : "bhosle",
    email : "bhosleanuja@50gmail.com",
    contact : 12354897,
    id : 1
  }
  
]
sumisubj$ : Subject<Itodos> = new Subject()
editsdsub$ : Subject<Itodos> = new Subject<Itodos>()

  constructor() { 
    this.sumisubj$
    .subscribe(res =>{
      this.todoArray.push(res)
    })
  }
 fetchAlltodo (){
  return this.todoArray
 }

 addstds(newstd : Itodos){
  this.todoArray.unshift(newstd)
 }

update( udate : Itodos){
  for (let i  = 0; i < this.todoArray.length; i++) {
    if(this.todoArray[i].id == udate.id){
      this.todoArray[i] = udate;
      break;
    }
    
  }

}

remove(std : Itodos){
  let getIndex  = this.todoArray.findIndex(std => std.id === std.id);
  this.todoArray.splice(getIndex,1);

}

}
