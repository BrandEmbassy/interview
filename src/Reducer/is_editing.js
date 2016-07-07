import { ADD_CONTACT, SELECT_CONTACT } from '../Action/List'
import { EDIT_CONTACT, SAVE_CONTACT, DELETE_CONTACT } from '../Action/Detail'

export default (isEditing = false, action) => {
  switch(action.type) {
    case ADD_CONTACT:
    case EDIT_CONTACT:
      return true

    case SELECT_CONTACT:
    case SAVE_CONTACT:
    case DELETE_CONTACT:
      return false
  }

  return isEditing
}
