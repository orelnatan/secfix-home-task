import { Todo } from "../todo.reducer";

export function changeTodoName(todos: Todo[], todo: Todo): Todo[] {
  return todos.map((element: Todo): Todo => {
    return element.id === todo.id ? { ...element, name: todo.name } : element;
  })
}