import * as React from 'react';
import { changeSearchVal } from '../state';

interface Props {
  searchVal: string;
}

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  changeSearchVal(e.target.value);
};

const Search: React.SFC<Props> = ({ searchVal }) => {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        name="search"
        value={searchVal}
        placeholder="Search ..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
