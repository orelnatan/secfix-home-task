import { TodoStatus, Todo } from "../models";

export function toggleTodoStatus(todos: Todo[], todo: Todo): Todo[] {
  return todos.map((element: Todo): Todo => {
    return element.id === todo.id ? { 
      ...element,
      status: (todo.status === TodoStatus.InProgress) ? TodoStatus.Complete : TodoStatus.InProgress
    } : element;
  })
}