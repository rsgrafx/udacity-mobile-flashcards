import React from 'react';
import {View, Text, Image } from 'react-native';

const QuizTitle = ({ title, count, styles }) => (
  <View style={styles.quizTitleBox}>
    <Text style={styles.quizHdrTxt}>Strengthen Your Brain!</Text>
    <Image
      style={styles.quizTitleImg}
      source={require('../../assets/images/brain.png')}
    />
    <Text style={styles.quizTitleTxt}>{title}</Text>
    <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{count} {
    count === 1
    ? 'Question'
    : 'Questions'
    } Available</Text>
  </View>
);

export default QuizTitle;
