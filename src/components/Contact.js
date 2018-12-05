import React from "react";

const Contact = ({ name }) => (
  <div className="item">
    <div className="in">
      <div className="profile-pic" />
      {name}
    </div>
  </div>
);

export default Contact;
