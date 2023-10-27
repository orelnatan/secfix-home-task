import { Pipe, PipeTransform } from '@angular/core';

import { Todo, TodoStatus } from '../../store/todo/todo.reducer';

@Pipe({
   name: 'todos',
})
export class TodosPipe implements PipeTransform {
    transform(todos: Todo[], status?: TodoStatus): Todo[] { 
        return status ? todos.filter(todo => todo.status == status) : todos;
    }
}