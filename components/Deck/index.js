import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { getQuestions } from '../../stores/actions';
import QuizHome from './QuizHome';
import QuizTitle from './QuizTitle';
import styles from './styles';

/*
  Turn into Stateless component.
*/

class Deck extends Component {

  componentWillMount() {
    const { key } = this.props.navigation.state.params;
    getQuestions(key);
  }

  navigateTo = ({ key, name }) => {
    const { navigate } = this.props.navigation;
    navigate('StartQuiz', { key, name });
  }

  addCardFlow = ({ key, name }) => {
    const { navigate } = this.props.navigation;
    navigate('AddCard', { key, name });
  }

  render() {
    const { navigation, count } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <QuizTitle
          count={count}
          title={navigation.state.params.name}
          styles={styles}
        />
        <QuizHome
          qCount={count}
          navigateTo={this.navigateTo}
          addCardFlow={this.addCardFlow}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default connect(
  (state) => ({
    count: state.questions.length,
    questions: state.questions,
    scores: state.scores }
  ), null
)(Deck);
