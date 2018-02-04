import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Checkbox extends React.Component {
  render() {
    const isChecked = this.props.isChecked;
    return (
      <TouchableOpacity onPress={this.props.onCheck}>
        <View style={styles.outer}>
          {isChecked ? <View style={styles.inner} /> : null}
        </View>
      </TouchableOpacity>
    );
  }
}

const SIZE = 32;
const INNER_SIZE = 24;

const styles = StyleSheet.create({
  outer: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderColor: '#4EAFF2',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_SIZE / 2,
    backgroundColor: '#4EAFF2',
  },
});
