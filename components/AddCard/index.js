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

  Input = (label, key, placeholder) => (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={[styles.inputLabel, { fontWeight: 'bold' }]}>{label}</Text>
      <View style={styles.textBox} >
        <TextInput
          placeholder={placeholder}
          onChangeText={(value) => { this.update(key, value); }}
          style={styles.textBoxInput}
        />
      </View>
    </View>
  )

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
          { this.Input('Your Question:', 'title', 'Enter Question') }
          <View style={styles.answers}>
            { this.Input('First Answer', 'answerA', 'Enter Correct Answer here.') }
            { this.Input('Second Answer', 'answerB', 'Enter Wrong Answer here.') }
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