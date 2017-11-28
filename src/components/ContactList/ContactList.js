import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem/ContactListItem';

import { ContactType } from '../../types';
import './ContactList.css';

class ContactList extends Component {
  render() {
    return (
      <div className="ContactList">
        {this.props.contacts.map((contact, index, list) =>
          <ContactListItem
            key={contact.id}
            contact={contact}
            prevContact={index > 0 ? list[index - 1] : null}
            isReadOnly={this.props.isReadOnly}
            handleUpdate={this.props.handleUpdate}
            handleDelete={this.props.handleDelete}
          />
        )}

        {!this.props.contacts.length &&
          <div className="ContactList__empty">
            <h1>You still don't have any contact!</h1>
            <h2>You can fix it via the "Plus" button at the bottom-right :)</h2>
          </div>
        }
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactType).isRequired
};

export default ContactList;
