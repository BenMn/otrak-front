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


const HeadScreen = ({
  showDetail,
  addToWatchList,
  userAuthToken,
  userInfos,
}) => {
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
                <Button variant="contained" color="secondary" onClick={() => addToWatchList(showDetail.id_tvmaze, userAuthToken, userInfos.id)}>ADD TO MY WATCH LIST</Button>
              </Grid>

              <Grid item>
                <DetailShowGroupList component="nav" aria-label="secondary mailbox folders">
                  <ListItemText primary={showDetail.genre.length < 1 ? 'Genre: Not specified' : `Genre: ${showDetail.genre}`} />
                  <ListItemText primary={showDetail.rating === 0 ? 'Rating: Not rated yet' : `Rating: ${showDetail.rating}/10`} />
                  <ListItemText primary={showDetail.status === null ? 'Status: Not specified' : ''} />
                  <ListItemText primary={showDetail.status === 0 ? 'Status: In development' : ''} />
                  <ListItemText primary={showDetail.status === 1 ? 'Status: Running' : ''} />
                  <ListItemText primary={showDetail.status === 2 ? 'Status: Ended' : ''} />
                  <ListItemText primary={showDetail.network === null ? 'Network: Not specified' : `Network: ${showDetail.network}`} />
                  <ListItemText primary={`Original language: ${showDetail.language}`} />
                  <ListItemText primary={showDetail.premiered === null ? 'Premiered: Not specified' : `Premiered: ${showDetail.premiered}`} />
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
  userAuthToken: PropTypes.string.isRequired,
};

HeadScreen.defaultProps = {

};

export default HeadScreen;
