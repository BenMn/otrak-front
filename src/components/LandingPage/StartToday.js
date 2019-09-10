import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Button,
} from '@material-ui/core';

import {
  StartNowGrid,
  StartNowIcon,
  StartNowTitle,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

import LogFormsModal from 'src/Modal';

const StartToday = ({ open, handleOpen }) => (
  <>
    <StartNowGrid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <StartNowIcon />
      <StartNowTitle variant="h3">Start Today</StartNowTitle>
      <Button variant="contained" color="primary" onClick={(event) => handleOpen(event)}>
        Keep up to date my favorite shows
      </Button>
      {open === true && <LogFormsModal />}
      <Typography>Don't be afraid, it's free !</Typography>
    </StartNowGrid>
  </>
);

StartToday.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
};

StartToday.defaultProps = {
  open: false,
};

export default StartToday;
