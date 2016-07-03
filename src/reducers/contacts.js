const contact = (state, action) => {
  switch (action.type) {
    case 'NEW_CONTACT':
      return {
        id: action.id,
        fullName: '',
        bio: '',
        phone: '',
        email: '',
      };
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
    case 'NEW_CONTACT':
      return [
        ...state,
        contact(undefined, action),
      ];
    case 'SAVE_CONTACT':
      return state.map(t =>
        contact(t, action)
      );
    case 'DELETE_CONTACT':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default contacts;
