import React, { Component } from 'react';
import { ImagesGalleryItemStyled } from './ImagesGalleryItemStyled';
import Modal from '../../modal/Modal';
import PropTypes from 'prop-types';

class ImagesGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  isModalOpen = (e) => {
    if (e.target !== e.currentTarget) return false;
    this.setState((prev) => ({ modalIsOpen: !prev.modalIsOpen }));
  };

  render() {
    return (
      <>
        <ImagesGalleryItemStyled>
          <img
            src={this.props.item.webformatURL}
            alt={this.props.item.tags}
            className="ImageGalleryItem-image"
            onLoad={this.props.imageOnLoad}
            onClick={this.isModalOpen}
          />
        </ImagesGalleryItemStyled>
        {this.state.modalIsOpen ? (
          <Modal
            image={this.props.item.largeImageURL}
            alt={this.props.item.tags}
            isModalOpen={this.isModalOpen}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

export default ImagesGalleryItem;

ImagesGalleryItem.propTypes = {
  item: PropTypes.object,
  imageOnLoad: PropTypes.func,
};
