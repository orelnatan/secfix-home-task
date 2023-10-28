import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Todo, TodoStatus } from '../../../store/todo/todo.reducer';
import { EditTodoDialogComponent } from '../edit-todo-dialog';

@Component({
  selector: 'tabs-navbar',
  templateUrl: './tabs-navbar.component.html',
})
export class TabsNavbarComponent {
  @Input() todos: Todo[] = [];

  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() status: EventEmitter<Todo> = new EventEmitter();
  @Output() edit: EventEmitter<Todo> = new EventEmitter();

  statusEnum = TodoStatus;

  constructor(
    public readonly dialog: MatDialog,
  ) { }

  openEditDialog(todo: Todo): void { 
    this.dialog.open(EditTodoDialogComponent, { data: { todo } })
      .afterClosed()
      .subscribe((todo: Todo) => {
        todo && this.edit.emit(todo); 
    })
  }
}
