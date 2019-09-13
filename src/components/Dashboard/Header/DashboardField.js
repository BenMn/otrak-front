import React from 'react';
import PropTypes from 'prop-types';

import { Grid, TextField } from '@material-ui/core';

import {
  DashboardUsernameIcon,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

const Field = ({
  name,
  autoComplete,
  type,
  handleAuthInput,
  value,
  index,
  handleNewUsername,
}) => (
  <Grid container spacing={1} alignItems="flex-end">
    <Grid item>
      <DashboardUsernameIcon />
    </Grid>
    <Grid item>
      <TextField
        id="input-with-icon-grid"
        defaultValue={value}
        margin="normal"
        inputProps={{ 'aria-label': 'bare' }}
        onChange={(event) => handleAuthInput(event, index)}
        name={name}
        autoComplete={autoComplete}
        authinputvalue={value}
        type={type}
        index={index}
        color="secondary"
        onBlur={(event) => handleNewUsername(event)}
      />
    </Grid>
  </Grid>
);

Field.propTypes = {
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  handleAuthInput: PropTypes.func.isRequired,
  handleNewUsername: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

// https://fr.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
