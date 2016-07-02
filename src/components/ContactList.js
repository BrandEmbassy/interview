import { connect } from 'react-redux';
import { selectContact, newContact } from '../actions';
import { getSelectedContact } from '../reducers';
import List from './List';

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  selectedContact: getSelectedContact(state),
});

const mapDispatchToProps = (dispatch) => ({
  onContactClick(id) {
    dispatch(selectContact(id));
  },
  onNewContactClick() {
    dispatch(newContact());
  },
});

const ContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ContactList;
