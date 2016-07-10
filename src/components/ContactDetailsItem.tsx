/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')
import { Link } from 'react-router'
import util = require('../util')

import TextInput = require('./TextInput')
import ContactDetail = require('../model/ContactDetail')

interface ContactDetailsItemProps {
    id: number,
    contact: ContactDetail,
    editing: boolean,
}

class ContactDetailsItem extends TypedReact.Component<ContactDetailsItemProps, void> {

    private _footer() {

        if (this.props.editing) 
        {
            return (
                <div className="item__footer">
                    <div className="button button--positive">Save</div>
                    <div className="button button--negative">Delete</div>
                </div>
            )
        }
        else
        {
            return (
                <div className="item__footer">
                    <div className="button"><Link to={`/contact/${this.props.id}/edit`}>Edit</Link></div>
                    <div className="button button--negative">Delete</div>
                </div>
            )
        }
    }

    public render() {
        var contact = this.props.contact

        return (
            <div className="item">
                <div className="item__header">
                    <div className="profile-pic"></div>
                    <TextInput className="name" value={contact.fullName} placeholder="Full Name"
                        editing={this.props.editing} />
                </div>
                <div className="item__content">
                    <div className="input-wrap">
                        <TextInput className="bio" name="bio" label="Bio" placeholder="Decsription"
                            multiline={true} value={contact.bio} editing={this.props.editing}/>
                    </div>
                    <div className="input-wrap">
                        <TextInput className="tel" name="tel" label="Phone" placeholder="XXX XXX XXX"
                            value={contact.phone} editing={this.props.editing} dataFormatter={util.formatPhone}/>
                    </div>
                    <div className="input-wrap">
                        <TextInput className="email" name="email" label="E-mail" placeholder="name@where.at"
                            value={contact.email} editing={this.props.editing}/>
                    </div>
                </div>
                {this._footer()}
            </div>
        )
   }

}

export = TypedReact.createClass(ContactDetailsItem)
