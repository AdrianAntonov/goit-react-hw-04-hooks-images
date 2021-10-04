import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

function ImageGalleryItem({ id, picture, modalPicture }) {
  const [modal, setModal] = useState(false);

  const toglleModal = () => {
    setModal(!modal);
  };

  const handleModal = e => {
    if (id === +e.target.id) {
      toglleModal();
    }
  };

  return (
    <li className="ImageGalleryItem" key={id}>
      {modal && (
        <Modal onClose={toglleModal}>
          <img
            onClick={handleModal}
            id={id}
            src={modalPicture}
            alt={id}
            className="ImageGalleryItem-image"
          />
        </Modal>
      )}
      <img
        onClick={handleModal}
        id={id}
        src={picture}
        alt={id}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.node.isRequired,
  modalPicture: PropTypes.node.isRequired,
};

export default ImageGalleryItem;
