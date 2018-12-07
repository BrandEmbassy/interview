import React from "react";

const SearchInput = () => {
  let input;

  return (
    <div className="search">
      <input
        ref={node => {
          input = node;
        }}
        className="input"
        type="text"
        name=""
        placeholder="Search ..."
      />
    </div>
  );
};

export default SearchInput;
