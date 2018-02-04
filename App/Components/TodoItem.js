import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Checkbox from './Checkbox';

class TodoItem extends React.Component {
  render() {
    const done = this.props.done;
    return (
      <View style={styles.content}>
        <Checkbox
          isChecked={done}
          onCheck={this.props.onCheck}
        />
        <Text style={[styles.text, done && styles.done]}>
          {this.props.title}
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

function mapStateToProps(storeState, props) {
  return {
    done: storeState.find(item => item.title === props.title).done,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onCheck: () => dispatch({type: 'CHECK', title: props.title}),
  };
}

const ConnectedTodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItem);
export default ConnectedTodoItem;
