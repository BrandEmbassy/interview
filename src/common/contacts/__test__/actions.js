import * as actions from '../actions';
import test from 'ava';

test('updateContact will update contact', t => {
  const contact = {
    id: 1,
    field: 'name',
    value: 'John Doe'
  };

  const action = actions.updateContact(contact);

  t.deepEqual(action, {
    type: actions.UPDATE_CONTACT,
    payload: {
      id: contact.id,
      field: contact.field,
      value: contact.value
    },
  });
});
