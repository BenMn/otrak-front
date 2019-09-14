/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import PropTypes from 'prop-types';

// Import material UI components
import {
  Button,
  Grid,
  ListItemText,
} from '@material-ui/core';

// Import material UI custom components
import {
  ShowHeadPoster,
  ShowHeadTitle,
  DetailShowGroupList,
} from 'src/styles/materialUi/materialUiStyles/Show';


const HeadScreen = ({ showDetail }) => (
  <>
    {console.log(showDetail)}

    <Grid
      container
      justify="space-evenly"
    >
      {/* Left Side (poster) */}
      <Grid item>
        <ShowHeadPoster className="poster-img" title="poster" image={showDetail.poster} />
      </Grid>

      {/* Right Side (title + details) */}
      <Grid item>
        <Grid
          container
          direction="column"
          align="flex-start"
          spacing={4}
          justify="center"
        >
          <Grid item>
            <ShowHeadTitle variant="h3">{showDetail.name}</ShowHeadTitle>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">ADD TO MY WATCH LIST</Button>
          </Grid>
          <Grid item>
            <DetailShowGroupList component="nav" aria-label="secondary mailbox folders">
              <ListItemText primary="Genres: " />
              <ListItemText primary={showDetail.rating == null ? 'Rating: Not rated yet' : `Rating: ${showDetail.rating}/10`} />
              <ListItemText primary={showDetail.status === 0 ? 'Status: Running' : 'Status: Ended'} />
              <ListItemText primary="Network: " />
              <ListItemText primary={`Original language: ${showDetail.language}`} />
              <ListItemText primary="Nb seasons: " />
              <ListItemText primary="Nb episodes: " />
              <ListItemText primary={`Episode duration: ${showDetail.runtime} min`} />
            </DetailShowGroupList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
);

HeadScreen.propTypes = {
  showDetail: PropTypes.object.isRequired,
};

HeadScreen.defaultProps = {

};

export default HeadScreen;
