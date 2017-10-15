import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const fetchQuiz = (decks, key) => {
  const [deck] = decks.filter((item) => (item.key === key));
  return deck;
}

const Score = ({ items, qCount, score, quiz }) => {
  return (
    <View>
      <View>
        <Text>Quiz: { fetchQuiz(items, quiz).name }</Text>
      </View>
      <View>
        <Text>Score: {score} / {qCount}</Text>
      </View>
    </View>
  );
};

export default connect((state) => ({
  items: state.decks,
}))(Score);