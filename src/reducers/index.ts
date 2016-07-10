/// <reference path="../utils/Object.Assign.ts" />

/// <reference path="../../typings/redux/redux.d.ts" />
import { combineReducers, Action } from 'redux'

import AppState = require('../model/AppState')
import Types = require('../actions/Types')
import ContactActions = require('../actions/ContactActions')
import Contact = require('../model/Contact')

function contactReducer(state: AppState, action: any) : AppState {

    switch(action.type) {
        case Types.DELETE_CONTACT:
            return { contacts: state.contacts.filter(
                (c: Contact) => c.id != action.id
            )};
        default:
            return state;       
    }

}

export = contactReducer