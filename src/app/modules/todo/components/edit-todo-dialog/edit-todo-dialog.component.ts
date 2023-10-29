import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Todo } from '../../../../modules/store/todo/models';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
})
export class EditTodoDialogComponent implements OnInit {
  todo: Todo = {} as Todo;

  constructor(
    private readonly dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: { todo: Todo },
  ) { }

  ngOnInit(): void {
    this.todo = { ...this.data.todo };
  }

  done(): void {
    this.dialogRef.close(this.todo);
  }
}
