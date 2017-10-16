import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Score from './Score';
import styles from './styles';

class Home extends Component {
  noScores = () => (
    <View style={[styles.container, styles.align]}>
      <Text>Nothing Yet. Take a Quiz</Text>
    </View>
  );
  render() {
    const { scores, items } = this.props;
    return (
    <View style={styles.container}>
      <View style={[styles.container, styles.align, { paddingTop: 10 }]}>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}> Quiz Stats </Text>
      </View>
      <View style={{ flex: 8, alignItems: 'stretch' }}>
        {
          scores.length === 0
          ? this.noScores()
          : scores.map((score) => (<Score key={score.quiz} {...score} />))
        }
      </View>
    </View>
    );
  }
}

export default connect((state) => ({
  items: state.decks,
  scores: state.scores,
}))(Home);

