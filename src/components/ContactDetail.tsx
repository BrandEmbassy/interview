/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
import TypedReact = require('typed-react')

/// <reference path="../../typings/react/react.d.ts" />
import React = require('react')

/// <reference path="../typings/react-redux/react-redux.d.ts" />
import { connect } from 'react-redux'

import ContactDetailView = require('./ContactDetailView')
import Contact = require('../model/Contact')
import AppState = require('../model/AppState')
import ContactActions = require('../actions/ContactActions')

interface ContactDetailProps {
    contacts: Contact[],

    // this comes from the router
    params?: any,
    dispatch?: (any) => void
}

class ContactDetail extends TypedReact.Component<ContactDetailProps, void> {

    private _contactId: number;
    constructor() {
        super()
    }

    private onSave() {
        console.log("Save hit")
//        this.props.dispatch(ContactActions.ChangeContact
    }

    private onDelete() {
        this.props.dispatch(
            ContactActions.Delete(this.props.params.contactId)
        )
    }

    public render() {
        const contactId: number = this.props.params.contactId;
        const contacts = this.props.contacts;
        const editing = this.props.params.action == "edit"
        const len = this.props.contacts.length

        var contact = contacts.filter( (c : Contact) => c.id == contactId )

        if (contact.length == 1) {
            return (
                <div className="detail">
                    <ContactDetailView
                        contact={contact[0]}
                        key={contactId}
                        editing={editing}
                        onSave={this.onSave} 
                        onDelete={this.onDelete} 
                    />
                </div>
            )
        }
        else
        {
            return <div className="detail"></div>
        }
   }

}

function mapStateToProps(state: AppState) : ContactDetailProps {
    return {
        contacts: state.contacts
    }
}

export = connect(mapStateToProps)(TypedReact.createClass(ContactDetail))
