import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal/Modal";
import Detail from "./Detail";
import { closeModal } from "../actions/detailModal";

const DetailModal = ({ visible, editable, contactId, onClose }) => {
  return (
    <Modal show={visible} handleClose={onClose}>
      <Detail editable={editable} contact={contactId} />
    </Modal>
  );
};

const mapStateToProps = state => ({
  visible: state.modal.visible,
  editable: state.modal.editable,
  contactId: state.modal.contactId
});

const mapDispatchToProps = {
  onClose: closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailModal);
