import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const ROUTES: Routes = [
  { path: 'list', component: TodoListComponentComponent },
  { path: 'add', component: TodoEditComponent },
  { path: 'edit/:id', component: TodoEditComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

