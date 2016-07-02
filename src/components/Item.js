import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.setContactFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setContactFromProps(nextProps);
  }

  onSaveClick(contact) {
    this.props.onSaveClick(contact);
    this.setState({ disabled: true });
  }

  setContactFromProps(props) {
    this.state = {
      contact: props.selectedContact || {},
      disabled: true,
    };
  }

  updateContactField(field) {
    this.setState({
      contact: Object.assign({}, this.state.contact, field),
    });
  }

  render() {
    const { contact: { fullName, bio, phone, email }, contact, disabled } = this.state;

    if (!this.props.selectedContact) return null;
    let mainActionButton;
    if (disabled) {
      mainActionButton = <div className="button button--edit" onClick={() => this.setState({ disabled: false })}>Edit</div>;
    } else {
      mainActionButton = <div className="button button--positive" onClick={() => this.onSaveClick(contact)}>Save</div>;
    }
    return (
      <div className="detail">
        <div className="item">
          <form>
            <div className="item__header">
              <div className="profile-pic"></div>
              <input className="name" value={fullName} onChange={(e) => this.updateContactField({ fullName: e.target.value })} placeholder="Full Name" disabled={disabled} />
            </div>
            <div className="item__content">
              <div className="input-wrap">
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" className="bio" value={bio} onChange={(e) => this.updateContactField({ bio: e.target.value })} placeholder="Decsription" disabled={disabled}></textarea>
              </div>
              <div className="input-wrap">
                <label htmlFor="tel">Phone</label>
                <input type="text" name="tel" className="tel" value={phone} onChange={(e) => this.updateContactField({ phone: e.target.value })} placeholder="+XXX XXX XXX XXX" disabled={disabled} />
              </div>
              <div className="input-wrap">
                <label htmlFor="email">E-mail</label>
                <input type="text" className="email" value={email} onChange={(e) => this.updateContactField({ email: e.target.value })} placeholder="E-mail" disabled={disabled} />
              </div>
            </div>
            <div className="item__footer">
              {mainActionButton}
              &nbsp;
              <div className="button button--negative">Delete</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  selectedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
