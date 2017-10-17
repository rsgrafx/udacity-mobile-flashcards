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
                style={[styles.createCardBtn, { backgroundColor: '#2980b9' }]}
                onPress={() => navigateTo(navigation.state.params)}
              >
                <Text style={styles.createCardBtnTxt}>
                  Start Quiz
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.createCardBtn}
                onPress={() => addCardFlow(navigation.state.params)}
              >
                <Text style={styles.createCardBtnTxt}>Create New Question</Text>
              </TouchableHighlight>
            </View>
          : <View style={[styles.container, { alignItems: 'stretch' }]}>
              <View style={{padding: 20, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Avenir', fontSize: 20}}>
                  Lets Add Some Cards
                </Text>
              </View>

              <TouchableHighlight
                style={styles.createCardBtn}
                onPress={() => addCardFlow(navigation.state.params)}
              >
                <Text style={styles.createCardBtnTxt}>
                  Create New Question
                </Text>
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
