import React, { Component } from 'react';
import { ModalStyled } from './ModalStyled';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    return (
      <ModalStyled onClick={this.props.isModalOpen}>
        <div className="Modal">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
      </ModalStyled>
    );
  }
}

export default Modal;

Modal.propTypes = {
  isModalOpen: PropTypes.func,
  image: PropTypes.string,
  alt: PropTypes.string,
};
