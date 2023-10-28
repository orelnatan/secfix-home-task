import { PriorityType, Todo } from "../todo.reducer";

const PRIORITY_ORDER: Record<PriorityType, number> = {
  "HIGH": 1,
  "MEDIUM": 2,
  "LOW": 3,
};

export function sortByPriority(todos: Todo[]): Todo[] {
  const sortedTodos = todos.slice();

  sortedTodos.sort((todoA: Todo, todoB: Todo) => {
    const priorityA = PRIORITY_ORDER[todoA.priority!];
    const priorityB = PRIORITY_ORDER[todoB.priority!];

    if (priorityA < priorityB) return -1;
    if (priorityA > priorityB) return 1;
    
    return todoA.id - todoB.id;
  });

  return sortedTodos;
}