import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo, TodoStatus } from '../../../store/todo/todo.reducer';

@Component({
  selector: 'todo-tab',
  templateUrl: './todo-tab.component.html',
  styleUrls: ['./todo-tab.component.scss']
})
export class TodoTabComponent {
  @Input() todo: Todo;
  @Input() noTodosCaption: string;
  @Input() noTodosFound: boolean;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() status: EventEmitter<Todo> = new EventEmitter();
  @Output() edit: EventEmitter<Todo> = new EventEmitter();

  statusEnum = TodoStatus;

  openEditDialog(a: any) {}
}
