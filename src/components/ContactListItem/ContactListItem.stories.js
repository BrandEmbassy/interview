import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Story } from '../../../.storybook/Story';
import {
  pucciMaurizioContact,
  pucciKristynaContact,
  rossiMarioContact,
} from '../../../.storybook/sample-contacts';

import 'normalize.css';
import '../../index.css';
import '../App/App.css';

import ContactListItem from './ContactListItem';

storiesOf('ContactListItem', module)
  .add('contact', () => (
    <Story desc="Should show the contact and the header">
      <ContactListItem
        contact={pucciMaurizioContact}
        handleUpdate={action('handleUpdate')}
        handleDelete={action('handleDelete')}
        handleCreate={action('handleCreate')}
      />
    </Story>
  ))
  .add('prevContact: Same lastName', () => (
    <Story desc="Should show the contact but not the header">
      <ContactListItem
        contact={pucciMaurizioContact}
        prevContact={pucciKristynaContact}
        handleUpdate={action('handleUpdate')}
        handleDelete={action('handleDelete')}
        handleCreate={action('handleCreate')}
      />
    </Story>
  ))
  .add('prevContact: Different lastName', () => (
    <Story desc="Should show the contact and the header">
      <ContactListItem
        contact={pucciMaurizioContact}
        prevContact={rossiMarioContact}
        handleUpdate={action('handleUpdate')}
        handleDelete={action('handleDelete')}
        handleCreate={action('handleCreate')}
      />
    </Story>
  ))
  .add('isReadOnly', () => (
    <Story desc="Should show the action buttons disabled">
      <ContactListItem
        contact={pucciMaurizioContact}
        isReadOnly
        handleUpdate={action('handleUpdate')}
        handleDelete={action('handleDelete')}
        handleCreate={action('handleCreate')}
      />
    </Story>
  ))
  .add('isNew', () => (
    <Story desc="Should show an empty contact in editing mode with the header 'New Contact'">
      <ContactListItem
        isNew
        handleUpdate={action('handleUpdate')}
        handleDelete={action('handleDelete')}
        handleCreate={action('handleCreate')}
      />
    </Story>
  ));
