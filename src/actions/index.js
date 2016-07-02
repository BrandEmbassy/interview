
export const selectContact = (id) => ({
  type: 'SELECT_CONTACT',
  id,
});

export const saveContact = (contact) => ({
  type: 'SAVE_CONTACT',
  contact,
});
