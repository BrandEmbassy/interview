import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { labels, placeHolders, validateInput } from '../../utils/formUtils';
import * as contactActions from '../../actions/contactActions';
import utils from '../../utils/util';


const { saveContact, editContact, deleteContact } = contactActions;


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ edit: this.props.edit, contact: this.props.contact, errors: {} });
    // stupid create react app limitations
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  handleCancelEdit() {
    this.setState({ edit: false });
  }

  handleSave() {
    debugger;
    if (this.props.contact.id) {
      this.props.editContact(this.props.contact);
    } else {
      this.props.saveContact(this.props.contact);
    }
  }

  handleDelete() {
    this.props.deleteContact(this.props.contact.id);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    let errors = this.state.errors;
    if (name === 'email') {
      errors = validateInput(value, name, utils.isEmail, this.state.errors);
    }
    this.setState({ contact: { ...this.state.contact, [name]: value }, errors });
  }

  render() {
    debugger;
    const { edit, contact } = this.state;

    return (
      <div className="detail">
        <div className="item">
          <div className="item__header">
            {!edit && <div className="profile-pic" />}
            <div className="name">{contact.name}</div>
            {edit && <input
              className="name"
              type="text"
              name="name"
              onChange={this.handleInput}
              value={contact.name}
              placeholder={placeHolders.fullName}
              disabled={!edit}
            />}
          </div>
          <div className="item__content">
            <div className="input-wrap">
              {!edit && <div className="bio">{contact.bio}</div>}
              <label htmlFor="bio">{labels.bio}</label>
              {edit && <textarea
                name="bio"
                className="bio"
                onChange={this.handleInput}
                placeholder={placeHolders.description}
                value={contact.bio}
                disabled={!edit}
              />}
            </div>
            <div className="input-wrap">
              {!edit && <div className="tel">{contact.phone}</div>}
              <label htmlFor="phone">{labels.phone}</label>
              {edit && <input
                type="text"
                name="phone"
                className="tel"
                onChange={this.handleInput}
                value={contact.phone}
                placeholder={placeHolders.phone}
                disabled={!edit}
              />}
            </div>
            <div className="input-wrap">
              {!edit && <div className="tel">{contact.email}</div>}
              <label htmlFor="email">{labels.email}</label>
              {edit && <input
                type="text"
                className="email"
                name="email"
                onChange={this.handleInput}
                value={contact.email}
                placeholder={placeHolders.email}
                disabled={!edit}
              />}
            </div>
          </div>
          <div className="item__footer">
            {edit && <div role="button" className="button button--positive" onClick={this.handleSave}>Save</div>}
            {!edit && <div role="button" className="button" onClick={this.handleEdit}>Edit</div>}
            {edit && <div role="button" className="button" onClick={this.handleCancelEdit}>Cancel</div>}
            {!edit && <div role="button" className="button button--negative" onClick={this.handleDelete}>Delete</div>}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { saveContact, editContact, deleteContact })(ContactForm);
ContactForm.propTypes = {
  edit: PropTypes.bool,
  contact: PropTypes.object,
  saveContact: PropTypes.func,
  deleteContact: PropTypes.func,
  editContact: PropTypes.func,
};
