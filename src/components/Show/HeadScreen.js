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


const HeadScreen = ({ showDetail, addToWatchList }) => {
  if (Object.keys(showDetail).length > 0) {
    return (
      <>
        {console.log(showDetail)}

        <Grid
          container
          justify="space-evenly"
        >
          {/* Left Side (poster) */}
          <Grid item>
            <ShowHeadPoster
              className="poster-img"
              title="poster"
              image={showDetail.poster === '' ? '../../src/styles/assets/images/notAvailable/no-image.jpeg' : showDetail.poster}
            />
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
                <Button variant="contained" color="secondary" onClick={addToWatchList}>ADD TO MY WATCH LIST</Button>
              </Grid>

              <Grid item>
                <DetailShowGroupList component="nav" aria-label="secondary mailbox folders">
                  <ListItemText primary={showDetail.genre.length < 1 ? 'Genre: not specified' : `Genre: ${showDetail.genre}`} />
                  <ListItemText primary={showDetail.rating == null ? 'Rating: Not rated yet' : `Rating: ${showDetail.rating}/10`} />
                  <ListItemText primary={showDetail.status === '' ? 'Status: not specified' : `Status: ${showDetail.status}`} />
                  <ListItemText primary="Network: " />
                  <ListItemText primary={`Original language: ${showDetail.language}`} />
                  <ListItemText primary={`Premiered: ${showDetail.premiered}`} />
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
  }
  return (
    <div>Loading</div>
  );
};
HeadScreen.propTypes = {
  showDetail: PropTypes.object.isRequired,
  addToWatchList: PropTypes.func.isRequired,
};

HeadScreen.defaultProps = {

};

export default HeadScreen;
