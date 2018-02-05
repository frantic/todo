import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

export default class Summary extends React.Component {
  render() {
    const completedCount = this.props.completedCount;
    let label;
    if (!completedCount) {
      label = 'Lots of things to do!';
    } else if (completedCount === 1) {
      label = 'One TODO completed';
    } else {
      label = completedCount + ' TODOs completed';
    }
    return (
      <Text style={styles.summary}>
        {label}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  summary: {
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
    color: '#B4B7BA',
  },
});
