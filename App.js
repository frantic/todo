import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoScreen from './App/Screens/TodoScreen';
import { todos } from './App/Store/TodoReducer';

const store = createStore(todos);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
  }
}
