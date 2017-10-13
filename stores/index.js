// Will eventually house logic to access AsyncStorage or Redux

import {AsyncStorage, Alert} from 'react-native'
import store from './store'
import {updateQuestions, updateDecks} from './actions'

export const APP_STORAGE_KEY = '@mobileflashcards'

const temporaryDecks = [
  {name: 'Languages', questionCount: 3, key: 'programming', description: "Questions about languages, programming languages mostly"},
  {name: 'Self Help', questionCount: 0, key: 'self_help', description: "Questions about Self Help"}
]

const baseQuestions = {
    programming: [
      {title: "Is Udacity a Google Company?", answers: {correct: true, incorrect: false} },
      {title: "Do you have to be Over 18 to take a class?", answers: {correct: false, incorrect: true}},
      {title: "Will Udacity if yuo dont complete the class?", answers: {correct: false, incorrect: true}}
    ]
}

function  _storeData(data) {
  AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data))
}

function _updateDeck(data, quizKey) {
  const [deck] = data.decks.filter((item) => item.key === quizKey)
  return {...deck, questionCount: deck.questionCount+1}

}

function _updateDecks(data, quizKey) {
  const deck = _updateDeck(data, quizKey)
  const decks = [...data.decks.filter((item) => item.key !== quizKey), deck]
  updateDecks(decks)
  return decks
}

// *
export function setup() {
    // AsyncStorage.clear()
    AsyncStorage.getItem(APP_STORAGE_KEY)
      .then(
      (resp) => {
        console.log("RESPONSER", JSON.parse(resp))
        if (resp === null) {
          const datum = {questions: baseQuestions, decks: temporaryDecks}
          _storeData(datum)
        } else {
          return resp
        }
      }
    ).catch(err => (console.log(err)))
}

export function saveQuestion(obj) {
  AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((resp) => {
      const {title, quizKey, answerA, answerB} = obj

      const data = JSON.parse(resp)
      const quizQuestions = data.questions[quizKey] || []
      const newQuestionSet = _newQuestionSet(quizQuestions, title, answerA, answerB)

      const newData = {
        decks: _updateDecks(data, quizKey),
        questions: {...data.questions, [obj.quizKey]: newQuestionSet }
      }
      updateQuestions(newQuestionSet)
      _storeData(newData)
      Alert.alert('Question Saved', 'Question successfully saved to Deck.')
    })
    .catch(err => Alert.alert('Error', `Deck Unsuccesful ${err}`))
}

function _newQuestionSet(current, title, answerA, answerB) {
  return [...current, {
    title, answers: [
      {hint: answerA, correct: true}, {hint: answerB, correct: false}
    ]
  }
]
}

export function storeDeck(obj) {
  AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((resp) => {
      const data = JSON.parse(resp)

      const newData = {
        questions: data.questions,
        decks: [...data.decks, {...obj, questionCount: 0}]
      }
      _storeData(newData)
      Alert.alert('Deck Saved', 'Deck successfully saved to Device.')
    })
    .catch(err => {
      Alert.alert('Error', `Deck Unsuccesful ${err}`)
    })
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
