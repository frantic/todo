import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  state = {
    todos: [{
      title: 'Build TODO app in under 1 hour',
      done: false,
    }, {
      title: 'Prepare slides',
      done: false,
    }, {
      title: 'Eat some cake',
      done: true,
    }],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.todos}
          keyExtractor={item => item.title}
          renderItem={({item}) => <TodoItem title={item.title} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
