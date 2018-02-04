import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './App/Components/TodoList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
