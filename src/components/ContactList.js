import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onContactClick(id) {
  },
});

const ContactList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ContactList;
