/* eslint-disable react/prop-types */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import {
  Grid,
  Box,
} from '@material-ui/core';

// Material UI Custom Components
import {
  DashboardHeaderAvatar,
  DashboardHeaderUsername,
  DashboardUsernameIcon,
  DashboardUsernameInput,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';


const UserInfos = ({
  handleUsernameInput,
  handleUsernameInputSubmit,
  userInfos,
}) => (
  <Grid
    container
    justify="center"
    align="center"
    direction="column"
  >

    {/* User avatar */}
    <Grid item>
      <DashboardHeaderAvatar alt="User Avatar" id="user-avatar">
        <Box component="div" id="user-avatar-gradient" />
      </DashboardHeaderAvatar>
    </Grid>

    {/* Avatar input handler */}
    {/* <input type="file" onChange={(event) => avatarUploadHandler(event)} /> */}

    {/* Username */}
    <Grid item>
      <Box component="div" mb={3}>
        <Grid container justify="center" align="center" spacing={1}>
          <Grid item>
            <DashboardHeaderUsername variant="h5">

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <DashboardUsernameIcon />
                </Grid>
                <Grid item>
                  {/* Change username handler */}
                  <DashboardUsernameInput
                    id="input-with-icon-grid"
                    value={userInfos.username}
                    margin="dense"
                    inputProps={{ 'aria-label': 'bare' }}
                    onChange={(event) => handleUsernameInput(event)}
                    name="username"
                    color="secondary"
                    onBlur={(event) => handleUsernameInputSubmit(event, userInfos.id)}
                  />
                </Grid>
              </Grid>

            </DashboardHeaderUsername>
          </Grid>
        </Grid>
      </Box>
    </Grid>

  </Grid>
);

UserInfos.propTypes = {
  handleUsernameInput: PropTypes.func.isRequired,
  handleUsernameInputSubmit: PropTypes.func.isRequired,
  userInfos: PropTypes.object.isRequired,
  // avatarUploadHandler: PropTypes.func.isRequired,
};

export default UserInfos;
