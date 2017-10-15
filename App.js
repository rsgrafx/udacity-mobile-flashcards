import React from 'react';
import { Button } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Home from './components/Home';
import Decks from './components/Decks';
import Deck from './components/Deck';
import StartQuiz from './components/StartQuiz';
import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';

import { setup } from './stores';
import store from './stores/store';

/*
  ReArrange Later.
*/
const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      headerTintColor: 'blue',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={ 30} color={ tintColor} />
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Stats',
      headerTintColor: 'blue',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={30} color={tintColor} />
    }
  }
},
{
  initialRouteName: 'Decks',
  tabBarOptions: {
    activeTintColor: '#2980b9'
  }
}
);

const MainNavigation = StackNavigator({
  Main: {
    screen: Tabs,
    path: 'home',
    navigationOptions: ({ navigation }) => ({
      title: 'Brains++',
      headerRight: <Button
                    onPress={() => (navigation.navigate('AddDeck'))}
                    title="New Deck"
                    color="blue"
                    accesibilityLabel="Add new Quiz Deck"
      />
    }),
  },
  Quiz: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({ title: `${ navigation.state.params.name}`})
  },
  StartQuiz: {
    screen: StartQuiz,
    navigationOptions: ({ navigation }) => ({ title: `${ navigation.state.params.name}`})
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({ title: `${ navigation.state.params.name} Deck`})
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({ navigation }) => ({ title: `New Deck`})
  }
},
{
  initialRouteParams: { key: 'home' }
});

export default class App extends React.Component {
  componentWillMount() {
    setup();
  }
  render() {
    return (
      <Provider store={ store}>
        <MainNavigation />
      </ Provider>
     )
  }
}