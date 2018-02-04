import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
