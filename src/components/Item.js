import React, { Component, PropTypes } from 'react';
import ValidatingInput from './ValidatingInput';
import util from '../util';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.validityChanged = this.validityChanged.bind(this);
    this.setContactFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setContactFromProps(nextProps);
  }

  onSaveClick(contact) {
    this.props.onSaveClick(contact);
    this.setState({ disabled: true });
  }

  onDeleteClick(id) {
    /* eslint-disable no-alert */
    if (confirm('Do you want to delete this contact?')) this.props.onDeleteClick(id);
    /* eslint-enable no-alert */
  }

  setContactFromProps(props) {
    const contact = props.selectedContact || {};
    this.state = {
      contact,
      disabled: !!contact.fullName,
      validatedFields: {},
    };
  }

  updateContactField(field) {
    this.setState({
      contact: Object.assign({}, this.state.contact, field),
    });
  }

  validityChanged(key, value) {
    const field = {};
    field[key] = value;
    this.setState({
      validatedFields: Object.assign({}, this.state.validatedFields, field),
    });
  }

  allValid(validatedFields) {
    return Object.keys(validatedFields).every(k => validatedFields[k]);
  }

  render() {
    const { contact: { id, fullName, bio, phone, email }, contact, disabled, validatedFields } = this.state;

    if (!this.props.selectedContact) return null;
    let mainActionButton;
    if (disabled) {
      mainActionButton = <div className="button button--edit" onClick={() => this.setState({ disabled: false })}>Edit</div>;
    } else {
      mainActionButton = <div className="button button--positive" onClick={() => { if (this.allValid(validatedFields)) this.onSaveClick(contact); }}>Save</div>;
    }
    return (
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
            <ValidatingInput
              className="tel"
              label="Phone"
              onChange={(e) => this.updateContactField({ phone: e.target.value })}
              validityChanged={this.validityChanged}
              value={phone}
              validator={util.isPhone}
              disabled={disabled}
            />
            <ValidatingInput
              className="email"
              label="E-mail"
              onChange={(e) => this.updateContactField({ email: e.target.value })}
              validityChanged={this.validityChanged}
              value={email}
              validator={util.isEmail}
              disabled={disabled}
            />
          </div>
          <div className="item__footer">
            {mainActionButton}
            &nbsp;
            <div
              className="button button--negative"
              onClick={() => this.onDeleteClick(id)}
            >Delete</div>
          </div>
        </form>
      </div>
    );
  }
}

Item.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  selectedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
