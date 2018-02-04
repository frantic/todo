import 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoScreen from './App/Screens/TodoScreen';
import { todos } from './App/Store/TodoReducer';

const initialTodos = [{
  title: 'Build TODO app in under 1 hour',
  done: false,
}, {
  title: 'Prepare slides',
  done: false,
}, {
  title: 'Eat some cake',
  done: true,
}];

const store = createStore(todos, initialTodos);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
  }
}
