import { ADD_CONTACT, SELECT_CONTACT } from '../Action/List'

export default (selectedId = null, { type, id }) => {
  switch(type) {
    case ADD_CONTACT:
      return id

    case SELECT_CONTACT:
      return id
  }

  return selectedId
}
