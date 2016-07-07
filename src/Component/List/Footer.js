import React from 'react'

const Footer = ({onAddContact}) => {
  return (
    <div className="list__footer">
      <div className="add-bttn" onClick={onAddContact}>
        <span className="in">Add new contact</span>
      </div>
    </div>
  )
}

export default Footer
