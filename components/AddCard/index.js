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
    if (title === null || answerA === null || answerB === null ) {
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
            <Text style={[styles.headerLabel, { fontSize: 15 }]}>Add New Question to Deck:</Text>
            <Text style={styles.headerLabel}>{this.props.navigation.state.params.name}</Text>
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <Text style={[styles.inputLabel, { fontWeight: 'bold' }]}>Your Question:</Text>
            <View style={styles.textBox} >
              <TextInput
                placeholder={'Enter Question'}
                onChangeText={(value) => {this.update('title', value)}}
                style={styles.textBoxInput}
                value={this.state.AnswerA}
              />
            </View>
          </View>
          <View style={styles.answers}>
            <Text style={styles.inputLabel}>Correct Answer:</Text>
            <View style={styles.textBox}>
              <TextInput
                placeholder={'Enter Correct Answer here.'}
                style={styles.textBoxInput}
                onChangeText={(value) => {this.update('answerA', value)}}
                value={this.state.AnswerA}
              />
            </View>
            <Text style={styles.inputLabel}>Second Answer:.</Text>
            <View style={styles.textBox}>
              <TextInput
                placeholder={'Enter Wrong Answer here.'}
                onChangeText={(value) => { this.update('answerB', value); }}
                style={styles.textBoxInput}
                value={this.state.answerB}
              />
            </View>
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