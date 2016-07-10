/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require("typed-react")
import React = require("react")

import ContactList = require("./ContactList")
import ContactDetails = require("./ContactDetails")

import AppState = require('../model/AppState')

const appState : AppState = new AppState([
    {
        fullName: "Patrik Vrbovsky",
        bio: "Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.",
        phone: 123456789,
        email: "john.smith@matrix.com"
    },
    {
        fullName: "Thomas Anderson",
        bio: "I know you're out there. I can feel you now. I know that you're afraid... you're afraid of us. You're afraid of change.",
        phone: 111222333,
        email: "thomas.anderson@matrix.com"
    }
])

class Layout extends TypedReact.Component<void, void> {

   public render() {
        return (
            <section className="app">
                <ContactList appState={appState} />
                <ContactDetails appState={appState} />
            </section>
        )
   }

}

export = TypedReact.createClass(Layout)