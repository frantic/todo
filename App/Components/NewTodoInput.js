import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../Store/Actions';

export default class TodoItem extends React.Component {
  state = {
    title: '',
  };

  render() {
    return (
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Add New TODO"
          underlineColorAndroid="transparent"
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
          onSubmitEditing={() => {
            this.setState({title: ''});
          }}
        />
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
  input: {
    flex: 1,
    marginTop: 20,
    marginLeft: 60,
    fontSize: 18,
    color: '#151515',
  },
});
