import 'expo';
import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react';

import TodoScreen from './App/Screens/TodoScreen';
import { todos } from './App/Store/TodoReducer';

const initialTodos = {
  todos: [{
    title: 'Build TODO app in under 1 hour',
    done: false,
  }, {
    title: 'Prepare slides',
    done: false,
  }, {
    title: 'Eat some cake',
    done: true,
  }],
};

const persistConfig = { key: 'v3', storage: AsyncStorage };
const reducers = combineReducers({todos});
const persistedReducers = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducers, initialTodos, devToolsEnhancer());
const persistor = persistStore(store)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoScreen />
        </PersistGate>
      </Provider>
    );
  }
}
