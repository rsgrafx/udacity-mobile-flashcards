import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator } from 'react-native';
import QuizQuestion from '../Deck/QuizQuestion';
import { APP_STORAGE_KEY } from '../../stores';

export default class StartQuiz extends Component {
  state = {
    questions: [],
    loaded: false
  }
  componentWillMount() {
    const { key } = this.props.navigation.state.params;

    AsyncStorage.getItem(APP_STORAGE_KEY)
      .then((resp) => {
        const data = JSON.parse(resp)
        this.setState({ questions: data.questions[key], loaded: true })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 50 }}>
      {
        this.state.loaded
        ? <QuizQuestion
          questions={this.state.questions}
          navigation={this.props.navigation}
        />
        : <ActivityIndicator
            animating
            color="white"
            size="large"
            style={{ margin: 20 }}
        />
      }
      </View>
    );
  }
}