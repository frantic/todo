import React from 'react';
import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devtools from 'remote-redux-devtools';

import TodoScreen from './App/Screens/TodoScreen';
import { restoreState } from './App/Store/Actions';
import { reducer } from './App/Store/Reducer';

const store = createStore(reducer, devtools());

// Primitive version of redux-persist
AsyncStorage.getItem('state').then(json => {
  if (json) {
    store.dispatch(restoreState(JSON.parse(json)));
  }
  store.subscribe(() => {
    AsyncStorage.setItem('state', JSON.stringify(store.getState()));
  })
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
  }
}
