import {AsyncStorage} from 'react-native'
import store from '../store'
import Do from '../types'
import {storeDeck, APP_STORAGE_KEY} from '../index'

export const updateQuestions = (questions) => {
  store.dispatch({
    type: Do.QUESTIONS,
    payload: questions
  })
}


export const updateQuizScore = (quizKey) => {
  return {
    type: Do.CORRECT_ANSWER,
    payload: {
      quizKey
    }
  }
}

export const setupQuizScore = (quizKey, qCount) => {
  return {
    type: Do.SETUP_QUIZ,
    payload: {
      quizKey,
      qCount
    }
  }
}

export const addDecktoStore = (deck) => {
  storeDeck(deck)
  addDeck(deck)
}

export const loadDecks = () => {
  AsyncStorage.getItem(APP_STORAGE_KEY)
  .then((resp) => {
    const {decks} = JSON.parse(resp)
    updateDecks(decks)
  })
  .catch(err => (null))
}

export const updateDecks = (decks) => {
  store.dispatch({
    type: Do.DECKS,
    payload: decks
  })
}

export const addDeck = (deck) => {
  store.dispatch({
    type: Do.ADD_DECK,
    payload: deck
  })
}

export function getQuestions(key) {
  AsyncStorage.getItem(APP_STORAGE_KEY)
  .then((resp) => {
    const {questions} = data = JSON.parse(resp)
    // this should be removed -> put to actions.
      store.dispatch({
        type: Do.QUESTIONS,
        payload: data.questions[key] || []
      })
  })
  .catch(err => (console.log(err)))
}
