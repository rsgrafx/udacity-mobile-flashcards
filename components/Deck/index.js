import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {getQuestions} from '../../stores/actions'
import QuizHome from './QuizHome'
import {connect} from 'react-redux'
/*
  Turn into Stateless component.
*/

class Deck extends Component {

  navigateTo = ({key, name}) => {
    const {navigate} = this.props.navigation
    navigate('StartQuiz', {key, name})
  }

  addCardFlow = ({key, name}) => {
    const {navigate} = this.props.navigation
    navigate('AddCard', {key, name})
  }

  componentWillMount() {
    const {key} = this.props.navigation.state.params
    getQuestions(key)
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>{this.props.navigation.state.params.name}</Text>
          <Text style={{fontWeight: 'bold'}}>{this.props.questions.length} {
            this.props.questions.length === 1
            ? 'Question'
            : 'Questions'
            }</Text>
        </View>
        <QuizHome
          navigateTo={this.navigateTo}
          addCardFlow={this.addCardFlow}
          navigation={this.props.navigation} />
      </View>
    )
  }
}

export default connect((state) => ({
  questions: state.questions
}))(Deck)