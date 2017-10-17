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
            <Text style={styles.headerLabel}>Add New Deck</Text>
          </View>
          <View style={{ flex: 2, padding: 10 }}>
            <View>
              <Text style={styles.inputLabel}>Title:</Text>
              <View style={styles.textBox}>
                <TextInput
                  placeholder={"Title of Quiz."}
                  onChangeText={(value) => {this.update('name', value)}}
                  style={styles.textBoxInput}
                  value={this.state.title} />
              </View>
            </View>
            <View>
              <Text style={styles.inputLabel}>Description:</Text>
              <View style={styles.textBox}>
                <TextInput
                  placeholder={"Quiz description"}
                  onChangeText={(value) => {this.update('description', value)}}
                  style={styles.textBoxInput}
                  value={this.state.description} />
              </View>
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