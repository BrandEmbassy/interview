import { connect } from 'react-redux';
import { selectContact } from '../actions';
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
});

const ContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ContactList;
