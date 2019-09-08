import React from 'react';
import {
  Typography,
  Button,
} from '@material-ui/core';

import {
  StartNowGrid,
  StartNowIcon,
  StartNowTitle,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

// import './LandingPage.scss';

const StartToday = () => (
  <>
    <StartNowGrid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <StartNowIcon />
      <StartNowTitle variant="h3">Start Today</StartNowTitle>
      <Button variant="contained" color="primary">
        Create an account
      </Button>
      <Typography>Don't be afraid, it's free !</Typography>
    </StartNowGrid>
  </>
);


export default StartToday;
