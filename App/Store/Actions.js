export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RESTORE_STATE = 'RESTORE_STATE';

export function addTodo(title) {
  const randomId = Math.round(Math.random() * 10000);
  return {
    type: ADD_TODO,
    title: title,
    id: randomId,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id,
  };
}

export function restoreState(state) {
  return {
    type: RESTORE_STATE,
    state: state,
  };
}
