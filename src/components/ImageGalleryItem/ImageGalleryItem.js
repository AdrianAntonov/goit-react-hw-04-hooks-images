import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

export class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    picture: PropTypes.node.isRequired,
    modalPicture: PropTypes.node.isRequired,
  };

  toglleModal = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };

  handleModal = e => {
    if (this.props.id === +e.target.id) {
      this.toglleModal();
    }
  };

  render() {
    const { modal } = this.state;
    const { id, modalPicture, picture } = this.props;

    return (
      <li className="ImageGalleryItem" key={id}>
        {modal && (
          <Modal onClose={this.toglleModal}>
            <img
              onClick={this.handleModal}
              id={id}
              src={modalPicture}
              alt={id}
              className="ImageGalleryItem-image"
            />
          </Modal>
        )}
        <img
          onClick={this.handleModal}
          id={id}
          src={picture}
          alt={id}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
