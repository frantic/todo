import { RESTORE_STATE, ADD_TODO, TOGGLE_TODO } from './Actions';

const initialStoreState = {
  todos: [
    { id: 1, title: 'Build TODO app in under 1 hour', done: false },
    { id: 2, title: 'Prepare slides', done: false },
    { id: 3, title: 'Eat some cake', done: true },
  ],
};

export function reducer(state = initialStoreState, action) {
  if (action.type === RESTORE_STATE) {
    return action.state;
  }
  if (action.type === ADD_TODO) {
    return {
      todos: [
        { id: action.id, title: action.title, done: false },
        ...state.todos,
      ],
    }
  }
  if (action.type === TOGGLE_TODO) {
    const updatedTodos = state.todos.map(
      todo => todo.id === action.id
        ? {...todo, done: !todo.done}
        : todo
    );
    return {
      todos: updatedTodos,
    };
  }
  return state;
}
