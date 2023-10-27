import { Todo } from "../todo.reducer";

export function removeTodo(todos: Todo[], todo: Todo): Todo[] {
  return todos.filter(element => element.id != todo.id);
}