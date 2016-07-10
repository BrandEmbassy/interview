/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')

import ContactListItem = require('./ContactListItem')

import AppState = require('../model/AppState')

interface ContactListProps {
    appState: AppState
}

class ContactList extends TypedReact.Component<ContactListProps, void> {

   public render() {

        // <div class="search">
        //     <input class="input" type="text" name="" value="" placeholder="Search ..." />
        // </div>
        // <div class="filter">
        //     <div class="filter__item filter__item--active">All</div>
        //     <div class="filter__item">A-Z</div>
        //     <div class="filter__item">Z-A</div>
        // </div>

        let contacts = []
        for (let contact of this.props.appState.contacts) {
            contacts.push(
                <ContactListItem name={contact.fullName} />
            )
        }

        return (
            <div className="list">
                <div className="list__header">
                    <div className="heading">Contact List</div>
                </div>
                <div className="list__content">
                    {contacts}
                </div>
                <div className="list__footer">
                    <div className="add-bttn"><span className="in">Add new contact</span></div>
                </div>
            </div>
        )
    }   

}

export = TypedReact.createClass(ContactList)