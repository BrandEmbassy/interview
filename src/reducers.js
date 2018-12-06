import { combineReducers } from "redux";
import findIndex from "lodash/findIndex";
import { data } from "./data/data";

const initialState = {
  visible: false,
  editable: false,
  contactId: null
};
const modal = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_DETAIL_MODAL":
      return {
        visible: true,
        editable: action.editable,
        contactId: action.contactId
      };
    case "SHOW_CREATE_MODAL":
      return {
        visible: true,
        editable: true,
        contactId: null
      };
    case "CLOSE_MODAL":
      return initialState;
    default:
      return state;
  }
};

const contact = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        id: action.id,
        name: action.name,
        bio: action.bio,
        phone: action.phone,
        email: action.email
      };
    case "EDIT_CONTACT":
      return Object.assign({}, state, {
        id: action.id,
        name: action.name,
        bio: action.bio,
        phone: action.phone,
        email: action.email
      });
    default:
      return state;
  }
};
const contacts = (state = data, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, contact(undefined, action)];
    case "DELETE_CONTACT":
      const index = findIndex(
        state,
        contact => contact.id === action.contactId
      );
      return index < 0
        ? state
        : [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};
const filter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const contactsApp = combineReducers({
  modal: modal,
  contacts: contacts,
  filter: filter
});

export default contactsApp;
