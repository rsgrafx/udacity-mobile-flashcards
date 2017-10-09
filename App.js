import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {StackNavigator, TabNavigator} from 'react-navigation'

import Home from './components/Home'
import Decks from './components/Decks'
import QuizDeck from './components/Deck'

import {belizeBlue} from './styles/colors'

/*
  ReArrange Later.
*/
const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Stats',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#2980b9'
  }
}
)

const MainNavigation = StackNavigator({
  Main: {
    screen: Tabs
  },
  Quiz: {
    path: ':key',
    screen: QuizDeck,
    navigationOptions: ({navigation}) => ({title: `${navigation.state.params.name}`})
  }
})

export default class App extends React.Component {
  render() {
    return <MainNavigation />
  }
}