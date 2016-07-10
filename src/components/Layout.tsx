/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require("typed-react")
import React = require("react")

import ContactList = require("./ContactList")
import ContactDetails = require("./ContactDetails")

class Layout extends TypedReact.Component<void, void> {

   public render() {
        return (
            <section className="app">
                <ContactList />
                <ContactDetails />
            </section>
        )
   }

}

export = TypedReact.createClass(Layout)