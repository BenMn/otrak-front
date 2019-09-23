/* eslint-disable react/prop-types */
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

import { showStatusSwitch } from 'src/utils';

import './show.scss';

const HeadScreen = ({
  showDetail,
  addToWatchList,
  userAuthToken,
  userInfos,
  isLogged,
  handleOpen,
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
                <ShowHeadTitle variant="h3">{showDetail.name}</ShowHeadTitle>
                <Grid container spacing={2}>
                  <Grid item>
                    <ListItemText primary={`${showDetail.nbSeasons} seasons`} />
                  </Grid>
                  <Grid item>
                    <ListItemText primary="•" />
                  </Grid>
                  <Grid item>
                    <ListItemText primary={`${showDetail.nbEpisodes} Episodes`} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                {isLogged === false ? (
                  <Button variant="contained" color="secondary" onClick={() => handleOpen('up')}>JOIN US TO ADD THIS SHOW</Button>
                ) : (
                  <Button variant="contained" color="secondary" onClick={() => addToWatchList(showDetail.id_tvmaze, userAuthToken, userInfos.id)}>ADD TO MY WATCH LIST</Button>
                )}
              </Grid>

              <Grid item>
                <DetailShowGroupList component="nav" aria-label="secondary mailbox folders">

                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Genre" />
                    <ListItemText align="right" primary={showDetail.genre.length < 1 ? 'Not specified' : `${showDetail.genre.name}`} />
                  </Grid>

                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Rating" />
                    <ListItemText align="right" primary={showDetail.rating === null ? 'Not rated yet' : `${showDetail.rating}/10`} />
                  </Grid>

                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Status" />
                    <ListItemText align="right" primary={showStatusSwitch(showDetail.status)} />
                  </Grid>

                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Network" />
                    <ListItemText align="right" primary={showDetail.network === (null || undefined) ? 'Not specified' : `${showDetail.network}`} />
                  </Grid>

                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Original language" />
                    <ListItemText align="right" primary={showDetail.language} />
                  </Grid>

                  <Grid container justify="space-between" className="HeadScreen-infos-border">
                    <ListItemText primary="Premiered" />
                    <ListItemText align="right" primary={showDetail.premiered === null ? 'Not specified' : `${showDetail.premiered}`} />
                  </Grid>

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
  addToWatchList: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  userAuthToken: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

HeadScreen.defaultProps = {

};

export default HeadScreen;
