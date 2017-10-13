import React, {Component} from 'react'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import {NavigationActions}  from 'react-navigation'
import FlipCard from 'react-native-flip-card'

import styles from  './styles'

export default class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flip: false,
      question_idx: 0,
      answer: 'wrong',
      complete: false
    }
    this.changeQuestion.bind(this)
  }

  changeQuestion(idx) {
      const {questions} = this.props
      this.setState((previousState) => {
        if (previousState.question_idx >= (questions.length-1)) {
          return {
            question_idx: questions.length-1,
            flip: !this.state.flip,
            answer: 'new',
            complete: true}
        } else {
          return {question_idx: previousState.question_idx+1,
            flip: !this.state.flip,
            answer: 'new'}
        }
      }
    )
  }

  flipForAnswer(idx, val) {
    const {questions} = this.props
    const complete = (this.state.question_idx === questions.length-1)
    if (val === 'correct') {
      this.setState({flip: !this.state.flip, answer: val, complete})
    } else {
      this.setState({flip: !this.state.flip, complete})
    }
  }

  returnToDecks() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    const {questions} = this.props
    return(
        <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: '#B3E5FC'}}>
          <FlipCard
            flip={this.state.flip}
            alignHeight={true}
            perspective={1000}
            clickable={false}
            style={{flex: 1, borderRadius: 5, borderColor: '#2980b9'}}>
            <View style={{flex: 1}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 30}}>{questions[this.state.question_idx].title}</Text>
              </View>

              <View style={{flex: 1}}>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => {this.flipForAnswer(this.state.question_idx, 'correct')} }>
                  <Text>Answer One</Text>
                </TouchableHighlight>

                <TouchableHighlight
                  style={[styles.button, {backgroundColor: 'red'}]}
                  onPress={() => {this.flipForAnswer(this.state.question_idx, 'wrong')} }>
                  <Text>Answer Two</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{flex: 1}}>
              {(this.state.answer === 'correct')
                ? <View style={styles.flex1centered}>
                    <Text style={{fontSize: 30}}>Correct!</Text>
                    { this.state.complete
                      ? <View>
                          <TouchableHighlight
                            style={styles.button}
                            onPress={() => {this.returnToDecks()} }>
                            <Text>Do Another One</Text>
                            </TouchableHighlight>
                          <Text>Quiz Completed</Text>
                        </View>
                      : <TouchableHighlight
                          style={styles.button}
                          onPress={() => {this.changeQuestion(this.state.question_idx)} }>
                          <Text>Next Question</Text>
                        </TouchableHighlight>
                    }

                  </View>
                : <View style={styles.flex1centered}>
                    <Text>InCorrect</Text>
                    { this.state.complete
                      ? <View>
                          <TouchableHighlight
                            style={styles.button}
                            onPress={() => {this.returnToDecks()} }>
                            <Text>Do Another One</Text>
                            </TouchableHighlight>
                          <Text>Quiz Completed</Text>
                        </View>
                      : <TouchableHighlight
                          style={styles.button}
                          onPress={() => {this.changeQuestion(this.state.question_idx)} }>
                          <Text>Next Question</Text>
                        </TouchableHighlight>
                    }
                  </View>
              }

            </View>
          </FlipCard>
        </View>
    )
  }
}
