import { combineReducers } from "redux";
import modal from "./modal";
import contacts from "./contacts";

const contactsApp = combineReducers({
  modal: modal,
  contacts: contacts
});

export default contactsApp;
