import React from 'react';
import {
  Typography,
  Grid,
} from '@material-ui/core';

import {
  LandingPageContainer,
  ManageShowsIconSettings,
  ManageShowsIconStar,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

const ManageShows = () => (
  <Grid container alignItems="center">
    <Grid item lg={7}>

      <LandingPageContainer>

        <span className="title-icon--left">
          <ManageShowsIconSettings />
          <Typography variant="h3" component="h3" align="left">Manage easley your shows</Typography>
        </span>

        <Typography align="left">List the shows you've seen, the ones you wanna see</Typography>
        <Typography align="left">Filter by tag, season, episodes</Typography>

        <span className="title-icon--left">
          <ManageShowsIconStar />
          <Typography>
            Retrive your favs of all times
          </Typography>
        </span>

      </LandingPageContainer>
    </Grid>

    <Grid item lg={5}>
      <img src="src/styles/assets/images/screenshot.png" alt="ballekkkkk" className="ScreenDemo--right" />
    </Grid>

  </Grid>
);


export default ManageShows;
