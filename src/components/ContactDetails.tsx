/// <reference path="../../node_modules/typed-react/typed-react.d.ts" />
/// <reference path="../../typings/react/react.d.ts" />
import TypedReact = require("typed-react")
import React = require("react")

class ContactDetails extends TypedReact.Component<void, void> {

    public render() {
        return (
            <div className="detail">
                <div className="item">
                    <div className="item__header">
                        <div className="profile-pic"></div>
                        <input className="name" type="text" name="" value="Patrik Vrbovsky" placeholder="Full Name" disabled />
                    </div>
                    <div className="item__content">
                        <div className="input-wrap">
                            <label htmlFor="bio">Bio</label>
                            <textarea name="bio" className="bio" placeholder="Decsription" disabled>dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu</textarea>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="tel">Phone</label>
                            <input type="text" name="tel" className="tel" value="+420 777 888 999" placeholder="+XXX XXX XXX XXX" disabled />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className="email" value="brand@embassy.com" placeholder="E-mail" disabled />
                        </div>
                    </div>
                    <div className="item__footer">
                        <div className="button">Edit</div>
                        <div className="button button--negative">Delete</div>
                    </div>
                </div>

                <div className="item">
                    <div className="item__header">
                        <div className="profile-pic"></div>
                        <input className="name" type="text" name="" value="Patrik Vrbovsky" placeholder="Full Name" />
                    </div>
                    <div className="item__content">
                        <div className="input-wrap">
                            <label htmlFor="bio">Bio</label>
                            <textarea name="bio" className="bio" placeholder="Decsription" >dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu</textarea>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="tel">Phone</label>
                            <input type="text" name="tel" className="tel" value="+420 777 888 999" placeholder="+XXX XXX XXX XXX" />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="email">E-mail</label>
                            <span className="error-msg">Invalid E-mail</span>
                            <input type="text" className="email error" value="brand&embassy.com" placeholder="E-mail" />
                        </div>
                    </div>
                    <div className="item__footer">
                        <div className="button button--positive">Save</div>
                        <div className="button button--negative">Delete</div>
                    </div>
                </div>
            </div>
        )
   }

}

export = TypedReact.createClass(ContactDetails)
