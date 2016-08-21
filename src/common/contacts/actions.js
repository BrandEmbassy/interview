export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const SAVE_CONTACT = 'SAVE_CONTACT';
export const SAVE_CONTACT_SUCCESS = 'SAVE_CONTACT_SUCCESS';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const NEW_CONTACT = 'NEW_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

export function getContacts() {
  return ({ firebase, dispatch }) => {
    firebase.on('value', snapshot => {
      if (snapshot.val() && snapshot.val().contacts) {
        dispatch({
          type: GET_CONTACTS_SUCCESS,
          payload: snapshot.val(),
        });
      }
    });

    return {
      type: GET_CONTACTS,
    };
  };
}

export function newContact() {
  return {
    type: NEW_CONTACT,
  };
}

export function saveContact(id) {
  return ({ firebase, getState }) => ({
    type: SAVE_CONTACT,
    payload: new Promise(resolve => {
      const { name, bio, tel, email } = getState().contacts.get(id).toJS();
      const contact = { name, bio, tel, email, id };
      firebase.child('contacts').child(id).set(contact).then(resolve({ id }));
    }),
    id,
  });
}

export function updateContact({ id, field, value }) {
  return {
    type: UPDATE_CONTACT,
    payload: { id, field, value },
  };
}

export function editContact(id) {
  return {
    type: EDIT_CONTACT,
    payload: { id },
  };
}

export function deleteContact(id) {
  return ({ firebase }) => ({
    type: DELETE_CONTACT,
    payload: new Promise(resolve => {
      firebase.child('contacts').child(id).remove().then(resolve({ id }));
    }),
  });
}
