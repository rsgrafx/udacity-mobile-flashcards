import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './styles';
import {
  loadDecks,
} from '../../stores/actions';

import DeckList from './DeckList';

export default class Decks extends Component {
  constructor(props) {
    super(props);
    this.navigateTo.bind(this);
  }

  componentWillMount() {
    loadDecks();
  }

  navigateTo({ key, name }) {
    const { navigate } = this.props.navigation;
    navigate('Quiz', { key: `${key}`, name });
  }

  renderItem = ({ item }) => (
      <TouchableHighlight
        style={styles.deckItem}
        onPress={() => { this.navigateTo(item); }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 6 }}>
            <Text style={styles.deckItemText}>{item.name}</Text>
          </View>
          <View style={[styles.container, styles.qCount]}>
            <Text style={styles.qCountText}> {item.questionCount} </Text>
          </View>
        </View>
      </TouchableHighlight>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.quizHeader}>
          <Text style={styles.quizHeaderText}>Quizes</Text>
        </View>
        <DeckList actionOnItem={this.renderItem} />
      </View>
    );
  }
}

