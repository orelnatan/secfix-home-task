import { PriorityType } from "./priority-type.enum";
import { TodoStatus } from "./todo-status.enum";

export interface Todo {
  id: number;
  name: string;
  status: TodoStatus;
  priority: PriorityType
}