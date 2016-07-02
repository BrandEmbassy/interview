
const selectedContact = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_CONTACT':
      return action.id;
    case 'NEW_CONTACT':
      return action.id;
    default:
      return state;
  }
};

export default selectedContact;

export const getSelectedContact = (contacts, contact) =>
  (contacts.find((c) => c.id === contact));
