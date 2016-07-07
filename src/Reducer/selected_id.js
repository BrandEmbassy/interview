import { ADD_CONTACT, SELECT_CONTACT } from '../Action/List'
import { EDIT_CONTACT, DELETE_CONTACT } from '../Action/Detail'

export default (selectedId = null, { type, id }) => {
  switch(type) {
    case ADD_CONTACT:
    case SELECT_CONTACT:
    case EDIT_CONTACT:
      return id

    case DELETE_CONTACT:
      return null
  }

  return selectedId
}
