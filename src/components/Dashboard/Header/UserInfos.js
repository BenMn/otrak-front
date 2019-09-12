import React from 'react';

import {
  Grid,
  Box,
} from '@material-ui/core';

import {
  DashboardHeaderAvatar,
  DashboardHeaderAvatarIcon,
  DashboardHeaderUsername,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';


const UserInfos = () => (
  <Grid
    container
    justify="center"
    align="center"
    direction="column"
  >

    <Grid item>
      <DashboardHeaderAvatar alt="User Avatar" id="user-avatar">
        <Box component="div" id="user-avatar-gradient" />
      </DashboardHeaderAvatar>
    </Grid>

    <Grid item>
      <Box component="div" mt={2}>
        <Grid container justify="center" align="center" spacing={1}>
          <Grid item>
            <DashboardHeaderUsername variant="h5">
              jackiMimiiidu56
            </DashboardHeaderUsername>
          </Grid>
          <Grid item>
            <DashboardHeaderAvatarIcon />
          </Grid>
        </Grid>
      </Box>
    </Grid>

  </Grid>
);

export default UserInfos;
