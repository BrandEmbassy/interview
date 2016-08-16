export const GET_CONTACTS = 'GET_CONTACTS';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';

export function getContacts() {
  return ({ firebase }) => ({
    type: GET_CONTACTS,
    payload: new Promise((resolve, reject) => {
      console.log(firebase);
    })
  })
}
