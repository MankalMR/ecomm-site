import React from "react";
import PropTypes from 'prop-types';

import "./button.scss";

const Button = ({ children, classes,...otherProps }) => (
  <button className={`custom-button ${classes}`} {...otherProps}>
    { children }
  </button>
);

Button.propTypes = {
    children: PropTypes.string,
    classes: PropTypes.string,
    otherProps: PropTypes.object
}

export default Button;
