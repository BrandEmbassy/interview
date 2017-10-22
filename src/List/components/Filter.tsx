import * as React from 'react';
import * as cx from 'classnames';
import { FILTER, Filters, FilterType } from '../filters';
import { switchFilter } from '../state';

interface Props {
  activeFilter: FILTER;
}

const Filter: React.SFC<Props> = ({ activeFilter }) => {
  return (
    <div className="filter">
      {Filters.map((filter: FilterType) => (
        <div
          key={`filter-${filter.filter}`}
          className={cx('filter__item', {
            'filter__item--active': activeFilter === filter.filter,
          })}
          onClick={() => switchFilter(filter.filter)}
        >
          {filter.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;
