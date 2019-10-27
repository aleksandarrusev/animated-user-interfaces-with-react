import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { CSSTransition } from "react-transition-group";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ open, closeModal, children }) => {
  const handleClick = e => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  const modal = (
    <CSSTransition
      in={open}
      timeout={500}
      classNames="modal"
      unmountOnExit
    >
      <div className="modal-overlay" id="modal-overlay" onClick={handleClick}>
        <div className="modal">{children}</div>
      </div>
    </CSSTransition>
  );

  return ReactDOM.createPortal(modal, modalRoot);
};

export default Modal;
