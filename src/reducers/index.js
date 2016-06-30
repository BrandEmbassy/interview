import { combineReducers } from 'redux';
import contacts from './contacts';
import selectedContact, * as fromSelectedContact from './selectedContact';

const contactsApp = combineReducers({
  contacts,
  selectedContact,
});

export default contactsApp;

export const getSelectedContact = (state, filter) =>
  fromSelectedContact.getSelectedContact(state.contacts, state.selectedContact, filter);
