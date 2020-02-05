import { Injectable } from '@angular/core';
import { Todo } from './todo-model';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
private  todolist: Todo[] = new Array();

  constructor() { }
  getAll() {

    return  this.todolist ;
  }

  get(id: number) {
    let tache;
    for (var i of this.todolist) {
      if(id === i.id) {
          tache = i;
      }
    }
    return tache;
  }
  getNewId() {
    if(this.todolist.length==0){
      return 1;
    }
    let listId: number[] = new Array();
    for (var i of this.todolist) {
      listId.push(i.id);
    }
    var newId = (Math.max(...listId) + 1);
    return newId;
     }

  add(todo: Todo) {
   let todoo = new Todo(this.getNewId(), todo.label);
   this.todolist.push(todoo);

   return this.todolist;
}

edit(todo: Todo) {
  for (var i of this.todolist) {
  if(todo.id === i.id) {

  i.label = todo.label;

          }
    }
}
delete(id: number) {
      const found = this.todolist.findIndex(element => element.id === id)
      this.todolist.splice(found, 1);

}
}
