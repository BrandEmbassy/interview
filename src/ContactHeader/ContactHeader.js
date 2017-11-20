import React, { Component } from 'react';

import contactsIcon from './contacts.svg';
import searchIcon from './search.svg';
import clearIcon from './clear.svg';
import './ContactHeader.css';

class ContactHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <div className="ContactHeader">

        <div className="ContactHeader__start">
          <img alt="Contacts" src={contactsIcon} />
          <h1>{this.props.title}</h1>
        </div>

        <div className="ContactHeader__center">
          <img
            className="ContactHeader__searchIcon"
            alt="Search contacts"
            src={searchIcon} />

          <input
            ref={(elem) => this.searchInput = elem}
            className="ContactHeader__searchBox"
            placeholder="Search..."
            value={this.state.searchText}
            onChange={this.onSearchValueChange}
          />

          <button
            className="ContactHeader__searchCleanButton"
            onClick={this.onCleanSearchText}>
            <img
              alt="Clean search input"
              src={clearIcon} />
          </button>
        </div>

        <div className="ContactHeader__end">
          <img alt="Maurizio Pucci avatar" src="user-avatar.jpg" />
          <span>Maurizio Pucci</span>
        </div>
      </div>
    );
  }

  onSearchValueChange = (event) => {
    const searchText = event.target.value || '';
    this.setState({ searchText });
    this.props.onSearchTextChange(searchText);
  }

  onCleanSearchText = (event) => {
    this.setState({ searchText: '' });
    this.searchInput.focus();
    this.props.onSearchTextChange('');
  }
}

export default ContactHeader;
