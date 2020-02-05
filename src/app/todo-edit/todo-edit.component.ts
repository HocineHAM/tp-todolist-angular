import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-model';
import { TodoListService } from '../todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { parse } from 'querystring';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
todo: Todo;
  constructor(private todoListService: TodoListService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    if (this.activatedRoute.snapshot.paramMap.get('id') == null) {

      this.todo = new Todo(0, '');
    } else {
      this.todo = this.todoListService.get(parseInt(this.activatedRoute.snapshot.paramMap.get('id')));
    }
    console.log(this.todo);
  }

  addTodo() {
    if (this.todo.id === 0) {

    this.todo.id = this.todoListService.getNewId();

    this.todoListService.add(this.todo);
} else {
  this.todoListService.edit(this.todo);
}
    this.router.navigate(['/list']);
  }

}
