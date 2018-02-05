import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import NewTodoInput from '../Components/NewTodoInput';
import TodoList from '../Components/TodoList';
import Summary from '../Components/Summary';

export default class TodoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          TODO
        </Text>
        <NewTodoInput />
        <TodoList todos={[]} />
        <Summary />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  logo: {
    paddingLeft: 20,
    fontSize: 40,
  },
});
