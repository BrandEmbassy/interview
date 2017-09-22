
import shortid from 'shortid';
import * as CONTACT from '../actions/constants';

const initialState = {
  contacts: [
    {
      id: shortid.generate(),
      name: 'Patrik Vrbovsky',
      bio: 'dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu',
      email: 'brand@embassy.com',
      phone: '+420 777 888 999',
    },
    {
      id: shortid.generate(),
      name: 'Patrik Vrbovsky',
      bio: 'dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu',
      email: 'brand@embassy.com',
      phone: '+420 777 888 999',
    },
    {
      id: shortid.generate(),
      name: 'Patrik Vrbovsky',
      bio: 'dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu',
      email: 'brand@embassy.com',
      phone: '+420 777 888 999',
    },
  ],
  editingContact: {},
  sortingMode: 0, // 0 default, 1 A-Z, 2 Z-A
};


export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT.SAVE_CONTACT: {
      const newContact = action.payload;
      newContact.id = shortid.generate();
      // TODO check unique name || email
      return { ...state, contacts: [...state.contacts, newContact] };
    }
    case CONTACT.DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    }
    case CONTACT.EDIT_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        }),
      };
    }
    default: {
      return state;
    }
  }
}
