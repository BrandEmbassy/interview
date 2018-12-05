import React from "react";
import Contact from "./Contact";

const ListContacts = ({ contacts }) => (
  <div className="list__content">
    {contacts.map(contact => (
      <Contact key={contact.id} name={contact.name} />
    ))}
  </div>
);

export default ListContacts;
