import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Main extends Component {
  static propTypes = {
    content: PropTypes.string,
    random: PropTypes.number,
  };

  click = () => console.log('Main!');

  click2 = () => console.log('Random!');

  render() {
    return (
      <Fragment>
        <h2 onClick={this.click}>{this.props.content}</h2>
        <h2 onClick={this.click2}>{this.props.random}</h2>
      </Fragment>
    );
  }
}
