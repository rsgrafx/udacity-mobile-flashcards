import React, {Component} from 'react'

import {View, Text} from 'react-native'
import styles from './styles'

export default class Home extends Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>My Stats</Text>
      <Text> Quizes Taken 10</Text>
      <Text> Top Score 10/13 </Text>
    </View>
    )
  }
}