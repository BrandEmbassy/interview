import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function ContactItem(props) {
  const { name } = props.contact;
  const { onClick, active } = props;
  return (
    <div onClick={onClick} className={classNames('item', { 'item--active': active })}>
      <div className="in">
        <div className="profile-pic" />
        {name}
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
