import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoScreen from './App/Screens/TodoScreen';
import { ADD_TODO, TOGGLE_TODO } from './App/Store/Actions';

const initialStoreState = {
  todos: [
    { id: 1, title: 'Build TODO app in under 1 hour', done: false },
    { id: 2, title: 'Prepare slides', done: false },
    { id: 3, title: 'Eat some cake', done: true },
  ],
};

function reducer(state, action) {
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

const store = createStore(reducer, initialStoreState);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
  }
}
