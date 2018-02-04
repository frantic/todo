import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Checkbox from './Checkbox';

export default class TodoItem extends React.Component {
  render() {
    const isDone = false;
    return (
      <View style={styles.content}>
        <Checkbox />
        <Text style={[styles.text, isDone && styles.done]}>
          Write TODO app in under 1 hour
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
