/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')

import ContactDetailsItem = require('./ContactDetailsItem')

import ContactDetail = require('../model/ContactDetail')
import AppState = require('../model/AppState')

interface ContactDetailsProps {
    appState: AppState,

    // this comes from the router
    params: any
}

class ContactDetails extends TypedReact.Component<ContactDetailsProps, void> {

    private _contactId: number;
    constructor() {
        super()
    }

    public render() {
        const contactId: number = this.props.params.contactId;
        const contacts = this.props.appState.contacts;

        return (
            <div className="detail">
                <ContactDetailsItem contact={contacts[contactId]} 
                    key={contactId} />
            </div>
        )
   }

}

export = TypedReact.createClass(ContactDetails)
