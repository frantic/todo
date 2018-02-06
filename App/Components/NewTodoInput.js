import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../Store/Actions';

@connect(null, mapDispatchToProps)
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
            this.props.onAdd(this.state.title);
            this.setState({title: ''});
          }}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    onAdd: (title) => dispatch(addTodo(title)),
  };
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
