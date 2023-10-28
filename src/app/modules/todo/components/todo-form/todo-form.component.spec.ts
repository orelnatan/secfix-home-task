import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TodoFormComponent } from './todo-form.component';
import { PriorityType, Todo } from '../../../../modules/store/todo/todo.reducer';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [
        ReactiveFormsModule, 
        MatFormFieldModule, 
        MatRadioModule, 
        NoopAnimationsModule, 
        MatFormFieldModule, 
        MatInputModule,
        ReactiveFormsModule, 
        FormsModule, 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onSubmit event with the correct values when the form is sabmited', () => {
    const emitSpy = spyOn(component.onSubmit, 'emit');

    const todoName = 'Sample Todo';
    const priority = PriorityType.High; 
    fixture.detectChanges();

    component.todoForm.controls['name'].setValue(todoName);
    component.todoForm.controls['priority'].setValue(priority);

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(emitSpy).toHaveBeenCalledWith({
      name: todoName,
      priority: priority,
    } as Todo);
  });
});
