import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (<div>
      <div className="list">
      <div className="list__header">
        <div className="search">
          <input className="input" type="text" name="" value="" placeholder="Search ..." />
        </div>
        <div className="filter">
            <div className="filter__item filter__item--active">All</div>
            <div className="filter__item">A-Z</div>
            <div className="filter__item">Z-A</div>
        </div>
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
<div className="detail">
    <div className="item">
        <div className="item__header">
            <div className="profile-pic"></div>
            <div className="name">Patrik Vrbovsky</div>
            <input className="name" type="text" name="" value="Patrik Vrbovsky" placeholder="Full Name" disabled />
        </div>
        <div className="item__content">
            <div className="input-wrap">
                <label for="bio">Bio</label>
                <textarea name="bio" className="bio" placeholder="Decsription" disabled>dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu</textarea>
            </div>
            <div className="input-wrap">
                <div className="tel">+420 777 888 999</div>
                <label for="tel">Phone</label>
                <input type="text" name="tel" className="tel" value="+420 777 888 999" placeholder="+XXX XXX XXX XXX" disabled />
            </div>
            <div className="input-wrap">
                <div className="tel">+420 777 888 999</div>
                <label for="email">E-mail</label>
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
            <div className="name">Patrik Vrbovsky</div>
            <input className="name" type="text" name="" value="Patrik Vrbovsky" placeholder="Full Name" />
        </div>
        <div className="item__content">
            <div className="input-wrap">
                <label for="bio">Bio</label>
                <textarea name="bio" className="bio" placeholder="Decsription" >dkfkjgi hiduhiodsuhfiuh iuwhrfiusdshfi uhdsfiuh siufhsailu fhiuhf disufhidsuhf isdufhidu hfihf isdufhidu hfihf isdufhidu hfiu</textarea>
            </div>
            <div className="input-wrap">
                <div className="tel">+420 777 888 999</div>
                <label for="tel">Phone</label>
                <input type="text" name="tel" className="tel" value="+420 777 888 999" placeholder="+XXX XXX XXX XXX" />
            </div>
            <div className="input-wrap">
                <div className="email">brand&embassy.com</div>
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
  </div>
</div>)
  }
}

export default App;
