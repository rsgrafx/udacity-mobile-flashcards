import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { getQuestions } from '../../stores/actions';
import QuizHome from './QuizHome';

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
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontFamily: 'Avenir' }}>Strengthen Your Brain!</Text>
            <Image
              style={{ width: 100, height: 100, marginTop: 10 }}
              source={require('../../assets/images/brain.png')}
            />
          <Text style={{ fontSize: 45, paddingTop: 20, color: '#e74c3c', fontWeight: 'bold', fontFamily: 'Avenir' }}>{navigation.state.params.name}</Text>
          <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{count} {
            count === 1
            ? 'Question'
            : 'Questions'
            } Available</Text>
        </View>
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