import { ADD_CONTACT, SELECT_CONTACT } from '../Action/List'
// import { EDIT_CONTACT, SAVE_CONTACT, DELETE_CONTACT } from '../Action/Detail'

export default (state, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        contactList: [
          ...state.contactList,
          {
            isEdited: true
          }
        ]
      })

    case SELECT_CONTACT:
      return Object.assign({}, state, {
        selectedContactId: action.id
      })

    default:
      return state
  }

}
