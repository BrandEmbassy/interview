import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem/ContactListItem';

import './ContactList.css';

class ContactList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ContactList">
        {this.props.contacts.map((contact, index, list) =>
          <ContactListItem
            key={contact.id}
            contact={contact}
            readOnly={this.props.readOnly}
            prevContact={index > 0 ? list[index - 1] : null}
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
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    phones: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      number: PropTypes.string,
    })),
    emails: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      address: PropTypes.string,
    })),
  })).isRequired
};

export default ContactList;
