import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

import { addTodo, changeTodoName, changeTodoStatus, getTodos, removeTodo } from '../store/todo/todo.actions';
import { TabsNavbarComponent, TodoFormComponent, TodoItemComponent } from './components';
import { TodosPipe } from './pipes';
import { TodoComponent } from './todo.component';
import { PriorityType, TodoStatus, Todo } from '../store/todo/models';

const TODOS: Todo[] = [
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
];

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
        TodoFormComponent,
        TabsNavbarComponent,
        TodoItemComponent,
        TodosPipe
      ],
      imports: [
        StoreModule.forRoot({}),
        MatTabsModule,
        MatInputModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      providers: [
        provideMockStore({})
      ], 
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store>(Store) as MockStore;

    component.allTodos$ = of(TODOS);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the getTodos action on component initialization', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledWith(getTodos());
  });

  it('should dispatch the addTodo action with the todo item when the todo-form emits onSubmit event', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();

    const todoForm = fixture.debugElement.query(By.css('todo-form'));
    todoForm.triggerEventHandler('onSubmit', TODOS[1]);

    expect(dispatchSpy).toHaveBeenCalledWith(addTodo({ todo: TODOS[1] }));
  });

  it('should dispatch the removeTodo action with the todo item when the tabs-navbar emits remove event', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();

    const tabsNav = fixture.debugElement.query(By.css('tabs-navbar'));
    tabsNav.triggerEventHandler('remove', TODOS[1]);

    expect(dispatchSpy).toHaveBeenCalledWith(removeTodo({ todo: TODOS[1] }));
  });

  it('should dispatch the changeTodoStatus action with the todo item when the tabs-navbar emits status event', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();

    const tabsNav = fixture.debugElement.query(By.css('tabs-navbar'));
    tabsNav.triggerEventHandler('status', TODOS[1]);

    expect(dispatchSpy).toHaveBeenCalledWith(changeTodoStatus({ todo: TODOS[1] }));
  });

  it('should dispatch the changeTodoName action with the todo item when the tabs-navbar emits edit event', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    fixture.detectChanges();

    const tabsNav = fixture.debugElement.query(By.css('tabs-navbar'));
    tabsNav.triggerEventHandler('edit', TODOS[1]);

    expect(dispatchSpy).toHaveBeenCalledWith(changeTodoName({ todo: TODOS[1] }));
  });
});
