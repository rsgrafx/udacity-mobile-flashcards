import {combineReducers} from 'redux'
import Do from '../types'

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

const deck = (state = {}, action) => {
  return state
}

const questions = (state = {}, action) => {
  return state
}

const scores = (state = {}, action) => {
  return state
}

export default combineReducers({
    questions,
    decks,
    deck,
    scores
  }
)