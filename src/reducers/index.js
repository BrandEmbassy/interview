import { combineReducers } from 'redux';
import contacts from './contacts';

const contactsApp = combineReducers({
  contacts,
});

export default contactsApp;
