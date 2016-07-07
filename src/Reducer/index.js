import { v4 } from 'node-uuid'

import { ADD_CONTACT, SELECT_CONTACT } from '../Action/List'
import { EDIT_CONTACT, SAVE_CONTACT, DELETE_CONTACT } from '../Action/Detail'

export default (state, action) => {
  // NOTE: You cant use let, or const in each case condition separately :/
  let index

  switch(action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        contactList: [
          ...state.contactList,
          {
            id: v4(),
            isNew: true,
            isEdited: true
          }
        ]
      })

    case SELECT_CONTACT:
      return Object.assign({}, state, {
        selectedContactId: action.id
      })

    case EDIT_CONTACT:
      index = findIndexById(state.contactList, action.id)

      return Object.assign({}, state, {
        contactList: [
          ...state.contactList.slice(0, index),
          Object.assign({}, state.contactList[index], {
            isEdited: true
          }),
          ...state.contactList.slice(index + 1)
        ]
      })
    case SAVE_CONTACT:
      index = findIndexById(state.contactList, action.id)

      return Object.assign({}, state, {
        contactList: [
          ...state.contactList.slice(0, index),
          Object.assign({}, state.contactList[index], {
            isEdited: false,
            isNew:    false
          }),
          ...state.contactList.slice(index + 1)
        ]
      })

    case DELETE_CONTACT:
      index = findIndexById(state.contactList, action.id)

      return Object.assign({}, state, {
        contactList: [
          ...state.contactList.slice(0, index),
          ...state.contactList.slice(index + 1)
        ]
      })
    default:
      return state
  }
}

const findIndexById = (contacts, id) => {
  return contacts.findIndex((contact) => contact.id == id)
}
