import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../common/contacts/actions';
import Contact from './Contact.react';

class HomePage extends Component {
  static propTypes = {
    contacts: PropTypes.object.isRequired,
    saveContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired,
  }

  render() {
    const { contacts, saveContact, editContact, deleteContact, updateContact } = this.props;
    const actions = { saveContact, editContact, deleteContact, updateContact };

    return (
      <div className="detail">
        <FormattedMessage {...linksMessages.home}>
          {message =>
            <Helmet title={message} />
          }
        </FormattedMessage>
        { contacts && contacts
          .sortBy(contact => contact.id).reverse()
          .map(contact => <Contact {...contact.toJS()} {...actions} />)
        }
      </div>
    );
  }

}

export default connect(state => ({
  contacts: state.contacts,
}), actions)(HomePage);
