/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */

// Import NPM
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

// Local imports : utils function
import { showStatusSwitch } from 'src/utils';

// CSS Local Styling
import './show.scss';

const HeadScreen = ({
  handleOpen,
  isLogged,
  userInfos,
  showDetail,
  startFollowingShow,
}) => {
  if (Object.keys(showDetail).length > 0) {
    return (
      <>
        <Grid
          container
          justify="space-evenly"
          spacing={3}
        >
          {/* Left Side (poster) */}
          <Grid item lg={4}>
            <ShowHeadPoster
              className="poster-img"
              title="poster"
              image={showDetail.poster === '' ? '../../src/styles/assets/images/notAvailable/no-image.jpeg' : showDetail.poster}
            />
          </Grid>

          {/* Right Side (title + details) */}
          <Grid item lg={8}>
            <Grid
              container
              direction="column"
              align="flex-start"
              spacing={4}
              justify="center"
              wrap="nowrap"
            >
              <Grid item>

                {/* Show Title */}
                <ShowHeadTitle variant="h3">{showDetail.name}</ShowHeadTitle>
                <Grid container spacing={2}>

                  {/* Seasons */}
                  <Grid item>
                    <ListItemText primary={`${showDetail.nbSeasons} seasons`} />
                  </Grid>

                  <Grid item>
                    <ListItemText primary="•" />
                  </Grid>

                  {/* Episodes */}
                  <Grid item>
                    <ListItemText primary={`${showDetail.nbEpisodes} Episodes`} />
                  </Grid>
                </Grid>
              </Grid>

              {/* Add to list button (Register if not logged) */}
              <Grid item>
                {isLogged === false ? (
                  <Button variant="contained" color="secondary" onClick={() => handleOpen('up')}>JOIN US TO ADD THIS SHOW</Button>
                ) : (
                  <Button variant="contained" color="secondary" onClick={() => startFollowingShow(showDetail.id_tvmaze, userInfos.id)}>ADD TO MY WATCH LIST</Button>
                )}
              </Grid>

              {/* Show details */}
              <Grid item>
                <DetailShowGroupList component="nav" aria-label="secondary mailbox folders">

                  {/* Genre */}
                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Genre" />
                    <ListItemText align="right" primary={showDetail.genre.length < 1 ? 'Not specified' : `${showDetail.genre.map((currentGenre) => currentGenre.name)}`} />
                  </Grid>

                  {/* Rating */}
                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Rating" />
                    <ListItemText align="right" primary={showDetail.rating === null ? 'Not rated yet' : `${showDetail.rating}/10`} />
                  </Grid>

                  {/* Status */}
                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Status" />
                    <ListItemText align="right" primary={showStatusSwitch(showDetail.status)} />
                  </Grid>

                  {/* Network */}
                  { showDetail.createdAt === undefined ? (
                    <Grid container justify="space-between" className="HeadScreen-infos-border">
                      <ListItemText primary="Network" />
                      <ListItemText align="right" primary={showDetail.network === (null || undefined) ? 'Not specified' : `${showDetail.network}`} />
                    </Grid>
                  ) : (
                    <Grid container justify="space-between" className="HeadScreen-infos-border">
                      <ListItemText primary="Network" />
                      <ListItemText align="right" primary={showDetail.network.name === null ? 'Not specified' : `${showDetail.network.name}`} />
                    </Grid>
                  )}

                  {/* Language */}
                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Original language" />
                    <ListItemText align="right" primary={showDetail.language} />
                  </Grid>

                  {/* Premiered */}
                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Premiered" />
                    <ListItemText align="right" primary={showDetail.premiered === null ? 'Not specified' : `${showDetail.premiered}`} />
                  </Grid>

                  {/* Episode duration */}
                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Episode duration" />
                    <ListItemText align="right" primary={`${showDetail.runtime} min`} />
                  </Grid>

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
  startFollowingShow: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

HeadScreen.defaultProps = {

};

export default HeadScreen;
