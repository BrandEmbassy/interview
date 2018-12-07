const emptyContact = {
  name: "",
  bio: "",
  phone: "",
  email: ""
};

const initialState = {
  visible: false,
  editable: false,
  ...emptyContact
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_DETAIL_MODAL":
      return {
        visible: true,
        editable: action.editable,
        ...action.contact
      };
    case "SHOW_CREATE_MODAL":
      return {
        visible: true,
        editable: true,
        ...emptyContact
      };
    case "CLOSE_MODAL":
      return initialState;
    default:
      return state;
  }
};

export default modal;
