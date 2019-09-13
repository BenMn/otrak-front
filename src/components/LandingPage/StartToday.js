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

const StartToday = ({ open, viewModal, handleOpen }) => (
  <>
    <StartNowGrid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <StartNowIcon />
      <StartNowTitle variant="h3">Start Today</StartNowTitle>
      {/* REGISTER */}
      <Button variant="contained" color="primary" onClick={(event) => handleOpen(event)}>
        Keep up to date my favorite shows
      </Button>
      {open === true && <LogFormsModal viewModal={viewModal} />}
      <Typography>Don't be afraid, it's free !</Typography>
    </StartNowGrid>
  </>
);

StartToday.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func.isRequired,
  viewModal: PropTypes.string,
};

StartToday.defaultProps = {
  open: false,
  viewModal: '',
};

export default StartToday;
