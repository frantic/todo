import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoList from '../Components/TodoList';

export default class TodoScreen extends React.Component {
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
    const completedCount = this.state.todos.filter(item => item.done).length;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          TODO
        </Text>
        <TodoList
          todos={this.state.todos}
          onItemCheck={(title) => this.onItemCheck(title)}
        />
        <Text style={styles.summary}>
          {completedCount} TODOs completed
        </Text>
      </View>
    );
  }

  onItemCheck(title) {
    const updatedTodos = this.state.todos.map(item => {
      if (item.title === title) {
        return {...item, done: !item.done};
      } else {
        return item;
      }
    });
    this.setState({todos: updatedTodos});
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
  summary: {
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
    color: '#B4B7BA',
  },
});
