import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { setupQuizScore } from '../../stores/actions';

class QuizHome extends Component {

  componentWillMount() {
    this.props.resetQuiz();
    const { key } = this.props.navigation.state.params;
    this.props.setupQuiz(key);
  }

  render() {
    const { addCardFlow, navigateTo, navigation, qCount } = this.props
    return (
      <View style={styles.container}>
        {
          (qCount > 0)
          ? <View style={styles.container}>
              <TouchableHighlight
                style={{ padding: 20, backgroundColor: 'red' }}
                onPress={() => addCardFlow(navigation.state.params)}>
                <Text>Create New Question</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ padding: 20, backgroundColor: 'lightblue' }}
                onPress={() => navigateTo(navigation.state.params)}
              >
                <Text>Start Quiz</Text>
              </TouchableHighlight>
            </View>
          : <View>
              <Text>Lets Add Some Cards</Text>
              <TouchableHighlight
                style={{ padding: 20, backgroundColor: 'red' }}
                onPress={() => addCardFlow(navigation.state.params)}
              >
                <Text>Add Card</Text>
              </TouchableHighlight>
            </View>
        }
      </View>
    );
  }
}

export default connect(
  (state) => ({
    count: state.questions.length,
    questions: state.questions,
    scores: state.scores
  })
  , (dispatch) => ({
  resetQuiz() {
    dispatch({ type: 'RESET_QUIZ' });
  },
  setupQuiz(quizKey) { dispatch(setupQuizScore(quizKey)); }
  }
))(QuizHome);
