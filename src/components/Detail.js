import React from 'react';
import { connect } from 'react-redux';
import { saveContact, deleteContact } from '../actions';
import { getSelectedContact } from '../reducers';
import Item from './Item';

const mapStateToProps = (state) => ({
  selectedContact: getSelectedContact(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSaveClick(contact) {
    dispatch(saveContact(contact));
  },
  onDeleteClick(contact) {
    dispatch(deleteContact(contact));
  },
});

const ItemWrapper = (props) => (
  <div className="detail">
    <Item {...props} />
  </div>
);

const Detail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemWrapper);

export default Detail;
