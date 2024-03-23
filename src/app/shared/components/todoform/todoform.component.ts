import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { Itodos } from '../../models/interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
todoform ! :FormGroup;
isedited ! :Itodos ;
isIneditmode  : boolean = false

  constructor( private _uuidsservice : UuidService,
                 private _todoService :TodoService) { }

  ngOnInit(): void {
    this.creatstd()
    this._todoService.editsdsub$
    .subscribe(std =>{
      console.log(std);
      this.isedited = std;
      this.isIneditmode = true;
      this.todoform.patchValue(std)
      
    })
  }

  creatstd(){
    this.todoform = new FormGroup({
      fname : new FormControl(null,[Validators.required]),
      lname : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      contact : new FormControl(null,[Validators.required])


    })
  }
  onsumit(){
      if (this.todoform.valid) {
        let  todoObj : Itodos ={...this.todoform.value, todoid:this._uuidsservice.uuid() }
        console.log(todoObj);
         this._todoService.sumisubj$.next(todoObj)
         this.todoform.reset()



      }
  }
  onudate(){
    let  update  = {...this.todoform.value, id : this.isedited.id}
    this.todoform.reset();
    this.isIneditmode = false;
    this._todoService.update(update)
    
  }

}
