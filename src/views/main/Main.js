import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { hashHistory as history } from 'react-router';

import debounce from 'lodash/debounce';

import ContactItem from '../../components/contact/ContactItem';
import * as contactActions from '../../actions/contactActions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.startEdit = this.startEdit.bind(this);
    this.addContact = this.addContact.bind(this);
    this.setSorting = this.setSorting.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.callSearch = this.callSearch.bind(this);
    this.state = { query: '' };

    this.doSearch = debounce(this.callSearch, 300);
  }


  setSorting(index) {
    this.props.setSortingMode(index);
  }

  startEdit(contact = {}) {
    this.props.startEditingContact(contact);
    history.push('/contact');
  }

  addContact() {
    this.props.startEditingContact({});
    history.push('/contact');
  }

  searchHandler(event) {
    const query = event.target.value;
    this.setState({ query });
    this.doSearch(query);
  }
  callSearch(query) {
    this.props.searchContact(query, this.props.contacts);
  }

  render() {
    const { contacts, sortingMode, editingContact, searchedContacts, searchQuery } = this.props;
    const contactsNodes = (searchQuery ? searchedContacts : contacts).map(contact => (<ContactItem
      key={contact.id}
      contact={contact}
      active={contact === editingContact}
      onClick={() => this.startEdit(contact)}
    />));

    const { query } = this.state;
    return (
      <div>
        <div className="list">
          <div className="list__header">
            <div className="search">
              <input className="input" type="text" name="" value={query} onChange={this.searchHandler} placeholder="Search ..." />
            </div>
            <div className="filter">
              <div onClick={() => this.setSorting(0)} className={classNames('filter__item', { 'filter__item--active': sortingMode === 0 })}>All</div>
              <div onClick={() => this.setSorting(1)} className={classNames('filter__item', { 'filter__item--active': sortingMode === 1 })}>A-Z</div>
              <div onClick={() => this.setSorting(2)} className={classNames('filter__item', { 'filter__item--active': sortingMode === 2 })}>Z-A</div>
            </div>
            <div className="heading">Contact List</div>
          </div>
          <div className="list__content">
            {contactsNodes}
          </div>
          <div className="list__footer">
            <div className="add-bttn" onClick={this.addContact}><span className="in">Add new contact</span></div>
          </div>
        </div>
      </div>
    );
  }
}

const { startEditingContact, setSortingMode, searchContact } = contactActions;

export default connect((store) => {
  const { contacts, sortingMode,
    editingContact, searchedContacts, searchQuery } = store.contactsModel;
  return { contacts, sortingMode, editingContact, searchedContacts, searchQuery };
}, { startEditingContact, setSortingMode, searchContact })(Main);

Main.propTypes = {
  contacts: PropTypes.array,
  searchedContacts: PropTypes.array,
  editingContact: PropTypes.object,
  sortingMode: PropTypes.number,
  searchQuery: PropTypes.string,
  startEditingContact: PropTypes.func,
  setSortingMode: PropTypes.func,
  searchContact: PropTypes.func,
};
