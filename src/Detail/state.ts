import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishBehavior';
import { set, lensPath, update, remove } from 'ramda';
import { Reducer, State as GlobalState, Contact } from '../state/types';

export type InputType = 'name' | 'bio' | 'tel' | 'email';

export type State = {
  editMode: boolean;
  values: { [K in InputType]: string };
};
export const initialState: State = {
  editMode: false,
  values: {
    name: '',
    bio: '',
    email: '',
    tel: '',
  },
};

const actions: Observable<Reducer>[] = [];

const action = <P>(reducer: (payload: P) => Reducer) => {
  const subject = new Subject();
  actions.push(subject.map(reducer));

  return (payload?: P) => subject.next(payload);
};

export type EditContact = (id: number) => void;
export const editContact: EditContact = action<
  number
>((id: number) => (state: GlobalState): GlobalState => {
  const contact: Contact | undefined = state.contacts.find((cont: Contact) => cont.id === id);

  return contact
    ? {
        ...state,
        editMode: true,
        values: contact,
      }
    : state;
});

export type ChangeVal = ({ type, val }: { type: InputType; val: string }) => void;
export const changeVal: ChangeVal = action<{
  type: InputType;
  val: string;
}>(({ type, val }) => (state: GlobalState): GlobalState =>
  set(lensPath(['values', type]), val, state)
);

export type SaveContact = (id: number) => void;
export const saveContact: SaveContact = action<
  number
>((id: number) => (state: GlobalState): GlobalState => {
  const contactIndex = state.contacts.findIndex(c => c.id === id);
  const contact = state.contacts.find(c => c.id === id);
  const newContact = { ...contact, ...state.values } as Contact;

  return {
    ...state,
    editMode: false,
    contacts: update(contactIndex, newContact, state.contacts),
  };
});

export type DeleteContact = (
  { id, replace }: { id: number; replace: (path: string) => void }
) => void;
export const deleteContact: DeleteContact = action<{
  id: number;
  replace: (path: string) => void;
}>(
  ({ id, replace }: { id: number; replace: (path: string) => void }) => (
    state: GlobalState
  ): GlobalState => {
    const contactIndex = state.contacts.findIndex(c => c.id === id);

    replace('/');

    return {
      ...state,
      editMode: false,
      contacts: remove(contactIndex, 1, state.contacts),
    };
  }
);

export const reducer$: Observable<Reducer> = Observable.of(() => initialState).merge(...actions);

export interface CompState extends State {}

export const select = (state: GlobalState, { id }: { id: string }): CompState => {
  const contact = state.contacts.find((cont: Contact) => cont.id === Number(id));

  return {
    editMode: state.editMode,
    values: !state.editMode && contact ? contact : state.values,
  };
};
