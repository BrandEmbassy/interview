import * as React from 'react';
import { CompState, editContact, changeVal, saveContact, deleteContact, InputType } from '../state';

const handleInputChange = (type: InputType) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  changeVal({ type, val: e.target.value });
};

const Form = (id: string, replace: (path: string) => void) => ({
  editMode,
  values,
}: CompState): JSX.Element => (
  <div className="detail">
    <div className="item">
      <div className="item__header">
        <div className="profile-pic" />
        <input
          className="name"
          type="text"
          name="name"
          value={values.name}
          placeholder="Full Name"
          disabled={!editMode}
          onChange={handleInputChange('name')}
        />
      </div>
      <div className="item__content">
        <div className="input-wrap">
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            className="bio"
            placeholder="Decsription"
            value={values.bio}
            disabled={!editMode}
            onChange={handleInputChange('bio')}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="tel">Phone</label>
          <input
            type="text"
            name="tel"
            className="tel"
            value={values.tel}
            placeholder="+XXX XXX XXX XXX"
            disabled={!editMode}
            onChange={handleInputChange('tel')}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className="email"
            value={values.email}
            placeholder="E-mail"
            disabled={!editMode}
            onChange={handleInputChange('email')}
          />
        </div>
      </div>
      <div className="item__footer">
        {editMode ? (
          <div className="button button--positive" onClick={() => saveContact(Number(id))}>
            Save
          </div>
        ) : (
          <div className="button" onClick={() => editContact(Number(id))}>
            Edit
          </div>
        )}

        <div
          className="button button--negative"
          onClick={() => deleteContact({ id: Number(id), replace })}
        >
          Delete
        </div>
      </div>
    </div>
  </div>
);

export default Form;
