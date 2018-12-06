import React, { Component } from "react";
import PropTypes from "prop-types";

class Detail extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    const {
      contacts,
      modal: { editable, contactId }
    } = state;
    // console.log("contacts", contacts);
    const contact = contacts.find(contact => {
      return contact.id === contactId;
    });
    // console.log("contact", contact);
    const { name, bio, phone, email } = contact || {};

    console.log("name", name);

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
              <label htmlFor="bio">Bio</label>
              <textarea
                name="bio"
                className="bio"
                placeholder="Decsription"
                value={bio}
                disabled={!editable}
              />
            </div>
            <div className="input-wrap">
              .<label htmlFor="tel">Phone</label>
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
              <label htmlFor="email">E-mail</label>
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
            </div>
          ) : (
            <div className="item__footer">
              <div
                className="button"
                onClick={() => {
                  store.dispatch({
                    type: "SHOW_DETAIL_MODAL",
                    editable: true,
                    contact: state.modal.contact
                  });
                }}
              >
                Edit
              </div>
              <div
                className="button button--negative"
                onClick={() => {
                  store.dispatch({
                    type: "DELETE_CONTACT",
                    contactId: contactId
                  });
                }}
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
Detail.contextTypes = {
  store: PropTypes.object
};

export default Detail;
