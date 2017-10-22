import * as React from 'react';
import Contact from '../Contact';
import render from '../../../test/render';
import dummyContacts from '../../../dummyContacts';

dummyContacts.forEach(contact => {
  it(`should render contact - ${JSON.stringify(contact, null, 2)}`, () => {
    expect(render(<Contact contact={contact} />)).toMatchSnapshot();
  });
});
