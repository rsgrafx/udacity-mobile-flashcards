import React, {Component} from 'react'
import {View, TouchableHighlight, Text} from 'react-native'
import {connect} from 'react-redux'
import styles  from  './styles'

const QuizHome = ({addCardFlow, navigateTo, navigation, qCount}) => {
  return(
    <View style={styles.container}>
      {
        (qCount > 0)
        ? <View style={styles.container}>
            <TouchableHighlight
              style={{padding: 20, backgroundColor: 'red'}}
              onPress={() => addCardFlow(navigation.state.params)}>
              <Text>Create New Question</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{padding: 20, backgroundColor: 'lightblue'}}
              onPress={() => navigateTo(navigation.state.params)}>
              <Text>Start Quiz</Text>
            </TouchableHighlight>
          </View>
        : <View>
            <Text>Lets Add Some Cards</Text>
            <TouchableHighlight
              style={{padding: 20, backgroundColor: 'red'}}
              onPress={() => addCardFlow(navigation.state.params)}>
              <Text>Add Card</Text>
            </TouchableHighlight>
          </View>
      }
    </View>
  )
}

const mapStateToProps = state => ({
  qCount: state.questions.length
})

export default connect(mapStateToProps, null)(QuizHome)