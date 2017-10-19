import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Score from './Score';
import styles from './styles';

const QuizHeader = () => (
    <View style={styles.scoreHeader}>
      <View style={{ flex: 4 }}>
        <Text style={styles.scoreHeaderTxt}>Quiz</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.scoreHeaderTxt}>Score:</Text>
      </View>
    </View>
  );

class Home extends Component {
  noScores = () => (
    <View style={[styles.container, styles.align]}>
      <Text>Nothing Yet. Take a Quiz</Text>
    </View>
  );
  render() {
    const { scores } = this.props;
    return (
    <View style={styles.container}>
      <View style={[styles.container, styles.align, { padding: 20 }]}>
        <Text style={styles.headerLabel}> Quiz Stats </Text>
      </View>
      <View style={styles.scoreList}>
        {
          scores.length === 0
          ? this.noScores()
          : <View>
              <QuizHeader />
              {scores.map((score) => (<Score key={score.quiz} {...score} />))}
            </View>
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

