import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import FlipCard from 'react-native-flip-card';
import { connect } from 'react-redux';

import { updateQuizScore } from '../../stores/actions';
import styles from './styles';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: false,
      question_idx: 0,
      answer: 'wrong',
      complete: false
    };
    this.changeQuestion.bind(this);
  }

  componentDidUpdate() {
    const key = this.props.navigation.state.params.key;
    const count = this.props.questions.length;
    const idx = (this.props.quizScore.qIndex + 1);
    if (count <= idx) {
      this.props.storeScore({ ...this.props.quizScore, qCount: count, quiz: key });
    }
  }

  changeQuestion() {
      const { questions } = this.props;
      this.setState((previousState) => {
        if (previousState.question_idx >= (questions.length - 1)) {
          return {
            question_idx: questions.length - 1,
            flip: !this.state.flip,
            answer: 'new',
            complete: true
          };
        } else {
          return { question_idx: previousState.question_idx + 1,
            flip: !this.state.flip,
            answer: 'new'
          };
        }
      }
    );
  }

  flipForAnswer(idx, val) {
    const { questions } = this.props;
    const complete = (this.state.question_idx === questions.length-1)

    const payload = this.scorePayload(
      questions.length,
      this.state.question_idx,
      val);

    this.props.answerQuestion(payload);
    if (val === 'correct') {
      this.setState({ flip: !this.state.flip, answer: val, complete });
    } else {
      this.setState({ flip: !this.state.flip, complete });
    }
  }

  scorePayload(qCount, qIndex, answer) {
    const value = (answer === 'correct') ? 1 : 0;
    return {
      qCount,
      qIndex,
      value
    }
  }

  returnToDecks() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main'})
      ]
    });
    this.props.navigation.dispatch(resetAction)
  }

  backToDecks() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => {this.returnToDecks()} }>
        <Text>Try Another Quiz</Text>
      </TouchableHighlight>
    );
  }

  nextQuestion() {
    return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => { this.changeQuestion(); }}
    >
      <Text>Next Question</Text>
    </TouchableHighlight>
    );
  }

  answerQuestion(answerStatus, hint, additionalStyles={}) {
    const correct = answerStatus ? 'correct' : 'wrong';
    return (
      <TouchableHighlight
        key={hint}
        style={[styles.button, additionalStyles]}
        onPress={() => {this.flipForAnswer(this.state.question_idx, correct)} }>
        <Text style={{fontSize: 18}}>{hint}</Text>
      </TouchableHighlight>
    );
  }

  remainingQuestions(qlength, idx) {
    const count = qlength - idx
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        {count === 1 ? <Text>Final Question</Text> : <Text>{count} Remaining</Text> }
      </View>
    );
  }

  retryQuiz() {
    return (
      <TouchableHighlight
        style={[styles.button, {backgroundColor: 'red'}]}
        onPress={() => {
          this.props.resetQuiz()
          this.props.retryQuizReset(this.props.navigation.state.params.key)
          this.props.navigation.goBack()}
          }
        >
        <Text>Retry Quiz</Text>
      </TouchableHighlight>
    );
  }

  finalCard() {
    return (
     <View>
      <Text>Quiz Completed</Text>
      <Text>{this.props.quizScore.score} / {this.props.questions.length }</Text>
      {this.retryQuiz()}
      {this.backToDecks()}
    </View>
    );
  }

  render() {
    const { questions } = this.props;
    const question = questions[this.state.question_idx];
    return (
        <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: '#B3E5FC' }}>
          <FlipCard
            flip={this.state.flip}
            alignHeight
            perspective={1000}
            clickable={false}
            style={{ flex: 1, borderRadius: 5, borderColor: '#2980b9', padding: 10 }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                <Text style={{ fontSize: 30 }}>{question.title}</Text>
              </View>

              <View style={{ flex: 1 }}>
                {question.answers.map((answer) =>
                  this.answerQuestion(answer.correct, answer.hint))
                }
              </View>
              {this.remainingQuestions(questions.length, this.state.question_idx)}
            </View>
            <View style={{ flex: 1 }}>
              {(this.state.answer === 'correct')
                ? <View style={styles.flex1centered}>
                    <Text style={{ fontSize: 30 }}>Correct!</Text>
                    { this.state.complete
                      ? this.finalCard()
                      : this.nextQuestion()
                    }

                  </View>
                : <View style={styles.flex1centered}>
                    <Text style={{fontSize: 30}}>InCorrect</Text>
                    { this.state.complete
                      ? this.finalCard()
                      : this.nextQuestion()
                    }
                  </View>
              }
            </View>
          </FlipCard>
        </View>
    );
  }
}

export default connect((state) => (
  {
    quizScore: state.currentQuiz
  }
  ), (dispatch) => ({
  updateScore(qIndex) {
    dispatch(updateQuizScore(qIndex));
  },
  answerQuestion(payload) {
    dispatch({ type: 'ANSWER_QUESTION', payload });
  },
  score() {
    dispatch({ type: 'QUIZ_SCORE' });
  },
  resetQuiz() {
    dispatch({ type: 'RESET_QUIZ' });
  },
  storeScore(payload) {
    dispatch({ type: 'STORE_SCORE', payload });
  },
  retryQuizReset(quizKey) {
    dispatch({ type: 'RETRY_QUIZ', payload: { quizKey } });
  }
}))(QuizQuestion);