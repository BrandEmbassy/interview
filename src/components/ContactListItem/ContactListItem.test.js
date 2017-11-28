import React from 'react';

import {
  pucciMaurizioContact,
  pucciKristynaContact,
  rossiMarioContact,
} from '../../../.storybook/sample-contacts';

import ContactListItem from './ContactListItem';

test('contact', () => {
  const wrapper = shallow(
    <ContactListItem
      contact={pucciMaurizioContact}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('prevContact: Same lastName', () => {
  const wrapper = shallow(
    <ContactListItem
      contact={pucciMaurizioContact}
      prevContact={pucciKristynaContact}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('prevContact: Different lastName', () => {
  const wrapper = shallow(
    <ContactListItem
      contact={pucciMaurizioContact}
      prevContact={rossiMarioContact}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('isReadOnly', () => {
  const wrapper = shallow(
    <ContactListItem
      contact={pucciMaurizioContact}
      isReadOnly
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('isNew', () => {
  const wrapper = shallow(
    <ContactListItem
      isNew
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('handleCreate: On save should call it with a contact arg', () => {
  const onHandleCreate = jest.fn();

  const wrapper = shallow(
    <ContactListItem
      isNew
      handleCreate={onHandleCreate}
    />
  );

  wrapper.setState({
    newValues: {
      firstName: 'Maurizio',
      lastName: 'Pucci',
    }
  });

  const event = { preventDefault: jest.fn() };

  wrapper.find('.Contact__save-button').simulate('click', event);

  expect(onHandleCreate.mock.calls.length).toBe(1);
  expect(onHandleCreate.mock.calls[0][0]).toEqual({
    firstName: 'Maurizio',
    lastName: 'Pucci',
  });
  expect(event.preventDefault.mock.calls.length).toBe(1);
});

test('handleCreate: On cancel should call it with a null arg', () => {
  const onHandleCreate = jest.fn();

  const wrapper = shallow(
    <ContactListItem
      isNew
      handleCreate={onHandleCreate}
    />
  );

  const event = { preventDefault: jest.fn() };

  wrapper.find('.Contact__cancel-button').simulate('click', event);

  expect(onHandleCreate.mock.calls.length).toBe(1);
  expect(onHandleCreate.mock.calls[0][0]).toBeNull();
  expect(event.preventDefault.mock.calls.length).toBe(1);
});
