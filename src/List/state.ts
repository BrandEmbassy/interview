import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishBehavior';
import { set, lensProp } from 'ramda';
import { Reducer, Contact, State as GlobalState } from '../state/types';
import { FILTER, Filters, FilterType, FilterSort } from './filters';
import dummyContacts from '../dummyContacts';

export type State = {
  contacts: Contact[];
  filter: FILTER;
  searchVal: string;
};
export const initialState: State = {
  contacts: dummyContacts,
  filter: FILTER.All,
  searchVal: '',
};

const actions: Observable<Reducer>[] = [];

const action = <P>(reducer: (payload: P) => Reducer) => {
  const subject = new Subject();
  actions.push(subject.map(reducer));

  return (payload: P) => subject.next(payload);
};

export type SwitchFilter = (filter: FILTER) => void;
export const switchFilter: SwitchFilter = action<
  FILTER
>((filter: FILTER) => (state: GlobalState): GlobalState => set(lensProp('filter'), filter, state));

export type ChangeSearchVal = (val: string) => void;
export const changeSearchVal: ChangeSearchVal = action<
  string
>((val: string) => (state: GlobalState): GlobalState => set(lensProp('searchVal'), val, state));

export const reducer$: Observable<Reducer> = Observable.of(() => initialState).merge(...actions);

export interface CompState {
  contacts: Contact[];
  activeFilter: FILTER;
  searchVal: string;
}

export const select = (state: GlobalState): CompState => {
  const filterObj: FilterType | undefined = Filters.find(
    (filter: FilterType) => filter.filter === state.filter
  );
  const sortFunc: FilterSort = (filterObj as FilterType).sort;

  const searchVal = state.searchVal.trim();
  const filteredContacts = searchVal
    ? state.contacts.filter((contact: Contact) => contact.name.includes(searchVal))
    : state.contacts;

  return {
    contacts: sortFunc(filteredContacts),
    activeFilter: state.filter,
    searchVal: state.searchVal,
  };
};
