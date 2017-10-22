import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';
import { State, Reducer, Reducer$, State$ } from './types';
import { initialState as listInitialState } from '../List/state';
import { initialState as detailInitialState } from '../Detail/state';

export const initialState = {
  ...listInitialState,
  ...detailInitialState,
};

export default function createState(reducer$: Reducer$): State$ {
  return (
    reducer$
      .scan((state: State, reducer: Reducer): State => {
        // console.debug('state change - prev =>', state);

        return {
          ...state,
          ...reducer(state),
        };
      }, initialState)
      // .do(s => console.debug('state change - next =>', s))
      .publishBehavior(initialState)
      .refCount()
  );
}
