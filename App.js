import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoScreen from './App/Screens/TodoScreen';

const initialStoreState = {
  todos: [
    { id: 1, title: 'Build TODO app in under 1 hour', done: false },
    { id: 2, title: 'Prepare slides', done: false },
    { id: 3, title: 'Eat some cake', done: true },
  ],
};

function reducer(state) {
  // We'll talk about what this does later
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
