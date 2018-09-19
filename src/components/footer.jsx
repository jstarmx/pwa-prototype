import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  static propTypes = {
    content: PropTypes.string,
  };

  click = () => console.log('Footer!');

  render() {
    return <h2 onClick={this.click}>{this.props.content}</h2>;
  }
}
