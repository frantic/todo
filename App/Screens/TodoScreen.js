import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

@connect(mapStateToProps)
export default class TodoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          {this.props.todos.length} TODOs
        </Text>
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


function mapStateToProps(storeState) {
  return {
    todos: storeState.todos,
  };
}
