import * as React from 'react';
import Search from '../Search';
import render from '../../../test/render';

[{ searchVal: '' }, { searchVal: 'aaaa' }].forEach(props => {
  it(`should render Search - ${JSON.stringify(props, null, 2)}`, () => {
    expect(render(<Search {...props} />)).toMatchSnapshot();
  });
});
