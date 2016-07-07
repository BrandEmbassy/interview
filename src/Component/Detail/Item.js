import React from 'react'

export default class DetailItem extends React.Component {
  render() {
    const { fullName, bio, phone, email, isEdited } = this.props

    return (
      <div className="item">
        <div className="item__header">
          <div className="profile-pic"></div>
          {/*<div className="name">Patrik Vrbovsky</div>*/}
          <input className="name" type="text" name="" value={fullName} placeholder="Full Name" disabled={!isEdited} />
        </div>
        <div className="item__content">
          <div className="input-wrap">
            <label htmlFor="bio">Bio</label>
            {/*<div className="bio">Some bio</div>*/}
            <textarea name="bio" className="bio" placeholder="Decsription" value={bio} disabled={!isEdited} />
          </div>
          <div className="input-wrap">
            <label htmlFor="tel">Phone</label>
            {/*<div className="tel">+420 777 888 999</div>*/}
            <input type="text" name="tel" className="tel" value={phone} placeholder="+XXX XXX XXX XXX" disabled={!isEdited} />
          </div>
          <div className="input-wrap">
            <label htmlFor="email">E-mail</label>
            {/*<div className="email">some@email.com</div>*/}
            <input type="text" className="email" value={email} placeholder="E-mail" disabled={!isEdited} />
          </div>
        </div>
        <div className="item__footer">
          {
            isEdited ? <div className="button button--positive">Save</div> : <div className="button">Edit</div>
          }
          <div className="button button--negative">Delete</div>
        </div>
      </div>
    )
  }
}
