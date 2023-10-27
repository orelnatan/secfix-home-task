import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/modules/store/todo/todo.reducer';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() onSubmit: EventEmitter<Todo> = new EventEmitter();

  todoForm: FormGroup = this.formBuilder.group({
    name: new FormControl(null, [Validators.required]),
  });  

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  handleSubmit(): void {
    this.onSubmit.emit({ 
      name: this.todoForm.controls['name'].value
    } as Todo)
  }

}
