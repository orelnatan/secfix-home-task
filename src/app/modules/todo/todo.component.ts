import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getTodos, addTodo, removeTodo, changeTodoStatus, changeTodoName } from '../store/todo/todo.actions';
import { getAllTodos } from '../store/todo/todo.selectors';
import { TodoStatus, Todo } from '../store/todo/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  statusEnum = TodoStatus;

  allTodos$: Observable<Todo[]> = this.store.pipe(select(getAllTodos));

  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getTodos());
  }
  
  addNewTodo(todo: Todo): void {    
    this.store.dispatch(addTodo({ todo }))
  }

  changeTodoName(todo: Todo) {
    this.store.dispatch(changeTodoName({ todo }))
  }

  changeTodoStatus(todo: Todo) {
    this.store.dispatch(changeTodoStatus({ todo }))
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ todo }))
  }
}
