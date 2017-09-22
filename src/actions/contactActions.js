
import * as CONTACT from './constants';

export function saveContact(contact) {
  return {
    type: CONTACT.SAVE_CONTACT,
    payload: contact,
  };
}

export function editContact(contact) {
  return {
    type: CONTACT.EDIT_CONTACT,
    payload: contact,
  };
}

export function deleteContact(contactId) {
  return {
    type: CONTACT.DELETE_CONTACT,
    payload: contactId,
  };
}
