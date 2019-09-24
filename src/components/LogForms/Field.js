// import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Component
import { TextField } from '@material-ui/core';

// Single Authentification Field
const Field = ({
  // user input field
  value,
  // dynamic handler values
  name,
  label,
  autoComplete,
  type,
  index,
  // handle change function
  handleAuthInput,
}) => (
  <TextField
    // user input field
    authinputvalue={value}
    // dynamic handler values
    name={name}
    label={label}
    autoComplete={autoComplete}
    type={type}
    index={index}
    // handle change function
    onChange={(event) => handleAuthInput(event, index)}
    // style
    variant="outlined"
    margin="normal"
    required
    fullWidth
  />
);

Field.propTypes = {
  // user input field
  value: PropTypes.string,
  // dynamic handler values
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  type: PropTypes.string,
  index: PropTypes.number.isRequired,
  // handle change function
  handleAuthInput: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
