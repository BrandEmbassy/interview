import React from "react";

const Detail = ({ editable, contact }) => {
  const { name, bio, phone, email } = contact;
  return (
    <div className="detail">
      <div className="item">
        <div className="item__header">
          <div className="profile-pic" />
          <input
            className="name"
            type="text"
            name="name"
            value={name}
            placeholder="Full Name"
            disabled={!editable}
          />
        </div>
        <div className="item__content">
          <div className="input-wrap">
            <label for="bio">Bio</label>
            <textarea
              name="bio"
              className="bio"
              placeholder="Decsription"
              value={bio}
              disabled={!editable}
            />
          </div>
          <div className="input-wrap">
            .<label for="tel">Phone</label>
            <input
              type="text"
              name="tel"
              className="tel"
              value={phone}
              placeholder="+XXX XXX XXX XXX"
              disabled={!editable}
            />
          </div>
          <div className="input-wrap">
            <label for="email">E-mail</label>
            <input
              type="text"
              className="email"
              value={email}
              placeholder="E-mail"
              disabled={!editable}
            />
            {
              // TODO: for email validation
              // <span className="error-msg">Invalid E-mail</span>
              //         <input
              //           type="text"
              //           className="email error"
              //           value="brand&embassy.com"
              //           placeholder="E-mail"
              //         />
            }
          </div>
        </div>

        {editable ? (
          <div className="item__footer">
            <div className="button button--positive">Save</div>
            <div className="button button--negative">Delete</div>
          </div>
        ) : (
          <div className="item__footer">
            <div className="button">Edit</div>
            <div className="button button--negative">Delete</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
