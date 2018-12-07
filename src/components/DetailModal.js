import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import Detail from "./Detail";
import { closeModal } from "../actions/detailModal";

const DetailModal = ({ visible, editable, contact, onClose }) => {
  return (
    <Modal show={visible} handleClose={onClose}>
      <Detail editable={editable} onClose={onClose} contact={contact} />
    </Modal>
  );
};

const mapStateToProps = state => ({
  visible: state.modal.visible,
  editable: state.modal.editable,
  contact: state.modal.contact
});

const mapDispatchToProps = {
  onClose: closeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailModal);
