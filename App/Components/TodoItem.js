import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Checkbox from './Checkbox';

export default class TodoItem extends React.Component {
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
