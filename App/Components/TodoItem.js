import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Checkbox from './Checkbox';
import { toggleTodo } from '../Store/Actions';

@connect(null, mapDispatchToProps)
export default class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <View style={styles.content}>
        <Checkbox isChecked={todo.done} onCheck={this.props.onToggle} />
        <Text style={[styles.text, todo.done && styles.done]}>
          {this.props.todo.title}
        </Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    onToggle: () => dispatch(toggleTodo(props.todo.id)),
  };
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
