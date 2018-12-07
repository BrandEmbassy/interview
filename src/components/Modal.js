import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <button onClick={handleClose}>Close</button>
      <section className="modal__main">{children}</section>
    </div>
  );
};

export default Modal;
