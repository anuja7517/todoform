import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  stdDate ! : Array<Itodos> 
  constructor( private _stdserives : TodoService) { }

  ngOnInit(): void {
    this.stdDate = this._stdserives.fetchAlltodo()
  }

  onEdit(std : Itodos){
    console.log(std);
    this._stdserives.editsdsub$.next(std)
    
  }
  onstddelte(stds : Itodos){
    this._stdserives.remove(stds)
  }
}
