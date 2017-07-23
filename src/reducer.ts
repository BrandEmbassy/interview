import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contacts from './components/contacts/contactsWorkflow';

export default combineReducers({
  form: formReducer,
  contacts
});
