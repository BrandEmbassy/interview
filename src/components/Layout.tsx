/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require('typed-react')
import React = require('react')

import AppState = require('../model/AppState')
import ContactList = require('./ContactList')
import ContactDetails = require('./ContactDetails')


interface LayoutProps {
    appState: AppState,

    // this comes from the router
    children: any[]
}

class Layout extends TypedReact.Component<LayoutProps, void> {

    public render() {
        return (
            <section className="app">
                <ContactList appState={this.props.appState} />
                {this.props.children}
            </section>
        )
   }

}

export = TypedReact.createClass(Layout)