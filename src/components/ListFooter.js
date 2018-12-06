import React from "react";

const ListFooter = ({ onAddNewContactClicked }) => (
  <div className="list__footer">
    <div className="add-bttn" onClick={onAddNewContactClicked}>
      <span className="in">Add new contact</span>
    </div>
  </div>
);

export default ListFooter;
