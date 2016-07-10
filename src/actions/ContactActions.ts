import Types = require('./Types')

import Contact = require('../model/Contact')

module ContactActions {

    export function Delete(id: number) {
        return {
            type: Types.DELETE_CONTACT,
            id
        }
    }

}

export = ContactActions