import React, {Component} from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableHighlight} from 'react-native'
import styles from './styles'
import {belizeBlue} from '../../styles/colors'

const temporaryDecks = [
  {name: 'Programming Languages', questionCount: 10, key: 'programming'},
  {name: 'Self Help', questionCount: 2, key: 'self_help'},
  {name: 'Geography', questionCount: 4, key: 'geography'},
  {name: 'Smart Phones', questionCount: 3, key: 'smartphones'},
  {name: 'Random Celebs', questionCount: 31, key: 'celebs'},
  {name: 'Board Games', questionCount: 7, key: 'board-games'},
  {name: 'Gluten Free', questionCount: 14, key: 'gluten-free' },
  {name: 'Moms', questionCount: 14, key: 'parenting'}
]

export default class Decks extends Component {

  navigateTo = ({key, name}) => {
    const {navigate} = this.props.navigation
    navigate('Quiz', {key: `${key}`, name})
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        style={styles.deckItem}
        onPress={() => this.navigateTo(item)}>
        <Text style={styles.deckItemText}>{item.name}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderText}>Quizes</Text>
        </View>
        <FlatList
          data={temporaryDecks}
          keyExtractor={(item) => item.name}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}