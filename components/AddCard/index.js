import React, {Component} from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import {NavigationActions}  from 'react-navigation'

import styles from './style'

class AddCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      answerA: null,
      answerB: null
    }
    console.log(this.props)
    this.submitForm.bind(this)
  }

  submitForm(nav) {
    nav.goBack()
  }

  render() {
    return(
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Add Card to: </Text>
        <Text style={{fontSize: 20}}>{this.props.navigation.state.params.name} Deck</Text>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <Text>Question Detail:</Text>
        <TextInput
          style={{height: 40, borderBottomColor: 'grey', borderWidth: 1}}
          value={this.state.AnswerA} />
      </View>
      <View style={{flex: 2, marginTop: 10, padding: 10}}>
        <Text>Correct Answer:</Text>
        <TextInput
          style={{height: 40, borderBottomColor: 'grey', borderWidth: 1}}
          value={this.state.AnswerA}
          />
        <Text>Incorrect Answer: Use hint to throw off.</Text>
        <TextInput
          style={{height: 40, borderBottomColor: 'grey', borderWidth: 1}}
          value={this.state.answerB}
          />
      </View>
      <View style={{flex: 1, padding: 10}}>
        <TouchableOpacity
          onPress={() => {this.submitForm(this.props.navigation) }}
          style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

export default AddCard