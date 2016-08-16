import * as actions from './actions';
import { Map, Record } from 'immutable';

const State = Record({
  data: Map,
  ui: Map,
});

export default function contactsReducer(state = new State, action) {
  if (!(state instanceof State)) return new State();

  switch (action.type) {


  }

  return state;
}
