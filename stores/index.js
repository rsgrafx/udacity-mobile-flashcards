// Will eventually house logic to access AsyncStorage or Redux

import {AsyncStorage} from 'react-native'

export const APP_STORAGE_KEY = '@mobileflashcards'

const temporaryDecks = [
  {name: 'Languages', questionCount: 10, key: 'programming'},
  {name: 'Self Help', questionCount: 2, key: 'self_help'},
  {name: 'Geography', questionCount: 4, key: 'geography'},
  {name: 'Smart Phones', questionCount: 3, key: 'smartphones'},
  {name: 'Random Celebs', questionCount: 31, key: 'celebs'},
  {name: 'Board Games', questionCount: 7, key: 'board-games'},
  {name: 'Gluten Free', questionCount: 14, key: 'gluten-free' },
  {name: 'Moms', questionCount: 14, key: 'parenting'}
]

const baseQuestions = {
    programming: [
      {title: "Is Udacity a Google Company?", answers: {correct: true, incorrect: false} },
      {title: "Do you have to be Over 18 to take a class?", answers: {correct: false, incorrect: true}},
      {title: "Will Udacity if yuo dont complete the class?", answers: {correct: false, incorrect: true}}
    ]
}

export function setup() {
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