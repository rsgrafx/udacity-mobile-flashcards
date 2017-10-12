// Will eventually house logic to access AsyncStorage or Redux

import {AsyncStorage, Alert} from 'react-native'

export const APP_STORAGE_KEY = '@mobileflashcards'

const temporaryDecks = [
  {name: 'Languages', questionCount: 10, key: 'programming'},
  {name: 'Self Help', questionCount: 2, key: 'self_help'},
]

const baseQuestions = {
    programming: [
      {title: "Is Udacity a Google Company?", answers: {correct: true, incorrect: false} },
      {title: "Do you have to be Over 18 to take a class?", answers: {correct: false, incorrect: true}},
      {title: "Will Udacity if yuo dont complete the class?", answers: {correct: false, incorrect: true}}
    ]
}

export function setup() {
    // AsyncStorage.clear()
    AsyncStorage.getItem(APP_STORAGE_KEY)
      .then(
      (resp) => {
        if (resp === null) {
          AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify({questions: baseQuestions, decks: temporaryDecks}) )
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
      const quizQuestions = data.questions[obj.quizKey] || []

      const newQuestionSet = [...quizQuestions, {
          title, answers: [
            {hint: answerA, correct: true}, {hint: answerB, correct: false}
          ]
        }
      ]
      const newData = {
        decks: data.decks,
        questions: {...data.questions, [obj.quizKey]: newQuestionSet }
      }
      AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(newData))
      Alert.alert('Question Saved', 'Question successfully saved to Deck.')
    })
    .catch(err => Alert.alert('Error', `Deck Unsuccesful ${err}`))
}

export function storeDeck(obj) {
  AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((resp) => {
      const data = JSON.parse(resp)

      const newData = {
        questions: data.questions,
        decks: [...data.decks, {...obj, questionCount: 0}]
      }
      AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(newData))
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
