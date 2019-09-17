// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// MAterial UI Componenets
import {
  Typography,
  Button,
} from '@material-ui/core';

// MAterial UI custom Componenets
import {
  StartNowGrid,
  StartNowIcon,
  StartNowTitle,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

const StartToday = ({ handleOpen }) => (
  <>
    <StartNowGrid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <StartNowIcon />
      <StartNowTitle variant="h3">Start Today</StartNowTitle>
      <Button variant="contained" color="primary" onClick={() => handleOpen('up')}>
        Create your account
      </Button>
      <Typography>Don't be afraid, it's free !</Typography>
    </StartNowGrid>
  </>
);

StartToday.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default StartToday;
