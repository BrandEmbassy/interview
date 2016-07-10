/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require("typed-react")
import React = require("react")

class ContactList extends TypedReact.Component<void, void> {

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
                    <div className="item">
                        <div className="in">
                            <div className="profile-pic"></div>
                            Janko Mrkva
                        </div>
                    </div>
                    <div className="item item--active">
                        <div className="in">
                            <div className="profile-pic"></div>
                            Patrik Vrbovsky
                        </div>
                    </div>
                    <div className="item">
                        <div className="in">
                            <div className="profile-pic"></div>
                            Tomáš Jedno
                        </div>
                    </div>
                </div>
                <div className="list__footer">
                    <div className="add-bttn"><span className="in">Add new contact</span></div>
                </div>
            </div>
       )
    }

}

export = TypedReact.createClass(ContactList)