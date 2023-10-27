import { Todo, TodoStatus } from "../todo.reducer";

export function generateNewTodo(todos: Todo[], name: string): Todo {
  return {
    id: Math.max(...todos.map(todo => todo.id!)) + 1,
    name: name,
    status: TodoStatus.InProgress
  }
}