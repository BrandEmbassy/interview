import { v4 } from 'node-uuid'

export const ADD_CONTACT = 'ADD_CONTACT'
export const SELECT_CONTACT = 'SELECT_CONTACT'

export const addContact = () => {
  return {
    type: ADD_CONTACT,
    id: v4()
  }
}

export const selectContact = (id) => {
  return {
    type: SELECT_CONTACT,
    id
  }
}
