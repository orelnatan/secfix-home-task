import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PriorityType, Todo } from '../../../../modules/store/todo/models';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() onSubmit: EventEmitter<Todo> = new EventEmitter();

  priorityEnum = PriorityType;

  todoForm: FormGroup = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
    priority: new FormControl(PriorityType.Low),
  });  

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  handleSubmit(): void {
    this.onSubmit.emit({ 
      name: this.todoForm.controls['name'].value,
      priority: this.todoForm.controls['priority'].value,
    } as Todo)
  }
}
