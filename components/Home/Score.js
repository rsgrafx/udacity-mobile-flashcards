import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const fetchQuiz = (decks, key) => {
  const [deck] = decks.filter((item) => (item.key === key));
  return deck;
};

const Score = ({ items, qCount, score, quiz }) => (
    <View style={[styles.scoreItem, {}]}>
      <View style={styles.scoreQuizName}>
       <Text style={[styles.scoreText, { paddingLeft: 10, color: '#8e44ad' }]}>
          { fetchQuiz(items, quiz).name }
        </Text>
      </View>
      <View style={styles.center1}>
        <Text style={styles.scoreText}>
          {score} / {qCount}
        </Text>
      </View>
    </View>
  );

export default connect(state => ({ items: state.decks }))(Score);