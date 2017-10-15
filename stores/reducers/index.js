import { combineReducers } from 'redux';
import Do from '../types';

const deck = (state = [], action) => {
  switch (action.type) {
    case Do.GET_DECK:
      return state.filter(
        (item) => (item.key === action.payload)
      );
  default:
    return state;
  }
}

const decks = (state = [], action) => {
  switch (action.type) {
    case Do.DECKS:
      return action.payload;
    case Do.ADD_DECK:
      return [...state, action.payload];
    default:
      return state;
  }
}

const questions = (state = [], action) => {
  switch (action.type) {
    case Do.QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}

const scores = (state = [], action) => {
  switch (action.type) {
    case Do.STORE_SCORE:
      return [action.payload, ...state.filter(item => (item.quiz !== action.payload.quiz))];
    default:
      return state;
  }
}

const setupQuiz = (payload) => {
  const base = { quiz: null, score: 0, qCount: 0 };
  return { ...base, quiz: payload.quizKey };
}

const currentQuiz = (state = { quiz: null, score: 0, qCount: 0 }, action) => {
  switch (action.type) {
    case Do.SETUP_QUIZ:
      return setupQuiz(action.payload);
    case 'ANSWER_QUESTION':
      return {
        ...state, qIndex: action.payload.qIndex, score: (state.score + action.payload.value)
      };

    case Do.RESET_QUIZ:
      return { quiz: null, score: 0, qCount: 0 };

    case Do.RETRY_QUIZ:
      return { quiz: action.payload.quizKey, score: 0, qCount: 0 };

    case Do.QUIZ_SCORE:
      return state;

    default:
      return state;
  }
};

export default combineReducers({
    currentQuiz,
    questions,
    decks,
    deck,
    scores
  }
);
