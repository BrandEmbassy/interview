/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
import TypedReact = require('typed-react')
/// <reference path="../../typings/react/react.d.ts" />
import React = require('react')
/// <reference path="../typings/react-redux/react-redux.d.ts" />
import { connect } from 'react-redux'
/// <reference path="../../typings/react-router/react-router.d.ts" />
import { Link } from 'react-router'
import { RouterProps } from '../utils/ReactUtils'

import ContactListItem = require('./ContactListItem')

import AppState = require('../model/AppState')
import Contact = require('../model/Contact')

interface ContactListProps extends RouterProps {
    contacts: Contact[]
}

class ContactList extends TypedReact.Component<ContactListProps, void> {

    private _contactRow(contact, index) {
        return <ContactListItem name={contact.fullName} id={contact.id} key={contact.id} />
    }

    public render() {

        // <div class="search">
        //     <input class="input" type="text" name="" value="" placeholder="Search ..." />
        // </div>
        // <div class="filter">
        //     <div class="filter__item filter__item--active">All</div>
        //     <div class="filter__item">A-Z</div>
        //     <div class="filter__item">Z-A</div>
        // </div>

        return (
            <div className="list">
                <div className="list__header">
                    <div className="heading">Contact List</div>
                </div>
                <div className="list__content">
                    {this.props.contacts.map(this._contactRow)}
                </div>
                <div className="list__footer">
                    <Link to='/contact/new'><div className="add-bttn"><span className="in">Add new contact</span></div></Link>
                </div>
            </div>
        )
    }   

}

function mapStateToProps(state: AppState) : ContactListProps {
    return {
        contacts: state.contacts
    }
}


export = connect(mapStateToProps)(TypedReact.createClass(ContactList))