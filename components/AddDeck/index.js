import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './style'
import {storeDeck, uuidv4} from '../../stores'

export default class AddDeck extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: null,
      description: null,
      key: uuidv4()
    }
    this.submitForm.bind(this)
    this.update.bind(this)
  }

  submitForm(nav) {
    storeDeck(this.state)
    nav.navigate('AddCard', {name: this.state.name, key: this.state.key})
  }

  update(key, value) {
    this.setState({[key]: value})
  }

  render() {
    return(
    <View style={styles.container}>
      <View style={styles.standard}>
        <Text>Add New Deck</Text>
      </View>
      <View style={{flex: 2, padding: 10}}>
        <View>
          <Text>Title:</Text>
          <TextInput
            onChangeText={(value) => {this.update('name', value)}}
            style={{height: 40, borderBottomColor: 'grey', borderWidth: 1}}
            value={this.state.title} />
        </View>
        <View>
          <Text>Description:</Text>
          <TextInput
            onChangeText={(value) => {this.update('description', value)}}
            style={{height: 40, borderBottomColor: 'grey', borderWidth: 1}}
            value={this.state.description} />
        </View>
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            onPress={() => {this.submitForm(this.props.navigation) }}
            style={styles.btn}>
              <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>)
  }
}