import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');
function Modal({ onClose, children }) {
  const handleCloseModal = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  return createPortal(
    <div className="Overlay" onClick={handleOverlayClose}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
