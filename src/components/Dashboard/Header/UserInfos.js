/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Box,
} from '@material-ui/core';

import {
  DashboardHeaderAvatar,
  DashboardHeaderUsername,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

import UsernameField from './UsernameField';

// const UserInfos = ({ avatarUploadHandler, userAvatar }) => (
// eslint-disable-next-line react/prop-types
const UserInfos = ({
  userAuthInfos,
  handleAuthInput,
  handleAuthInputSubmit,
  handleNewUsername,
  userInfos,
}) => {
  const allowed = [0];

  const userAuthInfosFiltred = Object.keys(userAuthInfos)
    // eslint-disable-next-line react/prop-types
    .filter((fieldName) => allowed.includes(userAuthInfos[fieldName].index))
    .reduce((newObject, key) => {
      newObject[key] = userAuthInfos[key];
      return newObject;
    }, {});

  console.log(userInfos, '<<<<<<<<<<<<<<<<< USER INFOS');

  return (
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

      {/* <input type="file" onChange={(event) => avatarUploadHandler(event)} /> */}

      <Grid item>
        <Box component="div" mb={3}>
          <Grid container justify="center" align="center" spacing={1}>
            <Grid item>
              <DashboardHeaderUsername variant="h5">

                <form onSubmit={(event) => handleAuthInputSubmit(event)} id="form-username">
                  {Object.values(userAuthInfosFiltred).map((field) => (
                    <UsernameField
                      key={field.name}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      handleAuthInput={handleAuthInput}
                      value={field[field.name]}
                      id={`${field.name}-forgot-password`}
                      handleNewUsername={handleNewUsername}
                    />
                  ))}
                </form>

              </DashboardHeaderUsername>
            </Grid>
          </Grid>
        </Box>
      </Grid>

    </Grid>
  );
};

UserInfos.propTypes = {
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
  handleNewUsername: PropTypes.func.isRequired,
  userInfos: PropTypes.object.isRequired,
  // avatarUploadHandler: PropTypes.func.isRequired,
};

export default UserInfos;
