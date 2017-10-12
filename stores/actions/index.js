import {AsyncStorage} from 'react-native'
import store from '../store'
import Do from '../types'
import {storeDeck, APP_STORAGE_KEY} from '../index'

export const addDecktoStore = (obj) => {
  storeDeck(obj)
  store.dispatch({
    type: Do.ADD_DECK,
    payload: obj
  })
}

export const loadDecks = () => {
  AsyncStorage.getItem(APP_STORAGE_KEY)
  .then((resp) => {
    const {decks} = JSON.parse(resp)
    store.dispatch({
      type: 'DECKS',
      payload: decks
    })
  })
  .catch(err => (null))
}