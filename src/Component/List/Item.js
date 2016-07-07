import React, { PropTypes } from 'react'
import cn from 'classnames'

const Item = ({ fullName, active, onSelect }) => {
  const className = cn('item', {'item--active' : active})

  return (
    <div className={className} onClick={onSelect}>
      <div className="in">
        <div className="profile-pic"></div>
        {fullName}
      </div>
    </div>
  )
}

Item.propTypes = {
  fullName:   PropTypes.string.isRequired,
  active: PropTypes.bool
}

export default Item
