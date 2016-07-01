import { connect } from 'react-redux';
import { getSelectedContact } from '../reducers';
import Item from './Item';

const mapStateToProps = (state) => ({
  selectedContact: getSelectedContact(state),
});

const Detail = connect(
  mapStateToProps
)(Item);

export default Detail;
