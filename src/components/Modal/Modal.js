import React from "react";
import ReactDOM from 'react-dom';
import "./Modal.css";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({open, closeModal}) => {

    const handleClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    };

    const modal = open ? <div className="modal-overlay" id="modal-overlay" onClick={handleClick}>
        <div className="modal"></div>
    </div> : null;

    return ReactDOM.createPortal(modal, modalRoot);
};

export default Modal;