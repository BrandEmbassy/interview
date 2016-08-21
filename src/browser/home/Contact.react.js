import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import validate from 'validate.js';
import lpn from 'google-libphonenumber';
import confirm from '../app/sweetalert';

const phoneUtil = lpn.PhoneNumberUtil.getInstance();

const phoneErrorText = 'is invalid';

validate.validators.phone = value => {
  if (!value) {
    return undefined;
  }

  try {
    const number = phoneUtil.parseAndKeepRawInput(value, 'CZ');
    const isPossible = phoneUtil.isPossibleNumber(number);

    if (isPossible && phoneUtil.isValidNumber(number)) {
      return undefined;
    }

    return phoneErrorText;
  } catch (e) {
    return phoneErrorText;
  }
};

const Field = ({ className, editing, EditElement = 'input', value = '', onChange, error }) => {
  if (editing) {
    return (
      <div>
        { error && <span className="error-msg">{error}</span> }
        <EditElement className={`${className} ${error && 'error'}`} value={value} onChange={event => onChange({ value: event.target.value, field: className })} />
      </div>
    );
  }
  return <p className={className}>{value}</p>;
};

Field.propTypes = {
  className: PropTypes.string,
  editing: PropTypes.bool,
  EditElement: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default class Contact extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    bio: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
    active: PropTypes.bool,
    editing: PropTypes.bool,
    saving: PropTypes.bool,
    updateContact: PropTypes.func.isRequired,
    saveContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired,
  };

  onChange(value) {
    const { updateContact, id } = this.props;

    if (value.value !== this.props[value.field].value) {
      updateContact({
        id,
        ...value,
      });
    }
  }

  render() {
    const { id, name, bio, tel, email, editing, saving, saveContact, deleteContact, editContact } = this.props;

    const errors = validate({ name, tel, email }, {
      name: {
        presence: true,
      },
      email: {
        email: true,
      },
      tel: {
        phone: true,
      },
    });

    return (
      <div className={`item ${saving && 'saving'}`}>
        <div className="item__header">
          <div className="profile-pic"><img src={`https://api.adorable.io/avatars/100/${name}.png`} alt="Avatar" /></div>
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
          <div className="button button--negative" onClick={() => confirm({}).then(() => deleteContact(id))}>Delete</div>
        </div>
      </div>
    );
  }
}
