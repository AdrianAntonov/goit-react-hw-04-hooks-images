import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    data: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.data();
  };
  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        Load More
      </button>
    );
  }
}

export default Button;
