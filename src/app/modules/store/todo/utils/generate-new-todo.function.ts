import { TodoStatus, Todo } from "../models";

export function generateNewTodo(todos: Todo[], todo: Todo): Todo {
  return {
    id: Math.max(...todos.map(todo => todo.id!)) + 1,
    name: todo.name,
    status: TodoStatus.InProgress,
    priority: todo.priority
  }
}