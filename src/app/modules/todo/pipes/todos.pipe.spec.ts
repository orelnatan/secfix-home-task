import { TestBed } from '@angular/core/testing';

import { TodosPipe } from './todos.pipe'; 
import { PriorityType, Todo, TodoStatus } from '../../store/todo/todo.reducer';

describe('TodosPipe', () => {
  let pipe: TodosPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosPipe],
    });

    pipe = TestBed.inject(TodosPipe);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same array when status is not specified', () => {
    const todos: Todo[] = [
      { id: 1, name: 'Todo 1', status: TodoStatus.Complete, priority: PriorityType.Low },
      { id: 2, name: 'Todo 2', status: TodoStatus.InProgress, priority: PriorityType.Low },
    ];

    const result = pipe.transform(todos);
    expect(result).toEqual(todos);
  });

  it('should filter todos by status', () => {
    const todos: Todo[] = [
      { id: 1, name: 'Todo 1', status: TodoStatus.Complete, priority: PriorityType.Low },
      { id: 2, name: 'Todo 2', status: TodoStatus.InProgress, priority: PriorityType.Low },
      { id: 3, name: 'Todo 3', status: TodoStatus.Complete, priority: PriorityType.Low },
    ];

    const result = pipe.transform(todos, TodoStatus.Complete);
    expect(result.length).toBe(2);
    expect(result[0].status).toBe(TodoStatus.Complete);
    expect(result[1].status).toBe(TodoStatus.Complete);
  });
});
