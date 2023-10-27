import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { TodoRoutingModule } from './todo-routing.module';

import { TodosPipe } from './pipes';
import { TodoComponent } from './todo.component';

import { 
  EditTodoDialogComponent,
  TabsNavbarComponent,
  TodoFormComponent, 
  TodoTabComponent
} from './components';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    TodoComponent,
    EditTodoDialogComponent,
    TodosPipe,
    TodoFormComponent,
    TabsNavbarComponent,
    TodoTabComponent
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
    FormsModule,
    ReactiveFormsModule.withConfig({
      warnOnNgModelWithFormControl: 'never'
    })
  ]
})
export class TodoModule { }
