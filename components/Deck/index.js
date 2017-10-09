import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import styles from  './styles'

export default class QuizDeck extends Component {

  navigateTo = ({key, name}) => {
    const {navigate} = this.props.navigation
    navigate('QuizQuestion', {key, name})
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight
          style={{padding: 20, backgroundColor: 'red'}}
          onPress={() => this.navigateTo(this.props.navigation.state.params)}>
          <Text>Add Question</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{padding: 20, backgroundColor: 'lightblue'}}
          onPress={() => this.navigateTo(this.props.navigation.state.params)}>
          <Text>Start Quiz</Text>
        </TouchableHighlight>
      </View>
    )
  }
}