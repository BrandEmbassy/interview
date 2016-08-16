import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (

        <div className="item">
            <div className="item__header">
                <div className="profile-pic"></div>
                <div className="name">Patrik Vrbovsky</div>
            </div>
            <div className="item__content">
                <div className="input-wrap">
                    <label for="bio">Bio</label>
                    <p className="bio">dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu</p>
                </div>
                <div className="input-wrap">
                    <label for="tel">Phone</label>
                    <div className="tel">+420 777 888 999</div>
                </div>
                <div className="input-wrap">
                    <label for="email">E-mail</label>
                    <div className="email">brand@embassy.com</div>
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
                    <label for="bio">Bio</label>
                    <textarea name="bio" className="bio" placeholder="Decsription" >dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu</textarea>
                </div>
                <div className="input-wrap">
                    <label for="tel">Phone</label>
                    <input type="text" name="tel" className="tel" value="+420 777 888 999" placeholder="+XXX XXX XXX XXX" />
                </div>
                <div className="input-wrap">
                    <label for="email">E-mail</label>
                    <span className="error-msg">Invalid E-mail</span>
                    <input type="text" className="email error" value="brand&embassy.com" placeholder="E-mail" />
                </div>
            </div>
            <div className="item__footer">
                <div className="button button--positive">Save</div>
                <div className="button button--negative">Delete</div>
            </div>
        </div>
    );
  }
}
