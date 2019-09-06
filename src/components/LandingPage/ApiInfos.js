import React from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import {
  LandingPageContainer,
  ApiInfosIconMovie1,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';
// import './LandingPage.scss';

const ApiInfos = () => (
  <Grid container alignItems="center">

    <Grid item lg={5}>
      <img src="src/styles/assets/images/screenshot.png" alt="ballekkkkk" className="ScreenDemo--left" />
    </Grid>

    <Grid item lg={7}>
      <LandingPageContainer>

        <span className="title-icon--right">
          <ApiInfosIconMovie1 />
          <Typography variant="h3" component="h3" align="right">Your choice is ours !</Typography>
        </span>

        <Typography align="right">We're using an external API with huge Database.</Typography>
        <Typography align="right">All shows, anime included.</Typography>

      </LandingPageContainer>
    </Grid>

  </Grid>
);


export default ApiInfos;
