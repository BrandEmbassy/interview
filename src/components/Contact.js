import React from "react";

const Contact = ({ name, onClick }) => (
  <div className="item" onClick={onClick}>
    <div className="in">
      <div className="profile-pic" />
      {name}
    </div>
  </div>
);

export default Contact;
