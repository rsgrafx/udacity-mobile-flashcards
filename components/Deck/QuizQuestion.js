import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import FlipCard from 'react-native-flip-card';
import { connect } from 'react-redux';

import { updateQuizScore } from '../../stores/actions';
import { correctSoundFX, wrongSoundFX } from '../../assets';

import * as Answer from './Answers';
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
      correctSoundFX();
      this.setState({ flip: !this.state.flip, answer: val, complete });
    } else {
      wrongSoundFX();
      this.setState({ flip: !this.state.flip, complete });
    }
  }

  scorePayload(qCount, qIndex, answer) {
    const value = (answer === 'correct') ? 1 : 0;
    return {
      qCount,
      qIndex,
      value
    };
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
        style={[styles.answerBtn, { backgroundColor: '#e67e22', marginTop: 20 }]}
        onPress={() => {this.returnToDecks(); }}
      >
        <Text style={styles.answerQuestionTxt}>Try Another Quiz</Text>
      </TouchableHighlight>
    );
  }

  nextQuestion() {
    return (
      <TouchableHighlight
        style={[styles.button, styles.answerBtn]}
        onPress={() => { this.changeQuestion(); }}
      >
        <Text style={styles.answerQuestionTxt}> Next Question</Text>
      </TouchableHighlight>
    );
  }

  answerQuestion(answerStatus, hint, additionalStyles = {}) {
    const correct = answerStatus ? 'correct' : 'wrong';
    return (
      <TouchableHighlight
        key={hint}
        style={[styles.button, additionalStyles]}
        onPress={() => { this.flipForAnswer(this.state.question_idx, correct); }}
      >
       <Text style={styles.answerQuestionTxt}>{hint}</Text>
      </TouchableHighlight>
    );
  }

  remainingQuestions(qlength, idx) {
    const tStyle = { fontWeight: 'bold', color: 'blue' }
    const count = qlength - idx;
    return (
      <View style={styles.questionsLeft}>
        {count === 1
          ? <Text style={tStyle}>Final Question</Text>
          : <Text style={tStyle}>{count} Remaining</Text> }
      </View>
    );
  }

  retryQuiz() {
    return (
      <TouchableHighlight
        style={[styles.answerBtn, { backgroundColor: '#3498db' }]}
        onPress={() => {
          this.props.resetQuiz();
          this.props.retryQuizReset(this.props.navigation.state.params.key)
          this.props.navigation.goBack();
          }}
        >
        <Text style={styles.answerQuestionTxt}>Retry Quiz</Text>
      </TouchableHighlight>
    );
  }

  finalCard() {
    return (
     <View style={{alignContent: 'flex-end'}}>
      <View style={{alignItems: 'center', padding: 20 }}>
        <Text>Quiz Complete!</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Score: {this.props.quizScore.score} / {this.props.questions.length }</Text>
      </View>
      {this.retryQuiz()}
      {this.backToDecks()}
    </View>
    );
  }

  render() {
    const { questions } = this.props;
    const question = questions[this.state.question_idx];
    const [correctAnswer] = question.answers.filter(answ => (answ.correct))
    return (
        <View style={styles.flipCardStyle}>
          <FlipCard
            flip={this.state.flip}
            alignHeight
            perspective={1000}
            clickable={false}
            style={styles.flipCard}
          >
            <View style={styles.flipCardStyle}>
              <View style={styles.cardDetail}>
                <Text style={{ fontSize: 30, fontFamily: 'Avenir' }}>{question.title}</Text>
              </View>
               {question.answers.map((answer) =>
                  this.answerQuestion(answer.correct, answer.hint, styles.answerBtn))
                }
               {this.remainingQuestions(questions.length, this.state.question_idx)}
            </View>
            <View style={styles.flipCardStyle}>
              {(this.state.answer === 'correct')
                ? <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <Answer.Correct />
                    { this.state.complete
                      ? this.finalCard()
                      : this.nextQuestion()
                    }
                  </View>
                : <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <Answer.Wrong correctAnswer={correctAnswer} />
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