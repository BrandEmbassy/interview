import React from "react";
import Contact from "./Contact";

const ListContacts = ({ contacts, onContactClick }) => (
  <div className="list__content">
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        name={contact.name}
        onClick={() => onContactClick(contact)}
      />
    ))}
  </div>
);

export default ListContacts;
