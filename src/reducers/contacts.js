const contact = (state, action) => {
  switch (action.type) {
    case 'SAVE_CONTACT':
      if (state.id !== action.contact.id) {
        return state;
      }
      return Object.assign({}, action.contact, { phone: Number(action.contact.phone) });
    default:
      return state;
  }
};

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_CONTACT':
      return state.map(t =>
        contact(t, action)
      );
    default:
      return state;
  }
};

export default contacts;
