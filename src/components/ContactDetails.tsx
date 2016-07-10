/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')

import ContactDetailsItem = require('./ContactDetailsItem')

import AppState = require('../model/AppState')

interface ContactDetailsProps {
    appState: AppState
}

class ContactDetails extends TypedReact.Component<ContactDetailsProps, void> {

    constructor() {
        super()
    }

    public render() {
        let contacts = []
        for (let contact of this.props.appState.contacts) {
            contacts.push(
                <ContactDetailsItem contact={contact} />
            )
        }

        return (
            <div className="detail">
                {contacts}
            </div>
        )
   }

}

export = TypedReact.createClass(ContactDetails)
