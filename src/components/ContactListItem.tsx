/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')

interface ContactListItemProps {
    name: string
}

class ContactListItem extends TypedReact.Component<ContactListItemProps, void> {

    public render() {
        return (
            <div className="item">
                <div className="in">
                    <div className="profile-pic"></div>
                    {this.props.name}
                </div>
            </div>
        )
    }   

}

export = TypedReact.createClass(ContactListItem)