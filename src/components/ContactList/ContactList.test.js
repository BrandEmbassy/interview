import React from 'react';

import {
  pucciMaurizioContact,
  rossiMarioContact,
} from '../../../.storybook/sample-contacts';

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
      contacts={[pucciMaurizioContact]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('should render two contacts', () => {
  const wrapper = shallow(
    <ContactList
      contacts={[
        pucciMaurizioContact,
        rossiMarioContact,
      ]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
