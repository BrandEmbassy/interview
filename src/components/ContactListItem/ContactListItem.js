import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditableTextBox from '../EditableTextBox/EditableTextBox';
import EditableTextArea from '../EditableTextArea/EditableTextArea';
import EditableList from '../EditableList/EditableList';

import { ContactType } from '../../types';

import faceIcon from './face.svg';
import saveIcon from './save.svg';
import editIcon from './edit.svg';
import deleteIcon from './delete.svg';
import './ContactListItem.css';

class ContactListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: this.props.isNew,
      editable: this.props.isNew,
      newValues: { ...this.props.contact },
    };
  }

  render() {
    const bodyClassNames = ['ContactListItem__body'];

    if (this.state.expanded) bodyClassNames.push('ContactListItem__body_expanded');
    if (this.state.editable) bodyClassNames.push('ContactListItem__body_editable');

    const headerTemplate = (text, attrs) =>
      <h2 {...attrs} className="ContactListItem__header">{text}</h2>;

    const { contact, prevContact } = this.props;

    const header = () => {
      if (this.props.isNew) {
        return headerTemplate('New Contact');
      } else {
        const curInitial = contact.lastName[0].toUpperCase();
        const prevInitial = prevContact && prevContact.lastName[0].toUpperCase();

        if (curInitial !== prevInitial) {
          return headerTemplate(curInitial, { id: `ContactListItem__header-${curInitial}` });
        }
      }
    };

    const actions = () => {
      return (
        <div className="ContactListItem__actions">
          {this.state.editable ?
            (
              <span>
                <button
                  className="Contact__button Contact__button_icon Contact__save-button"
                  disabled={this.props.isReadOnly || !this.state.newValues.firstName || !this.state.newValues.lastName}
                  onClick={this.onSaveClick}>
                  <img alt="Save contact" src={saveIcon} />
                </button> <a
                  className="Contact__cancel-button"
                  href=""
                  onClick={this.onCancelSaveClick}
                >Cancel</a>
              </span>
            ) : (
              <span>
                <button
                  className="Contact__button Contact__button_icon"
                  disabled={this.props.isReadOnly}
                  onClick={this.onEditClick}>
                  <img alt="Edit contact" src={editIcon} />
                </button>
                <button
                  className="Contact__button Contact__button_icon Contact__button_danger"
                  disabled={this.props.isReadOnly}
                  onClick={this.onDeleteClick}>
                  <img alt="Delete contact" src={deleteIcon} />
                </button>
                {this.state.expanded &&
                  <a
                    href=""
                    onClick={this.onCloseClick}>Close</a>
                }
              </span>
            )
          }
        </div>
      );
    }

    return (
      <div className="ContactListItem">

        {header()}

        <div
          className={bodyClassNames.join(' ')}
          onClick={this.onBodyClick}
        >
          <div className="ContactListItem__name">
            <img alt={contact.lastName + ', ' + contact.firstName} src={faceIcon} />

            <EditableTextBox
              defaultValue={contact.lastName}
              required
              autoFocus
              placeholder="Last name"
              editable={this.state.editable}
              onChange={this.setContactValue('lastName')}
            />, <EditableTextBox
              defaultValue={contact.firstName}
              required
              placeholder="First name"
              editable={this.state.editable}
              onChange={this.setContactValue('firstName')}
            />
          </div>

          <div className="ContactListItem__details">

            <fieldset>
              <legend>Bio</legend>
              <EditableTextArea
                defaultValue={contact.bio}
                placeholder="Don't be shy, write something about you"
                editable={this.state.editable}
                onChange={this.setContactValue('bio')}
              />
            </fieldset>

            <fieldset>
              <legend>Phones</legend>
              <EditableList
                items={contact.phones}
                itemFields={{ header: 'type', data: 'number' }}
                placeholders={{ header: 'Type', data: 'Number' }}
                editable={this.state.editable}
                onChange={this.setContactValue('phones')}
              />
            </fieldset>

            <fieldset>
              <legend>Emails</legend>
              <EditableList
                items={contact.emails}
                itemFields={{ header: 'type', data: 'address' }}
                placeholders={{ header: 'Type', data: 'Email' }}
                editable={this.state.editable}
                onChange={this.setContactValue('emails')}
              />
            </fieldset>

          </div>

          {actions()}

        </div>
      </div >
    );
  }

  setContactValue = (field) => (newValue) => {
    this.setState((prevState, props) =>
      Object.assign(prevState.newValues, { [field]: newValue }));
  }

  onBodyClick = (event) => {
    if (this.state.editable) return;

    this.setState((prevState) => ({
      expanded: !prevState.expanded
    }));
  }

  onEditClick = (event) => {
    event.stopPropagation();

    this.setState((prevState) => ({
      expanded: true,
      editable: !prevState.editable
    }));
  }

  onDeleteClick = (event) => {
    event.stopPropagation();

    this.setState({
      expanded: false
    });

    this.props.handleDelete(this.props.contact);
  }

  onCloseClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState({
      expanded: false,
      editable: false
    });
  }

  onSaveClick = (event) => {
    event.preventDefault();

    if (this.props.isNew) {
      this.props.handleCreate(this.state.newValues);
    } else {
      this.props.handleUpdate(this.state.newValues, this.props.contact);
    }

    this.setState({
      editable: false
    });
  }

  onCancelSaveClick = (event) => {
    event.preventDefault();

    if (this.props.isNew) {
      this.props.handleCreate(null);
    }

    this.setState((prevState) => ({
      editable: false
    }));
  }
};

ContactListItem.propTypes = {
  contact: ContactType,
  prevContact: ContactType,
  isReadOnly: PropTypes.bool,
  isNew: PropTypes.bool,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
  handleCreate: PropTypes.func,
};

ContactListItem.defaultProps = {
  contact: {
    id: '',
    firstName: '',
    lastName: '',
  },
  isReadOnly: false,
  isNew: false,
};

export default ContactListItem;