import React, { PropTypes } from 'react';
import ContactLink from './ContactLink';

const List = ({ contacts, selectedContact, onContactClick }) => (
  <div className="list">
    <div className="list__header">
      <div className="heading">Contact List</div>
    </div>
    <div className="list__content">
      {contacts.map(contact =>
        <ContactLink
          key={contact.id}
          {...contact}
          selected={selectedContact && contact.id === selectedContact.id}
          onClick={() => onContactClick(contact.id)}
        />
      )}
    </div>
  </div>
);

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onContactClick: PropTypes.func.isRequired,
  selectedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default List;
