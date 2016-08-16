import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  render() {
    return (
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
    );
  }
}

export default connect()(Sidebar);
