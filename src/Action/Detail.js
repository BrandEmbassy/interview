export const EDIT_CONTACT = 'EDIT_CONTACT'
export const SAVE_CONTACT = 'SAVE_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'

export const editContact = (id) => {
  return {
    type: EDIT_CONTACT,
    id
  }
}

export const saveContact = (id) => {
  return {
    type: SAVE_CONTACT,
    id
  }
}

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    id
  }
}
