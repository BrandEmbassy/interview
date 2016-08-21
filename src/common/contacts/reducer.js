import * as actions from './actions';
import { Map, Record } from 'immutable';

const State = Map;

const Contact = Record({
  id: null,
  name: '',
  bio: '',
  tel: '',
  email: '',
  editing: false,
  saving: false,
});

export default function contactsReducer(state = new State, action) {
  if (!(state instanceof State)) return new Map();

  switch (action.type) {
    case actions.GET_CONTACTS_SUCCESS: {
      return state.merge(action.payload.contacts.map(contact => [contact.id, new Contact(contact)]))
    }

    case actions.NEW_CONTACT: {
      const id = (state.maxBy(contact => contact.id) || {id: 0}).id + 1;
      return state.set( id, new Contact({
        id: id,
        editing: true,
      }) )
    }

    case actions.UPDATE_CONTACT: {
      const payload = {};
      const { id, field, value } = action.payload;
      payload[field] = value;

      return state.set(id, state.get(id).merge(payload))
    }

    case actions.EDIT_CONTACT: {
      const { id } = action.payload;

      return state.set(id, state.get(id).merge({
        editing: true
      }))
    }

    case 'SAVE_CONTACT_START': {
      const { id } = action.payload;
      return state.set(id, state.get(id).merge({
        editing: false,
        saving: true,
       }))
    }

    case actions.SAVE_CONTACT_SUCCESS: {
      const { id } = action.payload;
      return state.set(id, state.get(id).merge({
        saving: false,
      }));
    }

    case actions.DELETE_CONTACT_SUCCESS: {
      const { id } = action.payload;
      return state.remove(id);
    }

  }

  return state;
}
