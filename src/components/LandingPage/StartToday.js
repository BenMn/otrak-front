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

import LogFormsModal from 'src/containers/LogForms';
// import './LandingPage.scss';

class StartToday extends React.Component {
  handleButtonClick = (event) => {
    event.persist();
    const viewName = 'Sign up';
    const { handleOpen } = this.props;
    handleOpen(viewName);
  }

  render() {
    const { open, viewModal } = this.props;
    return (
      <>
        <StartNowGrid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <StartNowIcon />
          <StartNowTitle variant="h3">Start Today</StartNowTitle>
          <Button variant="contained" color="primary" onClick={this.handleButtonClick}>
            Create an account
          </Button>
          {open === true && <LogFormsModal viewModal={viewModal} />}
          <Typography>Don't be afraid, it's free !</Typography>
        </StartNowGrid>
      </>
    );
  }
}

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
