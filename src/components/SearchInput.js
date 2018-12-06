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
        // value={input}
        onChange={() => {
          // TODO: there should be a dispatch that triggers filter
        }}
        placeholder="Search ..."
      />
    </div>
  );
};

export default SearchInput;
