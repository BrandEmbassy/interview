import React, { PropTypes } from 'react';

const ContactLink = ({ onClick, fullName, selected }) => (
  <div className={`item${selected ? ' item--active' : ''}`} onClick={onClick}>
    <div className="in">
      <div className="profile-pic"></div>
      {fullName}
    </div>
  </div>
);

ContactLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default ContactLink;
