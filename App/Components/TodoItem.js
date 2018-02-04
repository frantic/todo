import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Checkbox from './Checkbox';

export default class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <View style={styles.content}>
        <Checkbox isChecked={todo.done} />
        <Text style={[styles.text, todo.done && styles.done]}>
          {this.props.todo.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  text: {
    marginLeft: 8,
    fontSize: 18,
    color: '#151515',
  },
  done: {
    color: '#B4B7BA',
    textDecorationLine: 'line-through'
  }
});
