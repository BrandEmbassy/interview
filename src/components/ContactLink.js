import React, { PropTypes } from 'react';

const ContactLink = ({ onClick, fullName }) => (
  <div className="item" onClick={onClick}>
    <div className="in">
      <div className="profile-pic"></div>
      {fullName}
    </div>
  </div>
);

ContactLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default ContactLink;
