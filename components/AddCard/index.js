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
import { saveQuestion } from '../../stores';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizKey: this.props.navigation.state.params.key,
      title: null,
      answerA: null,
      answerB: null
    };

    this.submitForm.bind(this);
    this.update.bind(this);
  }

  submitForm(nav) {
    const { title, answerA, answerB } = this.state;
    if (title === null ||  answerA === null || answerB === null ) {
      return Alert.alert('Missing info', 'Please make sure you enter both question and answers');
    }

    saveQuestion(this.state);
    nav.goBack();
  }

  update(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { flexCenter } = styles;
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={flexCenter}
        contentContainerStyle={flexCenter}
      >
        <View style={flexCenter}>
          <View style={styles.correctCard}>
            <Text style={{ fontSize: 20 }}>Add New Card</Text>
            <Text style={{ fontSize: 25 }}>{this.props.navigation.state.params.name}</Text>
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <Text>Question Detail:</Text>
            <TextInput
              onChangeText={(value) => {this.update('title', value)}}
              style={styles.textInput}
              value={this.state.AnswerA}
            />
          </View>
          <View style={styles.answers}>
            <Text>Correct Answer:</Text>
            <TextInput
              onChangeText={(value) => {this.update('answerA', value)}}
              style={styles.textInput}
              value={this.state.AnswerA}
            />
            <Text>Incorrect Answer: Use hint to throw off.</Text>
            <TextInput
              onChangeText={(value) => { this.update('answerB', value) }}
              style={styles.textInput}
              value={this.state.answerB}
            />
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <TouchableOpacity
              onPress={() => { this.submitForm(this.props.navigation); }}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Save Question</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;