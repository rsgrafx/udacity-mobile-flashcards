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

  /*
    I know if I move the responsiblity of handling state
    to Redux I can eliminate this.  But its minor.
  */

  update(key, value) {
    this.setState({ [key]: value });
  }

  Input = (state, title, key, placeholder) => (
    <View>
      <Text style={styles.inputLabel}>{title}</Text>
      <View style={styles.textBox}>
        <TextInput
          placeholder={placeholder}
          onChangeText={(value) => { this.update(key, value); }}
          style={styles.textBoxInput}
          value={state.title}
        />
      </View>
    </View>
  );

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        scrollEnabled={false}
        style={styles.container}
        contentContainerStyle={styles.container}
      >
          <View style={styles.standard}>
            <Text style={styles.headerLabel}>Add New Deck</Text>
          </View>
          <View style={{ flex: 2, padding: 10 }}>

            { this.Input(this.state, 'Title:', 'name', 'Title of Quiz') }
            { this.Input(this.state, 'Description:', 'description', 'Quiz Description') }

            <View style={{ flex: 1, padding: 10 }}>
              <TouchableOpacity
                onPress={() => {this.submitForm(this.props.navigation); }}
                style={styles.btn}>
                  <Text style={styles.btnText}>Create Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
    );
  }
}