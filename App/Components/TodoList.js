import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class TodoList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Text>{item.title}</Text>}
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
  },
});
