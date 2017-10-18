import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export const Wrong = ({ correctAnswer }) => (
  <View style={styles.flex1centered}>
    <Image
      style={styles.answerImg}
      source={require('../../assets/images/wrong.png')}
    />
    <Text style={{ fontSize: 20 }}>Wrong</Text>
    <Text style={{ fontSize: 10 }}>The correct Answer is:</Text>
    <Text style={{ fontSize: 30, color: 'red' }}>{correctAnswer.hint}</Text>
  </View>);

export const Correct = () => (
  <View style={styles.flex1centered}>
    <Image
      style={styles.answerImg}
      source={require('../../assets/images/correct.png')}
    />
    <Text style={{ fontSize: 30 }}>Correct!</Text>
  </View>
  );