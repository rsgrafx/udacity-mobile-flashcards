import React, {Component} from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  AsyncStorage,
  TouchableHighlight} from 'react-native'
import styles from './styles'
import {belizeBlue} from '../../styles/colors'
import {APP_STORAGE_KEY} from '../../stores'

const DeckList = ({items, actionOnItem}) => {
  return(
    <FlatList
      data={items}
      keyExtractor={(item) => item.name}
      renderItem={actionOnItem} />
  )
}

export default class Decks extends Component {
  state = {
    decks: []
  }
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

  componentWillMount() {
    AsyncStorage.getItem(APP_STORAGE_KEY)
      .then((resp) => {
        const {decks} = JSON.parse(resp)
        this.setState({decks})
      })
      .catch(err => (null))
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderText}>Quizes</Text>
        </View>
        <DeckList items={this.state.decks} actionOnItem={this.renderItem}/>
      </View>
    )
  }
}

