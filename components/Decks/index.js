import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'

import styles from './styles'
import {belizeBlue} from '../../styles/colors'
import {loadDecks} from '../../stores/actions'
import DeckList from './DeckList'

export default class Decks extends Component {
  constructor(props) {
    super(props)
    this.navigateTo.bind(this)
  }

  navigateTo({key, name}) {
    const {navigate} = this.props.navigation
    navigate('Quiz', {key: `${key}`, name})
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        style={styles.deckItem}
        onPress={() => {this.navigateTo(item)} }>
        <Text style={styles.deckItemText}>{item.name}</Text>
      </TouchableHighlight>
    )
  }

  componentWillMount() {
    loadDecks()
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderText}>Quizes</Text>
        </View>
        <DeckList actionOnItem={this.renderItem}/>
      </View>
    )
  }
}

