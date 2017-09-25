
import * as CONTACT from './constants';

export const startEditingContact = contact => ({
  type: CONTACT.START_EDITING_CONTACT,
  payload: contact,
});

export const setSortingMode = index => ({
  type: CONTACT.SET_SORTING_MODE,
  payload: index,
});

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

export function searchContact(query, contacts) {
  return (dispatch) => {
    dispatch({
      type: CONTACT.SEARCH_CONTACT,
      payload: query,
    });
    // simulate async call
    setTimeout(() => {
      const searchedContacts = contacts.filter(
        contact => contact.name.toLocaleLowerCase().indexOf(
          query.toLocaleLowerCase()) > -1);
      dispatch({
        type: CONTACT.SEARCH_CONTACT_RESULTS,
        payload: searchedContacts,
      });
    }, 1000);
  };
}

export function searchContactResults(results) {
  return {
    type: CONTACT.SEARCH_CONTACT_RESULTS,
    payload: results,
  };
}
