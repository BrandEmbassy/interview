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
        const editing = this.props.params.action == "edit"

        return (
            <div className="detail">
                <ContactDetailsItem
                    id={contactId}
                    contact={contacts[contactId]}
                    key={contactId}
                    editing={editing} 
                />
            </div>
        )
   }

}

export = TypedReact.createClass(ContactDetails)
