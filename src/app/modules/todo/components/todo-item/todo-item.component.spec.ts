import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { TodoItemComponent } from './todo-item.component';
import { PriorityType, Todo, TodoStatus } from '../../../store/todo/todo.reducer';

const TODO: Todo = { id: 1, name: 'Sample Todo', status: TodoStatus.InProgress, priority: PriorityType.Low };

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      imports: [MatIconModule]
    });

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    component.todo = TODO;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the "remove" event when the delete button is clicked', () => {
    const emitSpy = spyOn(component.remove, 'emit');
  
    const deleteButton = fixture.debugElement.nativeElement.querySelector('.todo-actions button[color="warn"]');
    deleteButton.click();
  
    expect(emitSpy).toHaveBeenCalledWith(TODO);
  });

  it('should emit the "status" event when the complete button is clicked', () => {
    const emitSpy = spyOn(component.status, 'emit');
  
    const completeButton = fixture.debugElement.nativeElement.querySelector('.todo-actions button[color="primary"]');
    completeButton.click();
  
    expect(emitSpy).toHaveBeenCalledWith(TODO);
  });

  it('should emit the "edit" event when the todo name is clicked', () => {
    const emitSpy = spyOn(component.edit, 'emit');
  
    const todoName = fixture.debugElement.nativeElement.querySelector('.todo-name');
    todoName.click();
  
    expect(emitSpy).toHaveBeenCalledWith(TODO);
  });
});
