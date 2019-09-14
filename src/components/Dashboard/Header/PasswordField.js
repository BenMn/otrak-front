import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

const Field = ({
  name,
  label,
  autoComplete,
  type,
  handleAuthInput,
  value,
  index,
}) => (
  <TextField
    name={name}
    label={label}
    autoComplete={autoComplete}
    authinputvalue={value}
    type={type}
    index={index}
    onChange={(event) => handleAuthInput(event, index)}
    variant="outlined"
    margin="normal"
    required
    fullWidth
  />
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  handleAuthInput: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

// https://fr.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
