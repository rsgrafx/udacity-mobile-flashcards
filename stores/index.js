// Will eventually house logic to access AsyncStorage or Redux
/*
  *
  Find the Calm to refactor - https://www.youtube.com/watch?v=u2OpgFeNr9s
  *
*/

import { AsyncStorage, Alert } from 'react-native';
import { updateQuestions, updateDecks } from './actions';
import { temporaryDecks, baseQuestions } from '../utils/temp.js';

export const APP_STORAGE_KEY = '@mobileflashcards:QuizData';

function storeData(data) {
  AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(data));
}

function findDeck(data, quizKey) {
  const [deck] = data.decks.filter((item) => item.key === quizKey);
  return { ...deck, questionCount: deck.questionCount + 1 };
}

function storeUpdateDecks(data, quizKey) {
  const deck = findDeck(data, quizKey);
  const decks = [...data.decks.filter((item) => item.key !== quizKey), deck];

  updateDecks(decks);
  return decks;
}

// *
export function setup() {
    /** Only for testing.
      AsyncStorage.clear()
    */
    AsyncStorage.getItem(APP_STORAGE_KEY)
      .then(
      (resp) => {
        if (resp === null) {
          const datum = { questions: baseQuestions, decks: temporaryDecks };
          updateDecks(temporaryDecks);
          storeData(datum);
        } else {
          return resp;
        }
      }
    ).catch(err => (console.log(err)));
}

export function saveQuestion(obj) {
  AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((resp) => {
      const { title, quizKey, answerA, answerB } = obj;

      const data = JSON.parse(resp);
      const quizQuestions = data.questions[quizKey] || [];
      const newQuestionSet = storeNewQuestion(quizQuestions, title, answerA, answerB);

      const newData = {
        decks: storeUpdateDecks(data, quizKey),
        questions: { ...data.questions, [obj.quizKey]: newQuestionSet }
      };

      updateQuestions(newQuestionSet);
      storeData(newData);

      Alert.alert('Question Saved', 'Question successfully saved to Deck.');
    })
    .catch(err => Alert.alert('Error', `Deck Unsuccesful ${err}`));
}

function storeNewQuestion(current, title, answerA, answerB) {
  return [...current, {
    title,
    answers: [
      { hint: answerA, correct: true },
      { hint: answerB, correct: false }
      ]
    }
  ];
}

export function storeDeck(obj) {
  AsyncStorage.getItem(APP_STORAGE_KEY)
    .then((resp) => {
      const data = JSON.parse(resp);

      const newData = {
        questions: data.questions,
        decks: [...data.decks, { ...obj, questionCount: 0 }]
      };

      storeData(newData);
      Alert.alert('Deck Saved', 'Deck successfully saved to Device.');
    })
    .catch(err => {
      Alert.alert('Unsuccesful Save', `Error Code: ${err}`);
    });
}
