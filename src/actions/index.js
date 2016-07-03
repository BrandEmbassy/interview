import { v4 } from 'node-uuid';

export const selectContact = (id) => ({
  type: 'SELECT_CONTACT',
  id,
});

export const saveContact = (contact) => ({
  type: 'SAVE_CONTACT',
  contact,
});

export const newContact = () => ({
  type: 'NEW_CONTACT',
  id: v4(),
});

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  id,
});
