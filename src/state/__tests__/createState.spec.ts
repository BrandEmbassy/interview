import * as Rx from 'rxjs/Rx';
import createState, { initialState } from '../createState';
import { State, Reducer$ } from '../types';

it('createState creates reactive state', done => {
  const action$ = new Rx.Subject();
  const testReducer$: Reducer$ = Rx.Observable.merge(
    action$.map((payload: number) => (state: State): State => ({
      ...state,
      filter: state.filter + payload,
    }))
  );

  const state$ = createState(testReducer$);

  state$.toArray().subscribe((res: {}) => {
    expect(res).toEqual([
      { ...initialState, filter: 0 },
      { ...initialState, filter: 1 },
      { ...initialState, filter: 3 },
      { ...initialState, filter: 13 },
    ]);
  },
  undefined,
  () => done());

  action$.next(1);
  action$.next(2);
  action$.next(10);

  action$.complete();
});
