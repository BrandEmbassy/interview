/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
import TypedReact = require('typed-react')
/// <reference path="../../typings/react/react.d.ts" />
import React = require('react')
/// <reference path="../../typings/react-router/react-router.d.ts" />
import { Link } from 'react-router'
import util = require('../utils/util')

import { RouterProps } from '../utils/ReactUtils'

import TextInput = require('./TextInput')
import Contact = require('../model/Contact')

interface ContactDetailViewProps extends RouterProps {
    contact: Contact
    editing: boolean
    onSave: (contact: Contact) => void
    onDelete: () => void
}

class ContactDetailView extends TypedReact.Component<ContactDetailViewProps, void> {
    
    private _onNameChange(newValue: string) {
        this.props.contact.fullName = newValue;
    }
    private _onBioChange(newValue: string) {
        this.props.contact.bio = newValue;
    }
    private _onEmailChange(newValue: string) {
        this.props.contact.email = newValue;
    }
    private _onPhoneChange(newValue: string) {
        this.props.contact.phone = parseInt(newValue);
    }

    private _onSave() {
        if (
            this._validateNonemptyString(this.props.contact.fullName) &&
            this._validateNonemptyString(this.props.contact.bio) &&
            util.isPhone(this.props.contact.phone) &&
            util.isEmail(this.props.contact.email)
        ) {
            this.props.onSave(this.props.contact)
            this.props.history.push('/contact/' + this.props.contact.id)
        }
    }

    private _validateNonemptyString(val: string): boolean {
        if (val) {
            return val.length > 0
        } else {
            return false
        }
    }

    public render() {
        var contact = this.props.contact

        return (
            <div className="item">
                <div className="item__header">
                    <div className="profile-pic"></div>
                    <TextInput className="name" value={contact.fullName} placeholder="Full Name"
                        editing={this.props.editing} onChange={this._onNameChange}
                        validator={this._validateNonemptyString} invalidWarning="Invalid name" />
                </div>
                <div className="item__content">
                    <div className="input-wrap">
                        <TextInput className="bio" name="bio" label="Bio" placeholder="Decsription"
                            multiline={true} value={contact.bio} editing={this.props.editing}
                            onChange={this._onBioChange} 
                            validator={this._validateNonemptyString} invalidWarning="Invalid description" />
                    </div>
                    <div className="input-wrap">
                        <TextInput className="tel" name="tel" label="Phone" placeholder="XXX XXX XXX"
                            value={contact.phone} editing={this.props.editing} onChange={this._onPhoneChange}
                            dataFormatter={util.formatPhone}
                            validator={util.isPhone} invalidWarning="Invalid phone" />
                    </div>
                    <div className="input-wrap">
                        <TextInput className="email" name="email" label="E-mail" placeholder="name@where.at"
                            value={contact.email} editing={this.props.editing} onChange={this._onEmailChange}
                            validator={util.isEmail} invalidWarning="Invalid e-mail"/>
                    </div>
                </div>
                {this._footer()}
            </div>
        )
    }

    private _footer() {
        if (this.props.editing) 
        {
            return (
                <div className="item__footer">
                    <div className="button button--positive" onClick={this._onSave}>Save</div>
                    <Link to={`/contact/${this.props.contact.id}`}><div className="button button--negative">Cancel</div></Link>
                </div>
            )
        }
        else
        {
            return (
                <div className="item__footer">
                    <Link to={`/contact/${this.props.contact.id}/edit`}><div className="button">Edit</div></Link>
                    <div className="button button--negative" onClick={this.props.onDelete}>Delete</div>
                </div>
            )
        }
    }

}

export = TypedReact.createClass(ContactDetailView)
