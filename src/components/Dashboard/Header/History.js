/* eslint-disable max-len */
// import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Local Import
import Loader from 'src/components/Loader';

// Material UI Components
import {
  Grid,
  Typography,
} from '@material-ui/core';

// Material UI custom Components
import {
  LogFormModalPaper,
} from 'src/styles/materialUi/materialUiStyles/LogForms';

import {
  DashboardHistoryContainer,
  DashboardHistoryIcon,
  DashboardHistoryShowSubtitle,
  DashboardHistoryListContainer,
  DashboardHistoryDeleteIcon,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

// CSS Local Styling
import 'src/components/LogForms/LogForms.scss';

const History = ({ userFollowings, handleDeleteHistoryShow, updatedHistoryList }) => {
  if (updatedHistoryList.length === 0) {
    // eslint-disable-next-line no-param-reassign
    updatedHistoryList = userFollowings;
  }

  if (Object.keys(updatedHistoryList).length > 1) {
    return (
      <LogFormModalPaper id="History">
        <DashboardHistoryContainer component="main">
          <Grid
            container
            direction="column"
            spacing={4}
          >
            {/* Modal Title */}
            <Grid item>
              <Grid
                container
                alignItems="flex-end"
                justify="space-between"
              >
                <Grid item>
                  <Typography component="h3" variant="h3" color="primary">
                    History
                  </Typography>
                </Grid>
                <Grid item>
                  <DashboardHistoryShowSubtitle>
                    ({updatedHistoryList.length})
                  </DashboardHistoryShowSubtitle>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <DashboardHistoryIcon />
            </Grid>

            {/* User History List */}
            <DashboardHistoryListContainer id="historyContainer">

              {/* single show */}
              {updatedHistoryList.map((currentShow) => (
                (currentShow.latestFollowSeason || currentShow.latestFollowEpisode) !== 0 && (
                <Grid item key={currentShow.id} id={currentShow.id}>
                  <Grid
                    container
                    spacing={2}
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item lg={11}>
                      <Typography color="primary" variant="h6">{currentShow.tvShow.name}</Typography>
                    </Grid>
                    <Grid item lg={1} onClick={() => handleDeleteHistoryShow(currentShow.id)}>
                      <DashboardHistoryDeleteIcon color="secondary" />
                    </Grid>
                  </Grid>
                  <DashboardHistoryShowSubtitle color="primary" variant="subtitle1">
                    Season {currentShow.latestFollowSeason} - Episode {currentShow.latestFollowEpisode}
                  </DashboardHistoryShowSubtitle>
                </Grid>
                )
              ))}

            </DashboardHistoryListContainer>

          </Grid>
        </DashboardHistoryContainer>
      </LogFormModalPaper>
    );
  }
  return (
    <Loader />
  );
};

History.propTypes = {
  userFollowings: PropTypes.array,
  updatedHistoryList: PropTypes.array.isRequired,
  handleDeleteHistoryShow: PropTypes.func.isRequired,
};

History.defaultProps = {
  userFollowings: [],
};

export default History;