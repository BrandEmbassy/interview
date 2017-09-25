
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hashHistory as history } from 'react-router';
import FormInput from '../../components/contact/FormInput';
import { labels, placeHolders, validateInput } from '../../utils/formUtils';
import * as contactActions from '../../actions/contactActions';
import utils from '../../utils/util';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      edit: !this.props.contact || !this.props.contact.id,
      contact: this.props.contact,
      originalContact: { ...this.props.contact },
      errors: {},
    });
    // stupid create react app limitations
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.validate = this.validate.bind(this);

    this.validationFunctions = {
      email: utils.isEmail,
      phone: utils.isPhone,
      bio: utils.isTextValid,
      name: utils.isTextValid,
    };
  }

  handleEdit() {
    this.validate();
    this.setState({ edit: true });
  }

  handleCancelEdit() {
    this.setState({
      edit: !this.props.contact || !this.props.contact.id,
      contact: { ...this.state.originalContact },
    });
  }

  handleSave() {
    if (this.haveAnyErrors(this.validate())) {
      return;
    }
    if (this.state.contact.id) {
      this.props.editContact(this.state.contact);
    } else {
      this.props.saveContact(this.state.contact);
    }
    this.setState({ edit: false });
    this.goBack();
  }

  handleDelete() {
    this.props.deleteContact(this.state.contact.id);
    this.goBack();
  }

  haveAnyErrors(errors):Boolean {
    return errors && Object.keys(errors).length > 0;
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    let errors = this.state.errors;
    if (this.validationFunctions[name]) {
      errors = validateInput(name, value, this.validationFunctions[name], this.state.errors);
    }
    this.setState({ contact: { ...this.state.contact, [name]: value }, errors });
  }

  validate():any {
    let errors = this.state.errors;
    Object.keys(this.validationFunctions).forEach((name) => {
      errors = validateInput(
        name, this.state.contact[name], this.validationFunctions[name], errors);
    });
    this.setState({ errors });
    return errors;
  }

  goBack() {
    history.push('/');
  }

  render() {
    const { edit, contact, errors } = this.state;
    const haveErrors = this.haveAnyErrors(errors);
    return (
      <div className="detail">
        <div className="item">
          <div className="item__header">
            <div className="profile-pic" />
            <FormInput
              edit={edit}
              value={contact.name}
              name="name"
              label={labels.name}
              placeHolder={placeHolders.fullName}
              classWrapperName="name"
              className="name"
              onChange={this.handleInput}
              errors={edit && errors}
              errorMsg="Invalid Name"
            />
          </div>
          <div className="item__content">
            <FormInput
              edit={edit}
              value={contact.bio}
              name="bio"
              label={labels.bio}
              placeHolder={placeHolders.bio}
              classWrapperName="bio"
              className="bio"
              onChange={this.handleInput}
              errors={edit && errors}
              errorMsg="Invalid Text"
              type="textarea"
            />
            <FormInput
              edit={edit}
              value={contact.phone}
              name="phone"
              label={labels.phone}
              placeHolder={placeHolders.phone}
              classWrapperName="tel"
              className="tel"
              onChange={this.handleInput}
              errors={edit && errors}
              errorMsg="Invalid Phone"
            />
            <FormInput
              edit={edit}
              value={contact.email}
              name="email"
              label={labels.email}
              placeHolder={placeHolders.email}
              classWrapperName="tel"
              className="email"
              onChange={this.handleInput}
              errors={edit && errors}
              errorMsg="Invalid E-mail"
            />
          </div>
          <div className="item__footer">
            {edit && <div role="button" className="button button--positive" onClick={!haveErrors && this.handleSave} disabled={haveErrors}>Save</div>}
            {!edit && <div role="button" className="button" onClick={this.handleEdit}>Edit</div>}
            {edit && <div role="button" className="button" onClick={this.handleCancelEdit}>Cancel</div>}
            {!edit && <div role="button" className="button button--negative" onClick={this.handleDelete}>Delete</div>}
            <div style={{ float: 'right' }} role="button" className="button button--negative" onClick={this.goBack}>Back</div>
          </div>
        </div>
      </div>
    );
  }
}

const { saveContact, editContact, deleteContact } = contactActions;

export default connect(
  store => ({ contact: store.contactsModel.editingContact }),
  { saveContact, editContact, deleteContact },
)(ContactForm);

ContactForm.propTypes = {
  contact: PropTypes.object,
  saveContact: PropTypes.func,
  deleteContact: PropTypes.func,
  editContact: PropTypes.func,
};
