import * as React from 'react';
import Filter from './components/Filter';
import Search from './components/Search';
import Contact from './components/Contact';
import { Contact as ContactType } from '../state/types';
import Connect from '../state/Connect';
import { select, CompState } from './state';

const List: React.SFC = () => (
  <Connect select={select}>
    {({ contacts, activeFilter, searchVal }: CompState) => (
      <div className="list">
        <div className="list__header">
          <Search searchVal={searchVal} />
          <Filter activeFilter={activeFilter} />
          <div className="heading">Contact List</div>
        </div>

        <div className="list__content">
          {contacts.map((contact: ContactType) => (
            <Contact key={`contact-${contact.id}`} contact={contact} />
          ))}
        </div>
        <div className="list__footer">
          <div className="add-bttn">
            <span className="in">Add new contact</span>
          </div>
        </div>
      </div>
    )}
  </Connect>
);

export default List;
