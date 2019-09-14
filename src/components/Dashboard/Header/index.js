/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from '@material-ui/core';

import {
  DashboardHeaderConainer,
} from 'src/styles/materialUi/materialUiStyles/Dashboard';

import UserParams from './UserParams';
import UserInfos from './UserInfos';
import ConfigButtons from './ConfigButtons';

import '../Dashboard.scss';

const Header = ({
  avatarUploadHandler,
  handleAuthInput,
  handleAuthInputSubmit,
  userAuthInfos,
  handleNewUsername,
  handleOpen,
}) => (
  <div id="Header">

    <DashboardHeaderConainer>

      <Grid container align="center" spacing={5}>

        <Grid item lg={4} md={4} xs={12} align="start">
          <UserParams />
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <UserInfos
            avatarUploadHandler={avatarUploadHandler}
            handleAuthInput={handleAuthInput}
            handleAuthInputSubmit={handleAuthInputSubmit}
            userAuthInfos={userAuthInfos}
            handleNewUsername={handleNewUsername}
          />
        </Grid>

        <Grid item lg={4} md={4} xs={12} align="end">
          <ConfigButtons handleOpen={handleOpen} />
        </Grid>

      </Grid>

    </DashboardHeaderConainer>

  </div>
);

Header.propTypes = {
  avatarUploadHandler: PropTypes.func.isRequired,
  handleAuthInput: PropTypes.func.isRequired,
  handleAuthInputSubmit: PropTypes.func.isRequired,
  handleNewUsername: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default Header;