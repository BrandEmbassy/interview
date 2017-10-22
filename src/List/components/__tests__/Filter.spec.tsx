import * as React from 'react';
import Filter from '../Filter';
import render from '../../../test/render';
import { FILTER } from '../../filters';

Object.keys(FILTER)
  .map(fKey => ({ activeFilter: FILTER[fKey] }))
  .forEach(props => {
    it(`should render Filter - ${JSON.stringify(props, null, 2)}`, () => {
      expect(render(<Filter {...props} />)).toMatchSnapshot();
    });
  });
