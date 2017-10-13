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

export default combineReducers({
    questions,
    decks,
    deck,
    scores
  }
)