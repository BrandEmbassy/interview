/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
import TypedReact = require('typed-react')

/// <reference path="../../typings/react/react.d.ts" />
import React = require('react')

/// <reference path="../typings/react-redux/react-redux.d.ts" />
import { connect } from 'react-redux'

import ContactList = require('./ContactList')
import ContactDetail = require('./ContactDetail')
import AppState = require('../model/AppState')

interface LayoutProps {
    appState: AppState,

    // this comes from the router
    children?: any[]
}

class Layout extends TypedReact.Component<LayoutProps, void> {

    public render() {
        console.log(this.props.appState)

        return (
            <section className="app">
                <ContactList />
                {this.props.children}
            </section>
        )
   }

}

function mapStateToProps(state: AppState) : LayoutProps {
    return {
        appState: state
    }
}

export = connect(mapStateToProps)(TypedReact.createClass(Layout))