import { connect } from 'react-redux';
import { saveContact } from '../actions';
import { getSelectedContact } from '../reducers';
import Item from './Item';

const mapStateToProps = (state) => ({
  selectedContact: getSelectedContact(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSaveClick(contact) {
    dispatch(saveContact(contact));
  },
});

const Detail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);

export default Detail;
