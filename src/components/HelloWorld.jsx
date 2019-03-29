import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({ content }) => <Fragment>{content}</Fragment>;

HelloWorld.propTypes = {
  content: PropTypes.string,
};

HelloWorld.defaultProps = {
  content: 'Hello, World!',
};

export default HelloWorld;
