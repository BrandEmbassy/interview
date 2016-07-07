import { combineReducers } from 'redux'
import { v4 } from 'node-uuid'
import {reducer as formReducer} from 'redux-form';

import selectedId from './selected_id'
import contacts from './contacts'

import { ADD_CONTACT, SELECT_CONTACT } from '../Action/List'
import { EDIT_CONTACT, SAVE_CONTACT, DELETE_CONTACT } from '../Action/Detail'

export default combineReducers({
  contacts,
  selectedId,
  form: formReducer
})
