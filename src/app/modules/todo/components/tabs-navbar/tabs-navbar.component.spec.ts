import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { of } from 'rxjs';

import { TabsNavbarComponent } from './tabs-navbar.component';
import { TodosPipe } from '../../pipes';
import { TodoItemComponent } from '../todo-item';
import { Todo, TodoStatus, PriorityType } from '../../../store/todo/todo.reducer';

const TODO: Todo = {
    id: 1,
    name: 'Todo number 1 Complete',
    status: TodoStatus.Complete,
    priority: PriorityType.High
}

describe('TabsNavbarComponent', () => {
  let component: TabsNavbarComponent;
  let fixture: ComponentFixture<TabsNavbarComponent>;

  beforeEach(() => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);

    TestBed.configureTestingModule({
      declarations: [TabsNavbarComponent, TodosPipe, TodoItemComponent],
      imports: [MatIconModule, MatDialogModule, MatTabsModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
      ],
    });
 
    dialogSpy.open.and.returnValue(dialogRefSpy);
    dialogRefSpy.afterClosed.and.returnValue(of(TODO)); 

    fixture = TestBed.createComponent(TabsNavbarComponent);
    component = fixture.componentInstance;

    component.todos = [TODO];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit "remove" event when the todo-item component emits a "remove" event', () => {
    const emitSpy = spyOn(component.remove, 'emit');
    fixture.detectChanges();
  
    const todoItem = fixture.debugElement.query(By.css('todo-item'));
    todoItem.triggerEventHandler('remove', TODO);
    fixture.detectChanges();
    
    expect(emitSpy).toHaveBeenCalledWith(TODO);
  });

  it('should emit "status" event when the todo-item component emits a "status" event', () => {
    const emitSpy = spyOn(component.status, 'emit');
    fixture.detectChanges();
  
    const todoItem = fixture.debugElement.query(By.css('todo-item'));
    todoItem.triggerEventHandler('status', TODO);
    fixture.detectChanges();
    
    expect(emitSpy).toHaveBeenCalledWith(TODO);
  });

  it('should open a dialog when the todo-item component emits a "edit" event', () => {
    const emitSpy = spyOn(component, 'openEditDialog');
    fixture.detectChanges();
  
    const todoItem = fixture.debugElement.query(By.css('todo-item'));
    todoItem.triggerEventHandler('edit', TODO);
    fixture.detectChanges();
    
    expect(emitSpy).toHaveBeenCalledWith(TODO);
  });

  it('should emit edit event when the subscribe method is called with a todo object', () => {
    const emitSpy = spyOn(component.edit, 'emit');
    fixture.detectChanges();
  
    component.openEditDialog(TODO);
    expect(emitSpy).toHaveBeenCalledWith(TODO);
  });
});
