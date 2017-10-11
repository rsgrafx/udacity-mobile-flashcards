import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './style'

export default class AddDeck extends Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>New Deck</Text>
    </View>)
  }
}