// import React from "react";
import { combineReducers } from "redux";
// import { combineReducers } from "react-redux";

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
const contacts = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, contact(undefined, action)];
    default:
      return state;
  }
};
const filter = (state = "SHOW_ALL", action) => {
  console.log("action", action);
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

// Action creators
// let nextContactId = 0;
// const addContact = ({ name, bio, phone, email }) => {
//   return {
//     type: "ADD_CONTACT",
//     id: nextContactId++,
//     name,
//     bio,
//     phone,
//     email
//   };
// };

// const setFilter = filter => {
//   return {
//     type: "SET_FILTER",
//     filter: filter
//   };
// };

const contactsApp = combineReducers({
  contacts: contacts,
  filter: filter
});

export default contactsApp;
