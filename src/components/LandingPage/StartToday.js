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

// Authentification modals
import LogFormsModal from 'src/containers/LogForms';

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
      <Button variant="contained" color="primary" onClick={() => handleOpen('up')}>
        Create your account
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
