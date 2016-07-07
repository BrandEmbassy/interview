import { ADD_CONTACT, SELECT_CONTACT } from '../Action/List'
import { EDIT_CONTACT, SAVE_CONTACT, DELETE_CONTACT } from '../Action/Detail'

const findIndexById = (contacts, id) => {
  return contacts.findIndex((contact) => contact.id == id)
}

export default (contacts = [], { type, id, values }) => {
  const index = id && findIndexById(contacts, id)

  switch(type) {
    case ADD_CONTACT:
      return [
        ...contacts,
        {
          id: id
        }
      ]

    case SAVE_CONTACT:
      return [
        ...contacts.slice(0, index),
        Object.assign({}, contacts[index], values),
        ...contacts.slice(index + 1)
      ]

    case DELETE_CONTACT:
      return [
        ...contacts.slice(0, index),
        ...contacts.slice(index + 1)
      ]
  }

  return contacts
}
