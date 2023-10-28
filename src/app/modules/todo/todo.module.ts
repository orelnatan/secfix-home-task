import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { TodoRoutingModule } from './todo-routing.module';

import { TodosPipe } from './pipes';
import { TodoComponent } from './todo.component';

import { 
  EditTodoDialogComponent,
  TabsNavbarComponent,
  TodoFormComponent, 
  TodoItemComponent
} from './components';

@NgModule({
  declarations: [
    TodoComponent,
    EditTodoDialogComponent,
    TodosPipe,
    TodoFormComponent,
    TabsNavbarComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
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

  ]
})
export class TodoModule { }
