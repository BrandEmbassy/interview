import Types = require('./Types')

import Contact = require('../model/Contact')

module ContactActions {

    export function Delete(id: number) {
        return {
            type: Types.DELETE_CONTACT,
            id
        }
    }

    export function Change(contact: Contact) {
        return {
            type: Types.CHANGE_CONTACT,
            contact: contact
        }
    }

    export function Add(contact: Contact) {
        return {
            type: Types.ADD_CONTACT,
            contact: contact
        }
    }

}

export = ContactActions