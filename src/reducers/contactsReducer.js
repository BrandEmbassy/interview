
import shortid from 'shortid';
import orderBy from 'lodash/orderBy';
import * as CONTACT from '../actions/constants';


const initialState = {
  contacts: [
    {
      id: shortid.generate(),
      order: 0,
      name: 'Janko Mrkva',
      bio: 'dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu',
      email: 'brand@embassy.com',
      phone: '+420 777 888 999',
    },
    {
      id: shortid.generate(),
      order: 1,
      name: 'Patrik Vrbovsky',
      bio: 'dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu',
      email: 'brand@embassy.com',
      phone: '+420 777 888 999',
    },
    {
      id: shortid.generate(),
      order: 2,
      name: 'Tomáš Jedno',
      bio: 'dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu',
      email: 'brand@embassy.com',
      phone: '+420 777 888 999',
    },
  ],
  editingContact: {},
  sortingMode: 0, // 0 default, 1 A-Z, 2 Z-A,
  searchQuery: '',
  searchedContacts: [],
};


export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT.START_EDITING_CONTACT: {
      return {
        ...state,
        editingContact: action.payload,
      };
    }
    case CONTACT.SET_SORTING_MODE: {
      const sortingMode = action.payload;
      let orderedContacts;

      if (sortingMode === 0) {
        orderedContacts = orderBy(state.contacts, ['order']);
      }
      if (sortingMode === 1) {
        orderedContacts = orderBy(state.contacts, [contact => contact.name.toLowerCase()], ['asc']);
      }
      if (sortingMode === 2) {
        orderedContacts = orderBy(state.contacts, [contact => contact.name.toLowerCase()], ['desc']);
      }

      return {
        ...state,
        contacts: orderedContacts,
        sortingMode,
      };
    }
    case CONTACT.SAVE_CONTACT: {
      const newContact = action.payload;
      newContact.id = shortid.generate();
      newContact.order = state.contacts.length;
      // TODO check unique name || email
      return {
        ...state,
        editingContact: null,
        contacts: [...state.contacts, newContact],
      };
    }
    case CONTACT.DELETE_CONTACT: {
      return {
        ...state,
        editingContact: null,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    }
    case CONTACT.EDIT_CONTACT: {
      return {
        ...state,
        editingContact: null,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return action.payload;
          }
          return contact;
        }),
      };
    }
    case CONTACT.SEARCH_CONTACT: {
      const searchQuery = action.payload;
      return {
        ...state,
        searchQuery,
      };
    }
    case CONTACT.SEARCH_CONTACT_RESULTS: {
      const searchedContacts = action.payload;
      return {
        ...state,
        searchedContacts,
      };
    }
    default: {
      return state;
    }
  }
}
