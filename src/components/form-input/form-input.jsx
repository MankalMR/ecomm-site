import React from "react";
import PropTypes from 'prop-types';

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherInputProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherInputProps} />
    {label ? (
      <label
        className={`${
          otherInputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
    handleChange: PropTypes.func,
    label: PropTypes.string,
    otherInputProps: PropTypes.object
}

export default FormInput;
