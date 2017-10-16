import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import styles from './style';
import { uuidv4 } from '../../utils/helpers';
import { addDecktoStore } from '../../stores/actions';

export default class AddDeck extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      description: null,
      questionCount: 0,
      key: uuidv4()
    };

    this.submitForm.bind(this);
    this.update.bind(this);
  }

  submitForm(nav) {
    const { name, description } = this.state;
    if (name === null || description === null) {
      return Alert.alert('Missing info', 'Please ensure you have both name and description')
    }
    addDecktoStore(this.state);
    nav.goBack();
  }

  update(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        scrollEnabled={false}
        style={styles.container}
        contentContainerStyle={styles.container}
      >
          <View style={styles.standard}>
            <Text>Add New Deck</Text>
          </View>
          <View style={{ flex: 2, padding: 10 }}>
            <View>
              <Text>Title:</Text>
              <TextInput
                onChangeText={(value) => {this.update('name', value)}}
                style={styles.textBox}
                value={this.state.title} />
            </View>
            <View>
              <Text>Description:</Text>
              <TextInput
                onChangeText={(value) => {this.update('description', value)}}
                style={{height: 40, borderBottomColor: 'grey', borderWidth: 1}}
                value={this.state.description} />
            </View>
            <View style={{flex: 1, padding: 10}}>
              <TouchableOpacity
                onPress={() => {this.submitForm(this.props.navigation) }}
                style={styles.btn}>
                  <Text style={styles.btnText}>Create Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
    );
  }
}