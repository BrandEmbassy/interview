/// <reference path="../utils/Object.assign.ts" />
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
    dispatch?: (any) => void,
    history?: any
}

class ContactDetail extends TypedReact.Component<ContactDetailProps, void> {

    constructor() {
        super()
    }

    private onSave(contact : Contact) {
        
        if (contact.id) 
        {
            this.props.dispatch(
                ContactActions.Change(contact)
            )
        }
        else
        {
            contact.id = 1 + this.props.contacts
                .map( (c: Contact) => c.id )
                .reduce( (p: number, n: number) => Math.max(p,n) )

            this.props.dispatch(
                ContactActions.Add(contact)
            )
        }
    }

    private onDelete() {
        this.props.dispatch(
            ContactActions.Delete(this.props.params.contactId)
        )
    }

    public render() {
        const contactId = this.props.params.contactId;
        const contacts = this.props.contacts;
        var editing = this.props.params.action == 'edit'
        const len = this.props.contacts.length

        var contact: Contact;

        if (contactId == 'new') {

            contact = {
                id: null,
                fullName: '',
                bio: '',
                phone: 0,
                email: ''
            }

            editing = true

        }
        else
        {
            const contactA = contacts.filter( (c : Contact) => c.id == contactId )
            if (contactA.length == 1) {
                contact = Object.assign({}, contactA[0])
            }
        }

        if (contact) {
            return (
                <div className="detail">
                    <ContactDetailView
                        contact={contact}
                        key={contactId}
                        editing={editing}
                        onSave={this.onSave} 
                        onDelete={this.onDelete}
                        history={this.props.history}
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
