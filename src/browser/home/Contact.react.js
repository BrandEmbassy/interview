import React from 'react';
import Component from 'react-pure-render/component';
import validate from 'validate.js';
import lpn from 'google-libphonenumber';

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const phoneErrorText = 'is invalid';

validate.validators.phone = value => {
  if (!value) {
    return;
  }

  try {
    const number = phoneUtil.parseAndKeepRawInput(value, 'CZ');
    const isPossible = phoneUtil.isPossibleNumber(number);

    if (isPossible && phoneUtil.isValidNumber(number)) {
      return;
    }

    return phoneErrorText;
  } catch(e) {
    return phoneErrorText;
  }
}

const Field = props => {
  const { className, editing, EditElement = 'input', value = '', onChange, error } = props;

  if (editing) {
    return (
      <div>
        { error && <span className="error-msg">{error}</span> }
        <EditElement className={`${className} ${error && 'error'}`} value={value} onChange={event => onChange({ value: event.target.value, field: className })} />
      </div>
    );
  } else {
    return <p className={className}>{value}</p>;
  }
};

export default class Contact extends Component {
  onChange(value) {
    const { updateContact, id } = this.props;

    if (value.value != this.props[value.field].value) {
      updateContact({
        id,
        ...value
      })
    }
  }

  render() {
    const { id, name, bio, tel, email, editing, saving, saveContact, editContact, deleteContact } = this.props;

    const errors = validate({ name, tel, email }, {
      name: {
        presence: true,
      },
      email: {
        email: true,
      },
      tel: {
        phone: true,
      }
    });

    return (
      <div className={`item ${saving && 'saving'}`}>
        <div className="item__header">
          <div className="profile-pic"><img src={`https://api.adorable.io/avatars/100/${name}.png`} alt="Avatar"/></div>
          <Field className="name" editing={editing} value={name} onChange={value => this.onChange(value)} error={errors && errors.name} />
        </div>
        <div className="item__content">
          <div className="input-wrap">
            <label htmlFor="bio">Bio</label>
            <Field className="bio" editing={editing} value={bio} onChange={value => this.onChange(value)} />
          </div>
          <div className="input-wrap">
            <label htmlFor="tel">Phone</label>
            <Field className="tel" editing={editing} value={tel} onChange={value => this.onChange(value)} error={errors && errors.tel} />
          </div>
          <div className="input-wrap">
            <label htmlFor="email">E-mail</label>
            <Field className="email" editing={editing} value={email} onChange={value => this.onChange(value)} error={errors && errors.email} />
          </div>
        </div>
        <div className="item__footer">
          { editing ?
            <div className="button button--positive" disabled={!!errors} onClick={() => saveContact(id)}>Save</div>
          :
            <div className="button" onClick={() => editContact(id)}>Edit</div>
          }
          <div className="button button--negative" onClick={() => deleteContact(id)}>Delete</div>
        </div>
      </div>
    );
  }
}
