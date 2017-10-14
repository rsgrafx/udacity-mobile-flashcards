import {combineReducers} from 'redux'
import Do from '../types'

const deck = (state = [], action) => {
  switch (action.type) {
    case Do.GET_DECK:
      state.filter(
        (item) => {
          return item.key === action.payload
        })
  default:
    return state
  }
}

const decks = (state = [], action) => {
  switch (action.type) {
    case Do.DECKS:
      return action.payload
    case Do.ADD_DECK:
      return [...state, action.payload]
    default:
      return state
  }
}

const questions = (state = [], action) => {
  switch (action.type) {
    case Do.QUESTIONS:
      return action.payload
    default:
      return state
  }
}

const scores = (state = {}, action) => {
  return state
}

const currentQuiz = (state = {quiz: null, score: 0, qCount: 0}, action) => {
  switch (action.type) {
    case Do.SET_QUIZ:
      const {quizKey, qCount} = action.payload
      return {...state, quiz: quizKey, qCount}

    case Do.CORRECT_ANSWER:
      return {...state, score: state.score+1}

    case Do.RESET_QUIZ:
      return {quiz: null, score: 0, qCount: 0}

    case Do.QUIZ_SCORE:
      return state
    default:
      return state
  }
}

export default combineReducers({
    currentQuiz,
    questions,
    decks,
    deck,
    scores
  }
)