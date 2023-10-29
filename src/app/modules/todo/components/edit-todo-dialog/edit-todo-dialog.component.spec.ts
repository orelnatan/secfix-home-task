import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { EditTodoDialogComponent } from './edit-todo-dialog.component';
import { PriorityType, TodoStatus, Todo } from '../../../../modules/store/todo/models';

const TODO: Todo = {
  id: 1,
  name: 'Todo number 1 Complete',
  status: TodoStatus.Complete,
  priority: PriorityType.High
}

describe('EditTodoDialogComponent', () => {
  let component: EditTodoDialogComponent;
  let fixture: ComponentFixture<EditTodoDialogComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<EditTodoDialogComponent>>;

  beforeEach(async () => {
    dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [EditTodoDialogComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule, 
        FormsModule, 
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { todo: TODO } },
        { provide: MatDialogRef, useValue: dialogRef },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call close method with the todo item when the form is submitted', () => {
    fixture.detectChanges();

    const completeButton = fixture.debugElement.nativeElement.querySelector('#submit-button');
    completeButton.click();

    expect(dialogRef.close).toHaveBeenCalledWith(TODO);
  });
});
