// import NPM
import React from 'react';
import PropTypes from 'prop-types';

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
  DashboardHistoryShowTitle,
  DashboardHistoryShowSubtitle,
  DashboardHistoryListContainer,
  DashboardHistoryDeleteIcon,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

// Icons

import 'src/components/LogForms/LogForms.scss';

const History = ({ trendingList, handleDeleteHistoryShow, updatedHistoryList }) => {
  if (updatedHistoryList.length === 0) {
    // eslint-disable-next-line no-param-reassign
    updatedHistoryList = trendingList;
  }
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
              <Grid item key={currentShow.id_tvmaze} id={currentShow.id_tvmaze}>
                <Grid
                  container
                  spacing={2}
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <DashboardHistoryShowTitle color="primary" variant="h6">{currentShow.name}</DashboardHistoryShowTitle>
                  </Grid>
                  <Grid item onClick={() => handleDeleteHistoryShow(currentShow.id_tvmaze)}>
                    <DashboardHistoryDeleteIcon color="secondary" />
                  </Grid>
                </Grid>
                <DashboardHistoryShowSubtitle color="primary" variant="subtitle1">Season {currentShow.runtime} - Episode {currentShow.id_tvmaze}</DashboardHistoryShowSubtitle>

              </Grid>
            ))}

          </DashboardHistoryListContainer>

        </Grid>
      </DashboardHistoryContainer>
    </LogFormModalPaper>
  );
};

History.propTypes = {
  trendingList: PropTypes.array.isRequired,
  updatedHistoryList: PropTypes.array.isRequired,
  handleDeleteHistoryShow: PropTypes.func.isRequired,
};

export default History;
