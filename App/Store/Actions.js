export const TOGGLE_TODO = 'TOGGLE_TODO';

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id,
  };
}
