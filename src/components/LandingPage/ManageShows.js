// Import NPM
import React from 'react';
import {
  Typography,
  Grid,
} from '@material-ui/core';

// Material UI custom Componenets
import {
  LandingPageContainer,
  ManageShowsIconSettings,
  ManageShowsIconStar,
} from 'src/styles/materialUi/materialUiStyles/LandingPage';

// Images
import screendemo2 from './images/screendemo2.png';


const ManageShows = () => (
  <Grid container alignItems="center">
    <Grid item lg={7}>

      <LandingPageContainer>

        {/* Title  */}
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

    {/* Screenshot */}
    <Grid item lg={5}>
      <img src={screendemo2} alt="ballekkkkk" className="ScreenDemo ScreenDemo--right" />
    </Grid>

  </Grid>
);


export default ManageShows;
