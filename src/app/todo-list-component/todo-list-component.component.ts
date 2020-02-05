import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from '../todo-list.service';
import { Todo } from '../todo-model';

@Component({
  selector: 'td-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private todoListService: TodoListService  ) { }

 todolist: Todo [] = new Array();
  ngOnInit() {

   this.todolist = this.todoListService.getAll();
   console.log(this.todolist);
  }

  editTodo(id) {
     this.todoListService.edit(id);
     this.router.navigate(['/edit']);
  }


  deleteTodo(id) {

    this.todoListService.delete(id);
  }
}
