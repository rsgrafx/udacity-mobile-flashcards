import React, {Component} from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import styles from  './styles'
import {APP_STORAGE_KEY} from '../../stores'

export default class Deck extends Component {
  state = {
    questions: []
  }
  navigateTo = ({key, name}) => {
    const {navigate} = this.props.navigation
    navigate('StartQuiz', {key, name})
  }

  componentWillMount() {
    const {key} = this.props.navigation.state.params
    AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((resp) => {
      const {questions} = JSON.parse(resp)
      this.setState({questions: questions[key]})
    })
    .catch(err => (null))
  }

  render() {
    return(
      <View style={{flex: 1}}>
      {
        (this.state.questions.length === 0)
        ? <ActivityIndicator
            animating={true}
            color="white"
            size="large"
            style={{margin: 20}} />
        : <View style={styles.container}>
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
      }
      </View>

    )
  }
}