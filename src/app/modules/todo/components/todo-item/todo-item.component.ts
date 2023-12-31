import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoStatus, Todo } from '../../../../modules/store/todo/models';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo = {} as Todo;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() status: EventEmitter<Todo> = new EventEmitter();
  @Output() edit: EventEmitter<Todo> = new EventEmitter();

  statusEnum = TodoStatus;
}
