import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';
import { switchFilter, changeSearchVal, reducer$, select } from '../state';
import { FILTER } from '../filters';
import { initialState } from '../../state/createState';

it('should change filter', done => {
  reducer$
    .skip(1)
    .take(1)
    .subscribe(reduce => {
      expect(reduce(initialState)).toEqual({
        ...initialState,
        filter: FILTER.Ascending,
      });
      done();
    });
  switchFilter(FILTER.Ascending);
});

it('should change search val', done => {
  reducer$
    .skip(1)
    .take(1)
    .subscribe(reduce => {
      expect(reduce(initialState)).toEqual({
        ...initialState,
        searchVal: 'testVal',
      });
      done();
    });
  changeSearchVal('testVal');
});

it('should select state', () => {
  expect(select({ ...initialState, filter: 1 })).toEqual({
    contacts: initialState.contacts,
    searchVal: initialState.searchVal,
    activeFilter: 1,
  });

  expect(select({ ...initialState, filter: 2 })).toEqual({
    contacts: [initialState.contacts[2], initialState.contacts[1], initialState.contacts[0]],
    searchVal: initialState.searchVal,
    activeFilter: 2,
  });

  expect(select({ ...initialState, filter: 1, searchVal: 'To' })).toEqual({
    contacts: [initialState.contacts[2]],
    searchVal: 'To',
    activeFilter: 1,
  });
});
