import { Observable } from 'rxjs/Observable';
import { State as ListState } from '../List/state';
import { State as DetailState } from '../Detail/state';

export type State = {} & ListState & DetailState;

export interface Reducer {
  (state: State): State;
}

export type State$ = Observable<State>;
export type Reducer$ = Observable<Reducer>;

export interface Contact {
  id: number;
  name: string;
  bio: string;
  tel: string;
  email: string;
}
