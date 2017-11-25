import React, { Component } from 'react';

import ContactListItem from '../ContactListItem/ContactListItem';

import './ContactList.css';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEmptyMessage: false
    };
  }

  get hasContacts() {
    return this.props.contacts && this.props.contacts.length === 0 && !this.props.readOnly;
  }

  render() {
    if (this.hasContacts) {
      if (this.showEmptyMessageTimeout) {
        clearTimeout(this.showEmptyMessageTimeout);
      }
      this.showEmptyMessageTimeout = setTimeout(() =>
        this.setState({
          showEmptyMessage: this.hasContacts
        }), 500);
    }

    return (
      <div className="ContactList">
        {this.props.contacts.map((contact, index, list) =>
          <ContactListItem
            key={contact.id}
            contact={contact}
            readOnly={this.props.readOnly}
            prevContact={index && list[index - 1]}
            handleUpdate={this.props.handleUpdate}
            handleDelete={this.props.handleDelete}
          />
        )}

        {this.state.showEmptyMessage &&
          <div className="ContactList__empty">
            <h1>You still don't have any contact!</h1>
            <h2>You can fix it via the "Plus" button at the bottom-right :)</h2>
          </div>
        }
      </div>
    );
  }
}

export default ContactList;
