import React from 'react';

import ContactList from './ContactList';

test('should render the "no contacts" message', () => {
  const wrapper = shallow(
    <ContactList
      contacts={[]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('should render one contact', () => {
  const wrapper = shallow(
    <ContactList
      contacts={[{
        id: '100',
        firstName: 'Maurizio',
        lastName: 'Pucci',
        bio: 'no comment!',
        phones: [
          { type: 'casa', number: '123456' },
        ],
        emails: [
          { type: 'work', number: 'maurizio.pucci@abc.com' },
          { type: 'personal', number: 'mao@xyz.io' },
        ],
      }]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('should render two contacts', () => {
  const wrapper = shallow(
    <ContactList
      contacts={[
        {
          id: '100',
          firstName: 'Maurizio',
          lastName: 'Pucci',
          bio: 'no comment!',
          phones: [
            { type: 'casa', number: '123456' },
          ],
          emails: [
            { type: 'work', number: 'maurizio.pucci@abc.com' },
            { type: 'personal', number: 'mao@xyz.io' },
          ],
        },
        {
          id: '200',
          firstName: 'Aaa',
          lastName: 'Bbb',
        },
      ]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
