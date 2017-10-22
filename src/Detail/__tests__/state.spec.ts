import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';
import { editContact, saveContact, deleteContact, reducer$, select } from '../state';
import { initialState } from '../../state/createState';

it('should edit contact', done => {
  const contact = initialState.contacts.find(({ id }) => id === 2);
  reducer$
    .skip(1)
    .take(1)
    .subscribe(reduce => {
      expect(reduce(initialState)).toEqual({
        ...initialState,
        editMode: true,
        values: contact,
      });
      done();
    });
  editContact(2);
});

it('should save contact', done => {
  const contact = initialState.contacts.find(({ id }) => id === 2);
  const contactIndex = initialState.contacts.findIndex(({ id }) => id === 2);
  const state = {
    ...initialState,
    editMode: true,
    values: { name: 'Test', email: '', bio: '', tel: '' },
  };

  reducer$
    .skip(1)
    .take(1)
    .subscribe(reduce => {
      expect(reduce(state)).toEqual({
        ...state,
        editMode: false,
        contacts: [
          ...state.contacts.slice(0, contactIndex),
          { ...contact, ...state.values },
          ...state.contacts.slice(contactIndex + 1),
        ],
      });
      done();
    });
  saveContact(2);
});

it('should delete contact', done => {
  reducer$
    .skip(1)
    .take(1)
    .subscribe(reduce => {
      expect(reduce(initialState)).toEqual({
        ...initialState,
        editMode: false,
        contacts: initialState.contacts.filter(c => c.id !== 2),
      });
      done();
    });
  deleteContact({ id: 2, replace: () => {} });
});

it('should select state', () => {
  expect(select(initialState, { id: '1' })).toEqual({
    editMode: false,
    values: initialState.contacts.find(({ id }) => id === 1),
  });

  expect(select(initialState, { id: '5' })).toEqual({
    editMode: false,
    values: initialState.values,
  });

  expect(select({ ...initialState, editMode: true }, { id: '3' })).toEqual({
    editMode: true,
    values: initialState.values,
  });
});
