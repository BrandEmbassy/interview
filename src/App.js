import React, { Component } from 'react';
import Contacts from './modules/contacts'
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts></Contacts>
      </div>
    );
  }
}
