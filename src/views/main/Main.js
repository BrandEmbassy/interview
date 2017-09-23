import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { hashHistory as history } from 'react-router';

import ContactItem from '../../components/contact/ContactItem';
import * as contactActions from '../../actions/contactActions';

function Main({ contacts, sortingMode, editingContact, startEditingContact, setSortingMode }) {
  const startEdit = (contact = {}) => {
    startEditingContact(contact);
    history.push('/contact');
  };
  const addContact = () => {
    startEditingContact({});
    history.push('/contact');
  };
  const setSorting = (index) => {
    setSortingMode(index);
  };
  const contactsNodes = contacts.map((contact) => {
    return (
      <ContactItem
        key={contact.id}
        contact={contact}
        active={contact === editingContact}
        onClick={() => startEdit(contact)}
      />
    );
  });

  return (<div>
    <div className="list">
      <div className="list__header">
        <div className="search">
          <input className="input" type="text" name="" value="" placeholder="Search ..." />
        </div>
        <div className="filter">
          <div onClick={() => setSorting(0)} className={classNames('filter__item', { 'filter__item--active': sortingMode === 0 })}>All</div>
          <div onClick={() => setSorting(1)} className={classNames('filter__item', { 'filter__item--active': sortingMode === 1 })}>A-Z</div>
          <div onClick={() => setSorting(2)} className={classNames('filter__item', { 'filter__item--active': sortingMode === 2 })}>Z-A</div>
        </div>
        <div className="heading">Contact List</div>
      </div>
      <div className="list__content">
        {contactsNodes}
      </div>
      <div className="list__footer">
        <div className="add-bttn" onClick={addContact}><span className="in">Add new contact</span></div>
      </div>
    </div>
  </div>);
}


const { startEditingContact, setSortingMode } = contactActions;

export default connect((store) => {
  const { contacts, sortingMode, editingContact } = store.contactsModel;
  return { contacts, sortingMode, editingContact };
}, { startEditingContact, setSortingMode })(Main);

Main.propTypes = {
  contacts: PropTypes.array,
  editingContact: PropTypes.object,
  sortingMode: PropTypes.number,
  startEditingContact: PropTypes.func,
  setSortingMode: PropTypes.func,
};
