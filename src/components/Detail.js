import React, { Component } from "react";
import { connect } from "react-redux";

import { editContactModal } from "../actions/detailModal";

class Detail extends Component {
  constructor(props) {
    super(props);
    const { name, bio, phone, email } = this.props.modal;
    this.state = {
      name,
      bio,
      phone,
      email
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { name, bio, phone, email } = nextProps.modal;
    this.setState(
      {
        name,
        bio,
        phone,
        email
      },
      () => this.forceUpdate()
    );
  }

  render() {
    const editable = this.props.editable;
    const editContactModal = this.props.editContactModal;
    const onClose = this.props.onClose;
    const { name, bio, phone, email } = this.state;

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
            </div>
          </div>

          {editable ? (
            <div className="item__footer">
              <div className="button button--positive">Save</div>
              <div className="button button--negative" onClick={onClose}>
                Cancel
              </div>
            </div>
          ) : (
            <div className="item__footer">
              <div
                className="button"
                onClick={() => editContactModal(this.state.contact)}
              >
                Edit
              </div>
              <div className="button button--negative">Delete</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  modal: state.modal
});

const mapDispatchToProps = {
  editContactModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
