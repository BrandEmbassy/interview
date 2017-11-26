import React, { Component } from 'react';

import io from 'socket.io-client';

import ContactHeader from '../ContactHeader/ContactHeader';
import ContactList from '../ContactList/ContactList';
import ContactListItem from '../ContactListItem/ContactListItem';
import FabButton from '../FabButton/FabButton';
import AlphabetIndex from '../AlphabetIndex/AlphabetIndex';
import Toast from '../Toast/Toast';

import {
  upperCaseFullName,
  buildAlphabetIndex,
  fullName
} from '../../support';

import addIcon from './add.svg';
import './App.css';

const buildContactActionToastMessage = (contact, action) =>
  `Contact "${fullName(contact)}" has been ${action}.`;

class App extends Component {
  constructor(props) {
    super(props);

    this.socket = io();

    this.state = {
      contacts: [],
      availableLetters: '',
      showAddContact: false,
      connect: false
    };
  }

  render() {
    return (
      <div className="App">
        <Toast ref={(elem) => this.toast = elem} />

        <ContactHeader
          title="Contacts"
          onSearchTextChange={this.filterContacts}
        />

        <div className="App__content">

          {this.state.showAddContact &&
            <ContactListItem
              isNew={true}
              handleCreate={this.addContact}
            />
          }

          <AlphabetIndex
            availableLetters={this.state.availableLetters}
            onLetterClick={this.scrollToLetter}
          />

          <ContactList
            readOnly={!this.state.connected}
            contacts={this.state.contacts}
            handleUpdate={this.updateContact}
            handleDelete={this.deleteContact}
          />

        </div>

        <FabButton
          disabled={!this.state.connected}
          onClick={this.showAddContact}>
          <img alt="Add contact" src={addIcon} />
        </FabButton>
      </div>
    );
  }

  componentDidMount() {
    this.socket.on('connect', this.didConnect);
    this.socket.on('disconnect', this.didDisconnect);
    this.socket.on('reconnect_error', this.didReconnectError);

    this.socket.on('allContacts', this.allContacts);
    this.socket.on('contactDidAdd', this.contactDidAdd);
    this.socket.on('contactDidUpdate', this.contactDidUpdate);
    this.socket.on('contactDidDelete', this.contactDidDelete);
  }

  didConnect = () => {
    this.setState({ connected: true });
    this.toast.show('Connected!');
  }

  didDisconnect = () => {
    this.setState({ connected: false });
    this.toast.show('Disconnected!');
  }

  didReconnectError = (error) => {
    this.toast.show({
      timeout: 0,
      text: 'Connection failed! You are offline.'
    });
  }

  allContacts = (contacts) => {
    console.log('<= allContacts', { contacts });

    this.contactsCache = contacts;

    const availableLetters = buildAlphabetIndex(contacts);

    this.setState({
      contacts,
      availableLetters
    });
  }

  addContact = (values) => {
    if (values) {
      this.socket.emit('addContact', { values });
    }
    this.setState({ showAddContact: false });
  }

  contactDidAdd = (newContact) => {
    console.log('<= contactDidAdd', { newContact });
    this.toast.show(buildContactActionToastMessage(newContact, 'added'));
    this.socket.emit('getContacts');
  }

  updateContact = (newValues, contact) => {
    this.socket.emit('updateContact', {
      id: contact.id,
      newValues
    });
  }

  contactDidUpdate = (updatedContact) => {
    console.log('<= contactDidUpdate', { updatedContact });
    this.toast.show(buildContactActionToastMessage(updatedContact, 'updated'));
    this.socket.emit('getContacts');
  }

  deleteContact = (contact) => {
    this.socket.emit('deleteContact', { id: contact.id });
  }

  contactDidDelete = (deletedContact) => {
    console.log('<= contactDidDelete', { deletedContact });
    this.toast.show(buildContactActionToastMessage(deletedContact, 'deleted'));
    this.socket.emit('getContacts');
  }

  scrollToLetter = (letter) => {
    const letterElem = document.querySelector(`#ContactListItem__header-${letter}`);

    letterElem.scrollIntoView(true);

    if (window.scrollY) {
      window.scroll(0, window.scrollY - 72);
    }
  }

  filterContacts = (searchText) => {
    const searchTextUpper = searchText.toUpperCase();

    const contacts = this.contactsCache
      .slice()
      .filter(c => upperCaseFullName(c).indexOf(searchTextUpper) !== -1);

    this.setState({ contacts });
  }

  showAddContact = (event) => {
    this.setState({ showAddContact: true });
  }
}

export default App;
