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

const QuizHome = ({addCardFlow, navigateTo, navigation, questions}) => {
  return(
    <View style={styles.container}>
      {
        (questions === undefined || questions.length === 0)
        ? <View>
            <Text>Lets Add Some Cards</Text>
            <TouchableHighlight
              style={{padding: 20, backgroundColor: 'red'}}
              onPress={() => addCardFlow(navigation.state.params)}>
              <Text>Add Card</Text>
            </TouchableHighlight>
          </View>
        : <View style={styles.container}>
            <TouchableHighlight
              style={{padding: 20, backgroundColor: 'red'}}
              onPress={() => addCardFlow(navigation.state.params)}>
              <Text>Add Card</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{padding: 20, backgroundColor: 'lightblue'}}
              onPress={() => navigateTo(navigation.state.params)}>
              <Text>Start Quiz</Text>
            </TouchableHighlight>
          </View>
      }
    </View>
  )
}

export default class Deck extends Component {
  state = {
    questions: [],
    loaded: false
  }
  navigateTo = ({key, name}) => {
    const {navigate} = this.props.navigation
    navigate('StartQuiz', {key, name})
  }

  addCardFlow = ({key, name}) => {
    const {navigate} =this.props.navigation
    navigate('AddCard', {key, name})
  }

  componentWillMount() {
    const {key} = this.props.navigation.state.params
    AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((resp) => {
      const {questions} = data = JSON.parse(resp)
        this.setState({
          questions: data.questions[key],
          loaded: true
        })
    })
    .catch(err => (console.log(err)))
  }

  render() {
    return(
      <View style={{flex: 1}}>
      {
        (this.state.loaded === false)
        ? <View>
            <Text>Here?</Text>
            <ActivityIndicator
              animating={true}
              color="white"
              size="large"
              style={{margin: 20}} />
            </View>
        : <QuizHome
            questions={this.state.questions}
            navigateTo={this.navigateTo}
            addCardFlow={this.addCardFlow}
            navigation={this.props.navigation}
            />
      }
      </View>

    )
  }
}