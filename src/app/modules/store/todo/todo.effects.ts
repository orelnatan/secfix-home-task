import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PriorityType, TodoStatus, Todo } from './models';

import * as actions from './todo.actions';


const todos: Todo[] = [
  {
    id: 1,
    name: 'Todo number 1 Complete',
    status: TodoStatus.Complete,
    priority: PriorityType.High
  },
  {
    id: 2,
    name: 'Todo number 2 Complete',
    status: TodoStatus.Complete,
    priority: PriorityType.Low
  },
  {
    id: 3,
    name: 'Todo number 3 InProgress',
    status: TodoStatus.InProgress,
    priority: PriorityType.Low
  },
  {
    id: 4,
    name: 'Todo number 4 InProgress',
    status: TodoStatus.InProgress,
    priority: PriorityType.Medium
  },
  {
    id: 5,
    name: 'Todo number 5 InProgress',
    status: TodoStatus.InProgress,
    priority: PriorityType.Medium
  },
  {
    id: 6,
    name: 'Todo number 6 Complete',
    status: TodoStatus.Complete,
    priority: PriorityType.High
  },
  {
    id: 7,
    name: 'Todo number 7 InProgress',
    status: TodoStatus.InProgress,
    priority: PriorityType.Low
  },
];

@Injectable()
export class TodoEffects {
  getToDoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getTodos),
      switchMap((_action) => of(todos).pipe(
          map((todoList) => actions.getTodosSuccess({ todoList })),
          catchError((error) => of(actions.getTodosFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
  ) {}
}
