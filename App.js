import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoItem from './App/Components/TodoItem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
});
