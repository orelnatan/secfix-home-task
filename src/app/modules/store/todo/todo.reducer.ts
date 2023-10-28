import { Action, createReducer, on } from '@ngrx/store';

import { changeTodoName, toggleTodoStatus, generateNewTodo, removeTodo, sortByPriority } from './utils';

import * as actions from './todo.actions';

export const TODO_FEATURE_KEY = 'todo-store';

export enum TodoStatus {
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
}

export enum PriorityType {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = "HIGH"
}

export interface Todo {
  id: number;
  name: string;
  status: TodoStatus;
  priority?: PriorityType
}

export interface TodoState {
    todoList: Todo[];
}

export const initialState: TodoState = {
  todoList: []
}

const todoReducer = createReducer(
    initialState,
    on(actions.getTodosSuccess, (state, { todoList }) => ({
      ...state,
      todoList: sortByPriority(todoList),
    })),
    on(actions.addTodo, (state, { todo }) => ({
      ...state,
      todoList: sortByPriority(
        [...state.todoList, generateNewTodo(state.todoList, todo)]
      ), 
    })),
    on(actions.removeTodo, (state, { todo }) => ({
      ...state,
      todoList: [ ...removeTodo(state.todoList, todo) ], 
    })),
    on(actions.changeTodoName, (state, { todo }) => ({
      ...state,
      todoList: [ ...changeTodoName(state.todoList, todo) ] 
    })),
    on(actions.changeTodoStatus, (state, { todo }) => ({
      ...state,
      todoList: [ ...toggleTodoStatus(state.todoList, todo) ] 
    })),
);

export function reducer(state: TodoState | undefined, action: Action) {
    return todoReducer(state, action);
}

