import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todos}
          keyExtractor={item => item.title}
          renderItem={({item}) => <TodoItem
            title={item.title}
            done={item.done}
            onCheck={() => this.props.onItemCheck(item.title)}
          />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
