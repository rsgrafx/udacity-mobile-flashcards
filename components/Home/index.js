import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Score from './Score';
import styles from './styles';

class Home extends Component {

  render() {
    const { scores } = this.props;
    return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 28 }}> Your Stats </Text>
      </View>
      <View style={{ flex: 8 }}>
        {
          scores.length === 0
          ? <Text>Nothing Yet. Take a Quiz</Text>
          : <View>{scores.map((score) => (<Score key={score.quiz} {...score} />))}</View>
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

