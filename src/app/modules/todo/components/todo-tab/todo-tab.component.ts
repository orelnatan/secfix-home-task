import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo, TodoStatus } from '../../../store/todo/todo.reducer';

@Component({
  selector: 'todo-tab',
  templateUrl: './todo-tab.component.html',
  styleUrls: ['./todo-tab.component.scss']
})
export class TodoTabComponent {
  @Input() todo: Todo = {} as Todo;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() status: EventEmitter<Todo> = new EventEmitter();
  @Output() edit: EventEmitter<Todo> = new EventEmitter();

  statusEnum = TodoStatus;
}
