import { AsyncStorage } from 'react-native';
import store from '../store';
import Do from '../types';
import { storeDeck, APP_STORAGE_KEY } from '../index';

export const updateQuestions = (questions) => {
  store.dispatch({
    type: Do.QUESTIONS,
    payload: questions
  });
};

export const updateQuizScore = (qIndex) => ({
    type: Do.CORRECT_ANSWER,
    payload: {
      qIndex
    }
  });

export const setupQuizScore = (quizKey) => ({
    type: Do.SETUP_QUIZ,
    payload: {
      quizKey
    }
  });

export const addDecktoStore = (deck) => {
  storeDeck(deck);
  addDeck(deck);
};

export const loadDecks = () => {
  AsyncStorage.getItem(APP_STORAGE_KEY)
  .then((resp) => {
    const { decks } = JSON.parse(resp);
    updateDecks(decks);
  })
  .catch(err => (err));
};

export const updateDecks = (decks) => {
  store.dispatch({
    type: Do.DECKS,
    payload: decks
  });
};

export const addDeck = (deck) => {
  store.dispatch({
    type: Do.ADD_DECK,
    payload: deck
  });
};

export function getQuestions(key) {
  AsyncStorage.getItem(APP_STORAGE_KEY)
  .then((resp) => {
    const data = JSON.parse(resp);
    store.dispatch({
      type: Do.QUESTIONS,
      payload: data.questions[key] || []
    });
  })
  .catch(err => (console.log(err)));
};
