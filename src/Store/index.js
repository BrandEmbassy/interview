import { createStore } from 'redux'
import reducer from '../Reducer'

export const configureStore = (initialState) => {
  const store = createStore(reducer, initialState)

  return store
}
