import React, { Component, PropTypes } from 'react';

export default class Item extends Component {

  componentWillReceiveProps(nextProps) {
    const { fullName, bio, phone, email } = nextProps.selectedContact || {};
    this.state = {
      fullName,
      bio,
      phone,
      email,
      disabled: true,
    };
  }

  render() {
    if (!this.props.selectedContact) return null;
    let mainActionButton;
    if (this.state.disabled) {
      mainActionButton = <div className="button button--edit" onClick={() => this.setState({ disabled: false })}>Edit</div>;
    } else {
      mainActionButton = <div className="button button--positive">Save</div>;
    }
    return (
      <div className="detail">
        <div className="item">
          <form>
            <div className="item__header">
              <div className="profile-pic"></div>
              <input className="name" value={this.state.fullName} onChange={(e) => this.setState({ fullName: e.target.value })} placeholder="Full Name" disabled={this.state.disabled} />
            </div>
            <div className="item__content">
              <div className="input-wrap">
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" className="bio" value={this.state.bio} onChange={(e) => this.setState({ bio: e.target.value })} placeholder="Decsription" disabled={this.state.disabled}></textarea>
              </div>
              <div className="input-wrap">
                <label htmlFor="tel">Phone</label>
                <input type="text" name="tel" className="tel" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} placeholder="+XXX XXX XXX XXX" disabled={this.state.disabled} />
              </div>
              <div className="input-wrap">
                <label htmlFor="email">E-mail</label>
                <input type="text" className="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="E-mail" disabled={this.state.disabled} />
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
  selectedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
