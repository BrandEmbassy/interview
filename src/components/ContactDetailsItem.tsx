/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')
import util = require('../util')

import ContactDetail = require('../model/ContactDetail')

interface ContactDetailsItemProps {
    contact: ContactDetail
}

class ContactDetailsItem extends TypedReact.Component<ContactDetailsItemProps, void> {

    public render() {
        var contact = this.props.contact

        return (
            <div className="item">
                <div className="item__header">
                    <div className="profile-pic"></div>
                    <input className="name" type="text" name="" value={contact.fullName} placeholder="Full Name" disabled />
                </div>
                <div className="item__content">
                    <div className="input-wrap">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" className="bio" placeholder="Decsription" disabled value={contact.bio}></textarea>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="tel">Phone</label>
                        <input type="text" name="tel" className="tel" value={util.formatPhone(contact.phone)} placeholder="+XXX XXX XXX XXX" disabled />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" className="email" value={contact.email} placeholder="E-mail" disabled />
                    </div>
                </div>
                <div className="item__footer">
                    <div className="button">Edit</div>
                    <div className="button button--negative">Delete</div>
                </div>
            </div>
        )
   }

}

export = TypedReact.createClass(ContactDetailsItem)
