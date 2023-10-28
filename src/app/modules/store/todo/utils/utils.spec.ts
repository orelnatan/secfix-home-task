import { generateNewTodo } from "./generate-new-todo.function";
import { removeTodo } from "./remove-todo.function";
import { sortByPriority } from "./sort-by-priority.function";
import { toggleTodoStatus } from "./toggle-todo-status.function";

import { Todo, TodoStatus, PriorityType } from "../todo.reducer";
import { changeTodoName } from "./change-todo-name.function";

const TODOS: Todo[] = [
  { id: 1, name: 'Todo 1', status: TodoStatus.Complete, priority: PriorityType.Low },
  { id: 3, name: 'Todo 2', status: TodoStatus.InProgress, priority: PriorityType.High },
  { id: 5, name: 'Todo 3', status: TodoStatus.InProgress, priority: PriorityType.Medium },
];

describe('generateNewTodo', () => {
  it('should create new todo item with a unique id', () => {
    const todo: Todo = { name: 'New Todo', status: TodoStatus.InProgress, priority: PriorityType.Medium } as Todo;

    const result = generateNewTodo(TODOS, todo);
    expect(result.id).toBe(6);
  });
});

describe('changeTodoName', () => {
  it('should change the name of a todo item from the list', () => {
    const todo: Todo = { id: 3, name: 'Todo new name', status: TodoStatus.InProgress, priority: PriorityType.High };
    const result = changeTodoName(TODOS, todo);

    expect(result[1].name).toBe('Todo new name');
  });
});

describe('removeTodo', () => {
  it('should remove a todo from the list', () => {
    const todo: Todo = { id: 3, name: 'Todo 2', status: TodoStatus.InProgress, priority: PriorityType.High };
    const result = removeTodo(TODOS, todo);

    expect(result.length).toBe(2);
    expect(result.map(todo => todo.id).indexOf(todo.id)).toBe(-1);
  });
});

describe('toggleTodoStatus', () => {
  it('should toggle the todo status', () => {
    const todo: Todo = { id: 3, name: 'Todo 2', status: TodoStatus.InProgress, priority: PriorityType.High };
    const result = toggleTodoStatus(TODOS, todo);

    expect(result[1].status).toBe(TodoStatus.Complete);
  });
});

describe('sortByPriority', () => {
  it('should sort the array by the priority level', () => {
    const result = sortByPriority(TODOS);

    expect(result[0].id).toBe(3);
    expect(result[1].id).toBe(5);
    expect(result[2].id).toBe(1);
  });
});
